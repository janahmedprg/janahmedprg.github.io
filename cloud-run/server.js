const http = require("http");
const crypto = require("crypto");
const { Firestore } = require("@google-cloud/firestore");

const RUNPOD_ENDPOINT =
  process.env.RUNPOD_ENDPOINT || "https://api.runpod.ai/v2/jev8kihe4yxycu";
const configuredPromptLength = Number(process.env.MAX_PROMPT_LENGTH || 100);
const MAX_PROMPT_LENGTH =
  Number.isFinite(configuredPromptLength) && configuredPromptLength > 0
    ? configuredPromptLength
    : 100;
const configuredPromptLimitPerIp = Number(
  process.env.MAX_PROMPTS_PER_IP || 5,
);
const MAX_PROMPTS_PER_IP =
  Number.isFinite(configuredPromptLimitPerIp) && configuredPromptLimitPerIp > 0
    ? configuredPromptLimitPerIp
    : 5;
const configuredPromptLimitWindowMs = Number(
  process.env.PROMPT_LIMIT_WINDOW_MS || 7 * 24 * 60 * 60 * 1000,
);
const PROMPT_LIMIT_WINDOW_MS =
  Number.isFinite(configuredPromptLimitWindowMs) &&
  configuredPromptLimitWindowMs > 0
    ? configuredPromptLimitWindowMs
    : 7 * 24 * 60 * 60 * 1000;
const PORT = Number(process.env.PORT || 8080);
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGIN || "*")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
const FIRESTORE_COLLECTION =
  process.env.FIRESTORE_COLLECTION || "runpodPromptLimits";
const IP_HASH_SALT =
  process.env.IP_HASH_SALT || "personal-web-runpod-proxy-default-salt";
const firestoreOptions = {};

if (process.env.FIRESTORE_DATABASE_ID) {
  firestoreOptions.databaseId = process.env.FIRESTORE_DATABASE_ID;
}

const firestore = new Firestore(firestoreOptions);
const END_OF_TEXT_TOKEN_PATTERN = /<\|endoftext\|>/g;

const cleanModelText = (text) => text.replace(END_OF_TEXT_TOKEN_PATTERN, "").trim();

const getRunpodOutputText = (output) => {
  if (typeof output === "string") return cleanModelText(output);
  if (!output) return "";
  if (typeof output.text === "string") return cleanModelText(output.text);
  if (typeof output.response === "string") return cleanModelText(output.response);
  if (typeof output.generated_text === "string") {
    return cleanModelText(output.generated_text);
  }
  if (Array.isArray(output)) {
    return cleanModelText(output.map(getRunpodOutputText).join("\n"));
  }
  return cleanModelText(JSON.stringify(output, null, 2));
};

const logRunpodEvent = (event, details) => {
  console.log(
    JSON.stringify({
      event,
      service: "runpod-proxy",
      timestamp: new Date().toISOString(),
      ...details,
    }),
  );
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

const getClientIp = (req) => {
  const forwardedFor = String(req.headers["x-forwarded-for"] || "")
    .split(",")[0]
    .trim();

  return forwardedFor || req.socket.remoteAddress || "unknown";
};

const getIpHash = (ip) =>
  crypto.createHash("sha256").update(`${IP_HASH_SALT}:${ip}`).digest("hex");

const getPromptLimitStatus = async (ip) => {
  const now = Date.now();
  const docRef = firestore.collection(FIRESTORE_COLLECTION).doc(getIpHash(ip));
  const snapshot = await docRef.get();
  const data = snapshot.exists ? snapshot.data() : null;
  const resetAt = typeof data?.resetAtMs === "number" ? data.resetAtMs : 0;
  const count = typeof data?.count === "number" ? data.count : 0;

  if (!snapshot.exists || now > resetAt) {
    return {
      allowed: true,
      count: 0,
      resetAt: now + PROMPT_LIMIT_WINDOW_MS,
    };
  }

  return {
    allowed: count < MAX_PROMPTS_PER_IP,
    count,
    resetAt,
  };
};

const recordPromptUse = async (ip) => {
  const now = Date.now();
  const docRef = firestore.collection(FIRESTORE_COLLECTION).doc(getIpHash(ip));

  return firestore.runTransaction(async (transaction) => {
    const snapshot = await transaction.get(docRef);
    const data = snapshot.exists ? snapshot.data() : null;
    const existingResetAt =
      typeof data?.resetAtMs === "number" ? data.resetAtMs : 0;
    const existingCount = typeof data?.count === "number" ? data.count : 0;

    if (!snapshot.exists || now > existingResetAt) {
      const resetAt = now + PROMPT_LIMIT_WINDOW_MS;

      transaction.set(docRef, {
        count: 1,
        resetAtMs: resetAt,
        updatedAtMs: now,
      });

      return {
        allowed: true,
        count: 1,
        resetAt,
      };
    }

    if (existingCount >= MAX_PROMPTS_PER_IP) {
      return {
        allowed: false,
        count: existingCount,
        resetAt: existingResetAt,
      };
    }

    transaction.update(docRef, {
      count: existingCount + 1,
      updatedAtMs: now,
    });

    return {
      allowed: true,
      count: existingCount + 1,
      resetAt: existingResetAt,
    };
  });
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
        maxPromptLength: MAX_PROMPT_LENGTH,
      });
    }

    const clientIp = getClientIp(req);
    const promptLimitStatus = await getPromptLimitStatus(clientIp);

    if (!promptLimitStatus.allowed) {
      const retryAfterSeconds = Math.max(
        1,
        Math.ceil((promptLimitStatus.resetAt - Date.now()) / 1000),
      );

      res.setHeader("Retry-After", String(retryAfterSeconds));
      return sendJson(req, res, 429, {
        error: `Prompt limit reached. Try again after ${new Date(
          promptLimitStatus.resetAt,
        ).toISOString()}.`,
        maxPromptsPerIp: MAX_PROMPTS_PER_IP,
        resetAt: new Date(promptLimitStatus.resetAt).toISOString(),
      });
    }

    logRunpodEvent("runpod_request", {
      method: "POST",
      path: "/run",
      prompt,
    });

    const response = await fetch(`${RUNPOD_ENDPOINT}/run`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ input: { prompt } }),
    });
    const data = await response.json();
    const outputText = getRunpodOutputText(data.output);

    logRunpodEvent("runpod_response", {
      method: "POST",
      path: "/run",
      httpStatus: response.status,
      runpodStatus: data.status,
      jobId: data.id,
      runpodOutput: data.output,
      outputText,
      error: data?.error,
    });

    if (!response.ok) {
      return sendJson(req, res, response.status, {
        error: data?.error || "Runpod rejected the prompt.",
      });
    }

    if (data.status === "COMPLETED") {
      await recordPromptUse(clientIp);

      return sendJson(req, res, 200, {
        status: data.status,
        text: outputText,
      });
    }

    if (!data.id) {
      return sendJson(req, res, 502, {
        error: "Runpod did not return a job id.",
      });
    }

    await recordPromptUse(clientIp);

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

    logRunpodEvent("runpod_request", {
      method: "GET",
      path: "/status",
      jobId,
    });

    const response = await fetch(`${RUNPOD_ENDPOINT}/status/${jobId}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    const data = await response.json();
    const outputText = getRunpodOutputText(data.output);

    logRunpodEvent("runpod_response", {
      method: "GET",
      path: "/status",
      httpStatus: response.status,
      runpodStatus: data.status,
      jobId,
      runpodOutput: data.output,
      outputText,
      error: data?.error,
    });

    if (!response.ok) {
      return sendJson(req, res, response.status, {
        error: data?.error || "Could not check Runpod job status.",
      });
    }

    if (data.status === "COMPLETED") {
      return sendJson(req, res, 200, {
        status: data.status,
        text: outputText || "The model finished, but did not return text.",
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
