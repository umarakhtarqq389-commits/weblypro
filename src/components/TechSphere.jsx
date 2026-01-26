import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

const ProjectShowcaseCompact = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Full-Stack E-Commerce Platform",
      category: "Web Development",
      description: "Scalable e-commerce with real-time inventory and payments.",
      technologies: [<SiReact />, <SiNodedotjs />, <SiMongodb />],
      color: "#4391f6",
      stats: {
        perf: "+40%",
        conv: "+28%",
        speed: "0.8s",
      },
    },
    {
      id: 2,
      title: "SaaS Analytics Dashboard",
      category: "Product Design",
      description: "Business intelligence dashboard with data visualization.",
      technologies: [<SiReact />, <SiTailwindcss />],
      color: "#9c3af6",
      stats: {
        perf: "+60%",
        conv: "+35%",
        speed: "1.2s",
      },
    },
    {
      id: 3,
      title: "Healthcare Management System",
      category: "Enterprise",
      description: "Secure patient management with EHR features.",
      technologies: [<SiReact />, <SiNodedotjs />],
      color: "#3aa99e",
      stats: {
        perf: "+50%",
        conv: "+42%",
        speed: "1.5s",
      },
    },
    {
      id: 4,
      title: "AI Customer Service Chatbot",
      category: "AI Integration",
      description: "Customer service chatbot with NLP capabilities.",
      technologies: [<SiReact />, <SiNodedotjs />],
      color: "#f6a43a",
      stats: {
        perf: "+75%",
        conv: "+55%",
        speed: "0.9s",
      },
    },
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

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
        nextSlide(); // ✅ nextSlide is stable via useCallback
      }
    }, 4000);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearInterval(interval);
    };
  }, [isMobile, nextSlide]); // ✅ use nextSlide, not activeIndex

  useEffect(() => {
    if (isMobile && containerRef.current) {
      const cardWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: activeIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [activeIndex, isMobile]);

  return (
    <section className="project-showcase-compact">
      <div className="container">
        {/* Section Header */}
        <div className="showcase-header-compact">
          <h2 className="showcase-title-compact">
            Our Latest Work in{" "}
            <span className="gradient-text">Web Development & Design</span>
          </h2>
          <p className="showcase-subtitle-compact">
            Discover our featured projects showcasing innovation and performance
          </p>
        </div>

        {/* Desktop Carousel */}
        {!isMobile && (
          <>
            <div className="carousel-compact-container">
              <div className="carousel-compact">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`project-card-compact ${
                      index === activeIndex ? "active" : ""
                    }`}
                    style={{
                      "--project-color": project.color,
                      transform: `translateX(${
                        (index - activeIndex) * 320
                      }px) scale(${index === activeIndex ? 1 : 0.9})`,
                      opacity: Math.max(
                        0.3,
                        1 - Math.abs(index - activeIndex) * 0.4
                      ),
                      zIndex: projects.length - Math.abs(index - activeIndex),
                    }}
                  >
                    {/* Compact Header */}
                    <div className="card-header-compact">
                      <span className="project-category-compact">
                        {project.category}
                      </span>
                      <a href="/" className="action-link-compact">
                        <FaExternalLinkAlt />
                      </a>
                    </div>

                    {/* Project Title */}
                    <h3 className="project-title-compact">{project.title}</h3>

                    {/* Description */}
                    <p className="project-desc-compact">
                      {project.description}
                    </p>

                    {/* Compact Tech Stack */}
                    <div className="tech-stack-compact">
                      {project.technologies.map((tech, i) => (
                        <div key={i} className="tech-icon-compact">
                          {tech}
                        </div>
                      ))}
                    </div>

                    {/* Compact Stats */}
                    <div className="stats-compact">
                      <div className="stat-row">
                        <div className="stat-box">
                          <div
                            className="stat-value-compact"
                            style={{ color: project.color }}
                          >
                            {project.stats.perf}
                          </div>
                          <div className="stat-label-compact">PERF.</div>
                        </div>
                        <div className="stat-box">
                          <div
                            className="stat-value-compact"
                            style={{ color: project.color }}
                          >
                            {project.stats.conv}
                          </div>
                          <div className="stat-label-compact">CONV.</div>
                        </div>
                        <div className="stat-box">
                          <div
                            className="stat-value-compact"
                            style={{ color: project.color }}
                          >
                            {project.stats.speed}
                          </div>
                          <div className="stat-label-compact">SPEED</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Simple Navigation */}
              <div className="nav-simple">
                <button onClick={prevSlide} className="nav-btn-simple">
                  <FaChevronLeft />
                </button>
                <div className="dots-simple">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      className={`dot-simple ${
                        index === activeIndex ? "active" : ""
                      }`}
                      onClick={() => setActiveIndex(index)}
                      style={{ "--dot-color": projects[index].color }}
                    />
                  ))}
                </div>
                <button onClick={nextSlide} className="nav-btn-simple">
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </>
        )}

        {/* Mobile Cards Stack */}
        {isMobile && (
          <div className="mobile-cards-container" ref={containerRef}>
            <div className="mobile-cards-wrapper">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="project-card-mobile"
                  style={{ "--project-color": project.color }}
                >
                  {/* Mobile Header */}
                  <div className="card-header-mobile">
                    <span className="project-category-mobile">
                      {project.category}
                    </span>
                    <a href="/" className="action-link-mobile">
                      <FaExternalLinkAlt />
                    </a>
                  </div>

                  {/* Project Title */}
                  <h3 className="project-title-mobile">{project.title}</h3>

                  {/* Description */}
                  <p className="project-desc-mobile">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="tech-stack-mobile">
                    {project.technologies.map((tech, i) => (
                      <div key={i} className="tech-icon-mobile">
                        {tech}
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="stats-mobile">
                    <div className="stat-row-mobile">
                      <div className="stat-box-mobile">
                        <div
                          className="stat-value-mobile"
                          style={{ color: project.color }}
                        >
                          {project.stats.perf}
                        </div>
                        <div className="stat-label-mobile">PERF.</div>
                      </div>
                      <div className="stat-box-mobile">
                        <div
                          className="stat-value-mobile"
                          style={{ color: project.color }}
                        >
                          {project.stats.conv}
                        </div>
                        <div className="stat-label-mobile">CONV.</div>
                      </div>
                      <div className="stat-box-mobile">
                        <div
                          className="stat-value-mobile"
                          style={{ color: project.color }}
                        >
                          {project.stats.speed}
                        </div>
                        <div className="stat-label-mobile">SPEED</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Navigation Dots */}
            <div className="mobile-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`mobile-dot ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  style={{ "--dot-color": projects[index].color }}
                />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
      </div>
    </section>
  );
};

export default ProjectShowcaseCompact;
