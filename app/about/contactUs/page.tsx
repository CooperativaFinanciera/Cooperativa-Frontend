"use client";

import Image from "next/image";
import { useState } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Card, CardFooter, Button, Input, Textarea } from "@nextui-org/react";
import { Form } from "@heroui/form";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  HiMiniDevicePhoneMobile,
  HiMiniHome,
  HiOutlineGlobeAlt,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { Philosopher } from "next/font/google";
import { p } from "framer-motion/client";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let newErrors = {
      name: "",
      lastName: "",
      email: "",
      message: "",
      phone: "",
    };
    let hasErrors = false;

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
      hasErrors = true;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "El Apellido es obligatorio";
      hasErrors = true;
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
      hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Ingresa un email válido";
      hasErrors = true;
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje no puede estar vacío";
      hasErrors = true;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono no puede estar vacío";
      hasErrors = true;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "El teléfono debe tener exactamente 10 dígitos";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setErrors({ name: "", lastName: "", email: "", message: "", phone: "" });
    setSubmitted(true);
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center    px-12 text-[#25466a]">
      <div className="w-full border-2 border-gray-300 py-1">
        {/* Autoridades */}
        <div className="grid grid-cols-4 h-64 border-b-2 border-gray-300">
          <div className="flex items-center justify-center border-r-2 border-gray-300">
            <h1 className="text-3xl font-bold text-center">
              Autoridades Financieras
            </h1>
          </div>
          <div className="flex flex-col justify-between p-4 border-r-2 border-gray-300">
            <p>“Testimonio sobre tus servicios.”</p>
            <h2 className="font-bold text-lg">Correo</h2>
            <h1 className="font-bold text-xl">Presidente</h1>
          </div>
          <div className="flex flex-col justify-between p-4 border-r-2 border-gray-300">
            <p>“Testimonio sobre tus servicios.”</p>
            <h2 className="font-bold text-lg">Correo</h2>
            <h1 className="font-bold text-xl">Gerente</h1>
          </div>
          <div className="flex flex-col justify-between p-4">
            <p>“Testimonio sobre tus servicios.”</p>
            <h2 className="font-bold text-lg">Correo</h2>
            <h1 className="font-bold text-xl">Gerente</h1>
          </div>
        </div>
      </div>

      {/* Bordes */}
      <div className="w-full border-x-2 border-b-2 border-gray-300 py-1">
        {/* Contactanos */}
        <div className="grid grid-cols-2 h-80 border-b-2 border-gray-300">
          <div className="relative w-full h-full flex items-center justify-center border-r-2 border-gray-300">
            <Image
              src="/contact.jpg"
              alt="contactanos"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold">Contáctanos</h1>
          </div>
        </div>

        {/* Cuadro contáctanos */}
        <div className="grid grid-cols-4 h-48">
          <div className="border-r-2 border-gray-300 flex items-center justify-center"></div>
          <div className="border-r-2 border-gray-300 flex flex-col justify-between p-4"></div>
          <div className="border-r-2 border-gray-300 flex flex-col justify-between p-4"></div>
          <div className="flex flex-col justify-between p-4"></div>
        </div>
      </div>

      {/* Formulario*/}
      <div className="grid grid-cols-3 gap-6 items-center py-4">
        {/* Lado izquierdo con la imagen y redes sociales */}
        <div className="flex flex-col items-center w-full h-[400px] py-8">
          {/* Título centrado arriba */}
          <h1 className="text-3xl font-bold mb-6">Contáctanos</h1>

          {/* Sección de información de contacto */}
          <section className="flex flex-col items-start gap-4">
            <div className="flex flex-row items-center gap-2">
              <HiMiniHome className="text-black text-4xl" />
              <a
                href="https://maps.app.goo.gl/cKKq5SPXst89PBqz7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm  hover:underline"
              >
                Av. Enrique Arizaga Toral &, Cuenca
              </a>
            </div>

            <div className="flex flex-row items-center gap-2">
              <HiOutlineEnvelope className="text-black text-4xl" />
              <a
                href="mailto:cooperativafinanciera.aneupi@gmail.com"
                className="text-sm  hover:underline"
              >
                cooperativafinanciera.aneupi@gmail.com
              </a>
            </div>

            <div className="flex flex-row items-center gap-2">
              <HiMiniDevicePhoneMobile className="text-black text-4xl" />
              <a href="tel:+593983341084" className="text-sm  hover:underline">
                +593 983341084
              </a>
            </div>

            <div className="flex flex-row items-center gap-2">
              <HiOutlineGlobeAlt className="text-black text-4xl" />
              <a
                href="https://aneupi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm  hover:underline"
              >
                https://aneupi.com/
              </a>
            </div>
          </section>
        </div>

        {/* Lado central con el formulario */}
        <div className="flex flex-col px-8">
          <h2 className="text-xl font-semibold mb-4">
            ¿Tienes preguntas o necesitas asistencia?
          </h2>
          <Form className="w-full max-w-md space-y-4" onSubmit={onSubmit}>
            <Input
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              isInvalid={!!errors.name}
              errorMessage={errors.name}
              required
            />

            <Input
              label="Apellido"
              name="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              isInvalid={!!errors.lastName}
              errorMessage={errors.lastName}
              required
            />

            <Input
              label="Teléfono"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              isInvalid={!!errors.phone}
              errorMessage={errors.phone}
              required
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              isInvalid={!!errors.email}
              errorMessage={errors.email}
              required
            />

            <Textarea
              label="Mensaje"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              isInvalid={!!errors.message}
              errorMessage={errors.message}
              required
            />

            <Button
              type="submit"
              variant="bordered"
              className="bg-[#25466a] text-white border-[#25466a] hover:bg-white hover:text-[#25466a] transition-colors duration-300"
            >
              Enviar
            </Button>

            {submitted && (
              <p className="text-green-600 mt-2">Mensaje enviado con éxito</p>
            )}
          </Form>
        </div>

        {/* Tercera columna (espacio adicional para futuras mejoras) */}
        <div className="flex flex-col items-center justify-center borderh-[400px]">
          <h1 className="text-gray-400 text-center">Espacio adicional</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
