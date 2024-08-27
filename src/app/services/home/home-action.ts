import { ResponseGetAllData } from "@/app/all-properties/page";
import { endpoint } from "@/app/constant/endpoint";
import { ResponseSearchProps } from "./type";

export const searchProperty = async (q: {
  city?: string;
  property?: string;
  rooms?: number;
}): Promise<ResponseSearchProps> => {
  try {
    const response = await fetch(endpoint.searchProperties, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(q),
    });

    const data = await response.json();
  
    return {
      data,
      error: null,
    };
  } catch (error) {
    console.log({ error });
    return {
      data: [],
      error,
    };
  }
};
