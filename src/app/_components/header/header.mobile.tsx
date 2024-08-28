import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";
import { valuesHeaderProps } from "./header";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const HeaderMobile = ({ data, contact }: valuesHeaderProps) => {
  return (
    <header className="flex justify-between md:hidden py-2">
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
      <Sheet>
        <SheetTrigger className="relative">
          <Bars3Icon className="size-12 grid mr-3" />
        </SheetTrigger>
        <SheetContent side={"top"} className="h-1/2">
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

          <SheetHeader>
            <SheetTitle className="my-4 text-start">Propiedades en:</SheetTitle>
            <SheetDescription>
              <ul className="columns-1">
                {data.map(({ city, id }) => (
                  <li key={id}>
                    <li className="break-words my-2 text-start">{city}</li>
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
