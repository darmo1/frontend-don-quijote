"use client";
import { CardProperty } from "@/app/_components/card-property";
import { ResponseGetAllData } from "@/app/all-properties/page";
import { useParams } from "next/navigation";
import { v4 } from "uuid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settingsSlider } from "../SliderProperties/utils";

export const SuggestionsProperty = async ({
  suggestedProperties = [],
}: {
  suggestedProperties: ResponseGetAllData[] | [];
}) => {
  const { id } = useParams();
  const propertiesSuggested = suggestedProperties.filter(
    (item) => item.id !== id
  );

  const settings = {
    ...settingsSlider,
    cssEase: "linear",
    slidesToShow: 2,
    centerPadding: "60px",
    className: "center",
  };
  return (
    <div className="my-12">
      <h1 className="font-semibold text-2xl">
        Otras propiedades que te puedan interesar:
      </h1>
      <div className="slider-container ">
        <Slider {...settings}>
          {propertiesSuggested.map((suggestion) => (
            <div key={v4()}>
              <CardProperty {...suggestion}  />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
