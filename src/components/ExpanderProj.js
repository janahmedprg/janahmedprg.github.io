import "../css/Projects.css";
import { InlineMath } from "react-katex";

const ExpanderProj = () => {
  return (
    <section className="projects">
      <div className="projects-content">
        <h2>Lubotzky-Phillips-Sarnak Graphs</h2>
        <p>
          Under the supervision of Professor Cioaba and Ph.D. student John
          Byrne, the objective of this research project was to improve existing
          bounds on the independence number of Ramanujan graphs. Our focus was
          on a specific family known as Lubotzky-Phillips-Sarnak (LPS) Graphs.
          In order to grasp the problem, I studied the book{" "}
          <a
            href="https://math.bme.hu/~gabor/oktatas/SztoM/DavidoffSarnakValette.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontStyle: "italic" }}
          >
            Elementary Number Theory, Group Theory, and Ramanujan Graphs
          </a>{" "}
          by G. Davidoff, P. Sarnak, Alain Valette. The book details the
          construction of LPS graphs and provides a proof demonstrating the
          existence of an LPS graph with arbitrarily large girth and chromatic
          number. Unfortunately, time constraints prevented us from proposing
          improvements to the known bounds on the independence number for the
          general LPS graph family. However, we successfully created and
          implemented an algorithm to improve the known upper bound on the
          independence number for specific instances of the LPS graphs.
        </p>
        <h2>Synchronizing Expanders</h2>
        <p>
          Under the supervision of Professor Cioaba and Ph.D. student Isabele
          Byrne, the aim of this research project was to improve the lower bound
          on the regularity of Ramanujan graphs that ensure global
          synchronization. Our primary reference was the research paper{" "}
          <a
            href="https://arxiv.org/abs/2210.12788"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontStyle: "italic" }}
          >
            Expander graphs are globally synchronizing
          </a>{" "}
          by P. Abdalla, A. S. Bandeira, M. Kassabov, V. Souza, S. H. Strogatz,
          A. Townsend. I closely examined the paper, documenting proofs for any
          claims that lacked proof within the paper but were established
          results. Unfortunately, time constraints prevented us from providing
          new results in this project. For more detailed information, please
          refer to my{" "}
          <a
            href="https://drive.google.com/file/d/1oURdZfjiP06EJtQw4gpRxxesqFahX1AC/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            notes
          </a>
          .
        </p>
        <h2>Disconnecting vertex vets in distance regular graphs</h2>
        <p>
          Under the supervision of Professor Cioaba and Ph.D. student Isabele
          Byrne, the objective of this research project was to either prove or
          disprove an open problem proposed by Brouwer. The statement is as
          follows:{" "}
        </p>
        <div className="thm-container">
          <strong>Problem 41:</strong> One needs to remove at least{" "}
          <InlineMath>2k - 2 - a_1</InlineMath> vertices to disconnect a DRG
          with a diameter greater than or equal to 3, such that each component
          has at least 2 vertices.
        </div>
        <p>
          We followed the paper{" "}
          <a
            href="https://arxiv.org/abs/1105.0796"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontStyle: "italic" }}
          >
            On a conjecture of Brouwer involving the connectivity of strongly
            regular graphs
          </a>{" "}
          by S. M. Cioaba, K. Kim, J. H. Koolen. Inspired by the proof of
          Proposition 4.1 in the paper, we were able to prove that a family of
          distance regular graphs, namely the Hamming graphs, satisfies the
          proposed statement. Although we attempted to explore Johnson graphs,
          time constraints prevented us from conducting a comprehensive
          exploration.
        </p>
      </div>
    </section>
  );
};
export default ExpanderProj;
