"use server";
import { cookies } from "next/headers";
import { endpoint } from "@/app/constant/endpoint";

import { registerSchema, signInSchema } from "./validation";
import { ResponseAuthUser, ResponseAuthUserAction } from "./types";
import { validationError } from "@/app/(auth)/consts";

export async function registerUserAction(
  prevState: any,
  formData: FormData
): Promise<ResponseAuthUserAction | any> {
  try {
    const body = {
      fullName: formData.get("fullName"),
      password: formData.get("password"),
      email: formData.get("email"),
    };
    const validatedFields = registerSchema.safeParse(body);

    if (!validatedFields.success) {
      return {
        status: validationError,
        data: null,
        error: validatedFields.error.flatten().fieldErrors,
      };
    }

    const response = await fetch(endpoint.registerUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("error - api - ");
    }
    const data: ResponseAuthUser = await response.json();
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

export async function LoginUserAction(
  _: any,
  formData: FormData
): Promise<ResponseAuthUserAction | any> {
  try {
    const body = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const validatedFields = signInSchema.safeParse(body);

    if (!validatedFields.success) {
      return {
        status: validationError,
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
    if (!response.ok) {
      throw new Error("error - api - ");
    }

    const data: ResponseAuthUser = await response.json();
    cookies().set("jwt", data.token, { secure: true });

    return {
      status: "success",
      data: {
        ok: true,
      },
      error: null,
    };
  } catch (error) {
    console.log({ error }, "💥");

    return {
      status: "error",
      data: {
        type: "string",
      },
    };
  }
}
