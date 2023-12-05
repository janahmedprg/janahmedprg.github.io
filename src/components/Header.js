// Header.js
import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="header">
      <h1>Jan Ahmed</h1>
      <nav>
        <ul>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
