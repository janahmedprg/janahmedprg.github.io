// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </Router>
  );
}

export default App;
