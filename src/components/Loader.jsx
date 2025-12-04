// components/Loader.jsx
import React, { useState, useEffect } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader shows for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="weblypro-loader">
      <div className="loader-container">
        {/* Center Section with Logo */}
        <div className="center-section">
          {/* Animated Logo */}
          <div className="logo-animation">
            <div className="logo-circle">
              <div className="logo-inner">
                <span className="logo-text">WP</span>
              </div>
            </div>
          </div>

          {/* Code Lines Below Logo */}
          <div className="code-lines">
            <div className="code-line">{"<WeblyPro>"}</div>
            <div className="code-line">{"  Digital Excellence"}</div>
            <div className="code-line">{"</WeblyPro>"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
