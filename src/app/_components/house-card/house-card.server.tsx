import { Suspense } from "react";
import { HouseCardClient } from "./house-card.client";
import { ResponseSearchProps } from "@/app/services/home/type";
import { searchProperty } from "@/app/services/home/home-action";
import { HouseCardSkeleton } from "./house-card.skeleton";

type SearchParamsProps = {
  city?: string;
  property?: string;
  rooms?: number;
};

export const HouseCardServer = async (searchParams: SearchParamsProps) => {
  const { data, error }: ResponseSearchProps = await searchProperty(
    searchParams
  );
  if (error !== null) {
    return (
      <div className="text-center font-semibold">
        Algo mal ocurrió, intente de nuevo más tarde 🚧🚧🚧
      </div>
    );
  }

  return (
    <Suspense fallback={<HouseCardSkeleton />}>
      <HouseCardClient data={data} />
    </Suspense>
  );
};
