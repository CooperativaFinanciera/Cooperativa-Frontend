
import React from 'react';

export const InfoPage: React.FC = () => {
    return (
        <div className="my-8"> {/* contenedor principal */}
            <div className="flex flex-col w-[1000px] gap-4 py-2 items-center justify-center mx-auto">
                <p className="text-lg text-[#25466a] font-serif">
                    Información sujeta a variaciones y verificación de la Institución Financiera. Los cálculos ofrecidos tienen carácter orientativo 
                    y, en cualquier caso, la operación está sujeta a variaciones y aprobación posterior, por lo que no constituye una oferta de 
                    contratación que vincule a la Institución Financiera.
                </p>
                <div className="flex flex-col w-[1000px] gap-2 py-2 text-left mx-auto">
                    <h1 className="text-3xl text-[#25466a] font-serif font-semibold">* SEGUROS</h1>
                    <ul>
                        <li className="text-[#25466a] text-lg font-serif">
                            <span className="font-bold underline"> Seguro de Desgravamen: </span>Aplicado en caso de muerte, incapacidad total y permanente o enfermedad catastrófica para titular 
                            y conyugue, adicional otorga cobertura por desempleo o incapacidad temporal hasta 5 cuotas solo para el titular, 
                            será cobrado mensual en la tabla de pagos.
                        </li>
                        <li className="text-[#25466a] text-lg font-serif ">
                            <span className="font-bold underline"> Enfermedades Graves: </span>Será cobrado según el producto y subproducto de crédito de forma mensual.
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}