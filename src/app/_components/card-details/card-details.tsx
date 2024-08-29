import React from "react";
import { Cards } from "./cards";

type dataCardsProsp = {
  src: string;
  title: string;
  url: string;
};

export const CardDetails = () => {
  const dataCards: dataCardsProsp[] = [
    {
      src: "/derecho-penal.svg",
      title: "Derecho penal y de tránsito",
      url: "",
    },
    {
      src: "/ventas-seguro.jpg",
      title: "Venta de seguros",
      url: "",
    },
    {
      src: "/agencia-viaje.jpg",
      title: "Agencia de viajes",
      url: "",
    },
    {
      src: "/aseo-propiedades.jpg",
      title: "Aseo de propiedades",
      url: "",
    },
  ];

  return (
    <section className="md:grid md:place-content-center md:my-24">
      <div className="md:grid md:place-content-center">
        <h1 className="font-semibold text-3xl  my-4 text-center md:text-5xl">
          Somos más que una inmobiliaria
        </h1>
        <h2 className="font-light text-center md:text-2xl max-w-[600px] my-4">
          Grupo Don Quijote te ofrece diferentes experiencias y servicios según
          tu necesidad
        </h2>
      </div>
      <div className="flex w-full  justify-start  overflow-x-auto ">
        {dataCards.map(({ src, title, url }) => (
          <Cards image={src} text={title} url={url} key={title} />
        ))}
      </div>
    </section>
  );
};
