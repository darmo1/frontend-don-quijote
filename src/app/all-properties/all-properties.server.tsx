import { Suspense } from "react"
import { SpinnerLoading } from "../_components/spinner-loading"
import { AllPropertiesClient } from "./all-properties.client"
import { ResponseGetAllData } from "./page";
import { endpoint } from "../constant/endpoint";


export const AllPropertiesServer = async () => {
    const response = await fetch(endpoint.getAllProperties);

    if(!response.ok){
     // Lanzar un error en lugar de devolver un componente
     throw new Error('Failed to fetch properties');
    }

    const properties: ResponseGetAllData[] = await response.json();
 
  
  return (
    <Suspense fallback={<SpinnerLoading />}>
      <AllPropertiesClient properties={properties}/>
    </Suspense>
  )
}
