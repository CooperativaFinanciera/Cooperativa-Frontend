import { auth, signIn } from "@/auth";
import { InputPasword } from "@/components/littleComponets/InputPasword";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { MdMail } from "react-icons/md";

export default async function SignInPage() {

  const session = await auth();
  if(session){
    redirect("/");
  }
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold text-xl">
        Inicia en nuestra Cooperativa Ahora
      </h2>
      <p className="text-neutral-500">Ingresa tus credenciales</p>
     

      <form
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData);
        }}
        className="flex flex-col gap-3"
      >
        <fieldset>
          <Input
            startContent={<MdMail className="text-default-500" />}
            label="Cédula"
            name="id"
            placeholder="Escribe tu número de cédula"
            labelPlacement="outside"
          />
        </fieldset>
        <fieldset>
          <InputPasword name="password" />
          <Link href="#" className="text-primary text-xs">
            ¿Olvidaste tu contraseña?
          </Link>
        </fieldset>
        <Button type="submit" color="primary">
          Iniciar Sesión
        </Button>
        <p className="text-sm">
          ¿No tienes una cuenta?{" "}
          <Link className="text-primary" href="/auth/signUp">
            Creala aquí
          </Link>
        </p>
      </form>
    </section>
  );
}
