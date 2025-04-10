"use client";
import './globals.css'; // Aquí se importa los estilos globales
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
import { button, Button, Card, CardFooter, Tooltip } from "@nextui-org/react";
import { HiChevronRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { ShareholderCard } from "@/components/footer/ShareholderCard";
import Image from "next/image";
import { Image as NextImage } from "@nextui-org/react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { CardServices } from '@/components/cards/CardServices';
import { NoticeSection } from '@/components/littleComponets/NoticeSection';
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { CorporateBrands } from '@/components/littleComponets/CorporateBrands';
import { TestimoniosSection } from '@/components/littleComponets/TestimoniosSection';
import { AnunceSection } from '@/components/littleComponets/AnunceSection';

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300){
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {/* Sección de portada con fade-in y logo de la cooperativa */}
      <div>
        <FadeInEffect
          className="w-full h-[90vh] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-primary/80 gap-5"
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
        <div className="bg-[#25466a] text-white font-serif p-2">
          <Marquee>
            {" "}
            Gracias por la confianza a todas las personas por ser parte como
            accionistas de esta Institución Financiera y además, a todos los
            ciudadanas(os) que están interesadas a sumarse contáctarse por
            medios oficiales. 
          </Marquee>
        </div>
      </div>
      {/* Sección de Nuestros Servicios*/}
      <main className="space-y-10 md:space-y-10 w-[90%] mx-auto mt-5">
        <section className="text-center py-12 border-t-8 border-b-8 border-[#25466a]">
          <h3 className='text-3xl font-semibold text-[#25466a]'>Nuestros Servicios</h3>
          {/* Sección de botones */}
          <article className="mt-10"> {}
            <CardServices /> 
          </article>
        </section>
        <section> {/*Seccion de eventos a realizar*/}
          <AnunceSection />
        </section>
        <section> {/*Seccion de Testimonios*/}
          <TestimoniosSection />
        </section>
        <section> {/* Seccion de Ubicación */}
          {/*<CorporateSearch />*/}
        </section>
        <section> {/*Sección Marcas Corporativas*/}
          <CorporateBrands />
        </section>
    </main>
      {/* Botón para subir al inicio de la página */}
      {showButton && (
        <button 
          className="fixed bottom-5 right-5 bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-dark z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp size={24} />
        </button>
      )}
    </>
  );
}
