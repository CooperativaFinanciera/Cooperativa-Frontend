import { VscChevronRight } from "react-icons/vsc";
import { VscBook } from "react-icons/vsc";

const Page = () => {
    return(
        <div className="mt-8 mb-8"> {/* contenedor principal */}
            <div className="flex flex-col w-full justify-center items-center gap-2">
                <div className="flex flex-row justify-center items-center gap-3">
                    <img 
                        src="/Logos/bancoaneupilogo1.png" 
                        alt="Logo del Banco ANEUPI" 
                        width={100}
                        height={100}
                        className="rounded-full"
                    />
                    <h1 className="text-4xl text-[#25466a] font-serif font-bold">REGLAMENTO INTERNO DEL PROYECTO</h1>
                </div>
                <div>
                    <h2 className="text-lg text-[#25466a] font-serif font-semibold">INSTITUCIÓN FINANCIERA ANEUPI</h2>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col w-full justify-center items-center mt-20">
                    <div className="flex flex-col w-[1200px] bg-[#25466a] items-center justify-center p-4 gap-3 rounded-xl shadow-xl">
                        <div className="flex flex-col w-[1060px]">
                            <VscBook 
                                size={40}
                                className="text-amber-500 ml-5"
                            />
                            <h2 className="text-3xl text-amber-500 font-mono font-semibold p-2 underline">CONSIDERANDO : </h2>
                        </div>
                        <div className="flex w-[1000px] h-[200px]">
                            <p className="text-md text-white font-serif font-semibold">
                                La Institucion Financiera ANEUPI es un proyecto de la Fundación ANEUPI y se regirá al reglamento y 
                                a otras resoluciones que elaboren hasta legalizar ante las instituciones correspondientes e integrará a todos 
                                los ciudadanos(as) principalmente a los ciudadanos(as) con Discapacidad para que al futuro puedan ser accionistas 
                                y reivindicar sus derechos. El proyecto de la Institución Financiera se comenzará a legalizar desde el año 2024 
                                para que así en pocos meses sean una Institución Financiera legalizada a nivel Nacional ante las instituciones 
                                correspondientes y ya no solo un proyecto. Todos los ciudadanos socios y futuros accionistas del Proyecto de la 
                                Institución Financiera solo serán socios del proyecto y no de la Fundación ANEUPI.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center mt-5">
                    <button className="flex flex-row items-center justify-center bg-orange-500 rounded-lg shadow-lg p-3 gap-2 hover:bg-orange-700 transition duration-300 ease-in-out">
                        <p className="text-white font-serif font-semibold ">Leer más</p>
                        <VscChevronRight className="text-white font-bold" />
                    </button>
                </div>
            </div>
            
        </div>
    ); 
}

export default Page;