"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCalculator,
  FaFileDownload,
  FaPercentage,
  FaClock,
  FaHandsHelping,
  FaStar,
  FaChartLine,
} from "react-icons/fa";

const ParticleBackground = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-0.5 h-0.5 bg-cyan-400/20 rounded-full"
        initial={{
          x: Math.random() * 100,
          y: Math.random() * 100,
          scale: 0,
        }}
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 4 + Math.random() * 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default function CreditoOrdinario() {
  const tiposCredito = {
    "Crédito Francés": {
      descripcion:
        "Cuotas constantes con amortización progresiva. Ideal para planificación financiera a largo plazo.",
      calcularCuota: (monto: number, plazo: number, tasa: number) => {
        const i = tasa / 12;
        return (monto * i) / (1 - Math.pow(1 + i, -plazo));
      },
    },
    "Crédito Alemán": {
      descripcion:
        "Amortización constante con intereses decrecientes. Perfecto para reducir intereses totales.",
      calcularCuota: (monto: number, plazo: number, tasa: number) =>
        monto / plazo + monto * (tasa / 12),
    },
    "Crédito Americano": {
      descripcion:
        "Intereses mensuales con capital al final. Excelente para proyectos a corto plazo.",
      calcularCuota: (monto: number) => (monto * 0.08) / 12,
    },
    "Crédito Bullet": {
      descripcion:
        "Pago único al vencimiento. Para inversiones con retorno garantizado.",
      calcularCuota: (monto: number, plazo: number) =>
        monto * (1 + (0.08 * plazo) / 12),
    },
    "Crédito Lineal": {
      descripcion:
        "Cuotas decrecientes con amortización fija. Optimiza tus pagos iniciales.",
      calcularCuota: (monto: number, plazo: number) =>
        monto / plazo + (monto * 0.08) / 12,
    },
  };

  const [monto, setMonto] = useState(10000);
  const [plazo, setPlazo] = useState(24);
  const [tipo, setTipo] =
    useState<keyof typeof tiposCredito>("Crédito Francés");
  const tasaAnual = 0.08;
  const cuota = tiposCredito[tipo].calcularCuota(monto, plazo, tasaAnual);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1120] to-[#132437] text-white px-4 md:px-8 py-12 relative overflow-hidden">
      <ParticleBackground />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Simulador Cuántico de Crédito
          </motion.h1>
          <p className="text-xl text-white/80">
            Experiencia interactiva de próxima generación
          </p>
        </div>

        {/* Contenedor Principal */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Panel de Control */}
          <motion.div
            className="bg-gradient-to-br from-[#1a2a3a]/90 to-[#0d1a26]/90 backdrop-blur-xl p-8 rounded-3xl border border-cyan-400/20 shadow-2xl"
            whileHover={{ scale: 1.005 }}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <FaCalculator className="text-cyan-400 text-3xl" />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Parámetros del Simulador
              </span>
            </h2>

            <div className="space-y-8">
              {/* Selector de Tipo */}
              <div>
                <label className="block text-sm mb-2">Tipo de Crédito:</label>
                <label htmlFor="tipoCredito" className="block text-sm mb-2">
                  Tipo de Crédito:
                </label>
                <select
                  id="tipoCredito"
                  className="w-full bg-[#0d1a26] border border-cyan-400/30 rounded-xl p-3 focus:ring-2 focus:ring-cyan-400 transition-all"
                  value={tipo}
                  onChange={(e) =>
                    setTipo(e.target.value as keyof typeof tiposCredito)
                  }
                >
                  {Object.keys(tiposCredito).map((tipo) => (
                    <option key={tipo} value={tipo} className="bg-[#0d1a26]">
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>

              {/* Deslizadores */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Monto Solicitado:</span>
                    <span className="font-mono">
                      $ {monto.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="100"
                    value={monto}
                    onChange={(e) => setMonto(Number(e.target.value))}
                    className="w-full range-glow"
                    title="Selecciona el monto solicitado"
                    placeholder="Selecciona el monto solicitado"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Plazo de Pago:</span>
                    <span className="font-mono">{plazo} meses</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="60"
                    value={plazo}
                    onChange={(e) => setPlazo(Number(e.target.value))}
                    className="w-full range-glow"
                    title="Selecciona el plazo de pago"
                    placeholder="Selecciona el plazo de pago"
                  />
                </div>
              </div>

              {/* Resultado */}
              <motion.div
                className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-1 rounded-xl"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
              >
                <div className="bg-[#0d1a26]/80 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-center">
                    <p className="text-sm text-cyan-400 mb-2">
                      {tipo.includes("Bullet") ? "PAGO TOTAL" : "CUOTA MENSUAL"}
                    </p>
                    <p className="text-4xl font-bold text-cyan-300">
                      $ {cuota.toFixed(2)}
                    </p>
                    <p className="text-sm mt-2 text-white/70">
                      Tasa anual fija: {(tasaAnual * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Detalles y Características */}
          <div className="space-y-8">
            {/* Descripción del Crédito */}
            <motion.div
              className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-1 rounded-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-[#0d1a26]/90 p-6 rounded-2xl backdrop-blur-lg border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">
                  {tipo}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {tiposCredito[tipo].descripcion}
                </p>
              </div>
            </motion.div>

            {/* Gráfico Interactivo */}
            <div className="h-64 bg-[#0d1a26]/90 rounded-2xl border border-cyan-400/20 p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">Proyección de Pagos</h4>
                <span className="text-sm text-cyan-400">{plazo} meses</span>
              </div>
              <div className="flex items-end h-[calc(100%-2rem)] gap-1">
                {Array.from({ length: plazo }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-cyan-400/30 w-full rounded-t hover:bg-cyan-400/50 transition-colors"
                    style={{ height: `${(i + 1) * (100 / plazo)}%` }}
                    whileHover={{ scaleY: 1.2 }}
                  />
                ))}
              </div>
            </div>

            {/* Características */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: <FaPercentage />,
                  title: "Tasas Preferenciales",
                  color: "text-green-400",
                },
                {
                  icon: <FaHandsHelping />,
                  title: "Asesoría 24/7",
                  color: "text-purple-400",
                },
                {
                  icon: <FaClock />,
                  title: "Aprobación Express",
                  color: "text-yellow-400",
                },
                {
                  icon: <FaStar />,
                  title: "Beneficios Exclusivos",
                  color: "text-red-400",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="bg-[#0d1a26]/90 p-4 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className={`${feature.color} text-2xl mb-2`}>
                    {feature.icon}
                  </div>
                  <h5 className="font-semibold">{feature.title}</h5>
                  <p className="text-sm text-white/70">Más información →</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pie de Página */}
        <motion.div
          className="mt-16 text-center text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="mb-4">
            ¿Necesitas ayuda? Contacta a nuestro equipo especializado
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 transition-all border border-cyan-400/30">
              Chat en Vivo
            </button>
            <button className="px-6 py-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-all border border-purple-400/30">
              Agenda Virtual
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
