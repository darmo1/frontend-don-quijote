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
  const { data, error }: ResponseSearchProps = await searchProperty({
    ...searchParams,
    ...{
      rooms: searchParams.rooms && Number(searchParams.rooms)
    }
  });

  if (error !== null) {
    // Lanzar un error en lugar de devolver un componente
    throw new Error('Failed to fetch result-properties');
  }

  return (
    <Suspense fallback={<HouseCardSkeleton />}>
      <HouseCardClient data={data} />
    </Suspense>
  );
};
