
import { useState,useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CorporateBrands = () => {
    const brands = [
        { src: "/Logos/logoAneupiFundacion.avif", alt: "Logo de la fundación", link: "/" },
        { src: "leceni.png", alt: "Logo de la constructora", link: "/" },
        { src: "/Logos/logoAneupiAcademia.avif", alt: "Logo de la academia", link: "/" },
        { src: "/Logos/logoAneupiTV.avif", alt: "Logo de la tv", link: "/" },
        { src: "gatitoplis.png", alt: "Logo de la Red Social", link: "/" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showArrows, setShowArrows] = useState(false);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : brands.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < brands.length - 1 ? prevIndex + 1 : 0));
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return(
        <div 
            className="flex flex-col w-full h-[400px] gap-5 border-b-8 border-[#25466a] items-center relative"
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
        >
            <h1 className="font-serif font-semibold text-[#25466a] text-3xl">
                Conoce Nuestras Marcas Corporativas
            </h1>
            <div className="relative flex items-center justify-center w-[1000px] h-[250px]">
                <div className="flex overflow-hidden w-[600px] h-[250px]">
                    <div
                        className="flex transition-transform duration-500 ease-in-out justify-center items-center gap-4"
                        style={{ transform: `translateX(-${currentIndex * 180}px)` }}
                    >
                        {brands.concat(brands).map((brand, index) => (
                            <div key={index} className="flex-shrink-0 w-[180px] flex justify-center">
                                <a href={brand.link}>
                                    <img 
                                        src={brand.src} 
                                        alt={brand.alt}
                                        width={180}
                                        height={180}
                                        className="rounded-full shadow-lg"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                {showArrows && (
                    <button 
                        className="absolute left-0 justify-center p-2 bg-white shadow-lg rounded-full" 
                        onClick={handlePrev}
                    >
                        <ChevronLeft size={32} color="#25466a" />
                    </button>
                )}
                {showArrows && (
                    <button 
                        className="absolute right-0 justify-center p-2 bg-white shadow-lg rounded-full" 
                        onClick={handleNext}
                    >
                        <ChevronRight size={32} className="text-[#25466a]" />
                    </button>
                )}
            </div>
        </div>
    );
}