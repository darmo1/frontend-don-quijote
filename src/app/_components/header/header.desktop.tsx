import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuIndicator,
} from "@/components/ui/navigation-menu";
import { valuesHeaderProps } from "./header";
import { DropdownMenu } from "../dropdown-menu";
import { SliderHeader } from "../slider-header";
import { ServiceCardProps } from "../service-card/service-card";

export const HeaderDesktop = ({
  data,
  contact,
  isUserLogged = false,
}: valuesHeaderProps) => {
  const dataSlider: ServiceCardProps[] = [
    {
      src: "/penal.svg",
      title: "Derecho penal y de tránsito",
      url: "/derecho",
    },
    {
      src: "/certificado.svg",
      title: "Venta de seguros",
      url: "/seguros",
    },
    {
      src: "/avion.svg",
      title: "Agencia de viajes",
      url: "/viajes",
    },
    {
      src: "/vercel.svg",
      title: "Aseo",
      url: "/aseo",
    },
  ];

  const MenuProperties = ({
    data,
  }: {
    data: { id: string; city: string }[];
  }) => {
    return (
      <>
        <NavigationMenuTrigger> Ver propiedades </NavigationMenuTrigger>
        <NavigationMenuContent className="px-4 py-6 relative">
          <ul className="columns-3 gap-8 w-[600px] ">
            {data.map(({ city, id }) => (
              <NavigationMenuLink key={id}>
                <li className="break-words my-2">{city}</li>
              </NavigationMenuLink>
            ))}
          </ul>
        </NavigationMenuContent>
      </>
    );
  };

  return (
    <header className="hidden md:flex justify-between items-center mx-12">
      <div>
        <Link href="/">
          <Image
            src="/logo-donquijote.svg"
            width="170"
            height="64"
            alt="Logo-don-quijote-group"
          />
        </Link>
      </div>
      <div className="flex">
        <NavigationMenu className="mx-4 w-screen" orientation="vertical">
          <NavigationMenuList>
            <NavigationMenuItem>
              {data.length === 0 ? (
                <Link
                  href={"/all-properties"}
                  className="text-sm font-medium mx-2 px-2"
                >
                  Ver Propiedades
                </Link>
              ) : (
                <MenuProperties data={data} />
              )}
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger> Servicios </NavigationMenuTrigger>
              <NavigationMenuContent>
                <SliderHeader dataSlider={dataSlider} />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuIndicator className="bg-yellow-400" />
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {isUserLogged ? (
        <DropdownMenu />
      ) : (
        <Button asChild variant={"destructive"}>
          <Link href={contact}>Contáctanos</Link>
        </Button>
      )}
    </header>
  );
};
