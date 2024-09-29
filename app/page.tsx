"use client";
import { FunctionCard } from "@/components/cards/FunctionCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { AppleCardsCarouselDemo } from "@/components/home/brandsCards";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HomePageWords, mainFunctions, services } from "@/lib/constants";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="space-y-10 md:space-y-20">
        <AuroraBackground>
          <TypewriterEffectSmooth words={HomePageWords} />

          <FadeInEffect>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
              Únete a nosotros como accionista y transforma tu mentalidad hacia
              el éxito.
            </div>
            <Button
              as={Link}
              href="/shareholders/join"
              className="bg-black dark:bg-white text-white dark:text-black"
              radius="full"
            >
              Únete ahora
            </Button>
          </FadeInEffect>
        </AuroraBackground>
        <FadeInEffect className="grid md:grid-cols-4 gap-10 ">
          {mainFunctions.map(({ title, description, href, icon }, index) => (
            <FunctionCard
              icon={icon}
              title={title}
              description={description}
              href={href}
              key={index}
            />
          ))}
        </FadeInEffect>
        <AppleCardsCarouselDemo />
        <section className="space-y-10">
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-center">Servicios</h2>
          <article className="grid md:grid-cols-4 gap-5 ">
            {services.map(({ title, description, href, icon }, index) => (
              <ServiceCard
                key={index}
                title={title}
                description={description}
                href={href}
                icon={icon}
              />
            ))}
          </article>
        </section>
      </main>
    </>
  );
}
