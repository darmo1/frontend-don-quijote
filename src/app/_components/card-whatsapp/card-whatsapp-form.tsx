"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { CardContactForm, CardWhatsappFormProps } from "./types";
import { contactFormAction } from "@/app/services/contactForm/action";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "./validation";
import { useQuickToast } from "@/providers/toast-context";

export const CardWhatsappForm = ({ callingCode }: CardWhatsappFormProps) => {
  const [flagCountry, setFlagCountry] = useState("");
  const [countryName, setCountryName] = useState("");
  const toast = useQuickToast();
  const {
    register,
    watch,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<CardContactForm>({
    defaultValues: {
      countryId: "",
      cellPhone: null,
      email: null,
    },
    resolver: zodResolver(contactFormSchema),
  });
  const countyIdFlag = watch("countryId");
  const [isPending, startTransition] = useTransition();

  const handleForm: SubmitHandler<CardContactForm> = async (data) => {
    startTransition(async () => {
      const registration = await contactFormAction({ ...data, countryName });
      if (!registration.ok) {
        toast?.error({
          message: "Algo salió mal. Verifica el correo o el teléfono celular",
        });
        return;
      }
      toast?.success({
        message: "Salio genial, pronto te contactarémos",
      });
      return reset();
    });
  };

  useEffect(() => {
    const flagSelected = callingCode.find((item) => item.code === countyIdFlag);
    if (flagSelected?.flag) {
      setFlagCountry(flagSelected.flag);
      setCountryName(flagSelected?.name);
    } else {
      setFlagCountry("");
    }
  }, [countyIdFlag]);

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div className="flex gap-4">
        <div className="w-1/2">
          <label>Pais</label>
          <div className="flex items-center">
            <div className=" bg-gray-200 w-[40px] h-[30px]">
              {flagCountry && (
                <Image
                  src={flagCountry}
                  alt="flag-county-selected"
                  className="w-[40px] h-[30px]"
                  width={100}
                  height={100}
                />
              )}
            </div>

            <select
              {...register("countryId", { required: true })}
              className=" w-full border rounded-r-lg px-3 py-2 truncate"
            >
              <option value=""> Selecciona un pais</option>
              {callingCode.map(({ code, name }, index) => (
                <option value={code} key={index}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          {errors.countryId && (
            <div className="text-red-500">{errors.countryId.message}</div>
          )}
        </div>
        <div className="flex flex-col w-1/2">
          <label>Número de celular</label>
          <input
            {...register("cellPhone", { required: true, valueAsNumber: true })}
            onChange={() => clearErrors("cellPhone")}
            className={`border rounded-lg px-3 py-2 ${
              errors?.cellPhone?.message ? "border-red-500" : null
            }`}
            placeholder="311 389 94 56"
          />
        </div>
      </div>
      <div>
        {errors?.cellPhone && (
          <div className="text-red-500">{errors.cellPhone.message}</div>
        )}
      </div>
      <div className="flex flex-col mt-4">
        <label>Email</label>
        <input
          {...register("email")}
          placeholder="test@test.com"
          className="border w-full rounded-lg px-3 py-2"
          onChange={() => clearErrors("email")}
        />
      </div>
      {errors.email && (
        <div className="text-red-500">{errors.email.message}</div>
      )}

      <Button asChild variant={"destructive"} className="w-full my-6">
        <input
          type="submit"
          defaultValue={isPending ? "Enviando" : "Contáctame"}
        />
      </Button>
    </form>
  );
};
