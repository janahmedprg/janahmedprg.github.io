import janpic from "../img/janpic.jpg";
import "../css/Home.css";
import resume from "../docs/Resume-Jan_Ahmed.pdf";
import transcript from "../docs/Transcript_JANAHMED.pdf";

import {
  FaFilePdf,
  FaLinkedin,
  FaGithub,
  FaGraduationCap,
} from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

const Home = () => {
  return (
    <div className="home-content">
      <div className="img-container">
        <img src={janpic} alt="Jan Ahmed" className="profile-picture" />
        <ul className="social-links">
          <li>
            <p className="linkscon">
              <a href={resume} target="_blank" rel="noreferrer">
                <FaFilePdf /> Resume
              </a>
            </p>
          </li>
          <li>
            <p className="linkscon">
              <a href={transcript} target="_blank" rel="noreferrer">
                <GrCertificate /> Transcript
              </a>
            </p>
          </li>
          <li>
            <p className="linkscon">
              <a
                href="https://www.linkedin.com/in/jan-ahmed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </p>
          </li>
          <li>
            <p className="linkscon">
              <a
                href="https://github.com/janahmedprg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </p>
          </li>
          <li>
            <p className="linkscon">
              <a
                href="https://scholar.google.com/citations?user=1xvIicQAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGraduationCap /> Google Scholar
              </a>
            </p>
          </li>
        </ul>
      </div>
      <div className="container-home-content">
        <h2>Hi there, I'm Jan.</h2>
        <h3>
          I'm a SDE1 at AWS and a mathematics researcher on the side who
          graduated Cum Laude in Spring 2024 with a B.S. in Computer Science and
          a B.S. in Applied Mathematics at the University of Delaware.
        </h3>

        <p>
          I enjoy creating software that solves complex real-world problems and
          doing research in mathematics. When I'm not coding or doing research,
          I also enjoy going to the gym, playing soccer, cycling and skiing.
        </p>
        <p style={{ marginBottom: "0px" }}>Fun facts about me:</p>
        <ul style={{ marginTop: "0px" }}>
          <li>
            My Erdős number is at most 5 (J. Ahmed-{">"}C. Cox-
            {">"}M. Hutchings-{">"}F. Morgan-{">"}Z. Füredi-{">"}P. Erdős).
          </li>
          <li>
            I am fluent in English and Czech, intermediate in German, and
            currently learning Spanish and Russian on Duolingo (see my real time
            progress below).
            <br />
            <img
              src="https://duolingo-stats-card.vercel.app/api?username=ahmedak_jan&theme=sky"
              alt="Duolingo Stats"
              className="duoImg"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Home;
