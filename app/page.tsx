"use client";
import { FunctionCard } from "@/components/cards/FunctionCard";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HomePageWords, mainFunctions } from "@/lib/constants";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="space-y-10">
        <AuroraBackground>
          <TypewriterEffectSmooth words={HomePageWords} />

          <FadeInEffect>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              Únete a nuestra cooperativa y transforma tu mentalidad hacia el
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
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="grid grid-cols-2 gap-10 "
        >
          {mainFunctions.map(({ title, description, href, icon }, index) => (
            <FunctionCard
              icon={icon}
              title={title}
              description={description}
              href={href}
              key={index}
            />
          ))}
        </motion.div>
      </main>
    </>
  );
}
