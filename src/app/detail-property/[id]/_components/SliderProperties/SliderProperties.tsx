"use client";
import Image from "next/image";
import Slider from "react-slick";
import { v4 } from "uuid";
import { blurData64, settingsSlider } from "./utils";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";

type SliderPropertiesProps = {
  images: string[];
};
export const SliderProperties = ({ images }: SliderPropertiesProps) => {
  const isMD = useBreakpoint(768)
  const settings = {
    ...settingsSlider,
    slidesToShow: isMD ? 2 : 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((item) => (
          <div
            key={v4()}
            className="min-h-[200px] h-96 W-1/2"
          >
            <Image
              src={item}
              alt={`image-inmueble-${v4()}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "100%", aspectRatio: '16 / 9'}}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
