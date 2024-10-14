"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button"; 
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Card, CardBody } from "@nextui-org/card";

export default function Creditos() {
    const [visible, setVisible] = useState(false);

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
                <div className="grid-cols-5">
                <div></div>
                <div className="col-span-3 space-y-10 md:space-y-20 flex gap-6">
                    <div className="col-span-1 space-y-10 md:space-y-20 flex gap-6">
                    <h2 className="text-xl font-semibold mb-2">CREDITO ANEUPI</h2>  
                    </div>
                    <div className="col-span-2 space-y-10 md:space-y-20 flex gap-6"></div>
                </div>
                <div></div>
                </div>
                <div className="grid grid-cols-5">
                    <div></div>
                    
                    <div className="col-span-3 space-y-10 md:space-y-20 flex gap-6">
                        {/* Primera Card */}
                        <div className="w-1/2 max-w-sm text-center">
                            
                            <Card className="bg-primary text-white p-6 rounded-2xl shadow-md border-2 border-white">
                                <CardBody>
                                    <h3 className="text-lg font-bold">CARACTERISTICAS</h3>
                                    <ul className="mt-4 space-y-2 text-sm">
                                        <li>* MONTOS: Desde USD 1,000 hasta USD 20,000</li>
                                        <li>* PLAZO MAXIMO: 60 meses</li>
                                        <li>* TASA: 15.60%</li>
                                        <li>* SIN GARANTE</li>
                                        <li>* SIN COSTOS ADICIONALES</li>
                                        <li>« Aplican condiciones.</li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </div>

                        {/* Segunda Card */}
                        <div className="w-full max-w-lg text-center">
                            <h2 className="text-xl font-semibold mb-2">¿Qué tienes en mente?</h2>
                            <p className="text-sm mb-4">Le ayudamos a cumplir sus sueños</p>
                            <Button className="mt-6" onPress={() => setVisible(true)}>Solicítelo aquí</Button>
                            <Card>
                                <CardBody>
                                    <h2 className="text-xl font-semibold mb-4">Crédito a tu medida</h2>
                                    <p className="text-sm mb-6">
                                        Accederás a futuro al crédito que se ajusta a ti.
                                    </p>
                                    <div className="flex justify-between">
                                        {[
                                            { icon: "💳", title: "Crédito Consumo (En desarrollo)", description: "No te detengas. Para tus necesidades de financiamiento, tenemos la solución inmediata" },
                                            { icon: "🚗", title: "Crédito Vehicular (En desarrollo)", description: "Empieza el camino hacia tu nuevo vehículo. Nosotros, lo financiamos hasta 60 meses plazo." },
                                            { icon: "🏠", title: "Crédito Hipotecario (En desarrollo)", description: "Materializa el sueño de una vivienda propia. Financiamos la construcción, compra o ampliación de tu nueva casa." }
                                        ].map((item, index) => (
                                            <div key={index} className="flex flex-col items-center text-center space-y-2">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                                                    <span className="text-2xl">{item.icon}</span>
                                                </div>
                                                <h3 className="text-base font-semibold">{item.title}</h3>
                                                <p className="text-sm text-gray-500">{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Botón para abrir el modal */}
                                    
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div></div>
                </div>

                {/* Modal */}
                <Modal isOpen={visible} onClose={() => setVisible(false)}>
                    <ModalContent>
                        <ModalHeader>
                            <h3>Solicitar Crédito</h3>
                        </ModalHeader>
                        <ModalBody>
                            <p>En desarrollo.</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button auto flat color="error" onPress={() => setVisible(false)}>
                                Cerrar
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </main>
        </>
    );
}
