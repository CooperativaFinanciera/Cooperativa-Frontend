import { HiArrowUpCircle } from "react-icons/hi2";
import { FaPiggyBank, FaChartLine, FaUniversity, FaShieldAlt, FaWhatsapp, FaBook } from "react-icons/fa"; // Agregamos un icono extra (FaBook) para el card

import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const FinancialEducationPartners: React.FC = () => {
  return (
    <>
      <main className="space-y-10 md:space-y-20 bg-white py-12">
        <header className="relative p-16 bg-cover bg-center bg-[url('https://static.wixstatic.com/media/11062b_4f567bf2cb3c415a8721b0708b0568e7~mv2.jpg/v1/fill/w_794,h_400,al_t,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_4f567bf2cb3c415a8721b0708b0568e7~mv2.jpg')] text-white rounded-2xl shadow-xl text-center transform transition-all duration-300">
          <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
          <h1 className="text-3xl font-bold mb-2 relative z-10">
            TU FUTURO FINANCIERO COMIENZA AQUÍ
          </h1>
          <h3 className="text-2xl font-bold mb-2 relative z-10">
            ¡Educación financiera para nuestros futuros socios!
          </h3>
        </header>

        <div className="max-w-4xl mx-auto p-6 bg-[#234263] text-white rounded-lg shadow-lg flex items-center gap-4">
          <FaBook className="text-3xl text-white-400" />
          <h1 className="text-4xl font-bold mb-2 text-center flex-1">Temas que deberás conocer</h1>
        </div>

        <div className="flex justify-center gap-8 mt-8">
          <div className="flex flex-col w-full max-w-4xl">
            <FadeInEffect className="flex flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                {/* Tarjetas educativas */}
                <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 border-4 border-[#234263]">
                  <div className="flex items-center gap-4 mb-4">
                    <FaPiggyBank className="text-blue-600 text-3xl" />
                    <h3 className="text-xl font-bold mb-2 text-white bg-[#234263] p-2 rounded-lg">Crédito Responsable</h3>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Consejos para el uso de un Crédito Responsable</h4>
                  <div className="text-gray-700 dark:text-gray-300">
                    <ul className="mt-4 list-disc list-inside">
                      <li>Comprender cómo funcionan los préstamos a nivel nacional.</li>
                      <li>Las tasas de interés aplicadas actualmente.</li>
                      <li>Consejos para mantener un buen historial crediticio.</li>
                      <li>Plazos de pagos establecidos.</li>
                      <li>Cantidad establecida para hacer créditos.</li>
                    </ul>
                  </div>
                </div>

                {/* Tarjeta de Educación 2 */}
                <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 border-4 border-[#234263]">
                  <div className="flex items-center gap-4 mb-4">
                    <FaChartLine className="text-green-500 text-3xl" />
                    <h3 className="text-xl font-bold mb-2 text-white bg-[#234263] p-2 rounded-lg">Inversiones Básicas</h3>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Conoce Métodos para una buena Inversión.</h4>
                  <div className="text-gray-700 dark:text-gray-300">
                    <ul className="mt-4 list-disc list-inside">
                      <li>Introducción a conceptos como acciones, bonos y fondos de inversión.</li>
                      <li>Estrategias de Inversión para nuevos miembros.</li>
                      <li>Conocimiento de tasas aplicadas en las Inversiones.</li>
                      <li>Porcentaje atribuido por la Inversión.</li>
                      <li>Evaluación de riesgos y beneficios al invertir.</li>
                    </ul>
                  </div>
                </div>

                {/* Tarjeta de Educación 3 */}
                <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 border-4 border-[#234263]">
                  <div className="flex items-center gap-4 mb-4">
                    <FaUniversity className="text-purple-600 text-3xl" />
                    <h3 className="text-xl font-bold mb-2 text-white bg-[#234263] p-2 rounded-lg">Planificación para la Jubilación</h3>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Sabrán los beneficios de tu Jubilación te servirá mucho</h4>
                  <div className="text-gray-700 dark:text-gray-300">
                    <ul className="mt-4 list-disc list-inside">
                      <li>Opciones de planes de pensiones y ahorro para el retiro.</li>
                      <li>Estrategias para asegurar una jubilación cómoda.</li>
                      <li>Impuestos aplicables para Jubilados.</li>
                      <li>Pagos de pensiones en nuestras agencias.</li>
                      <li>Seguridad de retiros de pensiones.</li>
                    </ul>
                  </div>
                </div>

                {/* Tarjeta de Educación 4 */}
                <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 border-4 border-[#234263]">
                  <div className="flex items-center gap-4 mb-4">
                    <FaShieldAlt className="text-red-600 text-3xl" />
                    <h3 className="text-xl font-bold mb-2 text-white bg-[#234263] p-2 rounded-lg">Seguros y Protección Financiera</h3>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Conocerán más sobre los seguros y tus finanzas aseguradas.</h4>
                  <div className="text-gray-700 dark:text-gray-300">
                    <ul className="mt-4 list-disc list-inside">
                      <li>Tipos de seguros (vida, salud, automóvil) y su importancia.</li>
                      <li>Cómo elegir el seguro adecuado para las necesidades individuales.</li>
                      <li>Explicar los principios cooperativos y la participación activa.</li>
                      <li>Fomentar la comprensión de la gestión democrática y la toma de decisiones al elegir un seguro.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInEffect>
          </div>
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/vector-gratis/joven-posicion-aislado-icono_18591-83052.jpg?t=st=1741361530~exp=1741365130~hmac=437249d6fe5dffe8d26adc1c5bb7fdfd9781f184cccb79884ddd548629f735e6&w=740"
              alt="Educación financiera"
              className="max-w-xs rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>

        {/* Pie de Página */}
        <footer className="p-8 bg-[#234263] text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 rounded-lg border-4 border-[#234263] flex flex-col items-center space-y-6">
          <div className="text-center text-xl font-bold mb-4">
            <p className="text-lg font-bold">
              Mejora tu futuro financiero con nuestros Ahorros exclusivos.
            </p>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <a
              href="https://wa.me/5930981321044"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#25d366] text-white rounded-full p-3 hover:bg-[#128c7e] transform transition duration-300"
            >
              <FaWhatsapp className="text-3xl" />
              <span className="ml-2 text-lg font-medium">¡Contáctanos por WhatsApp!</span>
            </a>
          </div>

          <div className="flex gap-6 mb-4">
            <Link href="/terms" className="text-gray-300 hover:text-white">
              Términos y Condiciones
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-white">
              Política de Privacidad
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
};

export default FinancialEducationPartners;
