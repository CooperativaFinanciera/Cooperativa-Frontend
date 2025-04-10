"use client";
import React, { useState } from "react";

import ahorroproImageImage from "@/app/assets/image/ahorropro.png";
import ahorrorenImage from "@/app/assets/image/ahorroren.png";
import cuentaahoImage from "@/app/assets/image/cuentaaho.png";
import cuentacorImage from "@/app/assets/image/cuentacor.png";
import cuentasImage from "@/app/assets/image/cuenta.png";

import { Button } from "@nextui-org/react";
import { HiCalendar, HiCreditCard, HiOutlineCurrencyDollar, HiWallet } from "react-icons/hi2";

const Accounts: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const cards = [
    {
      image: ahorroproImageImage.src,
      title: "Ahorro Programado",
      description: "(En desarrollo)",
      details: [
        "Gana intereses desde el primer día.",
        "Sin depósito inicial.",
        "Realiza depósitos, retiros, transferencias, pagos en nuestras agencias y canales electrónicos.",
      ],
    },
    {
      image: ahorrorenImage.src,
      title: "Ahorro Rentable",
      description: "(En desarrollo)",
      details: [
        "Intereses competitivos.",
        "Accesible a cualquier persona.",
        "Ahorra en cualquier momento.",
      ],
    },
    {
      image: cuentaahoImage.src,
      title: "Cuenta de Ahorros",
      description: "(En desarrollo)",
      details: [
        "Depósito mínimo bajo.",
        "Acceso a tus fondos en cualquier momento.",
        "Intereses mensuales.",
      ],
    },
    {
      image: cuentacorImage.src,
      title: "Cuenta Corriente",
      description: "(En desarrollo)",
      details: [
        "Cheques disponibles.",
        "Tarjetas de débito incluidas.",
        "Sin costos de mantenimiento mensual.",
      ],
    },
  ];

  const setCard = (index: number) => {
    setCurrentCard(index);
  };

  const toggleMoreInfo = () => {
    setShowMoreInfo((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-700 dark:text-gray-300">
      <header
        className="relative text-white px-8 py-16 font-bitter"
        style={{
          backgroundImage: `url(${cuentasImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.65)]"></div>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start space-y-4">
          <h1 className="text-5xl font-bold tracking-wider border-b-4 border-white pb-4">
            Opciones de Cuentas
          </h1>
          <p className="text-xl font-light">
            Descubre las opciones disponibles para abrir tu cuenta de manera fácil y segura.
          </p>
        </div>
      </header>

      <div className="flex justify-center gap-6 mt-8">
        {/* Cards principales */}
        <div className="p-6 text-white rounded-2xl shadow-lg hover:scale-102 transform transition duration-300 text-center"

          style={{ backgroundColor: "rgba(37,70,106,1)" }}>
          <HiWallet className="text-4xl mb-4" />
          <h3 className="text-lg font-semibold text-white">Cuentas de Ahorros</h3>
          <p className="text-sm">(En desarrollo)</p>
        </div>

        <div className="p-6 text-white rounded-2xl shadow-lg hover:scale-102 transform transition duration-300 text-center"
          style={{ backgroundColor: "rgba(37,70,106,1)" }}>
          <HiOutlineCurrencyDollar className="text-4xl mb-4" />
          <h3 className="text-lg font-semibold text-white">Ahorro Rentable</h3>
          <p className="text-sm">(En desarrollo)</p>
        </div>

        <div className="p-6 text-white rounded-2xl shadow-lg hover:scale-102 transform transition duration-300 text-center"
          style={{ backgroundColor: "rgba(37,70,106,1)" }}>
          <HiCreditCard className="text-4xl mb-4" />
          <h3 className="text-lg font-semibold text-white">Cuenta Corriente</h3>
          <p className="text-sm">(En desarrollo)</p>
        </div>

        <div className="p-6 text-white rounded-2xl shadow-lg hover:scale-102 transform transition duration-300 text-center"
          style={{ backgroundColor: "rgba(37,70,106,1)" }}>
          <HiCalendar className="text-4xl mb-4" />
          <h3 className="text-lg font-semibold text-white">Ahorro Programado</h3>
          <p className="text-sm">(En desarrollo)</p>
        </div>
      </div>
      <div className="mt-12 px-8 border-4 border-[#25466A] bg-[#25466A] p-6 shadow-lg flex justify-center">

        <div className="max-w-5xl w-full flex items-center justify-between">
          <div className="flex-grow max-w-lg">
            <h2 className="text-3xl font-semibold text-white">Cuentas</h2>
            <p className="text-lg text-white">(en desarrollo)</p>
            <p className="text-white text-lg">
              Descubre todas las opciones de cuentas que ofrecemos. Desde cuentas de ahorro hasta planes especiales
              diseñados para maximizar tus beneficios financieros.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              className="w-[450px] h-auto shadow-lg"
              src={cuentasImage.src}
              alt="Cuentas"
            />
          </div>
        </div>
      </div>

      {/* Sección de Beneficios - Carrusel con puntos de navegación */}
      <section className="p-8 text-center">
        <h2 className="text-4xl font-bitter font-bold text-[#00325e] dark:text-gray-100 mb-4">
          Beneficios y Opciones
        </h2>
        <p className="text-lg text-gray-500">(en desarrollo)</p>

        <div className="relative">
          <div className="w-full md:w-2/3 mx-auto">
            <div
              className="bg-cover bg-center p-6 rounded-lg shadow-lg text-white text-left hover:scale-105 transform transition duration-300 border-4 border-[rgba(37,70,106,1)]"
              style={{
                backgroundImage: `url(${cards[currentCard].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                minHeight: '400px',
                marginTop: '30px',
              }}
            >
              {/* Filtro azul encima de la imagen */}
              <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">{cards[currentCard].title}</h3>
                <p className="text-sm mb-4">{cards[currentCard].description}</p>

                <Button color="primary" className="mt-4" onClick={toggleMoreInfo}>
                  {showMoreInfo ? "Ocultar Información" : "Más Información"}
                </Button>

                {showMoreInfo && (
                  <div className="mt-4 text-white text-sm">
                    <ul className="list-none pl-6">
                      {cards[currentCard].details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Puntos de navegación */}
          <div className="flex justify-center mt-4">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${currentCard === index ? "bg-[#00325e]" : "bg-gray-300"
                  }`}
                onClick={() => setCard(index)}
              ></div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Accounts;
