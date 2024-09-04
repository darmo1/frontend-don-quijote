"use server";

import { CardContactForm } from "@/app/_components/card-whatsapp/types";
import { endpoint } from "@/app/constant/endpoint";

type contactFormActionProps = CardContactForm & { countryName?: string };
export const contactFormAction = async (data: contactFormActionProps) => {
  try {
    const res = await fetch(endpoint.createContact, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const registration = await res.json();
    return registration;
  } catch (error) {
    return {
      ok: false,
    };
  }
};
