import Image from "next/image";
import { ItemFooter, ItemProp } from "./item-footer";
import { v4 as uuid } from "uuid";

export const Footer = () => {
  const contacto: ItemProp[] = [
    {
      id: uuid(),
      value: "Centro Unión Plaza",
    },
    {
      id: uuid(),
      value: "inmobiliariadonquijote@gmail.com",
    },
  ];

  const servicios: ItemProp[] = [
    {
      id: uuid(),
      value: "Inmobiliaria",
    },
    {
      id: uuid(),
      value: "Abogados",
    },
    {
      id: uuid(),
      value: "Seguros",
    },
    {
      id: uuid(),
      value: "Viajes",
    },
  ];

  const aboutUs: ItemProp[] = [
    {
      id: uuid(),
      value: "¿Quiénes somos?",
    },
    {
      id: uuid(),
      value: "Blog",
    },
  ];

  const places: ItemProp[] = [
    {
      id: uuid(),
      value: "Medellín",
    },
    {
      id: uuid(),
      value: "Envigado",
    },
    {
      id: uuid(),
      value: "Sabaneta",
    },
    {
      id: uuid(),
      value: "Bello",
    },
    {
      id: uuid(),
      value: "Guatapé",
    },
    {
      id: uuid(),
      value: "Rionegro",
    },
    {
      id: uuid(),
      value: "Elretiro",
    },
    {
      id: uuid(),
      value: "El carmen de viboral",
    },
    {
      id: uuid(),
      value: "San Antonio de Pereira",
    },
    {
      id: uuid(),
      value: "Marinilla",
    },
  ];
  return (
    <footer className="mx-12 border-t-2 mt-auto">
      <div className="border-b-2 py-6">
        <div className="">
          <Image
            src="/logo-donquijote.svg"
            width="170"
            height="64"
            alt="Logo-don-quijote-group"
          />
        </div>
      </div>

      <div className="flex md:justify-between my-8  flex-wrap" >
        <ItemFooter title="Contácto" items={contacto} />
        <ItemFooter title="Sobre Nosotros" items={aboutUs} />
        <ItemFooter title="Propiedades" items={places} columns={3} />
        <ItemFooter title="Servicios" items={servicios} />
      </div>
      <div className="bg-custom-orange h-16 text-center"> Redes sociales</div>
    </footer>
  );
};
 