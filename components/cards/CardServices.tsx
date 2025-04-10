import { FaUsers, FaBriefcase, FaCreditCard , FaChartBar } from "react-icons/fa";

export const CardServices = () => {
  const services = [
    { 
      title: "Accionista", 
      icon: <FaUsers size={60} />,
      description: "Únete a nuestra comunidad de accionistas y accede a oportunidades de inversión que permiten el crecimiento colectivo.",
      link: "/" 
    },
    { 
      title: "Empleos y Vacante", 
      icon: <FaBriefcase size={60} />, 
      description: "Descubre oportunidades laborales relevantes en tu campo de interés.", 
      link: "/" 
    },
    { 
      title: "Credítos", 
      icon: <FaCreditCard  size={60} />,
      description: "Accede a nuestras agencias físicas en todo el país para obtener más información sobre productos crediticios.", 
      link: "/" 
    },
    { 
      title: "Prácticas", 
      icon: <FaChartBar size={60} />,
      description: "Realiza prácticas profesionales y adquiere experiencia y conviertete en un gran profesional.", 
      link: "/" 
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full justify-center mt-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col w-60 h-[350px] gap-4 p-6 bg-[#25466a] rounded-lg items-center justify-center shadow-2xl transition-all transform hover:scale-105 hover:shadow-xl hover:bg-[#3a6a87] border-4 border-transparent"
        >
          <div className="text-white mb-3">
            {service.icon}
          </div>
          <h1 className="text-3xl font-semibold text-white mb-2">{service.title}</h1>
          <p className="text-white text-sm text-center mb-4">{service.description}</p>
          <a href={service.link} className="w-full text-center">
            <button className="w-full py-2 bg-[#F4A300] rounded-md text-white font-semibold hover:bg-yellow-600 transition duration-300">
              Ver más
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};