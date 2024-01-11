// App.js
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import BilliardsProj from "./components/BilliardsProj";
import Experience from "./components/Experience";
import ExpanderProj from "./components/ExpanderProj";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/project/billiards" element={<BilliardsProj />} />
        <Route path="/project/expanders" element={<ExpanderProj />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" />
      </Routes>
      <Contact />
    </HashRouter>
  );
}

export default App;
