import { HeaderDesktop } from "./header.desktop";
import { HeaderMobile } from "./header.mobile";
import { headers } from "next/headers";
import getCities  from "@/app/services/home/getCities";
import { Suspense } from "react";

export type valuesHeaderProps = {
  data: { id: string; city: string }[];
  contact: string;
  isUserLogged: boolean;
};
export const Header = async () => {
  const headersList = headers();
  const userDataHeader = headersList.get("x-user-loggin");
  const data = userDataHeader ? JSON.parse(userDataHeader) : {};
  const apiWhatsapp = "https://api.whatsapp.com/send?phone=573007064360";

  // const res = await fetch(endpointApiNext.getCities);
  // const places = await res.json();
  const places = await getCities()

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <HeaderDesktop
        data={places}
        contact={apiWhatsapp}
        isUserLogged={data?.isUserLogged}
      />
      <HeaderMobile
        data={places}
        contact={apiWhatsapp}
        isUserLogged={data?.isUserLogged}
      />
    </ Suspense>
  );
};
