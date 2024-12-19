import React, { useState } from 'react';
import styles from './SecondSection.module.css';

function SecondSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const BASE_URL = '/s201910930/test2024';
  const gridContents = [
    {
      default: {
        highlight: 'END',
        description: '끝이 아닌 과정의 한 부분',
        image: `${BASE_URL}/images/sliderimg/optimized/K1.webp`
      },
      hover: {
        highlight: 'END',
        description: '끝이 아닌 과정의 한 부분',
        description2: '일반적으로 종료를 의미하지만, 여기서는 여정의 한 과정으로서 잠시 멈추는 시을 뜻합니다. 이는 인생의 여러 과정중 하나로, 새로운 배움과 도전을 위한 잠깐의 마무리입니다.',
        description3: '결국 끝은 닫힘이 아닌 다음 이야기를 여는 필연적인 연결의 일부입니다.'
      }
    },
    {
      default: {
        highlight: 'To',
        description: '그리고',
        image: `${BASE_URL}/images/sliderimg/optimized/K2.webp`
      },
      hover: {
        highlight: 'To',
        description: '그리고',
        description2: '“To”는 “그리고”라는 의미로,앞과 뒤를 자연스럽게 연결해 줍니다. 이는 하나의 과정이끝나고 또 다른 시작으로 이어짐을 상징하며,졸업이 끝이 아닌 새 여정으로 이어짐을 의미합니다.',
        description3: '졸업생들에게는 앞으로의 성장과 도전을 향한연결 고리 역할을 합니다.'
      }
    },
    {
      default: {
        highlight: 'AND',
        description: '연결과 확장, 그리고 새로운 이야기',
        image: `${BASE_URL}/images/sliderimg/optimized/K3.webp`
      },
      hover: {
        highlight: 'AND',
        description: '연결과 확장, 그리고 새로운 이야기',
        description2: '새로운 기회를 열고 연결을 확장해 나가는 의미를 지니며,끝을 새로운 시작으로 이어주는 징검다리입니다. 이 단어는 독립된 사건이 아닌 연속된 여정으로서 각자의 다음 장을 예고합니다. ',
        description3: '졸업 후, 졸업생들이 사회에서 새로운 도전과 성장을 이어나갈 수 있는 시작을 상징합니다.'
      }
    }
  ];

  return (
    <section className={styles.secondSection}>
      <div className={styles.imageGrid}>
        {gridContents.map((content, index) => (
          <div 
            key={index}
            className={styles.gridItem}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <picture>
              <source srcSet={content.default.image} type="image/webp" />
              <img 
                src={content.default.image.replace('.webp', '.png')}
                alt={`${content.default.highlight} 이미지`}
                className={styles.backgroundImage}
              />
            </picture>
            <div className={styles.darkBackground}></div>
            <div className={`${styles.overlay} ${hoveredIndex === index ? styles.overlayHidden : ''}`}></div>
            <div className={styles.textContent}>
              <p className={styles.highlight}>
                {hoveredIndex === index ? content.hover.highlight : content.default.highlight}
              </p>
              <div className={styles.descriptionWrapper}>
                <p className={`${styles.description} ${hoveredIndex === index ? styles.descriptionHovered : ''}`}>
                  {hoveredIndex === index ? content.hover.description : content.default.description}
                </p>
                {hoveredIndex === index && (
                  <>
                    <p className={styles.description2}>{content.hover.description2}</p>
                    <p className={styles.description3}>{content.hover.description3}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SecondSection; 