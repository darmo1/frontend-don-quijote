"use client";

import { LoginUserAction } from "@/app/services/auth/auth-action";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useFormState } from "react-dom";
import { ZodErrors } from "../../zod-error";
import { ErrorOption, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SignInSchema, signInSchema } from "@/app/services/auth/validation";
import { validationError } from "../../consts";

export const SigninForm = () => {
  const { push } = useRouter();
  const {
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [formState, formLoginAction] = useFormState(LoginUserAction, null);

  useEffect(() => {
    if (formState?.status === validationError) {
      Object.entries(formState.error).forEach(([field, error]) =>
        setError(
          field as keyof SignInSchema,
          {
            message: error,
          } as ErrorOption
        )
      );
    }

    if (formState?.status === "success") {
      reset();
      window.location.href= '/'
    }

    if (formState?.status === "error") return reset();
  }, [formState]);

  const handleChange = (field: keyof SignInSchema) => () => {
    clearErrors(field);
  };

  return (
    <div className="w-full max-w-xl">
      <form action={formLoginAction}>
        <Card className="">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center">
              Log In
            </CardTitle>
            <CardDescription className="text-center">
              Administrador
            </CardDescription>
            <hr className="border-2 my-4" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="email"
                onChange={handleChange("email")}
              />
              <ZodErrors
                error={
                  errors.email?.message ? [errors.email?.message] : undefined
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
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
            {formState?.status === "error" && (
              <p className="text-red-500">No coincide el usuario</p>
            )}
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button variant={"destructive"}>Ingresar</Button>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?
          <Link className="underline ml-2" href="/signup">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};
