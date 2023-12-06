// About.js
import React from "react";
import "../css/About.css";
import { FaFilePdf } from "react-icons/fa";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p className="abt">
          I am a highly motivated student at University of Delaware double
          majoring in Applied Mathematics and Computer Science. I am an
          organized fast learner and team player seeking internship opportunity
          to get a hands-on experience during my studies and contribute to a
          company success.
        </p>
        <p className="abt">
          You can find more details about my background and experience in my
          <a
            href="https://drive.google.com/file/d/1zglYq8XpAkmwrXiK9Zrn7F9R_1bJajom/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFilePdf /> Resume
          </a>
          .
        </p>
      </div>
    </section>
  );
};
export default About;
