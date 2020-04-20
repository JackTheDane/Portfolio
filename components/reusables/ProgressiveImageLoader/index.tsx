import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';

export interface ProgressiveImageLoaderProps extends Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "src"> {
  /** Path to file relative to the "public/images" folder.
   *  @example 'subfolder/my-picture.jpg'
   */
  src: string;
  /** Sets the height of the image - Can be any CSS unit, including % of width
   * @example "200px" or "56.25%"
   */
  imageHeight?: string;
}

const imagesFolderRequire = require.context('../../../public/images', true);
const lqipImagesFolderRequire = require.context('../../../public/images?lqip', true);


export const ProgressiveImageLoader = ({
  src: pathToFile,
  className,
  imageHeight,
  ...rest
}: ProgressiveImageLoaderProps) => {

  const [highResImageLoaded, setHighResImageLoaded] = useState(false);

  const image = useRef<HTMLImageElement>();

  const relativePathToFile: string = `./${pathToFile}`;

  const src = imagesFolderRequire(relativePathToFile);
  const overlaySrc = lqipImagesFolderRequire(relativePathToFile);

  const overlayStyle: React.CSSProperties = {};

  if (highResImageLoaded) {
    overlayStyle.opacity = 0;
  }

  let imageClassNames: string = styles.image;
  let overlayClassNames: string = styles.overlay;

  if (className) {
    imageClassNames += ' ' + className;
    overlayClassNames += ' ' + className;
  }

  const onLoadComplete = () => setHighResImageLoaded(true);

  useEffect(() => {
    if (image && image.current && image.current.complete) onLoadComplete();
  }, [])

  const rootStyles: React.CSSProperties = { paddingTop: imageHeight || '56.25%' };

  return (
    <figure className={`${styles.root} ${highResImageLoaded ? styles.loaded : ''}`} style={rootStyles}>
      <img
        {...rest}
        className={imageClassNames}
        onLoad={onLoadComplete}
        src={src}
        ref={image}
      />
      <img
        {...rest}
        className={overlayClassNames}
        style={overlayStyle}
        src={overlaySrc}
      />
    </figure>
  )
}
