"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import queryString from "query-string";
import { v4 as uuid } from "uuid";
import { useQuickToast } from "@/providers/toast-context";

export interface IFormInput {
  city: string;
  property: string;
  rooms: number | null;
}

export const propiertyOptions = [
  {
    id: uuid(),
    name: "Apartamento",
  },
  {
    id: uuid(),
    name: "Apartaestudio",
  },
  {
    id: uuid(),
    name: "Casa",
  },
  {
    id: uuid(),
    name: "Finca",
  },
  {
    id: uuid(),
    name: "Lote",
  },
];

export const BannerHome = () => {
  const pathName = usePathname();
  const { push } = useRouter();
  const toast = useQuickToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      city: "",
      property: "",
      rooms: null,
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { city, property, rooms } = data;
    const cityformatted = city.trim().toLowerCase();
    const propertyFormatted = property.trim().toLowerCase();

    const queryParams = queryString.stringify({
      ...(cityformatted && { city: cityformatted }),
      ...(propertyFormatted && { property: propertyFormatted }),
      ...(rooms && { rooms }),
    });
    if(!queryParams){
      toast?.error({
        message: "Ingresa los campos para la busqueda",
        pauseOnHover: true
      });
      return
    }


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
        <h1 className="text-3xl md:text-5xl text-white md:my-2">
          Grupo Don quijote
        </h1>
      </div>

      <form
        className="grid grid-cols-2 grid-rows-3 h-[180px] px-7 md:px0 md:flex md:flex-wrap md:gap-7 md:justify-center content-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("city", { maxLength: 20 })}
          className={`${cNameInput} col-span-2 row-span-1 rounded-t-xl self-end md:self-start text-center md:text-start`}
          placeholder={`Buscar por ciudad`}
        />

        <select
          {...register("property")}
          className={`${cNameInput} col-span-1 row-span-1 rounded-bl-xl `}
        >
          <option value="">Tipo de propiedad...</option>
          {propiertyOptions.map(({ id, name }) => (
            <option value={name} key={id}>
              {name}
            </option>
          ))}
        </select>

        <input
          type="number"
          min={0}
          {...register("rooms", {
            valueAsNumber: true,
          })}
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
