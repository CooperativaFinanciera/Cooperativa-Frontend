import { z } from "zod";

export function processZodError(error: any) {
  if (!error || !error.errors) return {};

  return error.errors.reduce((acc: any, err: any) => {
    if (err.path && err.path.length > 0) {
      acc[err.path[0]] = err.message;
    }
    return acc;
  }, {});
}

export const userSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  phone: z.string().min(10),
});

export const loginSchema = z.object({
  id: z.coerce.number({
    required_error: "El número de cédula es requerido",
    invalid_type_error: "El número de cédula es inválido",
  }),
  password: z.string({
    required_error: "La contraseña es requerida",
    invalid_type_error: "La contraseña es inválida",
  }).min(8,{
    message: "La contraseña debe tener al menos 8 caracteres",
  }),
});