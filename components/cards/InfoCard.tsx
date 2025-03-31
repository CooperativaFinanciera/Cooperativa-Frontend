"use client";

import Image from "next/image";

interface InfoCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const InfoCard = ({ title, description, imageSrc }: InfoCardProps) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">
      {/* Encabezado */}
      <div className="bg-[rgba(37,70,106,1)] text-white text-center py-3 font-bold text-lg">
        {title}
      </div>

      {/* Imagen */}
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-4 text-center text-gray-700">
        <p>{description}</p>
      </div>
    </div>
  );
};
