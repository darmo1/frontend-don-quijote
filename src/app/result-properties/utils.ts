"use server";
import { ResponseGetAllData } from "@/app/all-properties/page";
import { endpoint } from "@/app/constant/endpoint";
import { replaceTokens } from "../utils/string";
import { getRelativeURLWithParams } from "../utils/url";

export type PropertyProps = {
  data: {
    property: ResponseGetAllData[] | [];
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
    const findUrlProperty = getRelativeURLWithParams(url);
    const response = await fetch(findUrlProperty, {
      cache: "no-cache",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return {
      data,
      error: false,
    };
  } catch (error) {
    console.log({ error });
    return {
      data: {
        property: [],
      },
      error: true,
    };
  }
};

export const suggestedProperties = async ({
  city,
}: {
  city: string;
}): Promise<{
  data: { suggestedProperties: ResponseGetAllData[] | [] };
  error: boolean;
}> => {
  try {
    const url = replaceTokens(endpoint.getPropertySuggested, city);
    const response = await fetch(url, {
      cache: "no-cache",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return {
      data,
      error: false,
    };
  } catch (error) {
    console.log({ error });
    return {
      data: {
        suggestedProperties: [],
      },
      error: true,
    };
  }
};
