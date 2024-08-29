import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({
    message: "Correo inválido",
  }),
  password: z.string().min(8, {
    message: "Contraseña inválida",
  }),
});

export type SignInSchema = z.infer<typeof signInSchema>;
