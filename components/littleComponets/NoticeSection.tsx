import { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft, FaNewspaper } from "react-icons/fa";

export const NoticeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [news, setNews] = useState([
    {
      image: "/homeResources/CongresoInternacional.png",
      imageTitle: "Congreso Internacional 2024",
      title: "¿Por qué asistir al Congreso Internacional?",
      description: "Descubre temas clave sobre educación financiera, innovación y liderazgo.",
      link: "https://aneupi.com/congreso-internacional",
    },
    {
      image: "portada.png",
      imageTitle: "Bienvenido a ANEUPI",
      title: "¡Bienvenido a ANEUPI!",
      description: "Conoce nuestras iniciativas y proyectos enfocados en el bienestar de nuestros accionistas.",
      link: "https://aneupi.com",
    },
    {
      image: "/homeResources/anuncio.png",
      imageTitle: "Anuncios Importantes",
      title: "Anuncios importantes",
      description: "Mantente informado con los últimos anuncios relevantes para nuestra comunidad.",
      link: "https://aneupi.com/anuncios",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? news.length - 1 : prevIndex - 1));

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex border border-gray-300 h-96 relative">
      {/* Imagen */}
      <div className="w-1/2 h-full relative">
        <img src={news[currentIndex].image} alt={news[currentIndex].imageTitle} className="w-full h-full object-cover" />
      </div>

      {/* Contenido */}
      <div className="w-1/2 p-6 flex flex-col justify-between h-full text-center">
        <h3 className="text-2xl font-extrabold text-white bg-[#01335E] p-3 rounded-md flex items-center justify-center gap-2">
          <FaNewspaper className="text-yellow-400 text-3xl" /> {news[currentIndex].title}
        </h3>
        <p className="text-md text-gray-700 mt-4">{news[currentIndex].description}</p>
        <a
          href={news[currentIndex].link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 bg-[#01335E] text-white text-lg font-semibold text-center rounded-md hover:bg-blue-900 transition duration-300"
        >
          Ver más
        </a>
      </div>

      {/* Botones de navegación */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-300 hover:bg-gray-200">
        <FaArrowLeft className="text-gray-700" />
      </button>

      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-300 hover:bg-gray-200">
        <FaArrowRight className="text-gray-700" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {news.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? "bg-yellow-500 scale-110" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};