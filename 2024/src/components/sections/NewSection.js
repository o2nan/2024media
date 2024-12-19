import React, { useEffect } from 'react';
import styles from './NewSection.module.css';

function NewSection() {
  const projects = [
    {
      category: "멀티미디어",
      title: <>다양한 디지털 콘텐츠를 기획하고 제작하며,<br /> 졸업을 시작으로 새로운 도전과 확장된<br /> 창의적 활동을 이어갈 <span className={styles.highlight}>멀티형 인재</span></>,
      link: "https://media.seowon.ac.kr/2024/multi",
      linkText: "Multimedia Major Projects →",
      image: "/s201910930/test2024/optimized/images/멀티.webp"
    },
    {
      category: "영상미디어",
      title: <>영상 제작과 연출을 비롯한<br /> 실감형 콘텐츠를 기획하고 구현하며,<br /> 졸업을 시작으로 창의적 기획과 표현을 통해<br /> 확장된 활동을 이어갈 <span className={styles.highlight}>실감형 콘텐츠 인재</span></>,
      link: "https://media.seowon.ac.kr/2024/multi",
      linkText: "Moving Image & Newmedia Major Projects →",
      image: "/s201910930/test2024/optimized/images/영상.webp"
    },
    {
      category: "팀 프로젝트",
      title: <>창의적인 아이디어와 열정이 만나<br /> 완성된 독창적 프로젝트를 소개합니다.<br /> 졸업생들이 함께 만들어낸 <span className={styles.highlight}>협력의 결실</span>,<br /> 그 빛나는 팀프로젝트를 경험해보세요.</>,
      link: "https://media.seowon.ac.kr/2024/multi",
      linkText: "Team Projects →",
      image: "/s201910930/test2024/optimized/images/I6.webp"
    },
    {
      category: "학부 소개",
      title: <>멀티미디어환경에 유기적으로 대응할 수 있는 
      첨단실용학문으로 실무에서 요구하는 “멀티형 인재”로 
      성장하기 위한 <span className={styles.highlight}>지능형 · 감성형 · 실감형</span> 3단계
      융합미디어교육과정을 통해 
      스마트미디어콘텐츠전문가를 양성한다.</>,
      link: "https://media.seowon.ac.kr/2024/multi",
      linkText: "About D.M.C →",
      image: "/s201910930/test2024/optimized/images/I7.webp"
    },
    {
      category: "갤러리",
      title: <>END TO AND 졸업전시회를 위해 달려온<br /> 4학년 학생들의 <span className={styles.highlight}>열정과 노력이 담긴 순간</span>들을<br /> 경험해보세요.</>,
      link: "https://media.seowon.ac.kr/2024/multi",
      linkText: "Gallery →",
      image: "/s201910930/test2024/optimized/images/I4.webp"
    },
    {
      category: "오시는 길",
      title: <>전시회가 열리는 장소의 상세 주소와 함께 층수,<br /> <span className={styles.highlight}>전시장 내부 위치 정보</span>를 제공합니다.<br /> 주차 공간 및 주변 시설 정보도 확인하세요.</>,
      link: "https://media.seowon.ac.kr/2024/multi",
      linkText: "Moving Image & Newmedia Major Projects →",
      image: "/s201910930/test2024/optimized/images/I9.webp"
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(styles.visible);
          }, 50);
        } else {
          entry.target.classList.remove(styles.visible);
        }
      });
    }, observerOptions);

    const projectBlocks = document.querySelectorAll(`.${styles.projectBlock}`);
    projectBlocks.forEach(block => observer.observe(block));

    return () => {
      projectBlocks.forEach(block => observer.unobserve(block));
    };
  }, []);

  return (
    <section className={styles.newSection}>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div 
            className={`${styles.projectBlock} ${styles.fadeIn}`} 
            key={index}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className={styles.textContent}>
              <span className={`${styles.category} ${styles.slideUp}`}>{project.category}</span>
              <h2 className={`${styles.title} ${styles.slideUp}`}>{project.title}</h2>
              <a href={project.link} className={`${styles.projectLink} ${styles.slideUp}`}>{project.linkText}</a>
            </div>
            <div className={`${styles.imageContent} ${styles.fadeIn}`}>
              <picture>
                <source srcSet={project.image} type="image/webp" />
                <img 
                  src={project.image.replace('.webp', '.png')} 
                  alt={`R ${index + 1}`} 
                  className={styles.projectImage}
                />
              </picture>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewSection;