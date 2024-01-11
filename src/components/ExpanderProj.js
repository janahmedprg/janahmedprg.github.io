import "../css/Projects.css";

const ExpanderProj = () => {
  return (
    <section className="projects">
      <div className="projects-content">
        <h2>Lubotzky-Phillips-Sarnak Graphs</h2>
        <p>
          The objective of this research project was to improve existing bounds
          on the independence number of Ramanujan graphs. Our focus was on a
          specific family known as Lubotzky-Phillips-Sarnak (LPS) Graphs. In
          order to grasp the problem, I studied the book{" "}
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
        <p></p>
        <h2>Disconnecting Vertex Sets in Distance Regular Graphs</h2>
        <p></p>
      </div>
    </section>
  );
};
export default ExpanderProj;
