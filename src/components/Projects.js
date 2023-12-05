// Projects.js
import React from "react";
import "../css/Projects.css"; // Import the stylesheet

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
        {/* Add more project sections as needed */}
      </div>
    </section>
  );
};

export default Projects;
