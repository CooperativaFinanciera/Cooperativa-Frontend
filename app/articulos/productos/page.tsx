'use client';

import React from 'react';
import Image from 'next/image';

const ProductosPage = () => {
  return (
    <main className="my-10 mx-auto px-5">
      {/* Imagen Principal */}
      <div className="flex flex-wrap justify-center items-center w-full my-10 p-5 bg-white rounded-lg shadow-lg gap-5">
        <img
          src="https://static.wixstatic.com/media/11062b_b09f130953be4d1f9550effc45214b6b~mv2.jpg/v1/fill/w_980,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_b09f130953be4d1f9550effc45214b6b~mv2.jpg"
          alt="Productos"
          className="w-full h-auto mb-5 rounded-lg shadow-md"
        />
      </div>
      
      {/* Título Principal */}
      <h2 className="text-3xl font-bold text-custom-blue text-center my-6">
        Te Ofreceremos los siguientes Productos:
      </h2>
      
      {/* Contenedor de Cards */}
      <div className="flex flex-wrap justify-between gap-4 w-full flex-nowrap">
        {[
          { img: '/administración-inversión.png', text: 'Administración e Inversión', link: '/socios/Inversiones' },
          { img: '/inmobiliario.png', text: 'Inmobiliario', link: '' },
          { img: '/garantia.png', text: 'Garantía', link: '' },
          { img: '/comisiones-confianzas.png', text: 'Comisiones de Confianza', link: '' },
          { img: '/administracion-credito.png', text: 'Administración de Crédito', link: '' },
        ].map((product, index) => (
          <div
            key={index}
            onClick={() => window.location.href = product.link}
            className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group w-1/5 cursor-pointer"
          >
            <img src={product.img} alt={product.text} className="animate-beats w-32 h-32 object-contain mb-4 transform transition-transform duration-500 hover:rotate-12" />
            <p className="text-custom-blue text-m font-semibold group-hover:text-white transition duration-300 mt-4">
              {product.text}
            </p>
          </div>
        ))}
      </div>
      
      {/* Secciones de Información */}
      {[
        {
          title: 'Créditos a intereses accesibles.',
          text: 'Accederán a nuestros créditos para iniciar con tu emprendimiento. Además, tendrá asesoría de cómo implementar el crédito en tu emprendimiento.',
          img: '/creditos.jpg',
        },
        {
          title: 'Protección Familiar',
          text: 'Contaremos con un Plan de Protección Familiar para ti y los miembros de tu familia porque pensamos en tu cuidado, aprovecha la oportunidad y adquiérelo ya.',
          img: '/proteccion-familiar.avif',
        },
        {
          title: 'Realizaremos Inversiones Accesibles',
          text: 'Consúltenos con las nuevas formas de inversión para grandes y pequeñas empresas. Con una tasa accesible y nuestra asesoría, tu dinero emergerá.',
          img: '/inversion-accesibles.avif',
        },
      ].map((section, index) => (
        <div key={index} className={`flex w-full my-10 py-0 px-5 bg-white-100 rounded-lg shadow-md gap-10 border-transparent shadow-none ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className="w-full sm:w-3/5 p-5 flex flex-col justify-center items-start">
            <h2 className="text-5xl font-bold text-[#00335f] mb-5 text-left sm:text-left group-hover:text-white text-center">
              {section.title}
            </h2>
            <p className="text-m leading-relaxed text-[#00335f] mb-5 group-hover:text-white">
              {section.text}
            </p>
          </div>
          <div className="w-full sm:w-2/4 flex justify-center items-center p-5">
            <div className="p-2 rounded-lg w-full">
              <img
                src={section.img}
                alt={section.title}
                className="w-full h-auto object-cover mb-3 rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default ProductosPage;
