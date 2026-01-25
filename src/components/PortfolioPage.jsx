// components/PortfolioPage.jsx
import React, { useState, useEffect } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowUp,
  FaFilter,
  FaGlobe,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Mes IT Solutions",
      category: "web",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764859380/Screenshot_2025-12-04_at_7.42.45_PM_zszz3y.png",
      description:
        "Modern IT solutions company website with service showcase and client portal.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      year: "2025",
      client: "Mes IT Solutions",
      liveLink: "https://www.modern-sol.com/",
      githubLink: "/",
    },
    {
      id: 2,
      title: "Janan E-commerce",
      category: "ecommerce",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764859825/Screenshot_2025-12-04_at_7.50.10_PM_h11cvf.png",
      description:
        "Complete e-commerce platform with advanced filtering and payment integration.",
      tech: ["Shopify", "CSS", "Tailwind"],
      year: "2022",
      client: "Janan",
      liveLink: "https://janan.com/",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Musa Al Raza Travel & Tours",
      category: "web",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764860161/Screenshot_2025-12-04_at_7.55.51_PM_osnnnq.png",
      description:
        "Travel booking platform with tour packages and itinerary management system.",
      tech: ["React", "MongoDB", "Node.js"],
      year: "2025",
      client: "Musa Al Raza Travel",
      liveLink: "https://www.musaalrazatravelandtours.com/",
      githubLink: "/",
    },
    {
      id: 4,
      title: "Dillangzo Academy International",
      category: "education",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764860280/Screenshot_2025-12-04_at_7.57.50_PM_ukvroz.png",
      description:
        "Educational platform with course management and student portal system.",
      tech: ["React", "Node.js", "MongoDB"],
      year: "2023",
      client: "Dillangzo Academy",
      liveLink: "http://dillangzoacademy.com/",
      githubLink: "/",
    },
    {
      id: 5,
      title: "Abroad Mentors",
      category: "education",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764860402/Screenshot_2025-12-04_at_7.59.53_PM_y1xait.png",
      description:
        "Study abroad consultation platform with university matching system.",
      tech: ["React.js", "Node.js"],
      year: "2024",
      client: "Abroad Mentors",
      liveLink: "http://abroadmentors.net/",
      githubLink: "/",
    },
    {
      id: 6,
      title: "Zaib e Hoor",
      category: "ecommerce",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764860512/Screenshot_2025-12-04_at_8.01.32_PM_besixc.png",
      description:
        "Fashion e-commerce platform with product customization and CMS.",
      tech: ["Shopify", "Cloudinary"],
      year: "2023",
      client: "Zaib e Hoor",
      liveLink: "https://zaibehoor.com/",
      githubLink: "/",
    },
    {
      id: 7,
      title: "Konnect Study Advisor",
      category: "education",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764859395/Screenshot_2025-12-04_at_7.43.04_PM_ouybix.png",
      description:
        "Study abroad guidance platform with counselor matching system.",
      tech: ["React", "Node.js", "Tailwind.css"],
      year: "2024",
      client: "Konnect Study",
      liveLink: "https://konnectstudy-a61m.vercel.app/",
      githubLink: "/",
    },
    {
      id: 8,
      title: "PSF International School",
      category: "education",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764860805/WhatsApp_Image_2025-12-04_at_8.05.41_PM_cm6zpg.jpg",
      description:
        "School management system with student portal and parent dashboard.",
      tech: ["React", "CSS"],
      year: "2024",
      client: "PSF International School",
      liveLink: "/",
      githubLink: "/",
    },
    {
      id: 9,
      title: "Textile Hub",
      category: "ecommerce",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764861020/Screenshot_2025-12-04_at_8.10.00_PM_xqrodd.png",
      description:
        "Textile marketplace platform for wholesale and retail (Coming Soon).",
      tech: ["React", "Node.js", "MongoDB", "Redis"],
      year: "2025",
      client: "Textile Hub",
      liveLink: "/",
      githubLink: "/",
    },
  ];

  const filters = [
    { id: "all", label: "Recent Projects" },
    { id: "web", label: "Web Development" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "education", label: "Education" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">OUR PORTFOLIO</div>
            <h1 className="hero-title">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="hero-subtitle">
              Explore our collection of successful projects across various
              industries. Each project showcases our expertise and commitment to
              quality.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">99+</span>
                <span className="stat-label">Projects Done</span>
              </div>
              <div className="stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Live Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <h2>
              <FaFilter className="filter-icon" /> Filter Projects
            </h2>
            <p>Browse our projects by category</p>
          </div>

          <div className="portfolio-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${
                  activeFilter === filter.id ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <div
                className="portfolio-item"
                key={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
              >
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div
                    className={`portfolio-overlay ${
                      hoveredProjectId === project.id ? "visible" : ""
                    }`}
                  >
                    <div className="portfolio-links">
                      {project.liveLink !== "#" && (
                        <a
                          href={project.liveLink}
                          className="portfolio-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live Demo"
                        >
                          <FaGlobe />
                        </a>
                      )}
                      {project.githubLink !== "#" && (
                        <a
                          href={project.githubLink}
                          className="portfolio-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub Repository"
                        >
                          <FaGithub />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <span className="project-category">
                      {project.category === "web"
                        ? "Web Development"
                        : project.category === "ecommerce"
                        ? "E-commerce"
                        : project.category === "education"
                        ? "Education"
                        : "Web Development"}
                    </span>
                  </div>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-client">
                    <strong>Client:</strong> {project.client}
                  </div>
                  <div className="portfolio-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <h3>No projects found in this category</h3>
              <p>Try selecting a different filter</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss how we can bring your ideas to life with our
              expertise and innovative solutions.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-btn primary">
                Start Your Project
              </Link>
              <Link to="/services" className="cta-btn secondary">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default PortfolioPage;
