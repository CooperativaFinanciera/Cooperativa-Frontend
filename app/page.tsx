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
      <div>
        <FadeInEffect
          className="relative h-[78vh] w-full flex flex-col items-center justify-center gap-5"
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
        <div className="bg-[#25466a] text-white p-2">
          <Marquee>
            {" "}
            Gracias por la confianza a todas las personas por ser parte como
            accionistas de esta Institución Financiera y además, a todos los
            ciudadanas(os) que están interesadas a sumarse contáctarse por
            medios oficiales.
          </Marquee>
        </div>
      </div>
      <main className="space-y-10 md:space-y-10 w-[90%] mx-auto mt-5">
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
        </section>
        <section>
          <Card
            isFooterBlurred
            className="border-3 border-primary w-[80%] mx-auto rounded-2xl"
          >
            <NextImage
              className=" object-cover object-top"
              removeWrapper
              as={Image}
              src="/homeResources/personasFinancieras.jpg"
              width={1280}
              height={720}
              alt=""
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden  absolute before:rounded-xl rounded-large bottom-0 w-1/2 mx-auto shadow-small z-10 py-4">
              <div className="space-y-3">
                <h3 className="text-black text-3xl font-semibold">
                  Nuestros Servicios
                </h3>

                <div className="flex flex-col gap-3">
                  {services.map((service, index) => (
                    <Button
                      size="lg"
                      as={Link}
                      href={service.href}
                      color="primary"
                      key={index}
                    >
                      {service.title}
                    </Button>
                  ))}
                </div>
              </div>
            </CardFooter>
          </Card>
        </section>
        {/* <section className="space-y-5">
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
      </section> */}
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
        <ReviewCard/>
      </main>
    </>
  );
}
