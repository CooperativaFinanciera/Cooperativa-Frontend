"use client";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";
import Image from 'next/image';
import contributionImg from '@/app/assets/image/contribution.jpg';

interface Accionista {
  nombres: string;
  apellidos: string;
  cedula: string;
  numeroAccionista: string;
  tieneAportaciones: boolean;
}

const DatosAccionista = ({ accionista, onRegresar }: { accionista: Accionista; onRegresar: () => void }) => {
  return (
    <div className="w-full bg-gray-100 rounded-lg p-6 shadow-md">
      <h1 className="text-2xl font-bold text-center text-[rgba(37,70,106,1)] mb-4">Datos del Accionista</h1>
      
      <div className="grid grid-cols-1 gap-4 mb-6">
        <div className="bg-[rgba(37,70,106,1)] text-white p-3 rounded-lg">
          <p className="text-sm font-semibold">NOMBRES: {accionista.nombres}</p>
        </div>
        <div className="bg-[rgba(37,70,106,1)] text-white p-3 rounded-lg">
          <p className="text-sm font-semibold">APELLIDOS: {accionista.apellidos}</p>
        </div>
        <div className="bg-[rgba(37,70,106,1)] text-white p-3 rounded-lg">
          <p className="text-sm font-semibold">CÉDULA: {accionista.cedula}</p>
        </div>

        <div className="bg-[rgba(37,70,106,1)] text-white p-3 rounded-lg">
          <p className="text-sm font-semibold">ACCIONISTA N°: {accionista.numeroAccionista}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-center text-blue-800 mb-2">Listado de aportaciones</h2>
        <p className="text-center text-blue-800 text-sm mb-4">
          {accionista.tieneAportaciones
            ? "Aportaciones registradas para esta cédula."
            : "No hay pagos registrados para esta cédula."}
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <button className="bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors text-sm">
          Actualizar
        </button>
        <button className="bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors text-sm">
          Pagar
        </button>
        <button
          onClick={onRegresar}
          className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-400 transition-colors text-sm ml-auto"
        >
          Regresar
        </button>
      </div>
    </div>
  );
};

const Consult = () => {
  const [cedula, setCedula] = useState("");
  const [userInfo, setUserInfo] = useState<Accionista | null>(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!cedula || cedula.length !== 10 || !/^[0-9]+$/.test(cedula)) {
      setError("Formato de datos inválido. La cédula debe tener 10 dígitos numéricos.");
      setUserInfo(null);
      return;
    }

    setError("");
    const dummyData: { [key: string]: Accionista } = {
      "0102030405": { nombres: "JUAN PEDRO", apellidos: "PÉREZ GÓMEZ", cedula, numeroAccionista: "0011", tieneAportaciones: true },
      "0150565463": { nombres: "JORGE FERNANDO", apellidos: "AREVALO ARPI", cedula, numeroAccionista: "0012", tieneAportaciones: false }
    };

    const userData = dummyData[cedula as keyof typeof dummyData] || null;


  };

  const handleRegresar = () => {
    setUserInfo(null);
    setCedula("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 bg-opacity-70 p-8 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${contributionImg.src})` }}
>
      <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {!userInfo ? (
          <>
            <h1 className="text-2xl font-bold text-[rgba(37,70,106,1)] mb-4">Consulta de Aportación</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Ingresa tu número de cédula para consultar tu estado.</p>
            <input
              type="text"
              placeholder="Ingresa tu cédula..."
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 mb-4"
            />
            <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center gap-2">
              <HiOutlineSearch className="text-xl" /> Buscar
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </>
        ) : (
          <DatosAccionista accionista={userInfo} onRegresar={handleRegresar} />
        )}
      </div>
    </div>
  );
};

export default Consult;
