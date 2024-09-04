"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import queryString from "query-string";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export interface IFormInput {
  city: string;
  property: string;
  rooms: number;
}

export const BannerHome = () => {
  const pathName = usePathname();
  const { push } = useRouter();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { city, property, rooms } = data;
    const cityformatted = city.trim().toLowerCase();
    const propertyFormatted = property.trim().toLowerCase();

    const queryParams = queryString.stringify({
      city: cityformatted,
      property: propertyFormatted,
      rooms,
    });
    push(`/result-properties/?${queryParams}`);
  };

  if (["/signin", "/signup"].includes(pathName)) return null;
  const cNameInput = `px-3 py-1 border md:rounded-xl md:w-[300px]  h-[50px]`;

  return (
    <section className="bg-banner-home bg-cover  h-[467px] grid place-content-center">
      <div className="flex flex-col justify-center items-center my-8">
        <h2 className="text-3xl md:text-5xl text-white">
          Compra tu propiedad con
        </h2>
        <h1 className="text-3xl md:text-5xl text-white md:my-2">Grupo Don quijote</h1>
      </div>

      <form
        className="grid grid-cols-2 grid-rows-3 h-[180px]  md:flex md:flex-wrap md:gap-7 md:justify-center content-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("city", { maxLength: 20 })}
          className={`${cNameInput} col-span-2 row-span-1 rounded-t-xl self-end md:self-start text-center md:text-start`}
          placeholder={`Buscar por ciudad`}
        />

        <input
          {...register("property", { maxLength: 20 })}
          className={`${cNameInput} col-span-1 row-span-1 rounded-bl-xl `}
          placeholder="Tipo de propiedades"
        />

        <input
          type="number"
          {...register("rooms", { min: 1 })}
          className={`${cNameInput} col-span-1 row-span-1 rounded-br-xl  `}
          placeholder="Habitaciones "
        />
        <Button
          asChild
          variant={"destructive"}
          className="col-span-2 row-span-1 md:w-[300px]  md:h-[50px]"
        >
          <input type="submit" value="Buscar" className="gap-y-4" />
        </Button>
      </form>
    </section>
  );
};
