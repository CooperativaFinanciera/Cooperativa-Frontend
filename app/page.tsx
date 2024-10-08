"use client";
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
import { Button, Tooltip } from "@nextui-org/react";
import { HiChevronRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { ShareholderCard } from "@/components/footer/ShareholderCard";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
export default function Home() {
  return (
    <main className="space-y-10 md:space-y-10 w-[90%] mx-auto">
      <div>
        <FadeInEffect
          className="relative h-[70vh] rounded-t-2xl flex flex-col items-center justify-center gap-5"
          style={{
            backgroundImage: "url('/portada.webp')",
          }}
        >
          {/* <TypewriterEffectSmooth words={HomePageWords} /> */}
          <div className="bg-primary/80 w-1/2 flex justify-center rounded-2xl">
            <TypewriterEffectSmooth words={cooperativaWords} />
          </div>
          <FadeInEffect>
            <Button className="bg-white h-16 w-52 text-2xl  rounded-full flex items-center justify-center gap-2">
              <motion.p
                initial={{
                  scale: 0.9,
                }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex items-center gap-2 dark:text-black"
              >
                Postúlate
                <HiChevronRight />
              </motion.p>
            </Button>
          </FadeInEffect>
        </FadeInEffect>
        <div className="bg-[#25466a] text-white rounded-b-xl p-2">
          <Marquee>
            {" "}
            Gracias por la confianza a todas las personas por ser parte como
            accionistas de esta Institución Financiera y además, a todos los
            ciudadanas(os) que están interesadas a sumarse contáctarse por
            medios oficiales.
          </Marquee>
        </div>
      </div>
      {/* <FadeInEffect className="grid md:grid-cols-2 gap-10 ">
          {mainFunctions.map(({ title, description, href, icon }, index) => (
            <FunctionCard
              icon={icon}
              title={title}
              description={description}
              href={href}
              key={index}
            />
          ))}
        </FadeInEffect> */}
      <section className="space-y-10">
        {/* <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-center">
            Servicios
          </h2> */}
        <article className="grid md:grid-cols-4 gap-5 ">
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
                delay={500}
                content={description}
              >
                <Button
                  size="lg"
                  fullWidth
                  color="primary"
                  variant="flat"
                  startContent={icon}
                  as={Link}
                  href={href}
                >
                  {title}
                </Button>
              </Tooltip>
            </motion.div>
          ))}
        </article>
      </section>
      <section className="space-y-5">
        <h2 className="text-center text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
          Servicios
        </h2>
        <article className="grid md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              href={service.href}
              icon={service.icon}
              index={index}
            />
          ))}
        </article>
      </section>
      <section className="">
        <h2 className="text-center text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 relative top-14">
          Marcas coorporativas
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto">
          {corporativeBrands.map((brand, index) => (
            <Link key={index} href={brand.href} target="_blank">
              <Image
                className="hover:scale-125 transition-transform"
                alt={brand.title}
                src={brand.src}
                width={brand.title === "LECENI" ? 300 : 150}
                height={brand.title === "LECENI" ? 300 : 150}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
