import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaShoppingCart,
  FaWordpress,
  FaChartLine,
  FaPalette,
  FaSearch,
  FaVideo,
  FaMobileAlt,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const location = useLocation();

  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Website Development",
      idName: "website-development", // Added ID for anchor
      description:
        "Custom websites built with modern technologies like React, Vue, and Node.js.",
      color: "#4391f6",
    },
    {
      id: 2,
      icon: <FaShoppingCart />,
      title: "Shopify Development",
      idName: "shopify-development", // Added ID for anchor
      description:
        "E-commerce solutions with Shopify to boost your online sales.",
      color: "#7b68ee",
    },
    {
      id: 3,
      icon: <FaWordpress />,
      title: "WordPress Development",
      idName: "wordpress-development", // Added ID for anchor
      description: "Custom WordPress themes and plugins for your business.",
      color: "#21759b",
    },
    {
      id: 4,
      icon: <FaChartLine />,
      title: "Digital Marketing",
      idName: "digital-marketing", // Added ID for anchor
      description:
        "Comprehensive digital marketing strategies to grow your brand.",
      color: "#f63a6b",
    },
    {
      id: 5,
      icon: <FaPalette />,
      title: "Graphic Designing",
      idName: "graphic-designing", // Added ID for anchor
      description:
        "Creative designs for logos, branding, and marketing materials.",
      color: "#3aa99e",
    },
    {
      id: 6,
      icon: <FaSearch />,
      title: "SEO Optimization",
      idName: "seo-optimization", // Added ID for anchor
      description:
        "Improve your search engine rankings and drive organic traffic.",
      color: "#f6a43a",
    },
    {
      id: 7,
      icon: <FaVideo />,
      title: "Video Editing",
      idName: "video-editing", // Added ID for anchor
      description: "Professional video editing for marketing and social media.",
      color: "#9c3af6",
    },
    {
      id: 8,
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      idName: "mobile-app-development", // Added ID for anchor
      description: "Cross-platform mobile applications for iOS and Android.",
      color: "#3af6a4",
    },
  ];

  // Scroll to service when hash is present in URL
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1); // Remove the '#'
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          // Calculate position considering fixed header
          const headerHeight = 120; // Adjust based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Add highlight effect
          element.classList.add("highlight-service");
          setTimeout(() => {
            element.classList.remove("highlight-service");
          }, 2000);
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">OUR SERVICES</div>
            <h1 className="hero-title">
              Complete Digital <span className="gradient-text">Solutions</span>
            </h1>
            <p className="hero-subtitle">
              From website development to digital marketing, we provide
              end-to-end digital solutions that drive growth, increase revenue,
              and build your online presence.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="services-section" id="services-list">
        <div className="container">
          <h2 className="section-title">
            Our <span className="gradient-text">Complete Services</span>
          </h2>

          <div className="services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.idName} // Add ID to each service card
                className={`service-card ${
                  hoveredService === service.id ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                style={{ "--hover-color": service.color }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-cta">
                  <a
                    href={`/services#${service.idName}`}
                    className="btn btn-outline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="simple-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Contact us today to discuss how we can help your business grow
            </p>
            <a href="/contact" className="cta-btn">
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
};

export default ServicesPage;
