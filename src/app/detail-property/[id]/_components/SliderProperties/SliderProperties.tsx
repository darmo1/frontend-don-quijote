'use client'
import Image from "next/image";
import Slider from "react-slick";
import { v4 } from "uuid";
import { settingsSlider } from "./utils";

type SliderPropertiesProps = {
  images: string[];
};
export const SliderProperties = ({ images }: SliderPropertiesProps) => {
  const settings = {
    ...settingsSlider,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
    <Slider {...settings}>
      {images.map((item) => (
        <div key={v4()} className="min-h-[200px]">
          <Image src={item} alt={`image-inmueble-${v4()}`} fill />{" "}
        </div>
      ))}
    </Slider>
    </div>
  );
};
