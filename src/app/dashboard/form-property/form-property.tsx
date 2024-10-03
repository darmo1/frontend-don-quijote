"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  useForm,
  Controller,
  useFieldArray,
  SubmitHandler,
} from "react-hook-form";
import { v4 as uuid } from "uuid";
import { MunicipalityProps } from "./form-property.server";
import { replaceTokens } from "@/app/utils/string";
import { endpoint } from "@/app/constant/endpoint";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { propertyAction } from "@/app/services/property/property-action";
import { FormInputProps, FormPropertyProps, InputProps } from "./types";
import { TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useQuickToast } from "@/providers/toast-context";
import { secureImage } from "./utils";
import { dataInputPropertyForm, MAX_FILE_SIZE, MAX_IMAGES } from "./data";
import { propiertyOptions } from "@/app/_components/banners/banner-home/banner-home";

export const Formproperty = ({ departments }: FormPropertyProps) => {
  const [municipalities, setMunicipalities] = useState<MunicipalityProps[]>([]);
  const { control, register, handleSubmit, watch, reset } =
    useForm<FormInputProps>({
      defaultValues: {
        type: "",
        description: "",
        address: "",
        departments: "",
        municipality: "",
        location: "",
        price: 0,
        area: 0,
        reference: "",
        socialClass: 1,
        rooms: 0,
        closet: 0,
        administration: "",
        garage: 0,
        kitchen: 0,
        bathroom: 0,
        dinningroom: 0,
        images: [],
      },
    });

  const { fields, append, remove } = useFieldArray({
    name: "images",
    keyName: "id",
    control,
  });
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const departmentSelected = watch("departments");
  const municipalitySelected = watch("municipality");
  const [formState, formPropertyAction] = useFormState(propertyAction, null);
  const toast = useQuickToast();

  useEffect(() => {
    if (!departmentSelected) return;
    async function getMunicipalities() {
      const url = replaceTokens(endpoint.municipality, departmentSelected);
      const response = await fetch(url);
      const municipalities = await response.json();
      setMunicipalities(municipalities);
    }
    getMunicipalities();
  }, [departmentSelected]);

  useEffect(() => {
    if (!formState) return;
    if (formState?.status === "success") {
      toast?.success({
        message: "Salio genial",
      });
      reset();
      return;
    }
    if (formState?.status === "error") {
      return toast?.error({
        message: "Algo salió mal, intente más tarde",
      });
    }
  }, [formState, reset]);

  const Input = ({
    label,
    name,
    type = "text",
    classNameInput = "",
    classNameContainer = "",
    classNameLabel = "",
    ...rest
  }: InputProps) => (
    <div className={`w-1/3 flex flex-col mb-8 ${classNameContainer} `}>
      <label
        className={`font-semibold text-sm mb-2 ${classNameLabel}`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        {...register(name)}
        {...rest}
        id={name}
        type={type}
        className={`border  px-4 py-2 rounded-xl ${classNameInput}`}
      />
    </div>
  );

  const onAddImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    hiddenFileInput.current && hiddenFileInput.current.click();
  };

  const handleAddImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const uploadedFiles = Array.from(event.target.files || []);

    //validation size and number amount of images
    const validFiles = uploadedFiles.filter((file) => {
      if (file.size > MAX_FILE_SIZE) {
        toast?.error({
          message: `El archivo ${file.name} excede el tamaño de 1MB, cargue una imagen de menor peso`,
          pauseOnHover: true
        });
        return false;
      }

      if ((fields.length ) >= MAX_IMAGES) {
        toast?.error({
          message: `No puede subir más de 10 imágenes`,
        });
        return false;
      }

      return true;
    });

    const files = validFiles.map((file: File) => ({
      id: uuid(),
      file,
    }));

    //add images no more than 10
    if ((fields.length + files.length) <= MAX_IMAGES) {
      append(files);
    } else {
      toast?.error({
        message: `No puedes subir más de 10 imágenes en total`,
      });
    }

    if (hiddenFileInput.current) {
      hiddenFileInput.current.value = "";
    }
  };

  const onSubmit: SubmitHandler<FormInputProps> = async (data) => {
    const departmentName = departments.find(
      ({ id }) => id === +departmentSelected
    );
    const municipalityName = municipalities.find(
      ({ id }) => id === +municipalitySelected
    );
    const formData = new FormData();

    (Object.keys(data) as (keyof FormInputProps)[]).forEach((key) => {
      const value = data[key];
      if (value) {
        formData.append(key, value as string | File);
      }
    });

    const rawImages = data.images.map((file) => file.file);
    rawImages.forEach((file) => formData.append("images", file));
    formData.delete("departments");
    formData.delete("municipality");
    formData.append("departments", departmentName?.name ?? "");
    formData.append("municipality", municipalityName?.name ?? "");
    return formPropertyAction(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border w-full mx-auto px-4 py-2 bg-gray-300 rounded-xl"
    >
      <div className="flex flex-wrap gap-x-4 border justify-center ">
        <div className="flex flex-col mb-8 md:w-1/3 w-full">
          <label className="font-semibold text-sm mb-2">Departamento</label>
          <select
            {...register("departments")}
            className="border  px-4 py-2 rounded-xl"
          >
            <option value="">Selecciona Departamento...</option>
            {departments.map(({ id, name }) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-8 md:w-1/3">
          <label className="font-semibold text-sm mb-2">Municipio</label>
          <select
            {...register("municipality")}
            className="border px-4 py-2 rounded-xl"
          >
            <option value="">Selecciona Municipio...</option>
            {municipalities.map(({ id, name }) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-8 md:w-1/3">
          <label className="font-semibold text-sm mb-2">Tipo de vivienda</label>
          <select {...register("type")} className="border px-4 py-2 rounded-xl">
            <option value="">Tipo de propiedad...</option>
            {propiertyOptions.map(({ id, name }) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
        {dataInputPropertyForm.map(({ label, name, type, key }) => (
          <Input label={label} name={name} type={type} key={key} />
        ))}
      </div>

      <div>
        <div className={`flex flex-col mb-8`}>
          {fields.length === 0 && (
            <label
              className={`font-semibold text-sm mb-2 border w-full min-h-80 rounded-xl grid place-content-center my-4`}
              htmlFor={"images"}
            >
              fotos <small>Solo se aceptan formato png,jpeg </small>
            </label>
          )}
          <input
            {...register("images")}
            ref={hiddenFileInput}
            id="images"
            type="file"
            className={`border  px-4 py-2 rounded-xl hidden`}
            multiple
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleAddImages}
          />
        </div>
        <small>Máximo de fotos: 10 </small>
      </div>
      <div className="flex flex-wrap gap-3 ">
        {fields.map(({ id, file }, index) => (
          <div
            key={file.name}
            className="w-[300px] flex flex-col items-center "
          >
            <Controller
              control={control}
              name={`images.${index}`}
              render={() => (
                <div className="flex flex-col items-center justify-between rounded-xl pb-2 w-[300px] h-[300px] relative">
                  <Image
                    src={secureImage(file)}
                    alt={file.name}
                    layout="fill"
                    objectFit="cover"
                    className=" rounded-xl "
                  />
                  <div className="flex justify-between items-center z-10 bg-white w-full rounded-t-xl">
                    <h2 className="font-semibold px-4 py-2 truncate">
                      {file.name}
                    </h2>
                    <TrashIcon
                      className="size-6 grid border mr-3"
                      onClick={() => remove(index)}
                    />
                  </div>
                </div>
              )}
            />
          </div>
        ))}
      </div>

      {fields.length > 0 && fields.length <= MAX_IMAGES && (
        <div className="flex justify-center">
          <Button variant="destructive" onClick={(e) => onAddImage(e)} className="my-4">
            Add documents
          </Button>
        </div>
      )}

      <div className={`flex flex-col mb-8  `}>
        <label
          className={`font-semibold text-sm mb-2 `}
          htmlFor={"description"}
        >
          Descripcion
        </label>
        <textarea
          {...register("description")}
          id="description"
          className={`border  px-4 py-2 rounded-xl`}
        />
      </div>

      <Button asChild className="mx-auto flex">
        <input type="submit" value="Enviar" />
      </Button>
    </form>
  );
};
