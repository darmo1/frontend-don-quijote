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

const INITIAL_STATE = {
  data: null,
};

export const SigninForm = () => {
  const [formState, formLoginAction] = useFormState(
    LoginUserAction,
    INITIAL_STATE
  );

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
              <Input id="email" name="email" type="text" placeholder="email" />
              {formState?.status === "validation_error" && (
                <ZodErrors error={formState?.data?.zodErrors?.email} />
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
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
          <CardFooter className="flex flex-col">
            <Button variant={"destructive"}>Ingresar</Button>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Don't have an account?
          <Link className="underline ml-2" href="/signup">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};
