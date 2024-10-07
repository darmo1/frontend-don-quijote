"use server";
import { cookies } from "next/headers";
import { endpoint } from "@/app/constant/endpoint";
import { z } from "zod";
import { revalidateTag } from "next/cache";

const message = "Field should be greater";
const messageString = "There is somethin wrong";
const schemaRegister = z.object({
  type: z.string().min(3, { message: messageString }),
  description: z.string().min(3, { message: messageString }),
  departments: z.string().min(3, { message: messageString }),
  address: z.string().min(3, { message: messageString }),
  municipality: z.string().min(0, { message: messageString }),
  location: z.string().min(3, { message: messageString }),
  price: z.number().min(0, { message }),
  area: z.number().min(0, { message }),
  reference: z.string().min(3, { message: messageString }),
  socialClass: z.number().min(0, { message }),
  rooms: z.number().min(0, { message }),
  closet: z.number().min(0, { message }),
  administration: z.string().min(3, { message: messageString }),
  garage: z.number().min(0, { message }),
  kitchen: z.number().min(0, { message }),
  bathroom: z.number().min(0, { message }),
  dinningroom: z.number().min(0, { message }),
});

export type PropertyActionProps =
  | {
      status: "success";
      data: { ok: boolean };
      error: null;
    }
  | {
      status: "error";
      data: any;
    }
  | {
      status: "validation_error";
      data: { zodErrors: Record<string, string[]> };
      message: string;
    }
  | null;

export async function propertyAction(
  prevState: any,
  formValues: any
): Promise<PropertyActionProps | any> {
  try {
    //const rawFormData = Object.fromEntries(formValues);

    // const validatedFields = schemaRegister.safeParse(body);

    // if (!validatedFields.success) {
    //   return {
    //     status: "validation_error",
    //     data: { zodErrors: validatedFields.error.flatten().fieldErrors },
    //     message: "Missing Fields. Failed to Register.",
    //   };
    // }

    const token = cookies().get("jwt")?.value;
    // if (!token) return redirect('/singin')

    const response = await fetch(endpoint.registerProperties, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: formValues,
    });

    const data = await response.json();
    revalidateTag('getMunicipalities')

    return {
      status: "success",
      data: {
        ok: true,
      },
      error: null,
    };
  } catch (error) {
    console.log({ error });
    return {
      status: "error",
      data: {
        type: "string",
      },
    };
  }
}
