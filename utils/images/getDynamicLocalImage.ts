const dynamicLocalImageLoaders: {
  [type: number]: __WebpackModuleApi.RequireContext
} = {};

export enum DynamicLocalImageTypes {
  standard,
  lqip,
  xxsmall,
  xsmall,
  small,
  medium,
  large,
  multipleSizes,
  colorArray
}

/** Use to retrieve an image from the "public/images" folder based on a dynamic path
 * @param src relative path the file from "public/images" folder
*/
export const getDynamicLocalImage = (src: string, type: DynamicLocalImageTypes = DynamicLocalImageTypes.standard): any => {

  if (src.indexOf('./') !== 0) src = `./${src}`;

  switch (type) {
    case DynamicLocalImageTypes.lqip: {
      if (!dynamicLocalImageLoaders[type]) dynamicLocalImageLoaders[type] = require.context('images?lqip', true);
      return dynamicLocalImageLoaders[type](src) as string;
    }

    case DynamicLocalImageTypes.xxsmall: {
      if (!dynamicLocalImageLoaders[type]) dynamicLocalImageLoaders[type] = require.context('images?size=150', true);
      return dynamicLocalImageLoaders[type](src) as string;
    }

    case DynamicLocalImageTypes.xsmall: {
      if (!dynamicLocalImageLoaders[type]) dynamicLocalImageLoaders[type] = require.context('images?size=300', true);
      return dynamicLocalImageLoaders[type](src) as string;
    }

    case DynamicLocalImageTypes.small: {
      if (!dynamicLocalImageLoaders[type]) dynamicLocalImageLoaders[type] = require.context('images?size=600', true);
      return dynamicLocalImageLoaders[type](src) as string;
    }

    case DynamicLocalImageTypes.medium: {
      if (!dynamicLocalImageLoaders[type]) dynamicLocalImageLoaders[type] = require.context('images?size=900', true);
      return dynamicLocalImageLoaders[type](src) as string;
    }

    case DynamicLocalImageTypes.large: {
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
