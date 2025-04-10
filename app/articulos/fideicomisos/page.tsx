'use client';
import React from 'react';

const FideicomisosPage = () => {
  return (
    <main className="my-10 mx-auto px-5">
      {/* Imagen superior */}
      <div className="flex flex-wrap justify-center items-center w-full my-10 p-5 bg-white rounded-lg shadow-lg gap-5">
        <img
          src="https://static.wixstatic.com/media/6091ca_57129fa6bdfb49c88834199d08d3fd5f~mv2.jpg/v1/fill/w_980,h_425,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6091ca_57129fa6bdfb49c88834199d08d3fd5f~mv2.jpg"
          alt="Fideicomisos"
          className="w-full h-auto mb-5 rounded-lg shadow-md"
        />
      </div>

      {/* Sección principal */}
      <div className="flex flex-wrap w-full my-10 py-0 px-5 bg-white-100 rounded-lg shadow-md gap-5 border-transparent shadow-none">
        {/* Parte Derecha: Imagen */}
        <div className="w-full sm:w-1/3 flex justify-center items-center p-5">
          <div className="p-2 rounded-lg">
            <img
              src="/barras.avif"
              alt="Inversion"
              className="w-full h-auto object-cover mb-3 rounded-lg shadow-md transform hover:scale-110"
            />
          </div>
        </div>

        {/* Parte Izquierda */}
        <div className="w-full sm:w-1/2 p-5 flex flex-col justify-center items-start">
          <h2 className="text-5xl font-bold text-[#00335f] mb-5 text-center sm:text-center group-hover:text-white">
            ¿Por qué nosotros?
          </h2>
          <p className="text-m leading-relaxed text-[#00335f] mb-5 group-hover:text-white">
            En el proyecto de la Cooperativa Financiera ANEUPI, contaremos con experiencia en la administración de negocios bajo la figura de fideicomisos y comisiones de confianza.
          </p>
          <p className="text-m leading-relaxed text-[#00335f] mb-5 group-hover:text-white">
            Nos especializamos en fideicomisos de administración e inversión con cláusulas testamentarias, así como en fideicomisos de administración de créditos, garantía, entre otros.
          </p>
          <p className="text-m leading-relaxed text-[#00335f] mb-5 group-hover:text-white">
            Además, el Proyecto de la Cooperativa Financiera contará con una estructura robusta para la atención de los diferentes negocios fiduciarios, con personal altamente calificado y especializado en temas fiduciarios.
          </p>
          <p className="text-m leading-relaxed text-[#00335f] mb-5 group-hover:text-white">
            Nuestro equipo podrá asesorarte de la mejor manera, garantizando un manejo amplio del tema y seguridad para tus inversiones y proyectos.
          </p>
        </div>
      </div>

      {/* Botón para productos */}
      <div className="-mt-20 w-full flex justify-center mt-10 bg-custom-blue-100">
        <div className="p-6 rounded-lg flex flex-col items-center w-1/">
          <button
            onClick={() => window.location.href = "/articulos/productos"}
            className="px-6 py-3 flex items-center justify-center rounded-xl transition-all duration-300 bg-[#00335f] border-2 border-[#00335f] text-white hover:bg-white hover:text-[#00335f] hover:shadow-xl hover:scale-105"
          >
            <p className="text-lg font-semibold transition duration-300">
              Solicita Nuestros Productos
            </p>
          </button>

        </div>
      </div>
    </main>
  );
};

export default FideicomisosPage;
