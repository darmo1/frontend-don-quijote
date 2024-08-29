import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(3, {
    message: "Nombre completo debe tener entre 3 y 20 caracteres",
  }).max(20),
  password: z.string().min(6, {
    message: "Contraseña debe tener minimo 6 caracteres",
  }).max(30),
  email: z.string().email({
    message: "Ingrese un email válido",
  }),
});

export type RegisterSchema = z.infer<typeof registerSchema>

export const signInSchema = z.object({
  email: z.string().email({
    message: "Correo inválido",
  }),
  password: z.string().min(8, {
    message: "Contraseña inválida",
  }),
});

export type SignInSchema = z.infer<typeof signInSchema>;

