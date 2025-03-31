"use client";
import { Button } from "../ui/button";

import { useState } from "react";
import { validateCedulaYAccionista } from "@/utils/typeConsultValidation";
import TypeConsult from "@/components/cards/consultTypeCard";
import ConsultaLayout from "@/components/layoutForm";
interface Accionista {
    nombres: string;
    apellidos: string;
    cedula: string;
    numeroAccionista: string;
    ciudad: string;
    direccion: string;
    codigoDactilar: string;
}

const dummyData: { [key: string]: Accionista } = {
    "0102345678|V6666V6666": {
        nombres: "JUAN JOAQUIN",
        apellidos: "LOPEZ LOPEZ",
        cedula: "0102345678",
        numeroAccionista: "0001",
        ciudad: "Quito",
        direccion: "Av. Amazonas 123 y Patria",
        codigoDactilar: "V6666V7845",
    },
    "0150565463|A1234B5678": {
        nombres: "JORGE FERNANDO",
        apellidos: "AREVALO ARPI",
        cedula: "0150565463",
        numeroAccionista: "0012",
        ciudad: "Guayaquil",
        direccion: "Calle Falsa 456",
        codigoDactilar: "A1234B5678",
    },
};

const ValidadorCedulaAccionista = () => {
    const [cedula, setCedula] = useState("");
    const [codigoDactilar, setcodigoDactilar] = useState("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [activeView, setActiveView] = useState<"valido" | "novalido" | null>(null);

    const handleValidate = () => {
        const { isValid, errors: schemaErrors } = validateCedulaYAccionista({
            cedula,
            codigoDactilar,
        });

        if (!isValid) {
            setErrors(schemaErrors);
            return;
        }

        const key = `${cedula}|${codigoDactilar}`;
        const accionista = dummyData[key];

        if (accionista) {
            setActiveView("valido");
        } else {
            setActiveView("novalido");
        }

        setErrors({});
    };

    // Mostrar resultado según `activeView`
    if (activeView === "valido") {
        return <TypeConsult valido={true} onBack={() => setActiveView(null)} />;
    }

    if (activeView === "novalido") {
        return <TypeConsult valido={false} onBack={() => setActiveView(null)} />;
    }

    // Mostrar formulario inicial
    return (
        <ConsultaLayout>
            <div className="mb-4">
                <label className="block font-medium">Cédula</label>
                <input
                    type="text"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                    className={`w-full p-3 border rounded-md ${errors.cedula ? "border-red-500" : "border-gray-300"}`}
                    placeholder="Ej: 0102345678"
                />
                {errors.cedula && <p className="text-red-500 text-sm">{errors.cedula}</p>}
            </div>

            <div className="mb-4">
                <label className="block font-medium">Código Dactilar</label>
                <input
                    type="text"
                    value={codigoDactilar}
                    onChange={(e) => setcodigoDactilar(e.target.value)}
                    className={`w-full p-3 border rounded-md ${errors.codigoDactilar ? "border-red-500" : "border-gray-300"}`}
                    placeholder="Ej: V5555V6666"
                />
                {errors.codigoDactilar && (
                    <p className="text-red-500 text-sm">{errors.codigoDactilar}</p>
                )}
            </div>

            <div className="flex justify-center">
                <Button
                    onClick={handleValidate}
                    className="inline-flex bg-[#25466A] text-white text-sm px-3 py-1 font-medium rounded w-fit items-center justify-center hover:bg-[#003366] transition-colors duration-300 ease-in-out"
                >
                    Verificar
                </Button>
            </div>
        </ConsultaLayout>
    );
};

export default ValidadorCedulaAccionista;
