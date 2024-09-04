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
import { registerSchema, RegisterSchema } from "@/app/services/auth/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorOption, useForm } from "react-hook-form";
import { useEffect } from "react";
import { validationError } from "../../consts";

const INITIAL_STATE = {
  data: null,
};

export function SignupForm() {
  const {
    reset,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });
  const [formState, formAction] = useFormState(
    registerUserAction,
    INITIAL_STATE
  );

  useEffect(() => {
    if (formState?.status === validationError) {
      Object.entries(formState?.error).forEach(([field, error]) =>
        setError(
          field as keyof RegisterSchema,
          {
            message: error,
          } as ErrorOption
        )
      );
    }

    if (formState?.status === "success") {
      reset();
      window.location.href = "/";
    }
  }, [formState, reset]);

  const handleChange = (field: keyof RegisterSchema) => () => {
    clearErrors(field);
  };

  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center">
              Registro
            </CardTitle>
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
                onChange={handleChange("fullName")}
              />
              <ZodErrors
                error={
                  errors.fullName?.message
                    ? [errors.fullName?.message]
                    : undefined
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                onChange={handleChange("email")}
              />
              <ZodErrors
                error={
                  errors.email?.message ? [errors.email?.message] : undefined
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Contraseña"
                onChange={handleChange("password")}
              />
              <ZodErrors
                error={
                  errors.password?.message
                    ? [errors.password?.message]
                    : undefined
                }
              />
            </div>
          </CardContent>

          {formState?.status == "error" && (
            <ZodErrors error={formState?.error?.message} />
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
