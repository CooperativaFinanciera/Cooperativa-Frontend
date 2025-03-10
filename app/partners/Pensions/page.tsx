"use client"; 

import { useState } from 'react';
import PagoImage from "@/app/assets/image/pago.jpg";
import CuentaImage from "@/app/assets/image/cuenta.png";
import JubiImage from "@/app/assets/image/jubi.png";
import VejezImage from "@/app/assets/image/vejez.png";
import DiscaImage from "@/app/assets/image/disca.png";
import { FaMoneyBillWave, FaCreditCard, FaClock, FaBriefcase, FaWheelchair } from "react-icons/fa";
import { Button } from "@nextui-org/react";

const Pensions = () => {
  const [showMoreInfoVejez, setShowMoreInfoVejez] = useState(false);
  const [showMoreInfoJubi, setShowMoreInfoJubi] = useState(false);
  const [showMoreInfoDisca, setShowMoreInfoDisca] = useState(false);

  const toggleMoreInfoVejez = () => setShowMoreInfoVejez(!showMoreInfoVejez);
  const toggleMoreInfoJubi = () => setShowMoreInfoJubi(!showMoreInfoJubi);
  const toggleMoreInfoDisca = () => setShowMoreInfoDisca(!showMoreInfoDisca);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-700 dark:text-gray-300">
      <header className="bg-[#00325e] text-white py-4 text-center rounded-lg">
        <h1 className="text-2xl font-bold">
          OBTENDRÁN UNA FORMA DE RECIBIR TUS PENSIONES A TU COMODIDAD
        </h1>
      </header>
      
      <section className="p-8 text-center">
        <h2 className="text-xl font-bold text-[#00325e] dark:text-gray-100 mb-4">
          Formas de Recibir tus Pensiones (En Desarrollo)
        </h2>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
          
          <div className="bg-gray-100 dark:bg-black p-6 rounded-lg shadow-lg w-full md:w-1/3 hover:scale-105 transform transition duration-300 border-2 border-[rgba(37,70,106,1)]">
            <img
              src={PagoImage.src}
              alt="Pagos en Efectivo"
              className="mx-auto mb-4 rounded-xl w-full h-80 object-cover"
            />
            <FaMoneyBillWave className="text-[#00325e] text-4xl mb-4 mx-auto"/>
            <h3 className="text-lg font-bold mb-2">Pagos en Efectivo (En Desarrollo)</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Recibe tus pagos en efectivo con facilidad y seguridad en cualquier agencia.
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-black p-6 rounded-lg shadow-lg w-full md:w-1/3 hover:scale-105 transform transition duration-300 border-2 border-[rgba(37,70,106,1)]">
            <img
              src={CuentaImage.src}
              alt="Pagos en Cuenta de Ahorros"
              className="mx-auto mb-4 rounded-xl w-full h-80 object-cover"
            />
            <FaCreditCard className="text-[#00325e] text-4xl mb-4 mx-auto"/>
            <h3 className="text-lg font-bold mb-2">Pagos en Cuenta de Ahorros (En Desarrollo)</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Realiza tus retiros de pensión directamente desde tu cuenta de ahorros.
            </p>
          </div>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Elige entre pagos en efectivo o transferencia a tu cuenta de ahorros para tu comodidad.
        </p>
      </section>
      
      <section className="p-8 bg-gray-50 dark:bg-black rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold text-center text-[#00325e] dark:text-gray-100 mb-4">
          Pagos de Jubilaciones (En Desarrollo)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300 border-2 border-[rgba(37,70,106,1)]">
            <img
              src={VejezImage.src}
              alt="Por Vejez"
              className="mx-auto mb-4 rounded-xl w-full h-80 object-cover"
            />
            <FaClock className="text-[#00325e] text-4xl mb-4 mx-auto"/>
            <h3 className="text-lg font-bold mb-2 text-[#00325e]">Por Vejez (En Desarrollo)</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Cobros seguros y confiables para aquellos que alcanzan la jubilación por vejez.
            </p>
            <Button color="primary" className="mt-4" onClick={toggleMoreInfoVejez}>
              Más Información
            </Button>
            
            {showMoreInfoVejez && (
              <div className="mt-4 text-gray-600 dark:text-gray-400">
                <p>
                Los pagos por pensión por vejez son una opción segura y confiable para las personas que han alcanzado la edad de jubilación. Este servicio garantiza que puedas recibir tu pensión de manera eficiente, directa y sin complicaciones. Con un proceso fácil y seguro, te aseguramos que disfrutarás de la tranquilidad financiera en tu retiro. Accede a tu pensión por vejez a través de nuestros métodos disponibles, diseñados para adaptarse a tus necesidades.
                </p>
              </div>
            )}
          </div>
          
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300 border-2 border-[rgba(37,70,106,1)]">
            <img
              src={JubiImage.src}
              alt="Jubilación Patronal"
              className="mx-auto mb-4 rounded-xl w-full h-80 object-cover"
            />
            <FaBriefcase className="text-[#00325e] text-4xl mb-4 mx-auto"/>
            <h3 className="text-lg font-bold mb-2 text-[#00325e]">Jubilación Patronal (En Desarrollo)</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Información sobre cómo gestionar tu jubilación patronal de manera eficiente.
            </p>
            <Button color="primary" className="mt-4" onClick={toggleMoreInfoJubi}>
              Más Información
            </Button>
            
            {showMoreInfoJubi && (
              <div className="mt-4 text-gray-600 dark:text-gray-400">
                <p>
                La jubilación patronal es un derecho que los trabajadores adquieren tras cumplir con los requisitos establecidos por su empleador. Este servicio te ayuda a gestionar tu pensión de jubilación patronal de manera eficiente, asegurando un proceso ágil y sin estrés. Te ofrecemos todas las herramientas necesarias para que puedas disfrutar de tu retiro con tranquilidad y estabilidad financiera, manteniendo tu calidad de vida tras la jubilación.
                </p>
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300 border-2 border-[rgba(37,70,106,1)]">
            <img
              src={DiscaImage.src}
              alt="Por Discapacidad"
              className="mx-auto mb-4 rounded-xl w-full h-80 object-cover"
            />
            <FaWheelchair className="text-[#00325e] text-4xl mb-4 mx-auto"/>
            <h3 className="text-lg font-bold mb-2 text-[#00325e]">Por Discapacidad (En Desarrollo)</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Realiza cobros de pensión por discapacidad con total seguridad y confianza.
            </p>
            <Button color="primary" className="mt-4" onClick={toggleMoreInfoDisca}>
              Más Información
            </Button>
            
            {showMoreInfoDisca && (
              <div className="mt-4 text-gray-600 dark:text-gray-400">
                <p>
                La pensión por discapacidad está destinada a aquellas personas que, debido a una condición de discapacidad, no pueden continuar trabajando en sus ocupaciones habituales. Este servicio te permite recibir apoyo económico y vivir con la tranquilidad de contar con una fuente de ingreso estable. Nuestro sistema de pensión por discapacidad está diseñado para brindarte la seguridad financiera que necesitas para llevar una vida digna y sin preocupaciones económicas.
              </p>
              </div>
            )}
          </div>

        </div>
      </section>

      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-lg font-bold mb-2 text-[#00325e]">Pensión Alimenticia</h2>
        <h4 className="text-gray-600 dark:text-gray-400">
          Realiza cobros de pensión alimenticia de manera confiable y accesible a nivel nacional.
        </h4>
        <Button color="primary" className="mt-4" onClick={() => window.open('https://www.inclusion.gob.ec/wp-content/uploads/2025/02/TABLA-DE-PENSIONES-2025.pdf', '_blank')}>Más Información</Button>
      </div>
    </div>
  );
};

export default Pensions;
