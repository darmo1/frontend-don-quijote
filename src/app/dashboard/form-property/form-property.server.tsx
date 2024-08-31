import { endpoint } from "@/app/constant/endpoint";
import { Formproperty } from "./form-property";

export type DepartmentProps = {
  id: number;
  name: string;
  description: string;
  cityCapitalId: number;
  municipalities: number;
  surface: number;
  population: number;
  phonePrefix: string;
  countryId: number;
  cityCapital: string | null;
  country: string | null;
  cities: string | null;
  regionId: number;
  region: string | null;
};

export type MunicipalityProps = {
  id: number;
  name: string;
};

export const FormPropertyWrapper = async () => {
  const departmentUrl = endpoint.departaments;

  const response = await fetch(departmentUrl);
  const departments: DepartmentProps[] = await response.json();
  return (
    <div>
      <Formproperty departments={departments} />
    </div>
  );
};
