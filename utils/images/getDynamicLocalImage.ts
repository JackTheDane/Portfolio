const dynamicLocalImageLoaders: {
  [type: number]: __WebpackModuleApi.RequireContext
} = {};

export enum DynamicLocalImageTypes {
  lqip = 'lqip',
  multipleSizes = 'multipleSizes',
  standard = 'standard',
  colorArray = 'colorArray'
}

export enum DynamicLocalImageSizes {
  /** Equivalent of 200px */
  xsmall = 'xsmall',
  /** Equivalent of 600px */
  small = 'small',
  /** Equivalent of 900px */
  medium = 'medium',
  /** Equivalent of 1200px */
  large = 'large',
}

/** Use to retrieve an image from the "public/images" folder based on a dynamic path
 * @param src relative path the file from "public/images" folder
*/
export const getDynamicLocalImage = (src: string, type: DynamicLocalImageTypes | DynamicLocalImageSizes = DynamicLocalImageTypes.standard): any => {

  if (src.indexOf('./') !== 0) src = `./${src}`;

  switch (type) {
    case DynamicLocalImageTypes.lqip: {
      if (!dynamicLocalImageLoaders[type]) dynamicLocalImageLoaders[type] = require.context('images?lqip', true);
      return dynamicLocalImageLoaders[type](src) as string;
    }

    case DynamicLocalImageSizes.xsmall: {
      if (!dynamicLocalImageLoaders[type]) dynamicLocalImageLoaders[type] = require.context('images?size=200', true);
      return dynamicLocalImageLoaders[type](src) as string;
    }

    case DynamicLocalImageSizes.small: {
      if (!dynamicLocalImageLoaders[type]) dynamicLocalImageLoaders[type] = require.context('images?size=600', true);
      return dynamicLocalImageLoaders[type](src) as string;
    }

    case DynamicLocalImageSizes.medium: {
      if (!dynamicLocalImageLoaders[type]) dynamicLocalImageLoaders[type] = require.context('images?size=900', true);
      return dynamicLocalImageLoaders[type](src) as string;
    }

    case DynamicLocalImageSizes.large: {
      if (!dynamicLocalImageLoaders[type]) dynamicLocalImageLoaders[type] = require.context('images?size=1200', true);
      return dynamicLocalImageLoaders[type](src) as string;
    }

    //? TODO: Add support for colorArray?
    case DynamicLocalImageTypes.multipleSizes: {
      if (!dynamicLocalImageLoaders[type]) dynamicLocalImageLoaders[type] = require.context('images?resize&sizes[]=600&sizes[]=900&sizes[]=1200', true);
      return dynamicLocalImageLoaders[type](src) as string;
    }

    case DynamicLocalImageTypes.standard:
    default:
      if (!dynamicLocalImageLoaders[type]) dynamicLocalImageLoaders[type] = require.context('images', true);
      return dynamicLocalImageLoaders[type](src) as string;
  }
}
