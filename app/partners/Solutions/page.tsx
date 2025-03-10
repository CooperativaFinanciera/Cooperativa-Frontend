import { HiTrendingUp, HiChartBar, HiLightBulb } from "react-icons/hi";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
      <header className="p-8 bg-[rgba(37,70,106,1)] text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center">
        <h1 className="text-4xl font-bold">SOLUCIONES</h1>
        <p className="mt-4 text-lg">
          Proporcionamos soluciones integrales que impulsan el crecimiento y el éxito tanto de su empresa como de su equipo
        </p>
      </header>

      <section className="p-8 text-center md:text-left md:flex justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-[rgba(37,70,106,1)] mb-4">
            Descubrirás oportunidades de inversión
          </h2>
          <h3 className="text-center">(En desarrollo)</h3>
          <div className="mt-6">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/crecimiento-inversion-5015544-4185619.png?f=webp"
              alt="Crecimiento de inversión"
              className="w-96 mx-auto"
            />
          </div>
        </div>
        <div className="text-gray-600 dark:text-gray-400 md:w-1/2">
          <p>
            Descubrirás soluciones de inversión para alcanzar tus metas
            financieras con productos diversificados y asesoramiento
            personalizado. Consulta nuestras tasas de interés actualizadas en
            nuestra tabla.
          </p>
        </div>
      </section>

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
