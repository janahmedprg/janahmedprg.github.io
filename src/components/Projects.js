import { useEffect, useMemo, useRef, useState } from "react";
import "../css/Projects.css";
import { ReactComponent as Dart } from "../img/dart.svg";
import { ReactComponent as Flutter } from "../img/flutter.svg";
import { ReactComponent as Gcp } from "../img/google-cloud.svg";
import { ReactComponent as Mongodb } from "../img/mongodb-icon.svg";
import { ReactComponent as Openai } from "../img/openai-icon.svg";
import { ReactComponent as ReactIco } from "../img/react.svg";
import { ReactComponent as Discord } from "../img/discord-icon.svg";
import { ReactComponent as Vercel } from "../img/vercel-icon.svg";
import devpost from "../img/devpost.png";
import web from "../img/web.png";
import holoflash from "../img/holoflash.mp4";
import learner from "../img/learnerai.mp4";
import kapperai from "../img/kapperai.mp4";
import adaai from "../img/adaai.mp4";
import udalice from "../img/udalice.mp4";
import calibron12 from "../img/calibron12.png";
import sudokusolver from "../img/sudokusolver.png";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: "llm-from-scratch",
    title: "LLM from Scratch",
    summary:
      "Educational implementation of a large language model built from the ground up.",
    about:
      "Built a from-scratch large language model project to understand the core pieces behind modern generative AI systems, including tokenization, transformer architecture, model training, and text generation.",
    skills: [
      { label: "Python" },
      { label: "PyTorch" },
      { label: "Transformers", Icon: Openai },
    ],
    media: { type: "chat" },
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/janahmedprg/llm-from-scratch",
        type: "github",
      },
    ],
  },
  {
    id: "holoflash",
    title: "HoloFlash",
    summary:
      "Turns handwritten notes and lecture recordings into personalized flashcards that can be studied in AR.",
    about:
      "Earned first prize for Best Use of AI in Education at HenHacks 2024 (University of Delaware). Created an app that turns handwritten notes and lecture recordings into personalized flashcards, viewable in AR using Microsoft HoloLens.",
    skills: [
      { label: "React", Icon: ReactIco },
      { label: "Google Cloud", Icon: Gcp },
      { label: "MongoDB", Icon: Mongodb },
    ],
    media: { type: "video", src: holoflash, alt: "HoloFlash demo video" },
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/janahmedprg/flashcards",
        type: "github",
      },
      {
        label: "Devpost",
        href: "https://devpost.com/software/holoflash",
        type: "devpost",
      },
    ],
  },
  {
    id: "learnerai",
    title: "learner.ai",
    summary:
      "Teacher feedback app that summarizes student responses and suggests instruction improvements.",
    about:
      "Created a mobile app for teachers to optimize their teaching style. The app allows teachers to create a questionnaire for students. It then generates a unique code that students use to answer the questionnaire. Using the OpenAI API, we summarize the results and provide advice on how teachers can optimize their teaching style.",
    skills: [
      { label: "React", Icon: ReactIco },
      { label: "OpenAI API", Icon: Openai },
      { label: "MongoDB", Icon: Mongodb },
    ],
    media: { type: "video", src: learner, alt: "learner.ai demo video" },
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/janahmedprg/learner.ai",
        type: "github",
      },
      {
        label: "Devpost",
        href: "https://devpost.com/software/learner-ai",
        type: "devpost",
      },
    ],
  },
  {
    id: "kapperai",
    title: "KapperAI",
    summary:
      "Top-8 PennApps project for hair-transplant visualization using machine learning.",
    about:
      "Placed top 8 overall hacks at PennApps 2023 (University of Pennsylvania) and won the Wolfram Research Award. Developed a mobile application that uses a machine learning model to transplant hair onto a user's selfie.",
    skills: [
      { label: "React", Icon: ReactIco },
      { label: "Google Cloud", Icon: Gcp },
    ],
    media: { type: "video", src: kapperai, alt: "KapperAI demo video" },
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/jma02/kapperAI-frontend",
        type: "github",
      },
      {
        label: "Devpost",
        href: "https://devpost.com/software/kapperai",
        type: "devpost",
      },
    ],
  },
  {
    id: "adaai",
    title: "Ada.ai",
    summary: "Award-winning CS tutoring mobile app powered by ChatGPT.",
    about:
      "Earned Best Educational Hack first prize at HenHacks 2023 (University of Delaware). Created a mobile application that leverages OpenAI's ChatGPT API to provide computer science tutoring.",
    skills: [
      { label: "Dart", Icon: Dart },
      { label: "Flutter", Icon: Flutter },
      { label: "OpenAI API", Icon: Openai },
    ],
    media: { type: "video", src: adaai, alt: "Ada.ai demo video" },
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/jma02/ada.ai",
        type: "github",
      },
      {
        label: "Devpost",
        href: "https://devpost.com/software/ada-ai",
        type: "devpost",
      },
    ],
  },
  {
    id: "calibron12",
    title: "Calibron 12 Puzzle Solver",
    summary:
      "C++ backtracking solver with a browser visualization that replays a condensed DFS trace.",
    about:
      "Built a C++ depth-first search solver with backtracking for the 56 x 56 Calibron 12 packing puzzle, then paired it with a static web visualization that replays a condensed search trace. The project shows both the solved arrangement and how the solver explores placements.",
    skills: [{ label: "C++" }, { label: "DFS" }, { label: "Backtracking" }],
    media: {
      type: "image",
      src: calibron12,
      alt: "Calibron 12 solver visualization",
    },
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/janahmedprg/calibron12",
        type: "github",
      },
      {
        label: "Website",
        href: "https://calibron12.vercel.app/",
        type: "website",
      },
    ],
  },
  {
    id: "sudokusolver",
    title: "Sudoku Solver",
    summary: "Backtracking-based Sudoku solver deployed as a live web app.",
    about:
      "Created a sudoku solver using a backtracking algorithm. The algorithm systematically searches for solutions by trying possible numbers and backtracking when it encounters a conflict. This approach ensures that the solver efficiently finds a solution to even the most challenging sudoku puzzles.",
    skills: [{ label: "Vercel", Icon: Vercel }, { label: "Backtracking" }],
    media: {
      type: "image",
      src: sudokusolver,
      alt: "Sudoku Solver screenshot",
    },
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/janahmedprg/sudoku_solver",
        type: "github",
      },
      {
        label: "Website",
        href: "https://sudoku-solver-janahmedprgs-projects.vercel.app/",
        type: "website",
      },
    ],
  },
  {
    id: "udalice",
    title: "UDAlice",
    summary:
      "Discord bot for automating class channel setup and role management.",
    about:
      "Developed a bot to handle and manage the UDMath Discord Server. The bot automates channel creation with appropriate permissions and assigns roles to students, allowing them to be added to their class group chats efficiently.",
    skills: [{ label: "discord.js", Icon: Discord }],
    media: { type: "video", src: udalice, alt: "UDAlice demo video" },
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/janahmedprg/UDAliceBot",
        type: "github",
      },
    ],
  },
];

const LLM_CHAT_ENDPOINT =
  process.env.REACT_APP_LLM_CHAT_ENDPOINT ||
  "https://personal-web-runpod-proxy-1034295779191.us-east1.run.app/runpod-chat";
const configuredPromptLimit = Number(
  process.env.REACT_APP_LLM_PROMPT_LIMIT || 100,
);
const LLM_PROMPT_LIMIT =
  Number.isFinite(configuredPromptLimit) && configuredPromptLimit > 0
    ? configuredPromptLimit
    : 100;

const cleanModelText = (text) => text.replace(/<\|endoftext\|>/g, "").trim();

const getFriendlyStatus = (status) => {
  if (!status) return "Thinking...";
  if (status === "IN_QUEUE") return "Waiting for the model...";
  if (status === "IN_PROGRESS") return "Thinking...";
  return "Checking the model...";
};

const LLMChatbot = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Ask the from-scratch model a short prompt.",
    },
  ]);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef(null);
  const charsRemaining = LLM_PROMPT_LIMIT - prompt.length;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isSending, status]);

  const handlePromptChange = (event) => {
    setPrompt(event.target.value.slice(0, LLM_PROMPT_LIMIT));
  };

  const handlePromptKeyDown = (event) => {
    if (event.key !== "Enter" || event.shiftKey) return;

    event.preventDefault();
    event.currentTarget.form?.requestSubmit();
  };

  const pollJob = async (jobId) => {
    for (let attempt = 0; attempt < 30; attempt += 1) {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch(
        `${LLM_CHAT_ENDPOINT}?jobId=${encodeURIComponent(jobId)}`,
      );
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.error || `Status request failed with ${response.status}`,
        );
      }

      setStatus(getFriendlyStatus(data.status));

      if (data.text) return cleanModelText(data.text);
    }

    throw new Error("The model is still running. Try again in a moment.");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmedPrompt = prompt.trim();

    if (
      !trimmedPrompt ||
      isSending ||
      trimmedPrompt.length > LLM_PROMPT_LIMIT
    ) {
      return;
    }

    setMessages((current) => [
      ...current,
      { role: "user", text: trimmedPrompt },
    ]);
    setPrompt("");
    setIsSending(true);
    setStatus("Warming up the model...");

    try {
      const response = await fetch(LLM_CHAT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: trimmedPrompt }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.error || `Model request failed with ${response.status}`,
        );
      }

      const data = await response.json();
      const text =
        (data.text && cleanModelText(data.text)) ||
        (data.jobId
          ? await pollJob(data.jobId)
          : "The model finished, but did not return text.");
      setMessages((current) => [...current, { role: "assistant", text }]);
      setStatus("Ready");
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: error.message || "Something went wrong calling the model.",
        },
      ]);
      setStatus("Error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="llm-chatbot-shell">
      <h4 className="llm-chatbot-title">Try my trained model</h4>
      <div className="llm-chatbot-intro">
        <p>
          This runs on Runpod, which can get expensive, so visitors get 5
          prompts per week. To avoid slow cold starts, send follow-ups within
          2.5 minutes.
        </p>
        <p>
          I do not keep an active worker running, so the serverless Runpod GPU
          may not always be available. If it is unavailable, please try again
          later.
        </p>
        <p>
          Expect weird replies: it is a small model trained for 90 minutes on
          one H100 with 10 GB of{" "}
          <a
            href="https://huggingface.co/datasets/stanford-cs336/owt-sample"
            target="_blank"
            rel="noreferrer"
          >
            Open Web Text
          </a>
          . Some example prompts:
        </p>
        <ul>
          <li>The capital of Czech Republic is</li>
          <li>If I have 3 apples and buy 2 more, then I have</li>
          <li>Complete this sentence: The future of AI feels</li>
        </ul>
      </div>

      <div className="llm-chatbot" aria-label="LLM from Scratch chatbot">
        <div className="llm-chatbot-messages">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`llm-chat-message ${message.role}`}
            >
              <span>{message.text}</span>
            </div>
          ))}
          {isSending && (
            <div className="llm-chat-status" role="status">
              <span>{status || "Thinking..."}</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="llm-chatbot-form" onSubmit={handleSubmit}>
          <textarea
            value={prompt}
            onChange={handlePromptChange}
            onKeyDown={handlePromptKeyDown}
            placeholder={`Type a prompt (${LLM_PROMPT_LIMIT} chars max)...`}
            aria-label="Prompt"
            rows="3"
            maxLength={LLM_PROMPT_LIMIT}
            disabled={isSending}
          />
          <span className="llm-chatbot-limit">
            {charsRemaining} / {LLM_PROMPT_LIMIT} chars left
          </span>
          <button
            type="submit"
            disabled={
              isSending ||
              !prompt.trim() ||
              prompt.trim().length > LLM_PROMPT_LIMIT
            }
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

const LinkIcon = ({ type }) => {
  if (type === "github") return <FaGithub aria-hidden="true" />;
  if (type === "devpost")
    return (
      <img
        src={devpost}
        alt=""
        className="project-link-image"
        aria-hidden="true"
      />
    );
  if (type === "website")
    return (
      <img src={web} alt="" className="project-link-image" aria-hidden="true" />
    );
  return null;
};

const Projects = () => {
  const [selectedProj, setSelectedProj] = useState("llm-from-scratch");
  const selectedProject = useMemo(
    () =>
      projects.find((project) => project.id === selectedProj) || projects[0],
    [selectedProj],
  );

  return (
    <div className="projects-content">
      <h2>Projects</h2>
      <div className="projects-shell">
        <div
          className="projects-nav"
          role="tablist"
          aria-label="Project selector"
        >
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={selectedProject.id === project.id}
              className={`project-item ${selectedProject.id === project.id ? "selected" : ""}`}
              onClick={() => setSelectedProj(project.id)}
            >
              <span className="project-item-title">{project.title}</span>
              <span className="project-item-subtitle">{project.summary}</span>
            </button>
          ))}
        </div>

        <article className="project-card" role="tabpanel">
          <header className="project-header">
            <h3>{selectedProject.title}</h3>
          </header>

          <div className="project-info-con">
            <section className="project-about">
              <h4>About</h4>
              <p>{selectedProject.about}</p>
            </section>

            <section className="project-skills">
              <h4>Skills</h4>
              <ul>
                {selectedProject.skills.map((skill) => (
                  <li key={skill.label}>
                    {skill.Icon && (
                      <skill.Icon className="skill-icon" aria-hidden="true" />
                    )}
                    <span>{skill.label}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="project-media">
              {selectedProject.media.type === "chat" ? (
                <LLMChatbot />
              ) : selectedProject.media.type === "video" ? (
                <video key={selectedProject.id} autoPlay loop muted playsInline>
                  <source src={selectedProject.media.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={selectedProject.media.src}
                  alt={selectedProject.media.alt}
                />
              )}
            </section>

            <section className="project-links">
              <h4>Visit</h4>
              {selectedProject.links.map((link) => (
                <p key={link.href} className="project-link-row">
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <LinkIcon type={link.type} />
                    <span>{link.label}</span>
                  </a>
                </p>
              ))}
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Projects;
