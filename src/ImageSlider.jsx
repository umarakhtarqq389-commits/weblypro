



// import React, { useState } from "react";
// import "./ImageSlider.scss";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const ImageSlider = () => {
//   const slides = [
//     {
//         id: 1,
//         title: "Study in Dubai",
//         img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80"
//       },
//       {
//         id: 2,
//         title: "Study in Ireland",
//         img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80"
//       },
//       {
//         id: 3,
//         title: "Study in Canada",
//         img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80"
//       },
//       {
//         id: 4,
//         title: "Study in UK",
//         img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80"
//       },
//       {
//         id: 5,
//         title: "Study in Cyprus",
//          img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80"
//       }
//   ];

//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 2 >= slides.length ? 0 : prev + 2));
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 2 < 0 ? slides.length - 2 : prev - 2));
//   };

//   return (
//     <div className="slider-container">
//       <div className="slider-header">
//         <h5 className="sub-heading">FAVOURITE DESTINATION</h5>
//         <h2>Popular Destinations For International Students</h2>
//         <p>
//           Are you ready to launch the next phase of your academic as well as
//           professional growth? Is quality education in distinguished
//           universities around the world your ultimate dream? If yes, sit back
//           and let us take the wheel!
//         </p>
//       </div>

//       <div className="slider-wrapper">
//         <button className="arrow left" onClick={prevSlide}>
//           <FaChevronLeft />
//         </button>

//         <div className="slider">
//           <div
//             className="slides"
//             style={{
//               transform: `translateX(-${current * (100 / 2)}%)`
//             }}
//           >
//             {slides.map((slide) => (
//               <div key={slide.id} className="slide">
//                 <img src={slide.img} alt={slide.title} />
//                 {/* ✅ Text overlay inside image bottom-left */}
//                 <div className="caption">{slide.title}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button className="arrow right" onClick={nextSlide}>
//           <FaChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
import React, { useState, useEffect, useCallback } from 'react';
import './ImageSlider.scss';

const StudyDestinations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const countries = [
    {
      id: 1,
      name: "UK",
      image: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1755763224/photo-1513635269975-59663e0ac1ad_ynvq4w.avif",
      stats: {
        universities: "130+",
        tuition: "£15,000-£20,000",
        workVisa: "02-04 Years"
      }
    },
    {
      id: 2,
      name: "USA",
      image: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1755763231/photo-1485738422979-f5c462d49f74_ab8nju.avif",
      stats: {
        universities: "5,300+",
        tuition: "$20,000-$50,000",
        workVisa: "01-03 Years"
      }
    },
    {
      id: 3,
      name: "UAE",
      image: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1755763240/photo-1512453979798-5ea266f8880c_rlbhbh.avif",
      stats: {
        universities: "130+",
        tuition: "AED 55,000-80,000",
        workVisa: "02-04 Years"
      }
    },
    {
      id: 4,
      name: "Australia",
      image: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1755763248/photo-1506973035872-a4ec16b8e8d9_scsbfh.avif",
      stats: {
        universities: "43",
        tuition: "AUD 20,000-45,000",
        workVisa: "02-04 Years"
      }
    },
    {
      id: 5,
      name: "Canada",
      image: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1755763256/photo-1519832979-6fa011b87667_tkpdco.avif",
      stats: {
        universities: "96",
        tuition: "CAD 15,000-35,000",
        workVisa: "03 Years"
      }
    },
    {
      id: 6,
      name: "Germany",
      image: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1755763265/photo-1467269204594-9661b134dd2b_l4zfua.avif",
      stats: {
        universities: "400+",
        tuition: "€0-20,000",
        workVisa: "18 Months"
      }
    },
    {
      id: 7,
      name: "France",
      image: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1755763275/photo-1502602898657-3e91760cbb34_sv7yqy.avif",
      stats: {
        universities: "350+",
        tuition: "€3,000-€10,000",
        workVisa: "02 Years"
      }
    },
    {
      id: 8,
      name: "New Zealand",
      image: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1755763294/photo-1493976040374-85c8e12f0c0e_nbmp4w.avif",
      stats: {
        universities: "8",
        tuition: "NZD 22,000-32,000",
        workVisa: "03 Years"
      }
    },
    {
      id: 9,
      name: "Japan",
      image: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1755763295/photo-1507699622108-4be3abd695ad_ak9uun.avif",
      stats: {
        universities: "780+",
        tuition: "¥535,000-¥1,000,000",
        workVisa: "02 Years"
      }
    }
  ];

  // Calculate total number of slides
  const totalSlides = Math.ceil(countries.length / 3);

  // Auto-scroll functionality with smooth continuous loop
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isTransitioning) {
  //       handleNext();
  //     }
  //   }, 5000);
    
  //   return () => clearInterval(interval);
  // }, [isTransitioning, handleNext]); 

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(prev => (prev + 1) % totalSlides);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  }, [isTransitioning, totalSlides]); // ✅ add totalSlides
 
  
  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  }, [isTransitioning, totalSlides]); // ✅ add totalSlides
 
  

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
 }, [isTransitioning, currentSlide]); // ✅ correct

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();   // ✅ now safe
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isTransitioning, handleNext]); 

  // Get the 3 countries for the current slide
  const getCurrentCountries = () => {
    const startIndex = currentSlide * 3;
    return [
      countries[startIndex % countries.length],
      countries[(startIndex + 1) % countries.length],
      countries[(startIndex + 2) % countries.length]
    ];
  };

  const currentCountries = getCurrentCountries();

  return (
    <section className="study-destinations">
      <div className="container">
        <div className="section-header">
          <h2>STUDY ABROAD</h2>
          <div className="line"></div>
          <p>Explore Comprehensive Information on Top Study Destinations Around the Globe</p>
        </div>

        <div className="carousel-container">
          <div className="carousel-controls">
            <button className="nav-btn prev" onClick={handlePrev} disabled={isTransitioning}>
              &#8249;
            </button>
            <button className="nav-btn next" onClick={handleNext} disabled={isTransitioning}>
              &#8250;
            </button>
          </div>

          <div className="countries-carousel">
            <div 
              className="carousel-track"
              style={{ 
                transform: `translateX(0)`,
                transition: isTransitioning ? 'none' : 'none'
              }}
            >
              <div className="carousel-slide">
                {currentCountries.map((country) => (
                  <div 
                    key={country.id} 
                    className="country-card"
                    onMouseEnter={() => setHoveredCountry(country.id)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  >
                    <div className="country-image">
                      <img src={country.image} alt={country.name} />
                      <div className="country-name">{country.name}</div>
                    </div>
                    
                    <div className={`country-info ${hoveredCountry === country.id ? 'show' : ''}`}>
                      <div className="stats">
                        <div className="stat">
                          <span className="number">{country.stats.universities}</span>
                          <span className="label">Universities</span>
                        </div>
                        <div className="stat">
                          <span className="number">{country.stats.tuition}</span>
                          <span className="label">Annual tuition fees</span>
                        </div>
                        <div className="stat">
                          <span className="number">{country.stats.workVisa}</span>
                          <span className="label">Post study work visa</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="carousel-dots">
            {Array(totalSlides).fill().map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>

        <div className="view-more">
          <button className="view-more-btn">
            Show More Countries <span className="arrow">&#8250;</span>
          </button>
         
        </div>
      </div>
    </section>
  );
};

export default StudyDestinations;