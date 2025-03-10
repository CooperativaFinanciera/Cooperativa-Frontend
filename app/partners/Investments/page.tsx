import { HiArrowCircleUp, HiTrendingUp, HiChartBar, HiLightBulb } from "react-icons/hi";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import inverImage from "@/app/assets/image/inver.jpg";
import coopeImage from "@/app/assets/image/coope.png";
import { HiArrowUpCircle } from "react-icons/hi2";

const InvestmentsPage: React.FC = () => {
  return (
    <>
      <main className="space-y-10 md:space-y-20">
        <header className="p-8 bg-[rgba(37,70,106,1)] text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center">
          <h1 className="text-3xl font-bold mb-2">¡Haremos crecer tu dinero!</h1>
          <p className="text-lg">Simula y crea tu inversión con el monto y plazo que prefieras. Recibirás intereses.</p>
        </header>

        <section className="flex flex-col md:flex-row items-center p-8 bg-[rgba(37,70,106,1)] text-white rounded-2xl shadow-lg space-y-6 md:space-y-0 md:space-x-8">
          <FadeInEffect className="w-full md:w-1/2">
            <img className="w-full h-80 object-cover rounded-2xl shadow-lg" src={inverImage.src} alt="Persona haciendo inversiones" />
          </FadeInEffect>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Inversión rentable desde el primer día</h2>
            <p className="text-gray-200">Multiplica tu dinero con un depósito a plazo fijo. Esta institución financiera potenciará tu patrimonio con estrategias financieras sólidas y personalizadas.</p>
          </div>
        </section>

        <section className="p-8 bg-[rgba(37,70,106,1)] text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center">
          <h2 className="text-xl font-bold mb-4">Empieza tu inversión ahora</h2>
          <p className="mb-4">Multiplica tu dinero con un depósito a plazo fijo</p>
          <div className="flex justify-center space-x-4">
            <Button color="primary" className="bg-white text-[rgba(37,70,106,1)] font-bold px-6 py-2 rounded-lg hover:bg-gray-200 transition">
              <Link href="/accounts">Ingresa Ahora</Link>
            </Button>
            <Button color="secondary" className="bg-gray-200 text-[rgba(37,70,106,1)] font-bold px-6 py-2 rounded-lg hover:bg-gray-300 transition">
              Ver Tutorial
            </Button>
          </div>
          <ul className="mt-4 list-disc list-inside text-white text-lg font-medium">
            <li>Haz clic en: <span className="font-bold">Nuevos Productos</span>.</li>
            <li>Selecciona: <span className="font-bold">Realiza una inversión</span>.</li>
          </ul>
        </section>

        <section className="p-8 bg-[rgba(37,70,106,1)] text-white rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-6">Beneficios de tu Inversión</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <HiTrendingUp className="mx-auto text-5xl mb-2" />
              <h3 className="font-bold">Alto Rendimiento</h3>
              <p>Obtendrás intereses beneficiosos.</p>
            </div>
            <div>
              <HiChartBar className="mx-auto text-5xl mb-2" />
              <h3 className="font-bold">Flexibilidad</h3>
              <p>Define el tiempo de tu inversión.</p>
            </div>
            <div>
              <HiLightBulb className="mx-auto text-5xl mb-2" />
              <h3 className="font-bold">Confianza</h3>
              <p>Seguridad y estabilidad financiera garantizadas.</p>
            </div>
            <div>
              <HiArrowUpCircle className="mx-auto text-5xl mb-2" />
              <h3 className="font-bold">Eficiencia</h3>
              <p>Utiliza tu inversión como garantía de crédito.</p>
            </div>
          </div>
        </section>

        <section className="p-8 bg-[rgba(37,70,106,1)] text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 flex flex-col md:flex-row items-center">
  <div className="w-full md:w-1/2 mb-6 md:mb-0">
    <h2 className="text-2xl font-bold mb-4">Tu nueva Inversión</h2>
    <p className="text-lg">Especificaciones del depósito a plazo fijo para personas. Conoce más sobre cómo puedes empezar a invertir con nuestra cooperativa y aprovechar nuestras mejores tasas y plazos.</p>
  </div>
  <FadeInEffect className="w-full md:w-1/2 max-w-md mx-auto">
    <img className="w-full h-auto object-cover rounded-2xl shadow-lg" src={coopeImage.src} alt="Gráfico de inversiones" />
  </FadeInEffect>
</section>


        <section className="p-8 bg-[rgba(37,70,106,1)] text-white rounded-2xl shadow-lg space-y-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Preguntas Frecuentes: Depósito a plazo fijo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2 text-center">¿Qué es una inversión?</h3>
              <p className="text-center">Es un instrumento financiero que permite obtener intereses al depositar dinero a plazo fijo.</p>
            </div>
            <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2 text-center">¿Cuáles son los requisitos para abrir una inversión?</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Ser mayor de 18 años.</li>
                <li>Tener cédula de identidad o pasaporte vigente.</li>
                <li>Poseer una cuenta de ahorros en la Cooperativa.</li>
              </ul>
            </div>
            <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2 text-center">¿Qué beneficios obtengo?</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Seguridad del dinero invertido.</li>
                <li>Rentabilidad fija.</li>
                <li>Certificado negociable en Bolsas de Valores.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default InvestmentsPage;
