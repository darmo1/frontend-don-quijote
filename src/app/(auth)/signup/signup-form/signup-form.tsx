"use client";

import Link from "next/link";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { registerUserAction } from "@/app/services/auth/auth-action";

import { ZodErrors } from "../../zod-error";
import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";

const INITIAL_STATE = {
  data: null,
};

export function SignupForm() {
  const [formState, formAction] = useFormState(
    registerUserAction,
    INITIAL_STATE
  );
  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center">Sign Up</CardTitle>
            <CardDescription>
              Entra tu información para crear una cuenta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Nombre completo</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Nombre completo"
              />

              {formState?.status === "validation_error" && (
                <ZodErrors error={formState?.data?.zodErrors?.username} />
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
              />
              {formState?.status === "validation_error" && (
                <ZodErrors error={formState?.data?.zodErrors?.email} />
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Contraseña"
              />
              {formState?.status === "validation_error" && (
                <ZodErrors error={formState?.data?.zodErrors?.password} />
              )}
            </div>
          </CardContent>
          {formState.status == "error" && (
            <ZodErrors error={formState.data.message} />
          )}
          <CardFooter className="flex flex-col">
            <Button variant={"destructive"}>Registrarse</Button>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Ya tienes una cuenta?
          <Link className="underline ml-2" href="signin">
            Iniciar sesión
          </Link>
        </div>
      </form>
    </div>
  );
}
