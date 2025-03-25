'use client';
import { useEffect, useState } from "react";
import { FaPiggyBank, FaChartLine, FaUniversity, FaShieldAlt, FaWhatsapp } from "react-icons/fa";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import Link from "next/link";
import Image from "next/image";
import edufiportadaImg from "@/app/assets/image/edufiportada.png";
import edufiportada2Img from "@/app/assets/image/edufiportada2.png"; 
import edufiImg from "@/app/assets/image/edufi.png"; 
import edufi2Img from "@/app/assets/image/edufi2.png"; 


const FinancialEducationPartners: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

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
      icon: <FaChartLine className="text-blue-600 text-3xl" />,
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
      icon: <FaUniversity className="text-blue-600 text-3xl" />,
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
      icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
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

  const backgrounds = [edufiportada2Img];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="space-y-10 md:space-y-20">
      <header className="relative p-6 text-[#234263] text-left transform transition-all duration-300 flex items-center justify-start" // Aseguramos que el contenido esté alineado a la izquierda
  style={{
    backgroundImage: `url(${edufiportadaImg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    marginTop: "0", // Eliminar el espacio superior
    paddingTop: "0", // Asegurar que no haya relleno superior
    position: "relative", // Asegura que el encabezado se ajuste correctamente
    top: "0", // Asegura que el encabezado esté alineado a la parte superior
  }}
>

    {/* Filtro azul, pero con menos opacidad para que la imagen sea visible */}
    <div className="absolute inset-0 bg-[#234263] opacity-40 rounded-2xl"></div>
  
    {/* Contenido del encabezado */}
    
  <div className="relative z-10 text-white text-left max-w-2xl px-8">
  <h1 className="text-4xl font-bold text-white mb-2 font-[Bitter] text-left border-b-4 border-white">
    TU FUTURO FINANCIERO COMIENZA AQUÍ
  </h1>
  <h3 className="text-2xl font-bold text-white mb-2 font-[Bitter] text-left">
    ¡Educación financiera para nuestros futuros socios!
  </h3>
</div>

  </header>
  {/* Sección 2 */}
<section className="relative flex items-center justify-between gap-8 px-0 bg-white m-0" style={{ marginTop: '90px' }}>
  {/* Imagen con fondo azul y borde blanco alrededor */}
  <div className="flex-shrink-0 w-1/2 bg-[#234263] rounded-2xl p-0 h-full border-8 border-[#234263] ">
    <Image
      className="w-full h-[250px] rounded-2xl object-cover"
      src={edufiImg}
      alt="Conceptos básicos de educación financiera"
    />
  </div>

  {/* Contenedor de texto con fondo blanco */}
  <div className="w-1/2 bg-white p-6 rounded-l-2xl">
    <h2 className="text-2xl font-semibold text-[#234263]">
      ¿Qué es la Educación Financiera?
    </h2>
    <p className="text-lg text-[#234263]">(en desarrollo)</p>
    <p className="text-lg text-[#234263]">
      La educación financiera es el conocimiento y comprensión de conceptos como el ahorro, la inversión y la gestión de deudas. Es clave para tomar decisiones informadas y mejorar la salud financiera personal.
    </p>
  </div>
</section>

{/* Sección 3 */}
<section className="relative flex items-center justify-between gap-8 px-0 bg-white m-0" style={{ marginTop: '90px' }}>
  {/* Contenedor de texto con fondo blanco */}
  <div className="w-1/2 bg-white p-6 rounded-l-2xl border-8 border-white">
    <h2 className="text-2xl font-semibold text-[#234263] rounded-2xl">
      Beneficios de la Educación Financiera
    </h2>
    <p className="text-lg text-[#234263]">(en desarrollo)</p>
    <p className="text-lg text-[#234263]">
      Aprender sobre finanzas personales ayuda a mejorar el manejo del dinero, reducir el estrés financiero y alcanzar metas como comprar una casa, invertir o planificar un retiro seguro.
    </p>
  </div>

  {/* Imagen con fondo azul y borde blanco alrededor */}
  <div className="flex-shrink-0 w-1/2 bg-[#234263] p-0 h-full border-8 border-[#234263] rounded-2xl">
    <Image
      className="w-full h-[250px] object-cover rounded-2xl"
      src={edufi2Img}
      alt="Beneficios de la educación financiera"
    />
  </div>
</section>


      {/* Carrusel de Tarjetas con Imagen de Fondo y Filtro Azul */}
      <div
        className="flex justify-center gap-8 mt-8 relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgrounds[currentBackgroundIndex].src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
          width: '100%',
          marginTop: '90px'
        }}
      >
        <h1 className="absolute top-16 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-white font-[Bitter] z-10">
  TEMAS QUE DEBERÍAS CONOCER
</h1>

        {/* Filtro azul encima del fondo */}
        <div className="absolute inset-0 bg-[rgba(37,70,106,0.6)]"></div>
        
        <div className="w-full max-w-4xl p-8 rounded-2xl z-20 relative mt-24">
          <FadeInEffect className="flex flex-col items-center">
            <div className="flex justify-center gap-8">
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
            </div>

            {/* Puntos de navegación */}
            <div className="flex justify-center gap-2 mt-6">
              {cards.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full bg-white cursor-pointer transition-all duration-300 ${
                    currentIndex === index ? 'scale-150' : 'opacity-50'
                  }`}
                />
              ))}
            </div>
          </FadeInEffect>
        </div>
      </div>

      {/* Pie de Página
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
      </footer> */}
    </main>
  );
};

export default FinancialEducationPartners;
