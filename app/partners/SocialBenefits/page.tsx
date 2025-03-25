'use client';
import { useEffect, useState } from "react";
import { FaPiggyBank, FaHeartbeat, FaTags, FaArrowRight } from "react-icons/fa";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import bienesaludImg from "@/app/assets/image/bienesalud.png";
import creditoahoImg from "@/app/assets/image/creditoaho.png";
import desconveImg from "@/app/assets/image/desconve.png";
import benefiportadaImg from "@/app/assets/image/benefiportada.png";
import benefiportada2Img from "@/app/assets/image/benefiportada2.png";

import beneportadaImg from "@/app/assets/image/beneportada.png";

const images = [
  [creditoahoImg],
  [bienesaludImg],
  [desconveImg]
];

const SocialBenefitsPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState([0, 0, 0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex.map((index, i) => (index + 1) % images[i].length)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="space-y-10 md:space-y-20">
      <header
        className="relative text-white px-8 py-24 font-bitter flex items-center justify-start"
        style={{
          backgroundImage: `url(${beneportadaImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(37,70,106,0.6)]"></div>

        <div className="relative z-10 max-w-2xl text-left">
          <h1 className="text-5xl font-bold tracking-wider border-b-4 border-white pb-4">
            Beneficios Sociales
          </h1>
          <p className="text-xl font-light mt-4">
            Descubre los beneficios que ofrecemos para mejorar tu calidad de vida.
          </p>
        </div>
      </header>

      <section
        className="relative w-full h-[400px] bg-cover bg-center mt-0"
        style={{
          backgroundImage: `url(${benefiportadaImg.src})`,
          marginTop: "-10px",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-[2px] bg-white z-10"></div>

        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white p-4">
            <h2 className="text-4xl font-bold mb-2 animate-bounce">¡Beneficios Especiales para Ti!</h2>
            <p className="text-lg mt-2 animate-pulse">
              Aprovecha nuestros programas exclusivos diseñados para mejorar tu bienestar y darte las mejores soluciones.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative w-full min-h-[120vh] bg-cover bg-center mt-0"
        style={{
          backgroundImage: `url(${benefiportada2Img.src})`,
          marginTop: '-10px',
          paddingBottom: 0,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-[5px] bg-white z-20"></div>

        {/* <div className="absolute inset-0 bg-[rgba(37,70,106,0.6)] z-10"></div>*/}

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">

            <div className="p-8 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 rounded-t-2xl rounded-b-2xl relative overflow-hidden h-full flex flex-col">
              {/* Sección superior*/}
              <div className="absolute top-0 left-0 w-full h-[120px] bg-[rgba(37,70,106,1)] z-10 rounded-t-2xl flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <FaPiggyBank className="text-white text-3xl hover:text-blue-800 transition-colors duration-300" />
                  <h3 className="text-2xl font-bold text-white">
                    Crédito y Ahorro
                  </h3>
                </div>
              </div>

              {/* Contenido intermedio */}
              <div className="pt-[120px] pb-[200px] flex-grow">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Acceso a Créditos Favorables
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Tasas de interés más bajas que los bancos tradicionales, ofreciendo mejores opciones de financiamiento.
                </p>
              </div>

              {/* Imagen en la parte inferior */}
              <div className="absolute bottom-0 left-0 w-full h-[200px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={images[0][currentImageIndex[0]].src}
                  alt="Crédito y Ahorro"
                />
                <p className="absolute bottom-2 left-2 text-lg text-white bg-gray-800 bg-opacity-70 px-2 py-1 rounded">
                  (en desarrollo)
                </p>
              </div>
            </div>

            <div className="p-8 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 rounded-t-2xl rounded-b-2xl relative overflow-hidden h-full flex flex-col">
              {/* Sección superior */}
              <div className="absolute top-0 left-0 w-full h-[120px] bg-[rgba(37,70,106,1)] z-10 rounded-t-2xl flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <FaHeartbeat className="text-white text-3xl hover:text-red-700 transition-colors duration-300" />
                  <h3 className="text-2xl font-bold text-white">
                    Bienestar y Salud
                  </h3>
                </div>
              </div>

              {/* Contenido intermedio */}
              <div className="pt-[120px] pb-[200px] flex-grow">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Seguros Asequibles
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Proporcionamos seguros y pólizas a precios accesibles para proteger a los asociados y sus familias.
                </p>
              </div>

              {/* Imagen en la parte inferior */}
              <div className="absolute bottom-0 left-0 w-full h-[200px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={images[1][currentImageIndex[1]].src}
                  alt="Bienestar y Salud"
                />
                <p className="absolute bottom-2 left-2 text-lg text-white bg-gray-800 bg-opacity-70 px-2 py-1 rounded">
                  (en desarrollo)
                </p>
              </div>
            </div>
            <div className="p-8 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 rounded-t-2xl rounded-b-2xl relative overflow-hidden h-full flex flex-col">
              {/* Sección superior */}
              <div className="absolute top-0 left-0 w-full h-[120px] bg-[rgba(37,70,106,1)] z-10 rounded-t-2xl flex items-center justify-center">
                <div className="flex items-center justify-center gap-4">
                  <FaTags className="text-white text-3xl hover:text-green-700 transition-colors duration-300" />
                  <h3 className="text-2xl font-bold text-white">
                    Descuento y convenio
                  </h3>
                </div>
              </div>

              {/* Contenido intermedio */}
              <div className="pt-[120px] pb-[200px] flex-grow">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Beneficios Exclusivos
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Accede a descuentos especiales en tiendas, farmacias y servicios gracias a convenios con diversas empresas.
                </p>
              </div>

              {/* Imagen en la parte inferior */}
              <div className="absolute bottom-0 left-0 w-full h-[200px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={images[2][currentImageIndex[2]].src}
                  alt="Descuentos y Convenios"
                />
                <p className="absolute bottom-2 left-2 text-lg text-white bg-gray-800 bg-opacity-70 px-2 py-1 rounded">
                  (en desarrollo)
                </p>
              </div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex justify-center w-full">
              <Link href="/partners/FinancialEducationPartners" passHref>
                <Button
                  className="text-white bg-gradient-to-r from-[rgba(37,70,106,1)] to-[rgba(37,70,106,1)] 
        hover:from-[rgba(37,70,106,1)] hover:to-[rgba(37,70,106,1)] 
        transition-all duration-300
        rounded-full shadow-lg hover:scale-105 hover:shadow-2xl"
                  size="lg"
                >
                  <FaArrowRight className="mr-2" />
                  ¡Descubre más!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SocialBenefitsPage;
