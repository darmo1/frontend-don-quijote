import { AllPropertiesServer } from "./all-properties.server";

export type ResponseGetAllData = {
  id: string;
  type: string;
  address: string;
  price: number | null;
  images: string[];
  available: boolean;
  description: string;
  departments: string;
  municipality: string;
  location: string;
  area: number;
  reference: string;
  socialClass: number;
  rooms: number;
  closet: number;
  administration: string;
  garage: number;
  kitchen: number;
  bathroom: number;
  dinningroom: number;
};

export default async function AllProperties() {
  return (
    <main className="max-w-7xl mx-auto my-12">
      <h1 className="text-center font-semibold text-3xl">Propiedades</h1>
      <div className="flex items-center w-full">
        <AllPropertiesServer />
      </div>
    </main>
  );
}
