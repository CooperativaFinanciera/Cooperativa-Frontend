"use client";
import { BrandButtons } from "@/components/buttons/BrandButtons";
import { FunctionCard } from "@/components/cards/FunctionCard";
import { Brands } from "@/components/home/brandsCards";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import {
  cooperativaWords,
  HomePageWords,
  mainFunctions,
} from "@/lib/constants";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <main className="space-y-10 md:space-y-10">
        <FadeInEffect
          className="relative h-[70vh] rounded-2xl flex flex-col items-center justify-center gap-5"
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
                  duration: .5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex items-center gap-2"
              >
                Postúlate
              <HiChevronRight />
              </motion.p>
            </Button>
          </FadeInEffect>
          {/* <BrandButtons className="absolute bottom-10 flex items-center justify-between  w-4/5 p-4" /> */}
        </FadeInEffect>
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
        {/* <Brands /> */}
      </main>
    </>
  );
}
