import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v4 as uuid } from "uuid";

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
    <header className="flex justify-between items-center mx-12">
      <div>
        <Image
          src="/logo-donquijote.svg"
          width="170"
          height="64"
          alt="Logo-don-quijote-group"
        />
      </div>
      <div className="flex">
        <NavigationMenu className="mx-4">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger> Ver propiedades </NavigationMenuTrigger>
              <NavigationMenuContent className="px-4 py-6 relative">
                <ul className="columns-3 gap-8 w-[600px] ">
                  {places.map(({ city, id }) => (
                    <NavigationMenuLink key={id}>
                      <li className="break-words my-2">{city}</li>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger> Servicios </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <Button asChild variant={"destructive"}>
        <Link href={apiWhatsapp}>Contáctanos</Link>
      </Button>
    </header>
  );
};
