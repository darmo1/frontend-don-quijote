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
      url: "/derecho",
    },
    {
      src: "/ventas-seguro.jpg",
      title: "Venta de seguros",
      url: "/seguros",
    },
    {
      src: "/agencia-viaje.jpg",
      title: "Agencia de viajes",
      url: "/viajes",
    },
    {
      src: "/aseo-propiedades.jpg",
      title: "Aseo de propiedades",
      url: "/aseo",
    },
  ];

  return (
    <section className="md:grid md:place-content-center md:my-14">
      <div className="md:grid md:place-content-center">
        <h1 className="font-semibold text-3xl  my-4 text-center md:text-5xl">
          Somos más que una inmobiliaria
        </h1>
        <h2 className="font-light text-center md:text-2xl max-w-[600px] mx-auto my-4">
          Grupo Don Quijote te ofrece diferentes experiencias y servicios según
          tu necesidad
        </h2>
      </div>
      <div className="flex w-full  justify-start  overflow-x-auto mt-4 [&::-webkit-scrollbar]:[width:10px]
            [&::-webkit-scrollbar-thumb]:bg-gray-200
            ">
        {dataCards.map(({ src, title, url }) => (
          <Cards image={src} text={title} url={url} key={title} />
        ))}
      </div>
    </section>
  );
};
