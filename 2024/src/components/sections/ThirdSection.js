import React from 'react';
import styles from './ThirdSection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

// Swiper 스타일 import
import 'swiper/css';
import 'swiper/css/navigation';

function ThirdSection() {
  const BASE_URL = '/s201910930/test2024';

  const baseProfiles = [
    { 
      name: '오인환', 
      role: 'Developer', 
      image: {
        webp: '/images/sliderimg/optimized/멀티_개발_오인환.webp',
        png: '/images/sliderimg/optimized/멀티_개발_오인환.png'
      }
    },
    { name: '우신희', role: 'Developer', image: {
      webp: '/images/sliderimg/optimized/멀티_개발_우신희.webp',
      png: '/images/sliderimg/optimized/멀티_개발_우신희.png'
    } },
    { name: '장건', role: 'Developer', image: {
      webp: '/images/sliderimg/optimized/멀티_개발_장건.webp',
      png: '/images/sliderimg/optimized/멀티_개발_장건.png'
    } },
    { name: '김종재', role: 'Developer', image: {
      webp: '/images/sliderimg/optimized/멀티_개발_김종재.webp',
      png: '/images/sliderimg/optimized/멀티_개발_김종재.png'
    } },
    { name: '강주희', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_강주희.webp',
      png: '/images/sliderimg/optimized/멀티_기획_강주희.png'
    } },
    { name: '고경민', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_고경민.webp',
      png: '/images/sliderimg/optimized/멀티_기획_고경민.png'
    } },
    { name: '고민정', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_고민정.webp',
      png: '/images/sliderimg/optimized/멀티_기획_고민정.png'
    } },
    { name: '권도연', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_권도연.webp',
      png: '/images/sliderimg/optimized/멀티_기획_권도연.png'
    } },
    { name: '김소은', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_김소은.webp',
      png: '/images/sliderimg/optimized/멀티_기획_김소은.png'
    } },
    { name: '김정운', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_김정운.webp',
      png: '/images/sliderimg/optimized/멀티_기획_김정운.png'
    } },
    { name: '김주원', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_김주원.webp',
      png: '/images/sliderimg/optimized/멀티_기획_김주원.png'
    } },
    { name: '남용현', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_남용현.webp',
      png: '/images/sliderimg/optimized/멀티_기획_남용현.png'
    } },
    { name: '노상래', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_노상래.webp',
      png: '/images/sliderimg/optimized/멀티_기획_노상래.png'
    } },
    { name: '박종현', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_박종현.webp',
      png: '/images/sliderimg/optimized/멀티_기획_박종현.png'
    } },
    { name: '설지훈', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_설지훈.webp',
      png: '/images/sliderimg/optimized/멀티_기획_설지훈.png'
    } },
    { name: '이도윤', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_이도윤.webp',
      png: '/images/sliderimg/optimized/멀티_기획_이도윤.png'
    } },
    { name: '이상빈', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_이상빈.webp',
      png: '/images/sliderimg/optimized/멀티_기획_이상빈.png'
    } },
    { name: '이상윤', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_이상윤.webp',
      png: '/images/sliderimg/optimized/멀티_기획_이상윤.png'
    } },
    { name: '이성은', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_이성은.webp',
      png: '/images/sliderimg/optimized/멀티_기획_이성은.png'
    } },
    { name: '이수현', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_이수현.webp',
      png: '/images/sliderimg/optimized/멀티_기획_이수현.png'
    } },
    { name: '이승연', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_이승연.webp',
      png: '/images/sliderimg/optimized/멀티_기획_이승연.png'
    } },
    { name: '이준규', role: 'Product Manager', image: {
      webp: '/images/sliderimg/optimized/멀티_기획_이준규.webp',
      png: '/images/sliderimg/optimized/멀티_기획_이준규.png'
    } },
    { name: '김윤재', role: 'Designer', image: {
      webp: '/images/sliderimg/optimized/멀티_디자인_김윤재.webp',
      png: '/images/sliderimg/optimized/멀티_디자인_김윤재.png'
    } },
    { name: '김홍덕', role: 'Designer', image: {
      webp: '/images/sliderimg/optimized/멀티_디자인_김홍덕.webp',
      png: '/images/sliderimg/optimized/멀티_디자인_김홍덕.png'
    } },
    { name: '안진희', role: 'Designer', image: {
      webp: '/images/sliderimg/optimized/멀티_디자인_안진희.webp',
      png: '/images/sliderimg/optimized/멀티_디자인_안진희.png'
    } },
    { name: '지상운', role: 'Designer', image: {
      webp: '/images/sliderimg/optimized/멀티_디자인_지상운.webp',
      png: '/images/sliderimg/optimized/멀티_디자인_지상운.png'
    } },
    { name: '신서연', role: '2D Motion Graphic Designer', image: {
      webp: '/images/sliderimg/optimized/영상_2D_신서연.webp',
      png: '/images/sliderimg/optimized/영상_2D_신서연.png'
    } },
    { name: '정채연', role: '2D Motion Graphic Designer', image: {
      webp: '/images/sliderimg/optimized/영상_2D_정채연.webp',
      png: '/images/sliderimg/optimized/영상_2D_정채연.png'
    } },
    { name: '권정은', role: '3D Modeler', image: {
      webp: '/images/sliderimg/optimized/영상_3D_권정은.webp',
      png: '/images/sliderimg/optimized/영상_3D_권정은.png'
    } },
    { name: '김지현', role: '3D Modeler', image: {
      webp: '/images/sliderimg/optimized/영상_3D_김지현.webp',
      png: '/images/sliderimg/optimized/영상_3D_김지현.png'
    } },
    { name: '박소희', role: '3D Motion Graphic Designer', image: {
      webp: '/images/sliderimg/optimized/영상_3D_박소희.webp',
      png: '/images/sliderimg/optimized/영상_3D_박소희.png'
    } },
    { name: '유동관', role: '3D Motion Graphic Designer', image: {
      webp: '/images/sliderimg/optimized/영상_3D_유동관.webp',
      png: '/images/sliderimg/optimized/영상_3D_유동관.png'
    } },
    { name: '조민지', role: '3D Modeler', image: {
      webp: '/images/sliderimg/optimized/영상_3D_조민지.webp',
      png: '/images/sliderimg/optimized/영상_3D_조민지.png'
    } },
    { name: '조승연', role: '3D Modeler', image: {
      webp: '/images/sliderimg/optimized/영상_3D_조승연.webp',
      png: '/images/sliderimg/optimized/영상_3D_조승연.png'
    } },
    { name: '황인애', role: '3D Modeler', image: {
      webp: '/images/sliderimg/optimized/영상_3D_황인애.webp',
      png: '/images/sliderimg/optimized/영상_3D_황인애.png'
    } },
    { name: '주영훈', role: 'Game Developer', image: {
      webp: '/images/sliderimg/optimized/영상_게임_주영훈.webp',
      png: '/images/sliderimg/optimized/영상_게임_주영훈.png'
    } },
    { name: '강해인', role: 'Media Contents Director', image: {
      webp: '/images/sliderimg/optimized/영상_기획연출_강해인.webp',
      png: '/images/sliderimg/optimized/영상_기획연출_강해인.png'
    } },
    { name: '고정민', role: 'Media Contents Director', image: {
      webp: '/images/sliderimg/optimized/영상_기획연출_고정민.webp',
      png: '/images/sliderimg/optimized/영상_기획연출_고정민.png'
    } },
    { name: '김민지', role: 'Media Contents Director', image: {
      webp: '/images/sliderimg/optimized/영상_기획연출_김민지.webp',
      png: '/images/sliderimg/optimized/영상_기획연출_김민지.png'
    } },
    { name: '박다정', role: 'Media Contents Director', image: {
      webp: '/images/sliderimg/optimized/영상_기획연출_박다정.webp',
      png: '/images/sliderimg/optimized/영상_기획연출_박다정.png'
    } },
    { name: '박수빈', role: 'Media Contents Director', image: {
      webp: '/images/sliderimg/optimized/영상_기획연출_박수빈.webp',
      png: '/images/sliderimg/optimized/영상_기획연출_박수빈.png'
    } },
    { name: '박수연', role: 'Media Contents Director', image: {
      webp: '/images/sliderimg/optimized/영상_기획연출_박수연.webp',
      png: '/images/sliderimg/optimized/영상_기획연출_박수연.png'
    } },
    { name: '박지수', role: 'Media Contents Director', image: {
      webp: '/images/sliderimg/optimized/영상_기획연출_박지수.webp',
      png: '/images/sliderimg/optimized/영상_기획연출_박지수.png'
    } },
    { name: '최윤민', role: 'Media Contents Director', image: {
      webp: '/images/sliderimg/optimized/영상_기획연출_최윤민.webp',
      png: '/images/sliderimg/optimized/영상_기획연출_최윤민.png'
    } },
  ];

  const profiles = baseProfiles.map(profile => ({
    ...profile,
    image: {
      webp: `${BASE_URL}${profile.image.webp}`,
      png: `${BASE_URL}${profile.image.png}`
    }
  }));

  return (
    <section className={styles.thirdSection}>
      <div className={styles.thirdSectionContainer}>
        <div className={styles.headerWrapper}>
          <div className={styles.titleContainer}>
            <div className={styles.subTitleWrapper}>
              <div className={styles.subTitleBackground}></div>
              <p className={styles.subTitle}>2024 미디어콘텐츠학과 졸업심사전 참여인원</p>
            </div>
            <div className={styles.mainTitleWrapper}>
              <div className={styles.mainTitleBackground}></div>
              <p className={styles.mainTitle}>END TO AND, 함께 만든 새로운 시작의 결실</p>
            </div>
          </div>
        </div>
        
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Autoplay, Navigation, Mousewheel, Keyboard]}
            spaceBetween={20}
            slidesPerView={'auto'}
            slidesPerGroup={1}
            speed={800}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            navigation={true}
            loop={true}
            grabCursor={true}
            mousewheel={true}
            keyboard={{
              enabled: true,
            }}
            className={styles.profileSwiper}
          >
            {profiles.map((profile, index) => (
              <SwiperSlide key={index}>
                <div className={styles.profileCard}>
                  <div className={styles.profileImage}>
                    <picture>
                      <source 
                        srcSet={profile.image.webp} 
                        type="image/webp" 
                      />
                      <img 
                        src={profile.image.png}
                        alt={`${profile.name} profile`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </picture>
                  </div>
                  <p className={styles.profileName}>{profile.name}</p>
                  <p className={styles.profileRole}>{profile.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection; 