// About.js
import "../css/Sections.css";
import Research from "./Research";
import Home from "./Home";
import Projects from "./Projects";
// import Experience from "./Experience";
import Header from "./Header";
import Contact from "./Contact";
import Experience from "./Experience";

const Sections = ({ theme, onToggleTheme }) => {
  return (
    <div className="page-container">
      <Header theme={theme} onToggleTheme={onToggleTheme}></Header>
      <section className="slides" id="about">
        <Home></Home>
      </section>
      <section className="slides" id="projects">
        <Projects></Projects>
      </section>
      <section className="slides" id="math">
        <Research></Research>
      </section>
      <section className="slides" id="experience">
        <Experience></Experience>
      </section>
      <Contact></Contact>
    </div>
  );
};

export default Sections;
