// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Jan Ahmed </h1>
      <div className="navbar">
        <Link to="/">About</Link>
        <div className="dropdown">
          <Link to="/project" className="dropbtn">
            Research Projects
          </Link>
          <div className="dropdown-content">
            <div className="list-wrap">
              <Link to="/project/expanders">
                Spectral Graph Theory Research
              </Link>
            </div>
            <div className="list-wrap">
              <Link to="/project/billiards">No-slip Billiards Research</Link>
            </div>
          </div>
        </div>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
};

export default Header;
