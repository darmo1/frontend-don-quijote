import { searchProperty } from "../services/home/home-action";
import { ResponseSearchProps } from "../services/home/type";
import { ResultsProperties } from "./results-properties";
export const dynamic = "force-dynamic";

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

      <ResultsProperties data={data} />
    </main>
  );
}
