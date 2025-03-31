import { formularioSchema } from "@/schemas/formularioConsultaAccio";

// Extrae solo los campos necesarios
const partialSchema = formularioSchema.pick({
  cedula: true,
  codigoDactilar: true,
});

export const validateCedulaYAccionista = (values: {
  cedula: string;
  codigoDactilar: string;
}) => {
  const result = partialSchema.safeParse(values);

  if (!result.success) {
    const formattedErrors: { [key: string]: string } = {};
    result.error.errors.forEach((error) => {
      if (error.path[0]) {
        formattedErrors[error.path[0]] = error.message;
      }
    });
    return { isValid: false, errors: formattedErrors };
  }

  return { isValid: true, errors: {} };
};
