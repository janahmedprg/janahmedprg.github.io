// About.js
import "../css/Sections.css";
// import Research from "./Research";
import Home from "./Home";
import Projects from "./Projects";
// import Experience from "./Experience";

const Sections = () => {
  return (
    <div className="container">
      <div style={{ height: "52px" }}></div>
      <section className="slides" id="about">
        <Home></Home>
      </section>
      <section className="slides" id="projects">
        <Projects></Projects>
      </section>
      <section className="slides" id="math"></section>
      <section className="slides" id="experience"></section>
    </div>
  );
};

export default Sections;
