"use client";
import { FunctionCard } from "@/components/cards/FunctionCard";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HomePageWords, mainFunctions } from "@/lib/constants";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
     
      <main className="space-y-10 ">
        <AuroraBackground>
          <TypewriterEffectSmooth words={HomePageWords} />

          <FadeInEffect>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
              Únete a nosotros como accionista y transforma tu mentalidad hacia el
              éxito.
            </div>
            <Button
              as={Link}
              href="/auth/signIn"
              className="bg-black dark:bg-white text-white dark:text-black"
              radius="full"
            >
              Inicia ahora
            </Button>
          </FadeInEffect>
        </AuroraBackground>
        <FadeInEffect className="grid grid-cols-2 gap-10 ">
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
      </main>
    </>
  );
}
