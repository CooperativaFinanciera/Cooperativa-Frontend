"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsPiggyBankFill, BsPiggyBank } from "react-icons/bs"; // Importar los íconos
import { FaMoneyBillTransfer } from "react-icons/fa6";

export default function Cuentas_Financieras() {
    const [piggyBankActive, setPiggyBankActive] = useState(false);
    const [moneyTransferActive, setMoneyTransferActive] = useState(false);
    return (
        <> 
        <main className="space-y-10 md:space-y-20">
        <div className="relative w-full h-64"> 
                <Image 
                    src="/cuentas_banner.webp" 
                    alt="Banner de Cuentas Financieras"
                    layout="fill" 
                    objectFit="cover" 
                    priority 
                />
            </div>
            <div>
                <section>
                <h1 className="text-5xl font-bold text-center" style={{ fontSize: '56px' }}>
                Explora nuestras opciones de cuentas financieras.
                        </h1>
                        <h2 className="text-2xl font-bold text-center" style={{ fontSize: '24px' }}>
                        Nuestras opciones de cuentas diseñadas para satisfacer sus necesidades financieras individuales y empresariales.
                        </h2>
                </section>
            </div>
            {/* Sección de texto e imágenes */}
            <div className="flex justify-between items-start space-x-10">
                <section className="w-1/2 max-w-xl"> {/* Limitar el ancho máximo del texto */}
                    <p className="text-lg font-bold text-left">
                        A futuro seleccionarán su cuenta bancaria ideal.
                    </p>
                    <p className="text-md text-left">
                        Descubra a futuro las opciones del Proyecto de la Cooperativa Financiera para ofrecer y elegirán la que mejor se adapte a su necesidad.
                        Cuentan con el respaldo del Proyecto de la Cooperativa Financiera y obtendrán acceso a su dinero en el momento que lo necesite, sin complicaciones y retrasos.
                    </p>
                </section>

                {/* Sección para las imágenes / íconos */}
                <section className="w-1/2 flex justify-start">
                    <div className="flex space-x-16">
                        {/* Icono de Piggy Bank */}
                        <div
                            className="h-32 w-32 flex items-center justify-center bg-gray-300 cursor-pointer"
                            onMouseDown={() => setPiggyBankActive(true)} // Cambiar a icono 2
                            onMouseUp={() => setPiggyBankActive(false)}   // Volver a icono 1
                            onMouseLeave={() => setPiggyBankActive(false)} // Volver si el cursor sale
                        >
                            {piggyBankActive ? (
                                <BsPiggyBank size={50} color="#FF6347" /> // Icono con color diferente
                            ) : (
                                <BsPiggyBankFill size={50} color="#000" /> // Icono por defecto
                            )}
                        </div>

                        {/* Icono de Money Transfer */}
                        <div
                            className="h-32 w-32 flex items-center justify-center bg-gray-300 cursor-pointer"
                            onMouseDown={() => setMoneyTransferActive(true)} // Cambiar a icono 2
                            onMouseUp={() => setMoneyTransferActive(false)}   // Volver a icono 1
                            onMouseLeave={() => setMoneyTransferActive(false)} // Volver si el cursor sale
                        >
                            {moneyTransferActive ? (
                                <FaMoneyBillTransfer size={50} color="#4682B4" /> // Icono con color diferente
                            ) : (
                                <FaMoneyBillTransfer size={50} color="#000" /> // Icono por defecto
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </main>
        </>
    )
    
}