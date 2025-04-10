"use client";

import {
  FaBalanceScale,
  FaBuilding,
  FaUserTie,
  FaChartPie,
  FaClipboardList,
  FaHandshake,
  FaRegLightbulb,
  FaMoneyCheckAlt,
  FaArrowAltCircleDown,
  FaRegClock,
  FaCoins,
  FaChartLine,
  FaShieldAlt,
  FaPercentage,
  FaPiggyBank,
  FaCalculator,
  FaIdCard,
  FaFileContract,
  FaHandHoldingUsd,
  FaHistory,
  FaHandHoldingHeart,
  FaUniversity,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ParticleBackground = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(80)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-0.5 h-0.5 bg-white/10 rounded-full"
        initial={{ x: Math.random() * 100, y: Math.random() * 100, scale: 0 }}
        animate={{ scale: [0, 1, 0], opacity: [0, 0.4, 0] }}
        transition={{
          duration: 4 + Math.random() * 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

const AuroraEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="absolute -top-[50%] -left-[30%] w-[800px] h-[800px] bg-[radial-gradient(circle,#3b82f620_0%,transparent_70%)] opacity-40 animate-aurora"
    />
  </div>
);

const sections = [
  {
    icon: <FaChartPie className="text-3xl text-cyan-400" />,
    title: "Estados Financieros Auditados",
    desc: "Acceso a balances generales y estados de resultados certificados por auditoría externa",
    gradient: "from-cyan-500/20 to-blue-900/10",
  },
  {
    icon: <FaCoins className="text-3xl text-green-400" />,
    title: "Política de Dividendos",
    desc: "Distribución de excedentes según acuerdo de asamblea general de accionistas",
    gradient: "from-emerald-500/20 to-green-900/10",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-purple-400" />,
    title: "Protección de Aportes",
    desc: "Garantía de fondos respaldada por la Corporación de Seguro de Depósitos",
    gradient: "from-purple-500/20 to-indigo-900/10",
  },
  {
    icon: <FaClipboardList className="text-3xl text-yellow-400" />,
    title: "Actas de Asambleas",
    desc: "Archivo histórico de decisiones tomadas desde 1985 hasta la actualidad",
    gradient: "from-amber-500/20 to-orange-900/10",
  },
  {
    icon: <FaBalanceScale className="text-3xl text-pink-400" />,
    title: "Marco Regulatorio",
    desc: "Normativa de la Superintendencia de Economía Popular y Solidaria (SEPS)",
    gradient: "from-pink-500/20 to-rose-900/10",
  },
  {
    icon: <FaHandHoldingUsd className="text-3xl text-teal-400" />,
    title: "Certificados de Aporte",
    desc: "Inversiones desde $500 con tasas competitivas y plazos flexibles",
    gradient: "from-teal-500/20 to-cyan-900/10",
  },
  {
    icon: <FaUniversity className="text-3xl text-red-400" />,
    title: "Educación Financiera",
    desc: "Programas de capacitación en gestión de inversiones y finanzas personales",
    gradient: "from-red-500/20 to-rose-900/10",
  },
  {
    icon: <FaRegClock className="text-3xl text-indigo-400" />,
    title: "Agenda Institucional",
    desc: "Calendario de asambleas generales y eventos corporativos",
    gradient: "from-indigo-500/20 to-blue-900/10",
  },
  {
    icon: <FaFileContract className="text-3xl text-orange-400" />,
    title: "Documentación Legal",
    desc: "Estatutos sociales actualizados y contratos tipo de certificados",
    gradient: "from-orange-500/20 to-red-900/10",
  },
];

const metricasFinancieras = [
  {
    label: "ROE (2023)",
    value: "14.2%",
    icon: <FaPercentage className="text-2xl" />,
  },
  {
    label: "Crecimiento de Activos",
    value: "+8.4%",
    icon: <FaChartLine className="text-2xl" />,
  },
  {
    label: "Liquidez Corriente",
    value: "1.28:1",
    icon: <FaPiggyBank className="text-2xl" />,
  },
];

const historialInstitucional = [
  "Fundada en 1985 en Guayaquil",
  "+38 años de trayectoria ininterrumpida",
  "Presencia en 8 provincias del Ecuador",
  "50,000 socios activos registrados",
];

export default function AyudaAccionista() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cómo se calculan mis dividendos?",
      answer:
        "Los excedentes se distribuyen proporcionalmente al monto y tiempo de permanencia de sus aportes.",
    },
    {
      question: "¿Qué garantías ofrecen?",
      answer:
        "Protegemos sus aportes hasta $32,000 a través del Seguro de Depósitos.",
    },
    {
      question: "¿Cómo participar en decisiones?",
      answer:
        "Accionistas con más de $1,000 en aportes pueden votar en asambleas.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a1120] text-white overflow-hidden relative">
      <AuroraEffect />
      <ParticleBackground />

      {/* Sección Principal */}
      <section className="pt-32 pb-20 px-4 md:px-16 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent"
        >
          Cooperativa de Ahorro y Crédito ANEUPI
          <br />
          <span className="text-xl md:text-3xl font-light mt-4 block">
            Plataforma Integral del Accionista
          </span>
        </motion.h1>

        {/* Tarjetas de Servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -150px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-gradient-to-br ${section.gradient} rounded-2xl p-8 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all`}
            >
              <div className="mb-6">{section.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
              <p className="text-white/80 leading-relaxed">{section.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sección de Métricas Clave */}
      <section className="py-20 px-4 md:px-16 bg-gradient-to-br from-[#0d1a26] to-[#132437]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent"
        >
          Indicadores Financieros Clave
        </motion.h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {metricasFinancieras.map((metrica, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#132437] p-8 rounded-2xl border border-white/10 backdrop-blur-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-cyan-400">{metrica.icon}</div>
                <h3 className="text-xl font-bold">{metrica.label}</h3>
              </div>
              <div className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                {metrica.value}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sección Histórica */}
      <section className="py-20 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#132437] p-8 rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaHistory className="text-3xl text-purple-400" />
              <h3 className="text-2xl font-bold">Nuestra Trayectoria</h3>
            </div>
            <ul className="list-disc pl-5 space-y-3 text-white/80">
              {historialInstitucional.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#132437] p-8 rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaHandHoldingHeart className="text-3xl text-red-400" />
              <h3 className="text-2xl font-bold">Impacto Social</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaCoins className="text-green-400" />
                <span>USD 2.8M en microcréditos productivos (2023)</span>
              </div>
              <div className="flex items-center gap-4">
                <FaUniversity className="text-blue-400" />
                <span>15 programas de educación financiera anuales</span>
              </div>
              <div className="flex items-center gap-4">
                <FaHandshake className="text-yellow-400" />
                <span>Apoyo a 35 cooperativas de base comunitaria</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className="py-20 px-4 md:px-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent"
        >
          Preguntas Frecuentes
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-white/10 pb-4"
              onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeFAQ === index ? 180 : 0 }}
                  className="text-cyan-400"
                >
                  ▼
                </motion.div>
              </div>
              <AnimatePresence>
                {activeFAQ === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4 text-white/80"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sección de Herramientas */}
      <section className="py-20 px-4 md:px-16 bg-[#132437]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent"
        >
          Herramientas Digitales
        </motion.h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1a2a3a] p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <FaCalculator className="text-3xl text-green-400" />
              <h3 className="text-xl font-bold">Simulador de Inversiones</h3>
            </div>
            <p className="text-white/80">
              Calcule proyecciones de rendimiento basadas en montos y plazos
            </p>
          </div>

          <div className="bg-[#1a2a3a] p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <FaIdCard className="text-3xl text-blue-400" />
              <h3 className="text-xl font-bold">Credencial Digital</h3>
            </div>
            <p className="text-white/80">
              Acceso prioritario en sucursales y verificaciones instantáneas
            </p>
          </div>

          <div className="bg-[#1a2a3a] p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <FaFileContract className="text-3xl text-purple-400" />
              <h3 className="text-xl font-bold">Documentación en Línea</h3>
            </div>
            <p className="text-white/80">
              Acceso 24/7 a contratos, estatutos y actas certificadas
            </p>
          </div>
        </div>
      </section>

      {/* Efectos de Flujo de Datos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-cyan-500/30 to-transparent"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: "0%",
            }}
            animate={{
              width: ["0%", "40%", "0%"],
              x: [0, Math.random() * 100],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
