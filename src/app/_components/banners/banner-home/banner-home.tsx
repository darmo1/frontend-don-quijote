'use client'
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
  city: string;
  property: string;
  rooms: number;
}

export const BannerHome = () => {
  const { register, handleSubmit } = useForm();
  const cNameInput = `mx-8 px-4 py-2 rounded-xl w-[300px] h-[68px]`
  return (
    <section className="bg-banner-home bg-cover  h-[467px] grid place-content-center" data-testId="banner-home">
      <div className="flex flex-col justify-center items-center my-8">
      <h2 className="text-6xl text-white">Compra tu propiedad con </h2>
      <h1 className="text-6xl text-white">Grupo Don quijote</h1>
      </div>
      <form className="">
        <input
          {...register("city", { maxLength: 20 })}
          className={cNameInput}
          placeholder="Buscar por ciudad, zona o barrio"
        />
        <input
          {...register("property", { maxLength: 20 })}
          className={cNameInput}
          placeholder="Tipo de propiedades"
        />
        <input
          type="number"
          {...register("rooms", { min: 1 })}
          className={cNameInput}
          placeholder="Habitaciones "
        />
       <Button asChild variant={"destructive"} >
        <input type="submit" value="Buscar"/>
      </Button>
      </form> 
    </section>
  );
};
