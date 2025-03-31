import { z } from "zod";

export const formularioSchema = z.object({
  estadoCivil: z.string().min(1, "Campo obligatorio"),
  nombres: z.string().min(1, "Campo obligatorio"),
  apellidos: z.string().min(1, "Campo obligatorio"),
  cedula: z.string().min(1, "Campo obligatorio"),
  tituloProfesional: z.string().min(1, "Campo obligatorio"),
  email: z.string().email("Campo Incorrecto"),
  direccion: z.string().min(1, "Campo obligatorio"),
  codigoPais: z.string().min(1, "Campo obligatorio"),
  numeroTelefono: z.string().min(1, "Campo obligatorio"),
  pais: z.string().min(1, "Campo obligatorio"),
  fechaNacimiento: z.string().min(1, "Campo obligatorio"),
  ciudad: z.string().min(1, "Campo obligatorio"),
  provincia: z.string().min(1, "Campo obligatorio"),
  canton: z.string().min(1, "Campo obligatorio"),

  discapacidad: z.string().optional(),
  tipodiscapacidad: z.string().optional(),
  descripcionDiscapacidad: z.string().optional(),
  descripcionProfesional: z.string().optional(),
  nombreUniversidad: z.string().optional(),
});
