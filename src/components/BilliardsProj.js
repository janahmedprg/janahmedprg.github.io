// PlotPage.js
import React, { useState, useEffect } from "react";
import "../css/Projects.css";

const POL_API_KEY = process.env.REACT_APP_POL_API_KEY;

const BilliardsProj = () => {
  const [parameters, setParameters] = useState({
    n: 1,
    x: 0,
    y: 0,
    curve: 0,
    eta: 0,
    sides: 3,
    alpha: 0.1,
    spin: 0,
  });
  const [imgSrc, setImgSrc] = useState("");

  const [selectedOption, setSelectedOption] = useState("polygon");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChange = (e) => {
    const { name, value, min, max } = e.target;
    // Ensure the value is less than or equal to the specified max
    const sanitizedValue = Math.min(
      Math.max(parseFloat(value), parseFloat(min)),
      parseFloat(max)
    );

    setParameters({
      ...parameters,
      [name]: sanitizedValue,
    });
  };

  const [loading, setLoading] = useState(true);

  const handleFetch = async () => {
    setLoading(true);
    if (selectedOption === "strip") {
      parameters.sides = 1;
    } else if (selectedOption === "wedge") {
      parameters.sides = 2;
    }
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
  useEffect(() => {
    handleFetch();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <section className="projects">
      <div className="projects-content">
        <h2>No-Slip Billiards</h2>
        <p>
          We provided results on a type of mathematical billiards called no-slip
          billiards, that have the properties of having perfectly rough
          boundaries and at collision there is no loss of energy. Our main
          result shows that for an infinite strip billiard there is a mass
          distribution of a particle such that all non-escaping orbits are
          periodic. We also prove a similar result for an infinite wedge
          billiard. We also provided numerical evidence suggesting that the
          ellipse no-slip billiard is possibly integrable but with a more
          complex structure. Using an algorithm, we found potential mass
          distributions for a particle such that it satisfies a sufficient
          condition of having all orbits periodic in a regular polygon billiard.
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
          see the traces of the trajectories of the no-slip billiard system.
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
          <div className="form-group">
            <label>
              Enter the number of sides of the polygon billiard table:
            </label>
            <input
              type="number"
              name="sides"
              value={parameters.sides}
              onChange={handleChange}
              min={3}
              max={20}
            />
          </div>
          <div className="form-group">
            <label>Enter the curvature of the sides (in radians):</label>
            <input
              type="number"
              name="curve"
              value={parameters.curve}
              onChange={handleChange}
              step="0.1"
              min={-3.141592653589793 / 2}
              max={3.141592653589793 / 2}
            />
          </div>
          <div className="form-group">
            <label>Enter the starting x coordinate:</label>
            <input
              type="number"
              name="x"
              value={parameters.x}
              onChange={handleChange}
              step="0.1"
              min={-1}
              max={1}
            />
          </div>
          <div className="form-group">
            <label>Enter the starting y coordinate:</label>
            <input
              type="number"
              name="y"
              value={parameters.y}
              onChange={handleChange}
              step="0.1"
              min={-1}
              max={1}
            />
          </div>
          <div className="form-group">
            <label>
              Enter the initial angle (relative to the horizontal line in
              radians):
            </label>
            <input
              type="number"
              name="alpha"
              value={parameters.alpha}
              onChange={handleChange}
              step="0.1"
              min={0}
              max={2 * 3.141592653589793}
            />
          </div>
          <div className="form-group">
            <label>Enter the initial rotational velocity:</label>
            <input
              type="number"
              name="spin"
              value={parameters.spin}
              onChange={handleChange}
              step="0.1"
              min={0}
              max={0.99}
            />
          </div>
          <div className="form-group">
            <label>Enter the mass distribution:</label>
            <input
              type="number"
              name="eta"
              value={parameters.eta}
              onChange={handleChange}
              step="0.1"
              min={0}
              max={1}
            />
          </div>
          <div className="form-group">
            <label>Enter the number of collisions (+1):</label>
            <input
              type="number"
              name="n"
              value={parameters.n}
              onChange={handleChange}
              min={1}
              max={500}
            />
          </div>
          <div className="center-button">
            <button className="submit-button" onClick={handleFetch}>
              Run experiment
            </button>
          </div>
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
