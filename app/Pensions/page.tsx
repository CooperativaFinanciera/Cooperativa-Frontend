import PagoImage from "@/app/assets/image/pago.jpg";
import CuentaImage from "@/app/assets/image/Cuenta.jpg";
import JubiImage from "@/app/assets/image/Jubi.jpg";
import VejezImage from "@/app/assets/image/Vejez.jpg";
import DiscaImage from "@/app/assets/image/Disca.jpg";
const Pensions = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-700 dark:text-gray-300">
      <header className="bg-black text-white py-4 text-center rounded-lg">
        <h1 className="text-2xl font-bold">
          OBTENDRÁN UNA FORMA DE RECIBIR TUS PENSIONES A TU COMODIDAD
        </h1>
      </header>
      <section className="p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Formas de Recibir tus Pensiones (En Desarrollo)
        </h2>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="bg-gray-100 dark:bg-black p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <img
              src={PagoImage.src}
              alt="Pagos en Efectivo"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-bold mb-2">
              Pagos en Efectivo (En Desarrollo)
            </h3>
          </div>
          <div className="bg-gray-100 dark:bg-black p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <img
              src={CuentaImage.src}
              alt="Pagos en Cuenta de Ahorros"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-bold mb-2">
              Pagos en Cuenta de Ahorros (En Desarrollo)
            </h3>
          </div>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Realizarán tus retiros de pensiones eligiendo cualquiera de las dos
          formas de retiro a su comodidad.
        </p>
      </section>
      <section className="p-8 bg-gray-50 dark:bg-black rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">
          Pagos de Jubilaciones (En Desarrollo)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg text-center">
            <img
              src={VejezImage.src}
              alt="Por Vejez"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-bold mb-2">
              Por Vejez (En Desarrollo)
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Se podrán cobrar las jubilaciones por vejez con confianza y
              seguridad.
            </p>
          </div>
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg text-center">
            <img
              src={JubiImage.src}
              alt="Jubilación Patronal"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-bold mb-2">
              Jubilación Patronal (En Desarrollo)
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Se podrán cobrar la jubilación patronal de forma segura y eficaz.
            </p>
          </div>
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg text-center">
            <img
              src={DiscaImage.src}
              alt="Por Discapacidad"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-bold mb-2">
              Por Discapacidad (En Desarrollo)
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Se podrán realizar los cobros por discapacidad de manera confiable
              y segura.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-lg font-bold mb-2">Pensión alimenticia</h2>
        <h4 className="text-gray-600 dark:text-gray-400">
          Se podrá cobrar realizar cobros de pensiones alimenticias de manera
          confiable y accesibles de manera nacional.
        </h4>
      </div>
    </div>
  );
};

export default Pensions;
