import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // Check screen width on component mount and window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Conditional rendering based on screen width
  if (isMobile) {
    return (
      <div className="nav-container">
        <nav className="navbar">
          <div className="navbar-left">
            <span className="navbar-brand">Jan Ahmed</span>
          </div>
          <button
            className={`sidebar-toggle ${showSidebar ? "active" : ""}`}
            onClick={toggleSidebar}
          >
            <div className="hamburger">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </button>
          <div className={`navbar-sidebar ${showSidebar ? "open" : ""}`}>
            <ul className="navbar-nav-mobile">
              <li className="nav-item">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="math"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Math Research
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="experience"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="nav-container">
        <nav className="navbar">
          <div className="navbar-left">
            <span className="navbar-brand">Jan Ahmed</span>
          </div>
          <div className="navbar-right">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="math"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Math Research
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="experience"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
};

export default Header;
