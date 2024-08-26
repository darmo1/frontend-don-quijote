"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { endpoint } from "@/app/constant/endpoint";
import { z } from "zod";
import { config } from "./cookies-config";

const schemaRegister = z.object({
  fullName: z.string().min(3).max(20, {
    message: "fullName must be between 3 and 20 characters",
  }),
  password: z.string().min(6).max(100, {
    message: "Password must be between 6 and 100 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

type RegisterUser =
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

const redirection = () => redirect("/dashboard");

export async function registerUserAction(
  prevState: any,
  formData: FormData
): Promise<RegisterUser | any> {
  try {
    const body = {
      fullName: formData.get("fullName"),
      password: formData.get("password"),
      email: formData.get("email"),
    };
    const validatedFields = schemaRegister.safeParse(body);

    if (!validatedFields.success) {
      return {
        status: "validation_error",
        data: { zodErrors: validatedFields.error.flatten().fieldErrors },
        message: "Missing Fields. Failed to Register.",
      };
    }

    const response = await fetch(endpoint.registerUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    // if( response?.statusCode != 400  ){
    //   return {
    //     status: "error",
    //     data
    //   }
    // }

    const data: { email: string; fullName: string; token: string } =
      await response.json();

    cookies().set("jwt", data.token, config);
    redirection()
    return {
      status: "success",
      data: {
        ok: true,
      },
      error: null,
    };
    
  } catch (error) {
    return {
      status: "error",
      data: {
        type: "string",
      },
    };
  } 
}

export async function LoginUserAction(
  prevState: any,
  formData: FormData
): Promise<RegisterUser | any> {
  try {
    const body = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const validatedFields = schemaRegister.safeParse(body);

    // if (!validatedFields.success) {
    //   return {
    //     status: "validation_error",
    //     data: { zodErrors: validatedFields.error.flatten().fieldErrors },
    //     message: "Missing Fields. Failed to Register.",
    //   };
    // }

    const response = await fetch(endpoint.loginUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data: { email: string; fullName: string; token: string } =
      await response.json();
    console.log({ data })
    cookies().set("jwt", data.token, config);
    redirection()
    return {
      status: "success",
      data: {
        ok: true,
      },
      error: null,
    };
  } catch (error) {
    return {
      status: "error",
      data: {
        type: "string",
      },
    };
  } 
}
