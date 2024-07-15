// App.js
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Sections from "./components/Sections";
import BilliardsProj from "./components/BilliardsProj";
import ExpanderProj from "./components/ExpanderProj";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Sections />} />
        <Route path="/research/billiards" element={<BilliardsProj />} />
        <Route path="/research/expanders" element={<ExpanderProj />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
