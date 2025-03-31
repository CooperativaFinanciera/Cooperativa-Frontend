"use client"
import { HiArrowUpCircle } from "react-icons/hi2";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import "@/app/globals.css";
import { useState } from "react";
import TopicCard from "@/components/cards/TopicCard";	

// Importación de imágenes
import financieraImg from "@/app/assets/image/financieraBg.jpg";
import inversionImg from "@/app/assets/image/shareholders/inversion.jpg";
import transparenciaImg from "@/app/assets/image/shareholders/transparencia.jpg";
import riesgosImg from "@/app/assets/image/shareholders/riesgo.jpg";

// Array de topics con referencia a las imágenes importadas
const topics = [
  {
    title: "Beneficios de la inversión",
    description: "Asesoría personalizada sobre conceptos como acciones, bonos, fondos de inversión y evaluación de riesgos al invertir.",
    image: inversionImg,
    points: [
      "Introducción a conceptos como acciones, bonos y fondos de inversión.",
      "Evaluación de riesgos y beneficios al invertir.",
      "Plazos establecidos.",
      "Conocimiento de tasas de impuesto generadas.",
      "Charlas sobre cómo hacer una correcta inversión y beneficios que puedes obtener en ella."
    ]
  },
  {
    title: "Transparencia y Reportes Financieros",
    description: "Reportes financieros transparentes, servicios exclusivos e informes de cambios en el mercado para tomar decisiones informadas.",
    image: transparenciaImg,
    points: [
      "Reportes del manejo financiero para nuestros Accionistas.",
      "Transparencia enfocada en los servicios que adquieran nuestros Accionistas.",
      "Informes de cambios contables en el mercado Nacional como Internacional.",
      "Propuestas de inversiones factibles.",
      "Manejo de la información 100% segura."
    ]
  },
  {
    title: "Riesgo y oportunidades",
    description: "Conoce sobre riesgos en inversiones, seguridad financiera y oportunidades en mercados nacionales e internacionales.",
    image: riesgosImg,
    points: [
      "Introducción para conocer riesgos en línea y presenciales.",
      "Temas de seguridad basados en la actualidad.",
      "Un correcto uso de las inversiones y adquisición de créditos.",
      "Conocimiento de inversión y oportunidades en el mercado laboral.",
      "Oportunidades en el mercado Internacional para futuras inversiones."
    ]
  },
  {
    title: "Eventos y Webinars",
    description: "Infórmate sobre las nuevas tendencias en inversiones, charlas de expertos y eventos exclusivos para Accionistas.",
    image: riesgosImg,
    points: [
      "Charlas Virtuales o Presenciales de conocimiento de Servicios de la Cooperativa.",
      "Webinars de fomentación de buenas prácticas de Inversión.",
      "Charlas de como obtener Créditos y manejo de dinero.",
      "Prevención de riesgos al momento de pagar algún servicio.",
      "Prevención y Seguridad al momento de realizar Inversiones en proyectos Financieros."
    ]
  }
];

const FinancialEducationForShareholders: React.FC = () => {
  return (
    <>
      <main className="space-y-10 md:space-y-20 px-6 md:px-16 lg:px-24">
        {/* Hero Section - Usando la imagen importada */}
        <section className="relative h-[500px] rounded-2xl overflow-hidden">
          {/* Background Image with Gradient - Usando la imagen importada */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%), url(${financieraImg.src})`
            }}
          />

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="w-full md:w-1/2 p-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Educación Financiera para nuestros futuros Accionistas
              </h1>

            </div>
          </div>
        </section>

        <div>
          <h2 className="text-2xl md:text-3xl text-[rgba(37,70,106,1)] font-semibold mt-6 justify-center text-center">
            Pilares y Beneficios de Nuestro Programa Financiero
          </h2>
        </div>
        {/* Beneficios y Oportunidades - Con hover para mostrar puntos */}
        <section id="topics" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <TopicCard key={index} topic={topic} />
          ))}
        </section>

      </main>
    </>
  );
};



export default FinancialEducationForShareholders;