import Image from "next/image";
import { ItemFooter, ItemProp } from "./item-footer";
import { v4 as uuid } from "uuid";
import Link from "next/link";

export const Footer = () => {
  const contacto: ItemProp[] = [
    {
      id: uuid(),
      value: "Centro Unión Plaza",
    },
    {
      id: uuid(),
      value: "Cra 49 # 52 - 141, local 231",
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
      link: "https://www.inmobiliariadonquijote.com/",
    },
    {
      id: uuid(),
      value: "Abogados",
      link: "/derecho",
    },
    {
      id: uuid(),
      value: "Seguros",
      link: "/seguros",
    },
    {
      id: uuid(),
      value: "Viajes",
      link: "/viajes",
    },
  ];

  const aboutUs: ItemProp[] = [
    {
      id: uuid(),
      value: "¿Quiénes somos?",
      link: "https://www.inmobiliariadonquijote.com/nosotros",
    },
    {
      id: uuid(),
      value: "Blog",
    },
  ];

  
  return (
    <footer className="border-t-2 mt-auto">
      <div className="border-b-2 py-6">
        <div className="mx-12">
          <Image
            src="/logo-donquijote.svg"
            width="170"
            height="64"
            alt="Logo-don-quijote-group"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between my-8  flex-wrap mx-12">
        <ItemFooter title="Contácto" items={contacto} />
        <ItemFooter title="Sobre Nosotros" items={aboutUs} />
        <ItemFooter title="Propiedades" items={[]} columns={[].length < 4 ? 1 : 3} />
        <ItemFooter title="Servicios" items={servicios} />
      </div>
      <div className="bg-custom-orange block  md:flex md:justify-end  md:items-center py-2 md:mx-12 ">
        <Link href="https://www.instagram.com/inmobiliariadonquijote">
          <div className="flex my-2 md:my-0 mx-12 md:mx-0">
            <Image
              src="/logotipo-de-instagram.png"
              width={20}
              height={12}
              alt="intagram"
            />
            <p className="text-light mx-3">Inmobiliariadonquijote</p>
          </div>
        </Link>
        <Link href="">
          <div className="flex my-2 md:my-0 mx-12 md:mx-0">
            <Image src="/facebook.png" width={22} height={12} alt="intagram" />
            <p className="text-light mx-3">Inmobiliariadonquijote</p>
          </div>
        </Link>
      </div>
    </footer>
  );
};
