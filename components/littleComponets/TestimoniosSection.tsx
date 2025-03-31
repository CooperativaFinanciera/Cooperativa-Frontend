import { VscHeart } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";

export const Testimonios = [
    {
        ciudad: "Cuenca",
        texto: "Invertir en ANEUPI ha sido una de las mejores decisiones financieras que he tomado. Su crecimiento sostenido y enfoque en la innovación han generado excelentes rendimientos para los accionistas.",
        nombre: "Carlos Méndez",
        rol: "Accionista desde 2015",
        img: "/homeResources/Persona1.avif"
    },
    {
        ciudad: "Quito",
        texto: "ANEUPI no solo ha fortalecido mi cartera de inversiones, sino que también ha demostrado ser un banco con una visión clara de futuro. La transparencia en sus operaciones y la solidez de sus resultados me dan confianza absoluta.",
        nombre: "María González",
        rol: "Accionista y Empresaria", 
        img: "/homeResources/Persona13.avif"
    },
    {
        ciudad: "Colombia",
        texto: "Como inversionista extranjero, siempre busco empresas con estabilidad y proyección de crecimiento. ANEUPI ha superado mis expectativas con su estrategia de expansión y su rentabilidad sostenida.",
        nombre: "Javier Ramírez",
        rol: "Inversionista Internacional",
        img: "/homeResources/Persona9.avif"
    },
    {
        ciudad: "Loja",
        texto: "No solo soy accionista de ANEUPI, sino también cliente, y puedo decir que la calidad de sus servicios es excepcional. Su compromiso con la excelencia se refleja en el valor que ha generado para los inversionistas.",
        nombre: "Lorena Castillo",
        rol: "Accionista y Cliente",
        img: "/homeResources/Persona4.jpg"
    },
    {
        ciudad: "Guayaquil",
        texto: "ANEUPI ha demostrado una gestión impecable, incluso en tiempos de incertidumbre económica. La solidez de su cartera de productos y su capacidad de adaptación hacen que mi inversión esté en buenas manos.",
        nombre: "Alejandro Fernández",
        rol: "Inversionista a Largo Plazo",
        img: "/homeResources/Persona5.avif"
    },
    {
        ciudad: "Santo Domingo",
        texto: "Lo que más valoro de ANEUPI es su enfoque en el crecimiento sostenible. Sus políticas de responsabilidad social y su impacto positivo en la economía local hacen que me sienta orgullosa de ser accionista.",
        nombre: "Beatriz Paredes",
        rol: "Empresaria y Accionista",
        img: "/homeResources/Persona12.avif"
    },
    {
        ciudad: "Machala",
        texto: "Los informes financieros de ANEUPI reflejan un crecimiento constante y una excelente gestión de riesgos. Como analista, veo un futuro prometedor para este banco, y como accionista, disfruto de los beneficios de su éxito.",
        nombre: "Kerry Astudillo",
        rol: "Analista Financiero y Accionista",
        img: "/homeResources/Persona8.jpg"
    },
    {
        ciudad: "Portoviejo",
        texto: "Me inicié en el mundo de las inversiones con ANEUPI, y ha sido una experiencia increíble. Sus programas de educación financiera y su compromiso con los inversionistas jóvenes hacen que me sienta segura y motivada.",
        nombre: "Verónica Rivas",
        rol: "Joven Inversionista",
        img: "/homeResources/Persona7.avif"
    },
    {
        ciudad: "Santa Elena",
        texto: "ANEUPI ha evolucionado con los años, pero su compromiso con la rentabilidad y la transparencia sigue intacto. Haber invertido hace más de una década fue una decisión acertada, y hoy sigo viendo los frutos de esa elección.",
        nombre: "Eduardo Salazar",
        rol: "Accionista desde 2010",
        img: "/homeResources/Persona9.avif"
    }, 
    {
        ciudad: "Manta",
        texto: "ANEUPI se ha convertido en un pilar fundamental en nuestro portafolio de inversiones. Su estabilidad y capacidad de generar valor para los accionistas lo hacen una de las mejores opciones en el sector bancario.",
        nombre: "Isabel Correa",
        rol: "Directora de una Firma de Inversiones",
        img: "/homeResources/Persona11.avif"
    }
];

export const TestimoniosSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [likes, setLikes] = useState(Array(Testimonios.length).fill(0));
    const [dislikes, setDislikes] = useState(Array(Testimonios.length).fill(0));
    const [showArrows, setShowArrows] = useState(false);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? Testimonios.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === Testimonios.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

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

    return(
        <div className=" flex flex-col w-full h-[500px] gap-5 border-b-8 border-[#25466a] items-center justify-center">
            <h1 className="font-serif font-semibold text-[#25466a] text-3xl">Testimonios de Nuestros Accionistas</h1>
            <div 
                className="relative w-[1000px] h-[500px] flex flex-col gap-5 items-center justify-center overflow-hidden"
                onMouseEnter={() => setShowArrows(true)}
                onMouseLeave={() => setShowArrows(false)}
            >
                {showArrows && (
                    <button onClick={prevSlide} className="absolute left-0 p-2 bg-gray-200 rounded-full text-[#25466a]">
                        <FaChevronLeft />
                    </button>
                )}
                
                <div className="flex flex-row gap-4 w-[1200px] h-[450px] overflow-hidden items-center justify-center">
                    {Testimonios.slice(currentIndex, currentIndex + 3).map((testimonio, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <div className="flex flex-col w-[300px] h-[320px] items-center gap-4 p-4 bg-[#25466a] hover:bg-[#3a6a87] rounded-lg shadow-lg">
                                <h3 className="text-white text-xl font-serif font-bold">{testimonio.ciudad}</h3>
                                <p className="text-white text-medium font-serif">"{testimonio.texto}"</p>
                                <div className="flex flex-row gap-2">
                                    <img 
                                        src={testimonio.img} 
                                        alt="Imagen de Accionista"
                                        width={100} 
                                        height={100}
                                        className="rounded-full border-2 border-white"
                                    />
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-white text-sm font-semibold">{testimonio.nombre}</h4>
                                        <p className="text-white text-sm">{testimonio.rol}</p> 
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center gap-2">
                                <button onClick={() => handleLike(index + currentIndex)} className="w-14 h-10 gap-2 text-[#25466a] font-bold bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center">
                                    <VscHeart />
                                    <p>{likes[index + currentIndex]}</p>
                                </button>
                                <button onClick={() => handleDislike(index + currentIndex)} className="w-14 h-10 gap-2 text-red-700 font-bold bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center">
                                    <VscClose />
                                    <p>{dislikes[index + currentIndex]}</p>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {showArrows && (
                    <button onClick={nextSlide} className="absolute right-0 p-2 bg-gray-200 rounded-full text-[#25466a]">
                        <FaChevronRight />
                    </button>
                )}
                
            </div>
        </div>
    );
}