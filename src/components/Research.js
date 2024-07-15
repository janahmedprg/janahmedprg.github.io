import { useState } from "react";
import "../css/Projects.css";
import "../css/Research.css";
import { FaGithub } from "react-icons/fa";
import graph from "../img/graph.png";
import web from "../img/web.png";
import billiards from "../img/P_4(0,0.714)_3600000.png";
import billiards1 from "../img/P_4(1,0.9)_3600000.png";
import billiards2 from "../img/billiards.png";
import graph2 from "../img/Screenshot 2024-07-15 160046.png";
import lps from "../img/lps.png";
import lis from "../img/lis.png";
import lis2 from "../img/lis2.png";
import lis3 from "../img/lis3.png";

const Research = () => {
  const [selectedProj, setSelectedProj] = useState("graph");
  const handleClick = (event) => {
    const { id } = event.currentTarget; // Get the id of the clicked div
    setSelectedProj(id); // Set the selectedProj state to the id
  };

  return (
    <div className="projects-content">
      <h2>Math Research</h2>
      <div className="projects-container">
        <div className="select-con">
          <div className="selections">
            <div
              id="graph"
              onClick={handleClick}
              className={`project-item ${
                selectedProj === "graph" ? "selected" : ""
              }`}
              style={{ marginTop: "0px" }}
            >
              Graph Theory
            </div>
            <div
              className={`project-item ${
                selectedProj === "billiards" ? "selected" : ""
              }`}
              id="billiards"
              onClick={handleClick}
            >
              No-slip Billiards
            </div>
            <div
              className={`project-item ${
                selectedProj === "lis" ? "selected" : ""
              }`}
              id="lis"
              onClick={handleClick}
            >
              Longest Increasing Subsequences
            </div>
          </div>
          <div className="project-card-con">
            {selectedProj === "graph" && (
              <div className="project">
                <h3>Graph Theory</h3>
                <div className="research-info-con">
                  <div className="about">
                    <h4>About</h4>
                    <p>
                      Conducted research in graph theory, focusing on graph
                      properties and their spectral characteristics. Developed
                      algorithms to significantly improve the known lower bounds
                      of the independence number of certain graphs. Established
                      and validated a lower bound for disconnecting vertex sets
                      in Hamming graphs
                    </p>
                    <h4 style={{ marginTop: "10px" }}>Literature read</h4>
                    <ul
                      style={{
                        fontSize: "13pt",
                        listStyle: "none",
                        margin: "0px",
                        color: "#333",
                        padding: "0px",
                      }}
                    >
                      <li style={{ marginTop: "5px" }}>
                        <a
                          href="https://math.bme.hu/~gabor/oktatas/SztoM/DavidoffSarnakValette.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontStyle: "italic",
                            color: "#007bff",
                            textDecoration: "none",
                          }}
                        >
                          Elementary Number Theory, Group Theory, and Ramanujan
                          Graphs
                        </a>{" "}
                        by G. Davidoff, P. Sarnak, Alain Valette
                      </li>
                      <li style={{ marginTop: "5px" }}>
                        {" "}
                        <a
                          href="https://arxiv.org/abs/2210.12788"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontStyle: "italic",
                            color: "#007bff",
                            textDecoration: "none",
                          }}
                        >
                          Expander graphs are globally synchronizing
                        </a>{" "}
                        by S. H. Strogatz, et al.
                      </li>
                      <li style={{ marginTop: "5px" }}>
                        <a
                          href="https://arxiv.org/abs/1105.0796"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontStyle: "italic",
                            color: "#007bff",
                            textDecoration: "none",
                          }}
                        >
                          On a conjecture of Brouwer involving the connectivity
                          of strongly regular graphs
                        </a>{" "}
                        by S. M. Cioaba, et al.
                      </li>
                    </ul>
                  </div>
                  <div className="vid">
                    <img style={{ height: "120px" }} src={lps} alt="graph" />
                    <img style={{ height: "120px" }} src={graph} alt="graph" />
                    <img style={{ height: "120px" }} src={graph2} alt="graph" />
                  </div>
                  <div className="git">
                    <h4>Visit</h4>
                    <p className="gitp">
                      <a
                        href="#/research/expanders"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={web} alt="Jan Ahmed" className="devpostpic" />{" "}
                        Website
                      </a>
                    </p>
                    <p className="gitp">
                      <a
                        href="https://github.com/janahmedprg/RamanujanGraphs"
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
            {selectedProj === "billiards" && (
              <div className="project">
                <h3>No-slip Billiards</h3>
                <div className="research-info-con">
                  <div className="about">
                    <h4>About</h4>
                    <p>
                      Conducted research in No-slip Billiards, co-authoring 2
                      research papers that explore the dynamics of billiard
                      systems. Developed and implemented algorithms in Python to
                      verify hypotheses and analyze simulations of billiard
                      systems.
                    </p>
                    <h4 style={{ marginTop: "10px" }}>Literature read</h4>
                    <ul
                      style={{
                        fontSize: "13pt",
                        listStyle: "none",
                        margin: "0px",
                        color: "#333",
                        padding: "0px",
                      }}
                    >
                      <li style={{ marginTop: "5px" }}>
                        <a
                          href="https://www.proquest.com/openview/900623543058120245987fcadbddec61/1?pq-origsite=gscholar&cbl=18750"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontStyle: "italic",
                            color: "#007bff",
                            textDecoration: "none",
                          }}
                        >
                          No-slip Billiards
                        </a>{" "}
                        by C. Cox
                      </li>
                      <li style={{ marginTop: "5px" }}>
                        {" "}
                        <a
                          href="https://iopscience.iop.org/article/10.1088/1361-6544/aacc43/meta"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontStyle: "italic",
                            color: "#007bff",
                            textDecoration: "none",
                          }}
                        >
                          Stability of periodic orbits in no-slip billiards
                        </a>{" "}
                        by C Cox, R Feres and H-K Zhang
                      </li>
                      <li style={{ marginTop: "5px" }}>
                        <a
                          href="https://www.sciencedirect.com/science/article/abs/pii/016727899390205F"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontStyle: "italic",
                            color: "#007bff",
                            textDecoration: "none",
                          }}
                        >
                          The dynamics of billiards with no-slip collisions
                        </a>{" "}
                        by D.S. Broomhead, Eugene Gutkin
                      </li>
                    </ul>
                  </div>
                  <div className="vid">
                    <img
                      style={{ height: "120px" }}
                      src={billiards}
                      alt="graph"
                    />
                    <img
                      style={{ height: "120px" }}
                      src={billiards1}
                      alt="graph"
                    />
                    <img
                      style={{ height: "120px" }}
                      src={billiards2}
                      alt="graph"
                    />
                  </div>
                  <div className="git">
                    <h4>Visit</h4>
                    <p className="gitp">
                      <a
                        href="#/research/billiards"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={web} alt="Jan Ahmed" className="devpostpic" />{" "}
                        Website
                      </a>
                    </p>
                    <p className="gitp">
                      <a
                        href="https://github.com/janahmedprg/NoSlipBilliards"
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
            {selectedProj === "lis" && (
              <div className="project">
                <h3>Longest Increasing Subsequences</h3>
                <div className="research-info-con">
                  <div className="about">
                    <h4>About</h4>
                    <p>
                      Conducted research in longest increasing subsequences of
                      random permutations. Implemented the row bumping algorithm
                      to create tableaux from sampled random permutations.
                      Analyzed the expected random shape for random k-multiset
                      permutations.
                    </p>
                    <h4 style={{ marginTop: "10px" }}>Literature read</h4>
                    <ul
                      style={{
                        fontSize: "13pt",
                        listStyle: "none",
                        margin: "0px",
                        color: "#333",
                        padding: "0px",
                      }}
                    >
                      <li style={{ marginTop: "5px" }}>
                        <a
                          href="https://www.math.ucdavis.edu/~romik/book/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontStyle: "italic",
                            color: "#007bff",
                            textDecoration: "none",
                          }}
                        >
                          The Surprising Mathematics of Longest Increasing
                          Subsequences
                        </a>{" "}
                        by Dan Romik
                      </li>
                      <li style={{ marginTop: "5px" }}>
                        {" "}
                        <a
                          href="https://www.cambridge.org/core/books/young-tableaux/A7570B10D82AE7233E25E5D6F70A07B6"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontStyle: "italic",
                            color: "#007bff",
                            textDecoration: "none",
                          }}
                        >
                          Young Tableaux
                        </a>{" "}
                        by William Fulton
                      </li>
                      <li style={{ marginTop: "5px" }}>
                        <a
                          href="https://arxiv.org/abs/math/0006111"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontStyle: "italic",
                            color: "#007bff",
                            textDecoration: "none",
                          }}
                        >
                          Approximate Factorization and Concentration for
                          Characters of Symmetric Groups
                        </a>{" "}
                        by P. Biane
                      </li>
                    </ul>
                  </div>
                  <div className="vid">
                    <img style={{ height: "100px" }} src={lis2} alt="graph" />
                    <img style={{ height: "100px" }} src={lis} alt="graph" />
                    <img style={{ height: "100px" }} src={lis3} alt="graph" />
                  </div>
                  <div className="git">
                    <h4>Visit</h4>
                    <p className="gitp">
                      <p>
                        <img src={web} alt="Jan Ahmed" className="devpostpic" />{" "}
                        Website coming soon
                      </p>
                    </p>
                    <p className="gitp">
                      <a
                        href="https://github.com/janahmedprg/Longest-Increasing-Subsequences"
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

export default Research;
