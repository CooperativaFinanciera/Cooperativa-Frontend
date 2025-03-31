"use client";

import { Button } from "../ui/button";
import { HiChevronLeft } from "react-icons/hi";
import Link from "next/link";
import ConsultaLayout from "@/components/layoutForm";

interface TypeConsultProps {
    onBack: () => void;
    valido: boolean;
}

const ConsultType: React.FC<TypeConsultProps> = ({ onBack, valido }) => {
    return (
        <ConsultaLayout>

            <div className="text-center mt-6 space-y-4">
                {valido ? (
                    <>

                        <h2 className="text-lg font-bold text-[#003366]">
                            Su solicitud está pendiente, en un plazo de 15 días laborales recibirá una respuesta favorable o negativa.
                        </h2>
                        <h2 className="text-lg font-bold text-[#003366]">
                            Contáctanos al whatsapp
                        </h2>

                        <a
                            href="https://whatsapp.com/channel/0029Vaf4il905MUazhwZ5M17"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-700 font-bold hover:text-green-900 transition-colors flex flex-col items-center"
                        >
                            <div className="flex items-center ml-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="#25D366"
                                    className="mr-1"
                                >
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.72.045.477-.099.883z" />
                                </svg>
                                <span>+593 983 341 084</span>
                            </div>
                        </a>



                        {/* Solo botón regresar cuando es válido */}
                        <Button
                            onClick={onBack}
                            className="mt-6 bg-[#25466A] text-white px-6 py-3 font-semibold flex items-center justify-center"
                        >
                            <HiChevronLeft className="text-xl mr-2" />
                            Regresar
                        </Button>
                    </>
                ) : (
                    <>
                        <h2 className="text-lg font-bold text-[#003366]">
                            Usted no se ha postulado para ser accionista y por tal motivo no tiene ninguna solicitud pendiente.
                        </h2>

                        {/* Botones solo cuando NO es válido */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                            <Button
                                onClick={onBack}
                                className="bg-[#25466A] text-white px-6 py-3 font-semibold flex items-center justify-center"
                            >
                                <HiChevronLeft className="text-xl mr-2" />
                                Regresar
                            </Button>

                            <Link href="/shareholders/register/">
                                <Button
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-semibold"
                                >
                                    Postúlate
                                </Button>
                            </Link>
                        </div>
                    </>
                )}
            </div>


        </ConsultaLayout>


    );
};

export default ConsultType;
