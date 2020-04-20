const dynamicLocalImageLoaders: {
  [type: number]: __WebpackModuleApi.RequireContext
} = {};

export enum DynamicLocalImageTypes {
  standard,
  lqip,
  small,
  medium,
  large,
  colorArray
}

/** Use to retrieve an image from the "public/images" folder based on a dynamic path
 * @param src relative path the file from "public/images" folder
*/
export const getDynamicLocalImage = (src: string, type: DynamicLocalImageTypes = DynamicLocalImageTypes.standard): any => {

  if (src.indexOf('./') !== 0) src = `./${src}`;

  switch (type) {
    case DynamicLocalImageTypes.lqip: {
      if (!dynamicLocalImageLoaders[type]) dynamicLocalImageLoaders[type] = require.context('images', true);
      return dynamicLocalImageLoaders[type](src) as string;
    }

    // TODO: Add support for sizes and colorArray

    case DynamicLocalImageTypes.standard:
    default:
      if (!dynamicLocalImageLoaders[type]) dynamicLocalImageLoaders[type] = require.context('images', true);
      return dynamicLocalImageLoaders[type](src) as string;
  }
}
