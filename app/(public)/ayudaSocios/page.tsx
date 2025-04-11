"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaHandshake,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaCreditCard,
  FaUserShield,
  FaRegQuestionCircle,
  FaComments,
} from "react-icons/fa";

export default function AyudaSocios() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [loanAmount, setLoanAmount] = useState(5000);

  const beneficios = [
    {
      icon: FaUsers,
      color: "green-300",
      title: "Beneficios en Eventos",
      description:
        "Acceso exclusivo a eventos y actividades organizadas para socios.",
    },
    {
      icon: FaCreditCard,
      color: "pink-300",
      title: "Tarjetas Preferenciales",
      description: "Obtén tarjetas preferenciales con beneficios exclusivos.",
    },
    {
      icon: FaLightbulb,
      color: "yellow-300",
      title: "Asesoría Personalizada",
      description:
        "Accede a asesoría personalizada para gestionar tus finanzas de manera efectiva.",
    },
  ];

  return (
    <div className="overflow-hidden relative">
      {/* Chat Flotante */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.div
          className={`bg-[#1e3e6d] rounded-2xl shadow-2xl ${
            isChatOpen ? "w-96 h-96" : "w-20 h-20"
          }`}
          animate={{ scale: isChatOpen ? 1 : 1 }}
        >
          {!isChatOpen ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full h-full flex items-center justify-center"
              onClick={() => setIsChatOpen(true)}
            >
              <FaComments className="text-3xl text-[#fcbf49]" />
            </motion.button>
          ) : (
            <div className="p-4 h-full flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-white">Asistente Virtual</h3>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-[#fcbf49] hover:text-[#f8b130] text-xl"
                >
                  ×
                </button>
              </div>
              <div className="flex-1 bg-black/20 rounded-lg p-4 mb-4 overflow-y-auto">
                <div className="text-sm text-white opacity-75">
                  Conectando con el asistente...
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Sección Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-[#132437] to-[#0e1d2e] px-4 md:px-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-1xl md:text-7xl font-bold text-center mb-8 bg-gradient-to-r from-[#fcbf49] via-[#e9857d] to-[#9c6fe4] bg-clip-text text-transparent"
        >
          Ayuda para Socios de la
          <br />
          Instituación financiera ANEUPI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto text-center text-lg md:text-xl mb-8 text-white/80"
        >
          Conectamos contigo a través de una experiencia digital sin
          precedentes.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex justify-center"
        >
          <a
            href="#services"
            className="px-8 py-4 bg-[#fcbf49] text-black font-bold rounded-xl shadow-lg hover:bg-[#f8b130] transition-all duration-300 flex items-center gap-2"
          >
            <FaChartLine className="text-xl" />
            <span>Explorar Servicios</span>
          </a>
        </motion.div>
      </section>

      {/* Bienvenida */}
      <section className="py-5 bg-[#1a2a3a] relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-80 h-80 mx-auto bg-gradient-to-br from-[#28496e] to-[#1d3557] rounded-full flex flex-col justify-center items-center shadow-2xl text-center px-6 mb-2 transform hover:scale-105 transition-all group"
        >
          <div className="absolute inset-0 rounded-full border-2 border-[#fcbf49]/20 group-hover:border-[#fcbf49]/40 transition-all" />
          <FaHandshake className="text-5xl mb-4 text-[#fcbf49] animate-pulse" />
          <h2 className="text-2xl font-bold mb-2 text-white">
            Estamos contigo, socio
          </h2>
          <p className="text-sm text-white/80">
            Todo lo que necesitas está aquí mismo.
          </p>
        </motion.div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-gradient-to-r from-[#132437] to-[#0e1d2e] px-4 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#fcbf49] to-[#e9857d]"
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: FaChartLine,
              color: "cyan-300",
              title: "Simula tu Crédito",
              description:
                "Descubre cuánto puedes solicitar y en qué condiciones.",
            },
            {
              icon: FaCreditCard,
              color: "pink-300",
              title: "Bloqueo de Tarjetas",
              description: "Procede al bloqueo inmediato.",
            },
            {
              icon: FaUserShield,
              color: "yellow-300",
              title: "Seguridad de Claves",
              description: "Administra o recupera tus claves de forma segura.",
            },
            {
              icon: FaPhone,
              color: "teal-300",
              title: "Atención Telefónica",
              description: "Llámanos al 1800-ANEUPI.",
            },
            {
              icon: FaEnvelope,
              color: "orange-300",
              title: "Soporte por Correo",
              description: "soporte@aneupi.fin.ec",
            },
            {
              icon: FaMapMarkerAlt,
              color: "pink-300",
              title: "Encuéntranos",
              description: "Guayaquil, Quito, Cuenca y Machala.",
            },
          ].map(({ icon: Icon, color, title, description }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-br from-[#1e3e6d] to-[#142841] p-8 rounded-3xl shadow-xl backdrop-blur-sm border border-white/10 hover:border-[#fcbf49]/30 transition-all"
            >
              <Icon className={`text-4xl text-${color} mb-6`} />
              <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
              <p className="text-white/80">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-[#1a2a3a] px-4 md:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#e9857d] to-[#fcbf49]"
        >
          Beneficios Exclusivos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map(
            ({ icon: Icon, color, title, description }, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="relative bg-gradient-to-br from-[#1e3e6d] to-[#142841] p-8 rounded-3xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[#fcbf49]/5 group-hover:opacity-30 opacity-0 transition-opacity" />
                <Icon className={`text-4xl text-${color} mb-6`} />
                <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
                <p className="text-white/80">{description}</p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Efectos de Partículas */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              opacity: 0,
              x: Math.random() * 100,
              y: Math.random() * 100,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </div>
  );
}
