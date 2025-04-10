"use client";
import { HiArrowCircleUp, HiTrendingUp, HiChartBar, HiLightBulb, HiQuestionMarkCircle, HiClipboardList, HiShieldCheck } from "react-icons/hi";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { Button, Input } from "@nextui-org/react";
import inverImg from "@/app/assets/image/inver.png";
import inver2Img from "@/app/assets/image/inver.png";
import { HiArrowUpCircle } from "react-icons/hi2";
import { FaMoneyBillWave, FaCalculator, FaBook, FaRegEye, FaRegEyeSlash } from "react-icons/fa"

import { useEffect, useState } from 'react';

const InvestmentsPage: React.FC = () => {
  const [taxRate, setTaxRate] = useState(0);
  const [showGuide, setShowGuide] = useState(false);
  const [showSimulator, setShowSimulator] = useState(false);
  const [amount, setAmount] = useState<number | null>(null);
  const [term, setTerm] = useState<number | null>(null);
  const [interest, setInterest] = useState<number | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const faqs = [
    {
      question: "¿Cuánto tiempo debo dejar mi inversión?",
      answer: "El tiempo mínimo recomendado es de 12 meses para maximizar los beneficios.",
      icon: <FaBook className="text-white text-3xl" />
    },
    {
      question: "¿Cómo puedo retirar mi dinero?",
      answer: "Puedes retirar tu dinero a través de transferencia bancaria o en nuestras sucursales.",
      icon: <FaMoneyBillWave className="text-white text-2xl" />
    },
    {
      question: "¿Puedo realizar más de una inversión al mismo tiempo?",
      answer: "Sí, puedes realizar múltiples inversiones al mismo tiempo, siempre que cada una cumpla con los requisitos mínimos.",
      icon: <FaCalculator className="text-white text-2xl" />
    },
  ];

  const calculateInterest = () => {
    if (amount === null || term === null) {
      alert("Por favor, ingresa un monto y plazo válidos.");
      return;
    }
    const rate = 0.045;
    const safeTerm = term ?? 0;
    const safeAmount = amount ?? 0;
    const annualInterest = safeAmount * rate * (safeTerm / 12);
    const taxAmount = annualInterest * taxRate;
    const finalAmount = safeAmount + annualInterest - taxAmount;

    setInterest(annualInterest);
  };

  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 90) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          return 90;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="space-y-10 md:space-y-20">
      <header
        className="relative p-8 h-[350px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${inverImg.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.65)]"></div>
        <div className="relative z-10 text-white text-left max-w-2xl px-8">
          <h1 className="text-4xl font-bold text-white mb-2 font-[Bitter] border-b-4 border-white">
            ¡HAREMOS CRECER TU DINERO!
          </h1>
          <h3 className="text-2xl font-light text-white mb-2 font-[Bitter]">
            Simula y crea tu inversión con el monto y plazo que prefieras. Recibirás intereses.
          </h3>
        </div>
      </header>

      {/* Sección Inversión Rentable */}
      <section className="max-w-full mx-auto p-8 bg-[#25466A] flex flex-col md:flex-row items-center shadow-md">
        <div className="flex-1 text-left md:w-2/3 p-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2 text-center md:text-left">
              <HiTrendingUp className="text-3xl text-white" />
              Inversión rentable desde el primer día
            </h2>

            <p className="text-lg text-gray-300 text-center md:text-left">(en desarrollo)</p>

            <div className="mt-6">
              <p className="text-lg text-white text-center md:text-left">
                Convierte tus ahorros en una inversión segura y rentable. Con nuestra plataforma, puedes hacer crecer tu dinero desde el primer día.
              </p>
              <div className="mt-6">
                <p className="text-white font-bold text-center md:text-left">Tu dinero creciendo en el tiempo:</p>

                {/* Barra de progreso*/}
                <div className="relative w-full bg-[#1b3654] rounded-full h-5 mt-2">
                  <div
                    className="bg-white h-4 rounded-full transition-all duration-1000 ease-in-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white font-bold">
                    {progress}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-8 bg-white border-4 border-[rgba(37,70,106,1)] text-gray-900 shadow-lg flex flex-col md:flex-row items-center" style={{
        marginTop: '0px'
      }}>
        <div className="w-full md:w-1/2 mb-6 md:mb-0 bg-[rgba(37,70,106,1)] text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Tu nueva Inversión</h2>

          <p className="text-lg text-white-500 text-center">(en desarrollo)</p>
          <p className="text-lg text-center">
            Especificaciones del depósito a plazo fijo para personas. Conoce más sobre cómo puedes empezar a invertir con nuestra cooperativa y aprovechar nuestras mejores tasas y plazos.
          </p>

          {/* Botones guía y simulador */}
          <div className="flex space-x-4 mt-4 justify-center">
            <Button
              onClick={() => setShowGuide(!showGuide)}
              className="bg-white text-[rgba(37,70,106,1)] font-bold px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200 focus:bg-gray-300 transition-all"
            >
              {showGuide ? <FaRegEyeSlash /> : <FaBook />}
              {showGuide ? "Ocultar Guía" : "Conoce Más"}
            </Button>
            <Button
              onClick={() => setShowSimulator(!showSimulator)}
              className="bg-gray-200 text-[rgba(37,70,106,1)] font-bold px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300 focus:bg-gray-400 transition-all"
            >
              {showSimulator ? <FaRegEyeSlash /> : <FaCalculator />}
              {showSimulator ? "Ocultar Simulador" : "Simular"}
            </Button>
          </div>

          {/* Guía de Inversión */}
          {showGuide && (
            <div className="mt-4 p-4 bg-white text-gray-900 rounded-lg border border-gray-300 shadow-sm">
              <h3 className="font-bold text-lg text-[rgba(37,70,106,1)] flex items-center gap-2">
                <FaBook /> Guía de Inversión
              </h3>
              <ul className="list-disc list-inside text-left text-gray-700 mt-2 space-y-2">
                <li>📘 Abre una cuenta de ahorros.</li>
                <li>💰 Selecciona la opción de inversión.</li>
                <li>📆 Define el plazo y monto de tu inversión.</li>
                <li>✔ Confirma y firma el contrato.</li>
              </ul>
            </div>
          )}

          {/* Simulador de Inversión */}
          {showSimulator && (
            <div className="mt-4 p-4 bg-white text-gray-900 rounded-lg border border-gray-300 shadow-sm">
              <h3 className="font-bold text-lg text-[rgba(37,70,106,1)] flex items-center gap-2">
                <FaCalculator /> Simulador de Inversión
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                Ingresa el monto y plazo de tu inversión para ver cómo se generarán los intereses y los impuestos aplicados. El simulador calcula los intereses generados según la tasa anual del 4.5% y deduce los impuestos según el porcentaje seleccionado.
              </p>

              <div className="flex flex-col space-y-4 mt-4">
                <Input
                  label="Monto a invertir"
                  type="number"
                  value={amount?.toString() || ""}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#25466A] focus:bg-gray-100 transition-all"
                />
                <Input
                  label="Plazo (en meses)"
                  type="number"
                  value={term?.toString() || ""}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#25466A] focus:bg-gray-100 transition-all"
                />
                <label className="font-medium">Tasa de Impuesto sobre los intereses</label>
                <select
                  value={taxRate}
                  onChange={(e) => setTaxRate(Number(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100 placeholder-gray-400 placeholder:font-bold focus:ring-2 focus:ring-[#25466A] focus:outline-none transition-all"
                >
                  <option value="0">Ninguno</option>
                  <option value="0.1">10%</option>
                  <option value="0.15">15%</option>
                  <option value="0.2">20%</option>
                </select>
                <Button
                  onClick={calculateInterest}
                  className="bg-[rgba(37,70,106,1)] text-white font-bold py-2 rounded-lg hover:bg-[#25466A] focus:ring-2 focus:ring-[#25466A] transition-all">
                  Calcular
                </Button>
                {interest !== null && (
                  <div className="mt-4">
                    <p className="font-bold">Resultados:</p>
                    <table className="table-auto w-full border-collapse mt-2">
                      <thead>
                        <tr>
                          <th className="py-2 px-4 border-b">Monto Inicial</th>
                          <th className="py-2 px-4 border-b">Intereses Generados</th>
                          <th className="py-2 px-4 border-b">Impuestos</th>
                          <th className="py-2 px-4 border-b">Total Final</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b">${amount}</td>
                          <td className="py-2 px-4 border-b">${interest.toFixed(2)}</td>
                          <td className="py-2 px-4 border-b">${(interest * taxRate).toFixed(2)}</td>
                          <td className="py-2 px-4 border-b">
                            {((amount ?? 0) + interest - (interest * taxRate)).toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 md:ml-8 flex justify-center md:flex-none">
          <FadeInEffect>
            <img className="w-full h-auto object-cover rounded-xl" src={inver2Img.src} alt="Persona calculando inversión" />
          </FadeInEffect>
        </div>
      </section>

      <section className="p-8 bg-[#F1F5F9] border-4 border-[#25466A] text-gray-900 rounded-2xl shadow-lg text-center max-w-4xl mx-auto mt-12">
        <h2 className="text-4xl font-semibold mb-8 text-white bg-[#25466A] py-4 px-8 rounded-xl shadow-lg">
          Beneficios de tu Inversión
        </h2>

        <p className="text-lg text-[#5C6B73] mb-8 text-center">(en desarrollo)</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { icon: <HiTrendingUp className="text-4xl text-white p-3 bg-[#25466A] rounded-full shadow-lg" />, title: "Alto Rendimiento", description: "Obtendrás intereses beneficiosos." },
            { icon: <HiChartBar className="text-4xl text-white p-3 bg-[#25466A] rounded-full shadow-lg" />, title: "Flexibilidad", description: "Define el tiempo de tu inversión." },
            { icon: <HiLightBulb className="text-4xl text-white p-3 bg-[#25466A] rounded-full shadow-lg" />, title: "Confianza", description: "Seguridad y estabilidad financiera garantizadas." },
            { icon: <HiArrowUpCircle className="text-4xl text-white p-3 bg-[#25466A] rounded-full shadow-lg" />, title: "Eficiencia", description: "Utiliza tu inversión como garantía de crédito." },
          ].map((benefit, index) => (
            <div key={index} className="bg-white border-2 border-[#25466A] p-6 rounded-xl shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-[#e7f0f9] flex flex-col items-center text-center">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-[#25466A]">{benefit.title}</h3>
              <p className="text-gray-700 mt-3">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Pregunats Frecuentes */}
      <div className="flex justify-center mt-5">
        <section className="w-full max-w-3xl p-8 bg-white border-4 border-[rgba(37,70,106,1)] text-gray-900 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-white bg-[rgba(37,70,106,1)] py-2 px-4 rounded-xl mb-6">
            Preguntas Frecuentes
          </h2>

          <p className="text-lg text-gray-500 text-center">(en desarrollo)</p>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[rgba(37,70,106,1)] p-3 rounded-full shadow-md text-white">
                      {item.icon}
                    </div>
                    <span className="font-semibold text-left">{item.question}</span>
                  </div>
                  <span className="text-lg">{activeQuestion === index ? "▲" : "▼"}</span>
                </button>
                {activeQuestion === index && (
                  <div className="p-4 bg-white text-gray-700 border-t">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

    </main>
  );
};

export default InvestmentsPage;
