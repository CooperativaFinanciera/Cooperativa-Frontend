import { HiTrendingUp, HiChartBar, HiLightBulb } from "react-icons/hi";
import solucionesImage from "@/app/assets/image/soluciones.png";

import solucionesportadaImage from "@/app/assets/image/solucionesportada.png";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
      <header
  className="relative text-white px-8 py-16 font-bitter"
  style={{
    backgroundImage: `url(${solucionesportadaImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  }}
>
  <div className="absolute inset-0 bg-[rgba(0,0,0,0.65)]"></div>
  <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start space-y-4">
    <h1 className="text-5xl font-bold mb-2 border-b-4 border-white pb-4">
      Soluciones
    </h1>
    <p className="text-xl font-light">
      Proporcionamos soluciones integrales que impulsan el crecimiento y el éxito.
    </p>
  </div>
</header>

      <div className="flex items-center space-x-10 mt-8 px-4 border-4 border-[#25466A] rounded-xl p-6 shadow-lg">
        <div className="flex-shrink-0">
          <img
            className="w-[400px] h-auto rounded-xl"
            src={solucionesImage.src}
            alt="Beneficios Sociales"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold text-[rgba(37,70,106,1)]">
            Descubrirás oportunidades de inversión
          </h2>
          <p className="text-lg text-gray-500 text">(en desarrollo)</p>
          <p className="text-black text-lg">
            Descubrirás soluciones de inversión para alcanzar tus metas
            financieras con productos diversificados y asesoramiento
            personalizado. Consulta nuestras tasas de interés actualizadas en
            nuestra tabla.
          </p>
        </div>
      </div>

      <section className="p-8">
        <h3 className="text-2xl font-bold text-center text-[rgba(37,70,106,1)] mb-4">
          Invierte con Nosotros
        </h3>
        <h4 className="text-center">(En desarrollo)</h4>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-700 shadow-md rounded-lg">
            <thead>
              <tr className="bg-[rgba(37,70,106,1)] text-white">
                <th className="py-2 px-4 text-left">Producto</th>
                <th className="py-2 px-4 text-left">Descripción</th>
                <th className="py-2 px-4 text-left">Tasa de Interés (%)</th>
                <th className="py-2 px-4 text-left">Plazo Mínimo (meses)</th>
                <th className="py-2 px-4 text-left">Monto Mínimo de Inversión ($)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-b">
                <td className="py-3 px-4">
                  <HiTrendingUp className="inline-block text-[rgba(37,70,106,1)] text-xl mr-2" /> Cuenta de Ahorro
                </td>
                <td className="py-3 px-4">Cuenta con acceso fácil a tus fondos</td>
                <td className="py-3 px-4">desarrollo</td>
                <td className="py-3 px-4">N/A</td>
                <td className="py-3 px-4">desarrollo</td>
              </tr>
              <tr className="border-t border-b bg-gray-100 dark:bg-gray-800">
                <td className="py-3 px-4">
                  <HiChartBar className="inline-block text-[rgba(37,70,106,1)] text-xl mr-2" /> Certificado de Depósito a Plazo
                </td>
                <td className="py-3 px-4">Depósito a plazo con tasa fija garantizada</td>
                <td className="py-3 px-4">desarrollo</td>
                <td className="py-3 px-4">desarrollo</td>
                <td className="py-3 px-4">desarrollo</td>
              </tr>
              <tr className="border-t border-b">
                <td className="py-3 px-4">
                  <HiLightBulb className="inline-block text-[rgba(37,70,106,1)] text-xl mr-2" /> Fondos de Inversión
                </td>
                <td className="py-3 px-4">Diversificación en activos financieros</td>
                <td className="py-3 px-4">Varía</td>
                <td className="py-3 px-4">N/A</td>
                <td className="py-3 px-4">desarrollo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
