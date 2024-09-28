import { auth, signIn } from "@/auth";
import { InputPasword } from "@/components/littleComponets/InputPasword";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { MdMail } from "react-icons/md";

export default async function SignInPage() {

  const session = await auth();
  console.log(session)
  
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold text-xl">
        Inicia en nuestra Cooperativa Ahora
      </h2>
      <p className="text-neutral-500">Ingresa tus credenciales</p>
      <div>
        <Button
          fullWidth
          startContent={<FcGoogle size={25} />}
          color="default"
          variant="bordered"
        >
          Iniciar con Google
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <span className="bg-default-300 h-[.5px] w-full"></span>
        <p className="text-default-500">o</p>
        <span className="bg-default-300 h-[.5px] w-full"></span>
      </div>
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
            label="Email"
            name="email"
            placeholder="tucorreo@ejemplo.com"
            labelPlacement="outside"
          />
        </fieldset>
        <fieldset>
          <InputPasword name="password" />
          <Link href="#" className="text-primary-500 text-xs">
            ¿Olvidaste tu contraseña?
          </Link>
        </fieldset>
        <Button type="submit" color="primary">
          Iniciar Sesión
        </Button>
        <p className="text-sm">
          ¿No tienes una cuenta?{" "}
          <Link className="text-primary-500" href="#">
            Creala aquí
          </Link>
        </p>
      </form>
    </section>
  );
}
