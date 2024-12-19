import React from 'react';
import './FirstSection.css';
import scrollArrow from '../../assets/images/main_arrow.svg';
import loopVideo from '../../assets/videos/M1.mp4';

function FirstSection() {
  return (
    <section className="first-section">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={loopVideo} type="video/mp4" />
      </video>
      <div className="first-section-container">
        <div className="text-content">
          
          <p className="exhibition-title">2024 SWU MEDIA CONTENTS EXHIBITION</p>
          <div className="main-text-wrapper">
            <p className="exhibition-year">2024</p>
            <p className="exhibition-slogan">END TO AND</p>
          </div>
          <p className="exhibition-subtitle">: Every end is new beginning</p>
          <p className="exhibition-subtitle-kr" >"한계를 넘어 새롭게 도약하는 우리의 미래"</p>


        </div>

      </div>
      <div className="scroll-indicator">
            <img 
              src={scrollArrow} 
              alt="scroll down" 
              className="scroll-arrow-img"
            />
          </div>
    </section>
  );
}

export default FirstSection;