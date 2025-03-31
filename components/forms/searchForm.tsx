"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Accionista {
  nombres: string;
  apellidos: string;
  cedula: string;
  numeroAccionista: string;
  ciudad: string;
  direccion: string;
  codigoDactilar: string;
}

const DatosAccionista = ({
  accionista,
  onRegresar,
}: {
  accionista: Accionista;
  onRegresar: () => void;
}) => {
  return (
    <div className="w-full bg-gray-100 rounded-lg p-6 shadow-md">
      <h1 className="text-2xl font-bold text-center text-[rgba(37,70,106,1)] mb-4">
        Datos del Accionista
      </h1>

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
          <p className="text-sm font-semibold">
            ACCIONISTA N°: {accionista.numeroAccionista}
          </p>
        </div>
        <div className="bg-[rgba(37,70,106,1)] text-white p-3 rounded-lg">
          <p className="text-sm font-semibold">CIUDAD: {accionista.ciudad}</p>
        </div>
        <div className="bg-[rgba(37,70,106,1)] text-white p-3 rounded-lg">
          <p className="text-sm font-semibold">DIRECCIÓN: {accionista.direccion}</p>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={onRegresar}
          className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-400 transition-colors text-sm"
        >
          Regresar
        </button>
      </div>
    </div>
  );
};

const SearchContainer = () => {
  const [cedula, setCedula] = useState("");
  const [codigoDactilar, setCodigoDactilar] = useState("");
  const [numeroAccionista, setNumeroAccionista] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [accionistaData, setAccionistaData] = useState<Accionista | null>(null);
  const [activeTab, setActiveTab] = useState<"consultas" | "resultado" | "postulate">("consultas");

  const dummyData: { [key: string]: Accionista } = {
    "0102345678|V6666V7845|0001": {
      nombres: "JUAN JOAQUIN",
      apellidos: "LOPEZ LOPEZ",
      cedula: "0102345678",
      numeroAccionista: "0001",
      ciudad: "Quito",
      direccion: "Av. Amazonas 123 y Patria",
      codigoDactilar: "V6666V7845",
    },
    "0150565463|A1234B5678|0012": {
      nombres: "JORGE FERNANDO",
      apellidos: "AREVALO ARPI",
      cedula: "0150565463",
      numeroAccionista: "0012",
      ciudad: "Guayaquil",
      direccion: "Calle Falsa 456",
      codigoDactilar: "A1234B5678",
    },
  };

  const validateInputs = () => {
    const newErrors: { [key: string]: string } = {};
    const cedulaRegex = /^\d{10}$/;
    const codigoDactilarRegex = /^[A-Z]\d{4}[A-Z]\d{4}$/;
    const numeroAccionistaRegex = /^\d{4}$/;

    if (!cedulaRegex.test(cedula)) {
      newErrors.cedula = "Debe tener exactamente 10 dígitos numéricos.";
    }

    if (!codigoDactilarRegex.test(codigoDactilar)) {
      newErrors.codigoDactilar = "Formato inválido. Ej: V1234V5678.";
    }

    if (!numeroAccionistaRegex.test(numeroAccionista)) {
      newErrors.numeroAccionista = "Debe tener 4 dígitos.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = () => {
    if (!validateInputs()) return;

    const key = `${cedula}|${codigoDactilar}|${numeroAccionista}`;
    const data = dummyData[key];

    if (data) {
      setAccionistaData(data);
      setActiveTab("resultado");
    } else {
      setAccionistaData(null);
      setActiveTab("postulate");
    }
  };

  const handleRegresar = () => {
    setCedula("");
    setCodigoDactilar("");
    setNumeroAccionista("");
    setAccionistaData(null);
    setErrors({});
    setActiveTab("consultas");
  };

  return (
    <div className="flex flex-col bg-[#F5F7FA] text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto border border-gray-300">
      <h2 className="text-2xl font-bold bg-[#003366] text-white p-4 rounded-t-lg text-center uppercase">
        Consultas
      </h2>

      {activeTab === "consultas" && (
        <div className="space-y-4 mt-4">
          <div>
            <label className="block font-medium">Cédula</label>
            <input
              type="text"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              placeholder="Ej: 0102345678"
              className={`w-full p-3 border rounded-md ${errors.cedula ? "border-red-500" : ""}`}
            />
            {errors.cedula && <p className="text-red-500 text-sm">{errors.cedula}</p>}
          </div>

          <div>
            <label className="block font-medium">Código Dactilar</label>
            <input
              type="text"
              value={codigoDactilar}
              onChange={(e) => setCodigoDactilar(e.target.value)}
              placeholder="Ej: V1234V5678"
              className={`w-full p-3 border rounded-md ${errors.codigoDactilar ? "border-red-500" : ""}`}
            />
            {errors.codigoDactilar && <p className="text-red-500 text-sm">{errors.codigoDactilar}</p>}
          </div>

          <div>
            <label className="block font-medium">Número de Accionista</label>
            <input
              type="text"
              value={numeroAccionista}
              onChange={(e) => setNumeroAccionista(e.target.value)}
              placeholder="Ej: 0001"
              className={`w-full p-3 border rounded-md ${errors.numeroAccionista ? "border-red-500" : ""}`}
            />
            {errors.numeroAccionista && <p className="text-red-500 text-sm">{errors.numeroAccionista}</p>}
          </div>

          <div className="mt-4 flex justify-center">
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-[rgba(37,70,106,1)] text-white rounded-md transition"
            >
              Consultar
            </button>
          </div>
        </div>
      )}

      {activeTab === "resultado" && accionistaData && (
        <div className="mt-6">
          <DatosAccionista accionista={accionistaData} onRegresar={handleRegresar} />
        </div>
      )}

      {activeTab === "postulate" && (
        <div className="text-center mt-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">
            ¡No estás registrado!
          </h2>
          <p className="text-gray-700 mb-4">
            Puedes iniciar tu postulación a continuación.
          </p>
          <Link href="/shareholders/join/">
            <Button size="lg">Postúlate</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchContainer;
