// components/HomePortfolio.jsx
import React, { useState, useEffect, useCallback } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  SiReact,
  SiNextdotjs,
  SiWordpress,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiShopify,
  SiCss3,
  SiMysql,
  SiPhp,
} from "react-icons/si";

const HomePortfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Mes IT Solutions",
      category: "Web Development",
      description:
        "Modern IT solutions company website with service showcase and client portal.",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764859380/Screenshot_2025-12-04_at_7.42.45_PM_zszz3y.png",
      technologies: [<SiReact />, <SiNodedotjs />, <SiMongodb />],
      liveLink: "https://www.modern-sol.com/",
      githubLink: "/",
      color: "#4391f6",
      stats: { perf: "+40%", conv: "+35%", speed: "0.9s" },
    },
    {
      id: 2,
      title: "Janan",
      category: "E-commerce",
      description:
        "E-commerce platform with advanced product filtering and payment integration.",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764859825/Screenshot_2025-12-04_at_7.50.10_PM_h11cvf.png",
      technologies: [<SiShopify />, <SiCss3 />],
      liveLink: "https://janan.com/",
      githubLink: "/",
      color: "#9c3af6",
      stats: { perf: "+60%", conv: "+45%", speed: "1.1s" },
    },
    {
      id: 3,
      title: "Musa Al Raza Travel & Tours",
      category: "Travel Agency",
      description:
        "Travel booking platform with tour packages and itinerary management.",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764860161/Screenshot_2025-12-04_at_7.55.51_PM_osnnnq.png",
      technologies: [<SiReact />, <SiNodedotjs />],
      liveLink: "https://www.musaalrazatravelandtours.com/",
      githubLink: "/",
      color: "#3aa99e",
      stats: { perf: "+55%", conv: "+38%", speed: "1.3s" },
    },
    {
      id: 4,
      title: "Dillangzo Academy International",
      category: "International Academy",
      description:
        "Educational platform with course management and student portal.",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764860280/Screenshot_2025-12-04_at_7.57.50_PM_ukvroz.png",
      technologies: [<SiReact />, <SiNodedotjs />, <SiMongodb />],
      liveLink: "http://dillangzoacademy.com/",
      githubLink: "/",
      color: "#f6a43a",
      stats: { perf: "+50%", conv: "+42%", speed: "1.2s" },
    },
    {
      id: 5,
      title: "Abroad Mentors",
      category: "Consultancy",
      description:
        "Study abroad consultation platform with university matching system.",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764860402/Screenshot_2025-12-04_at_7.59.53_PM_y1xait.png",
      technologies: [<SiReact />, <SiNextdotjs />, <SiTailwindcss />],
      liveLink: "http://abroadmentors.net/",
      githubLink: "/",
      color: "#e91e63",
      stats: { perf: "+65%", conv: "+50%", speed: "0.8s" },
    },
    {
      id: 6,
      title: "Zaib e Hoor",
      category: "E-commerce",
      description:
        "Fashion e-commerce platform with product customization options.",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764860512/Screenshot_2025-12-04_at_8.01.32_PM_besixc.png",
      technologies: [<SiShopify />, <SiTailwindcss />],
      liveLink: "https://zaibehoor.com/",
      githubLink: "/",
      color: "#9c27b0",
      stats: { perf: "+70%", conv: "+55%", speed: "0.9s" },
    },
    {
      id: 7,
      title: "Konnect Study Advisor",
      category: "Education",
      description:
        "Study abroad guidance platform with counselor matching system.",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764859395/Screenshot_2025-12-04_at_7.43.04_PM_ouybix.png",
      technologies: [<SiReact />, <SiTailwindcss />],
      liveLink: "https://konnectstudy-a61m.vercel.app/",
      githubLink: "/",
      color: "#00bcd4",
      stats: { perf: "+45%", conv: "+30%", speed: "1.0s" },
    },
    {
      id: 8,
      title: "PSF International School",
      category: "Education",
      description:
        "School management system with student portal and parent dashboard.",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764860805/WhatsApp_Image_2025-12-04_at_8.05.41_PM_cm6zpg.jpg",
      technologies: [<SiWordpress />, <SiReact />],
      liveLink: "/",
      githubLink: "/",
      color: "#4caf50",
      stats: { perf: "+40%", conv: "+25%", speed: "1.4s" },
    },
    {
      id: 9,
      title: "Textile Hub",
      category: "E-commerce",
      description:
        "Textile marketplace platform for wholesale and retail (Coming Soon).",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764861020/Screenshot_2025-12-04_at_8.10.00_PM_xqrodd.png",
      technologies: [<SiPhp />, <SiNodedotjs />, <SiMysql />],
      liveLink: "/",
      githubLink: "/",
      color: "#ff9800",
      stats: { perf: "+0%", conv: "+0%", speed: "0.0s" },
    },
  ];
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]); // ✅ depends on projects.length

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const interval = setInterval(() => {
      if (!isMobile) {
        nextSlide(); // ✅ use nextSlide, must add to deps
      }
    }, 4000);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearInterval(interval);
    };
  }, [isMobile, nextSlide]); // ✅ fixed dependencies

  return (
    <section className="home-portfolio-section" id="portfolio">
      <div className="container">
        {/* Header */}
        <div className="portfolio-header">
          <h2 className="section-title">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="section-subtitle">
            Explore our featured projects showcasing our expertise in web
            development and design
          </p>
        </div>

        {/* Desktop Slider */}
        {!isMobile && (
          <div className="portfolio-slider">
            <div className="slider-container">
              <div className="slider-track">
                {projects.map((project, index) => (
                  // Update your slider-card style in the JSX:
                  <div
                    key={project.id}
                    className={`slider-card ${
                      index === activeIndex ? "active" : ""
                    }`}
                    style={{
                      "--project-color": project.color,
                      "--position": index - activeIndex,
                      opacity:
                        index === activeIndex
                          ? 1
                          : Math.max(
                              0.3,
                              1 - Math.abs(index - activeIndex) * 0.4
                            ),
                      zIndex: projects.length - Math.abs(index - activeIndex),
                    }}
                  >
                    <div className="card-image">
                      <img src={project.image} alt={project.title} />
                      <div className="card-overlay">
                        <div className="card-links">
                          <a
                            href={project.liveLink}
                            className="card-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt />
                          </a>
                          <a
                            href={project.githubLink}
                            className="card-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-header">
                        <span className="project-category">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="card-title">{project.title}</h3>
                      <p className="card-description">{project.description}</p>
                      <div className="card-tech">
                        {project.technologies.map((tech, i) => (
                          <div key={i} className="tech-icon">
                            {tech}
                          </div>
                        ))}
                      </div>
                      <div className="card-stats">
                        <div className="stat-box">
                          <span
                            className="stat-value"
                            style={{ color: project.color }}
                          >
                            {project.stats.perf}
                          </span>
                          <span className="stat-label">PERF.</span>
                        </div>
                        <div className="stat-box">
                          <span
                            className="stat-value"
                            style={{ color: project.color }}
                          >
                            {project.stats.conv}
                          </span>
                          <span className="stat-label">CONV.</span>
                        </div>
                        <div className="stat-box">
                          <span
                            className="stat-value"
                            style={{ color: project.color }}
                          >
                            {project.stats.speed}
                          </span>
                          <span className="stat-label">SPEED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="slider-nav">
              <button onClick={prevSlide} className="nav-btn">
                <FaChevronLeft />
              </button>
              <div className="slider-dots">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === activeIndex ? "active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                    style={{ "--dot-color": projects[index].color }}
                  />
                ))}
              </div>
              <button onClick={nextSlide} className="nav-btn">
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Grid */}
        {isMobile && (
          <div className="portfolio-mobile-grid">
            {projects.slice(0, 4).map((project) => (
              <div key={project.id} className="mobile-portfolio-card">
                <div className="mobile-card-image">
                  <img src={project.image} alt={project.title} />
                  <div className="mobile-card-overlay">
                    <div className="mobile-card-links">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mobile-card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="mobile-category">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="portfolio-cta">
          <Link to="/portfolio" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;
