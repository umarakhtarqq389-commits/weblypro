// components/AboutPage.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  FaLinkedinIn,
  FaUsers,
  FaAward,
  FaProjectDiagram,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const [currentLogo, setCurrentLogo] = useState(0);
  const logosRef = useRef(null);

  const stats = [
    { icon: <FaUsers />, value: "100+", label: "Happy Clients" },
    { icon: <FaProjectDiagram />, value: "100+", label: "Projects Completed" },
    { icon: <FaAward />, value: "100%", label: "Client Satisfaction" },
    { icon: <FaHandshake />, value: "5+", label: "Years Experience" },
  ];

  const companyValues = [
    {
      icon: <FaRocket />,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions",
    },
    {
      icon: <FaHandshake />,
      title: "Partnership",
      description: "We work with you as partners, not just service providers",
    },
    {
      icon: <FaAward />,
      title: "Excellence",
      description: "We deliver nothing but the highest quality work",
    },
  ];

  // Client logos - Add your actual client logos here
  const clientLogos = [
    {
      //   name: "Janan",
      logo: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764870083/Screenshot_2025-12-04_at_10.41.17_PM_dwlcjd.png",
    },
    {
      //   name: "Musa al raza",
      logo: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764870162/Screenshot_2025-12-04_at_10.42.35_PM_x1wico.png",
    },
    {
      //   name: "MES IT Solutions",
      logo: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764870273/Screenshot_2025-12-04_at_10.44.27_PM_s0ltz0.png",
    },
    {
      //   name: "Dillangzo Academy",
      logo: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1760757687/WhatsApp_Image_2025-10-18_at_8.09.48_AM_elxc1n.jpg",
    },
    {
      //   name: "Konnect",
      logo: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1760955524/Untitled_design_kssqhy.png",
    },
    {
      //   name: "Abroad Mentors",
      logo: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764870518/Screenshot_2025-12-04_at_10.48.33_PM_xqkts9.png",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Muhammad Rehman",
      role: "CEO & Founder",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764842662/Gemini_Generated_Image_kojlt5kojlt5kojl_1_im0dc9.jpg",
      bio: "With extensive experience in business development and digital strategy, Rehman leads WeblyPro's vision and growth initiatives. He specializes in building sustainable digital ecosystems.",
      expertise: [
        "Business Strategy",
        "Digital Transformation",
        "Client Relations",
      ],
      linkedin: "#",
    },
    {
      id: 2,
      name: "Umar Akhtar",
      role: "Co-Founder & CTO",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764843037/Gemini_Generated_Image_4nu88m4nu88m4nu8_2_kymoyt.jpg",
      bio: "Umar is the technical mastermind behind WeblyPro's solutions. With expertise in full-stack development and system architecture, he ensures every project is scalable and future-proof.",
      expertise: [
        "Software Architecture",
        "Full-Stack Development",
        "Technical Leadership",
      ],
      linkedin: "#",
    },
  ];

  // Auto-slide logos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % clientLogos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">ABOUT WEBLYPRO</div>
            <h1 className="hero-title">
              Building Digital <span className="gradient-text">Futures</span>{" "}
              Together
            </h1>
            <p className="hero-subtitle">
              We're more than just a digital agency - we're your partners in
              growth. Founded by Rehman Anwaar and Umar Akhtar, WeblyPro
              combines business acumen with technical excellence to deliver
              exceptional results.
            </p>

            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div className="stat" key={index}>
                  <div className="stat-icon">{stat.icon}</div>
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Built in 2024, WeblyPro evolved from a forward-thinking idea
                into a complete digital solutions company. What began as a
                two-person project has grown into a full-service software house
                delivering high-quality tech and creative services to clients
                across multiple industries.
              </p>
              <p>
                Our 50-50 partnership model reflects equal dedication from both
                founders, combining strong business strategy with modern
                technical expertise to craft powerful digital solutions that
                deliver real, measurable results.
              </p>

              <div className="story-highlights">
                <div className="highlight">
                  <strong>2024</strong>
                  <span>Founded with a vision</span>
                </div>
                <div className="highlight">
                  <strong>30+</strong>
                  <span>Successful Projects</span>
                </div>
                <div className="highlight">
                  <strong>100%</strong>
                  <span>Client Retention</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img
                src="https://res.cloudinary.com/du3tkzdhe/image/upload/v1764601885/w_tmlfah.webp"
                alt="WeblyPro"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {companyValues.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" id="team">
        <div className="container">
          <div className="section-header">
            <h2>The Leadership Team</h2>
            <p>Equal partners, shared vision, exceptional results</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.id}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-social">
                    <a
                      href={member.linkedin}
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-header">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-expertise">
                    <h4>Areas of Expertise:</h4>
                    <div className="expertise-tags">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="expertise-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="clients-section">
        <div className="container">
          <div className="section-header">
            <h2>Trusted By Industry Leaders</h2>
            <p>We're proud to have worked with amazing companies</p>
          </div>

          <div className="logos-slider" ref={logosRef}>
            <div className="logos-track">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={index}
                  className={`logo-item ${
                    index === currentLogo ? "active" : ""
                  }`}
                >
                  <div className="logo-box">
                    <img src={client.logo} alt={client.name} />
                    <span className="logo-name">{client.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="logo-dots">
            {clientLogos.map((_, index) => (
              <button
                key={index}
                className={`logo-dot ${index === currentLogo ? "active" : ""}`}
                onClick={() => setCurrentLogo(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work With Us?</h2>
            <p>
              Join our growing list of satisfied clients and let's build
              something amazing together
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-btn primary">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="cta-btn secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
