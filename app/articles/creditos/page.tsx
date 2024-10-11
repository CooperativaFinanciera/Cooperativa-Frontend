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
            <div className="relative w-full h-64">

            </div>
            <div className="grid grid-cols-5">
                <div></div>
                <div className="col-span-3 space-y-10 md:space-y-20 bg-secondary">

                </div>
                <div></div>
            </div>
        </main>
        </>
    )
}