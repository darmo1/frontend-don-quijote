"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu as DropdowMenuContainer,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteCookies } from "./utils";
import { useRouter } from "next/navigation";

export function DropdownMenu() {
  const { refresh  } = useRouter();

  const handleLogout = () => {
    deleteCookies("jwt");
    refresh()
  };
  
  return (
    <DropdowMenuContainer>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Nueva propiedad</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Caracteristicas</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Agregar Nueva Propiedad
            <DropdownMenuShortcut>+</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="bg-yellow-500 text-center"
          onClick={handleLogout}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdowMenuContainer>
  );
}