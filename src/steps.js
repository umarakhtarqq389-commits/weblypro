import React, { useEffect, useRef } from 'react';
import './Procedure.scss';

const Procedure = () => {
  const procedureRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (procedureRef.current) {
      const steps = procedureRef.current.querySelectorAll('.procedure-step');
      steps.forEach((step) => observer.observe(step));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="procedure-section" ref={procedureRef}>
       <div className="section-header">
          <h2>Our Procedure</h2>
          <div className="line"></div>
          
        </div>
      
      <div className="procedure-steps">
        <div className="procedure-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">Initiate Case</h3>
            <p className="step-description">Submit your documents we will start finding the best opportunities for you.</p>
          </div>
        </div>
        
        <div className="procedure-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">Get Details</h3>
            <p className="step-description">Contact us for initial details and get advice from our professional consultants.</p>
          </div>
        </div>
        
        <div className="procedure-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">Get Offer Letter</h3>
            <p className="step-description">After applying to some top universities, you will get an offer letter from the university.</p>
          </div>
        </div>
        
        <div className="procedure-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title">Admission Done</h3>
            <p className="step-description">Following the offer letter, you get admission to the university, submit the fee, and done.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procedure;