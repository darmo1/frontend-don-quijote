"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { endpoint } from "@/app/constant/endpoint";
import { z } from "zod";
import { signInSchema } from "@/app/(auth)/signin/signin-form/validation";

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

export async function registerUserAction(prevState: any, formData: FormData) {
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

    const data: { email: string; fullName: string; token: string } =
      await response.json();

    cookies().set("jwt", data.token, { secure: true });

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

export async function LoginUserAction(_: any, formData: FormData) {
  try {
    const body = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const validatedFields = signInSchema.safeParse(body);

    if (!validatedFields.success) {
      return {
        status: "validation-error",
        data: null,
        error: validatedFields.error.flatten().fieldErrors,
      };
    }

    const response = await fetch(endpoint.loginUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data: { email: string; fullName: string; token: string } =
      await response.json();

    cookies().set("jwt", data.token, { secure: true });

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
