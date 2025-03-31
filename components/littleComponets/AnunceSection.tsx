import React, { useState, useEffect } from "react";

export const AnunceSection = () => {
  const images = ["/inicio.png", "/inicio4.png", "/inicio3.png"];
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); // Activa la animación de salida

      setTimeout(() => {
        setCurrentImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          return images[(currentIndex + 1) % images.length];
        });
        
        setIsTransitioning(false); // Activa la animación de entrada
      }, 500); // Tiempo de la animación de salida antes de cambiar la imagen
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#01335E] text-white py-4 px-4 border-2 border-[#01335E] rounded-2xl relative">
      <div className="absolute inset-0 border-4 border-white rounded-2xl pointer-events-none"></div>
      <div className="relative w-full h-[300px] flex">
        {/* Sección de texto */}
        <div className="w-1/2 h-full flex flex-col justify-center p-6 bg-[#01335E] rounded-l-2xl">
          <h1 className="text-4xl font-extrabold leading-tight animate-pulse-title">
            ¡Transforma tus{" "}
            <span className="text-yellow-400 text-5xl">finanzas</span> con
            nosotros!
          </h1>
          <p className="text-base mt-4">
            Aprende a gestionar tus{" "}
            <span className="text-lg font-semibold">finanzas</span> con las
            mejores estrategias.
            <span className="text-sm block mt-2">
              No es solo ahorro, es crecimiento.
            </span>
          </p>
        </div>

        {/* Imagen*/}
        <div className="w-1/2 h-full overflow-hidden relative">
          <div
            className={`w-full h-full absolute transition-all duration-1000 ${
              isTransitioning
                ? "transform translate-y-[100%] opacity-0"
                : "transform translate-y-0 opacity-100"
            }`}
          >
            <img
              src={currentImage}
              alt="Imagen representativa"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
