import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
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

  const gallerySwiperParams: IExtendedSwiperOptions = {
    getSwiper: getGallerySwiper,
    containerClass: `swiper-container ${styles.carousel} ${className || ''}`,
    spaceBetween: 0,
    slidesPerView: 1,
    preloadImages: false,
    shouldSwiperUpdate: true,
    renderPrevButton: () => <button className={`${styles.navigationButton} ${styles.navigationButtonLeft}`}> <i className="icon icon-arrow-left" /> </button>,
    renderNextButton: () => <button className={`${styles.navigationButton} ${styles.navigationButtonRight}`}> <i className="icon icon-arrow-right" /> </button>,
    navigation: {
      nextEl: `.${styles.navigationButton}.${styles.navigationButtonRight}`,
      prevEl: `.${styles.navigationButton}.${styles.navigationButtonLeft}`,
    }
  };
  const thumbnailSwiperParams: IExtendedSwiperOptions = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 5,
    centeredSlides: true,
    slidesPerView: 6,
    shouldSwiperUpdate: true,
    touchRatio: 0.5,
    preloadImages: false,
    slideToClickedSlide: true,
    slideActiveClass: styles.selected,

  };

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

      slidePreview.push(
        <div>
          <div className={styles.slidePreview} key={`prev_${i}`} style={{ backgroundImage: `url(${image})` }} />
        </div>
      )

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
    <div className={styles.carousel}>
      <Swiper {...gallerySwiperParams} children={slides} />
      <div className={styles.thumbnailWrapper}>
        <Swiper {...thumbnailSwiperParams} children={slidePreview} />
      </div>
    </div>
  );
}
