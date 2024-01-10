// PlotPage.js
import React, { useState, useEffect } from "react";
import "../css/Projects.css";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import QuestionMark from "../utils/QuestionMark";

const POL_API_KEY = process.env.REACT_APP_POL_API_KEY;

const BilliardsProj = () => {
  const [parameters, setParameters] = useState({
    n: 2,
    x: 0,
    y: 0,
    curve: 0,
    eta: 0,
    sides: 3,
    alpha: 0.1,
    spin: 0,
  });
  const [imgSrc, setImgSrc] = useState("");
  const [flag, setFlag] = useState([]);
  const [selectedOption, setSelectedOption] = useState("polygon");
  const [loading, setLoading] = useState(true);

  const handleOptionChange = (event) => {
    if (event.target.value === "wedge") {
      setParameters({
        n: 2,
        x: 0,
        y: 0.15,
        curve: 0.1,
        eta: 0.1,
        sides: 2,
        alpha: 0,
        spin: 0,
      });
    } else if (event.target.value === "strip") {
      setParameters({
        n: 2,
        x: 0,
        y: 0.1,
        curve: 0,
        eta: 0.1,
        sides: 1,
        alpha: Math.PI / 4,
        spin: 0,
      });
    } else if (event.target.value === "polygon") {
      setParameters({
        n: 2,
        x: 0,
        y: 0,
        curve: 0,
        eta: 0,
        sides: 3,
        alpha: 0.1,
        spin: 0,
      });
    }
    setSelectedOption(event.target.value);
    setFlag([]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const flags = [];
    const newParam = { ...parameters, [name]: parseFloat(value) };

    if (selectedOption === "polygon") {
      if (newParam.sides > 16 || newParam.sides < 3) {
        flags.push("number of sides");
      }
      if (newParam.curve < -Math.PI / 2 || newParam.curve > Math.PI / 2) {
        flags.push("curvature");
      }
      if (newParam.x > 1 || newParam.x < -1) {
        flags.push("x coordinate");
      }
      if (newParam.y > 1 || newParam.y < -1) {
        flags.push("y coordinate");
      }
    }
    if (selectedOption === "strip") {
      if (newParam.x > 1 || newParam.x < -1) {
        flags.push("x coordinate");
      }
      if (newParam.y > 1 || newParam.y < 0) {
        flags.push("y coordinate");
      }
    }
    if (selectedOption === "wedge") {
      if (newParam.curve < 0 || newParam.curve > Math.PI) {
        flags.push("wedge angle");
      }
      if (newParam.x > 1 || newParam.x < 0) {
        flags.push("x coordinate");
      }
      if (newParam.y > 4 || newParam.y < 0) {
        flags.push("y coordinate");
      }
    }

    if (newParam.alpha > 2 * Math.PI || newParam.alpha < 0) {
      flags.push("initial angle");
    }
    if (newParam.spin > 1 || newParam.spin < -1) {
      flags.push("rotational velocity");
    }
    if (newParam.eta < 0 || newParam.eta > 1) {
      flags.push("mass distribution");
    }
    if (newParam.n > 1000 || newParam.n < 1) {
      flags.push("number of collisions");
    }
    setFlag(flags);
    // Ensure the value is less than or equal to the specified max
    setParameters({
      ...parameters,
      [name]: parseFloat(value),
    });
  };

  const handleFetch = async () => {
    if (flag.length > 0) {
      return;
    }
    setLoading(true);
    try {
      const queryParams = new URLSearchParams(parameters);
      const response = await fetch(
        `https://billiards-d75d02uv.uc.gateway.dev/polygon?key=${POL_API_KEY}&${queryParams}`
      );

      console.log("Img fetched");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Assuming the response is a Blob (binary data), not JSON
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImgSrc(imageUrl);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const tableData = [
    {
      shape: "Triangle",
      eta: [
        "\\frac{1}{\\pi}\\arccos\\left(\\frac{1}{3}\\right) \\approx 0.3918",
        "1-\\frac{1}{\\pi}\\arccos\\left(\\frac{1}{3}\\right) \\approx 0.6082",
      ],
      possiblePeriods: ["4, 6", "6, 12"],
    },
    { shape: "Square", eta: ["0.5"], possiblePeriods: ["4, 6, 8, 10, 12"] },
    {
      shape: "Pentagon",
      eta: [
        "\\frac{2}{\\pi}\\arccos\\left(\\frac{\\sqrt{1+\\cos\\left(\\frac{2\\pi}{3}\\right)}}{\\sqrt{2}\\cos\\left(\\frac{3\\pi}{10}\\right)}\\right) \\approx 0.3524",
        "1-\\frac{2}{\\pi}\\arccos\\left(\\frac{\\sqrt{1+\\cos\\left(\\frac{2\\pi}{3}\\right)}}{\\sqrt{2}\\cos\\left(\\frac{3\\pi}{10}\\right)}\\right) \\approx 0.6476",
      ],
      possiblePeriods: ["6, 8, 10, 14, 20, 30, 40", "6, 10, 20, 30, 40"],
    },
  ];
  useEffect(() => {
    handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption]);
  return (
    <section className="projects">
      <div className="projects-content">
        <h2>No-Slip Billiards</h2>
        <p>
          In our{" "}
          <a
            href="https://pubs.aip.org/aip/cha/article-abstract/32/2/023102/2835590/No-slip-billiards-with-particles-of-variable-mass"
            target="_blank"
            rel="noopener noreferrer"
          >
            published paper
          </a>{" "}
          we provided results on a type of mathematical billiards called no-slip
          billiards, that have the properties of having perfectly rough
          boundaries and at collision there is no loss of energy. Our main
          result is the following Theorem where the mass distribution constant
          ranges from <InlineMath>\eta = 0</InlineMath> which is the specular
          billiards case, to <InlineMath>\eta = 1</InlineMath> which is the
          infinite inertia limit case.
        </p>
        <div className="thm-container">
          <strong>Theorem 1:</strong> Values for the particle mass distribution
          constant <InlineMath>0\leq \eta \leq 1</InlineMath> yielding
          persistently periodic billiards are dense. In particular, for any
          integer <InlineMath math="n>1" />,
          <ol className="custom-list">
            <li>
              there exists an <InlineMath>\eta</InlineMath> so that all points
              in phase space of the infinite strip are{" "}
              <InlineMath>2n</InlineMath>-periodic, and
            </li>
            <li>
              for any angle <InlineMath math="0<\phi\leq \frac{\pi}{8}" />,
              there is a mass distribution constant{" "}
              <InlineMath>\eta</InlineMath> which makes the wedge of angle{" "}
              <InlineMath>2\phi</InlineMath> persistently periodic of period{" "}
              <InlineMath>2n</InlineMath>.
            </li>
          </ol>
        </div>
        <p>
          We provide numerical evidence suggesting that the ellipse no-slip
          billiard <InlineMath>E(e,\eta)</InlineMath>, where{" "}
          <InlineMath>e</InlineMath> is the eccentricity and{" "}
          <InlineMath>\eta</InlineMath> is the mass distribution constant, is
          possibly integrable but with a more complex structure. So far there
          are two known subfalimies <InlineMath>E(0,\eta)</InlineMath> and{" "}
          <InlineMath>E(e,0)</InlineMath> that are integrable. As an example of
          our numerical evidence, we restrict to the subfamily{" "}
          <InlineMath>E(0.5,\eta)</InlineMath> and look at how the phase space
          evolves as we vary <InlineMath>\eta</InlineMath> starting from close
          to <InlineMath>\eta=0</InlineMath> to <InlineMath>\eta =1</InlineMath>
          . A view of the progression of the dynamics is given by the phase
          spaces in Figure 1.
        </p>
        <div className="gif-row">
          <a
            href="https://drive.google.com/file/d/1C56R2iKD8UPxEWqBWNSLrH4aLGmnlaw2/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="gif"
              src="https://drive.google.com/uc?export=view&id=1jQ7dbvmD3GjKUg7dRGlv_gk4yU3INmJM"
              title="Click for the larger version."
              alt="GIF 1"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1RBE_CgVYYmJpDtErUu8B69IFCoMvpfxC/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="gif"
              src="https://drive.google.com/uc?export=view&id=16nH1yDDSJ73bzru8CKaibwYcfFUqeDvb"
              title="Click for the larger version."
              alt="GIF 2"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/17FACUlWNI-Z4KOAA4Vj2AgOjugzEph2p/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="gif"
              src="https://drive.google.com/uc?export=view&id=1x33Rf3fzbFzUBQxoZs1LEni37K4v9DFP"
              title="Click for the larger version."
              alt="GIF 3"
            />
          </a>
        </div>
        <p
          style={{
            textAlign: "center",
            fontStyle: "italic",
            paddingLeft: "50px",
            paddingRight: "50px",
            marginTop: "0px",
            fontSize: "85%",
          }}
        >
          Figure 1: Left is the phase space of{" "}
          <InlineMath>E(0.5,0.0635)</InlineMath> with almost specular
          collisions; center is the phase space of{" "}
          <InlineMath>E(0.5,0.3918)</InlineMath> with uniform distribution;
          right is the phase space of <InlineMath>E(0.5,0.7952)</InlineMath>{" "}
          with almost infinite inertia.
        </p>
        <p>
          Using an algorithm that I implemented, we found potential mass
          distributions for a particle such that it satisfies a sufficient
          condition of having all orbits periodic in a regular polygon no-slip
          billiard. The potential candidates for the mass distribution and their
          possible peiriods are listed in the follwing table.
        </p>
        <table className="my-table">
          <thead>
            <tr>
              <th style={{ color: "#333" }}>Shape</th>
              <th style={{ color: "#333" }}>
                Mass distribution{" "}
                <InlineMath math="\large\boldsymbol{\eta}"></InlineMath>
              </th>
              <th style={{ color: "#333" }}>Possible Periods</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td rowSpan={row.eta.length} style={{ color: "#333" }}>
                    {row.shape}
                  </td>
                  <td>
                    <InlineMath math={row.eta[0]} />
                  </td>
                  <td style={{ color: "#333" }}>{row.possiblePeriods[0]}</td>
                </tr>
                {row.eta.slice(1).map((eta, etaIndex) => (
                  <tr key={etaIndex}>
                    <td>
                      <InlineMath math={eta} />
                    </td>
                    <td style={{ color: "#333" }}>
                      {row.possiblePeriods[etaIndex + 1]}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <p
          style={{
            textAlign: "center",
            fontStyle: "italic",
            paddingLeft: "50px",
            paddingRight: "50px",
            marginTop: "0px",
            fontSize: "85%",
          }}
        >
          Table 1: Potential candidates for the mass distribution in a regular
          polygon no-slip billiard.
        </p>
        <p>
          Detailed information about this research project can be found on our{" "}
          <a
            href="https://pubs.aip.org/aip/cha/article-abstract/32/2/023102/2835590/No-slip-billiards-with-particles-of-variable-mass"
            target="_blank"
            rel="noopener noreferrer"
          >
            published paper
          </a>
          .
        </p>
        <h3>Try it yourself</h3>
        <p>
          Enter the following intitial conditions and press "Run experiment" to
          see the traces of the trajectories of the no-slip billiard system. You
          can test out Theorem 1, and the potential candidates for the mass
          distribution in the regular polygon billiard listed in Table 1.
        </p>
        <div className="form-container">
          <label className="instruction-label">
            Select the following shape of the billiard table:
          </label>
          <div className="radio-buttons-container">
            <label className="radio-button-label">
              Polygon
              <input
                type="radio"
                value="polygon"
                checked={selectedOption === "polygon"}
                onChange={handleOptionChange}
              />
            </label>

            <label className="radio-button-label">
              Strip
              <input
                type="radio"
                value="strip"
                checked={selectedOption === "strip"}
                onChange={handleOptionChange}
              />
            </label>

            <label className="radio-button-label">
              Wedge
              <input
                type="radio"
                value="wedge"
                checked={selectedOption === "wedge"}
                onChange={handleOptionChange}
              />
            </label>
          </div>
          {selectedOption === "polygon" && (
            <div className="form-group">
              <label>
                number of sides{" "}
                <QuestionMark tooltipText="Enter the number of sides of the polygon billiard table (range is 3-16)." />
              </label>
              <input
                type="number"
                name="sides"
                value={parameters.sides}
                onChange={handleChange}
              />
            </div>
          )}
          {selectedOption === "polygon" && (
            <div className="form-group">
              <label>
                curvature
                <QuestionMark tooltipText="Enter the curvature of the sides in radians (range is -π/2-π/2)." />
              </label>
              <input
                type="number"
                name="curve"
                value={parameters.curve}
                onChange={handleChange}
                step="0.1"
              />
            </div>
          )}
          {selectedOption === "wedge" && (
            <div className="form-group">
              <label>
                wedge angle
                <QuestionMark tooltipText="Enter the angle of the wedge in radians (range is 0-π)." />
              </label>
              <input
                type="number"
                name="curve"
                value={parameters.curve}
                onChange={handleChange}
                step="0.1"
              />
            </div>
          )}
          <div className="form-group">
            <label>
              x coordinate
              <QuestionMark tooltipText="Enter the starting x coordinate so the point is inside the billiard table." />
            </label>
            <input
              type="number"
              name="x"
              value={parameters.x}
              onChange={handleChange}
              step="0.1"
            />
          </div>
          <div className="form-group">
            <label>
              y coordinate
              <QuestionMark tooltipText="Enter the starting y coordinate so the point is inside the billiard table." />
            </label>
            <input
              type="number"
              name="y"
              value={parameters.y}
              onChange={handleChange}
              step="0.1"
            />
          </div>
          <div className="form-group">
            <label>
              initial angle
              <QuestionMark
                tooltipText="Enter the initial angle relative to the horizontal line in
              radians (range 0-2π)."
              />
            </label>
            <input
              type="number"
              name="alpha"
              value={parameters.alpha}
              onChange={handleChange}
              step="0.1"
            />
          </div>
          <div className="form-group">
            <label>
              rotational velocity
              <QuestionMark tooltipText="Enter the initial rotational velocity (range -1-1)." />
            </label>
            <input
              type="number"
              name="spin"
              value={parameters.spin}
              onChange={handleChange}
              step="0.1"
            />
          </div>
          <div className="form-group">
            <label>
              mass distribution
              <QuestionMark tooltipText="Enter the mass distribution η (range 0-1)." />
            </label>
            <input
              type="number"
              name="eta"
              value={parameters.eta}
              onChange={handleChange}
              step="0.1"
            />
          </div>
          <div className="form-group">
            <label>
              number of collisions
              <QuestionMark tooltipText="Enter the number of collisions + 1 (range 0-1000)." />
            </label>
            <input
              type="number"
              name="n"
              value={parameters.n}
              onChange={handleChange}
            />
          </div>
          <div className="center-button">
            <button
              className={flag.length > 0 ? "disabled-button" : "submit-button"}
              onClick={handleFetch}
              disabled={flag.length > 0}
            >
              Run experiment
            </button>
          </div>
          {flag.length > 0 && (
            <div>
              <p className="warning">
                <b>
                  Incorrect input for the parameter
                  {flag.length === 1 ? "" : "s"}:
                </b>{" "}
                {flag.join(", ")}
              </p>
            </div>
          )}
          <div>
            {loading && <div className="spinner"></div>}
            <img
              src={imgSrc}
              alt="Plot"
              style={{
                display: loading ? "none" : "block",
                width: "100%", // Set the width to 100%
                height: "auto", // Maintain the aspect ratio
                border: "1px solid #ccc", // Add a border
                borderRadius: "8px", // Add border-radius for rounded corners
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BilliardsProj;
