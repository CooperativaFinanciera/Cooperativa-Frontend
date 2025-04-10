const Revistas = () => {
  const revistas = [
    {
      nombre: "Cooperativa de Ahorro",
      imagen: "/revista2.jpeg",
      enlace: "https://www.cooperativafinancieraaneupi.com/",
      descripcion:
        "Publicación enfocada en el crecimiento de las cooperativas de ahorro, estrategias financieras y desarrollo comunitario.",
    },
    {
      nombre: "National Geographic",
      imagen: "https://tse1.mm.bing.net/th?id=OIP.Rk7Mj5AqwXXz7D3VuyDp9AHaKu&pid=Api",
      enlace: "https://www.nationalgeographic.com/",
      descripcion:
        "Revista reconocida por sus impresionantes fotografías y artículos sobre geografía, ciencia, historia y cultura mundial.",
    },
    {
      nombre: "Time Magazine",
      imagen: "https://tse4.mm.bing.net/th?id=OIP.WhiWK5ACweJ1JStFyYPONQHaJ1&pid=Api",
      enlace: "https://www.time.com/",
      descripcion:
        "Publicación semanal que cubre noticias internacionales, política, negocios, tecnología y cultura.",
    },
    {
      nombre: "Forbes",
      imagen: "https://tse4.mm.bing.net/th?id=OIP.l8dO6fgeJntDUbBsk-fYtQHaJs&pid=Api",
      enlace: "https://www.forbes.com/",
      descripcion:
        "Publicación centrada en negocios, inversiones, tecnología, emprendimiento, liderazgo y estilo de vida.",
    },
    {
      nombre: "Scientific American",
      imagen: "https://tse4.mm.bing.net/th?id=OIP.yAYcL8uJaW1hoLYHx1e6_gHaJz&pid=Api",
      enlace: "https://www.scientificamerican.com/",
      descripcion:
        "Revista que ofrece artículos sobre avances científicos, investigaciones y descubrimientos en diversas disciplinas.",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      {/* Banner superior */}
      <div className="relative w-full h-[350px]">
        <img
          src="/revista.png"
          alt="Revistas portada"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-md">
            Explora las mejores publicaciones en un solo lugar
          </h1>
        </div>
      </div>

      {/* Lista de revistas */}
      <div className="mt-10 space-y-8 w-full max-w-6xl px-4">
        {revistas.map((revista, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4 gap-6 ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            } border border-transparent hover:border-[#00335f]`}
          >
            <img
              src={revista.imagen}
              alt={`Portada de revista ${revista.nombre}`}
              className="w-48 h-60 object-cover rounded-lg transform hover:scale-105 transition duration-300"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2 text-[#00335f] flex items-center gap-2">
                {revista.nombre}
                <span className="text-[#00335f] text-xl">↗</span>
              </h2>
              <p className="text-gray-600">{revista.descripcion}</p>
              <a
                href={revista.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-[#00335f] text-white text-sm rounded-md hover:bg-white hover:text-[#00335f] border-2 border-[#00335f] transition duration-300"
              >
                Visitar revista
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Revistas;
