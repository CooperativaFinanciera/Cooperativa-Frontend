"use client";
import React from "react";

const Servicios = () => {
  return (

    <div className="flex flex-col items-center w-full my-10 py-0 px-5">
      {/* Sección de Sugerencias */}
      <div className="flex flex-wrap justify-center items-center w-full my-10 p-5 bg-white rounded-lg shadow-lg gap-5">
        <img
          src="https://static.wixstatic.com/media/11062b_6969086045f144fba681ef6887d3f3b4~mv2.jpg/v1/fill/w_980,h_384,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6969086045f144fba681ef6887d3f3b4~mv2.jpg"
          alt="Productos"
          className="w-full h-auto mb-5 rounded-lg shadow-md"
        />
      </div>
      <div className="flex justify-center w-full bg-white-100 rounded-lg shadow-md gap-10 border-transparent shadow-none">
        {/* Imagen 1 */}
        <div className="w-full sm:w-2/3 flex justify-center items-center p-7">
          <div className="p-2 rounded-lg w-full">
            <img
              src="/segerencia.avif"
              alt="Inversion"
              className="w-full h-auto object-cover mb-3 rounded-lg shadow-md transform hover:scale-110"
            />
          </div>
        </div>

        {/* Texto 1 */}
        <div className="w-full sm:w-2/3 flex flex-col justify-center items-start p-7">
          <h2 className="text-5xl font-bold text-[#00335f] mb-5 text-left sm:text-left text-center">
            Sugerencias
          </h2>
          <p className="text-base font-semibold text-gray-600 mb-4">
             (EN DESARROLLO)
          </p>

          <p className="text-m leading-relaxed text-[#00335f] mb-5">
            Ingresa tus sugerencias y reclamos de manera ágil sin necesidad de acercarte a las agencias.​​Recuerda tener actualizados tus datos de contacto para recibir notificaciones.
          </p>
          <div className="p-6 rounded-lg w-1/3 flex justify-center">
            <button
              onClick={() => window.location.href = ""}
              className="w-full h-12 px-6 py-3 flex items-center justify-center border-2 rounded-xl transition-all duration-300 bg-[#00335f] hover:shadow-2xl"
            >
              <p className="text-center text-white text-lg font-medium">
                Sugerencias
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Sección de Reclamos */}
      <div className="flex justify-center w-full my-10 py-0 px-5 bg-white-100 rounded-lg shadow-md gap-10 border-2 border-custom-blue">
        {/* Texto 2 */}
        <div className="rounded-lg w-full sm:w-3/5 p-5 flex flex-col justify-center items-start">
          <h2 className="text-5xl font-bold text-[#00335f] mb-5 text-left sm:text-left text-center">
            Reclamos
          </h2>
          <p className="text-base font-semibold text-gray-600 mb-4">
             (EN DESARROLLO)
          </p>

          <p className="text-m leading-relaxed text-custom-gray mb-5">
            Queremos escuchar tus inquietudes y resolver cualquier problema que hayas experimentado. Por favor, selecciona el tipo de reclamo que deseas realizar y proporciónanos los detalles necesarios para ayudarte de la mejor manera posible.
          </p>

          {/* Botones de Reclamos */}
          <div className="flex space-x-4 justify-center w-full">
            {/* Botón 1 */}
            <div className="p-6 rounded-lg w-1/3 flex justify-center">
              <button
                onClick={() => window.location.href = ""}
                className="w-full h-12 px-6 py-3 flex items-center justify-center border-2 rounded-xl transition-all duration-300 bg-[#00335f] hover:shadow-2xl"
              >
                <p className="text-center text-white text-lg font-medium leading-none">
                  Reclamo de Accionistas
                </p>
              </button>
            </div>

            {/* Botón 2 */}
            <div className="p-6 rounded-lg w-1/3 flex justify-center">
              <button
                onClick={() => window.location.href = ""}
                className="w-full h-12 px-6 py-3 flex items-center justify-center border-2 rounded-xl transition-all duration-300 bg-[#00335f] hover:shadow-2xl"
              >
                <p className="text-center text-white text-lg font-medium leading-none">
                  Reclamo de Socios
                </p>
              </button>
            </div>

            {/* Botón 3 */}
            <div className="p-6 rounded-lg w-1/3 flex justify-center">
              <button
                onClick={() => window.location.href = ""}
                className="w-full h-12 px-6 py-3 flex items-center justify-center border-2 rounded-xl transition-all duration-300 bg-[#00335f] hover:shadow-2xl"
              >
                <p className="text-center text-white text-lg font-medium leading-none">
                  Reclamos Anónimos
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Imagen 2 */}
        <div className="w-full sm:w-2/6 flex justify-center items-center p-7">
          <div className="p-2 rounded-lg w-full">
            <img
              src="/reclamos.avif"
              alt="reclamos"
              className="ml-20 w-250 h-50 object-cover mb-3 rounded-lg shadow-md transform hover:scale-110"
            />
          </div>
        </div>
      </div>
      <p className="text-center text-custom-gray text-m font-semibold group-hover:text-custom-blue transition animate-slowblink">
        <span className="font-bold">Importante:</span> puedes conocer el proceso de atención de quejas y reclamos, aquí.
      </p>
    </div>
  );
};

export default Servicios;
