import { VscHeart } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { VscDebugStart } from "react-icons/vsc";
import { VscDebugPause } from "react-icons/vsc";

const testimonios = [
    {
        ciudad: "Riobamba",
        texto: "Invertir en ANEUPI ha sido una de las mejores decisiones financieras que he tomado.",
        nombre: "Edwin Pomatoca",
        rol: "Accionista desde 2015",
        img: "/homeResources/Persona1.jpg"
    },
    {
        ciudad: "Bella Maria",
        texto: "ANEUPI no solo ha fortalecido mi cartera de inversiones, sino que también ha demostrado ser un banco con una visión clara de futuro.",
        nombre: "Luis Heredia",
        rol: "Accionista y Empresaria", 
        img: "/homeResources/Persona9.jpg"
    },
    {
        ciudad: "Chacalata",
        texto: "Como inversionista extranjero, siempre busco empresas con estabilidad y proyección de crecimiento.",
        nombre: "Alfonso Mora",
        rol: "Accionista y Empresario",
        img: "/homeResources/Persona2.jpg"
    },
    {
        ciudad: "Balsas",
        texto: "No solo soy accionista de ANEUPI, sino también cliente, y puedo decir que la calidad de sus servicios es excepcional.",
        nombre: "Luis Heredia",
        rol: "Accionista y Cliente",
        img: "/homeResources/Persona10.jpg"
    },
    {
        ciudad: "Cuenca",
        texto: "ANEUPI ha demostrado una gestión impecable, incluso en tiempos de incertidumbre económica.",
        nombre: "Joel Erraez M",
        rol: "Accionista y Empresario",
        img: "/homeResources/Persona5.jpg"
    },
    {
        ciudad: "Balsas",
        texto: "Lo que más valoro de ANEUPI es su enfoque en el crecimiento sostenible.",
        nombre: "Jose Herrera",
        rol: "Accionista y Jubilado",
        img: "/homeResources/Persona16.png"
    },
    {
        ciudad: "Machala",
        texto: "Los informes financieros de ANEUPI reflejan un crecimiento constante y una excelente gestión de riesgos.",
        nombre: "Kerry Astudillo",
        rol: "Accionista y cliente",
        img: "/homeResources/Persona8.jpg"
    },
    {
        ciudad: "Portoviejo",
        texto: "Me inicié en el mundo de las inversiones con ANEUPI, y ha sido una experiencia increíble.",
        nombre: "Elizabeth Maldonado",
        rol: "Accionista desde 2020",
        img: "/homeResources/Persona7.jpg"
    },
    {
        ciudad: "Guayaquil",
        texto: "ANEUPI ha evolucionado con los años, pero su compromiso con la rentabilidad y la transparencia sigue intacto.",
        nombre: "Rodney Llanos",
        rol: "Accionista desde 2025",
        img: "/homeResources/Persona15.png"
    }, 
    {
        ciudad: "Cuenca",
        texto: "Su estabilidad y capacidad de generar valor para los accionistas lo hacen una de las mejores opciones en el sector bancario.",
        nombre: "Jorge Arevalo",
        rol: "Accionista y Empresaria",
        img: "/homeResources/Persona9.jpg"
    },
    {
        ciudad: "Cañar",
        texto: "Su enfoque en la sostenibilidad y la innovación me ha dado una gran seguridad en mi inversión.",
        nombre: "Diay Camas",
        rol: "Accionista",
        img: "/homeResources/Persona14.jpg"
    },
    {
        ciudad: "Susudel",
        texto: "Su transparencia y crecimiento continuo han generado grandes beneficios para mi portafolio de inversiones.",
        nombre: "Daniel Espinoza M.",
        rol: "Accionista e Inversionista",
        img: "/homeResources/Persona10.jpg"
    }
];

export const TestimoniosSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [likes, setLikes] = useState(Array(testimonios.length).fill(0));
    const [dislikes, setDislikes] = useState(Array(testimonios.length).fill(0));
    const [isHovered, setIsHovered] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonios.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonios.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        if (!isHovered && !isPaused) {
            const interval = setInterval(nextSlide, 4000);
            return () => clearInterval(interval);
        }
    }, [isHovered, isPaused]);

    const handleLike = (index: number) => {
        const newLikes = [...likes];
        newLikes[index] += 1;
        setLikes(newLikes);
    };

    const handleDislike = (index: number) => {
        const newDislikes = [...dislikes];
        newDislikes[index] += 1;
        setDislikes(newDislikes);
    };

    const getDisplayedTestimonios = () => {
        return [
            testimonios[currentIndex % testimonios.length],
            testimonios[(currentIndex + 1) % testimonios.length],
            testimonios[(currentIndex + 2) % testimonios.length]
        ];
    };

    return(
        <div className=" flex flex-col w-full h-[500px] gap-5 border-b-8 border-[#25466a] items-center justify-center">
            
            <h1 className="font-serif font-semibold pb-4 text-[#25466a] text-3xl">Testimonios de Nuestros Accionistas</h1>
            <div className="flex flex-col gap-2 items-center justify-center w-full">
                {/* Botones para detener animación */}
                <div className="flex gap-4">
                    <button onClick={() => setIsPaused(true)} className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-orange-500 rounded-full shadow-xl"><VscDebugPause /></button>
                    <button onClick={() => setIsPaused(false)} className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-orange-500 rounded-full shadow-xl"><VscDebugStart /></button>
                </div>
                <div 
                    className="relative w-[1200px] h-[300px] flex flex-col gap-8 items-center justify-center overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Boton de navegación */}
                    <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 bg-white rounded-full text-[#25466a] shadow-lg">
                        <FaChevronLeft />
                    </button>
                    {/*Tarjeta*/}
                    <div className="flex flex-row gap-4 w-[1150px] h-[500px] overflow-hidden items-center justify-center">
                        {getDisplayedTestimonios().map((testimonio, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <div className={`flex flex-col w-[300px] h-[220px] items-center gap-4 p-4 
                                    ${index % 2 === 0 ? 'bg-[#25466a] hover:bg-[#3a6a87] text-white' : 'bg-orange-500 hover:bg-orange-600 text-black'}  
                                    rounded-lg shadow-lg`}>
                                    <h3 className="text-xl font-serif font-bold">{testimonio.ciudad}</h3>
                                    <div className="flex flex-row gap-2 items-center justify-center">
                                        {/* Imagen */}
                                        <img 
                                            src={testimonio.img} 
                                            alt="Imagen de Accionista"
                                            width={60} 
                                            height={60}
                                            className="rounded-full border-2 border-white"
                                        />
                                        <div className="flex flex-col gap-1">
                                            <h4 className="text-sm font-semibold">{testimonio.nombre}</h4>
                                            <p className="text-sm">{testimonio.rol}</p> 
                                        </div>
                                    </div>
                                    <p className="text-sm font-serif flex-grow text-center">"{testimonio.texto}"</p> 
                                </div>
                                {/* Like and Dislike botones */}
                                <div className="flex flex-row justify-center gap-2">
                                    <button onClick={() => handleLike((currentIndex + index) % testimonios.length)} className="w-14 h-10 gap-2 text-[#25466a] font-bold bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center">
                                        <VscHeart />
                                        <p>{likes[(currentIndex + index) % testimonios.length]}</p>
                                    </button>
                                    <button onClick={() => handleDislike((currentIndex + index) % testimonios.length)} className="w-14 h-10 gap-2 text-red-700 font-bold bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center">
                                        <VscClose />
                                        <p>{dislikes[(currentIndex + index) % testimonios.length]}</p>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Boton de navegación */}
                    <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 bg-white rounded-full text-[#25466a] shadow-lg">
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
}
