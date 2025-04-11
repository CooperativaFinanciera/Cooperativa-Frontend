"use client";

import { motion } from "framer-motion";
import { FaLightbulb, FaHandshake, FaChartLine } from "react-icons/fa";

export default function MisionVision() {
  return (
    <div className="bg-[#1e3855] min-h-screen text-white p-12 flex items-center justify-center relative overflow-hidden">
      {/* Fondo con degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3855] via-[#162d4c] to-[#0f1e35] opacity-90"></div>
      <div className="absolute inset-0 bg-[url('/mision-vision-fondo.jpg')] bg-cover bg-center opacity-35"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-6xl font-extrabold text-[#fff] mb-12 uppercase tracking-wider drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Misión y Visión
        </motion.h1>

        {/* Contenedor para las dos secciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          {/* Misión */}
          <motion.div
            className="bg-[#1e3855] text-white p-12 rounded-3xl shadow-2xl relative transform hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-semibold mb-6 flex items-center justify-center gap-3">
              <FaLightbulb className="text-yellow-500" /> Misión
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              En Banco ANEUPI nos dedicamos a proporcionar servicios financieros
              de alta calidad, enfocados en satisfacer las necesidades de
              nuestros socios mediante productos innovadores, confiables y
              accesibles, que nos permiten fortalecer el bienestar financiero de
              nuestra comunidad.
            </p>
            <motion.div
              className="absolute bottom-4 left-0 right-0 bg-gradient-to-r from-[#162d4c] to-[#0f1e35] p-4 rounded-full shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="text-xl italic text-white text-center">
                “La excelencia no es un acto, es un hábito.”
              </p>
            </motion.div>

            {/* Gráfico de Misión */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/crecimiento.jpg"
                alt="Gráfico de crecimiento"
                className="w-full max-w-xl mx-auto rounded-lg"
              />
            </motion.div>
          </motion.div>

          {/* Visión */}
          <motion.div
            className="bg-[#1e3855] text-white p-12 rounded-3xl shadow-2xl relative transform hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-semibold mb-6 flex items-center justify-center gap-3">
              <FaHandshake className="text-yellow-500" /> Visión
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Ser reconocidos como la cooperativa financiera más confiable y
              comprometida con la excelencia, tanto a nivel nacional como
              internacional. Buscamos impulsar el crecimiento sostenible de
              nuestros socios mediante soluciones financieras innovadoras,
              responsables y éticas.
            </p>
            <motion.div
              className="absolute bottom-4 left-0 right-0 bg-gradient-to-r from-[#162d4c] to-[#0f1e35] p-4 rounded-full shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="text-xl italic text-white text-center">
                “El verdadero liderazgo se mide por los resultados, no por las
                palabras.”
              </p>
            </motion.div>

            {/* Gráfico de Visión */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src="/mision-vision.jpg"
                alt="Gráfico de misión y visión"
                className="w-full max-w-xl mx-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Sección de Valores */}
        <motion.div
          className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="bg-[#3B5A6F] p-8 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-500">
            <FaChartLine className="text-6xl text-white mb-4" />
            <p className="text-3xl text-white font-semibold">Crecimiento</p>
          </div>
          <div className="bg-[#3B5A6F] p-8 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-500">
            <FaHandshake className="text-6xl text-white mb-4" />
            <p className="text-3xl text-white font-semibold">Confianza</p>
          </div>
          <div className="bg-[#3B5A6F] p-8 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-500">
            <FaLightbulb className="text-6xl text-white mb-4" />
            <p className="text-3xl text-white font-semibold">Innovación</p>
          </div>
        </motion.div>

        {/* Barra de Progreso */}
        <motion.div
          className="mt-16 h-2 bg-gradient-to-r from-[#1e3855] to-[#0f1e35] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ duration: 2 }}
        />
      </div>
    </div>
  );
}
