"use client";

import { motion } from "framer-motion";
import { FaBullseye, FaBuilding, FaChartBar, FaLeaf } from "react-icons/fa";

export default function Objetivo() {
  return (
    <div className="bg-[#0f2537] min-h-screen text-white p-8 relative overflow-hidden flex flex-col items-center">
      {/* Fondo con patrones geométricos */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f2537] to-[#102030] opacity-90"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/background-objetivo.png')] bg-cover bg-center opacity-50"></div>

      {/* Elementos decorativos flotando */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#0f2537] rounded-full opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ffc107] rounded-full opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Título de la sección */}
        <motion.h1
          className="text-6xl font-extrabold mb-12 uppercase tracking-widest text-[#ffc107] drop-shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Nuestro Objetivo
        </motion.h1>

        {/* Contenedor principal del objetivo */}
        <motion.div
          className="bg-[#1e3855] p-12 rounded-3xl shadow-2xl mb-20 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-semibold text-[#ffca2c] flex items-center justify-center gap-2 mb-8">
            <FaBullseye /> Objetivo Principal
          </h2>
          <p className="text-lg leading-relaxed text-white mb-8">
            El Banco ANEUPI tiene como objetivo transformar la experiencia
            financiera en Ecuador, ofreciendo soluciones innovadoras que
            impulsen el crecimiento económico de nuestros socios. Queremos ser
            líderes en la creación de productos financieros que se adapten a las
            necesidades específicas de cada socio, asegurando su éxito y
            bienestar económico.
          </p>

          {/* Citas inspiradoras */}
          <div className="mt-6 p-8 bg-[#102030] text-white italic rounded-lg shadow-xl transform hover:scale-105 transition-transform">
            <p className="text-2xl">
              “El éxito no es solo tener dinero, sino tener el control total
              sobre nuestras decisiones financieras.”
            </p>
          </div>
        </motion.div>

        {/* Sección de Resultados y Metas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Metas visualizadas con gráficos */}
          <div className="text-center bg-[#1e3855] p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform">
            <h3 className="text-3xl font-semibold text-[#ffca2c] mb-6">
              Crecimiento Financiero
            </h3>
            <motion.div
              className="h-2 bg-[#ffc107] rounded-lg"
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 2 }}
            ></motion.div>
            <p className="mt-4 text-lg text-white">
              Aspiramos a un crecimiento del 85% en nuestra base de socios para
              el año 2025.
            </p>
          </div>

          {/* Gráfico de metas de impacto */}
          <div className="text-center bg-[#1e3855] p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform">
            <h3 className="text-3xl font-semibold text-[#ffca2c] mb-6">
              Impacto Social
            </h3>
            <motion.div
              className="h-2 bg-[#ffca2c] rounded-lg"
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              transition={{ duration: 2 }}
            ></motion.div>
            <p className="mt-4 text-lg text-white">
              Buscamos impactar positivamente a más de 500 comunidades rurales
              en los próximos 3 años.
            </p>
          </div>

          {/* Impacto en sostenibilidad */}
          <div className="text-center bg-[#1e3855] p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform">
            <h3 className="text-3xl font-semibold text-[#ffca2c] mb-6">
              Sostenibilidad
            </h3>
            <motion.div
              className="h-2 bg-[#ffc107] rounded-lg"
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 2 }}
            ></motion.div>
            <p className="mt-4 text-lg text-white">
              Implementaremos prácticas sostenibles en todas nuestras
              operaciones para reducir nuestra huella de carbono en un 75% para
              2030.
            </p>
          </div>
        </motion.div>

        {/* Sección de visualización de íconos clave */}
        <motion.div
          className="flex justify-center gap-16 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="flex flex-col items-center p-6 bg-[#1e3855] rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
            <FaBuilding className="text-6xl text-[#ffca2c]" />
            <p className="mt-4 text-xl text-white">Infraestructura</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-[#1e3855] rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
            <FaChartBar className="text-6xl text-[#ffca2c]" />
            <p className="mt-4 text-xl text-white">Innovación</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-[#1e3855] rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
            <FaLeaf className="text-6xl text-[#ffca2c]" />
            <p className="mt-4 text-xl text-white">Sostenibilidad</p>
          </div>
        </motion.div>

        {/* Fondo decorativo con formas geométricas */}
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#ffc107] rounded-full opacity-25 transform rotate-45"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#102030] rounded-full opacity-20 transform rotate-45"></div>
      </div>
    </div>
  );
}
