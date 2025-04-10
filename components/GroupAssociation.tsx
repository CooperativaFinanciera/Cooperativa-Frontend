'use client'
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const GroupAssociation = ({ className }: { className?: string }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(prev => !prev);
        },  1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-row bottom-8 w-full h-50 gap-4 items-center justify-center">
            <div className="flex flex-col gap-4 justify-center">
                <div className="justify-center">
                    <a href="https://aneupi.com/atencion-en-linea" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="/Logos/fundacion_internacional.png" 
                            alt="Logo de la fundación" 
                            width={205} height={180}
                            className="rounded-md"
                        /> 
                    </a>
                </div>
                <div className="justify-center">
                    <a href="https://www.constructoraleceni.com" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="/Logos/Leceni.png" 
                            alt="Logo de Leceni" 
                            width={200} height={180}
                            className="rounded-md"
                        />
                    </a>
                </div>
            </div>
            
            <div 
                className={`w-auto flex flex-row items-center justify-center gap-2 px-12 py-4 transition-opacity duration-1000 ${visible ? 'opacity-20' : 'opacity-80'}`}
            >
                <img 
                    src="/Logos/bancoaneupilogo.jpg" 
                    alt="Logo del Banco Aneupi" 
                    width={280} height={170}
                /> 
            </div>
            
            <div className="flex flex-col gap-4 justify-center">
                <div className="justify-center">
                    <a href="https://aneupi.com/ofertas-practicas" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="/Logos/practicas_profesionales.png" 
                            alt="Haz las prácticas con nosotros" 
                            width={200} height={180}
                            className="rounded-md"
                        />
                    </a>
                </div>
                <div className="justify-center">
                    <a href="https://www.academianeupi.com/" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="/Logos/academia_aneupi.png" 
                            alt="Academia Internacional - ANEUPI" 
                            width={200} height={180}
                            className="rounded-md"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};
