import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";
import { valuesHeaderProps } from "./header";
import { Bars3Icon } from "@heroicons/react/24/solid"

export const HeaderMobile = ({ data, contact }: valuesHeaderProps) => {
  return (
    <header className="flex justify-between md:hidden">
      <div>
        <Image
          src="/logo-donquijote.svg"
          width="170"
          height="64"
          alt="Logo-don-quijote-group"
        />
      </div>
      <Sheet >
        <SheetTrigger className="relative">
          <Bars3Icon className="size-12 grid border mr-3" />
        </SheetTrigger>
        <SheetContent  side={"top"} className="h-1/2">
          <SheetHeader>
            <SheetTitle>Propiedades en:</SheetTitle>
            <SheetDescription>
            <ul className="columns-3 gap-8 w-[600px] ">
                  {data.map(({ city, id }) => (
                    <li key={id}>
                      <li className="break-words my-2">{city}</li>
                    </li>
                  ))}
                </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};
