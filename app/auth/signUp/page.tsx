"use client"
import { createUser } from "@/components/actions/createUser";
import { InputPasword } from "@/components/littleComponets/InputPasword";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { HiOutlineIdentification, HiOutlinePhone, HiOutlineUser } from "react-icons/hi";
import { MdMail } from "react-icons/md";

export default function Page() {

  

  return (
    <form action={createUser} className="grid grid-cols-2 gap-3 col-span-2">
      <fieldset>
        <Input
          startContent={
            <HiOutlineIdentification className="text-default-500" />
          }
          label="Cédula"
          name="id"
          placeholder="Escribe su cédula aquí"
          labelPlacement="outside"
        />
      </fieldset>
      <fieldset>
        <Input
          startContent={<HiOutlineUser className="text-default-500" />}
          label="Nombre"
          name="name"
          placeholder="Escribe su nombre aquí"
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
          startContent={<HiOutlinePhone className="text-default-500" />}
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

     
      </fieldset>

      <div className="col-span-2">
      <Button  fullWidth type="submit" color="primary">
        Registrarse
      </Button>
      <p className="text-xs">
        ¿Ya tienes una cuenta?{" "}
        <Link className="text-primary" href="/auth/signIn">
          Inicia sesión
        </Link>
      </p>
      </div>
    </form>
  );
}
