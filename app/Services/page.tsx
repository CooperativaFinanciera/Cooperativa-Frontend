import {
  HiHome,
  HiMiniPhone,
  HiMiniWifi,
  HiOutlineBanknotes,
  HiOutlineLightBulb,
  HiTruck,
} from "react-icons/hi2";
const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-700 dark:text-gray-300">
      <header className="bg-white dark:bg-black p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
        <h1 className="text-4xl font-bold">Servicios Disponibles</h1>
        <p className="mt-4 text-xl">
          Podrás realizar los pagos de los siguientes servicios a tu alcance
        </p>
        <p className="text-lg mt-2 font-medium italic">(En desarrollo)</p>
      </header>
      <section className="py-12 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
            <HiOutlineLightBulb />
            <h3 className="text-xl font-semibold"> Servicio Eléctrico</h3>
          </div>
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
            <HiHome />
            <h3 className="text-xl font-semibold">Servicio Potable</h3>
          </div>
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
            <HiOutlineBanknotes />
            <h3 className="text-xl font-semibold">Predios Urbanos</h3>
          </div>
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
            <HiMiniWifi />
            <h3 className="text-xl font-semibold">Internet</h3>
          </div>
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
            <HiMiniPhone />
            <h3 className="text-xl font-semibold">Telefonía</h3>
          </div>
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
            <HiTruck />
            <h3 className="text-xl font-semibold">Pensión Alimenticia</h3>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p className="text-lg font-medium">
            En esta institución financiera podrás a futuro realizar pagos de
            servicios para que tengas una facilidad.
          </p>
          <p className="mt-4 text-base">
            Estos servicios serán de ayuda para que puedas realizarlos de manera
            amplia y segura además con confianza y sin contratiempos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
