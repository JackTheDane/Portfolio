import Swiper, { SwiperOptions } from "swiper";

export interface IExtendedSwiperOptions extends SwiperOptions {
  containerClass?: string;
  getSwiper: React.Dispatch<Swiper>;
}
