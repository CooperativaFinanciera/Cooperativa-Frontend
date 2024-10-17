import { HiArrowUpCircle } from "react-icons/hi2";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import inverImage from "@/app/assets/image/inver.jpg";
import coopeImage from "@/app/assets/image/coope.png";
const InvestmentsPage: React.FC = () => {
  return (
    <>
      <main className="space-y-10 md:space-y-20">
        <header className="p-8 bg-white dark:bg-black rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center rounded-lg">
          <h1 className="text-2xl font-bold mb-2">
            ¡Haremos crecer tu dinero!
          </h1>
          <p className="text-lg">
            Simula y crea tu inversión con el monto y plazo que prefieras.
            Recibirás intereses.
          </p>
        </header>
        <section className="flex flex-col md:flex-row items-center p-8 bg-white dark:bg-black rounded-2xl shadow-lg space-y-6 md:space-y-0 md:space-x-8">
          <FadeInEffect className="w-full md:w-1/2">
            <img
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
              src={inverImage.src}
              alt="Persona haciendo inversiones"
            />
          </FadeInEffect>
          <div className="w-full md:w-1/2 bg-black">
            <h2 className="text-xl font-bold mb-4 text-center md:text-left">
              Inversión rentable desde el primer día
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-center md:text-left">
              Multiplica tu dinero con un depósito a plazo fijo. Esta
              institución financiera a futuro nos dedicaremos a potenciar su
              patrimonio con estrategias financieras sólidas y personalizadas.
              Nuestro equipo de expertos estará comprometido en brindarle
              soluciones rentables y seguras para alcanzar sus objetivos
              financieros.
            </p>
          </div>
        </section>
        <section className="p-8 bg-white dark:bg-black rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center rounded-lg">
          <h2 className="text-xl font-bold mb-4">
            Inversión rentable desde el primer día
          </h2>
          <p className="mb-4">
            Multiplica tu dinero con un depósito a plazo fijo
          </p>
          <div className="flex justify-center space-x-4">
            <Button color="primary">
              <Link href="/accounts">Ingresa Ahora</Link>
            </Button>
            <Button color="secondary">Ver Tutorial</Button>
          </div>
          <ul className="mt-4 list-disc list-inside">
            <li>Haz clic en: Nuevos Productos.</li>
            <li>Selecciona: Realiza una inversión.</li>
          </ul>
        </section>
        <section className="p-8 bg-white dark:bg-black rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-6">
            Beneficios de tu Inversión
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <HiArrowUpCircle className="mx-auto text-4xl mb-2" />
              <h3 className="font-bold">Alto Rendimiento</h3>
              <p>Obtendrás intereses beneficiosos.</p>
            </div>
            <div>
              <HiArrowUpCircle className="mx-auto text-4xl mb-2" />
              <h3 className="font-bold">Flexibilidad</h3>
              <p>Define el tiempo de tu inversión.</p>
            </div>
            <div>
              <HiArrowUpCircle className="mx-auto text-4xl mb-2" />
              <h3 className="font-bold">Confianza</h3>
              <p>
                Está Cooperativa Financiera a futuro será la mejor calificada
                por su desempeño y servicios.
              </p>
            </div>
            <div>
              <HiArrowUpCircle className="mx-auto text-4xl mb-2" />
              <h3 className="font-bold">Eficiencia</h3>
              <p>
                Los Socios utilizarán una inversión como garantía de créditos en
                la cooperativa.
              </p>
            </div>
          </div>
        </section>
        <section className="p-8 bg-white dark:bg-black rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 flex flex-col md:flex-row items-center rounded-lg">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Tu nueva Inversión</h2>
            <p className="text-lg">
              Especificaciones del depósito a plazo fijo para personas.
            </p>
          </div>
          <FadeInEffect className="w-full md:w-1/2">
            <img
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
              src={coopeImage.src}
              alt="Gráfico de inversiones"
            />
          </FadeInEffect>
        </section>
        <section className="p-8 bg-white dark:bg-black rounded-2xl shadow-lg space-y-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
            Preguntas Frecuentes: Depósito a plazo fijo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 dark:bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2 text-center">
                ¿Qué es una inversión?
              </h3>
              <p className="text-center text-gray-700 dark:text-gray-300">
                Es un instrumento financiero que consiste en depositar una
                cantidad de dinero en un banco por un período de tiempo
                determinado, para la obtención de intereses. No tiene la
                flexibilidad de retiro inmediato.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2 text-center">
                ¿Cuáles son los requisitos para abrir una inversión?
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Ser mayor de 18 años.</li>
                <li>Tener cédula de identidad o pasaporte vigente.</li>
                <li>
                  Tener una cuenta de ahorros o corriente en la Cooperativa de
                  Ahorros.
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2 text-center">
                ¿Qué beneficios obtengo?
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Seguridad del dinero invertido.</li>
                <li>Rentabilidad fija.</li>
                <li>Medios de pago acorde a su necesidad.</li>
                <li>
                  Certificado negociable en diferentes Bolsas de Valores del
                  país.
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2 text-center">
                ¿Puedo precancelar mi inversión?
              </h3>
              <p className="text-center text-gray-700 dark:text-gray-300">
                Si tienen opción de precancelar pero pueden existir penalidades
                ya que no cumple con las condiciones establecidas en el plazo
                negociado.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-black p-6 rounded-lg shadow-lg md:col-span-2 lg:col-span-1 lg:col-start-2">
              <h3 className="text-lg font-bold mb-2 text-center">
                ¿Cuántas inversiones puedo realizar?
              </h3>
              <p className="text-center text-gray-700 dark:text-gray-300">
                Se puede realizar las inversiones necesarias que el cliente
                requiera, siempre y cuando cumpla con los requisitos
                establecidos.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default InvestmentsPage;
