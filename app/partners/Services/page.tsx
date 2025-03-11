"use client";

import {
  HiHome,
  HiMiniPhone,
  HiMiniWifi,
  HiOutlineBanknotes,
  HiOutlineLightBulb,
  HiTruck,
} from "react-icons/hi2";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const Services = () => {
  const [expandedServices, setExpandedServices] = useState<string[]>([]);

  const handleMoreInfo = (service: string) => {
    if (expandedServices.includes(service)) {
      setExpandedServices(expandedServices.filter((s) => s !== service));
    } else {
      setExpandedServices([...expandedServices, service]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-700 dark:text-gray-300">
      <header className="bg-[rgba(37,70,106,1)] text-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
        <h1 className="text-4xl font-bold">Servicios Disponibles</h1>
        <p className="mt-4 text-xl">
          Explora los servicios que tenemos a tu disposición para facilitarte la vida financiera.
        </p>
        <p className="text-lg mt-2 font-medium italic">(En desarrollo)</p>
      </header>
      <section className="py-12 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Servicio Eléctrico */}
          <div className="bg-white dark:bg-white text-[#00325e] p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 border-2 border-[#00325e]">
            <HiOutlineLightBulb className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Servicio Eléctrico</h3>
            <Button color="primary" className="mt-4" onClick={() => handleMoreInfo("Servicio Eléctrico")}>
              Más Información
            </Button>
            {expandedServices.includes("Servicio Eléctrico") && (
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Con nuestro <strong>Servicio Eléctrico</strong>, te ofrecemos tarifas competitivas y un acceso
                rápido a tu consumo. Además, podrás disfrutar de opciones de pago flexibles que se adaptan a tu
                estilo de vida. Mantente al tanto de las tarifas actualizadas y planifica tu consumo de manera
                eficiente para evitar sorpresas. ¡Deja que nosotros nos encarguemos de la energía mientras tú te
                concentras en lo que importa!
              </p>
            )}
          </div>
          
          {/* Servicio Potable */}
          <div className="bg-white dark:bg-white text-[#00325e] p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 border-2 border-[#00325e]">
            <HiHome className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Servicio Potable</h3>
            <Button color="primary" className="mt-4" onClick={() => handleMoreInfo("Servicio Potable")}>
              Más Información
            </Button>
            {expandedServices.includes("Servicio Potable") && (
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Nuestro <strong>Servicio Potable</strong> te ofrece el agua limpia y segura que necesitas para
                tu día a día. Sabemos que el agua es esencial, por eso te proporcionamos un servicio confiable
                que garantiza el acceso a agua de calidad. Además, puedes consultar nuestras tarifas y realizar
                tus pagos en línea de manera fácil y rápida. ¡Hidratarte nunca ha sido tan fácil y accesible!
              </p>
            )}
          </div>
          
          {/* Predios Urbanos */}
          <div className="bg-white dark:bg-white text-[#00325e] p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 border-2 border-[#00325e]">
            <HiOutlineBanknotes className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Predios Urbanos</h3>
            <Button color="primary" className="mt-4" onClick={() => handleMoreInfo("Predios Urbanos")}>
              Más Información
            </Button>
            {expandedServices.includes("Predios Urbanos") && (
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Con el servicio de <strong>Predios Urbanos</strong>, tienes a tu disposición una solución para
                gestionar los pagos de impuestos de tus propiedades. Ya sea que necesites realizar pagos de
                impuestos prediales o mantener tus predios urbanos al día, nosotros te brindamos un sistema
                fácil de usar y accesible en línea. ¡No más complicaciones al manejar tus propiedades!
              </p>
            )}
          </div>
          
          {/* Internet */}
          <div className="bg-white dark:bg-white text-[#00325e] p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 border-2 border-[#00325e]">
            <HiMiniWifi className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Internet</h3>
            <Button color="primary" className="mt-4" onClick={() => handleMoreInfo("Internet")}>
              Más Información
            </Button>
            {expandedServices.includes("Internet") && (
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                En un mundo conectado, el acceso a <strong>Internet</strong> es vital. Con nuestro servicio de
                Internet de alta velocidad, podrás navegar, trabajar y comunicarte sin interrupciones. Ya sea
                que necesites un plan para tu hogar o para tu oficina, te ofrecemos opciones flexibles que se
                adaptan a tus necesidades. ¡Aprovecha los beneficios de una conexión rápida y confiable!
              </p>
            )}
          </div>
          
          {/* Telefonía */}
          <div className="bg-white dark:bg-white text-[#00325e] p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 border-2 border-[#00325e]">
            <HiMiniPhone className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Telefonía</h3>
            <Button color="primary" className="mt-4" onClick={() => handleMoreInfo("Telefonía")}>
              Más Información
            </Button>
            {expandedServices.includes("Telefonía") && (
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Mantente conectado con el mundo a través de nuestro servicio de <strong>Telefonía</strong>. Ofrecemos
                tarifas competitivas para llamadas nacionales e internacionales. Además, podrás gestionar tus pagos
                y recargas en línea, lo que te da comodidad y flexibilidad. ¡Hablar nunca ha sido tan sencillo y
                económico!
              </p>
            )}
          </div>
          
          {/* Pensión Alimenticia */}
          <div className="bg-white dark:bg-white text-[#00325e] p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 border-2 border-[#00325e]">
            <HiTruck className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Pensión Alimenticia</h3>
            <Button color="primary" className="mt-4" onClick={() => handleMoreInfo("Pensión Alimenticia")}>
              Más Información
            </Button>
            {expandedServices.includes("Pensión Alimenticia") && (
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                El servicio de <strong>Pensión Alimenticia</strong> te brinda una plataforma segura para gestionar
                y realizar tus pagos de pensión alimentaria. Nos encargamos de que el proceso sea sencillo, rápido
                y transparente. Conoce más sobre las tarifas, opciones de pago y cómo puedes facilitar este importante
                compromiso de manera confiable.
              </p>
            )}
          </div>
        </div>
        
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p className="text-lg font-medium">
            En esta institución financiera podrás a futuro realizar pagos de
            servicios para que tengas una facilidad.
          </p>
          <p className="mt-4 text-base">
            Estos servicios serán de ayuda para que puedas realizarlos de manera
            amplia y segura además con confianza y sin contratiempos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
