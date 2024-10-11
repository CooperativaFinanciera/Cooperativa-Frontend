"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button"; 
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";

export default function Cuentas_Financieras() {
    const [showImportantInfo, setShowImportantInfo] = useState<string | null>(null); 

    const handleRequisitosClick = () => {
        setShowImportantInfo("requisitos");
    };

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
                            <h1 className="text-5xl font-bold text-center text-2xl md:text-4xl">
                                Explora nuestras opciones de cuentas financieras.
                            </h1>
                            <h2 className="text-2xl font-bold text-center text-xl md:text-2xl">
                                Nuestras opciones de cuentas diseñadas para satisfacer sus necesidades financieras individuales y empresariales.
                            </h2>
                        </section>
                    </div>
                    <div></div> 
                </div>

                {/* Tabs Section */}
                <div className="grid grid-cols-4">
                    <div></div>
                    <div className="col-span-2 space-y-10 md:space-y-20 mx-auto w-full max-w-lg">
                        <Tabs aria-label="Options">
                            <Tab key="Cuenta Bancaria" title="Cuenta bancaria">
                                <Card className="w-full max-w-lg">
                                    <CardBody>
                                        <p className="text-xl font-bold text-left">
                                            A futuro seleccionarán su cuenta bancaria ideal.
                                        </p>
                                        <p className="text-lg text-left">
                                            Descubra a futuro las opciones del Proyecto de la Cooperativa para ofrecer y elegirán la que mejor se adapte a su necesidad. Cuentan con el respaldo del Proyecto de la Cooperativa y obtendrán acceso a su dinero en el momento que lo necesite, sin complicaciones y retrasos.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="Cuenta de Ahorro" title="Cuenta de Ahorro">
                                <Card className="w-full max-w-lg">
                                    <CardBody>
                                        <h3 className="text-2xl font-bold mb-4">Cuenta de Ahorro</h3>
                                        <ul className="list-disc list-inside text-left mb-4">
                                            <li>Acceso a su dinero en cualquier momento</li>
                                            <li>Intereses competitivos</li>
                                            <li>Seguridad y conveniencia</li>
                                        </ul>
                                        <Button variant="light" size="md">
                                            Conocer más
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="Cuenta Corriente" title="Cuenta Corriente">
                                <Card className="w-full max-w-lg">
                                    <CardBody>
                                        <h3 className="text-2xl font-bold mb-4">Cuenta Corriente</h3>
                                        <ul className="list-disc list-inside text-left mb-4">
                                            <li>Transacciones ilimitadas</li>
                                            <li>Facilidad para manejar pagos</li>
                                            <li>Acceso a línea de crédito</li>
                                        </ul>
                                        <Button variant="primary" size="large">
                                            Conocer más
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>
                    <div></div>
                </div>

                {/* Buttons Section */}
                <div className="flex justify-center space-x-6 mt-10">
                    <Button
                        variant="outline"
                        size="large"
                        className="bg-secondary text-white"
                        onClick={handleRequisitosClick}
                    >
                        Requisitos Generales
                    </Button>
                    <Button
                        variant="outline"
                        size="large"
                        className="bg-secondary text-white"
                        onClick={handleContratoClick}
                    >
                        Contrato de Cuenta
                    </Button>
                </div>

                {/* Important Info Section */}
                {showImportantInfo && (
                    <div className="grid grid-cols-4 mt-10">
                        <div></div> 
                        <div className="col-span-2 flex justify-center">
                            <Card className="bg-primary text-white p-6 rounded-2xl shadow-md max-w-md border-2 border-white text-center">
                                <CardBody>
                                    <h3 className="text-2xl font-bold mb-4">Información importante (En desarrollo)</h3>
                                    <p className="text-left mb-4">
                                        *Recuerde que prestar su cuenta personal para recibir o transferir dinero de y hacia personas desconocidas tiene implicaciones legales.
                                    </p>
                                    <p className="text-left mb-4">
                                        *No preste su cuenta a terceras personas, recuerde que el mal uso de su cuenta puede repercutir en su historial crediticio.
                                    </p>
                                    <Button variant="danger" size="large" onClick={() => setShowImportantInfo(null)}>
                                        Cerrar
                                    </Button>
                                </CardBody>
                            </Card>
                        </div> 
                        <div></div> 
                    </div>
                )}

            </main>
        </>
    );
}
