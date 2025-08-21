// import React from 'react';
// import './SocialSidebar.scss';
// import { 
//   FaFacebook, 
//   FaTwitter, 
//   FaInstagram, 
//   FaLinkedin, 
//   FaYoutube, 
//   FaWhatsapp 
// } from 'react-icons/fa';

// const SocialSidebar = () => {
//   const socialLinks = [
//     { 
//       name: 'facebook', 
//       url: 'https://www.facebook.com/EdifyGroupPakistan/', 
//       icon: <FaFacebook size={20} />,
//       color: '#1877F2'
//     },
//     { 
//       name: 'whatsapp', 
//       url: 'https://wa.me/yourphonenumber', // Replace with actual WhatsApp link
//       icon: <FaWhatsapp size={20} />,
//       color: '#25D366'
//     },
//     { 
//       name: 'instagram', 
//       url: 'https://www.instagram.com/edifygroupofficial/', 
//       icon: <FaInstagram size={20} />,
//       color: '#E4405F'
//     },
//     { 
//       name: 'linkedin', 
//       url: 'https://www.linkedin.com/company/edify-group-of-companies', 
//       icon: <FaLinkedin size={20} />,
//       color: '#0A66C2'
//     },
//     { 
//       name: 'twitter', 
//       url: 'https://twitter.com/EdifyGroup_', 
//       icon: <FaTwitter size={20} />,
//       color: '#1DA1F2'
//     },
//     { 
//       name: 'youtube', 
//       url: 'https://www.youtube.com/@EDIFYGROUP', 
//       icon: <FaYoutube size={20} />,
//       color: '#FF0000'
//     }
//   ];

//   return (
//     <div className="social-sidebar">
//       {socialLinks.map((social) => (
//         <a
//           key={social.name}
//           href={social.url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`social-link social-${social.name}`}
//           aria-label={social.name}
//           style={{ '--social-color': social.color }}
//         >
//           {social.icon}
//         </a>
//       ))}
//     </div>
//   );
// };

// export default SocialSidebar;

import React, { useState } from 'react';
import './SocialSidebar.scss';
import { 
  FaFacebook, 
 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaWhatsapp,
  FaChevronLeft,
  FaChevronRight,
  FaTiktok
} from 'react-icons/fa';

const SocialSidebar = () => {
  const [open, setOpen] = useState(false);

  const socialLinks = [
    { name: 'facebook', url: 'https://www.facebook.com/profile.php?id=61573866037648', icon: <FaFacebook size={20} />, color: '#1877F2' },
    { name: 'whatsapp', url: 'https://wa.me/+92 219666612', icon: <FaWhatsapp size={20} />, color: '#25D366' },
    { name: 'instagram', url: 'https://www.instagram.com/konnectstudyadvisor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: <FaInstagram size={20} />, color: '#E4405F' },
    { name: 'linkedin', url: 'https://www.linkedin.com/', icon: <FaLinkedin size={20} />, color: '#0A66C2' },
    { name: 'tiktok', url: 'https://twitter.com/', icon: <FaTiktok size={20} />, color: '#000000' },
    { name: 'youtube', url: 'https://www.youtube.com/', icon: <FaYoutube size={20} />, color: '#FF0000' }
  ];

  return (
    <div className={`social-sidebar ${open ? 'open' : ''}`}>
      <div className="sidebar-toggle" onClick={() => setOpen(!open)}>
        {open ? <FaChevronRight size={20} /> : <FaChevronLeft size={20} />}
      </div>
      <div className="social-links">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link social-${social.name}`}
            style={{ '--social-color': social.color }}
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSidebar;
