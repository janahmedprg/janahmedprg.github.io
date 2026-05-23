const http = require("http");

const RUNPOD_ENDPOINT =
  process.env.RUNPOD_ENDPOINT || "https://api.runpod.ai/v2/jev8kihe4yxycu";
const MAX_PROMPT_LENGTH = Number(process.env.MAX_PROMPT_LENGTH || 1200);
const PORT = Number(process.env.PORT || 8080);
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGIN || "*")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const getRunpodOutputText = (output) => {
  if (typeof output === "string") return output;
  if (!output) return "";
  if (typeof output.text === "string") return output.text;
  if (typeof output.response === "string") return output.response;
  if (typeof output.generated_text === "string") return output.generated_text;
  if (Array.isArray(output)) {
    return output.map(getRunpodOutputText).join("\n").trim();
  }
  return JSON.stringify(output, null, 2);
};

const setCorsHeaders = (req, res) => {
  const requestOrigin = req.headers.origin;
  const allowedOrigin =
    ALLOWED_ORIGINS.includes("*") || !requestOrigin
      ? "*"
      : ALLOWED_ORIGINS.includes(requestOrigin)
        ? requestOrigin
        : ALLOWED_ORIGINS[0];

  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Vary", "Origin");
};

const sendJson = (req, res, statusCode, body) => {
  setCorsHeaders(req, res);
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
};

const readJsonBody = async (req) => {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
};

const handleRunpodChat = async (req, res, url) => {
  if (req.method === "OPTIONS") {
    setCorsHeaders(req, res);
    res.writeHead(204, {
      Allow: "GET, POST, OPTIONS",
    });
    return res.end();
  }

  const apiKey = process.env.RUNPOD_API_KEY;
  if (!apiKey) {
    return sendJson(req, res, 500, {
      error: "RUNPOD_API_KEY is not configured on the server.",
    });
  }

  if (req.method === "POST") {
    const body = await readJsonBody(req).catch(() => null);
    const prompt = String(body?.prompt || "").trim();

    if (!prompt) {
      return sendJson(req, res, 400, { error: "Prompt is required." });
    }

    if (prompt.length > MAX_PROMPT_LENGTH) {
      return sendJson(req, res, 400, {
        error: `Prompt must be ${MAX_PROMPT_LENGTH} characters or fewer.`,
      });
    }

    const response = await fetch(`${RUNPOD_ENDPOINT}/run`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ input: { prompt } }),
    });
    const data = await response.json();

    if (!response.ok) {
      return sendJson(req, res, response.status, {
        error: data?.error || "Runpod rejected the prompt.",
      });
    }

    if (data.status === "COMPLETED") {
      return sendJson(req, res, 200, {
        status: data.status,
        text: getRunpodOutputText(data.output),
      });
    }

    if (!data.id) {
      return sendJson(req, res, 502, {
        error: "Runpod did not return a job id.",
      });
    }

    return sendJson(req, res, 202, {
      jobId: data.id,
      status: data.status || "IN_QUEUE",
    });
  }

  if (req.method === "GET") {
    const jobId = String(url.searchParams.get("jobId") || "").trim();

    if (!jobId) {
      return sendJson(req, res, 400, { error: "jobId is required." });
    }

    const response = await fetch(`${RUNPOD_ENDPOINT}/status/${jobId}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    const data = await response.json();

    if (!response.ok) {
      return sendJson(req, res, response.status, {
        error: data?.error || "Could not check Runpod job status.",
      });
    }

    if (data.status === "COMPLETED") {
      return sendJson(req, res, 200, {
        status: data.status,
        text:
          getRunpodOutputText(data.output) ||
          "The model finished, but did not return text.",
      });
    }

    if (["FAILED", "CANCELLED", "TIMED_OUT"].includes(data.status)) {
      return sendJson(req, res, 502, {
        error: `Runpod job ${data.status.toLowerCase()}.`,
        status: data.status,
      });
    }

    return sendJson(req, res, 202, { status: data.status || "IN_PROGRESS" });
  }

  res.setHeader("Allow", "GET, POST, OPTIONS");
  return sendJson(req, res, 405, { error: "Method not allowed." });
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  try {
    if (url.pathname === "/healthz") {
      return sendJson(req, res, 200, { ok: true });
    }

    if (url.pathname === "/" || url.pathname === "/runpod-chat") {
      return await handleRunpodChat(req, res, url);
    }

    return sendJson(req, res, 404, { error: "Not found." });
  } catch (error) {
    return sendJson(req, res, 500, {
      error: error.message || "Could not reach Runpod.",
    });
  }
});

server.listen(PORT, () => {
  console.log(`Runpod proxy listening on port ${PORT}`);
});
