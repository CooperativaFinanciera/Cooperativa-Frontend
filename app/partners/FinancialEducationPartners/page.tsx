'use client'
import { useState } from "react";
import { FaPiggyBank, FaChartLine, FaUniversity, FaShieldAlt, FaWhatsapp, FaBook } from "react-icons/fa";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import Link from "next/link";
import Image from "next/image";
import edufiGif from "@/app/assets/image/edufi.png";
import edufi2Gif from "@/app/assets/image/edufi2.gif";
import edufiportada from "@/app/assets/image/benefiportada.png"; 

const FinancialEducationPartners: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      icon: <FaPiggyBank className="text-blue-600 text-3xl" />,
      title: "Crédito Responsable",
      subtitle: "Consejos para el uso de un Crédito Responsable",
      listItems: [
        "Comprender cómo funcionan los préstamos a nivel nacional.",
        "Las tasas de interés aplicadas actualmente.",
        "Consejos para mantener un buen historial crediticio.",
        "Plazos de pagos establecidos.",
        "Cantidad establecida para hacer créditos."
      ]
    },
    {
      icon: <FaChartLine className="text-green-500 text-3xl" />,
      title: "Inversiones Básicas",
      subtitle: "Conoce Métodos para una buena Inversión.",
      listItems: [
        "Introducción a conceptos como acciones, bonos y fondos de inversión.",
        "Estrategias de Inversión para nuevos miembros.",
        "Conocimiento de tasas aplicadas en las Inversiones.",
        "Porcentaje atribuido por la Inversión.",
        "Evaluación de riesgos y beneficios al invertir."
      ]
    },
    {
      icon: <FaUniversity className="text-purple-600 text-3xl" />,
      title: "Planificación para la Jubilación",
      subtitle: "Sabrán los beneficios de tu Jubilación te servirá mucho",
      listItems: [
        "Opciones de planes de pensiones y ahorro para el retiro.",
        "Estrategias para asegurar una jubilación cómoda.",
        "Impuestos aplicables para Jubilados.",
        "Pagos de pensiones en nuestras agencias.",
        "Seguridad de retiros de pensiones."
      ]
    },
    {
      icon: <FaShieldAlt className="text-red-600 text-3xl" />,
      title: "Seguros y Protección Financiera",
      subtitle: "Conocerán más sobre los seguros y tus finanzas aseguradas.",
      listItems: [
        "Tipos de seguros (vida, salud, automóvil) y su importancia.",
        "Cómo elegir el seguro adecuado para las necesidades individuales.",
        "Explicar los principios cooperativos y la participación activa.",
        "Fomentar la comprensión de la gestión democrática y la toma de decisiones al elegir un seguro."
      ]
    }
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <>
      <main className="space-y-10 md:space-y-20 bg-white py-12">
        <header className="p-6 bg-white text-[#234263] rounded-2xl text-left transform transition-all duration-300">
          <div className="absolute inset-0 bg-white opacity-100 rounded-2xl"></div>
          <h1 className="text-3xl font-bold mb-2 relative z-10 font-[Bitter]">
            TU FUTURO FINANCIERO COMIENZA AQUÍ
          </h1>
          <h3 className="text-2xl font-bold mb-2 relative z-10 font-[Bitter]">
            ¡Educación financiera para nuestros futuros socios!
          </h3>
        </header>

        {/* Sección Carrusel */}
        <section className="flex items-center justify-between gap-8 px-4 bg-[#234263] text-white rounded-b-2xl shadow-xl flex-row-reverse">
          <div className="flex-shrink-0 w-1/2">
            <Image
              className="w-full h-[250px] object-cover rounded-xl"
              src={edufiGif}
              alt="Educación Financiera"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold">
              Educación Financiera
            </h2>
            <p className="text-lg text-gray-300">(en desarrollo)</p>
            <p className="text-lg">
              La educación financiera es clave para tomar decisiones informadas y responsables sobre tu dinero. En esta sección...
            </p>
          </div>
        </section>

        {/* Carrusel de Tarjetas con Imagen de Fondo */}
        <div
  className="flex justify-center gap-8 mt-8 relative bg-cover bg-center"
  style={{
    backgroundImage: `url(${edufiportada})`,
    backgroundSize: 'cover', // Asegura que el fondo cubra toda la sección
    backgroundPosition: 'center', // Mantiene el fondo centrado
    backgroundRepeat: 'no-repeat', // Evita que el fondo se repita
    height: '600px', // Ajusta la altura de la sección para que ocupe más espacio
    width: '100%', // Asegura que el fondo ocupe el 100% del ancho disponible
  }}
>
  <div className="w-full max-w-4xl bg-blue-600 bg-opacity-50 p-8 rounded-2xl">
    <FadeInEffect className="flex flex-col items-center">
      <div className="flex justify-center gap-8">
        <button
          onClick={goToPrev}
          className="bg-[#234263] text-white p-3 rounded-full hover:bg-[#1d3557] transition"
        >
          &lt;
        </button>

        {/* Tarjeta actual */}
        <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 border-4 border-[#234263]">
          <div className="flex items-center gap-4 mb-4">
            {cards[currentIndex].icon}
            <h3 className="text-xl font-bold mb-2 text-white bg-[#234263] p-2 rounded-lg">
              {cards[currentIndex].title}
            </h3>
          </div>
          <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            {cards[currentIndex].subtitle}
          </h4>
          <div className="text-gray-700 dark:text-gray-300">
            <ul className="mt-4 list-disc list-inside">
              {cards[currentIndex].listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={goToNext}
          className="bg-[#234263] text-white p-3 rounded-full hover:bg-[#1d3557] transition"
        >
          &gt;
        </button>
      </div>
    </FadeInEffect>
  </div>
</div>


        {/* Pie de Página */}
        <footer className="p-8 bg-[#234263] text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 rounded-lg border-4 border-[#234263] flex flex-col items-center space-y-6">
          <div className="text-center text-xl font-bold mb-4">
            <p className="text-lg font-bold">
              Mejora tu futuro financiero con nuestros Ahorros exclusivos.
            </p>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <a
              href="https://wa.me/5930981321044"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#25d366] text-white rounded-full p-3 hover:bg-[#128c7e] transform transition duration-300"
            >
              <FaWhatsapp className="text-3xl" />
              <span className="ml-2 text-lg font-medium">¡Contáctanos por WhatsApp!</span>
            </a>
          </div>
          <div className="flex gap-6 mb-4">
            <Link href="/terms" className="text-gray-300 hover:text-white">
              Términos y Condiciones
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-white">
              Política de Privacidad
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
};

export default FinancialEducationPartners;
