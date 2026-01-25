// import React, { useEffect } from "react";
// import {
//   FaLaptopCode,
//   FaMobileAlt,
//   FaPalette,
//   FaSearch,
//   FaChartLine,
//   FaCogs,
//   FaArrowRight,
//   FaCheck,
// } from "react-icons/fa";

// const ServiceCard = ({ icon, title, description, color, features }) => {
//   return (
//     <div className="service-card">
//       <div
//         className="service-icon"
//         style={{ backgroundColor: `${color}20`, color: color }}
//       >
//         {icon}
//       </div>
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <ul className="service-features">
//         {features.map((feature, index) => (
//           <li key={index}>
//             <FaCheck style={{ color: color }} />
//             <span>{feature}</span>
//           </li>
//         ))}
//       </ul>
//       <button className="service-btn" style={{ color: color }}>
//         <span>Learn More</span>
//         <FaArrowRight />
//       </button>
//     </div>
//   );
// };

// const Services = () => {
//   // Remove the animation observer for now to test
//   useEffect(() => {
//     // Simple fallback - force show all cards after mount
//     const timer = setTimeout(() => {
//       const cards = document.querySelectorAll(".service-card");
//       cards.forEach((card) => {
//         card.classList.add("animate-in");
//       });
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="services-section">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="section-title">
//             Our <span className="gradient-text">Services</span>
//           </h2>
//           <p className="section-subtitle">
//             Comprehensive digital solutions to transform your business and drive
//             growth
//           </p>
//         </div>

//         <div className="services-grid">
//           <ServiceCard
//             icon={<FaLaptopCode />}
//             title="Web Development"
//             description="Custom websites, e-commerce solutions, and web applications built with modern technologies."
//             color="#6B5BFF"
//             features={["Responsive Design", "E-commerce", "Web Apps", "CMS"]}
//           />
//           <ServiceCard
//             icon={<FaMobileAlt />}
//             title="Mobile Apps"
//             description="Native and cross-platform mobile applications for iOS and Android platforms."
//             color="#3C9EE7"
//             features={["iOS Apps", "Android Apps", "React Native", "Flutter"]}
//           />
//           <ServiceCard
//             icon={<FaPalette />}
//             title="UI/UX Design"
//             description="Stunning visual designs and user experiences that captivate your audience."
//             color="#FF6B8B"
//             features={["UI Design", "UX Research", "Prototyping", "Branding"]}
//           />
//           <ServiceCard
//             icon={<FaSearch />}
//             title="SEO & Marketing"
//             description="Increase visibility and drive qualified traffic with data-driven strategies."
//             color="#4CD964"
//             features={["SEO Audit", "Content Marketing", "Social Media", "PPC"]}
//           />
//           <ServiceCard
//             icon={<FaChartLine />}
//             title="Digital Marketing"
//             description="Comprehensive marketing strategies to grow your brand and increase conversions."
//             color="#FF9500"
//             features={["Social Media", "Email Marketing", "Analytics", "CRO"]}
//           />
//           <ServiceCard
//             icon={<FaCogs />}
//             title="Software Solutions"
//             description="Custom software and enterprise solutions to streamline your operations."
//             color="#5856D6"
//             features={[
//               "Custom Software",
//               "ERP/CRM",
//               "API Development",
//               "Cloud",
//             ]}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

// components/Services.jsx
import React, { useState } from "react";
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
import { IconContext } from "react-icons";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Website Development",
      description:
        "Custom websites built with modern technologies like React, Vue, and Node.js.",
      color: "#8a2be2",
    },
    {
      id: 2,
      icon: <FaShoppingCart />,
      title: "Shopify Development",
      description:
        "E-commerce solutions with Shopify to boost your online sales.",
      color: "#7b68ee",
    },
    {
      id: 3,
      icon: <FaWordpress />,
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins for your business.",
      color: "#9370db",
    },
    {
      id: 4,
      icon: <FaChartLine />,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your brand.",
      color: "#ba55d3",
    },
    {
      id: 5,
      icon: <FaPalette />,
      title: "Graphic Designing",
      description:
        "Creative designs for logos, branding, and marketing materials.",
      color: "#da70d6",
    },
    {
      id: 6,
      icon: <FaSearch />,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic.",
      color: "#dda0dd",
    },
    {
      id: 7,
      icon: <FaVideo />,
      title: "Video Editing",
      description: "Professional video editing for marketing and social media.",
      color: "#ee82ee",
    },
    {
      id: 8,
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android.",
      color: "#ff00ff",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title">
          Our <span className="purple-gradient">Services</span>
        </h2>

        <div className="services-grid">
          {services.map((service) => (
            <div
              className={`service-card ${
                hoveredService === service.id ? "hovered" : ""
              }`}
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              style={{ "--hover-color": service.color }}
            >
              <div className="service-icon">
                <IconContext.Provider value={{ size: "2.5em" }}>
                  {service.icon}
                </IconContext.Provider>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-cta">
                <button className="btn btn-outline">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
