import { useState, useEffect } from "react";
import { FaEye, FaHeart } from "react-icons/fa";

const news = [
  {
    image: "/homeResources/CongresoInternacional.png",
    title: "¿Por qué asistir al Congreso Internacional?",
    description: "Descubre temas clave sobre educación financiera, innovación y liderazgo.",
    link: "https://aneupi.com/congreso-internacional",
  },
  {
    image: "/homeResources/notice1.png",
    title: "¡Descubre ganancias!",
    description: "Conoce nuestras iniciativas y proyectos enfocadas en el bienestar de nuestros accionistas.",
    link: "https://aneupi.com",
  },
  {
    image: "/homeResources/notice2.png",
    title: "Crecimiento financiero",
    description: "Mantente informado con los últimos anuncios relevantes para nuestra comunidad.",
    link: "https://aneupi.com/anuncios",
  },
  {
    image: "/homeResources/notice.png",
    title: "Nueva actualización de servicios",
    description: "Descubre las mejoras recientes en nuestros servicios y cómo te benefician.",
    link: "https://aneupi.com/actualizacion",
  },
];

export const NoticeSection = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [likes, setLikes] = useState(Array(news.length).fill(0));
  const [views, setViews] = useState(Array(news.length).fill(0));
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (!animating) {
      setAnimating(true);
      setTimeout(() => {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % news.length);
        setAnimating(false);
      }, 500); // Duración de la animación
    }
  };

  const visibleNews = [];
  for (let i = 0; i < 3; i++) {
    visibleNews.push(news[(carouselIndex + i) % news.length]);
  }

  const handleLike = (index: number) => {
    const updatedLikes = [...likes];
    updatedLikes[index] += 1;
    setLikes(updatedLikes);
  };

  const handleView = (index: number) => {
    const updatedViews = [...views];
    updatedViews[index] += 1;
    setViews(updatedViews);
  };

  return (
    <div className="max-w-4xl mx-auto p-2">
      <h1 className="text-xl font-bold text-gray-800 mb-3 text-left">
        Noticias del Día
      </h1>

      {/* Contenedor del carrusel */}
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-transform duration-500 ease-in-out transform">
          {visibleNews.map((item, index) => {
            const originalIndex = (carouselIndex + index) % news.length;

            return (
              <div
                key={originalIndex}
                className={`bg-white shadow-md rounded-lg overflow-hidden p-2 transform transition-all duration-500 ease-in-out ${
                  animating ? "opacity-100 translate-x-10" : "opacity-100 translate-x-0"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <div className="p-3">
                  <h2 className="text-md font-semibold text-gray-800 mb-2">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-500 hover:underline"
                      onClick={() => handleView(originalIndex)}
                    >
                      {item.title}
                    </a>
                  </h2>
                  <hr className="mb-2" />
                  <div className="flex items-center justify-between text-gray-500 text-xs">
                    <div className="flex items-center gap-2">
                      <FaEye /> <span>{views[originalIndex]}</span>
                    </div>
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => handleLike(originalIndex)}
                    >
                      <span>{likes[originalIndex]}</span> <FaHeart className="text-red-500" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Círculos de navegación */}
      <div className="flex justify-center mt-4">
        {news.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full transition-all ${
              index === carouselIndex ? "bg-blue-500 scale-125" : "bg-gray-300"
            }`}
            onClick={() => setCarouselIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
