import React from 'react';
import styles from './SpacerSection.module.css';
import TextW from '../../assets/images/TextW.png';
import TextG from '../../assets/images/TextG.png';

function SpacerSection() {
  // 많은 수의 이미지를 생성하기 위한 배열
  const images = Array(12).fill(null);

  return (
    <section className={styles.spacerSection}>
      <div className={styles.greenBox}>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            {images.map((_, index) => (
              <img 
                key={`white-1-${index}`} 
                src={TextW} 
                alt="Scrolling Text" 
                className={styles.scrollImage} 
              />
            ))}
          </div>
          <div className={styles.marquee}>
            {images.map((_, index) => (
              <img 
                key={`white-2-${index}`} 
                src={TextW} 
                alt="Scrolling Text" 
                className={styles.scrollImage} 
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.borderBox}>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            {images.map((_, index) => (
              <img 
                key={`green-1-${index}`} 
                src={TextG} 
                alt="Scrolling Text" 
                className={styles.scrollImage} 
              />
            ))}
          </div>
          <div className={styles.marquee}>
            {images.map((_, index) => (
              <img 
                key={`green-2-${index}`} 
                src={TextG} 
                alt="Scrolling Text" 
                className={styles.scrollImage} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpacerSection; 