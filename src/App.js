// App.js - UPDATED
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServicesPage from "./components/ServicesPage";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import TechSphere from "./components/TechSphere";
import PortfolioPage from "./components/PortfolioPage";
import ContactPage from "./components/ContactPage";
import PageTransition from "./components/PageTransition";
import BackToTop from "./components/BackToTop";
import AutoScrollToTop from "./components/AutoScrollToTop";
import AutoAnimate from "./components/AutoAnimate"; // ADD THIS

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <div className="App">
      <AutoScrollToTop />
      {loading && <Loader />}
      <Header />

      <AutoAnimate />
      <Routes>
        <Route
          path="/"
          element={
            <PageTransition>
              <>
                <Hero />
                <Services />
                <Portfolio />
                <Team />
                <Testimonials />
                <TechSphere />
              </>
            </PageTransition>
          }
        />
        <Route
          path="/services"
          element={
            <PageTransition>
              <ServicesPage />
            </PageTransition>
          }
        />
        <Route
          path="/portfolio"
          element={
            <PageTransition>
              <PortfolioPage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
      </Routes>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
