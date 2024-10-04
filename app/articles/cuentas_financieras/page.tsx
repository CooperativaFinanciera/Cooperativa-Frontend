"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsPiggyBankFill, BsPiggyBank } from "react-icons/bs"; // Íconos de la alcancía
import { FaMoneyBillTransfer } from "react-icons/fa6"; // Ícono de transferencia de dinero

export default function Cuentas_Financieras() {
    const [piggyBankActive, setPiggyBankActive] = useState(false);
    const [moneyTransferActive, setMoneyTransferActive] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(""); // Estado para controlar qué ícono está seleccionado
    const [showImportantInfo, setShowImportantInfo] = useState(null); // Estado para manejar el cuadro de texto de información importante

    // Manejar el clic en el icono Piggy Bank
    const handlePiggyBankClick = () => {
        // Si el ícono ya está seleccionado, deseleccionarlo
        if (selectedIcon === "piggyBank") {
            setSelectedIcon("");
        } else {
            setSelectedIcon("piggyBank");
        }
    };

    // Manejar el clic en el icono Money Transfer
    const handleMoneyTransferClick = () => {
        // Si el ícono ya está seleccionado, deseleccionarlo
        if (selectedIcon === "moneyTransfer") {
            setSelectedIcon("");
        } else {
            setSelectedIcon("moneyTransfer");
        }
    };

    // Manejar el clic en el botón Requisitos Generales
    const handleRequisitosClick = () => {
        setShowImportantInfo("requisitos");
    };

    // Manejar el clic en el botón Contrato de Cuenta
    const handleContratoClick = () => {
        setShowImportantInfo("contrato");
    };

    return (
        <>
            <main className="space-y-10 md:space-y-20">
                {/* Banner */}
                <div className="relative w-full h-64">
                    <Image
                        src="/cuentas_banner.webp"
                        alt="Banner de Cuentas Financieras"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>

              
                <div className="grid grid-cols-4">
                    <div></div> 
                    <div className="col-span-2 space-y-10 md:space-y-20">
                        <section>
                            <h1 className="text-5xl font-bold text-center" style={{ fontSize: '56px' }}>
                                Explora nuestras opciones de cuentas financieras.
                            </h1>
                            <h2 className="text-2xl font-bold text-center" style={{ fontSize: '24px' }}>
                                Nuestras opciones de cuentas diseñadas para satisfacer sus necesidades financieras individuales y empresariales.
                            </h2>
                        </section>
                    </div>
                    <div></div> 
                </div>

                <div className="grid grid-cols-4">
                    <div></div>
                    <div className="col-span-2 space-y-10 md:space-y-20">
                        <div className="flex justify-between items-start space-x-10">

                            <section className="w-1/2 max-w-xl"> 
                                <p className="text-lg font-bold text-left">
                                    A futuro seleccionarán su cuenta bancaria ideal.
                                </p>
                                <p className="text-md text-left">
                                    Descubra a futuro las opciones del Proyecto de la Cooperativa para ofrecer y elegirán la que mejor se adapte a su necesidad.
                                    Cuentan con el respaldo del Proyecto de la Cooperativa y obtendrán acceso a su dinero en el momento que lo necesite, sin complicaciones y retrasos.
                                </p>
                            </section>

                            <section className="w-1/2 flex justify-start">
                                <div className="flex space-x-16">
                                    {/* Icono de Piggy Bank */}
                                    <div
                                        className="h-32 w-32 flex items-center justify-center border-2 border-white cursor-pointer flex-col"
                                        onClick={handlePiggyBankClick} 
                                        onMouseDown={() => setPiggyBankActive(true)} 
                                        onMouseUp={() => setPiggyBankActive(false)}   
                                        onMouseLeave={() => setPiggyBankActive(false)} 
                                    >
                                        {(piggyBankActive || selectedIcon === "piggyBank") ? (
                                            <BsPiggyBank size={50} color="#FF6347" /> 
                                        ) : (
                                            <BsPiggyBankFill size={50} color="#000" /> 
                                        )}
  
                                        <p className="text-center mt-4 text-lg font-semibold">
                                            Cuenta de ahorro
                                        </p>
                                    </div>

   
                                    <div
                                        className="h-32 w-32 flex items-center justify-center border-2 border-white cursor-pointer flex-col"
                                        onClick={handleMoneyTransferClick} 
                                        onMouseDown={() => setMoneyTransferActive(true)} 
                                        onMouseUp={() => setMoneyTransferActive(false)}   
                                        onMouseLeave={() => setMoneyTransferActive(false)}
                                    >
                                        {(moneyTransferActive || selectedIcon === "moneyTransfer") ? (
                                            <FaMoneyBillTransfer size={50} color="#4682B4" /> 
                                        ) : (
                                            <FaMoneyBillTransfer size={50} color="#000" /> 
                                        )}
                                    
                                        <p className="text-center mt-4 text-lg font-semibold">
                                            Cuenta corriente
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div></div>
                </div>

                <div className="flex justify-center">
                    {selectedIcon && (
                        <div className="mt-8 bg-black text-white p-6 rounded-md shadow-md max-w-md text-center border-2 border-white"> {/* Fondo negro y borde blanco */}
                            {selectedIcon === "piggyBank" && (
                                <>
                                    <h3 className="text-2xl font-bold mb-4">Cuenta de Ahorro</h3>
                                    <ul className="list-disc list-inside text-left mb-4">
                                        <li>Acceso a su dinero en cualquier momento</li>
                                        <li>Intereses competitivos</li>
                                        <li>Seguridad y conveniencia</li>
                                    </ul>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                        Conocer más
                                    </button>
                                </>
                            )}

                            {selectedIcon === "moneyTransfer" && (
                                <>
                                    <h3 className="text-2xl font-bold mb-4">Cuenta Corriente</h3>
                                    <ul className="list-disc list-inside text-left mb-4">
                                        <li>Transacciones ilimitadas</li>
                                        <li>Facilidad para manejar pagos</li>
                                        <li>Acceso a línea de crédito</li>
                                    </ul>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                        Conocer más
                                    </button>
                                </>
                            )}
                        </div>
                    )}
                </div>

                <div className="flex justify-center space-x-6 mt-10">
                    <button
                        className="border-2 border-white text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-white hover:text-black"
                        onClick={handleRequisitosClick}
                    >
                        Requisitos Generales
                    </button>
                    <button
                        className="border-2 border-white text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-white hover:text-black"
                        onClick={handleContratoClick}
                    >
                        Contrato de Cuenta
                    </button>
                </div>

  
                {showImportantInfo && (
                    <div className="grid grid-cols-4 mt-10">
                        <div></div> 
                        <div className="col-span-2 flex justify-center">
                            <div className="bg-black text-white p-6 rounded-md shadow-md max-w-md text-center border-2 border-white"> {/* Fondo negro y borde blanco */}
                                <h3 className="text-2xl font-bold mb-4">Información importante (En desarrollo)</h3>
                                <p className="text-left mb-4">
                                    *Recuerde que prestar su cuenta personal para recibir o transferir dinero de y hacia personas desconocidas tiene implicaciones legales.
                                </p>
                                <p className="text-left mb-4">
                                    *No preste su cuenta a terceras personas, recuerde que el mal uso que haga de ella faculta a la Cooperativa a su cierre.
                                </p>
                                <p className="text-left mb-4">
                                    *Ningún funcionario de la Cooperativa le solicitará datos privados como su contraseña, PIN, datos de su Clave Dinámica u otros datos confidenciales.
                                </p>
                            </div>
                        </div>
                        <div></div> 
                    </div>
                )}
            </main>
        </>
    );
}
