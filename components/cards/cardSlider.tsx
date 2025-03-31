// components/cards/CardSlide.tsx
"use client";
import { button, Button } from "@nextui-org/react";
import { HiChevronRight } from "react-icons/hi2";
import { FaHome, FaCar, FaPercentage } from "react-icons/fa";
import Link from "next/link";

interface CardSlideProps {
  title: string;
  description: string;
  imageSrc: any;
  buttonText: string;
  buttonLink: string;
}

export default function CardSlide({
  title,
  description,
  imageSrc,
  buttonText,
  buttonLink,
}: CardSlideProps) {
  return (
    <div className="w-full max-w-6xl h-[600px] flex flex-col md:flex-row rounded-xl overflow-hidden shadow-2xl bg-white">
      {/* Imagen Izquierda */}
      <div className="w-full md:w-1/2 h-64 md:h-full relative">
        <img
          src={imageSrc.src}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Contenido Derecha */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[rgba(37,70,106,1)]">
          {title}
        </h2>
        <p className="text-gray-600 text-lg">{description}</p>

        {/* Íconos + texto (sólo para el primer slide, pero puedes condicionar por title si querés) */}
        {title === "Paquete Financiero" && (
          <ul className="space-y-4 mt-4">
            <li className="flex items-center gap-3 text-gray-700">
              <FaHome className="text-2xl text-[rgba(37,70,106,1)]" />
              <span><strong>Bien Inmueble (Casa - Departamento - etc.):</strong> $120,000 dólares</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <FaCar className="text-2xl text-[rgba(37,70,106,1)]" />
              <span><strong>Auto 0 km:</strong> $30,000 dólares</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <FaPercentage className="text-2xl text-[rgba(37,70,106,1)]" />
              <span><strong>Tasas preferenciales</strong> en productos financieros</span>
            </li>
          </ul>
        )}

        {buttonText && (
          <Link href={buttonLink}>
            <Button
              className="bg-[#d3c5b5] text-white px-8 py-6 font-semibold w-fit mt-4"
              radius="sm"
              size="lg"
              style={{backgroundColor:"rgba(37,70,106,1)"}}
            >
              {buttonText}
              <HiChevronRight className="ml-2 text-xl" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
