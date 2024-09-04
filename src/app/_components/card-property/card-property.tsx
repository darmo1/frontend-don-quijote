import { ResponseGetAllData } from "@/app/all-properties/page";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const CardProperty = ({
  id,
  images,
  type,
  description,
  price,
  area,
  municipality,
}: ResponseGetAllData) => {
  return (
    <Card className="w-[500px] h-[390px] relative m-6">
      <Image
        src={images[0] ? images[0] : "/banner-home.svg"}
        alt={type}
        layout="fill"
        objectFit="cover"
        loading="lazy"
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
                {area} <small>m3</small>
              </p>
            </div>
            <Button asChild variant={"destructive"}>
              <Link href={`/detail-property/${id}?city=${municipality.toLowerCase()}`}>
                Ver más
              </Link>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
