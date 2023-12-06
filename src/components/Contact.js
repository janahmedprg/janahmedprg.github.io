// Contact.js
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";
import "../css/Contact.css"; // Import the stylesheet

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p className="cnt">
          Feel free to reach out! You can contact me via email at{" "}
          <a href="mailto:jan.ahmed.prg@email.com">
            <FaEnvelope /> jan.ahmed.prg@email.com
          </a>{" "}
          or connect with me on:
        </p>
        <ul className="social-links">
          <li>
            <a
              href="https://www.linkedin.com/in/jan-ahmed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/janahmedprg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://scholar.google.com/citations?user=1xvIicQAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGraduationCap />
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
