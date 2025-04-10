'use client';
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function JobApplication() {
  const mainColor = "rgb(35, 66, 99)";
  const lightBlue = "rgba(217, 237, 255, 0.6)";

  const jobs = [
    { title: "Asesor de Servicio al Cliente", location: "Quito", type: "Presencial" },
    { title: "Analista de Riesgos", location: "Guayaquil", type: "Híbrido" },
    { title: "Oficial de Créditos", location: "Cuenca", type: "Presencial" },
  ];

  const benefits = [
    "Ambiente colaborativo",
    "Oportunidades de crecimiento",
    "Capacitación constante",
    "Beneficios competitivos",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto font-sans p-6 ">
      <p className="text-base font-semibold text-red-600 mb-4">
        ⚠️ Esta sección se encuentra actualmente en desarrollo.
      </p>

      <div
        className="w-full p-2 text-center text-white text-xl font-bold mb-4"
        style={{ backgroundColor: mainColor }}
      >
        ¡Postúlate para formar parte de nuestro equipo!
      </div>

      <div className="text-center mb-6">
        <p className="text-lg text-gray-700">
          En nuestro banco cooperativo emergente, buscamos personas apasionadas
          por el servicio al cliente y el bienestar financiero de la comunidad.
          Si te interesa ser parte de este proyecto, ¡queremos conocerte!
        </p>
      </div>

      {/* Beneficios */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-[#00335f] mb-4">
          Beneficios de trabajar con nosotros
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <FiCheckCircle className="text-[#00335f] text-xl" />
              <span className="text-gray-700 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Vacantes disponibles 
      <div className="mt-10">
        <h3 className="text-xl font-bold text-[#00335f] mb-4">
          Vacantes Disponibles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-5 shadow hover:shadow-xl hover:scale-[1.01] transition duration-300"
            >
              <h4 className="text-lg font-bold text-[#00335f] mb-1">
                {job.title}
              </h4>
              <p className="text-sm text-gray-600">
                {job.location} · {job.type}
              </p>
            </div>
          ))}
        </div>
      </div>*/}

      {/* Botón de más información */}
      <div className="flex justify-center mt-8 mb-8">
  <button
    onClick={() =>
      window.open("https://aneupi.com/ofertas-laborales", "_blank")
    }
    className="px-6 py-3 flex items-center justify-center rounded-xl transition-all duration-300 bg-[#00335f] border-2 border-[#00335f] text-white hover:bg-white hover:text-[#00335f] hover:shadow-xl hover:scale-105"
  >
    <p className="text-lg font-semibold transition duration-300">
      Más información
    </p>
  </button>
</div>
    </div>
  );
}
