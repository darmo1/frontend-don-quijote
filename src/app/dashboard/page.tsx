import { headers } from "next/headers";
import { FormPropertyWrapper } from "./form-property/form-property.server";

export default async function Dashboard() {
  const headersList = headers();
  const userDataHeader = headersList.get("x-user-data");
  const userInfo = userDataHeader ? JSON.parse(userDataHeader) : null;

  return (
    <main className="max-w-7xl mx-auto border px-4 py-2 my-4">
      <h1 className="text-center font-semibold text-2xl">Dashboard</h1>
      <div className="my-8 text-center">
        <h1 className="">Bienvenido(a): {`¡${userInfo?.fullName}! 👋`}</h1>
        
      </div>

      <FormPropertyWrapper />
    </main>
  );
}
