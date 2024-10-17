import { HiArrowUpCircle } from "react-icons/hi2";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const FinancialEducationPartners: React.FC = () => {
  return (
    <>
      <main className="space-y-10 md:space-y-20">
        {/* Encabezado de cuentas */}
        <header className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center rounded-lg ">
          <h1 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            Esta institución financiera generará confianza para guiarte en tus mejores decisiones y no te equivoques.
          </h1>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            Educación financiera para nuestros futuros socios.
          </h3>
        </header>
        <h1 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 text-center">Temas que deberás conocer</h1>
        {/* Sección de Educación 1*/}
        <FadeInEffect className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
            {/* Tarjeta de Cuentas 1 */}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Crédito Responsable</h3>
              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Consejos Para el uso de un Crédito Responsable</h4>
              <p className="text-gray-700 dark:text-gray-300">
              <ul className="mt-4 list-disc list-inside">
                <li>Comprender cómo funcionan los préstamos a nivel nacional.</li>
                <li>as tasas de interés aplicadas actualmente.</li>
                <li>Conocimiento de consejos para mantener un buen historial crediticio.</li>
                <li>Plazos de pagos establecidos.</li>
                <li>Cantidad establecida para hacer créditos.</li>
              </ul>
              </p>
            </div>

            {/* Tarjeta de Educación 2*/}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Inversiones Básicas</h3>
              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Conoce Métodos para una buena Inversión.</h4>
              <p className="text-gray-700 dark:text-gray-300">
              <ul className="mt-4 list-disc list-inside">
                <li>Introducción a conceptos como acciones, bonos y fondos de inversión.</li>
                <li>Estrategias de Inversión para nuevos miembros.</li>
                <li>Conocimiento de tasas aplicadas en las Inversiones.</li>
                <li>Porcentaje atribuido por la Inversión.</li>
                <li>Evaluación de riesgos y beneficios al invertir.</li>
              </ul>
              </p>
            </div>

            {/* Tarjeta de Educación 3 */}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Planificación para la Jubilación</h3>
              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Sabrán los beneficios de tu Jubilación te servira mucho</h4>
              <p className="text-gray-700 dark:text-gray-300">
              <ul className="mt-4 list-disc list-inside">
                <li>Opciones de planes de pensiones y ahorro para el retiro.</li>
                <li>Estrategias para asegurar una jubilación cómoda.</li>
                <li>Impuesto aplicable para Jubilados.</li>
                <li>Pagos de pensiones en nuestras agencias.</li>
                <li>Seguridad de retiros de pensiones.</li>
              </ul>
              </p>
            </div>

             {/* Tarjeta de Educación 4 */}
             <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Seguros y Protección Financiera</h3>
              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Conocerán más de los seguros y sobre tus finanzas aseguradas.</h4>
              <p className="text-gray-700 dark:text-gray-300">
              <ul className="mt-4 list-disc list-inside">
                <li>Tipos de seguros (vida, salud, automóvil) y su importancia.</li>
                <li>Cómo elegir el seguro adecuado para las necesidades individuales.</li>
                <li>Explicar los principios cooperativos y la participación activa. </li>
                <li>Fomentar la comprensión de la gestión democrática y la toma de decisiones al elegir un seguro.</li>
              </ul>
              </p>
            </div>
          </div>
        </FadeInEffect>

        {/* Pie de Página */}
        <footer className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 rounded-lg">
          <div className="text-center text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            <p className="text-lg font-bold">
              Mejora tu futuro financiero con nuestros Ahorros exclusivos.
            </p>
            <p className="text-sm">Contáctanos: +593 0981321044</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default FinancialEducationPartners;