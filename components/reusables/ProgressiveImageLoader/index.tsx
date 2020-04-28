import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import { getDynamicLocalImage, DynamicLocalImageTypes } from 'utils/images/getDynamicLocalImage';

export interface ProgressiveImageLoaderProps extends Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "src"> {
  /** Path to file relative to the "public/images" folder.
   *  @example 'subfolder/my-picture.jpg'
   */
  src: string;
  /** Sets the height of the image - Can be any CSS unit, including % of width
   * @example "200px" or "56.25%"
   */
  imageHeight?: string;
  classNames?: {
    overlayImg?: string;
    img?: string;
  }
}

export const ProgressiveImageLoader = ({
  src: pathToFile,
  className,
  imageHeight,
  classNames,
  ...rest
}: ProgressiveImageLoaderProps) => {

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isImageCached, setIsImageCached] = useState(false);

  const image = useRef<HTMLImageElement>();

  const src: string = getDynamicLocalImage(pathToFile);
  const srcSet: { src: string; srcSet: string } = getDynamicLocalImage(pathToFile, DynamicLocalImageTypes.multipleSizes);
  const overlaySrc: string = getDynamicLocalImage(pathToFile, DynamicLocalImageTypes.lqip);

  const overlayStyle: React.CSSProperties = {};

  if (isImageLoaded) {
    overlayStyle.opacity = 0;
  }

  let imageClassNames: string = styles.image;
  let overlayClassNames: string = styles.overlay;

  if (classNames) {

    if (classNames.img) imageClassNames += ' ' + classNames.img;
    if (classNames.overlayImg) overlayClassNames += ' ' + classNames.overlayImg;
  }

  // Check if the image has already been fetched and cached - If yes, hide loader immediately
  useEffect(() => {
    if (image && image.current && image.current.complete) setIsImageCached(true);
    console.log(srcSet.srcSet);
  }, [])

  const rootStyles: React.CSSProperties = { paddingTop: imageHeight || '56.25%' };

  return (
    <figure className={`${styles.root} ${className || ''} ${isImageLoaded ? styles.loaded : ''}`} style={rootStyles}>
      <img
        {...rest}
        className={imageClassNames}
        onLoad={() => setIsImageLoaded(true)}
        srcSet={srcSet.srcSet}
        sizes="
          (max-width: 600px) 600px,
          (max-width: 900px) 900px,
          1200px
        "
        src={src}
        ref={image}
      />
      {
        !isImageCached && (
          <img
            {...rest}
            className={overlayClassNames}
            style={overlayStyle}
            src={overlaySrc}
          />
        )
      }
    </figure>
  )
}
