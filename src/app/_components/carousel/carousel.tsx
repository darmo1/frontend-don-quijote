"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settingsSlider } from "@/app/detail-property/[id]/_components/SliderProperties/utils";

export function SimpleSlider() {
  const dataSlider = [
    {
      title: "Inmobiliaria don quijote",
      description:
        "Ofrecemos gran variedad de propiedades en Medellín y sus alrededores",
    },
    {
      title: "Viajes Don Quijote",
      description:
        "Tenemos buenas ofertas de viajes y días de sol para  ti y tu familia",
    },
    {
      title: "Abogados Don Quijote",
      description:
        "Ofrecemos servicios en derecho penal, de transito e inmobiliario con los mejores profesionales",
    },
  ];
  return ( 
    <div className="slider-container pb-20 w-2/3 mx-auto md:w-full md:mx-0">
      <Slider {...settingsSlider}>
        {dataSlider.map(({ description, title }, index) => (
          <div
            key={index}
            className="h-32 flex flex-col items-center justify-center text-center my-20"
          >
            <h2 className="text-4xl font-semibold my-8">{title}</h2>
            <p className="font-light text-center text-xl">{description}</p>
          </div>
        ))}

      </Slider>
    </div>
  );
}
