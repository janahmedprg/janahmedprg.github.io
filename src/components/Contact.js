// Contact.js
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../css/Contact.css"; // Import the stylesheet

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out! You can contact me via email at{" "}
          <a href="mailto:jan.ahmed.prg@email.com">
            <FaEnvelope /> jan.ahmed.prg@email.com
          </a>{" "}
          or connect with me on:
        </p>
        <ul className="social-links">
          <li>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
