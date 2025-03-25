"use client";
import { useState } from 'react';
import PagoImage from "@/app/assets/image/cuenta.png";
import CuentaImage from "@/app/assets/image/pago.png";
import JubiImage from "@/app/assets/image/jubi.png";
import VejezImage from "@/app/assets/image/vejez.png";
import DiscaImage from "@/app/assets/image/disca.png";
import PensionImg from "@/app/assets/image/pensionportada.png";
import PensionGif from "@/app/assets/image/pension.png";

import { FaMoneyBillWave, FaCreditCard, FaClock, FaBriefcase, FaWheelchair } from "react-icons/fa";
import { Button } from "@nextui-org/react";

const Pensions = () => {
  const [showMoreInfoVejez, setShowMoreInfoVejez] = useState(false);
  const [showMoreInfoJubi, setShowMoreInfoJubi] = useState(false);
  const [showMoreInfoDisca, setShowMoreInfoDisca] = useState(false);

  const [currentCard, setCurrentCard] = useState(0);

  const toggleMoreInfoVejez = () => setShowMoreInfoVejez(!showMoreInfoVejez);
  const toggleMoreInfoJubi = () => setShowMoreInfoJubi(!showMoreInfoJubi);
  const toggleMoreInfoDisca = () => setShowMoreInfoDisca(!showMoreInfoDisca);

  const cards = [
    {
      image: VejezImage.src,
      title: "Por Vejez",
      description: "Cobros seguros y confiables para aquellos que alcanzan la jubilación por vejez.",
      icon: <FaClock className="text-white text-4xl mb-4 mx-auto" />,
      moreInfo: showMoreInfoVejez,
      toggleMoreInfo: toggleMoreInfoVejez,
      details: "Los pagos por pensión por vejez son una opción segura y confiable para las personas que han alcanzado la edad de jubilación..."
    },
    {
      image: JubiImage.src,
      title: "Jubilación Patronal",
      description: "Información sobre cómo gestionar tu jubilación patronal de manera eficiente.",
      icon: <FaBriefcase className="text-white text-4xl mb-4 mx-auto" />,
      moreInfo: showMoreInfoJubi,
      toggleMoreInfo: toggleMoreInfoJubi,
      details: "La jubilación patronal es un derecho que los trabajadores adquieren tras cumplir con los requisitos establecidos por su empleador..."
    },
    {
      image: DiscaImage.src,
      title: "Por Discapacidad",
      description: "Realiza cobros de pensión por discapacidad con total seguridad y confianza.",
      icon: <FaWheelchair className="text-white text-4xl mb-4 mx-auto" />,
      moreInfo: showMoreInfoDisca,
      toggleMoreInfo: toggleMoreInfoDisca,
      details: "La pensión por discapacidad está destinada a aquellas personas que, debido a una condición de discapacidad, no pueden continuar trabajando..."
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-700 dark:text-gray-300">
     <header
  className="relative text-white px-8 py-16 font-bitter"
  style={{
    backgroundImage: `url(${PensionImg.src})`, // Asegúrate de reemplazar con tu ruta de imagen
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  }}
>
  {/* Filtro azul encima de la imagen de fondo */}
  <div className="absolute inset-0 bg-[#234263] opacity-40 rounded-2xl"></div>

  {/* Contenido del encabezado */}
  <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start space-y-4">
    <h1 className="text-3xl font-bold mb-2 border-b-4 border-white pb-4">
      Opciones para Recibir tu Pensión
    </h1>
    <p className="text-lg font-medium">
      Elige la forma más cómoda y segura de recibir tu pensión.
    </p>
  </div>
</header>


      <div className="flex items-center justify-between mt-12 px-8 border-4 border-[rgba(37,70,106,1)] p-6 rounded-lg">
        <div className="flex-grow pr-6">
          <h2 className="text-3xl font-semibold text-[rgba(37,70,106,1)] border-b-4 border-white">
            Pensiones: Flexibilidad y Seguridad
          </h2>
          <p className="text-lg text-gray-500">(en desarrollo)</p>
          <p className="text-black text-lg mb-4">
            En esta sección, te presentamos las opciones disponibles para recibir tus pensiones de manera cómoda y segura...
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            className="w-[500px] h-auto rounded-xl shadow-lg"
            src={PensionGif.src}
            alt="pensiones"
          />
        </div>
      </div>

      <section className="p-8 text-center">
        <h2 className="text-xl font-bold text-[#00325e] dark:text-gray-100 mb-4">
          Formas de Recibir tus Pensiones
        </h2>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="bg-gray-100 dark:bg-black p-6 rounded-lg shadow-lg w-full md:w-1/3 hover:scale-105 transform transition duration-300 border-4 border-[rgba(37,70,106,1)]">
            <img
              src={PagoImage.src}
              alt="Pagos en Efectivo"
              className="mx-auto mb-4 rounded-xl w-full h-80 object-cover"
            />
            <FaMoneyBillWave className="text-[#00325e] text-4xl mb-4 mx-auto" />
            <h3 className="text-lg font-bold mb-2">Pagos en Efectivo</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Recibe tus pagos en efectivo con facilidad y seguridad en cualquier agencia.
            </p>
            <p className="text-lg text-gray-500">(en desarrollo)</p>
          </div>

          <div className="bg-gray-100 dark:bg-black p-6 rounded-lg shadow-lg w-full md:w-1/3 hover:scale-105 transform transition duration-300 border-4 border-[rgba(37,70,106,1)]">
            <img
              src={CuentaImage.src}
              alt="Pagos en Cuenta de Ahorros"
              className="mx-auto mb-4 rounded-xl w-full h-80 object-cover"
            />
            <FaCreditCard className="text-[#00325e] text-4xl mb-4 mx-auto" />
            <h3 className="text-lg font-bold mb-2">Pagos en Cuenta de Ahorros</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Realiza tus retiros de pensión directamente desde tu cuenta de ahorros.
            </p>
            <p className="text-lg text-gray-500">(en desarrollo)</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Elige entre pagos en efectivo o transferencia a tu cuenta de ahorros para tu comodidad.
        </p>
      </section>

      <section className="p-8 text-center">
        <h2 className="text-xl font-bold text-[#00325e] dark:text-gray-100 mb-4">
          Formas de Recibir tus Pensiones
        </h2>
        <div className="relative">
          <div className="flex justify-center space-x-4 mb-6">
            <div className="w-full md:w-2/3">
              <div className="bg-cover bg-center p-6 rounded-xl shadow-lg text-left hover:scale-105 transform transition duration-300 border-4 border-[rgba(37,70,106,1)]"
                   style={{ backgroundImage: `url(${cards[currentCard].image})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', minHeight: '500px' }}>
                {/* Filtro oscuro */}
                <div className="absolute inset-0 bg-black opacity-70 rounded-xl"></div>
                <div className="relative z-10 text-white p-6">
                <div className="flex items-center mb-4">
  <h3 className="text-lg font-bold mb-2 text-white text-left">{cards[currentCard].title}</h3>
  <div className="ml-2"> {/* Espacio entre el título y el icono */}
    {cards[currentCard].icon}
  </div>
</div>

                  <p className="text-white">{cards[currentCard].description}</p>
                  <Button color="primary" className="mt-4" onClick={cards[currentCard].toggleMoreInfo}>
                    Más Información
                  </Button>
                  {cards[currentCard].moreInfo && (
                    <div className="mt-4 text-white">
                      <p>{cards[currentCard].details}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Círculos de navegación */}
          <div className="flex justify-center mt-4">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${
                  currentCard === index ? "bg-[#00325e]" : "bg-gray-300"
                }`}
                onClick={() => setCurrentCard(index)}
              ></div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Pensions;
