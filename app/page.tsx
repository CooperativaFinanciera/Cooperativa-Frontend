"use client";
import './globals.css';
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
import { CardServices } from '@/components/littleComponets/CardServices';
import { AnunceSection } from '@/components/littleComponets/AnunceSection';
import { BenefitsSection } from '@/components/littleComponets/Benefits';

import { NoticeSection } from '@/components/littleComponets/NoticeSection';
import { TestimoniosSection } from '@/components/littleComponets/TestimoniosSection';
import { Simulator } from '@/components/littleComponets/Simulator';
import { CorporateBrands } from '@/components/littleComponets/CorporateBrands';

export default function Home() {
  return (
    <>
      {/* Sección de portada */}
      <div>
        <FadeInEffect
          className="relative h-[78vh] w-full flex flex-col items-center justify-center gap-5"
          style={{
            backgroundImage: "url('/portada.webp')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "scroll",
          }} children={undefined}        >
        </FadeInEffect>

        {/* Marquee para mostrar mensaje de confianza */}
        <div className="bg-[#25466a] text-white p-2">
          <Marquee>
            Inscríbete en el III Congreso Internacional a través de los canales oficiales
            de la Institución Financiera. ¡No dejes pasar esta oportunidad!
          </Marquee>
        </div>
      </div>

      {/* Sección de Nuestros Servicios */}
      <main className="space-y-10 md:space-y-10 w-[90%] mx-auto mt-5">
        
          <section className="w-full text-center py-6 border-t-3 border-b-0 border-[#25466a]">
            <CardServices />
          </section>

          <section className="w-full text-center">
            <AnunceSection />
          </section>

     
           {/*<section className="w-full text-center py-6 border-t-3 border-b-0 border-[#25466a]">
            <BenefitsSection />
          </section>*/}

        {/* Sección de Noticias" */}
          <section className="w-full max-w-7xl text-center">
            
              <NoticeSection />
           
          </section>

 {/*<div className="mt-6 flex justify-center">
          <section className="text-center py-6 border-t-3 border-b-0 border-[#25466a]"
          style={{
                    marginTop: '-10px',
                  }}>
            <TestimoniosSection />
          </section>
        </div>*/}

        <div className="mt-6 flex justify-center">
          <section className="text-center py-6 border-t-2 border-b-8 border-[#25466a]">
            <CorporateBrands />
          </section>
        </div>

        {/* <section className="mt-10">
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
        </section> */}

        {/* Sección de reseñas */}
        <ReviewCard />
      </main>
    </>
  );
}
