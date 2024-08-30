import Image from "next/image";
import React from "react";

type ParamsProps = { params: { service: string } };
export default function Service({ params }: ParamsProps) {
  const { service } = params;
  const pagesAvailable = ["derecho", "aseo", "viajes", "seguros"];

  if (!pagesAvailable.includes(service)) throw new Error("page not found");

  const selectImage = (params: string): string => {
    switch (params) {
      case "derecho": {
        return "/derecho-penal.svg";
      }

      case "aseo": {
        return "/aseo-propiedades.svg";
      }

      case "viajes": {
        return "/agencia-viaje.svg";
      }

      case "seguros": {
        return "/ventas-seguro.jpg";
      }

      default: {
        return "/";
      }
    }
  };

  return (
    <>
      <div className="w-screen md:h-[400px] relative">
        <Image
          src={selectImage(service)}
          alt="banner-service"
          fill
         
          style={{ objectFit: "cover", objectPosition: "0% 75%" }}
        />
      </div>
      <main className="min-h-screen">
        <h1 className="text-center font-semibold text-4xl my-5">{service.toUpperCase()}</h1>
      </main>
    </>
  );
}
