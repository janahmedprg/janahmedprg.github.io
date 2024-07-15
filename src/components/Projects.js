import { useState } from "react";
import "../css/Projects.css";
import { ReactComponent as Dart } from "../img/dart.svg";
import { ReactComponent as Flutter } from "../img/flutter.svg";
import { ReactComponent as Gcp } from "../img/google-cloud.svg";
import { ReactComponent as Mongodb } from "../img/mongodb-icon.svg";
import { ReactComponent as Openai } from "../img/openai-icon.svg";
import { ReactComponent as ReactIco } from "../img/react.svg";
import { ReactComponent as Discord } from "../img/discord-icon.svg";
import devpost from "../img/devpost.png";
import { FaGithub } from "react-icons/fa";
import holoflash from "../img/holoflash.mp4";
import learner from "../img/learnerai.mp4";
import kapperai from "../img/kapperai.mp4";
import adaai from "../img/adaai.mp4";
import udalice from "../img/udalice.mp4";
import sudokusolver from "../img/sudokusolver.png";
import { ReactComponent as Vercel } from "../img/vercel-icon.svg";
import web from "../img/web.png";

const Projects = () => {
  const [selectedProj, setSelectedProj] = useState("holoflash");
  const handleClick = (event) => {
    const { id } = event.currentTarget; // Get the id of the clicked div
    setSelectedProj(id); // Set the selectedProj state to the id
  };

  return (
    <div className="projects-content">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="select-con">
          <div className="selections">
            <div
              id="holoflash"
              onClick={handleClick}
              className={`project-item ${
                selectedProj === "holoflash" ? "selected" : ""
              }`}
              style={{ marginTop: "0px" }}
            >
              HoloFlash
            </div>
            <div
              className={`project-item ${
                selectedProj === "learnerai" ? "selected" : ""
              }`}
              id="learnerai"
              onClick={handleClick}
            >
              learner.ai
            </div>
            <div
              className={`project-item ${
                selectedProj === "kapperai" ? "selected" : ""
              }`}
              id="kapperai"
              onClick={handleClick}
            >
              KapperAI
            </div>
            <div
              className={`project-item ${
                selectedProj === "adaai" ? "selected" : ""
              }`}
              id="adaai"
              onClick={handleClick}
            >
              Ada.ai
            </div>
            <div
              className={`project-item ${
                selectedProj === "sudokusolver" ? "selected" : ""
              }`}
              id="sudokusolver"
              onClick={handleClick}
            >
              Sudoku Solver
            </div>
            <div
              className={`project-item ${
                selectedProj === "udalice" ? "selected" : ""
              }`}
              id="udalice"
              onClick={handleClick}
            >
              UDAlice
            </div>
          </div>
          <div className="project-card-con">
            {selectedProj === "holoflash" && (
              <div className="project">
                <h3>HoloFlash</h3>
                <div className="project-info-con">
                  <div className="about">
                    <h4>About</h4>
                    <p>
                      Earned first prize for <i>Best Use of AI in Education</i>{" "}
                      at HenHacks 2024 (University of Delaware). Created an app
                      that turns handwritten notes and lecture recordings into
                      personalized flashcards, viewable in AR using Microsoft
                      HoloLens.
                    </p>
                  </div>
                  <div className="skills">
                    <h4>Skills learned</h4>
                    <ul>
                      <li>
                        <ReactIco
                          style={{ height: "13pt", width: "fit-content" }}
                        />{" "}
                        React
                      </li>
                      <li>
                        <Gcp style={{ height: "13pt", width: "fit-content" }} />{" "}
                        Google Cloud
                      </li>
                      <li>
                        <Mongodb
                          style={{ height: "13pt", width: "fit-content" }}
                        />{" "}
                        MongoDB
                      </li>
                    </ul>
                  </div>
                  <div className="vid">
                    <video height="150px" autoPlay loop muted>
                      <source src={holoflash} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="git">
                    <h4>Visit</h4>
                    <p className="gitp">
                      <a
                        href="https://github.com/janahmedprg/flashcards"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub /> GitHub Repo
                      </a>
                    </p>

                    <p className="gitp">
                      <a
                        href="https://devpost.com/software/holoflash"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={devpost}
                          alt="Jan Ahmed"
                          className="devpostpic"
                        />{" "}
                        Devpost
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}
            {selectedProj === "learnerai" && (
              <div className="project">
                <h3>learner.ai</h3>
                <div className="project-info-con">
                  <div className="about">
                    <h4>About</h4>
                    <p>
                      Created a mobile app for teachers to optimize their
                      teaching style. The app allows teachers to create a
                      questionnaire for students. It then generates a unique
                      code that students use to answer the questionnaire. Using
                      the OpenAI API, we summarize the results and provide
                      advice on how teachers can optimize their teaching style.
                    </p>
                  </div>
                  <div className="skills">
                    <h4>Skills learned</h4>
                    <ul>
                      <li>
                        <ReactIco
                          style={{ height: "13pt", width: "fit-content" }}
                        />{" "}
                        React
                      </li>
                      <li>
                        <Openai
                          style={{ height: "13pt", width: "fit-content" }}
                        />{" "}
                        OpenAI API
                      </li>
                      <li>
                        <Mongodb
                          style={{ height: "13pt", width: "fit-content" }}
                        />{" "}
                        MongoDB
                      </li>
                    </ul>
                  </div>
                  <div className="vid">
                    <video height="150px" autoPlay loop muted>
                      <source src={learner} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="git">
                    <h4>Visit</h4>
                    <p className="gitp">
                      <a
                        href="https://github.com/janahmedprg/learner.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub /> GitHub Repo
                      </a>
                    </p>

                    <p className="gitp">
                      <a
                        href="https://devpost.com/software/learner-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={devpost}
                          alt="Jan Ahmed"
                          className="devpostpic"
                        />{" "}
                        Devpost
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}
            {selectedProj === "kapperai" && (
              <div className="project">
                <h3>KapperAI</h3>
                <div className="project-info-con">
                  <div className="about">
                    <h4>About</h4>
                    <p>
                      Placed top 8 overall hacks at PennApps 2023 (University of
                      Pennsylvania) and won the Wolfram Research Award.
                      Developed a mobile application that uses a machine
                      learning model to transplant hair onto a user's selfie.
                    </p>
                  </div>
                  <div className="skills">
                    <h4>Skills learned</h4>
                    <ul>
                      <li>
                        <ReactIco
                          style={{ height: "13pt", width: "fit-content" }}
                        />{" "}
                        React
                      </li>
                      <li>
                        <Gcp style={{ height: "13pt", width: "fit-content" }} />{" "}
                        Google Cloud
                      </li>
                    </ul>
                  </div>
                  <div className="vid">
                    <video height="150px" autoPlay loop muted>
                      <source src={kapperai} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="git">
                    <h4>Visit</h4>
                    <p className="gitp">
                      <a
                        href="https://github.com/jma02/kapperAI-frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub /> GitHub Repo
                      </a>
                    </p>

                    <p className="gitp">
                      <a
                        href="https://devpost.com/software/kapperai"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={devpost}
                          alt="Jan Ahmed"
                          className="devpostpic"
                        />{" "}
                        Devpost
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}
            {selectedProj === "adaai" && (
              <div className="project">
                <h3>Ada.ai</h3>
                <div className="project-info-con">
                  <div className="about">
                    <h4>About</h4>
                    <p>
                      Earned Best Educational Hack first prize at HenHacks 2023
                      (University of Delaware). Created a mobile application
                      that leverages OpenAI's ChatGPT API to provide computer
                      science tutoring.
                    </p>
                  </div>
                  <div className="skills">
                    <h4>Skills learned</h4>
                    <ul>
                      <li>
                        <Dart
                          style={{ height: "13pt", width: "fit-content" }}
                        />{" "}
                        Dart
                      </li>
                      <li>
                        <Flutter
                          style={{ height: "13pt", width: "fit-content" }}
                        />{" "}
                        Flutter
                      </li>
                      <li>
                        <Openai
                          style={{ height: "13pt", width: "fit-content" }}
                        />{" "}
                        OpenAI API
                      </li>
                    </ul>
                  </div>
                  <div className="vid">
                    <video height="150px" autoPlay loop muted>
                      <source src={adaai} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="git">
                    <h4>Visit</h4>
                    <p className="gitp">
                      <a
                        href="https://github.com/jma02/ada.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub /> GitHub Repo
                      </a>
                    </p>

                    <p className="gitp">
                      <a
                        href="https://devpost.com/software/ada-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={devpost}
                          alt="Jan Ahmed"
                          className="devpostpic"
                        />{" "}
                        Devpost
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}
            {selectedProj === "sudokusolver" && (
              <div className="project">
                <h3>Sudoku Solver</h3>
                <div className="project-info-con">
                  <div className="about">
                    <h4>About</h4>
                    <p>
                      Created a sudoku solver using a backtracking algorithm.
                      The algorithm systematically searches for solutions by
                      trying possible numbers and backtracking when it
                      encounters a conflict. This approach ensures that the
                      solver efficiently finds a solution to even the most
                      challenging sudoku puzzles.
                    </p>
                  </div>
                  <div className="skills">
                    <h4>Skills learned</h4>
                    <ul>
                      <li>
                        <Vercel
                          style={{ height: "13pt", width: "fit-content" }}
                        />{" "}
                        Vercel
                      </li>
                      <li>Backtracking</li>
                    </ul>
                  </div>
                  <div className="vid">
                    <img
                      style={{ height: "150px" }}
                      src={sudokusolver}
                      alt="sudoku solver"
                    />
                  </div>
                  <div className="git">
                    <h4>Visit</h4>
                    <p className="gitp">
                      <a
                        href="https://github.com/janahmedprg/sudoku_solver"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub /> GitHub Repo
                      </a>
                    </p>
                    <p className="gitp">
                      <a
                        href="https://sudoku-solver-janahmedprgs-projects.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={web} alt="Jan Ahmed" className="devpostpic" />{" "}
                        Website
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}
            {selectedProj === "udalice" && (
              <div className="project">
                <h3>UDAlice</h3>
                <div className="project-info-con">
                  <div className="about">
                    <h4>About</h4>
                    <p>
                      Developed a bot to handle and manage the UDMath Discord
                      Server. The bot automates channel creation with
                      appropriate permissions and assigns roles to students,
                      allowing them to be added to their class group chats
                      efficiently.
                    </p>
                  </div>
                  <div className="skills">
                    <h4>Skills learned</h4>
                    <ul>
                      <li>
                        <Discord
                          style={{ height: "13pt", width: "fit-content" }}
                        />{" "}
                        discord.js
                      </li>
                    </ul>
                  </div>
                  <div className="vid">
                    <video height="150px" autoPlay loop muted>
                      <source src={udalice} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="git">
                    <h4>Visit</h4>
                    <p className="gitp">
                      <a
                        href="https://github.com/janahmedprg/UDAliceBot"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub /> GitHub Repo
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="skills"></div>
      </div>
    </div>
  );
};

export default Projects;
