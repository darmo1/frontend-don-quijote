import { Suspense } from "react";
import { CardWhatsappForm } from "./card-whatsapp-form";
import CardWhatsappSkeleton from "./card-whatsapp.skeleton";

export const CardWhatsapp = async () => {
  const response = await fetch("http://localhost:3001/api/calling-code");
  if (!response.ok) {
    throw new Error("Failed to fetch calling code");
  }
  const callingCode = await response.json();

  return (
    <Suspense fallback={<CardWhatsappSkeleton />}>
      <div className="border rounded-xl p-[30px] w-[400px] mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-semibold">¿Te contactámos?</h2>
          <p className="text-light">Te escribimos a tu whatsapp o e-mail</p>
        </div>
        <CardWhatsappForm callingCode={callingCode} />
      </div>
    </Suspense>
  );
};
