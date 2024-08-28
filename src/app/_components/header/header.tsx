

import React from "react";
import { v4 as uuid } from "uuid";
import { BannerHome } from "../banners/banner-home";
import { HeaderDesktop } from "./header.desktop";
import { HeaderMobile } from "./header.mobile";

export type valuesHeaderProps = {

    data: { id: string; city: string }[];
    contact: string;
  
}
export const Header = () => {
  const apiWhatsapp = "https://api.whatsapp.com/send?phone=573007064360";

  const places = [
    {
      id: uuid(),
      city: "Medellín",
    },
    {
      id: uuid(),
      city: "Envigado",
    },
    {
      id: uuid(),
      city: "Sabaneta",
    },
    {
      id: uuid(),
      city: "Bello",
    },
    {
      id: uuid(),
      city: "Guatapé",
    },
    {
      id: uuid(),
      city: "Rionegro",
    },
    {
      id: uuid(),
      city: "Elretiro",
    },
    {
      id: uuid(),
      city: "El carmen de viboral",
    },
    {
      id: uuid(),
      city: "San Antonio de Pereira",
    },
    {
      id: uuid(),
      city: "Marinilla",
    },
  ];
  return (
    <>
    <HeaderDesktop data={places} contact={apiWhatsapp} />
    <HeaderMobile data={places} contact={apiWhatsapp}/>

    <BannerHome />
    </>
  );
};
