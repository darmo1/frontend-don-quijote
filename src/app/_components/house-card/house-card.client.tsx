"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ResponseGetAllData } from "@/app/all-properties/page";

export const HouseCardClient = ({
  data = [],
}: {
  data: ResponseGetAllData[];
}) => {
  return (
    <div className="flex items-center w-full">
      {data?.length === 0 ? (
        <div className="text-center font-semibold">
          No se encontraron resultados, intento con otra busqueda 💥
        </div>
      ) : (
        Array.isArray(data) && 
          <div>
            {data?.map(
              ({
                address,
                available,
                id,
                images,
                price,
                type,
                description,
              }) => (
                <Card
                  key={id}
                  className="w-[500px] h-[390px] relative mr-6 my-6  rounded-xl"
                >
                  <Image
                    src={images[0]}
                    alt={type}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                    className="rounded-xl"
                  />
                  <CardHeader className="absolute top-0">
                    <CardTitle>{description}</CardTitle>
                    <CardDescription>{type}</CardDescription>
                  </CardHeader>
                  <CardFooter className="border rounded-xl absolute -bottom-6  right-14  w-3/4 flex items-center p-0 bg-white px-4 py-2">
                    <div className="rounded-xl flex w-full items-center">
                      <div className="flex justify-center items-center w-1/2">
                        <h3 className="font-semibold text-sm">Precio:</h3>
                        <p>$ {price}</p>
                      </div>
                      <div className="flex justify-between items-center w-1/2">
                        <div className="">
                          <h3 className="font-semibold text-sm">Área:</h3>
                          <p>
                            {" "}
                            --- <small>m3</small>
                          </p>
                        </div>
                        <Button asChild variant={"destructive"}>
                          <Link href={`/detail-property/${id}`}>Ver más</Link>
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              )
            )}
          </div>
        
      )}
    </div>
  );
};
