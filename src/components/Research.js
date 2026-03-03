import { useMemo, useState } from "react";
import "../css/Projects.css";
import "../css/Research.css";
import { FaGithub } from "react-icons/fa";
import graph from "../img/graph.png";
import web from "../img/web.png";
import billiards from "../img/P_4(0,0.714)_3600000.png";
import billiards1 from "../img/P_4(1,0.9)_3600000.png";
import billiards2 from "../img/billiards.png";
import graph2 from "../img/Screenshot 2024-07-15 160046.png";
import lps from "../img/lps.png";
import lis from "../img/lis.png";
import lis2 from "../img/lis2.png";
import lis3 from "../img/lis3.png";

const researchProjects = [
  {
    id: "graph",
    title: "Graph Theory",
    summary:
      "Improved lower bounds and spectral graph insights from independent research.",
    about:
      "Conducted research in graph theory focused on spectral characteristics and connectivity. Built algorithms that improved known lower bounds on independence numbers and established a validated lower bound for disconnecting vertex sets in Hamming graphs.",
    literature: [
      {
        title: "Elementary Number Theory, Group Theory, and Ramanujan Graphs",
        href: "https://math.bme.hu/~gabor/oktatas/SztoM/DavidoffSarnakValette.pdf",
        authors: "G. Davidoff, P. Sarnak, A. Valette",
      },
      {
        title: "Expander graphs are globally synchronizing",
        href: "https://arxiv.org/abs/2210.12788",
        authors: "S. H. Strogatz et al.",
      },
      {
        title:
          "On a conjecture of Brouwer involving the connectivity of strongly regular graphs",
        href: "https://arxiv.org/abs/1105.0796",
        authors: "S. M. Cioaba et al.",
      },
    ],
    gallery: [
      { src: lps, alt: "Graph computation output" },
      { src: graph, alt: "Graph research visualization" },
      { src: graph2, alt: "Graph research screenshot" },
    ],
    links: [
      {
        label: "Project write-up",
        href: "#/research/expanders",
        type: "website",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/janahmedprg/RamanujanGraphs",
        type: "github",
        external: true,
      },
    ],
  },
  {
    id: "billiards",
    title: "No-slip Billiards",
    summary:
      "Dynamics research with simulation-based verification and co-authored papers.",
    about:
      "Conducted no-slip billiards research and co-authored two papers exploring billiard dynamics. Implemented Python simulations to test hypotheses, verify periodic behavior, and analyze stability across different geometries.",
    literature: [
      {
        title: "No-slip Billiards",
        href: "https://www.proquest.com/openview/900623543058120245987fcadbddec61/1?pq-origsite=gscholar&cbl=18750",
        authors: "C. Cox",
      },
      {
        title: "Stability of periodic orbits in no-slip billiards",
        href: "https://iopscience.iop.org/article/10.1088/1361-6544/aacc43/meta",
        authors: "C. Cox, R. Feres, H.-K. Zhang",
      },
      {
        title: "The dynamics of billiards with no-slip collisions",
        href: "https://www.sciencedirect.com/science/article/abs/pii/016727899390205F",
        authors: "D. S. Broomhead, E. Gutkin",
      },
    ],
    gallery: [
      { src: billiards, alt: "No-slip billiards simulation image 1" },
      { src: billiards1, alt: "No-slip billiards simulation image 2" },
      { src: billiards2, alt: "No-slip billiards trajectory visualization" },
    ],
    links: [
      {
        label: "Project write-up",
        href: "#/research/billiards",
        type: "website",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/janahmedprg/NoSlipBilliards",
        type: "github",
        external: true,
      },
    ],
  },
  {
    id: "lis",
    title: "Longest Increasing Subsequences",
    summary:
      "Random permutation analysis using tableaux and row bumping algorithms.",
    about:
      "Studied longest increasing subsequences in random permutations. Implemented row bumping to construct tableaux from sampled permutations and analyzed expected random shape behavior for random k-multiset permutations.",
    literature: [
      {
        title: "The Surprising Mathematics of Longest Increasing Subsequences",
        href: "https://www.math.ucdavis.edu/~romik/book/",
        authors: "D. Romik",
      },
      {
        title: "Young Tableaux",
        href: "https://www.cambridge.org/core/books/young-tableaux/A7570B10D82AE7233E25E5D6F70A07B6",
        authors: "W. Fulton",
      },
      {
        title:
          "Approximate Factorization and Concentration for Characters of Symmetric Groups",
        href: "https://arxiv.org/abs/math/0006111",
        authors: "P. Biane",
      },
    ],
    gallery: [
      { src: lis2, alt: "LIS experiment output 1" },
      { src: lis, alt: "LIS experiment output 2" },
      { src: lis3, alt: "LIS experiment output 3" },
    ],
    links: [
      {
        label: "Project write-up coming soon",
        type: "website",
        disabled: true,
      },
      {
        label: "GitHub repo",
        href: "https://github.com/janahmedprg/Longest-Increasing-Subsequences",
        type: "github",
        external: true,
      },
    ],
  },
];

const ResearchLinkIcon = ({ type }) => {
  if (type === "github") return <FaGithub aria-hidden="true" />;
  if (type === "website")
    return (
      <img src={web} alt="" className="project-link-image" aria-hidden="true" />
    );
  return null;
};

const Research = () => {
  const [selectedProjectId, setSelectedProjectId] = useState("graph");
  const selectedIndex = researchProjects.findIndex(
    (project) => project.id === selectedProjectId,
  );

  const selectedProject = useMemo(
    () =>
      researchProjects.find((project) => project.id === selectedProjectId) ||
      researchProjects[0],
    [selectedProjectId],
  );

  const handleTabKeyDown = (event, index) => {
    if (
      event.key !== "ArrowDown" &&
      event.key !== "ArrowUp" &&
      event.key !== "Home" &&
      event.key !== "End"
    ) {
      return;
    }

    event.preventDefault();
    let nextIndex = index;

    if (event.key === "ArrowDown") {
      nextIndex = (index + 1) % researchProjects.length;
    } else if (event.key === "ArrowUp") {
      nextIndex =
        (index - 1 + researchProjects.length) % researchProjects.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = researchProjects.length - 1;
    }

    setSelectedProjectId(researchProjects[nextIndex].id);
  };

  return (
    <div className="projects-content research-section">
      <h2>Math Research</h2>

      <div className="projects-shell">
        <div
          className="projects-nav"
          role="tablist"
          aria-label="Research topic selector"
          aria-orientation="vertical"
        >
          {researchProjects.map((project, index) => (
            <button
              key={project.id}
              id={`research-tab-${project.id}`}
              type="button"
              role="tab"
              aria-controls={`research-panel-${project.id}`}
              aria-selected={selectedProject.id === project.id}
              tabIndex={selectedIndex === index ? 0 : -1}
              className={`project-item ${selectedProject.id === project.id ? "selected" : ""}`}
              onClick={() => setSelectedProjectId(project.id)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              <span className="project-item-title">{project.title}</span>
              <span className="project-item-subtitle">{project.summary}</span>
            </button>
          ))}
        </div>

        <article
          className="project-card research-card"
          role="tabpanel"
          id={`research-panel-${selectedProject.id}`}
          aria-labelledby={`research-tab-${selectedProject.id}`}
        >
          <header className="project-header">
            <h3>{selectedProject.title}</h3>
          </header>

          <div className="research-card-body">
            <section className="research-about">
              <h4>About</h4>
              <p>{selectedProject.about}</p>
            </section>

            <section className="research-literature">
              <h4>Literature</h4>
              <ul>
                {selectedProject.literature.map((paper) => (
                  <li key={paper.href}>
                    <a
                      href={paper.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {paper.title}
                    </a>
                    <span>{paper.authors}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="research-gallery" aria-label="Research visuals">
              {selectedProject.gallery.map((image) => (
                <img key={image.src} src={image.src} alt={image.alt} />
              ))}
            </section>

            <section className="research-links">
              <h4>Visit</h4>
              {selectedProject.links.map((link, index) =>
                link.disabled ? (
                  <div
                    key={`${link.label}-${index}`}
                    className="project-link-row disabled-link-row"
                  >
                    <span className="disabled-link-content">
                      <ResearchLinkIcon type={link.type} />
                      <span>{link.label}</span>
                    </span>
                  </div>
                ) : (
                  <div key={link.href} className="project-link-row">
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      <ResearchLinkIcon type={link.type} />
                      <span>{link.label}</span>
                    </a>
                  </div>
                ),
              )}
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Research;
