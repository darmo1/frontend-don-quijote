import { redirect } from "next/navigation";
import { HouseCardServer } from "../_components/house-card/house-card.server";
export const dynamic = "force-dynamic";

type SearchParamsProps = {
  city?: string;
  property?: string;
  rooms?: number;
};
export default async function SearchResults(
  {
    searchParams = {},
  }: {
    searchParams: SearchParamsProps;
  }
) {
  if (Object.keys(searchParams).length === 0) {
    return redirect("/");
  }
  return (
    <main className="max-w-6xl border border-red-500 mx-auto">
      <div>
        <h1 className="font-semibold text-lg">
          Apartamentos{` ${searchParams?.city && `en ${searchParams.city}`}`}
        </h1>
      </div>
      <HouseCardServer {...searchParams} />
    </main>
  );
}
