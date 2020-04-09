import Swiper, { SwiperOptions } from "swiper";

export interface IExtendedSwiperOptions extends SwiperOptions {
  containerClass?: string;
  renderPrevButton?: () => JSX.Element;
  renderNextButton?: () => JSX.Element;
  getSwiper: React.Dispatch<Swiper>;
}
