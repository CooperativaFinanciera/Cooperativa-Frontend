import React, { useState, useRef, useEffect } from "react";
import CardComponent from '../cards/infoPaymentMethod'; // Adjust the path as needed
import DragDropComponent from '../littleComponets/dragDropComponent';

import {
  corporativeBrands,

} from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

interface PaymentModalProps {
  amount: number;
  onClose: () => void;
  onPayBanco: () => void;
  onPayDatafast: () => void;
  setSliderUsado: (value: boolean) => void;
  onFileUploaded: (file: File) => void;

}
const cuentasBancarias = [
  {
    title: "Banco Financiero ANEUPI",
    cuentaAhorros: "12340091",
    ruc: "1700000000",
    transferenciaTitulo: "Transferencias",
    transferenciaSubtitulo: "Internacionales",
    codigo: "ANEUPI",
    whatsapp: "+593983341084",
    imageSrc: "/logoBank.jpg",
    imageAlt: "Banco Internacional"
  },
  {
    title: "Mutualista Pichincha",
    cuentaAhorros: "20790861",
    ruc: "1793191706001",
    transferenciaTitulo: "Transferencia",
    transferenciaSubtitulo: "Internacionales",
    codigo: "GUAYACEGXXX",
    whatsapp: "+593983341084",
    imageSrc: "/MPichincha_logo.jpg",
    imageAlt: "Mutualista Pichincha"
  }

];

const PaymentModal: React.FC<PaymentModalProps> = ({ amount, onClose, onPayBanco, onPayDatafast, setSliderUsado, onFileUploaded }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="bg-white rounded-xl shadow-lg p-6 relative w-full max-w-7xl max-h-[600px] overflow-y-auto">
        <h2 className="text-xl text-white font-semibold text-center rounded-lg mb-6"
          style={{ backgroundColor: 'rgb(35, 66, 99)' }}
        >
          ¡Elige tu método de pago favorito! Estás a un paso de lograr tu objetivo de ser un accionista.
        </h2>
        <div className="flex justify-center mb-6">
          <h2 className="text-xl text-white font-semibold text-center rounded-lg px-4 py-2"
            style={{ backgroundColor: 'rgb(35, 66, 99)' }}
          >
            Las 4 Únicas Cuentas Autorizadas
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {cuentasBancarias.map((cuenta, index) => (
            <CardComponent
              key={index}
              title={cuenta.title}
              cuentaAhorros={cuenta.cuentaAhorros}
              ruc={cuenta.ruc}
              transferenciaTitulo={cuenta.transferenciaTitulo}
              transferenciaSubtitulo={cuenta.transferenciaSubtitulo}
              codigo={cuenta.codigo}
              whatsapp={cuenta.whatsapp}
              imageSrc={cuenta.imageSrc}
              imageAlt={cuenta.imageAlt}
            />
          ))}

          {/* Banco Pichincha */}
          <div className="border border-blue-900 rounded-lg p-4 shadow-md flex flex-col items-center justify-center">

            <div className="flex flex-row items-start gap-4">

              <img
                src="/QrBPichincha.png"
                alt="QR Banco Pichincha"
                className="h-32 w-32 object-contain"
              />

              <div>
                <h3 className="font-semibold mb-2">Paga Rápido</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Abre tu app Banco Pichincha</li>
                  <li>Escoge la opción pagar con QR.</li>
                  <li>Escanea el código QR.</li>
                  <li>
                    Ingresa el monto a pagar:
                    <span className="font-semibold"> ${amount}</span>
                  </li>
                  <li>Confirma el pago.</li>
                </ol>
              </div>

            </div>

            <img
              src="/logoBPichincha.jpg"
              alt="Logo Banco Pichincha"
              className="h-12 object-contain mt-4"
            />

          </div>

          {/* Datafast */}
          <div className="border  border-blue-900 rounded-lg p-4 shadow-md flex flex-col items-center justify-center">
            <img
              src="/datafast-logo.png"
              alt="Datafast"
              className=" h-11 object-cover"

            />
            <div className="text-center mb-4">
              <p className="text-sm font-medium">
                Valor a pagar:{' '}
                <span className="font-semibold">${amount}</span>
              </p>
            </div>
            <button
              onClick={onPayDatafast}
              style={{ backgroundColor: 'rgb(35, 66, 99)' }}
              className="text-white rounded-md px-6 py-2 hover:opacity-90"
            >
              Pagar con Datafast
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="flex justify-center items-start">
            <button
              onClick={() => {
                setSliderUsado(false);
                onClose();
              }} style={{ backgroundColor: 'rgb(35, 66, 99)' }}
              className="text-white rounded-md px-6 py-3 text-sm flex items-center gap-2 hover:opacity-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform -scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Regresar
            </button>
          </div>
          <DragDropComponent onFileUpload={onFileUploaded} />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto gap-8">
          {corporativeBrands.map((brand, index) => (
            <Link key={index} href={brand.href} target="_blank">
              <Image
                className="hover:scale-125 transition-transform"
                alt={brand.title}
                src={brand.src}
                width={150}
                height={150}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;