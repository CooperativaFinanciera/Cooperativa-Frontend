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
import { AnunceSection2 } from '@/components/littleComponets/AnunceSection copy';
import { BenefitsSection } from '@/components/littleComponets/Benefits';
import { NoticeSection } from '@/components/littleComponets/NoticeSection';
import { TestimoniosSection } from '@/components/littleComponets/TestimoniosSection';
import { Simulator } from '@/components/littleComponets/Simulator';
import { CorporateBrands } from '@/components/littleComponets/CorporateBrands';
import { ArrowUp } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from "react";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
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

        <section className="w-full text-center">
          <NoticeSection />
        </section>

        <section className="text-center">
          <TestimoniosSection />
        </section>

          <section className="text-center">
            <CorporateBrands />
          </section>

        {/* Sección de reseñas 
        <ReviewCard />*/}
      </main>

      {showButton && (
        <button
        className="fixed bottom-5 right-5 bg-orange-600 text-white p-3 rounded-full shadow-2xl hover:bg-primary-dark hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-dark z-50 transition-all duration-300 ease-in-out"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Volver al inicio"
      >
        <ArrowUp size={24} />
      </button>
      )}
    </>
  );
}
