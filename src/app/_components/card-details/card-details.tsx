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
      src: "/ventas-seguro.svg",
      title: "Venta de seguros",
      url: "",
    },
    {
      src: "/agencia-viaje.svg",
      title: "Agencia de viajes",
      url: "",
    },
    {
      src: "/aseo-propiedades.svg",
      title: "Aseo de propiedades",
      url: "",
    },
  ];

  return (
    <section className="grid place-content-center my-24">
      <div className="grid place-content-center">
        <h1 className="font-bold text-center text-2xl">
          {" "}
          Somos más que una inmobiliaria
        </h1>
        <h2 className="font-light  text-center text-2xl w-[600px] my-4">
          {" "}
          Grupo Don Quijote te ofrece diferentes experiencias y servicios según
          tu necesidad
        </h2>
      </div>
      <div className="flex">
        {dataCards.map(({ src, title, url }) => (
          <Cards image={src} text={title} url={url} key={title}/>
        ))}
      </div>
    </section>
  );
};
