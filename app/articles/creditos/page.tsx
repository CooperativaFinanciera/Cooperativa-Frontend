"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdAttachMoney } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { Button } from "@nextui-org/button"; 
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";





export default function creditos(){
    return(
        <>
        <main className="space-y-10 md:space-y-20">
            {/*Banner*/}
            <div className="relative w-full h-64">
                    <Image
                        src="/cuentas_banner.webp"
                        alt="Banner de Cuentas Financieras"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
            <div className="grid grid-cols-5">
                <div></div>
                <div className="col-span-3 space-y-10 md:space-y-20 flex gap-6">
                    <Card className="bg-primary text-white p-6 rounded-2xl shadow-md border-2 border-white text-center w-1/2 max-w-sm">
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
                    
                    <Card className=" w-full max-w-lg">
                        <CardBody>
                            <h2 className="text-xl font-semibold mb-4">Crédito a tu medida</h2>
                            <p className="text-sm">
                                Accederás a futuro al crédito que se ajusta a ti.
                            </p>
                        </CardBody>
                    </Card>
                </div>
                <div></div>
            </div>

        </main>
        </>
    )
}