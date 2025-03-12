"use client";

import { useState } from "react";
import { HiArrowCircleUp, HiTrendingUp, HiChartBar, HiLightBulb, HiQuestionMarkCircle, HiClipboardList, HiShieldCheck } from "react-icons/hi";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import inverImage from "@/app/assets/image/inver.jpg";
import coopeImage from "@/app/assets/image/coope.png";
import { HiArrowUpCircle } from "react-icons/hi2";

const InvestmentsPage: React.FC = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [showSimulator, setShowSimulator] = useState(false);
  const [amount, setAmount] = useState<number | null>(null);
  const [term, setTerm] = useState<number | null>(null);
  const [interest, setInterest] = useState<number | null>(null);

  const calculateInterest = () => {
    if (amount && term) {
      const rate = 0.05; //este porcentaje solo lo añadi como ejemplo interactivo
      const earnedInterest = amount * (rate / 12) * term;
      setInterest(earnedInterest);
    }
  };

  return (
    <main className="space-y-10 md:space-y-20">

      {/* Header */}
      <header className="p-8 bg-[rgba(37,70,106,1)] text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center">
        <h1 className="text-3xl font-bold mb-2">¡Haremos crecer tu dinero!</h1>
        <p className="text-lg">Simula y crea tu inversión con el monto y plazo que prefieras. Recibirás intereses.</p>
      </header>

      {/* Sección Inversión Rentable */}
      <section className="max-w-full mx-auto p-8 bg-white flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left md:w-1/2">
          <h2 className="text-3xl font-bold text-[rgba(37,70,106,1)] flex justify-start items-center gap-2">
            <HiTrendingUp className="text-3xl" />
            Inversión rentable desde el primer día
          </h2>
          <div className="mt-6">
            <p className="text-lg text-black">
              Convierte tus ahorros en una inversión segura y rentable. Con nuestra plataforma, puedes hacer crecer tu dinero desde el primer día.
            </p>

            {/* Progreso de la inversión */}
            <div className="mt-6">
              <p className="text-[rgba(37,70,106,1)] font-bold">Tu dinero creciendo en el tiempo:</p>
              <div className="relative w-full bg-gray-200 rounded-full h-5 mt-2">
                <div className="bg-[rgba(37,70,106,1)] h-4 rounded-full transition-all duration-1000 ease-in-out" style={{ width: "80%" }}></div>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[rgba(37,70,106,1)] font-bold">80%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:ml-8 flex justify-center md:flex-none md:w-1/2">
          <FadeInEffect>
            <img className="w-full h-auto object-cover rounded-xl" src={inverImage.src} alt="Persona haciendo inversiones" />
          </FadeInEffect>
        </div>
      </section>


      {/* Sección Beneficios */}
      <section className="p-8 bg-white border-2 border-[rgba(37,70,106,1)] text-gray-900 rounded-2xl shadow-lg text-center max-w-[900px] mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-white bg-[rgba(37,70,106,1)] py-2 px-4 rounded-xl">Beneficios de tu Inversión</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <HiTrendingUp className="text-purple-500 text-3xl" />, title: "Alto Rendimiento", description: "Obtendrás intereses beneficiosos." },
            { icon: <HiChartBar className="text-green-500 text-3xl" />, title: "Flexibilidad", description: "Define el tiempo de tu inversión." },
            { icon: <HiLightBulb className="text-yellow-500 text-3xl" />, title: "Confianza", description: "Seguridad y estabilidad financiera garantizadas." },
            { icon: <HiArrowUpCircle className="text-red-500 text-3xl" />, title: "Eficiencia", description: "Utiliza tu inversión como garantía de crédito." },
          ].map((benefit, index) => (
            <div key={index} className="bg-white text-[rgba(37,70,106,1)] border-4 border-[rgba(37,70,106,1)] p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col items-center">
              <div className="flex flex-col items-center mb-4">
                <div className="text-[rgba(37,70,106,1)]">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white bg-[rgba(37,70,106,1)] p-3 rounded-md mt-2">
                  {benefit.title}
                </h3>
              </div>
              {/* Descripción */}
              <p className="mt-4 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Tu Nueva Inversión */}
      <section className="p-8 bg-white border-2 border-[rgba(37,70,106,1)] text-gray-900 rounded-2xl shadow-lg flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 bg-[rgba(37,70,106,1)] text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Tu nueva Inversión</h2>
          <p className="text-lg text-center">
            Especificaciones del depósito a plazo fijo para personas. Conoce más sobre cómo puedes empezar a invertir con nuestra cooperativa y aprovechar nuestras mejores tasas y plazos.
          </p>
          <div className="flex space-x-4 mt-4 justify-center">
            <Button
              onClick={() => setShowGuide(!showGuide)}
              className="bg-white text-[rgba(37,70,106,1)] font-bold px-6 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              {showGuide ? "Ocultar Guía" : "Conoce Más"}
            </Button>
            <Button
              onClick={() => setShowSimulator(!showSimulator)}
              className="bg-gray-200 text-[rgba(37,70,106,1)] font-bold px-6 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              {showSimulator ? "Ocultar Simulador" : "Simular"}
            </Button>
          </div>

          {/* Guía de inversión */}
          {showGuide && (
            <div className="mt-4 p-4 bg-white text-gray-900 rounded-lg">
              <h3 className="font-bold text-lg text-[rgba(37,70,106,1)]">Guía de Inversión</h3>
              <ul className="list-disc list-inside text-left text-gray-700">
                <li>Abre una cuenta de ahorros.</li>
                <li>Selecciona la opción de inversión.</li>
                <li>Define el plazo y monto de tu inversión.</li>
                <li>Confirma y firma el contrato.</li>
              </ul>
            </div>
          )}

          {/* Simulador de inversión */}
          {showSimulator && (
            <div className="mt-4 p-4 bg-white text-gray-900 rounded-lg">
              <h3 className="font-bold text-lg text-[rgba(37,70,106,1)]">Simulador de Inversión</h3>
              <div className="flex flex-col space-y-4">
                <Input
                  type="number"
                  placeholder="Ingrese el monto"
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <Input
                  type="number"
                  placeholder="Ingrese el plazo en meses"
                  onChange={(e) => setTerm(Number(e.target.value))}
                />
                <Button onClick={calculateInterest} className="bg-[rgba(37,70,106,1)] text-white px-6 py-2 rounded-lg">
                  Calcular Intereses
                </Button>
              </div>
              {interest !== null && (
                <p className="mt-4 text-lg font-semibold">Intereses ganados: ${interest.toFixed(2)}</p>
              )}
            </div>
          )}
        </div>
        <FadeInEffect className="w-full md:w-1/2 max-w-md mx-auto">
          <img className="w-full h-auto object-cover rounded-2xl shadow-lg" src={coopeImage.src} alt="Gráfico de inversiones" />
        </FadeInEffect>
      </section>

      {/* Sección Preguntas Frecuentes */}
      <section className="p-8 bg-white border-2 border-[rgba(37,70,106,1)] text-gray-900 rounded-2xl shadow-lg space-y-8">
        <h2 className="text-3xl font-bold text-center text-white bg-[rgba(37,70,106,1)] py-2 px-4 rounded-xl mb-6">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-6">
          {[
            { icon: <HiQuestionMarkCircle className="text-white text-3xl" />, question: "¿Cuánto tiempo debo dejar mi inversión?", answer: "El tiempo mínimo recomendado es de 12 meses para maximizar los beneficios." },
            { icon: <HiQuestionMarkCircle className="text-white text-3xl" />, question: "¿Cómo puedo retirar mi dinero?", answer: "Puedes retirar tu dinero a través de transferencia bancaria o en nuestras sucursales." },
            { icon: <HiQuestionMarkCircle className="text-white text-3xl" />, question: "¿Puedo realizar más de una inversión al mismo tiempo?", answer: "Sí, puedes realizar múltiples inversiones al mismo tiempo, siempre que cada una cumpla con los requisitos mínimos." },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-6 bg-white border-4 border-[rgba(37,70,106,1)] p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <div className="bg-[rgba(37,70,106,1)] p-2 rounded-lg">
                {item.icon}
              </div>
              <div className="flex flex-col items-start">
                <p className="text-lg font-semibold">{item.question}</p>
                <p className="mt-2 text-gray-700">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


    </main>
  );
};

export default InvestmentsPage;
