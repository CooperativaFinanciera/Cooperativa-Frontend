import { HiArrowUpCircle } from "react-icons/hi2";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { ul } from "framer-motion/client";

const accounts: React.FC = () => {
  return (
    <>
      <main className="space-y-10 md:space-y-20">
        {/* Encabezado de cuentas */}
        <header className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center rounded-lg ">
          <h1 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            A FUTURO ABRIRÁN TU NUEVA CUENTA ONLINE EN 5 MINUTOS
          </h1>
        </header>
        {/* Sección de Beneficios */}
        <FadeInEffect className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
            {/* Tarjeta de Cuentas 1 */}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Cuentas de ahorros</h3>
              <p className="text-gray-700 dark:text-gray-300">
              <ul className="mt-4 list-disc list-inside">
                <li>Gana intereses desde el primer día.</li>
                <li>Sin depósito inicial.</li>
                <li>Realiza depósitos, retiros, transferencias, pagos en nuestras agencias y canales electrónicos.</li>
              </ul>
              </p>
            </div>

            {/* Tarjeta de Cuentas 2 */}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Cuentas de ahorros rentables</h3>
              <p className="text-gray-700 dark:text-gray-300">
              <ul className="mt-4 list-disc list-inside">
                <li>Gana intereses anuales.</li>
                <li>Sin depósito inicial.</li>
                <li>Realiza depósitos, retiros, transferencias, pagos en nuestras agencias y canales electrónicos.</li>
                <li>Aplica condiciones</li>
              </ul>
              </p>
            </div>

            {/* Tarjeta de Cuentas 3 */}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Cuenta Corriente</h3>
              <p className="text-gray-700 dark:text-gray-300">
              <ul className="mt-4 list-disc list-inside">
                <li>Personaliza tu chequera y obtenla de forma rápida y sencilla.</li>
                <li>Con tu tarjeta realiza compras de forma ágil y segura.</li>
                <li>Accede a sobregiros para cubrir necesidades de efectivo.</li>
              </ul>
              </p>
            </div>

             {/* Tarjeta de Cuentas 4 */}
             <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Cuenta de ahorros programado</h3>
              <p className="text-gray-700 dark:text-gray-300">
              <ul className="mt-4 list-disc list-inside">
                <li>Sin comisión de administración y mantenimiento de la cuenta.</li>
                <li>Puedes controlar tus movimientos a través de nuestros Canales Electrónicos.</li>
                <li>Más de un millón de personas disfrutan ya de esta cuenta gratuita. </li>
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

export default accounts;