import { Suspense } from "react";
import { CardWhatsappForm } from "./card-whatsapp-form";
import CardWhatsappSkeleton from "./card-whatsapp.skeleton";
import { endpointApiNext } from "@/app/constant/endpoint";

export const CardWhatsapp = async () => {
  const response = await fetch(endpointApiNext.getCallingCode);
  if (!response.ok) {
    throw new Error("Failed to fetch calling code");
  }
  const callingCode = await response.json();

  return (
    <Suspense fallback={<CardWhatsappSkeleton />}>
      <div className="border border-gray-300 rounded-xl p-[30px] md:w-[400px] mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-semibold">¿Te contactámos?</h2>
          <p className="text-light">Te escribimos a tu whatsapp o e-mail</p>
        </div>
        <CardWhatsappForm callingCode={callingCode} />
      </div>
    </Suspense>
  );
};
