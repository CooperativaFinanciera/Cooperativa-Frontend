"use client";

import {
  FaUsers,
  FaBriefcase,
  FaMoneyCheck,
  FaCogs,
  FaHeadset,
  FaLaptopCode,
  FaUserTie,
  FaBullhorn,
  FaSearchDollar,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Estructura() {
  return (
    <div className="bg-[#000000] min-h-screen text-white px-12 py-16 relative overflow-hidden flex flex-col items-center">
      {/* Fondo con degradado y textura */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] opacity-90"></div>
      <div className="absolute inset-0 bg-[url('/estructura-bg1.png')] bg-cover bg-center opacity-70"></div>

      <motion.h1
        className="text-6xl font-extrabold text-center mb-12 tracking-wide drop-shadow-lg relative z-10 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Estructura Organizativa del<br></br> Instituto Financiero ANEUPI
      </motion.h1>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {[
          {
            title: "Consejo de Administración",
            icon: FaUsers,
            description:
              "Encargado de establecer la visión estratégica y supervisar el cumplimiento de los objetivos corporativos.",
          },
          {
            title: "Gerencia General",
            icon: FaBriefcase,
            description:
              "Responsable de la dirección ejecutiva del banco, asegurando la ejecución de las estrategias establecidas.",
          },
          {
            title: "Dirección Financiera",
            icon: FaMoneyCheck,
            description:
              "Supervisa la planificación financiera, el control de costos y la administración de riesgos.",
          },
          {
            title: "Dirección de Operaciones",
            icon: FaCogs,
            description:
              "Coordina la ejecución de los procesos operativos del banco para garantizar la eficiencia y calidad del servicio.",
          },
          {
            title: "Departamento de Atención al Cliente",
            icon: FaHeadset,
            description:
              "Garantiza una experiencia de usuario óptima, resolviendo dudas y gestionando solicitudes de clientes.",
          },
          {
            title: "Departamento de Tecnología",
            icon: FaLaptopCode,
            description:
              "Desarrollo e implementación de soluciones digitales y seguridad informática.",
          },
          {
            title: "Departamento de Recursos Humanos",
            icon: FaUserTie,
            description:
              "Encargado de la gestión del talento, reclutamiento, capacitación y bienestar del personal.",
          },
          {
            title: "Departamento de Marketing",
            icon: FaBullhorn,
            description:
              "Diseño de estrategias publicitarias y gestión de la imagen corporativa del banco.",
          },
          {
            title: "Departamento de Auditoría Interna",
            icon: FaSearchDollar,
            description:
              "Supervisa el cumplimiento normativo y los procesos internos para garantizar la transparencia financiera.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`bg-white p-8 rounded-xl shadow-2xl text-black flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-3xl hover:bg-gray-100`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <item.icon className="text-6xl text-[#1e3855] mb-4 transition-transform duration-300 hover:rotate-12" />
            <h2 className="text-2xl font-semibold mb-2 tracking-wide text-[#1e3855]">
              {item.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
