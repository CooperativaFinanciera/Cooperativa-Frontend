import { HiArrowUpCircle } from "react-icons/hi2";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import benefiImage from '@/app/assets/image/benefi.png';
import socilImage from '@/app/assets/image/socil.png';
const SocialBenefitsPage: React.FC = () => {
  return (
    <>
      <main className="space-y-10 md:space-y-20">
        {/* Encabezado */}
        <header className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center rounded-lg ">
          <h1 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            Beneficios Sociales
          </h1>
          <p className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            Descubre los beneficios que ofrecemos para mejorar tu calidad de vida.
          </p>
        </header>
        {/* Sección de Beneficios */}
        <FadeInEffect className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
            {/* Tarjeta de Beneficio 1 */}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Crédito y Ahorro</h3>
              <h4 className="text-x1 font-bold mb-2 text-gray-900 dark:text-gray-100">Acceso a Créditos Favorables:</h4>
              <p className="text-gray-700 dark:text-gray-300">
              Ofrecerán tasas de interés más bajas en préstamos que los bancos tradicionales. Esto permite a los asociados obtener financiamiento a condiciones más favorables.
              </p>
              <h4 className="text-x1 font-bold mb-2 text-gray-900 dark:text-gray-100">Políticas de Ahorro Flexibles:</h4>
              <p className="text-gray-700 dark:text-gray-300">
              Diseñarán opciones de ahorro que se adapten a las necesidades individuales, como cuentas de ahorro con beneficios adicionales.
              </p>
            </div>

            {/* Tarjeta de Beneficio 2 */}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Bienestar y Salud</h3>
              <h4 className="text-x1 font-bold mb-2 text-gray-900 dark:text-gray-100">Seguros Asequibles:</h4>
              <p className="text-gray-700 dark:text-gray-300">
              Proporcionarán seguros y pólizas a precios accesibles para proteger a los asociados y sus familias.
              </p>
              <h4 className="text-x1 font-bold mb-2 text-gray-900 dark:text-gray-100">Programas de Bienestar:</h4>
              <p className="text-gray-700 dark:text-gray-300">
              Diseñarán iniciativas que promuevan la salud, la alimentación saludable y el cuidado personal.
              </p>
            </div>
          </div>
        </FadeInEffect>

        {/* Sección de Imágenes */}
        <FadeInEffect className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <img
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
              src={benefiImage.src}
              alt="Tarjeta de crédito"
            />
            <img
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
              src={socilImage.src}
              alt="Cuidado de la salud"
            />
          </div>
        </FadeInEffect>

        {/* Pie de Página */}
        <footer className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 rounded-lg">
          <div className="text-center text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            <p className="text-lg font-bold">
              Mejora tu futuro financiero con nuestros beneficios exclusivos.
            </p>
            <p className="text-sm">Contáctanos: +593 0981321044</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default SocialBenefitsPage;
