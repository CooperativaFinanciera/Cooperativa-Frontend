import { FaUsers, FaBriefcase, FaCreditCard, FaChartBar } from "react-icons/fa";

export const CardServices = () => {
  const services = [
    {
      title: "Accionista",
      icon: <FaUsers size={40} />,
      description: "Únete a nuestra comunidad de accionistas y accede a oportunidades de inversión que permiten el crecimiento colectivo.",
      link: "https://www.cooperativafinancieraaneupi.com/consultas",
    },
    {
      title: "Empleos y Vacante",
      icon: <FaBriefcase size={40} />,
      description: "Descubre oportunidades laborales relevantes en tu campo de interés.",
      link: "https://aneupi.com/ofertas-laborales",
    },
    {
      title: "Créditos",
      icon: <FaCreditCard size={40} />,
      description: "Accede a nuestras agencias físicas en todo el país para obtener más información sobre productos crediticios.",
      link: "https://www.cooperativafinancieraaneupi.com/cr%C3%A9dito-ordinario",
    },
    {
      title: "Prácticas",
      icon: <FaChartBar size={40} />,
      description: "Realiza prácticas profesionales y adquiere experiencia y conviértete en un gran profesional.",
      link: "https://aneupi.com/ofertas-practicas",
    },
  ];

  return (
    <section className="text-center mb-8">
      <h2 className="text-2xl font-bold text-[#01335E] mb-6">Nuestros Servicios</h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col w-52 h-[280px] gap-4 p-5  bg-[#01335E] rounded-xl items-center justify-between shadow-lg border-4 border-[#1d3557]
            hover:border-yellow-400 hover:scale-105 transition-all duration-300 animate-bounce-wave`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-white">{service.icon}</div>
            <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            <p className="text-gray-200 text-sm text-center">{service.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};
