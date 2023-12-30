// About.js
import React from "react";
import "../css/About.css";
import { FaFilePdf } from "react-icons/fa";

import janpic from "../janpic.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <img src={janpic} alt="Jan Ahmed" className="profile-picture" />
        <h2>About Me</h2>
        <p className="abt">
          Ever since I started learning mathematics, I have always thought about
          ways I can connect mathematical concepts to real world applications.
          As I learned more and more about mathematics I realized that many
          mathematical concepts were in fact motivated by real world problems.
          The first research project that sparked my interest was on No-Slip
          Billiards motivated by physical billiards. In Spring of 2021, I joined
          Professor Christopher Cox on his research project on No-Slip
          Billiards. The main goal of the research followed from the ideas from
          the research paper No-Slip Billiards in Dimension Two by C. Cox and R.
          Reres. The paper provides results on periodicity of an infinite wedge
          and strip, and the persistently periodic equilateral triangle for
          particles with uniform mass distribution. We sought to generalize
          these results for a general mass distribution and investigate other
          geometric shapes of billiards tables. I developed Python scripts to
          conduct numerical simulations for a particle with variable mass
          distribution, launched on tables of various geometric shapes. I
          created phase portraits by plotting the final phases of multiple
          particles after a certain amount of collisions with the boundary to
          numerically analyze the behavior of the dynamical system with a fixed
          table shape and a fixed mass distribution of a particle. For a regular
          polygon shaped billiard, I created an algorithm to test the necessary
          condition for the billiard to be persistently periodic. Using the
          algorithm I found potential candidates for the mass distribution of
          the particle with its possible periods for a square and regular
          pentagon which we list in our published research paper No-slip
          billiards with particles of variable mass distribution. With guidance
          I was able to write up the proof of Theorem 1 in the paper. In Summer
          of 2022, I joined Professor Sebastian Cioaba on his research project
          on the LPS Ramanujan graphs. Our research mainly followed the book
          Elementary Number Theory, Group Theory, and Ramanujan Graphs by G.
          Davidoff, P. Sarnak and A. Valette. Our goal was to investigate the
          independence number of the LPS Ramanujan graphs family. We followed
          the entire book to understand the construction of this graph. We hoped
          that understanding the construction would make possible connections on
          the bounds for the independence number. Unfortunately we didn’t have
          enough time to explore different methods that might provide tighter
          bounds than the already known ones. We came up with an algorithm to
          computationally find the independence set of specific LPS graphs.
          Using this algorithm I was able to improve the known bounds of
          specific graphs of the LPS Ramanujan graphs. In Summer of 2023, I
          continued my research working under the supervision of Professor
          Sebastian Cioaba on the problem of the minimum vertex disconnecting
          set of distance regular graphs. Our goal was to either prove or
          disprove Brouwer’s conjecture on the least disconnecting vertex set
          for distance regular graphs. With guidance I was able to prove that
          the conjecture is true for a specific family of distance regular
          graphs namely the Hamming graph. My interests took a turn in senior
          year when I joined a directed reading program where I was paired up
          with a graduate student to read the book Introduction to Probability
          Models by S. Ross. More specifically I focused on reading the chapters
          on Markov Chains and Continuous-Time Markov Chains. Reading these
          chapters on Markov Chains piqued my interest in this specific field. I
          recently got accepted to a Winter 2024 undergraduate research program
          at the University of Delaware that will allow me to do more research
          in this field of probability under the guidance of Professor Naya
          Banerjee. In addition to research, I have held various teaching and
          tutoring positions, gaining valuable experience in conveying complex
          mathematical concepts to students at different levels. As a tutor at
          the Mathematical Sciences Learning Lab, I provided assistance
          primarily for freshman math classes, and through private tutoring, I
          aided students taking more advanced math courses. Grading assignments
          for Introduction to Proofs and Linear Algebra enhanced my
          understanding of student learning. Serving as a classroom assistant
          for Intermediate Algebra and a Lab Assistant for Introduction to
          Systems Programming further improved my teaching skills and exposed me
          to diverse learning environments.
        </p>
        <p className="abt">
          You can find more details about my background and experience in my
          <a
            href="https://drive.google.com/file/d/1zglYq8XpAkmwrXiK9Zrn7F9R_1bJajom/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFilePdf /> Resume
          </a>
          .
        </p>
      </div>
    </section>
  );
};
export default About;
