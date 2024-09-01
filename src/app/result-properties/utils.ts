import { ResponseGetAllData } from "@/app/all-properties/page";
import { endpoint } from "@/app/constant/endpoint";
import { replaceTokens } from "../utils/string";

export type PropertyProps = | {
  data: ResponseGetAllData[] | [];
  error: boolean;
};

export const findPropertyId = async ( {id}: {
  id: string;
}): Promise<PropertyProps> => {
  try {
    const url = replaceTokens(endpoint.getProperties, id);
    const response = await fetch(url);
    const data = await response.json();

    return {
      data,
      error: false,
    };
  } catch (error) {
    console.log({ error });
    return {
      data: [],
      error: true,
    };
  }
};
