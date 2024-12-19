import React from 'react';
import styles from './BridgeSection.module.css';
import sideImage from '../../assets/images/포스터.png';

const BridgeSection = () => {
  return (
    <section className={styles.bridgeSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.textSection}>
          <div className={styles.whiteBox}>
            2024 미디어콘텐츠학부 END TO AND 졸업전시회
          </div>
          <div className={styles.greenBox}>
            새로운 시작을 향한 우리들의 창의적 여정
          </div>
          <div className={styles.textContent}>
            <p className={styles.subtitle}>
              끝이 아닌 과정의 <span className={styles.highlight}>한 부분</span>
            </p>
            <p className={styles.description}>
              우리 졸업생들은 각자의 분야에서 전문가가 되기 위해 끝없는 배움을 이어가고 있습니다.
            </p>
            <p className={styles.description}>
              전시의 키워드인 ‘END to AND’처럼, 이곳에서의 여정이 끝이 아닌 
            </p>
            <p className={styles.description}>
              시작점이 되어, 더 넓은 세상으로 나아갈 준비를 마쳤습니다. 
            </p>
            <p className={styles.description}>
              각기 다른 분야에서 새로운 도전과 창의적인 탐구를 이어가고 있는
            </p>
            <p className={styles.description}>
              졸업생들의 프로젝트를 통해, 그들의 열정과 전문성을 확인해 보세요.
            </p>
          </div>
        </div>
        <div className={styles.imageSection}>
          <img 
            src={sideImage}
            alt="Bridge Section "
            className={styles.sideImage}
          />
        </div>
      </div>
    </section>
  );
};

export default BridgeSection; 