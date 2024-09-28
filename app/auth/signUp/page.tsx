import { InputPasword } from "@/components/littleComponets/InputPasword";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi";
import { MdMail } from "react-icons/md";

export default function Page() {


  async function createUser(formData: FormData) {
    'use server'
   const values = Object.fromEntries(formData)
    const res = await fetch(`${process.env.PUBLIC_URL}/api/auth/signUp`, {
      method: 'POST',
      body:JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json() 
    console.log(data)
  }

  return (
    <form action={createUser} className="flex flex-col gap-3">
      <fieldset>
        <Input
          startContent={<HiOutlineUser className="text-default-500" />}
          label="Nombre"
          name="name"
          placeholder="Escribe tu nombre aquí"
          labelPlacement="outside"
        />
      </fieldset>
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
        <Input
          startContent={<HiOutlineUser className="text-default-500" />}
          label="Número de teléfono"
          name="phone"
          placeholder="0900000000"
          labelPlacement="outside"
        />
      </fieldset>
      <fieldset>
        <InputPasword name="password" />
       
     
      </fieldset>
      <fieldset>
        <InputPasword name="confirmPassword" />
       
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
  );
}
