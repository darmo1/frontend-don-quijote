import { DepartmentProps } from "./form-property.server";

export type FormInputProps = {
  type: string;
  description: string;
  departments: string;
  address: "";
  municipality: string;
  location: string;
  price: number;
  area: number;
  reference: string;
  socialClass: number;
  rooms: number;
  closet: number;
  administration: string;
  garage: number;
  kitchen: number;
  bathroom: number;
  dinningroom: number;
  images: { id: string; file: File }[];
};

export type FormPropertyProps = {
  departments: DepartmentProps[];
};

export type InputProps = {
  label: string;
  name: keyof FormInputProps;
  type?: string;
  classNameInput?: string;
  classNameContainer?: string;
  classNameLabel?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type dataInputPropertyFormProps = {
  label: string;
  key: string;
  name: keyof FormInputProps;
  type: string;
};
