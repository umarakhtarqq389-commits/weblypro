// components/Team.jsx (For Homepage - Simplified)
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rehman Anwaar",
      role: "CEO & Founder",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764842662/Gemini_Generated_Image_kojlt5kojlt5kojl_1_im0dc9.jpg", // Replace with actual image
      bio: "Lead strategist with expertise in business development and digital transformation",
      linkedin: "/",
    },
    {
      id: 2,
      name: "Umar Akhtar",
      role: "Co-Founder & CTO",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764843037/Gemini_Generated_Image_4nu88m4nu88m4nu8_2_kymoyt.jpg", // Replace with actual image
      bio: "Technical visionary specializing in scalable software architecture and innovation",
      linkedin: "/",
    },
  ];

  return (
    <section className="team-section" id="team">
      <div className="container">
        <h2 className="section-title">
          Meet Our <span className="gradient-text">Leadership</span>
        </h2>

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
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
