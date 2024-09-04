import { Suspense } from "react";
import { SuggestionsProperty } from "./suggestionsProperty";
import { ResponseGetAllData } from "@/app/all-properties/page";
import { suggestedProperties } from "@/app/result-properties/utils";

type ResponseProps = {
  data: {
    suggestedProperties: ResponseGetAllData[] | [];
  };
  error: boolean;
};

export const SuggestionPropertyServer = async ({ city }: { city: string }) => {
  const { data, error }: ResponseProps =
    (await suggestedProperties({ city })) ?? {};

  if (!data?.suggestedProperties?.length || error) return;

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <SuggestionsProperty suggestedProperties={data.suggestedProperties} />
    </Suspense>
  );
};