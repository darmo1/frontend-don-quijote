'use client'
import { ResponseGetAllData } from "./page";
import { CardProperty } from "../_components/card-property";
import { v4 } from "uuid";

export const AllPropertiesClient = ({
  properties = [],
}: {
  properties: ResponseGetAllData[];
}) => {
  return (
    <div className="flex items-center justify-center w-full my-12">
      {properties?.length === 0 ? (
        <div className="text-center font-semibold ">
          No se encontraron resultados, intento con otra busqueda 💥
        </div>
      ) : (
        Array.isArray(properties) && (
          <div className="flex flex-wrap">
            {properties?.map((item) => (
              <CardProperty {...item} key={v4()} />
            ))}
          </div>
        )
      )}
    </div>
  );
};
