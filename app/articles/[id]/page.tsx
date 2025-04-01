'use client';
import React, { useState } from 'react';

const articles = {
 
  "FIDEICOMISOS": {
    image: "https://static.wixstatic.com/media/6091ca_57129fa6bdfb49c88834199d08d3fd5f~mv2.jpg/v1/fill/w_980,h_425,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6091ca_57129fa6bdfb49c88834199d08d3fd5f~mv2.jpg"
  },
  "PagodeServiciosImpuestos": {
    image: "https://static.wixstatic.com/media/6091ca_e4ecdcf8624344cbbf4939959b86d2ba~mv2.jpg/v1/fill/w_980,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6091ca_e4ecdcf8624344cbbf4939959b86d2ba~mv2.jpg"
  },
  "Productos": {
    image: "https://static.wixstatic.com/media/11062b_b09f130953be4d1f9550effc45214b6b~mv2.jpg/v1/fill/w_980,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_b09f130953be4d1f9550effc45214b6b~mv2.jpg"
  },
  "Nomina": {
    image: "https://static.wixstatic.com/media/6091ca_d16a5601f55a440f94b62be4270b0a23~mv2.jpg/v1/fill/w_980,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6091ca_d16a5601f55a440f94b62be4270b0a23~mv2.jpg"
  },
  "Servicios": {
    image: "https://static.wixstatic.com/media/11062b_6969086045f144fba681ef6887d3f3b4~mv2.jpg/v1/fill/w_980,h_384,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6969086045f144fba681ef6887d3f3b4~mv2.jpg"
  },
   "Revistas": {
    image: "/revista1.jpeg"
  },
 
  
};

const ArticlePage = ({ params }: { params: { id: string } }) => {
  const article = articles[params.id as keyof typeof articles];
  
  // Estado para controlar la visibilidad del modal y el contenido
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  if (!article) {
    return <div className="text-center text-red-500">Artículo no encontrado</div>;
  }

  // Función para abrir el modal
  const openModal = (content: string) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="my-10 mx-auto px-5">
  {/* Artículo */}
  {params.id !== "Inversiones" && article.image && (
    <div className="flex flex-wrap justify-center items-center w-full my-10 p-5 bg-white rounded-lg shadow-lg gap-5">
      <img src={article.image} className="w-full h-1/2-lg mb-5" />
      </div>
  )}
  

      
      
        {/* PAGINA 5 FIDEICOMISOS*/}
        {params.id === "FIDEICOMISOS" && (
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
              En el proyecto de la Cooperativa Financiera ANEUPI, contaremos con experiencia de la administración de negocios bajo la figura de fideicomisos y comisiones de confianza. Como lo son fideicomisos de administración e inversión con cláusulas testamentarias, además de fideicomisos de administración de créditos, garantía, entre otros.
            </p>
            <p className="text-m leading-relaxed text-[#00335f] mb-5 group-hover:text-white">
              Además, El Proyecto de la Cooperativa Financiera contará con una estructura robusta para la atención de los diferentes negocios fiduciarios, con personal altamente calificado y especializado en temas fiduciarios, que podrán asesorar de la mejor manera garantizando un manejo amplio del tema y seguridad.
            </p>
          </div>
          </div>
          )}
       
         {/* PAGINA 5 FIDEICOMISOS*/}
         {params.id === "FIDEICOMISOS" && (
          <div className="-mt-20 w-full flex justify-center mt-10 bg-custom-blue-100">
            <div className="p-6 rounded-lg flex flex-col items-center w-1/">
              {/* Botón */}
              <button
                onClick={() => window.location.href = "/articles/Productos"}
                className="w-78 h-15 flex items-center justify-center border-2 border-custom-blue rounded-lg transition-all duration-300 bg-custom-blue hover:bg-white hover:text-custom-blue hover:border-custom-blue hover:shadow-xl group"
              >
                <p className="text-center text-white text-lg font-semibold group-hover:text-custom-blue transition duration-300">
                  Solicita Nuestros Productos
                </p>
              </button>
            </div>
          </div>
)}




     {/* PAGINA PRODUCTOS */}
    {params.id === "Productos" && (
      <div className="border-2 border-custom-blue flex flex-col items-center w-full my-10 p-5 bg-custom-white rounded-lg">
        {/* Título Central */}
        <h2 className="text-3xl font-bold text-custom-blue mb-2 text-center mb-6">
          Te Ofreceremos los siguientes Productos:
        </h2>
        {/* Contenedor de Cards */}
        <div className="flex flex-wrap justify-between gap-4 w-full flex-nowrap">
          
          {/* Card 1 */}
          <div 
            onClick={() => window.location.href = "/socios/Inversiones"} 
            className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group w-1/5 cursor-pointer"
          >
            <img src="/administración-inversión.png" alt="administración-inversión" className=" animate-beats w-32 h-32 object-contain mb-4 transform transition-transform duration-500 hover:rotate-12" />
            <p className="text-custom-blue text-m font-semibold group-hover:text-white transition duration-300 mt-4">
              Administración e Inversión
            </p>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => window.location.href = ""} 
            className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group w-1/5 cursor-pointer"
          >
            <img src="/inmobiliario.png" alt="inmobiliario" className=" animate-beats w-32 h-32 object-contain mb-4 transform transition-transform duration-500 hover:rotate-12" />
            <p className="text-custom-blue text-m font-semibold group-hover:text-white transition duration-300 mt-4">
              Inmobiliario
            </p>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => window.location.href = ""} 
            className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group w-1/5 cursor-pointer"
          >
            <img src="/garantia.png" alt="garantia" className=" animate-beats w-32 h-32 object-contain mb-4 transform transition-transform duration-500 hover:rotate-12" />
            <p className="text-custom-blue text-m font-semibold group-hover:text-white transition duration-300 mt-4">
              Comisiones de Confianzas
            </p>
          </div>

          {/* Card 4 */}
          <div 
            onClick={() => window.location.href = ""} 
            className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group w-1/5 cursor-pointer"
          >
            <img src="/comisiones-confianzas.png" alt="comisiones-confianzas" className="animate-beats w-32 h-32 object-contain mb-4 transform transition-transform duration-500 hover:rotate-12" />
            <p className="text-custom-blue text-m font-semibold group-hover:text-white transition duration-300 mt-4">
              Comisiones de Confianza
            </p>
          </div>

          {/* Card 5 */}
          <div 
            onClick={() => window.location.href = ""} 
            className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group w-1/5 cursor-pointer"
          >
            <img src="/administracion-credito.png" alt="Crédito Vehicular" className=" animate-beats w-32 h-32 object-contain mb-4 transform transition-transform duration-500 hover:rotate-12" />
            <p className="text-custom-blue text-m font-semibold group-hover:text-white transition duration-300 mt-4">
              Administración de Crédito
            </p>
          </div>
        </div>
      </div>
    )}



        {params.id === "Productos" && (
       <div className="flex w-full my-10 py-0 px-5 bg-white-100 rounded-lg shadow-md gap-5 border-transparent shadow-none">
        {/* Parte Izquierda */}
       <div className="w-full sm:w-1/2 p-5 flex flex-col justify-center items-start">
         <h2 className="text-5xl font-bold text-[#00335f] mb-5 text-center sm:text-center group-hover:text-white">
         Créditos a intereses accesibles.
         </h2>
         <p className="text-m leading-relaxed text-[#00335f] mb-5 group-hover:text-white">
         Accederán a nuestros créditos para iniciar con tu emprendimiento Además tendrá asesoría de como implementar el crédito en tu emprendimiento.
         </p>
         
       </div>
     
       {/* Parte Derecha*/}
       <div className="w-full sm:w-1/2 flex justify-center items-center p-5">
         <div className="p-2 rounded-lg">
           <img 
             src="/creditos.jpg" 
             alt="Inversiones" 
             className="w-full h-auto object-cover mb-3" 
           />
         </div>
       </div>
      </div>          
    )}
      {params.id === "Productos" && (
      <div className="border-2 border-custom-blue flex justify-center w-full my-10 py-0 px-5 bg-white-100 rounded-lg shadow-md gap-10 border-transparent shadow-none">

        {/* Parte Izquierda - Texto */}
        <div className="w-full sm:w-3/5 p-5 flex flex-col justify-center items-start">
          <h2 className="text-5xl font-bold text-[#00335f] mb-5 text-left sm:text-left group-hover:text-white text-center">
            Protección Familiar
          </h2>
          <p className="text-m leading-relaxed text-[#00335f] mb-5 group-hover:text-white">
            Contaremos con un Plan de Protección Familiar para ti y los miembros de tu familia porque pensamos en tu cuidado, aprovecha la oportunidad y adquiérelo ya.
          </p>
        </div>

        {/* Parte Derecha - Imagen */}
        <div className="w-full sm:w-2/4 flex justify-center items-center p-5">
          <div className="p-2 rounded-lg w-full">
            <img 
              src="/proteccion-familiar.avif" 
              alt="Protección Familiar" 
              className="w-full h-auto object-cover mb-3 rounded-lg shadow-md" 
            />
          </div>
        </div>

      </div>
    )}

      {params.id === "Productos" && (
        <div className=" border-2 border-custom-blue flex justify-center w-full my-10 py-0 px-5 bg-white-100 rounded-lg shadow-md gap-10 border-transparent shadow-none">

        {/* Parte Derecha - Imagen */}
        <div className="w-full sm:w-2/4 flex justify-center items-center p-7">
          <div className="p-2 rounded-lg w-full">
            <img 
              src="/inversion-accesibles.avif" 
              alt="Inversion" 
              className="w-full h-auto object-cover mb-3 rounded-lg shadow-md" 
            />
          </div>
        </div>

      {/* Parte Izquierda - Texto */}
      <div className="w-full sm:w-3/5 p-5 flex flex-col justify-center items-start">
        <h2 className="text-5xl font-bold text-[#00335f] mb-5 text-left sm:text-left group-hover:text-white text-center">       
          Realizaremos Inversiones Accesibles
        </h2>
        <p className="text-m leading-relaxed text-[#00335f] mb-5 group-hover:text-white">
          Consúltenos con las nuevas formas de inversión para grandes y pequeñas empresas. Con una tasa accesible y nuestra asesoría, tu dinero emergerá.
        </p>
      </div>

      </div>
    )}
     {params.id === "PagodeServiciosImpuestos" && (
      <div className="flex justify-center items-start bg-white-100 pt-5">
        {/* Contenedor de la tarjeta sin fondo, sombra y bordes redondeados */}
        <div className="p-8 w-full sm:w-2/3 text-center">
          <h1 className="text-5xl font-bold text-[#00335f] mb-4">
            Pago Automatizado de Impuestos
          </h1>
          <p className=" text-custom-gray text-m">
            Implementación de un sistema automatizado para el pago de impuestos, facilitando a los accionistas cumplir con sus obligaciones fiscales de manera eficiente.
          </p>
        </div>
      </div>
    )}



      {params.id === "PagodeServiciosImpuestos" && (
      <div className=" flex flex-col items-center w-full my-10 p-5  rounded-lg ">
        {/* Contenedor de Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          
          {/* Card 1 */}
          <div className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center w-full sm:w-80 transition-all duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group w-1/5 cursor-pointer">
            <img src="/pago-automatizado.avif" alt="pago-automatizado" className="w-50 h-50 object-contain mb-4 rounded-lg" />
            <h1 className="text-custom-blue text-lg font-semibold mb-2 text-center group-hover:text-white transition duration-300">
            Pago Automatizado de Impuestos
            </h1>
            <p className="text-custom-gray text-m font-semibold mt-4 group-hover:text-white transition duration-300">
            Implementación de un sistema automatizado para el pago de impuestos, facilitando a los accionistas cumplir con sus obligaciones fiscales de manera eficiente.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center w-full sm:w-80 duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group w-1/5 cursor-pointer">
            <img src="/integracion-plataforma.avif" alt="integracion-plataforma" className="w-50 h-50 object-contain mb-4 rounded-lg" />
            <h1 className="text-custom-blue text-lg font-semibold mb-2 text-center group-hover:text-white transition duration-300">
            Integración con Plataformas de Facturación Electrónica
            </h1>
            <p className="text-custom-gray text-m font-semibold mt-4 group-hover:text-white transition duration-300">
            Implementación de un sistema automatizado para el pago de impuestos, a los accionistas cumplir con sus obligaciones fiscales de manera eficiente.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center w-full sm:w-80 duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group w-1/5 cursor-pointer">
            <img src="/asesoramiento-fiscal.avif" alt="asesoramiento-fiscal" className="w-50 h-50 object-contain mb-4 rounded-lg" />
            <h1 className="text-custom-blue text-lg font-semibold mb-2 text-center group-hover:text-white transition duration-300">
            Asesoramiento Fiscal Personalizado
            </h1>
            <p className="text-custom-gray text-m font-semibold mt-4 group-hover:text-white transition duration-300">
            Introducción de servicios de asesoramiento fiscal personalizado para accionistas, ayudándoles a optimizar sus obligaciones fiscales y maximizar beneficios.
            </p>
          </div>
        </div>
      </div>
      )}

    {params.id === "PagodeServiciosImpuestos" && (
      <div className=" flex flex-col items-center w-full my-10 p-5  rounded-lg ">
        {/* Contenedor de Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          
          {/* Card 4 */}
          <div className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center w-full sm:w-80 duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group w-1/5 cursor-pointer">
            <img src="/servicios-reportes.avif" alt="servicios-reportes" className="w-50 h-50 object-contain mb-4 rounded-lg" />
            <h1 className="text-custom-blue text-lg font-semibold mb-2 text-center group-hover:text-white transition duration-300">
            Servicios de Reportes Financieros Automatizados
            </h1>
            <p className="text-custom-gray text-m font-semibold mt-4 group-hover:text-white transition duration-300">
            Implementación de reportes financieros automatizados que ayuden a los accionistas a mantener un seguimiento detallado de sus gastos e ingresos relacionados con servicios e impuestos.
            </p>
          </div>

          {/* Card 5 */}
          <div className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center w-full sm:w-80 duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group w-1/5 cursor-pointer">
            <img src="/educacion-financiera.avif" alt="educacion-financiera" className="w-50 h-50 object-contain mb-4 rounded-lg" />
            <h1 className="text-custom-blue text-lg font-semibold mb-2 text-center group-hover:text-white transition duration-300">
            Educación Financiera y Tributaria
            </h1>
            <p className="text-custom-gray text-m font-semibold mt-4 group-hover:text-white transition duration-300">
            Creación de recursos educativos y seminarios en línea sobre finanzas personales y tributación, destinados a empoderar a los accionistas con conocimientos útiles.
            </p>
          </div>

          {/* Card 6 */}
          <div className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center w-full sm:w-80 duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group w-1/5 cursor-pointer">
            <img src="/consulta-pagos.avif" alt="consulta-pagos" className="w-50 h-50 object-contain mb-4 rounded-lg" />
            <h1 className="text-custom-blue text-lg font-semibold mb-2 text-center group-hover:text-white transition duration-300">
            Consultas de Historial de Pagos
            </h1>
            <p className="text-custom-gray text-m font-semibold mt-4 group-hover:text-white transition duration-300">
            Ofrecer acceso fácil y seguro al historial de pagos de servicios e impuestos realizados a través de la plataforma bancaria.
            </p>
          </div>
        </div>
      </div>
      )}


{params.id === "Nomina" && (
  <div className="flex justify-center w-full my-10 py-0 px-5 bg-white-100 rounded-lg shadow-md gap-10 border-transparent shadow-none">

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
          onClick={() => window.location.href = ""}
          className="w-full max-w-xs h-15 flex items-center justify-center border-2 border-custom-blue rounded-lg transition-all duration-300 bg-custom-blue hover:bg-white hover:text-custom-blue hover:border-custom-blue hover:shadow-xl group"
        >
          <p className="text-center text-white text-m font-semibold group-hover:text-custom-blue transition duration-300">
            Solicitar nómina (En desarrollo)
          </p>
        </button>
      </div>
    </div>

  </div>
)}

        {params.id === "Nomina" && (
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
        )}


{params.id === "Servicios" && (
  <div className="flex justify-center w-full my-10 py-0 px-5 bg-white-100 rounded-lg shadow-md gap-10 border-transparent shadow-none">

    {/* Parte Derecha - Imagen 1 */}
    <div className="w-full sm:w-2/3 flex justify-center items-center p-7">
      <div className="p-2 rounded-lg w-full">
        <img 
          src="/segerencia.avif" 
          alt="Inversion" 
          className="w-full h-auto object-cover mb-3 rounded-lg shadow-md transform hover:scale-110" 
        />
      </div>
    </div>

    {/* Parte Izquierda - Texto 1 */}
    <div className="w-full sm:w-2/3 flex flex-col justify-center items-start p-7">
      <h2 className="text-5xl font-bold text-[#00335f] mb-5 text-left sm:text-left group-hover:text-white text-center">
      Sugerencias
      </h2>
      <p className="text-m leading-relaxed text-[#00335f] mb-5 group-hover:text-white">
      Ingresa tus sugerencias y reclamos de manera ágil sin necesidad de acercarte a las agencias.​​Recuerda tener actualizados tus datos de contacto para recibir notificaciones.
      </p>
      <div className="p-6 rounded-lg w-1/3 flex justify-center">
          <button
            onClick={() => window.location.href = ""}
            className="w-full h-15 flex items-center justify-center border-2 border-custom-blue rounded-lg transition-all duration-300 bg-custom-blue hover:bg-white hover:text-custom-blue hover:border-custom-blue hover:shadow-xl group"
          >
            <p className="text-center text-white text-m font-semibold group-hover:text-custom-blue transition duration-300">
              Sugerencias
            </p>
          </button>
        </div>
    </div>

  </div>
  
)}

{params.id === "Servicios" && (
  <div className=" flex justify-center w-full my-10 py-0 px-5 bg-white-100 rounded-lg shadow-md gap-10 border-2 border-custom-blue shadow-none">

    {/* Parte Izquierda - Texto 2 */}
    <div className="rounded-lg w-full sm:w-3/5 p-5 flex flex-col justify-center items-start">
      <h2 className="text-5xl font-bold text-[#00335f] mb-5 text-left sm:text-left group-hover:text-white text-center">
      Reclamos
      </h2>
      <p className="text-m leading-relaxed text-custom-gray mb-5 group-hover:text-white">
      Queremos escuchar tus inquietudes y resolver cualquier problema que hayas experimentado. Por favor, selecciona el tipo de reclamo que deseas realizar y proporciónanos los detalles necesarios para ayudarte de la mejor manera posible.
      </p>
      
      
      {/* Contenedor de botones - Flexbox */}
      <div className="flex space-x-4 justify-center w-full">
        {/* Primer Botón */}
        <div className="p-6 rounded-lg w-1/3 flex justify-center">
          <button
            onClick={() => window.location.href = ""}
            className="w-full h-15 flex items-center justify-center border-2 border-custom-blue rounded-lg transition-all duration-300 bg-custom-blue hover:bg-white hover:text-custom-blue hover:border-custom-blue hover:shadow-xl group"
          >
            <p className="text-center text-white text-m font-semibold group-hover:text-custom-blue transition duration-300">
              Reclamo de Accionistas
            </p>
          </button>
        </div>

        {/* Segundo Botón */}
        <div className="p-6 rounded-lg w-1/3 flex justify-center">
          <button
            onClick={() => window.location.href = ""}
            className="w-full h-15 flex items-center justify-center border-2 border-custom-blue rounded-lg transition-all duration-300 bg-custom-blue hover:bg-white hover:text-custom-blue hover:border-custom-blue hover:shadow-xl group"
          >
            <p className="text-center text-white text-m font-semibold group-hover:text-custom-blue transition duration-300">
              Reclamo de Socios
            </p>
          </button>
        </div>

        {/* Tercer Botón */}
        <div className="p-6 rounded-lg w-1/3 flex justify-center">
          <button
            onClick={() => window.location.href = ""}
            className="w-full h-15 flex items-center justify-center border-2 border-custom-blue rounded-lg transition-all duration-300 bg-custom-blue hover:bg-white hover:text-custom-blue hover:border-custom-blue hover:shadow-xl group"
          >
            <p className="text-center text-white text-m font-semibold group-hover:text-custom-blue transition duration-300">
              Reclamos de Anonimos
            </p>
          </button>
        </div>
      </div>
    </div>

    {/* Parte Derecha - Imagen */}
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
)}




      {params.id === "Revistas" && (
      <div className="flex justify-center items-center min-h-screen">
            <img 
              src="/revista2.jpeg"  
              alt="revista2"
              className="max-w-full max-h-full object-contain"
            />
          </div>
      )}
      {params.id === "Servicios" && (
        <p className="text-center text-custom-gray text-m font-semibold group-hover:text-custom-blue transition animate-slowblink">
          <span className="font-bold">Importante:</span> puedes conocer el proceso de atención de quejas y reclamos, aquí.
        </p>
      )}

  </main>
      
  );
};

export default ArticlePage;
