import Image from "next/image";
import React from "react";
import Derecho from '../content/derecho.md'

type ParamsProps = { params: { service: string } };
export default function Service({ params }: ParamsProps) {
  const { service } = params;
  const pagesAvailable = ["derecho", "aseo", "viajes", "seguros"];

  if (!pagesAvailable.includes(service)) throw new Error("page not found");

  const selectImage = (params: string): { image: string; name: string } => {
    switch (params) {
      case "derecho": {
        return {
          image: "/banner-derecho.jpg",
          name: "Derecho penal y de tránsito ",
        };
      }

      case "aseo": {
        return { image: "/aseo-propiedades.svg", name: "Aseo de propiedades" };
      }

      case "viajes": {
        return { image: "/banner-viajes.jpg", name: "Ventas de seguros" };
      }

      case "seguros": {
        return { image: "/banner-seguros.jpg", name: "Viajes Don Quijote" };
      }

      default: {
        return { image: "/", name: "" };
      }
    }
  };

  return (
    <>
      <div className="w-screen h-[400px] md:h-[400px] relative">
        <Image
          className="relative"
          src={selectImage(service)?.image}
          alt="banner-service"
          fill
          style={{ objectFit: "cover" }}
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-4xl text-white">
          {selectImage(service)?.name?.toUpperCase()}
        </h1>
      </div>
      <main className="min-h-screen max-w-6xl mx-auto my-12">
        <Derecho />
      </main>
    </>
  );
}
