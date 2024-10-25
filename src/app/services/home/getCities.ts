import { endpointApiNext } from "@/app/constant/endpoint";
import { cache } from "react";

 const getCities = cache(async () => {
  try {
    const res = await fetch(endpointApiNext.getCities);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const places = await res.json();
    return places;
  } catch (err) {
    console.log({ error: err });
    return [];
  }
});

export default getCities