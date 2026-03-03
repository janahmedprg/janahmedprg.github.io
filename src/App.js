// App.js
import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Sections from "./components/Sections";
import BilliardsProj from "./components/BilliardsProj";
import ExpanderProj from "./components/ExpanderProj";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (checked) => {
    if (typeof checked === "boolean") {
      setTheme(checked ? "dark" : "light");
      return;
    }
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Sections theme={theme} onToggleTheme={toggleTheme} />}
        />
        <Route
          path="/research/billiards"
          element={<BilliardsProj theme={theme} onToggleTheme={toggleTheme} />}
        />
        <Route
          path="/research/expanders"
          element={<ExpanderProj theme={theme} onToggleTheme={toggleTheme} />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
