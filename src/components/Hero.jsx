import React from "react";

// Updated service data to reflect full range of offerings
const serviceData = [
  { label: "Software Dev", value: 85 },
  { label: "SEO/SMM", value: 75 },
  { label: "Graphic Design", value: 90 },
  { label: "Digital Strategy", value: 80 },
];

const HeroSection = () => {
  return (
    <header className="hero-pro">
      <div className="hero-grid-container">
        {/* === LEFT SIDE: Content & Call-to-Action === */}
        <div className="hero-content-pro">
          <p
            className="subtitle-tag animate-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            YOUR PARTNER FOR COMPLETE DIGITAL GROWTH
          </p>
          <h1
            className="hero-title-pro animate-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            WeblyPro: Building{" "}
            <span className="gradient-text">Digital Ecosystems</span> That
            Scale.
          </h1>
          <p
            className="hero-description animate-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            From cutting-edge software engineering and impactful graphic design
            to high-performance SEO and Digital Marketing strategies, we cover
            every angle of your online success.
          </p>

          <div
            className="cta-group animate-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a href="/contact" className="cta-button-primary">
              Book a Free Consultation
            </a>
            <a href="#portfolio" className="cta-button-secondary">
              Explore Our Portfolio
            </a>
          </div>
        </div>

        {/* === RIGHT SIDE: Dynamic Service Coverage Visualization === */}
        <div
          className="hero-graphic-pro animate-in-right"
          style={{ animationDelay: "1.0s" }}
        >
          {/* <h3 className="graphic-title">WeblyPro Coverage Depth</h3> */}
          <div className="bar-chart-container">
            {serviceData.map((item, index) => (
              <div
                key={item.label}
                className="chart-item"
                style={{
                  "--bar-height": `${item.value}%`,
                  animationDelay: `${1.2 + index * 0.1}s`,
                }}
              >
                <div className="bar"></div>
                <span className="label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
