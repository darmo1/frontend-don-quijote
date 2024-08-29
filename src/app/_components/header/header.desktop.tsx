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
} from "@/components/ui/navigation-menu";
import { valuesHeaderProps } from "./header";
import { DropdownMenu } from "../dropdown-menu";

export const HeaderDesktop = ({
  data,
  contact,
  isUserLogged = false,
}: valuesHeaderProps) => {
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
        <NavigationMenu className="mx-4">
          <NavigationMenuList>
            <NavigationMenuItem>
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
