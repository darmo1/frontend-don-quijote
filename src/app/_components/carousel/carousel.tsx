"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  const dataSlider = [
    {
      title: "Inmobiliaria don quijote",
      description:
        "Ofrecemos gran variedad de propiedades en Medellín y sus alrededores",
    },
    {
      title: "Inmobiliaria don quijote",
      description:
        "Ofrecemos gran variedad de propiedades en Medellín y sus alrededores",
    },
    {
      title: "Inmobiliaria don quijote",
      description:
        "Ofrecemos gran variedad de propiedades en Medellín y sus alrededores",
    },
  ];
  return (
    <div className="slider-container pb-20 ">
      <Slider {...settings}>
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
