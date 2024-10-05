"use client";
import { BrandButtons } from "@/components/buttons/BrandButtons";
import { FunctionCard } from "@/components/cards/FunctionCard";
import { Brands } from "@/components/home/brandsCards";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { cooperativaWords, HomePageWords, mainFunctions } from "@/lib/constants";
import { Button } from "@nextui-org/react";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="space-y-10 md:space-y-10">
        <AuroraBackground className="relative h-[70vh]">
         
          {/* <TypewriterEffectSmooth words={HomePageWords} /> */}
            <TypewriterEffectSmooth words={cooperativaWords} />

          <FadeInEffect>
           
            <Button
              as={Link}
              href="/auth/signIn"
              className="bg-black dark:bg-white text-white dark:text-black"
              radius="full"
            >
              Únete a Nosotros
            </Button>
          </FadeInEffect>
          {/* <BrandButtons className="absolute bottom-10 flex items-center justify-between  w-4/5 p-4" /> */}
        </AuroraBackground>
        <FadeInEffect className="grid md:grid-cols-2 gap-10 ">
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
