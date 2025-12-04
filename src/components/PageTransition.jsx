// components/PageTransition.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

const PageTransition = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    // Set a minimum loading time for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <div className={`page-content ${loading ? "loading" : "loaded"}`}>
        {children}
      </div>
    </>
  );
};

export default PageTransition;
