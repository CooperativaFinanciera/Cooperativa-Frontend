import React, { useState, useEffect } from 'react';

export const AnunceSection = () => {
    const images = ["/homeResources/inicio.png", "/homeResources/inicio4.png", "/homeResources/inicio3.png"];
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [imageAnimation, setImageAnimation] = useState('slideUp');
    useEffect(() => {
        const interval = setInterval(() => {
            setImageAnimation(imageAnimation === 'slideUp' ? 'slideDown' : 'slideUp');
            setCurrentImage((prevImage) => {
                const currentIndex = images.indexOf(prevImage);
                const nextIndex = (currentIndex + 1) % images.length;
                return images[nextIndex];
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [imageAnimation]);

    return (
        <div className="h-[400px] border-b-8 border-[#25466a]">
            <div className="w-full bg-[#01335E] text-white py-4 px-4 border-2 border-[#01335E] rounded-2xl relative">
                <div className="absolute inset-0 border-4 border-white rounded-2xl pointer-events-none"></div>
                <div className="relative w-full h-[300px] flex">
                    <div className="w-1/2 h-full flex flex-col justify-center p-6 bg-[#01335E] rounded-l-2xl">
                        <h1 className="text-4xl font-extrabold leading-tight animate-pulse-title">
                            ¡Transforma tus <span className="text-yellow-400 text-5xl">finanzas</span> con nosotros!
                        </h1>
                        <p className="text-base mt-4">
                            Aprende a gestionar tus <span className="text-lg font-semibold">finanzas</span> con las mejores estrategias.
                            <span className="text-sm block mt-2">No es solo ahorro, es crecimiento.</span>
                        </p>
                    </div>

                    <div className="w-1/2 h-full">
                        <img
                            src={currentImage}
                            alt="Imagen representativa"
                            className={`w-full h-full object-cover rounded-2xl transition-all duration-1000 ${imageAnimation === 'slideUp' ? 'animate-slideUp' : 'animate-slideDown'}`}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}