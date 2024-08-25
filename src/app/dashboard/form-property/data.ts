import { dataInputPropertyFormProps } from "./types";

export const dataInputPropertyForm: dataInputPropertyFormProps[] = [
  {
    label: "Tipo de vivienda",
    key: "typeOfProperty",
    name: "type",
    type: "text",
  },
  // {
  //   label: "Descripcion",
  //   key: "description",
  //   name: "description",
  //   type: "text",
  // },
  { label: "Dirección", key: "address", name: "address", type: "text" },
  {
    label: "Sector o Barrio",
    key: "Sector o Barrio",
    name: "location",
    type: "text",
  },
  { label: "Precio", key: "Precio", name: "price", type: "number" },
  { label: "Área", key: "area", name: "area", type: "number" },
  { label: "Referencia", key: `reference`, name: "reference", type: "text" },
  { label: "Estrato", key: "estrato", name: "socialClass", type: "number" },
  {
    label: "Sala comedor",
    key: "dinningroom",
    name: "dinningroom",
    type: "number",
  },
  { label: "Baños", key: "bathroom", name: "bathroom", type: "number" },
  { label: "Habitaciones", key: "rooms", name: "rooms", type: "number" },
  { label: "Closet", key: "closet", name: "closet", type: "number" },
  {
    label: "Administración",
    key: "administration",
    name: "administration",
    type: "text",
  },
  { label: "Garaje", key: "garage", name: "garage", type: "number" },
  { label: "Cocina", key: "kitchen", name: "kitchen", type: "number" },
];