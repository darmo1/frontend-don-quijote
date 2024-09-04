import { NextArrow } from "./next-arrow";
import { PrevArrow } from "./prev-arrow";

export const settingsSlider = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  cssEase: "linear",
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};