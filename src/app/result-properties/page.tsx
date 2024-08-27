import Image from "next/image";
import { searchProperty } from "../services/home/home-action";
import { ResponseSearchProps } from "../services/home/type";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type SearchParamsProps = {
  city: string;
  property: string;
  rooms: number;
};
export default async function Property({
  searchParams,
}: {
  searchParams: SearchParamsProps;
}) {
  const { data, error }: ResponseSearchProps = await searchProperty(
    searchParams
  );
  console.log({ searchParams, data }, "❤❤❤");
  return (
    <main>
      {error !== null && (
        <div className="text-center font-semibold">
          Algo mal ocurrió, intente de nuevo más tarde 🚧🚧🚧
        </div>
      )}
      {data.length === 0 && (
        <div className="text-center font-semibold">
          No se encontraron resultados, intento con otra busqueda 💥
        </div>
      )}
      {data.map(
        ({ address, available, id, images, price, type, description }) => available && (
          <Card key={id} className="w-[500px] h-[390px] relative m-6">
            <Image
              src={images[0] ? images[0] : '/banner-home.svg'}
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
                      {" "}
                      --- <small>m3</small>
                    </p>
                  </div>
                  <Button asChild variant={"destructive"}>
                    <Link href={"/"}>Ver más</Link>
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        )
      )}
    </main>
  );
}
