import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Swiper from 'react-id-swiper';
import { IExtendedSwiperOptions } from '../IExtendedSwiperOptions';
import { getDynamicLocalImage, DynamicLocalImageSizes } from 'utils/images/getDynamicLocalImage';
import { BaseCarousel } from '../BaseCarousel';

export interface CarouselWithPreviewProps {
  images: string[];
  className?: string;
}

export const CarouselWithPreview = ({
  images,
  className,
}: CarouselWithPreviewProps) => {

  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

  const thumbnailSwiperParams: IExtendedSwiperOptions = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 5,
    centeredSlides: true,
    slidesPerView: 'auto',
    shouldSwiperUpdate: true,
    touchRatio: 0.5,
    preloadImages: true,
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

  const slidePreview: JSX.Element[] = images.map(
    (image, i: number) => {
      return (
        <div className={styles.slidePreviewWrapper}>
          <div className={styles.slidePreview} key={`prev_${i}`} style={{ backgroundImage: `url('${getDynamicLocalImage(image, DynamicLocalImageSizes.xsmall)}')` }} />
        </div>
      );
    }
  );

  let mainCarouselClasses: string = styles.mainCarousel;

  if (className) mainCarouselClasses += ` ${className}`;


  return (
    <div className={styles.carousel}>
      <BaseCarousel shouldSwiperUpdate includeBlurryBg images={images} classNames={{ container: mainCarouselClasses }} getSwiper={getGallerySwiper} />
      <div className={styles.thumbnailWrapper}>
        <Swiper {...thumbnailSwiperParams} children={slidePreview} />
      </div>
    </div>
  );
}
