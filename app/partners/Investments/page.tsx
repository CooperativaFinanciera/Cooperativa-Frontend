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
    <>
      <main className="space-y-10 md:space-y-20">
        <header className="p-8 bg-[rgba(37,70,106,1)] text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center">
          <h1 className="text-3xl font-bold mb-2">¡Haremos crecer tu dinero!</h1>
          <p className="text-lg">Simula y crea tu inversión con el monto y plazo que prefieras. Recibirás intereses.</p>
          </header>
        {/* Sección Inversión Rentable */}
        <section className="max-w-4xl mx-auto p-8 bg-white border-2 border-[rgba(37,70,106,1)] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[rgba(37,70,106,1)] flex justify-center items-center gap-2">
            <HiTrendingUp className="text-3xl text-[rgba(37,70,106,1)]" />
            Inversión rentable desde el primer día
          </h2>
          <FadeInEffect className="w-full flex justify-center">
            <img className="w-80 h-70 object-cover rounded-xl shadow-md" src={inverImage.src} alt="Persona haciendo inversiones" />
          </FadeInEffect>
          <p className="text-lg text-gray-700 mt-4">
            Convierte tus ahorros en una inversión segura y rentable. Con nuestra plataforma, puedes hacer crecer tu dinero desde el primer día.
          </p>
          <div className="mt-6">
            <p className="text-[rgba(37,70,106,1)] font-bold">Tu dinero creciendo en el tiempo:</p>
            <div className="w-full bg-gray-200 rounded-full h-5 mt-2">
              <div className="bg-[rgba(37,70,106,1)] h-4 rounded-full transition-all duration-1000 ease-in-out" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="mt-6">
            <Button className="bg-[rgba(37,70,106,1)] text-white font-bold px-6 py-2 rounded-lg hover:bg-opacity-90 transition">
              Empieza a Invertir Ahora
            </Button>
          </div>
        </section>

        {/* Sección Beneficios */}
        <section className="p-8 bg-white border-2 border-[rgba(37,70,106,1)] text-gray-900 rounded-2xl shadow-lg text-center max-w-[900px] mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[rgba(37,70,106,1)]">Beneficios de tu Inversión</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <HiTrendingUp />, title: "Alto Rendimiento", description: "Obtendrás intereses beneficiosos." },
              { icon: <HiChartBar />, title: "Flexibilidad", description: "Define el tiempo de tu inversión." },
              { icon: <HiLightBulb />, title: "Confianza", description: "Seguridad y estabilidad financiera garantizadas." },
              { icon: <HiArrowUpCircle />, title: "Eficiencia", description: "Utiliza tu inversión como garantía de crédito." },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-[rgba(37,70,106,1)] text-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col items-center"
              >
                <div className="text-5xl text-white mb-2">{benefit.icon}</div>
                <h3 className="font-bold">{benefit.title}</h3>
                <p>{benefit.description}</p>
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
        <section className="p-8 bg-white border-2 border-[rgba(37,70,106,1)] text-gray-900 rounded-2xl shadow-lg space-y-8 max-w-[900px] mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[rgba(37,70,106,1)] text-center">Preguntas Frecuentes: Depósito a Plazo Fijo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <HiQuestionMarkCircle />, question: "¿Qué es una inversión?", answer: "Es un instrumento financiero que permite obtener intereses al depositar dinero a plazo fijo." },
              { icon: <HiClipboardList />, question: "¿Cuáles son los requisitos?", answer: "Ser mayor de 18 años, tener cédula de identidad o pasaporte vigente y poseer una cuenta de ahorros en la cooperativa." },
              { icon: <HiShieldCheck />, question: "¿Qué beneficios obtengo?", answer: "Seguridad del dinero invertido, rentabilidad fija y certificado negociable en Bolsas de Valores." },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col items-center"
              >
                <div className="text-5xl text-[rgba(37,70,106,1)] mb-3">{faq.icon}</div>
                <h3 className="font-bold text-[rgba(37,70,106,1)] text-center">{faq.question}</h3>
                <p className="text-gray-700 text-center">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default InvestmentsPage;
