'use client';
import React, { useState, useEffect } from 'react';

// Definir las imágenes de los socios
const socios = {
  "beneficios-sociales": {
    image: "https://static.wixstatic.com/media/11062b_8f69893d59ff4ccf902fd129f8913068~mv2.jpg",
  },
  "Educacion-Financiera-Socios": {
    image: "https://static.wixstatic.com/media/9edfb0_fa65124f0bb54d77b18197acc3335a27~mv2.png",
  },
  "Inversiones": {
    image: "https://static.wixstatic.com/media/6091ca_0ec4eed9297a4a53992283311cf2dd56~mv2.png/v1/fill/w_484,h_512,al_c,q_85,enc_avif,quality_auto/6091ca_0ec4eed9297a4a53992283311cf2dd56~mv2.png"
  },
  "Cuentas": {
    image: "https://static.wixstatic.com/media/9edfb0_c0fd437b521d4e83960bca2981e768a4~mv2.jpg/v1/fill/w_1265,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9edfb0_c0fd437b521d4e83960bca2981e768a4~mv2.jpg"
  },
  "Pensiones": {
    image: "https://static.wixstatic.com/media/9edfb0_5f5cdde5732f44cc883697ac0085f59f~mv2.jpg",
  },
  "Soluciones": {
    image: "https://static.wixstatic.com/media/9edfb0_5f5cdde5732f44cc883697ac0085f59f~mv2.jpg",
  },
  "Servicios": {
    image: "https://static.wixstatic.com/media/6091ca_d16a5601f55a440f94b62be4270b0a23~mv2.jpg",
  },
};

// Tarjetas a mostrar
const cards = [
  {
    title: "Crédito Responsable",
    emoji: "💳",
    description: "Consejos para el uso de un Crédito Responsable:",
    points: [
      "Comprender cómo funcionan los préstamos a nivel nacional.",
      "Las tasas de interés aplicadas actualmente.",
      "Consejos para mantener un buen historial crediticio.",
      "Plazos de pagos establecidos.",
      "Cantidad establecida para hacer créditos.",
    ],
  },
  {
    title: "Inversiones Básicas",
    emoji: "📈",
    description: "Conoce Métodos para una buena Inversión.",
    points: [
      "Introducción a conceptos como acciones, bonos y fondos de inversión.",
      "Estrategias de Inversión para nuevos miembros.",
      "Conocimiento de tasas aplicadas en las Inversiones.",
      "Porcentaje atribuido por la Inversión.",
      "Evaluación de riesgos y beneficios al invertir.",
    ],
  },
  {
    title: "Seguros y Protección Financiera",
    emoji: "🛡️",
    description: "Conoce más sobre los seguros y cómo proteger tus finanzas.",
    points: [
      "Tipos de seguros (vida, salud, automóvil) y su importancia.",
      "Cómo elegir el seguro adecuado para las necesidades individuales.",
      "Explicar los principios cooperativos y la participación activa.",
      "Fomentar la comprensión de la gestión democrática y la toma de decisiones al elegir un seguro.",
    ],
  },
]
const cards1 = [
 
  {
    title: "Por Vejez",
    image: "/por-vejex.avif",
    points: [
"Se podrán cobrar la jubilación con confianza y seguridad.",
    ]
  },
  {
    title: "Jubilación Patronal",
    image: "/jubilacion-patronal.avif",
    points: [
      "Se podrán cobrar la jubilación patornal de forma segura y eficaz.",
    ],
  },

  {
    title: "Por Discapacidad",
    image: "/por-discapacidad.avif",
    points: [
      "Se podrán realizar los cobros por discapacidad de manera confiable y segura.",
    ],
  },
];


const SociosPage = ({ params }: { params: { id: string } }) => {
  // Obtener el socio según la URL
  const socio = socios[params.id as keyof typeof socios];

  // Estado para el índice de la tarjeta activa
  const [activeIndex, setActiveIndex] = useState(0);

  // Cambio automático de tarjetas cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Cambio manual de tarjeta
  const nextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  return (
    <main className="my-10 mx-auto px-5">
      {/* Mostrar imagen del socio si está disponible */}
      {params.id !== "Inversiones" && socio?.image && (
        <div className="flex flex-wrap justify-center items-center w-full my-10 p-5 bg-white rounded-lg shadow-lg gap-5">
          <img src={socio.image} className="w-full h-1/2-lg mb-5" alt="Imagen del socio" />
        </div>
      )}

{params.id === "Cuentas" && (
  <div className="flex flex-wrap justify-between items-center w-full my-10 p-5 bg-gray-100 rounded-lg shadow-md gap-5">
    {/* Parte izquierda ajustada a la mitad de la pantalla */}
    <div className="w-full p-5 flex flex-col justify-center items-start flex-grow">
      <h2 className="text-2xl font-bold text-[#00335f] mb-5">¿Podrán adquirir un crédito en nuestra futura Cooperativa?</h2>
      <p className="text-lg leading-relaxed text-[#00335f] mb-5">
        Nuestras soluciones crediticias serán las más eficientes en el mercado.
        Contaremos con las facilidades que te ayudarán a alcanzar tus metas más rápido. Los abonos y precancelación de nuestros créditos, no contemplan penalización alguna.
        Buscaremos ser tu mejor aliado. Nuestros productos crediticios, cuentan con: financiamiento de gastos legales y seguro de vida.
      </p>
    </div>

    {/* Parte derecha con los recuadros de cuentas */}
    <div className="w-full p-5 flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 gap-6">
        {/* Recuadro con imagen y texto */}
        <div className="border-2 border-custom-blue p-4 rounded-lg flex flex-col items-center transition-all duration-300  hover:shadow-xl group">
          <img src="/cuenta_corriente.png" alt="Cuenta Ahorro" className="w-32 h-32 object-contain mb-5 transform transition-transform duration-500 hover:rotate-12" />
          <span className="text-[#00335f] text-lg font-semibold">
            Cuenta Ahorro
          </span>
          <ul className="list-none pl-0 space-y-3 text-lg text-[#00335f]">
            <li className="flex items-start">
              <span className="text-xl mr-2">✔</span>
              Gana intereses desde el primer día.
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-2">✔</span>
              Sin depósito inicial.
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-2">✔</span>
              Realiza depósitos, retiros, transferencias, pagos en nuestras agencias y canales electrónicos.
            </li>
          </ul>
          {/* Botones debajo de las imágenes */}
          <div className="flex justify-start w-full mt-3 gap-3">
            <button
              className=" ml-10 mt-10 bg-custom-blue text-white px-2 py-3 rounded-lg transition duration-300 w-auto flex items-center text-left whitespace-nowrap hover:shadow-[0_0_15px_blue]"
              onClick={() => ("Contenido de Requisitos Generales")}
            >
              Requisitos Generales
            </button>
            <button
              className=" mt-10 ml-20 bg-custom-blue text-white px-2 py-3 rounded-lg hover:gb-white transition duration-300 w-auto flex items-center text-left whitespace-nowrap hover:shadow-[0_0_15px_blue]"
              onClick={() => ("Contenido de Contratos de Cuentas")}
            >
              Contratos de Cuentas
            </button>
          </div>
        </div>

        {/* Recuadro con imagen y texto */}
        <div className="border-2 border-custom-blue p-4 rounded-lg flex flex-col items-center transition-all duration-300  hover:shadow-xl  group">
          <img src="/cuenta_ahorro.png" alt="Cuenta de Ahorro" className="w-32 h-32 object-contain mb-3 transition-transform duration-500 hover:rotate-y-180" />
          <span className="text-[#00335f] text-lg font-semibold  transition duration-300">
            Cuenta de Ahorros Rentable
          </span>
          <ul className="list-none pl-0 space-y-3 text-lg text-[#00335f]">
            <li className="flex items-start">
              <span className="text-xl mr-2">✔</span>
              Gana intereses anuales.
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-2">✔</span>
              Sin depósito inicial.
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-2">✔</span>
              Realiza depósitos, retiros, transferencias, pagos en nuestras agencias y canales electrónicos.
            </li>
          </ul>
          <p className="mt-3 text-center text-custom-blue text-m font-semibold group-hover:text-custom-blue transition animate-slowblink">
          <span className="font-bold">Importante:</span> aplica condiciones</p>
         
          {/* Botones debajo de las imágenes */}
          <div className="flex justify-start w-full mt-3 gap-3">
            <button
              className=" ml-10 mt-5 bg-custom-blue text-white px-2 py-3 rounded-lg transition duration-300 w-auto flex items-center text-left whitespace-nowrap hover:shadow-[0_0_15px_blue]"
              onClick={() => ("Contenido de Requisitos Generales")}
            >
              Requisitos Generales
            </button>
            <button
              className=" mt-5 ml-20 bg-custom-blue text-white px-2 py-3 rounded-lg transition duration-300 w-auto flex items-center text-left whitespace-nowrap hover:shadow-[0_0_15px_blue]"
              onClick={() => ("Contenido de Contratos de Cuentas")}
            >
              Contratos de Cuentas
            </button>
          </div>
        </div>

        {/* Recuadro con imagen y texto */}
        <div className="border-2 border-custom-blue p-4 rounded-lg flex flex-col items-center transition-all duration-300  hover:shadow-xl  group">
          <img src="/cuenta_corriente.png" alt="Cuenta Corriente" className="w-32 h-32 object-contain mb-5 transform transition-transform duration-500 hover:rotate-12" />
          <span className="text-[#00335f] text-lg font-semibold  transition duration-300">
            Cuenta Corriente
          </span>
          <ul className="list-none pl-0 space-y-3 text-lg text-[#00335f]">
            <li className="flex items-start">
              <span className="text-xl mr-2">✔</span>
              Personaliza tu chequera y obtenla de forma rápida y sencilla.
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-2">✔</span>
              Con tu tarjeta realiza compras de forma ágil y segura.
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-2">✔</span>
              Accede a sobregiros para cubrir necesidades de efectivo.
            </li>
          </ul>
          {/* Botones debajo de las imágenes */}
          <div className="flex justify-start w-full mt-3 gap-3">
            <button
              className=" ml-10 mt-20 bg-custom-blue text-white px-2 py-3 rounded-lg transition duration-300 w-auto flex items-center text-left whitespace-nowrap hover:shadow-[0_0_15px_blue]"
              onClick={() => ("Contenido de Requisitos Generales")}
            >
              Requisitos Generales
            </button>
            <button
              className="mt-20 ml-20 bg-custom-blue text-white px-2 py-3 rounded-lg transition duration-300 w-auto flex items-center text-left whitespace-nowrap hover:shadow-[0_0_15px_blue]"
              onClick={() => ("Contenido de Contratos de Cuentas")}
            >
              Contratos de Cuentas
            </button>
          </div>
        </div>

        {/* Recuadro con imagen y texto */}
        <div className="border-2 border-custom-blue p-4 rounded-lg flex flex-col items-center transition-all duration-300  hover:shadow-xl group">
          <img src="/cuenta_ahorro.png" alt="Cuenta de Ahorro" className="w-32 h-32 object-contain mb-3 transform transition-transform duration-500 hover:rotate-12" />
          <span className="text-[#00335f] text-lg font-semibold transition duration-300">
            Cuenta de Ahorros Programado
          </span>
          <ul className="list-none pl-0 space-y-3 text-lg text-[#00335f]">
            <li className="flex items-start">
              <span className="text-xl mr-2">✔</span>
              Sin comisión de administración y mantenimiento de la cuenta.
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-2">✔</span>
              Puedes controlar tus movimientos a través de nuestros Canales Electrónicos.
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-2">✔</span>
              Más de un millón de personas disfrutan ya de esta cuenta gratuita.
            </li>
          </ul>
          {/* Botones debajo de las imágenes */}
          <div className="flex justify-start w-full mt-3 gap-3">
            <button
              className="ml-10 mt-10 bg-custom-blue text-white px-2 py-3 rounded-lg transition duration-300 w-auto flex items-center text-left whitespace-nowrap hover:shadow-[0_0_15px_blue]"
              onClick={() => ("Contenido de Requisitos Generales")}
            >
              Requisitos Generales
            </button>
            <button
              className="mt-10 ml-20 bg-custom-blue text-white px-2 py-3 rounded-lg transition duration-300 w-auto flex items-center text-left whitespace-nowrap hover:shadow-[0_0_15px_blue]"
              onClick={() =>("Contenido de Contratos de Cuentas")}
            >
              Contratos de Cuentas
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


  {/* Beneficios sociales*/}
  {params.id === "benficios-sociales" && (
    <div className="flex w-full my-10 py-0 px-5 bg-white-100 rounded-lg shadow-md gap-5 transition-all duration-300 hover:shadow-xl">
      {/* Parte Izquierda */}
      <div className="group border-2 border-custom-blue rounded-lg w-full sm:w-1/2 p-5 flex flex-col justify-center items-start">
        <h2 className="flex items-center text-4xl">
          <span className=" text-black text-4xl mr-3 duration-1000">💼</span>
          Crédito y Ahorro:
        </h2>
        <h1 className="flex items-center font-bold mt-6">Acceso a Créditos Favorables:</h1>
        <p className="text-m leading-relaxed text-[#00335f] mb-5">
          Ofrecerán tasas de interés más bajas en préstamos que los bancos tradicionales. Esto permite a los asociados obtener financiamiento a condiciones más favorables.
        </p>

        <h1 className="flex items-center font-bold">
          Opciones de Ahorro:
        </h1>
        <p className="text-m leading-relaxed text-[#00335f] mb-5">
          Diseñarán opciones de ahorro que se adapten a las necesidades individuales, como cuentas de ahorro con beneficios adicionales.
        </p>

        {/* Contenedor de imagen centrada */}
        <div className="p-2 rounded-lg flex justify-center items-center ">
          <div className="group relative ">
            <img 
              src="/beneficio-1.avif" 
              alt="Inversiones" 
              className=" mr-40 rounded-lg w-[600px] h-[400px] object-cover mb-3 transition-transform duration-300 transform hover:scale-110" // Solo la imagen crece al pasar el mouse
            />
          </div>
        </div>
      </div>

      {/* Parte Derecha */}
      <div className="group border-2 border-custom-blue rounded-lg w-full sm:w-1/2 p-5 flex flex-col justify-start items-start">
        <h1 className="flex items-center text-4xl">
          <span className="text-6xl mr-3 text-green-500 animate-beat">♡</span>
          Bienestar y Salud:
        </h1>
        <h2 className="flex items-center font-bold mt-5">
          Seguros Asequibles:
        </h2>
        <p className="text-m leading-relaxed text-[#00335f] mb-5">
          Proporcionarán seguros y pólizas a precios accesibles para proteger a los asociados y sus familias.
        </p>

        <h2 className="flex items-center font-bold">
          Programas de Bienestar:
        </h2>
        <p className="text-m leading-relaxed text-[#00335f] mb-5">
          Diseñarán iniciativas que promuevan la salud, la alimentación saludable y el cuidado personal.
        </p>

        {/* Contenedor de imagen centrada */}
        <div className="p-2 rounded-lg flex justify-center items-center">
          <div className="group relative">
            <img 
              src="/beneficios-2.avif"
              alt="Bienestar"
              className="mr-40 rounded-lg w-[600px] h-[400px] object-cover mb-3 transition-transform duration-300 transform hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  )}

  {/* PAGINA  Inversiones*/}
  {params.id === "Inversiones" && (
    <div className="border 2 border-custom-blue flex w-full my-10 py-0 px-5 bg-white-100 rounded-lg shadow-md gap-5 transition-all duration-300 hover:shadow-xl hover:bg-custom-blue group">

    {/* Parte Izquierda */}
    <div className="w-full sm:w-1/2 p-5 flex flex-col justify-center items-start">
      <h2 className="text-5xl font-bold text-[#00335f] mb-5 text-center sm:text-center group-hover:text-white">
        ¡Haremos crecer tu dinero!
      </h2>
      <p className="text-m leading-relaxed text-[#00335f] mb-5 group-hover:text-white">
        Simula y crea tu inversión con el monto y plazo que prefieras. Recibirás intereses beneficiosos.
      </p>
      <p className="text-m leading-relaxed text-[#00335f] mb-5 group-hover:text-white">
        En el Proyecto de la Cooperativa Financiera ANEUPI nos dedicaremos a potenciar su patrimonio con estrategias financieras sólidas y personalizadas. Nuestro equipo de expertos está comprometido en brindarle soluciones rentables y seguras para alcanzar sus objetivos financieros. Estaremos aquí para guiarlo en cada paso de su camino hacia el éxito financiero.
      </p>
    </div>
  
    {/* Parte Derecha: Imagen */}
    <div className="w-full sm:w-1/2 flex justify-center items-center p-5">
      <div className="p-2 rounded-lg">
        <img 
          src="/inversiones.png" 
          alt="Inversiones" 
          className="w-full h-auto object-cover mb-3" 
        />
      </div>
    </div>
  
  </div>
  )}

  {params.id === "Inversiones" && (
  <div className="flex flex-wrap justify-between items-center w-full my-10 p-5 bg-white-100 rounded-lg shadow-md gap-5 border-2">
  <div className="flex-1 flex flex-col justify-center items-center p-5">
    <h2 className="text-3xl font-bold text-[#00335f] mb-2 text-center">
      Inversión rentable desde el primer día
    </h2>
    <p className="text-[#00335f] text-m font-semibold mt-3 text-center">
      Multiplicaremos tu dinero con un depósito a plazo fijo.
    </p>

    {/* Contenedor padre para los cuadros */}
    <div className="flex justify-start w-full mt-3 gap-8">
      {/* Primer Cuadro */}
      <div className="border-2 border-custom-blue p-3 rounded-lg w-full md:w-50 transition-all duration-300 hover:shadow-[0_0_15px_#3b82f6]">
        <h1 className="text-lg font-bold text-[#00335f] text-center">
          ¡Soy cliente y quiero invertir!
        </h1>
        <p className="text-sm text-[#00335f] text-center">
          Ingresa a tu Banca Online.
        </p>

        {/* Botones centrados */}
        <div className="flex justify-center w-full mt-3 gap-8">
          <button
            className="bg-custom-blue text-white px-2 py-2 rounded-lg hover:bg-custom-blue transition duration-300 hover:shadow-[0_0_15px_#3b82f6]"
            onClick={() => ("Contenido de Requisitos Generales")}
          >
            Ingresar Ahora
          </button>
          <button
            className="bg-custom-blue text-white px-2 py-2 rounded-lg hover:bg-custom-blue transition duration-300 hover:shadow-[0_0_15px_#3b82f6]"
            onClick={() => ("Contenido de Contratos de Cuentas")}
          >
            Ver Tutorial
          </button>
        </div>
        
        <ul className="list-none pl-0 space-y-2 text-sm text-[#00335f] mt-3">
          <li className="flex items-center">
            <span className="text-lg mr-2">➔</span>
            Haz clic en nuevos Productos.
          </li>
          <li className="flex items-center">
            <span className="text-lg mr-3">➔</span>
            Selecciona realiza una inversión.
          </li>
        </ul>
      </div>

      {/* Segundo Cuadro */}
      <div className="border-2 border-custom-blue p-3 rounded-lg w-full md:w-50 transition-all duration-300 hover:shadow-[0_0_15px_#3b82f6]">
        <h1 className="text-lg font-bold text-[#00335f] text-center">
          ¡No soy cliente y quiero invertir!
        </h1>
        <p className="text-sm text-[#00335f] text-center">
          Crea tu Cuenta de Ahorros o Corriente online en minutos.
        </p>

        {/* Botones centrados */}
        <div className="flex justify-center w-full mt-3 gap-8">
          <button
            className="bg-custom-blue text-white px-2 py-2 rounded-lg hover:bg-custom-blue transition duration-300 hover:shadow-[0_0_15px_#3b82f6]"
            onClick={() => ("Contenido de Requisitos de Cuenta Corriente")}
          >
            Abrir Cuenta
          </button>
          <button
            className="bg-custom-blue text-white px-2 py-2 rounded-lg hover:bg-custom-blue transition duration-300 hover:shadow-[0_0_15px_#3b82f6]"
            onClick={() =>("Contenido de Información Adicional")}
          >
            Simular Inversión
          </button>
        </div>

        <ul className="list-none pl-0 space-y-2 text-sm text-[#00335f] mt-3">
          <li className="flex items-center">
            <span className="text-lg mr-2">➔</span>
            Abre una Cuenta Online.
          </li>
          <li className="flex items-center">
            <span className="text-lg mr-2">➔</span>
            Crea tu inversión desde Banca Online.
          </li>
        </ul>
      </div>
    </div>
    <p className="text-[#00335f] text-m font-semibold mt-12 text-center">
    Si quieres información adicional de Tarifas de Servicios Financieros y tasas de interés haz clic Aquí.
    </p>
  </div>
</div>   
)}

{params.id === "Inversiones" && (
  <div className="border 2 border-custom-blue flex flex-col items-center w-full my-10 p-5 bg-custom-blue rounded-lg ">
    {/* Título Central */}
    <h2 className="text-3xl font-bold text-white mb-2 text-center mb-6">
    Futuros beneficios de tu Inversión
    </h2>
    {/* Contenedor de Cards */}
    <div className="flex flex-wrap justify-center gap-8">
      
      {/* Card 1 */}
      <div className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-white hover:shadow-xl hover:bg-custom-blue group w-full sm:w-64">
        <h1 className="text-white text-lg font-semibold group-hover:text-white transition duration-300 mb-2">
        Alto Rendimiento</h1>
        <img src="/alto-rendimiento.jpeg" alt="alto-rendimiento" className="w-32 h-32 object-contain mb-4 transform transition-transform duration-500 hover:rotate-12" />
        <p className="text-white text-m font-semibold group-hover:text-white transition duration-300 mt-4">
        Obtendrás intereses beneficiosos.</p>
      </div>

      {/* Card 2 */}
      <div className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-white hover:shadow-xl hover:bg-custom-blue group w-full sm:w-64">
        <h1 className="text-white text-lg font-semibold group-hover:text-white transition duration-300 mb-2">
        Flexibilidad
        </h1>
        <img src="/flexibilidad.jpeg" alt="flexibilidad" className="w-32 h-32 object-contain mb-4 transform transition-transform duration-500 hover:rotate-12" />
        <p className="text-white text-m font-semibold group-hover:text-white transition duration-300 mt-4">
        Define el tiempo de tu inversión.</p>
      </div>

      {/* Card 3 */}
      <div className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-white hover:shadow-xl hover:bg-custom-blue group w-full sm:w-64">
      <h1 className="text-white text-lg font-semibold group-hover:text-white transition duration-300 mb-2 ">
      Confianza
      </h1>
        <img src="/confianza.jpeg" alt="confianza" className="w-32 h-32 object-contain mb-4 transform transition-transform duration-500 hover:rotate-12" />
        <p className="text-white text-m font-semibold group-hover:text-white transition duration-300 mt-4">
        Está Cooperativa Financiera a futuro será la mejor calificada por su desempeño y servicios.</p>
      </div>
      {/* Card 4 */}
      <div className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center transition-all duration-300 hover:border-white hover:shadow-xl hover:bg-custom-blue group w-full sm:w-64">
      <h1 className="text-white text-lg font-semibold group-hover:text-white transition duration-300 mb-2 ">
      Eficiencia
        </h1>
        <img src="/eficiencia.jpeg" alt="eficiencia" className="w-32 h-32 object-contain mb-4 transform transition-transform duration-500 hover:rotate-12" />
        <p className="text-white text-m font-semibold group-hover:text-white transition duration-300 mt-4">
        Los Socios utilizarán una inversión como garantía de créditos en la cooperativa.</p></div>
    </div>
  </div>
  )}

  {params.id === "Inversiones" && (
    <div className="flex w-full my-10 py-0 px-5 bg-white-100 rounded-lg shadow-md gap-5 border-transparent shadow-none">

    {/* Parte Derecha: Imagen */}
    <div className="w-full sm:w-1/2 flex justify-center items-center p-5">
      <div className="p-2 rounded-lg">
        <img 
          src="/inversion.avif" 
          alt="Inversion" 
          className="w-full h-auto object-cover mb-3 rounded-lg shadow-md" 
        />
      </div>
    </div>

    {/* Parte Izquierda */}
    <div className="w-full sm:w-1/2 p-5 flex flex-col justify-center items-start">
      <h2 className="text-3xl font-bold text-[#00335f] mb-5 text-center sm:text-center group-hover:text-white">
      Tu nueva Inversión
      </h2>
      <p className="text-m leading-relaxed text-[#00335f] mb-5 group-hover:text-white">
      Especificaciones del depósito a plazo fijo para personas.
      </p>
      <p className="text-m leading-relaxed text-[#00335f] mb-5 group-hover:text-white">
      (En DESARROLLO)
      </p>
    </div>
  </div>
  )}


    {params.id === "Educacion-Financiera-Socios" && (
    <div className="flex justify-center  min-h-screen bg-gray-100">
      {/* Tarjeta activa */}
      <div className="relative w-[1040px] h-[400px] border-2 border-custom-blue p-6 bg-white rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105">
        
        {/* Mosaico */}
        <div className="text-center mb-3">
          <h1 className="text-5xl">{cards[activeIndex].emoji}</h1>
          <h2 className="text-2xl font-bold mt-3">{cards[activeIndex].title}</h2>
          <p className="text-gray-700 mt-2 font-bold">{cards[activeIndex].description}</p>
          <ul className="list-disc text-left text-gray-600 mt-4 pl-5">
            {cards[activeIndex].points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Botones de navegación fuera del borde */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
          {/* Botón de izquierda */}
          <button 
            onClick={prevCard} 
            className="bg-custom-blue text-white px-6 py-3 rounded-full shadow-md hover:bg-white hover:text-custom-blue absolute left-[-65px]">
            ◀
          </button>

          {/* Botón de derecha */}
          <button 
            onClick={nextCard} 
            className="bg-custom-blue text-white px-6 py-3 rounded-full shadow-md hover:bg-white hover:text-custom-blue absolute right-[-65px]">
            ▶
          </button>
        </div>

        {/* Numeración de las tarjetas */}
        <div className="mt-4 flex justify-center gap-3" >
        <div className='absolute bottom-[-65px] '>
        <div className="mb-1000">
          {cards.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setActiveIndex(index)} 
              className={`px-4 py-2 rounded-full ${activeIndex === index ? 'bg-custom-blue text-white' : 'bg-gray-200 text-gray-700'} hover:bg-custom-blue hover:text-white transition-all duration-300`}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
  )}



  


{params.id === "Pensiones" && (
    <div className="flex flex-col  items-center min-h-screen bg-gray-100 ">
    <div className="max-w-full mx-auto rounded-lg shadow-lg p-5 border-2 border-custom-blue  ">
      <h1 className="text-2xl font-bold text-center  rounded-lg hover:text-custom-blue">
        OBTENDRÁN UNA FORMA DE RECIBIR TUS PENSIONES A TU COMODIDAD (EN DESARROLLO)
      </h1>
    </div>  
    <div className="flex flex-row space-x-6 p-6 w-full">
    <div className="flex flex-col items-center border-2 bg-custom-blue hover:bg-white hover:text-custom-blue group p-6 rounded-lg transition-all duration-300 flex-1">
      <span className="emoji-class-one text-[100px] group-hover:text-custom-blue transition duration-300">
        {'💵'}</span>
      <p className="mt-1 text-white group-hover:text-custom-blue transition duration-300">
        Pagos en Efectivo
      </p>
    </div>
    <div className="flex flex-col items-center bg-custom-blue hover:bg-white hover:text-custom-blue group p-6 rounded-lg transition-all duration-300 flex-1">
      <span className="emoji-class-one text-[100px] group-hover:text-custom-blue transition duration-300">
        {'🏦'}</span>
      <p className="mt-1 text-white group-hover:text-custom-blue transition duration-300">
        Pagos en Cuenta de Ahorros
      </p>
    </div>
    </div>

    <p className="text-lg leading-relaxed mt-10 text-black   mb-5 group-hover:text-white">
    Realizarán tus retiros de pensiones eligiendo cualquiera de las dos formas de retiro a su comodidad.
          </p>
          <div className="flex w-full my-10 py-0 px-5 bg-white-100 rounded-lg shadow-md gap-5 border-transparent shadow-none">
        {/* Parte Izquierda */}
        <div className="w-full sm:w-1/2 p-5 flex flex-col justify-center items-start">
          <h2 className="text-5xl font-bold text-[#00335f] mb-5 text-center sm:text-center group-hover:text-white">
          Pensión Alimenticia
          </h2>
          <p className="text-m leading-relaxed text-[#00335f] mb-5 group-hover:text-white">
          Se podrá cobrar realizar cobros de pensiones alimenticias de manera confiable y accesibles de manera nacional.
          </p>
          
        </div>
      
        {/* Parte Derecha*/}
        <div className="w-full sm:w-1/2 flex justify-center items-center p-5">
          <div className="p-2 rounded-lg">
            <img 
              src="/pension-alimenticia.avif" 
              alt="Inversiones" 
              className="w-full h-auto object-cover mb-3" 
            />
          </div>
        </div>
        </div>
          

          <h1 className="text-4xl leading-relaxed  text-[#00335f] mb-5 group-hover:text-white">
          Pagos de Jubilaciones
          (En Desarrollo)
          </h1>

    <div className=" flex justify-center  min-h-screen bg-gray-100">

      {/* Tarjeta activa */}
      <div className=" relative w-[500px] h-[300px] border-2 border-custom-blue p-6 bg-white rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105">
        
        {/* Mosaico */}
        <div className="text-center mb-3">
          <h1 className="text-5xl">{cards1[activeIndex].title}</h1>
          {cards1[activeIndex].image && (
            <img 
              src={cards1[activeIndex].image} 
              alt={cards1[activeIndex].title} 
              className="w-[500px] h-[150px] object-contain mx-auto mt-3"
            />
          )}
          <p className="text-gray-700 mt-2 font-bold">{cards1[activeIndex].points}</p>
        </div>

        {/* Botones de navegación fuera del borde */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
          {/* Botón de izquierda */}
          <button 
            onClick={prevCard} 
            className="bg-custom-blue text-white px-6 py-3 rounded-full shadow-md hover:bg-white hover:text-custom-blue absolute left-[-65px]">
            ◀
          </button>

          {/* Botón de derecha */}
          <button 
            onClick={nextCard} 
            className="bg-custom-blue text-white px-6 py-3 rounded-full shadow-md hover:bg-white hover:text-custom-blue absolute right-[-65px]">
            ▶
          </button>
        </div>

        {/* Numeración de las tarjetas */}
      <div className="mt-4 flex justify-center gap-3" >
        <div className='absolute bottom-[-65px] '>
          <div className="mb-1000">
          {cards.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setActiveIndex(index)} 
              className={`px-2 py-2 rounded-full ${activeIndex === index ? 'bg-custom-blue text-white' : 'bg-gray-200 text-gray-700'} hover:bg-custom-blue hover:text-white transition-all duration-300`}>
              
            </button>
          ))}
            </div>
      </div>
    </div>
      
  </div>
  </div>
</div>
  )}
   
</main>
  );
};

export default SociosPage;
