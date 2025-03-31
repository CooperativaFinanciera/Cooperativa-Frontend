"use client";
import { useEffect, useState } from "react";

import solidaridad from "@/app/assets/image/solidaridad.jpg";
import financiero from "@/app/assets/image/financiero.png";
import accionistas from "@/app/assets/image/accionistasFinan.png";
import consulta from "@/app/assets/image/accionistasBanco.png";
import CardSlide from "@/components/cards/cardSlider";
import { Button } from "@nextui-org/react";

const cardsData = [
    {
        title: "Paquete Financiero",
        description:
            "La institución financiera ANEUPI entregará y financiará a todos(as) y los(as) accionistas un carro cero kilómetros y una casa nueva, valorados en $ 150 000 dólares.",
        imageSrc: financiero,
        buttonText: "Solicitar paquete",
        buttonLink: "/",

    },
    {
        title: "¿Deseas ser accionista?",
        description:
            "La institución financiera ANEUPI te invita a ser parte del Banco Financiero, donde podrás disfrutar de todos los beneficios que tenemos para ti.",
        imageSrc: accionistas,
        buttonText: "Postúlate",
        buttonLink: "/shareholders/join",

    },
    {
        title: "Consulta si eres Accionista",
        description:
            "Consulta tus datos y verifica si eres accionista de la institución financiera ANEUPI.",
        imageSrc: consulta,
        buttonText: "Consulta aquí",
        buttonLink: "/shareholders/visualConsult",

    },
];

export default function Page() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
        }, 30000);
        return () => clearInterval(interval);
    }, []);


    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % cardsData.length);
    };
    const currentCard = cardsData[currentIndex];

    return (
        <div className="w-full py-10 flex justify-center items-center">
            <div className="relative flex items-center justify-center w-full max-w-7xl">
                {/* Botón izquierdo */}
                <Button
                    onClick={handlePrev}
                    className="absolute left-0 -translate-x-10 z-10 bg-[#25466A] text-white rounded-full w-10 h-10"
                    radius="full"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </Button>

                {/* Card al centro */}
                <CardSlide {...currentCard} />

                {/* Botón derecho */}
                <Button
                    onClick={handleNext}
                    className="absolute right-0 translate-x-10 z-10 bg-[#25466A] text-white rounded-full w-10 h-10"
                    radius="full"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </Button>
            </div>
        </div>
    );
}
