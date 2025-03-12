import { FaPiggyBank, FaHeartbeat, FaTags } from "react-icons/fa";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import benefiImage from "@/app/assets/image/benefi.png";
import descuentoImage from "@/app/assets/image/descuento.png";
import socilImage from "@/app/assets/image/socil.png";
import socialbenefiImage from "@/app/assets/image/socialbenefi.png";

const SocialBenefitsPage: React.FC = () => {
  return (
    <>
      <main className="space-y-10 md:space-y-20">
        <header className="p-8 bg-[rgba(37,70,106,1)] text-white rounded-2xl shadow-xl text-center transform transition-all duration-300">
          <h1 className="text-3xl font-bold mb-2">Beneficios Sociales</h1>
          <p className="text-lg font-medium">
            Descubre los beneficios que ofrecemos para mejorar tu calidad de vida.
          </p>
        </header>

        <div className="flex items-center space-x-10 mt-8 px-4">
          <div className="flex-shrink-0">
            <img
              className="w-[400px] h-auto rounded-xl"
              src={socialbenefiImage.src}
              alt="Beneficios Sociales"
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-2xl font-semibold text-[rgba(37,70,106,1)]">
              Beneficios Especiales para Ti
            </h2>
            <p className="text-black text-lg">
              Nuestros beneficios están diseñados para mejorar tu bienestar y brindarte soluciones que
              contribuyan a una vida más plena. Aprovecha cada uno de los programas que tenemos
              disponibles para ti, que van desde servicios financieros hasta bienestar y descuentos exclusivos.
            </p>
          </div>
        </div>

        {/* TARJETAS DE BENEFICIOS */}
        <FadeInEffect className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
            {/* TARJETA 1 */}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 border border-[rgba(37,70,106,1)] hover:border-[rgba(37,70,106,1)]">
              <div className="flex items-center gap-4 mb-4">
                <FaPiggyBank className="text-[rgba(37,70,106,1)] text-3xl hover:text-blue-800 transition-colors duration-300" />
                <h3 className="text-2xl font-bold text-white bg-[rgba(37,70,106,1)] p-2 rounded-md">
                  Crédito y Ahorro
                </h3>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Acceso a Créditos Favorables
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Tasas de interés más bajas que los bancos tradicionales, ofreciendo mejores opciones de financiamiento.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-4">
                Políticas de Ahorro Flexibles
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Opciones de ahorro adaptadas a las necesidades individuales con beneficios adicionales.
              </p>
              <div className="relative w-full h-40">
                <img
                  className="w-full h-full object-cover rounded-xl mt-6 shadow-md hover:scale-105 transition-transform duration-300"
                  src={descuentoImage.src}
                  alt="Crédito y Ahorro"
                />
              </div>
            </div>

            {/* TARJETA 2 */}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 border border-[rgba(37,70,106,1)] hover:border-[rgba(37,70,106,1)]">
              <div className="flex items-center gap-4 mb-4">
                <FaHeartbeat className="text-red-500 text-3xl hover:text-red-700 transition-colors duration-300" />
                <h3 className="text-2xl font-bold text-white bg-[rgba(37,70,106,1)] p-2 rounded-md">
                  Bienestar y Salud
                </h3>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Seguros Asequibles
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Proporcionamos seguros y pólizas a precios accesibles para proteger a los asociados y sus familias.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-4">
                Programas de Bienestar
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Iniciativas que promueven la salud, alimentación saludable y el cuidado personal.
              </p>
              <div className="relative w-full h-40">
                <img
                  className="w-full h-full object-cover rounded-xl mt-6 shadow-md hover:scale-105 transition-transform duration-300"
                  src={socilImage.src}
                  alt="Bienestar y Salud"
                />
              </div>
            </div>

            {/* TARJETA 3 - DESCUENTOS Y CONVENIOS */}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 border border-[rgba(37,70,106,1)] hover:border-[rgba(37,70,106,1)]">
              <div className="flex items-center gap-4 mb-4">
                <FaTags className="text-green-500 text-3xl hover:text-green-700 transition-colors duration-300" />
                <h3 className="text-2xl font-bold text-white bg-[rgba(37,70,106,1)] p-2 rounded-md">
                  Descuentos y Convenios
                </h3>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Beneficios Exclusivos
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Accede a descuentos especiales en tiendas, farmacias y servicios gracias a convenios con diversas empresas.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-4">
                Promociones para Asociados
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Disfruta de ofertas exclusivas en educación, entretenimiento y más.
              </p>
              <div className="relative w-full h-40">
                <img
                  className="w-full h-full object-cover rounded-xl mt-6 shadow-md hover:scale-105 transition-transform duration-300"
                  src={benefiImage.src}
                  alt="Descuentos y Convenios"
                />
              </div>
            </div>
          </div>
        </FadeInEffect>

        <div className="flex justify-center mt-10">
          <Link href="/partners/FinancialEducationPartners" passHref>
            <Button
              className="text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 transition-all duration-300"
              size="lg"
            >
              ¡Descubre más!
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default SocialBenefitsPage;
