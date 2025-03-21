"use client";
import './globals.css'; // Aquí importas los estilos globales
import { FunctionCard } from "@/components/cards/FunctionCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import {
  cooperativaWords,
  corporativeBrands,
  mainFunctions,
  services,
} from "@/lib/constants";
import { Button, Card, CardFooter, Tooltip } from "@nextui-org/react";
import { HiChevronRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { ShareholderCard } from "@/components/footer/ShareholderCard";
import Image from "next/image";
import { Image as NextImage } from "@nextui-org/react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { ReviewCard } from "@/components/cards/ReviewCard";

export default function Home() {
  return (
    <>
      {/* Sección de portada con fade-in y logo de la cooperativa */}
      <div>
        <FadeInEffect
          className="relative h-[78vh] w-full flex flex-col items-center justify-center gap-5"
          style={{
            backgroundImage: "url('/portada.webp')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "scroll",
          }}
        >

          {/* Sección de funciones principales */}
          <article className="grid md:grid-cols-4 gap-5 absolute bottom-0 w-full">
            {mainFunctions.map(({ title, description, href, icon }, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                key={index}
              >
                <Tooltip
                  placement="bottom"
                  classNames={{
                    content: "bg-primary text-white w-52",
                  }}
                  delay={1000}
                  content={description}
                >
                  <Button
                    size="lg"
                    fullWidth
                    color="warning"
                    startContent={icon}
                    as={Link}
                    href={href}
                    className="text-lg"
                  >
                    {title}
                  </Button>
                </Tooltip>
              </motion.div>
            ))}
          </article>
        </FadeInEffect>
        {/* Marquee para mostrar mensaje de confianza */}
        <div className="bg-[#25466a] text-white p-2">
          <Marquee>
            Gracias por la confianza a todas las personas por ser parte como
            accionistas de esta Institución Financiera y además, a todos los
            ciudadanas(os) que están interesadas a sumarse contáctarse por
            medios oficiales.
          </Marquee>
        </div>
      </div>

      {/* Sección de "Nuestros Servicios" */}
      <main className="space-y-10 md:space-y-10 w-[90%] mx-auto mt-5">
        <section className="text-center py-6 border-t-8 border-b-8 border-[#25466a]">
          <h3 className="text-3xl font-semibold text-[#25466a]">Nuestros Servicios</h3>

          {/* Sección de botones*/}
          <section className="mt-10">
            <div className="flex justify-center items-center gap-8 w-full">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center bg-[#25466a] text-white p-6 rounded-2xl shadow-lg w-64 h-72 transform hover:scale-105 transition-transform"
                  initial={{ y: 0 }}
                  animate={{ y: [-60, 0, -60] }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
                  <div
                    className="w-full h-32 bg-cover rounded-lg mb-4"
                    style={{ backgroundImage: "url('/homeResources/personasFinancieras.jpg')" }}
                  ></div>
                  <Button
                    size="lg"
                    as={Link}
                    href={service.href}
                    color="default"
                    className="w-full border-2 border-[#25466a] bg-transparent hover:bg-[#25466a] hover:text-white text-[#25466a]"
                  >
                    <span className="bg-white text-[#25466a] py-1 px-2 rounded-lg">
                      Ver más
                    </span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </section>
        </section>

        <section className="flex items-center justify-between py-10 px-5 bg-[#25466a] text-white">
          {/* Contenido de texto a la izquierda */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Conoce sobre Nosotros</h2>
            <p className="text-lg">
              El Proyecto de la Cooperativa Financiera ANEUPI se origina en la ciudad de Cuenca,
              en junio de 2018, con la iniciativa de estudiantes universitarios con discapacidad
              de varias universidades. Actualmente, funciona como una Caja de Ahorro y Crédito.
              <br /><br />
              Su actividad principal es la intermediación financiera entre los socios con
              capacidad de ahorro y aquellos que necesitan créditos a nivel nacional.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              alt="Conoce sobre Nosotros"
              src="/homeResources/personasFinancieras.jpg"
              width={500}
              height={350}
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Sección de "Nuestras Marcas Corporativas" */}
        <section className="border-primary border-3 rounded-2xl py-5">
          <h2 className="text-center text-xl md:text-3xl font-bold text-primary dark:text-neutral-200 relative">
            NUESTRAS MARCAS CORPORATIVAS
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto gap-10">
            {corporativeBrands.map((brand, index) => (
              <Link key={index} href={brand.href} target="_blank">
                <Image
                  className="hover:scale-125 transition-transform"
                  alt={brand.title}
                  src={brand.src}
                  width={150}
                  height={150}
                />
              </Link>
            ))}
          </div>
        </section>

        {/* Sección de reseñas */}
        <ReviewCard />
      </main>
    </>
  );
}