import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./SocialLinks.css";
import mapImage from '../../assets/images/로고.png';

function SocialLinks() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="social-links">
      <button
        className={`top-button ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="페이지 상단으로"
        
      >
        <FaArrowUp />
      </button>
      <div className="social-icons">
        <a
          href="https://media.seowon.ac.kr/2024/multi/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
          data-tooltip="2024 미디어콘텐츠학부 졸업전시회"
        >
          <img 
            src={mapImage}
            alt="Instagram"
            className="social-icon-image"
          />
        </a>

      </div>
    </div>
  );
}

export default SocialLinks;
