import React from "react";
import { Card } from "./card";

export const WhyUs = () => {
  const data: { src: string; title: string; description: string }[] = [
    {
      src: "/available.svg",
      title: "Disponibilidad de propiedades",
      description: "Encuentra diferentes ofertas en Medellín y alrededores",
    },
    {
      src: "/respaldo.svg",
      title: "Respaldo",
      description:
        "Te ofrecemos las mejores garantías en todos nuestros servicios",
    },
    {
      src: "/assistance.svg",
      title: "Asistencia",
      description:
        "Te brindamos la mejor información para que puedas tomar la mejor decisión",
    },
  ];
  return (
    <div className="md:grid">
      <h1 className="text-3xl md:text-5xl font-semibold my-12 text-center">¿Por qué elegirnos?</h1>
      <div className="flex flex-wrap justify-around">
        {data.map(({ src, title, description }) => (
          <Card key={title} src={src} title={title} description={description} />
        ))}
      </div>
    </div>
  );
};
