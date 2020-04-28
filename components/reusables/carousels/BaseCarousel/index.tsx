import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Swiper from 'react-id-swiper';
import { IExtendedSwiperOptions } from '../IExtendedSwiperOptions';
import { ProgressiveImageLoader } from '../../ProgressiveImageLoader';
import { getDynamicLocalImage, DynamicLocalImageTypes } from '../../../../utils/images/getDynamicLocalImage';
import { ChevronLeftIcon } from 'icons/ChevronLeft';
import { ChevronRightIcon } from 'icons/ChevronRight';

export interface CarouselProps extends Partial<IExtendedSwiperOptions> {
  images?: string[];
  children?: any;
  className?: string;
}

export const BaseCarousel = ({
  images,
  className,
  children,
  ...rest
}: CarouselProps) => {

  const gallerySwiperParams: IExtendedSwiperOptions = {
    containerClass: `swiper-container ${styles.root} ${className || ''}`,
    spaceBetween: 0,
    slidesPerView: 1,
    preloadImages: false,
    shouldSwiperUpdate: true,
    shortSwipes: true,
    renderPrevButton: () => <button className={`${styles.navigationButton} ${styles.navigationButtonLeft}`}> <ChevronLeftIcon /> </button>,
    renderNextButton: () => <button className={`${styles.navigationButton} ${styles.navigationButtonRight}`}> <ChevronRightIcon /> </button>,
    navigation: {
      nextEl: `.${styles.navigationButton}.${styles.navigationButtonRight}`,
      prevEl: `.${styles.navigationButton}.${styles.navigationButtonLeft}`,
    },
    ...rest
  };

  const slides: JSX.Element[] | any = children || images.map(
    (image, i: number) => {
      return (
        <div
          className={`swiper-slide ${styles.image}`}
          key={'CarImg_' + i}
        >
          <ProgressiveImageLoader
            src={image}
            className={styles.imageLoader}
          />
        </div>
      );
    }
  );


  return (
    <div className={styles.root}>
      <Swiper {...gallerySwiperParams} children={slides} />
    </div>
  );
}
