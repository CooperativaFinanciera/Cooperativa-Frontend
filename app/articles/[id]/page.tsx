'use client';
import React, { useState } from 'react';

const articles = {
  "2": {
    image: "https://static.wixstatic.com/media/9edfb0_c0fd437b521d4e83960bca2981e768a4~mv2.jpg/v1/fill/w_1265,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9edfb0_c0fd437b521d4e83960bca2981e768a4~mv2.jpg"
  },
  "3": {
    image: "https://static.wixstatic.com/media/b5d897a11e2d48479595d09c7cf15044.jpg/v1/fill/w_980,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b5d897a11e2d48479595d09c7cf15044.jpg"
  },
  "4": {
    image: ""
  },
  "5": {
    image: "https://static.wixstatic.com/media/6091ca_57129fa6bdfb49c88834199d08d3fd5f~mv2.jpg/v1/fill/w_980,h_425,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6091ca_57129fa6bdfb49c88834199d08d3fd5f~mv2.jpg"
  },
  "6": {
    image: "https://static.wixstatic.com/media/6091ca_e4ecdcf8624344cbbf4939959b86d2ba~mv2.jpg/v1/fill/w_980,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6091ca_e4ecdcf8624344cbbf4939959b86d2ba~mv2.jpg"
  },
  "7": {
    image: "https://static.wixstatic.com/media/6091ca_d16a5601f55a440f94b62be4270b0a23~mv2.jpg/v1/fill/w_980,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6091ca_d16a5601f55a440f94b62be4270b0a23~mv2.jpg"
  },
  "8": {
    image: ""
  },
  "9": {
    image: "https://static.wixstatic.com/media/11062b_6969086045f144fba681ef6887d3f3b4~mv2.jpg/v1/fill/w_980,h_384,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6969086045f144fba681ef6887d3f3b4~mv2.jpg"
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
      {/* Artículo de cuentas */}
      <div className="flex flex-wrap justify-center items-center w-full my-10 p-5 bg-white rounded-lg shadow-lg gap-5">
        <img src={article.image}  className="w-full h-1/2-lg mb-5" />
      </div>
       {/* PAGINA 2 CUENTAS*/}
      {/* Nueva Card con la descripción sobre la Cooperativa */}
      {params.id === "2" && (
        <div className="flex flex-wrap justify-between items-center w-full my-10 p-5 bg-gray-100 rounded-lg shadow-md gap-5">
          {/* Parte izquierda ajustada a la mitad de la pantalla */}
          <div className="w-full sm:w-1/2 p-5 flex flex-col justify-center items-start flex-grow">
            <h2 className="text-2xl font-bold text-[#00335f] mb-5">¿Podrán adquirir un crédito en nuestra futura Cooperativa?</h2>
            <p className="text-lg leading-relaxed text-[#00335f] mb-5">
              Nuestras soluciones crediticias serán las más eficientes en el mercado.
            </p>
            <p className="text-lg leading-relaxed text-[#00335f] mb-5">
              Contaremos con las facilidades que te ayudarán a alcanzar tus metas más rápido. Los abonos y precancelación de nuestros créditos, no contemplan penalización alguna.
            </p>
            <p className="text-lg leading-relaxed text-[#00335f]">
              Buscaremos ser tu mejor aliado. Nuestros productos crediticios, cuentan con: financiamiento de gastos legales y seguro de vida.
            </p>
          </div>

          {/* Parte derecha se mantiene igual */}
          <div className="w-full sm:w-1/3 p-5 flex flex-col justify-center items-center">
            <div className="flex gap-10 justify-center mb-5">
              
            {/* Recuadro con imagen y texto */}
              <div className="border-2 border-custom-blue p-4 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group">
                <img src="/cuenta_ahorro.png" alt="Cuenta de Ahorro" className="w-32 h-32 object-contain mb-3 transform transition-transform duration-500 hover:rotate-12" />
                <span className="text-[#00335f] text-lg font-semibold group-hover:text-white transition duration-300">
                  Cuenta de Ahorro
                </span>
              </div>

              {/* Recuadro con imagen y texto */}
              <div className="border-2 border-custom-blue p-4 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group">
                <img src="/cuenta_corriente.png" alt="Cuenta Corriente" className="w-32 h-32 object-contain mb-5 transform transition-transform duration-500 hover:rotate-12" />
                <span className="text-[#00335f] text-lg font-semibold group-hover:text-white transition duration-300">
                  Cuenta Corriente
                </span>
              </div>
            </div>

            {/* Botones debajo de las imágenes */}
            <div className="flex justify-start w-full mt-3 gap-3">
              <button 
                className="bg-custom-blue text-white px-2 py-3 rounded-lg hover:bg-custom-blue transition duration-300 w-auto flex items-center text-left whitespace-nowrap"
                onClick={() => openModal("Contenido de Requisitos Generales")}
              >
                Requisitos Generales
              </button>
              <button 
                className="bg-custom-blue text-white px-2 py-3 rounded-lg hover:bg-custom-blue transition duration-300 w-auto flex items-center text-left whitespace-nowrap"
                onClick={() => openModal("Contenido de Contratos de Cuentas")}
              >
                Contratos de Cuentas
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Información importante*/}
      {params.id === "2" && (
        <div className="flex flex-wrap justify-between items-center w-full my-10 p-5 bg-gray-100 rounded-lg shadow-md gap-5 border-2 border-blue-500">
          <div className="flex-1 flex flex-col justify-center items-start p-5">
            <h2 className="text-2xl font-bold text-[#00335f] mb-5 flex items-center">
              {/* Ícono de alerta */}
              <img src="/alert.png" alt="Alerta" className="w-10 h-10 mr-3 inline-block align-middle" />
              Información importante
            </h2>
            <ul className="list-none pl-0 space-y-3 text-lg text-[#00335f]">
              <li className="flex items-start">
                <span className="text-xl mr-2">➔</span>
                Recuerde que prestar su cuenta personal para recibir o transferir dinero de y hacia personas desconocidas tiene implicaciones legales.
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-2">➔</span>
                No preste su cuenta a terceras personas, recuerde que el mal uso que haga de ella faculta a la Cooperativa a su cierre.
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-2">➔</span>
                Ningún funcionario de la Cooperativa le solicitará datos privados como su contraseña, PIN, datos de su Clave Dinámica u otros datos confidenciales.
              </li>
            </ul>
          </div>
        </div>
      )}


        {/* PAGINA 3 CREDITO*/}
      {params.id === "3" && (
      <div className="flex flex-col items-center w-full my-10 p-5 bg-gray-100 rounded-lg shadow-md">
        {/* Título Central */}
        <h2 className="text-3xl font-bold text-[#00335f] mb-2 text-center">
        Conoce Nuestras Opciones de Crédito
        </h2>
        <p className="text-m font-semibold text-[#00335f] mt-0 mb-4 text-center">
        Accede al crédito que se adapta a tus metas financieras.
        </p>
        {/* Contenedor de Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          
          {/* Card 1 */}
          <div className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group w-full sm:w-64">
            <h1 className="text-[#00335f] text-lg font-semibold group-hover:text-white transition duration-300 mb-2">
            Crédito Personal</h1>
            <img src="/credito_personal.png" alt="Crédito Personal" className="w-32 h-32 object-contain mb-4 transform transition-transform duration-500 hover:rotate-12" />
            <p className="text-[#00335f] text-m font-semibold group-hover:text-white transition duration-300 mt-4">
            No te detengas. Para tus necesidades de financiamiento, tenemos la solución inmediata.</p>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group w-full sm:w-64">
            <h1 className="text-[#00335f] text-lg font-semibold group-hover:text-white transition duration-300 mb-2">
            Crédito Vehicular
            </h1>
            <img src="/credito_hipotecario.png" alt="Crédito Hipotecario" className="w-32 h-32 object-contain mb-4 transform transition-transform duration-500 hover:rotate-12" />
            <p className="text-[#00335f] text-m font-semibold group-hover:text-white transition duration-300 mt-4">
            Empieza el camino hacia tu nuevo vehículo. Nosotros, lo financiamos hasta 60 meses plazo.</p>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group w-full sm:w-64">
          <h1 className="text-[#00335f] text-lg font-semibold group-hover:text-white transition duration-300 mb-2 ">
            Crédito Hipotecario
            </h1>
            <img src="/credito_vehicular.png" alt="Crédito Vehicular" className="w-32 h-32 object-contain mb-4 transform transition-transform duration-500 hover:rotate-12" />
            <p className="text-[#00335f] text-m font-semibold group-hover:text-white transition duration-300 mt-4">
            Materializa el sueño de una vivienda propia. Financiamos la construcción, compra o ampliación de tu nueva casa.</p>

          </div>
        </div>
      </div>
      )}

      {params.id === "3" && (
      <div className="flex flex-wrap justify-between items-center w-full my-10 p-5 bg-gray-100 rounded-lg shadow-md gap-5 border-2 ">
          <div className="flex-1 flex flex-col justify-center items-start p-5">
            <h2 className="text-lg font-bold text-[#00335f] mb-5 flex items-center">
              ¿Podrán adquirir un crédito en nuestra futura Cooperativa?
            </h2>
            <ul className="list-none pl-0 space-y-3 text-lg text-[#00335f]">
              <li className="flex items-start">
                <span className="text-m mr-2">*</span>
                Nuestras soluciones crediticias serán las más eficiente en el mercado.
              </li>
              <li className="flex items-start">
                <span className="text-m mr-2">*</span>
                Contaremos con las facilidades que te ayudarán a alcanzar tus metas más rápido. Los abonos y precancelación de nuestros créditos, no contemplan penalización alguna.              </li>
              <li className="flex items-start">
                <span className="text-m mr-2">*</span>
                Buscaremos ser tu mejor aliado. Nuestros productos crediticios, cuentan con: financiamiento de gastos legales y seguro de vida.              </li>
            </ul>

            </div>
            </div>
      )}


    {/* PAGINA 4 INVERSIONES */}
{params.id === "4" && (
  <div className="border-2 border-custom-blue bg-custom-blue flex flex-wrap justify-between items-center w-full my-10 p-5 bg-gray-100 rounded-lg shadow-md gap-5 group-hover:text-white transition duration-300 mt-3 ">
    {/* Parte izquierda ajustada a la mitad de la pantalla */}
    <div className="w-full sm:w-1/2 p-9 flex flex-col justify-center items-start flex-grow ">
      <h2 className=" text-center text-2xl font-bold text-[#00335f] mb-5 ml-40 " >Haremos crecer tu dinero!</h2>
      <p className="text-lg leading-relaxed text-[#00335f] mb-5">
        Simula y crea tu inversión con el monto y plazo que prefieras. Recibirás intereses beneficiosos.
      </p>
      <p className="text-lg leading-relaxed text-[#00335f] mb-5">
        En el Proyecto de la Cooperativa Financiera ANEUPI nos dedicaremos a potenciar su patrimonio con estrategias financieras sólidas y personalizadas. Nuestro equipo de expertos está comprometido en brindarle soluciones rentables y seguras para alcanzar sus objetivos financieros. Estaremos aquí para guiarlo en cada paso de su camino hacia el éxito financiero.
      </p>
    </div>

    {/* Parte derecha con imagen */}
    <div className="w-full sm:w-1/3 p-1 flex flex-col justify-center items-center">
      <div className="flex gap-10 justify-center mb-5">
        <div className=" p-2 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group">
          <img src="/inversiones.png" alt="Inversiones" className="w-100 h-100 object-contain mb-3 transform transition-transform duration-500 hover:rotate-12" />
        </div>
      </div>
    </div>
  </div>
)}

  {params.id === "4" && (
    <div className="flex flex-wrap justify-between items-center w-full my-10 p-5 bg-gray-100 rounded-lg shadow-md gap-5 border-2">
      <div className="flex-1 flex flex-col justify-center items-center p-5">
        <h2 className="text-lg font-bold text-[#00335f] mb-2 text-center">
        Inversión rentable desde el primer día
        </h2>
        <p className="text-[#00335f] text-m font-semibold group-hover:text-white transition duration-300 mt-3 text-center">
        Multiplicaremos tu dinero con un depósito a plazo fijo.
        </p>
  

      {/* Contenedor padre para los cuadros */}
      <div className="flex justify-start w-full mt-3 gap-8 group-hover:text-white transition duration-300">
        {/* Primer Cuadro */}
        <div className="border-2 border-custom-blue p-3 rounded-lg w-full md:w-50 transition-all duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group ml-30">
          <h1 className="text-lg font-bold text-[#00335f] group-hover:text-white transition duration-300 text-center">
            ¡Soy cliente y quiero invertir!
          </h1>
          <p className="text-sm text-[#00335f] group-hover:text-white transition duration-300 text-center">
            Ingresa a tu Banca Online.
          </p>

          <div className="flex justify-start w-full mt-3 gap-40">
            <button
              className="bg-custom-blue text-white px-2 py-2 rounded-lg hover:bg-custom-blue transition duration-300 ml-20"
              onClick={() => openModal("Contenido de Requisitos Generales")}
            >
              Ingresar Ahora
            </button>
            <button
              className="bg-custom-blue text-white px-2 py-2 rounded-lg hover:bg-custom-blue transition duration-300 mr-10"
              onClick={() => openModal("Contenido de Contratos de Cuentas")}
            >
              Ver Tutorial
            </button>
          </div>
          <ul className="list-none pl-0 space-y-2 text-sm text-[#00335f] mt-3 group-hover:text-white transition duration-300">
            <li className="flex items-start">
              <span className="text-m mr-2 group-hover:text-white transition duration-300">➔</span>
              Haz clic en nuevos Productos.
            </li>
            <li className="flex items-start">
              <span className="text-lg mr-2 group-hover:text-white transition duration-300">➔</span>
              Selecciona realiza una inversión.
            </li>
          </ul>
        </div>

        {/* Segundo Cuadro */}
        <div className="border-2 border-custom-blue p-3 rounded-lg w-full md:w-50 transition-all duration-300 hover:border-white hover:shadow-xl hover:bg-custom-blue group">
          <h1 className="text-lg font-bold text-[#00335f] group-hover:text-white transition duration-300">
            ¡No soy cliente y quiero invertir!
          </h1>
          <p className="text-sm text-[#00335f] group-hover:text-white transition duration-300">
            Crea tu Cuenta de Ahorros o Corriente online en minutos.
          </p>
          
          <div className="flex justify-start w-full mt-3 gap-40">
            <button
              className="bg-custom-blue text-white px-2 py-2 rounded-lg hover:bg-custom-blue transition duration-300 ml-20"
              onClick={() => openModal("Contenido de Requisitos de Cuenta Corriente")}
            >
              Abrir Cuenta
            </button>
            <button
              className="bg-custom-blue text-white px-2 py-2 rounded-lg hover:bg-custom-blue transition duration-300"
              onClick={() => openModal("Contenido de Información Adicional")}
            >
              Simular Inversión
            </button>
          </div>
          
          <ul className="list-none pl-0 space-y-2 text-sm text-[#00335f] mt-3 group-hover:text-white transition duration-300">
            <li className="flex items-start">
              <span className="text-lg mr-2 group-hover:text-white transition duration-300">➔</span>
              Abre una Cuenta Online.
            </li>
            <li className="flex items-start">
              <span className="text-lg mr-2 group-hover:text-white transition duration-300">➔</span>
              Crea tu inversión desde Banca Online.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)}



      
           {/* PAGINA 5 FIDEICOMISOS*/}
           {params.id === "5" && (
        <div className="flex flex-wrap justify-between items-center w-full my-10 p-5 bg-gray-100 rounded-lg shadow-md gap-5">
          {/* Parte izquierda ajustada a la mitad de la pantalla */}
          <div className="w-full sm:w-1/2 p-5 flex flex-col justify-center items-start flex-grow">
            <h2 className="text-2xl font-bold text-[#00335f] mb-5">Haremos crecer tu dinero!</h2>
            <p className="text-lg leading-relaxed text-[#00335f] mb-5">
            Simula y crea tu inversión con el monto y plazo que prefieras. Recibirás intereses beneficiosos.</p>
            <p className="text-lg leading-relaxed text-[#00335f] mb-5">
            En el Proyecto de la Cooperativa Financiera ANEUPI nos dedicaremos a potenciar su patrimonio con estrategias financieras sólidas y personalizadas. Nuestro equipo de expertos están comprometido en brindarle soluciones rentables y seguras para alcanzar sus objetivos financieros. Estaremos aquí para guiarlo en cada paso de su camino hacia el éxito financiero.
            </p>
          </div>

          {/* Parte derecha se mantiene igual */}
          <div className="w-full sm:w-1/3 p-5 flex flex-col justify-center items-center">
            <div className="flex gap-10 justify-center mb-5">
              
            {/* Recuadro con imagen  */}
              <div className="border-2 border-custom-blue p-4 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group">
                <img src="/inversiones.png" alt="Inversiones" className="w-50 h-50 object-contain mb-3 transform transition-transform duration-500 hover:rotate-12" />
              </div>

            </div>
            
          </div>
        </div>
      )}
      {params.id === "5" && (
      <div className="flex flex-wrap justify-between items-center w-full my-10 p-5 bg-gray-100 rounded-lg shadow-md gap-5 border-2 ">
          <div className="flex-1 flex flex-col justify-center items-start p-5">
            <h2 className="text-lg font-bold text-[#00335f] mb-5 flex items-center">
              Inversión rentable desde el primer día
            </h2>
            <p className="text-[#00335f] text-m font-semibold group-hover:text-white transition duration-300 mt-4">
            Multiplicaremos tú dinero con un depósito a plazo fijo.</p>
            <div className="border-2 border-custom-blue p-4 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group">
                <h1 className="w-32 h-32 object-contain mb-3 transform transition-transform duration-500 hover:rotate-12" />
                <span className="text-[#00335f] text-lg font-semibold group-hover:text-white transition duration-300">
                  Cuenta de Ahorro
                </span>
              </div>

              {/* Recuadro con texto */}
              <div className="border-2 border-custom-blue p-4 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-custom-blue hover:shadow-xl hover:bg-custom-blue group">
                <h1 className="w-32 h-32 object-contain mb-5 transform transition-transform duration-500 hover:rotate-12" />
                <span className="text-[#00335f] text-lg font-semibold group-hover:text-white transition duration-300">
                  Cuenta Corriente
                </span>
              </div>
          
          </div>
        </div>
      )}




    </main>
  );
};

export default ArticlePage;
