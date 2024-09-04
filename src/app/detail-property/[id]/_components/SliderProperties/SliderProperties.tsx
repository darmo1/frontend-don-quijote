'use client'
import Image from "next/image";
import Slider from "react-slick";
import { v4 } from "uuid";

type SliderPropertiesProps = {
  images: string[];
};
export const SliderProperties = ({ images }: SliderPropertiesProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
    <Slider {...settings}>
      {images.map((item) => (
        <div key={v4()} className=" h-[100px]">
          <Image src={item} alt={`image-inmueble-${v4()}`} fill />{" "}
        </div>
      ))}
    </Slider>
    </div>
  );
};
