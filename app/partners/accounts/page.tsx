import { HiWallet, HiArrowUpCircle, HiCreditCard, HiCalendar, HiOutlineCurrencyDollar, HiOutlinePhone } from "react-icons/hi2";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { ul } from "framer-motion/client";
import { FaWhatsapp } from "react-icons/fa";

const accounts: React.FC = () => {
  return (
    <>
      <main className="space-y-10 md:space-y-20">
        <header className="p-8 text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center"
  style={{
    backgroundImage: `url('https://static.wixstatic.com/media/11062b_4f567bf2cb3c415a8721b0708b0568e7~mv2.jpg/v1/fill/w_794,h_400,al_t,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_4f567bf2cb3c415a8721b0708b0568e7~mv2.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-2xl"></div> {/* Capa oscura para mejor contraste */}
  <div className="relative z-10">
    <h1 className="text-2xl font-extrabold mb-2 text-gray-100">
      A FUTURO ABRIRÁN TU NUEVA CUENTA ONLINE EN 5 MINUTOS
    </h1>
  </div>
</header>

        <div className="flex justify-center gap-6 mt-8">
  {/* Card 1 */}
  <div className="p-6 text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center" 
    style={{ backgroundImage: `url('https://static.wixstatic.com/media/11062b_4f567bf2cb3c415a8721b0708b0568e7~mv2.jpg/v1/fill/w_794,h_400,al_t,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_4f567bf2cb3c415a8721b0708b0568e7~mv2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-2xl"></div> {/* Capa oscura */}
    <div className="relative z-10">
      <HiWallet className="text-4xl mb-4" />
      <h3 className="text-lg font-semibold">Cuentas de Ahorros</h3>
      <p className="text-sm">(En desarrollo)</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="p-6 bg-blue-600 text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center" 
    style={{ backgroundImage: `url('https://static.wixstatic.com/media/11062b_4f567bf2cb3c415a8721b0708b0568e7~mv2.jpg/v1/fill/w_794,h_400,al_t,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_4f567bf2cb3c415a8721b0708b0568e7~mv2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-2xl"></div> {/* Capa oscura */}
    <div className="relative z-10">
      <HiOutlineCurrencyDollar className="text-4xl mb-4" />
      <h3 className="text-lg font-semibold">Ahorro Rentable</h3>
      <p className="text-sm">(En desarrollo)</p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="p-6 bg-blue-900 text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center" 
    style={{ backgroundImage: `url('https://static.wixstatic.com/media/11062b_4f567bf2cb3c415a8721b0708b0568e7~mv2.jpg/v1/fill/w_794,h_400,al_t,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_4f567bf2cb3c415a8721b0708b0568e7~mv2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-2xl"></div> {/* Capa oscura */}
    <div className="relative z-10">
      <HiCreditCard className="text-4xl mb-4" />
      <h3 className="text-lg font-semibold">Cuenta Corriente</h3>
      <p className="text-sm">(En desarrollo)</p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="p-6 bg-blue-600 text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center" 
    style={{ backgroundImage: `url('https://static.wixstatic.com/media/11062b_4f567bf2cb3c415a8721b0708b0568e7~mv2.jpg/v1/fill/w_794,h_400,al_t,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_4f567bf2cb3c415a8721b0708b0568e7~mv2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-2xl"></div> {/* Capa oscura */}
    <div className="relative z-10">
      <HiCalendar className="text-4xl mb-4" />
      <h3 className="text-lg font-semibold">Ahorro Programado</h3>
      <p className="text-sm">(En desarrollo)</p>
    </div>
  </div>
</div>

        {/* Sección de Beneficios */}
        <FadeInEffect className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
            {/* Tarjeta de Cuentas 1 */}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-20"></div>
              <div className="relative z-10">
                <HiArrowUpCircle className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Cuentas de ahorros</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <ul className="mt-4 list-disc list-inside">
                    <li>Gana intereses desde el primer día.</li>
                    <li>Sin depósito inicial.</li>
                    <li>Realiza depósitos, retiros, transferencias, pagos en nuestras agencias y canales electrónicos.</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* Tarjeta de Cuentas 2 */}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-green-500 opacity-20"></div>
              <div className="relative z-10">
                <HiArrowUpCircle className="text-4xl text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Cuentas de ahorros rentables</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <ul className="mt-4 list-disc list-inside">
                    <li>Gana intereses anuales.</li>
                    <li>Sin depósito inicial.</li>
                    <li>Realiza depósitos, retiros, transferencias, pagos en nuestras agencias y canales electrónicos.</li>
                    <li>Aplica condiciones.</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* Tarjeta de Cuentas 3 */}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 opacity-20"></div>
              <div className="relative z-10">
                <HiArrowUpCircle className="text-4xl text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Cuenta Corriente</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <ul className="mt-4 list-disc list-inside">
                    <li>Personaliza tu chequera y obtenla de forma rápida y sencilla.</li>
                    <li>Con tu tarjeta realiza compras de forma ágil y segura.</li>
                    <li>Accede a sobregiros para cubrir necesidades de efectivo.</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* Tarjeta de Cuentas 4 */}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-purple-500 opacity-20"></div>
              <div className="relative z-10">
                <HiArrowUpCircle className="text-4xl text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Cuenta de ahorros programado</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <ul className="mt-4 list-disc list-inside">
                    <li>Sin comisión de administración y mantenimiento de la cuenta.</li>
                    <li>Puedes controlar tus movimientos a través de nuestros Canales Electrónicos.</li>
                    <li>Más de un millón de personas disfrutan ya de esta cuenta gratuita.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </FadeInEffect>

        {/* Pie de Página */}
        <footer className="p-8 bg-blue-100 text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center">
  <div className="text-center text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
    <p className="text-lg font-bold">
      Mejora tu futuro financiero con nuestros Ahorros exclusivos.
    </p>
    <p className="text-sm flex items-center justify-center gap-2">
      <span>¿Tienes dudas? Contáctanos:</span>
      <a
        href="https://wa.me/5930981321044"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-green-500 hover:text-green-600 transition duration-300">
        <FaWhatsapp className="text-2xl" />
        +593 0981321044
      </a>
    </p>
  </div>
</footer>

      </main>
    </>
  );
};

export default accounts;
