"use client";
import { CheckMessage } from "@/components/littleComponets/CheckMessage";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { HiChevronRight } from "react-icons/hi2";
import accionistasImg from "@/app/assets/image/accionistas.jpg";
import { InfoCard } from "@/components/cards/InfoCard";

import loans from "@/app/assets/image/loans.jpg";
import solidaridad from "@/app/assets/image/solidaridad.jpg";
import educacion from "@/app/assets/image/education.png";
import equidad from "@/app/assets/image/equidad.jpg";
import AccioRegisterForm from "@/components/forms/opinionForm";

import TopicCard from "@/components/cards/TopicCard";
import Link from "next/link";


const cardsData = [
  {
    title: "Préstamos y Cuentas de Ahorro",
    description: "Ofreceremos préstamos y cuentas de ahorros con condiciones favorables para sus Accionistas, ya que les permitirá acceder a tasas más cómodas.",
    imageSrc: loans,
  },
  {
    title: "Solidaridad y Comunidad",
    description: "Fomentamos la cooperación y la solidaridad junto a los miembros que trabajan juntos para alcanzar objetivos comunes y fortalecer los beneficios de la comunidad.",
    imageSrc: solidaridad,
  },
  {
    title: "Programas Educativos",
    description: "Ofreceremos varios programas educativos y de formación para los futuros Accionistas con el fin de mejorar sus habilidades y capacidades individuales.",
    imageSrc: educacion,
  },
  {
    title: "Equidad de Género e Inclusión",
    description: "Esta institución financiera promoverá oportunidades iguales para Mujeres y Hombres en sus nuevos emprendimientos.",
    imageSrc: equidad,
  },
];
// Array de topics con referencia a las imágenes importadas
const topics = [
  {
    title: "Beneficios para Accionistas",
    description: "Accede a descuentos exclusivos en productos financieros, obtén asesoría personalizada y disfruta de beneficios únicos como Accionista.",
    image: loans,
    points: [
      "Descuentos exclusivos en productos financieros",
      "Acceso prioritario a nuevos productos y servicios",
      "Asesoría financiera personalizada",
    ]
  },
  {
    title: "Programa de Recompensas",
    description: "Acumula puntos con cada transacción, obtén bonos especiales por referencias y canjea puntos por atractivos premios y descuentos.",
    image: solidaridad,
    points: [
      "Acumula puntos por cada transacción realizada",
      "Canje futuro de puntos por premios y descuentos",
      "Bonos especiales por referir a nuevos clientes",
    ]
  },
  {
    title: "Ventajas Adicionales",
    description: "Accede a eventos exclusivos, charlas educativas y asesoría sobre seguridad y oportunidades financieras adaptadas a Accionistas.",
    image: educacion,
    points: [
      "Participación en eventos exclusivos",
      "Networking con otros accionistas",
      "Boletines informativos sobre oportunidades",
    ]
  },
];



export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full gap-16 py-8">
      {/* Hero Section - Full Width */}
      <div className="min-h-screen w-full rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${accionistasImg.src})`
            }}
          ></div>
        </div>

        <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center justify-items-center gap-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgba(37,70,106,1)] mb-4">
            ¿Deseas convertirte en Accionista?
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Conóce los beneficios sociales y económicos que puedes obtener con esta institución financiera de confianza.
          </p>
          <Link href="/shareholders/register">
            <Button
              className="bg-[#d3c5b5] text-[rgba(37,70,106,1)] self-start px-8 py-6"
              radius="sm"
              size="lg"
            >
              Postúlate
            </Button>

          </Link>

        </div>
      </div>

      {/* Beneficios Section modificada */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6 border border-[rgba(37,70,106,0.5)] rounded-xl p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white bg-[rgba(37,70,106,1)] p-3 rounded-lg text-center">
            Beneficios de ser Accionista
          </h2>

          <p className="text-gray-600 text-center">
            Disfruta de ventajas exclusivas al formar parte de nuestra comunidad financiera
          </p>

          <div className="space-y-6 mt-4 flex flex-col justify-items items-center">
            <CheckMessage>Préstamos y Cuentas de Ahorro con tasas preferenciales</CheckMessage>
            <CheckMessage>Comunidad solidaria con objetivos comunes</CheckMessage>
            <CheckMessage>Programas educativos y formación continua</CheckMessage>
            <CheckMessage>Igualdad de oportunidades para emprendedores</CheckMessage>
          </div>
        </div>

        {/* Card Carousel with Navigation (sin modificaciones) */}
        <div className="flex flex-col gap-4 max-w-lg mx-auto">
          <div className="shadow-lg rounded-xl overflow-hidden transition-transform duration-500">
            <InfoCard
              title={cardsData[currentIndex].title}
              description={cardsData[currentIndex].description}
              imageSrc={cardsData[currentIndex].imageSrc.src}
            />
          </div>

          {/* Card Navigation */}
          <div className="flex justify-center items-center gap-2 mt-2">
            {cardsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ver ${cardsData[index].title}`}
                className={`w-3 h-3 rounded-full transition-transform duration-300 ${currentIndex === index ? "bg-[rgba(37,70,106,1)] scale-125" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="w-full rounded-xl overflow-hidden relative">
        <div
          className="w-full h-64 md:h-72 bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${accionistasImg.src})`,
          }}
        >
          <div className="absolute inset-0 bg-[rgba(37,70,106,0.8)]"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Ya eres parte Accionista de nuestra Cooperativa?
            </h2>
            <Link href="/auth/signIn  ">
              <Button
                className="animate-pulse bg-white text-[rgba(37,70,106,1)] font-medium"
                radius="full"
                size="lg"
                endContent={<HiChevronRight />}
              >
                Iniciar Sesión
              </Button>

            </Link>
          </div>
        </div>
      </div>

      {/* Beneficios Section */}
      <div>
        <h2 className="text-2xl md:text-3xl text-[rgba(37,70,106,1)] font-semibold mt-6 justify-center text-center">
          Nuestro Programa de Beneficios
        </h2>
      </div>
      {/* Beneficios y Oportunidades - Con hover para mostrar puntos */}
      <section id="topics" className="grid grid-cols-1 md:grid-cols-3 gap-8 [&>div]:h-[250px]">
        {topics.map((topic, index) => (
          <TopicCard key={index} topic={topic} />
        ))}
      </section>
    </div>
  );
}