import { redirect } from "next/navigation";
import { HouseCardServer } from "../_components/house-card/house-card.server";
export const dynamic = "force-dynamic";

type SearchParamsProps = {
  city?: string;
  property?: string;
  rooms?: number;
};
export default async function SearchResults({
  searchParams = {},
}: {
  searchParams: SearchParamsProps;
}) {
  if (!searchParams || Object.keys(searchParams).length === 0) {
    return redirect("/");
  }
  return (
    <main className="max-w-6xl md:px-8 mx-auto my-12">
      <div>
        <h1 className="font-semibold text-2xl md:text-3xl mx-6">
          <span className="capitalize">{searchParams?.property}</span>
          {` ${searchParams?.city && `en ${searchParams.city}`}`}{" "}
          {`${
            searchParams?.rooms &&
            `con ${
              searchParams.rooms == 1
                ? `${searchParams.rooms} habitacion`
                : `${searchParams.rooms} habitaciones`
            }`
          }`}
          :
        </h1>
      </div>
      <HouseCardServer {...searchParams} />
    </main>
  );
}
