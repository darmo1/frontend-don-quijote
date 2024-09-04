"use server";
import { ResponseGetAllData } from "@/app/all-properties/page";
import { endpoint } from "@/app/constant/endpoint";
import { replaceTokens } from "../utils/string";

export type PropertyProps = {
  data: {
    property: ResponseGetAllData[] | [];
    suggestedProperties: ResponseGetAllData[] | [];
  };
  error: boolean;
};

export const findPropertyId = async ({
  id,
  city,
}: {
  id: string;
  city?: string;
}): Promise<PropertyProps> => {
  try {
    const url = replaceTokens(endpoint.getProperties, id);
    const findUrlProperty = city
      ? `${url}?municipality=${encodeURIComponent(city as string)}`
      : url;

    const response = await fetch(findUrlProperty, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 3600,
      },
    });
    const data = await response.json();
    console.log({ data, suggested: data.suggestedProperties }, "#######data");
    return {
      data,
      error: false,
    };
  } catch (error) {
    console.log({ error });
    return {
      data: {
        property: [],
        suggestedProperties: [],
      },
      error: true,
    };
  }
};
