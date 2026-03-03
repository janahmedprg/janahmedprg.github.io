import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { DarkModeSwitch } from "react-toggle-dark-mode";
// import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = ({ theme, onToggleTheme }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navScrollOffset = -72;
  const scrollLinkProps = {
    smooth: true,
    duration: 500,
    offset: navScrollOffset,
  };
  const isDarkMode = theme === "dark";
  const handleThemeChange = (checked) => {
    onToggleTheme(checked);
  };

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
          <div className="theme-toggle-control" aria-label="Toggle dark mode">
            <DarkModeSwitch checked={isDarkMode} onChange={handleThemeChange} size={20} />
          </div>
          <button
            type="button"
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
                  {...scrollLinkProps}
                  className="nav-link"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  {...scrollLinkProps}
                  className="nav-link"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="math"
                  {...scrollLinkProps}
                  className="nav-link"
                >
                  Math Research
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="experience"
                  {...scrollLinkProps}
                  className="nav-link"
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  {...scrollLinkProps}
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
                  {...scrollLinkProps}
                  className="nav-link"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  {...scrollLinkProps}
                  className="nav-link"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="math"
                  {...scrollLinkProps}
                  className="nav-link"
                >
                  Math Research
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="experience"
                  {...scrollLinkProps}
                  className="nav-link"
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  {...scrollLinkProps}
                  className="nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="theme-toggle-control" aria-label="Toggle dark mode">
            <DarkModeSwitch checked={isDarkMode} onChange={handleThemeChange} size={22} />
          </div>
        </nav>
      </div>
    );
  }
};

export default Header;
