// App.js
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Projects from "./components/Research";
import Contact from "./components/Contact";
import BilliardsProj from "./components/BilliardsProj";
import ExpanderProj from "./components/ExpanderProj";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Sections />} />
        <Route path="/project" element={<Projects />} />
        <Route path="research/billiards" element={<BilliardsProj />} />
        <Route path="research/expanders" element={<ExpanderProj />} />
      </Routes>
      <Contact />
    </HashRouter>
  );
}

export default App;
