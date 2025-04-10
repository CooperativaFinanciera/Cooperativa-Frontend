"use client"

import { VscChevronDown } from "react-icons/vsc";
import { VscChevronUp } from "react-icons/vsc";
import { VscHome } from "react-icons/vsc";
import { useState } from "react";

export const MainPage: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col gap-3"> {/* contenedor de los requisitos generales y casos */}
                <Section title="PRESIDENTE">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <div>
                            <div className="flex flex-row gap-4 justify-center items-center">
                                <img 
                                    src="/homeResources/persona1.jpg" 
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="border-2 border-gray-400 rounded-xl" 
                                />
                                <div className="">
                                    <h1 className="text-[#25466a] text-2xl font-serif font-bold">HENRY ERRAEZ <br /> (ALIAS GATITO PLIS)</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section title="GERENTE(A) ">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <div>
                            <div className="flex flex-row gap-4 justify-center items-center">
                                <img 
                                    src="/homeResources/persona1.jpg" 
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="border-2 border-gray-400 rounded-xl" 
                                />
                                <div className="">
                                    <h1 className="text-[#25466a] text-2xl font-serif font-bold">ESPINOZA MORA <br /> SEBASTIÁN DANIEL</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section title="COORDINADOR(A) NACIONAL">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <div>
                            <div className="flex flex-row gap-4 justify-center items-center">
                                <img 
                                    src="/homeResources/persona1.jpg" 
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="border-2 border-gray-400 rounded-xl" 
                                />
                                <div className="">
                                    <h1 className="text-[#25466a] text-2xl font-serif font-bold">ESPINOZA MORA <br /> SEBASTIÁN DANIEL</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section title="SECRETARIO(A) AD HOT">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <div>
                            <div className="flex flex-row gap-4 justify-center items-center">
                                <img 
                                    src="/homeResources/persona1.jpg" 
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="border-2 border-gray-400 rounded-xl" 
                                />
                                <div className="">
                                    <h1 className="text-[#25466a] text-2xl font-serif font-bold">ESPINOZA MORA  <br /> SEBASTIÁN DANIEL</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section title="DEPARTAMENTOS DE LA FUNDACIÓN ANEUPI">
                    <div className="flex flex-row items-center justify-center gap-4">
                        <div className="flex flex-row">
                            <div className="flex flex-row w-[300px] h-[80px] gap-4 justify-center items-center">
                                <VscHome size={60} />
                                <div className="">
                                    <h1 className="text-[#25466a] text-lg font-serif font-bold">DEPARTAMENTO <br />FINANCIERO</h1>
                                </div>
                            </div>
                            <div className="flex flex-row w-[300px] h-[80px] gap-4 justify-center items-center">
                                <VscHome size={60}/>
                                <div className="">
                                    <h1 className="text-[#25466a] text-lg font-serif font-bold">ÁREA <br /> ADMINISTRATIVA</h1>
                                </div>
                            </div>
                            <div className="flex flex-row w-[300px] h-[80px] gap-4 justify-center items-center">
                                <VscHome size={60}/>
                                <div className="">
                                    <h1 className="text-[#25466a] text-lg font-serif font-bold">ÁREA <br /> COMUNICACIÓN</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    );
}

const Section: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="flex flex-col w-[1000px] mb-2 items-center justify-center mx-auto rounded-lg">
        <button
          className=" w-[1000px] text-right text-white font-bold p-3 flex items-center justify-between bg-[#25466a] rounded-lg hover:text-orange-500 transition duration-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{title}</span>
          <span className="text-2xl">{isOpen ?  <VscChevronUp /> : <VscChevronDown /> }</span>
        </button>
        {isOpen && <div className="flex w-[1000px] p-5 bg-slate-200 text-left rounded-b-lg shadow-lg">{children}</div>}
      </div>
    );
  };