import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footerArea}>
      <div className={styles.Fcontainer}>
        <div className={styles.sun}></div>
        <span className={styles.Ftext1}>2024 SWU MEDIA CONTENTS EXHIBITION</span>
        <span className={styles.Ftext2}>END to AND</span>
      </div>
      <div className={styles.Fcontainer2}>
        <div className={styles.FC1}>
          <p className={styles.FCtext1}>CATEGORY</p>
          <p className={styles.FCtext3}>
            <a 
              href="https://media.seowon.ac.kr/2024/multi" 
              className={styles.footerLink}
            >
              멀티미디어
            </a>
          </p>
          <p className={styles.FCtext3}>
            <a 
              href="https://media.seowon.ac.kr/2024/video" 
              className={styles.footerLink}
            >
              영상미디어
            </a>
          </p>
          <p className={styles.FCtext3}>
            <a 
              href="https://media.seowon.ac.kr/2024/team" 
              className={styles.footerLink}
            >
              팀프로젝트
            </a>
          </p>
          <p className={styles.FCtext3}>
            <a 
              href="https://media.seowon.ac.kr/2024/department" 
              className={styles.footerLink}
            >
              학부 소개
            </a>
          </p>
          <p className={styles.FCtext3}>
            <a 
              href="https://media.seowon.ac.kr/2024/gallery" 
              className={styles.footerLink}
            >
              갤러리
            </a>
          </p>
          <p className={styles.FCtext3}>
            <a 
              href="https://media.seowon.ac.kr/2024/location" 
              className={styles.footerLink}
            >
              오시는 길
            </a>
          </p>
        </div>
        <div className={styles.Fcontainer3}>
          <div className={styles.FC2}>
            <p className={styles.FCtext1}>ADDRESS</p>
            <p className={styles.FCtext3}>
              (우)28674 충북 청주시 서원구 무심서로 377-3(모충동)<br />
              서원대학교 제1자연관 302호
            </p>
          </div>
          <div className={styles.FC3}>
            <p className={styles.FCtext1}>TELL</p>
            <p className={styles.FCtext3}>Tel. 043-299-8590</p>
            <p className={styles.FCtext3}>FAX. 043-283-8590</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer; 