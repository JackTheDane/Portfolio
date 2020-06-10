import React from 'react';
import styles from './styles.module.scss';
import Swiper from 'react-id-swiper';
import { IExtendedSwiperOptions } from '../IExtendedSwiperOptions';
import { ProgressiveImageLoader } from '../../ProgressiveImageLoader';
import { DynamicLocalImageSizes } from '../../../../utils/images/getDynamicLocalImage';
import { ChevronLeftIcon } from 'icons/ChevronLeft';
import { ChevronRightIcon } from 'icons/ChevronRight';

export interface CarouselProps extends Partial<IExtendedSwiperOptions> {
  images?: string[];
  children?: any;
  classNames?: {
    container?: string;
    prevNavButton?: string;
    nextNavButton?: string;
    slide?: string;
  }
  staticImageSize?: DynamicLocalImageSizes;
}

export const BaseCarousel = ({
  images,
  classNames,
  children,
  ...rest
}: CarouselProps) => {

  let containerClass: string = `swiper-container ${styles.root}`;
  let prevNavClasses: string[] = [styles.navigationButton, styles.navigationButtonLeft];
  let nextNavClasses: string[] = [styles.navigationButton, styles.navigationButtonRight];
  let slideClass: string = styles.image;

  if (classNames) {
    if (classNames.container) containerClass += ` ${classNames.container}`;
    if (classNames.prevNavButton) prevNavClasses.push(classNames.prevNavButton);
    if (classNames.nextNavButton) nextNavClasses.push(classNames.nextNavButton);
    if (classNames.slide) slideClass += ` ${classNames.slide}`;
  }

  const gallerySwiperParams: IExtendedSwiperOptions = {
    containerClass,
    spaceBetween: 0,
    slidesPerView: 1,
    preloadImages: false,
    shouldSwiperUpdate: true,
    shortSwipes: true,
    renderPrevButton: () => <button className={prevNavClasses.join(' ')}><ChevronLeftIcon /></button>,
    renderNextButton: () => <button className={nextNavClasses.join(' ')}><ChevronRightIcon /></button>,
    navigation: {
      prevEl: `.${prevNavClasses.join('.')}`,
      nextEl: `.${nextNavClasses.join('.')}`,
    },
    ...rest
  };


  const slides: JSX.Element[] | any = children || images.map(
    (image, i: number) => {
      return (
        <div
          className={`swiper-slide ${slideClass}`}
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
