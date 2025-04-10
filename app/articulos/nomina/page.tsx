'use client';
import React from "react";

const Nomina = () => {
  return (
    <main className="my-10 mx-auto px-5">
         {/* Imagen superior */}
      <div className="flex flex-wrap justify-center items-center w-full my-10 p-5 bg-white rounded-lg shadow-lg gap-5">
        <img
          src="https://static.wixstatic.com/media/6091ca_d16a5601f55a440f94b62be4270b0a23~mv2.jpg/v1/fill/w_980,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6091ca_d16a5601f55a440f94b62be4270b0a23~mv2.jpg"
          alt="Fideicomisos"
          className="w-full h-auto mb-5 rounded-lg shadow-md"
        />
      </div>
    <div className="flex flex-col items-center w-full my-10 py-0 px-5">
      {/* Sección Principal */}
      <div className="flex justify-center w-full bg-white-100 rounded-lg shadow-md gap-10 border-transparent shadow-none">
        {/* Parte Derecha - Imagen */}
        <div className="w-full sm:w-2/3 flex justify-center items-center p-7">
          <div className="p-2 rounded-lg w-full">
            <img
              src="/nominas.avif"
              alt="nominas"
              className="w-full h-auto object-cover mb-3 rounded-lg shadow-md transform hover:scale-110"
            />
          </div>
        </div>

        {/* Parte Izquierda - Texto */}
        <div className="border-2 border-custom-blue rounded-2xl w-full sm:w-2/3 flex flex-col justify-center items-start p-7 space-y-5">
          <h2 className="text-5xl font-bold text-[#00335f] mb-5 text-left sm:text-left group-hover:text-white text-center">
            Su empresa y su equipo serán nuestra prioridad
          </h2>
          <p className="text-m leading-relaxed text-[#00335f] mb-5 group-hover:text-white">
            Contaremos con un equipo de expertos para asesorarle en todo el proceso de migración de nómina, desde la apertura de cuentas y entrega de tarjetas, hasta la confección del archivo de pago.
          </p>
          {/* Botón centrado */}
          <div className="flex items-center justify-center w-full">
          <button
  onClick={() => {}}
  className="px-6 py-3 flex items-center justify-center rounded-xl transition-all duration-300 bg-[#00335f] border-2 border-[#00335f] text-white hover:bg-white hover:text-[#00335f] hover:shadow-xl hover:scale-105"
>
  <p className="text-lg font-semibold">
    Solicitar nómina (En desarrollo)
  </p>
</button>

          </div>
        </div>
      </div>

      {/* Sección Beneficios */}
      <div className="border-2 border-custom-blue flex flex-wrap justify-between items-center w-full mx-auto my-6 p-5 bg-gray-100 rounded-lg shadow-md gap-5 max-w-4xl">
        <div className="flex-1 flex flex-col justify-center items-start p-5">
          <h2 className="text-2xl font-bold text-[#00335f] mb-5 flex items-center">
            Futuros Beneficios Destacados
          </h2>
          <ul className="list-none pl-0 space-y-3 text-lg text-[#00335f]">
            <li className="flex items-start">
              <span className="text-xl mr-2">*</span>
              Atención a gestiones y consultas.
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-2">*</span>
              Apertura de cuentas ágil y segura.
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-2">*</span>
              Reportes al Departamento de Recursos Humanos.
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-2">*</span>
              Plataforma para pagos de nómina eficiente y segura.
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-2">*</span>
              Tarjeta de débito con beneficios Visa y MasterCard.
            </li>
          </ul>
        </div>
      </div>
    </div>
     </main>
  );
};

export default Nomina;