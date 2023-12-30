// Projects.js
import React from "react";
import "../css/Projects.css"; // Import the stylesheet
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section className="projects">
      <div className="projects-content">
        <h2>Research Projects</h2>
        <div className="project">
          <h3>Spectral Graph Theory Research</h3>
          <ul className="proj">
            <li>
              Conducted research in Spectral Graph Theory under the supervision
              of Professor Sebastian Cioaba.
            </li>
            <li>
              Investigated independent sets within expander graphs, with a
              specific focus on LPS graphs.
            </li>
            <li>
              Utilized algorithmic techniques to improve the lower bounds of the
              independence number of known LPS graphs.
            </li>
            <li>
              Investigated global synchronization of expander graphs and known
              families of graphs.
            </li>
            <li>
              Investigated disconnecting vertex sets in distance regular graphs.
              Contributed to the establishment of a lower boundary for
              disconnecting vertex sets in Hamming graphs.
            </li>
          </ul>
        </div>
        <div
          className="project"
          onClick={() => {
            navigate("billiards");
          }}
        >
          <h3>No-slip Billiards Research</h3>
          <ul className="proj">
            <li>
              Conducted research in Mathematical No-slip Billiards under the
              supervision of Professor Christopher Cox.
            </li>
            <li>
              Used Python to simulate billiard systems and visualize gathered
              data allowing for a comprehensive analysis.
            </li>
          </ul>
        </div>
        {/* Add more project sections as needed */}
      </div>
    </section>
  );
};

export default Projects;
