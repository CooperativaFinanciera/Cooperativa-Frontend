import { z } from "zod";

export const formularioSchema = z.object({
 cedula: z.string().regex(/^\d{10}$/, "Debe contener exactamente 10 dígitos"),
 codigoDactilar: z.string().regex( /^[A-Z]\d{4}[A-Z]\d{4}$/, "Campo obligatorio. Formato inválido. Ej: V1234V5678."),
 numeroAccionista: z.string().regex(/^\d{4}$/, "Debe contener exactamente 4 dígitos")
});
