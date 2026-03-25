import { useMemo, useState } from "react";
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
import calibron12 from "../img/calibron12.png";
import { FaGithub } from "react-icons/fa";

const projects = [
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
    id: "calibron12",
    title: "Calibron12 Puzzle",
    summary:
      "Interactive Calibron 12 puzzle solver with animated DFS and backtracking playback.",
    about:
      "Built a visual Calibron 12 puzzle experience that lets users place pieces manually and watch the puzzle get solved step by step. The app animates a depth-first search with backtracking, includes playback controls, and makes the search trace easier to understand through a live event feed.",
    skills: [
      { label: "DFS" },
      { label: "Backtracking" },
      { label: "Vercel", Icon: Vercel },
    ],
    media: {
      type: "image",
      src: calibron12,
      alt: "Calibron12 Puzzle screenshot",
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
  const [selectedProj, setSelectedProj] = useState("holoflash");
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
              {selectedProject.media.type === "video" ? (
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
