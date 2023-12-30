// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import BilliardsProj from "./components/BilliardsProj";
import Experience from "./components/Experience";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="Jan-Ahmed/" element={<About />} />
        <Route path="Jan-Ahmed/project" element={<Projects />} />
        <Route path="Jan-Ahmed/project/billiards" element={<BilliardsProj />} />
        <Route path="Jan-Ahmed/experience" element={<Experience />} />
      </Routes>
      <Contact />
    </Router>
  );
}

export default App;
