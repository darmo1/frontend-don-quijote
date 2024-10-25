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
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { v4 } from "uuid";
import { DropdownMenu } from "../dropdown-menu";


export const HeaderMobile = ({
  data,
  contact,
  isUserLogged,
}: valuesHeaderProps) => {
  const secondMenu = [
    {
      item: "item",
      href: "/",
    },
  ];
  return (
    <header className="flex justify-between md:hidden py-2 sticky top-0 z-10 bg-white">
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
          <Bars3Icon className="size-12 grid " />
        </SheetTrigger>
        <SheetContent side={"top"} className="min-h-1/2">
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

          {data.length === 0 ? (
            <SheetHeader>
              <SheetTitle className="my-4 text-start">
                Acerca de nosotros
              </SheetTitle>
              <SheetDescription>
                <ul className="columns-1">
                  {secondMenu.map(({ item, href }) => (
                    <Link href={href} key={v4()}>
                      <li className="break-words my-2 text-start">{item}</li>
                    </Link>
                  ))}
                </ul>
              </SheetDescription>
            </SheetHeader>
          ) : (
            <SheetHeader>
              <SheetTitle className="my-4 text-start">
                Propiedades en:
              </SheetTitle>
              <SheetDescription>
                <ul className="columns-1">
                  {data.map(({ city, id }) => (
                    <Link
                      href={`/result-properties/?city=${city.toLocaleLowerCase()}`}
                      key={id}
                      className="hover:underline"
                    >
                      <li key={id}>
                        <li className="break-words my-2 text-start">{city}</li>
                      </li>
                    </Link>
                  ))}
                </ul>
              </SheetDescription>
            </SheetHeader>
          )}

          {isUserLogged && <DropdownMenu />}
        </SheetContent>
      </Sheet>
    </header>
  );
};
