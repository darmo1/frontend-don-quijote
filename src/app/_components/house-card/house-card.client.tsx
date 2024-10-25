"use client";

import { ResponseGetAllData } from "@/app/all-properties/page";
import { CardProperty } from "../card-property";
import { v4 } from "uuid";

export const HouseCardClient = ({
  data = [],
}: {
  data: ResponseGetAllData[];
}) => {

  return (
    <div className="flex items-center w-full mb-12">
      {data?.length === 0 ? (
        <div className="text-center font-semibold text-xl my-12 mx-6">
          No se encontraron resultados, intento con otra búsqueda 💥
        </div>
      ) : (
        Array.isArray(data) && (
          <div className="flex flex-wrap">
            {data?.map((item) => (
              <CardProperty {...item}  key={v4()}/>
            ))}
          </div>
        )
      )}
    </div>
  );
};
