import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.scss';
import Swiper from 'react-id-swiper';
import { IExtendedSwiperOptions } from './IExtendedSwiperOptions';

export interface CarouselProps {
  images: string[];
  className?: string;
}

export const Carousel = ({
  images,
  className
}: CarouselProps) => {


  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    containerClass: `swiper-container ${styles.carousel} ${className} card my-4`,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  };
  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    centeredSlides: true,
    // slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true
  };


  // const params: IExtendedSwiperOptions = {
  //   loop: true,

  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     bulletActiveClass: styles.slideIndexButtonActive,
  //     renderBullet: (idx: number, clsName: string) => `
  //         <button
  //           class="${styles.slideIndexButton} ${clsName || ''}"}
  //         </button>
  //       `
  //   }
  // }

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  const slidePreview: JSX.Element[] = [];

  const slides: JSX.Element[] = images.map(
    (image, i: number) => {

      slidePreview.push(<div key={`prev_${i}`} style={{ backgroundImage: `url(${image})` }} />)

      return (
        <div
          key={'CarImg_' + i}
          style={{
            backgroundImage: `url(${image})`
          }}
          className={`swiper-slide ${styles.image}`}
        />
      );
    }
  );


  return (
    <div>
      <Swiper {...gallerySwiperParams} children={slides} />
      <Swiper {...thumbnailSwiperParams} children={slides} />
    </div>



    // <div>
    //   <button onClick={() => { this.changeSlide(-1) }} className={`btn ${styles.navigationButton} ${styles.navigationButtonLeft}`}>
    //     <i className="icon icon-arrow-left"></i>
    //   </button>
    //   <button onClick={() => { this.changeSlide(1) }} className={`btn ${styles.navigationButton} ${styles.navigationButtonRight}`}>
    //     <i className="icon icon-arrow-right"></i>
    //   </button>

    //   <div className={styles.slideIndexButtonWrapper}>
    //     {
    //       images.map(
    //         (image: string, idx: number) => <button
    //           key={`btn-${idx}`}
    //           className={`${styles.slideIndexButton} ${currentIndex == idx ? styles.slideIndexButtonActive : ''}`}
    //           onClick={() => this.setCurrentIndex(idx)}>
    //         </button>
    //       )
    //     }
    //   </div>
    // </div>

  );
}
