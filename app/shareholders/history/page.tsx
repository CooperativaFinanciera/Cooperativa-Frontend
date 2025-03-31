"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PagoImage from "@/app/assets/image/pago.jpg";
import CuentaImage from "@/app/assets/image/Cuenta.jpg";
import JubiImage from "@/app/assets/image/Jubi.jpg";
import VejezImage from "@/app/assets/image/Vejez.jpg";
import DiscaImage from "@/app/assets/image/Disca.jpg";
import historiesImg from "@/app/assets/image/histories.jpg";
import opinionsImg from "@/app/assets/image/opiniones.jpg";
import CommentCard from "@/components/cards/commentCard";
import RegisterOpinionForm from "@/components/forms/opinionForm";
const imagesTop = [PagoImage, CuentaImage, DiscaImage];
const imagesBottom = [JubiImage, VejezImage];

const stories = [
  {
    name: "Henry R. Erráez",
    about: "Henry Pérez es un empresario, que ha logrado consolidar cooperativas a nivel nacional e internacional.",
    phone: "+593 98 334 1084",
    email: "hyerraezm@Ifaneupi.fin.ec",
    introduction: "Gracias a la Cooperativa Financiera Aneupi, Juan ha podido acceder a créditos y asesoría financiera personalizada que le han permitido expandir su negocio y mejorar su calidad de vida.",
    avatar: JubiImage.src,
    place: "Susudel - Ecuador",
  },
  {
    name: "María del Pilar Mejía",
    about: "Henry Pérez es un empresario, que ha logrado consolidar cooperativas a nivel nacional e internacional.",
    phone: "+593 98 334 1084",
    email: "mrmejiac@Ifaneupi.fin.ec",
    introduction: "Gracias a la Cooperativa Financiera Aneupi, Juan ha podido acceder a créditos y asesoría financiera personalizada que le han permitido expandir su negocio y mejorar su calidad de vida.",
    avatar: JubiImage.src,
    place: "Cuenca - Ecuador",
  },
  {
    name: "Danny S. Mendoza",
    about: "Henry Pérez es un empresario, que ha logrado consolidar cooperativas a nivel nacional e internacional.",
    phone: "+593 98 334 1084",
    email: "dymendozac@Ifaneupi.fin.ec",
    introduction: "Gracias a la Cooperativa Financiera Aneupi, Juan ha podido acceder a créditos y asesoría financiera personalizada que le han permitido expandir su negocio y mejorar su calidad de vida.",
    avatar: JubiImage.src,
    place: "Guayaquil - Ecuador",
  },
  {
    name: "Daniel S. Espinoza",
    about: "Henry Pérez es un empresario, que ha logrado consolidar cooperativas a nivel nacional e internacional.",
    phone: "+593 98 334 1084",
    email: "dlespinozam@Ifaneupi.fin.ec",
    introduction: "Gracias a la Cooperativa Financiera Aneupi, Juan ha podido acceder a créditos y asesoría financiera personalizada que le han permitido expandir su negocio y mejorar su calidad de vida.",
    avatar: JubiImage.src,
    place: "Oña - Ecuador",
  },

  {
    name: "Luis A. Heredia",
    about: "Henry Pérez es un empresario, que ha logrado consolidar cooperativas a nivel nacional e internacional.",
    phone: "+593 98 334 1084",
    email: "lsheredian@Ifaneupi.fin.ec",
    introduction: "Gracias a la Cooperativa Financiera Aneupi, Juan ha podido acceder a créditos y asesoría financiera personalizada que le han permitido expandir su negocio y mejorar su calidad de vida.",
    avatar: JubiImage.src,
    place: "Balsas - Ecuador",
  },

  {
    name: "Ligia V. Mora",
    about: "Henry Pérez es un empresario, que ha logrado consolidar cooperativas a nivel nacional e internacional.",
    phone: "+593 98 334 1084",
    email: "lamoraq@Ifaneupi.fin.ec",
    introduction: "Gracias a la Cooperativa Financiera Aneupi, Juan ha podido acceder a créditos y asesoría financiera personalizada que le han permitido expandir su negocio y mejorar su calidad de vida.",
    avatar: JubiImage.src,
    place: "Santiago - Ecuador",
  },
  {
    name: "Patricio F. Rodríguez",
    about: "Henry Pérez es un empresario, que ha logrado consolidar cooperativas a nivel nacional e internacional.",
    phone: "+593 98 334 1084",
    email: "porodriguezr@Ifaneupi.fin.ec",
    introduction: "Gracias a la Cooperativa Financiera Aneupi, Juan ha podido acceder a créditos y asesoría financiera personalizada que le han permitido expandir su negocio y mejorar su calidad de vida.",
    avatar: JubiImage.src,
    place: "Azogues - Ecuador",
  },

  {
    name: "Joel W. Erráez",
    about: "Henry Pérez es un empresario, que ha logrado consolidar cooperativas a nivel nacional e internacional.",
    phone: "+593 98 334 1084",
    email: "jlerraezm@Ifaneupi.fin.ec",
    introduction: "Gracias a la Cooperativa Financiera Aneupi, Juan ha podido acceder a créditos y asesoría financiera personalizada que le han permitido expandir su negocio y mejorar su calidad de vida.",
    avatar: JubiImage.src,
    place: "Susudel - Ecuador",
  },

  {
    name: "Edwin R. Pomatoca",
    about: "Henry Pérez es un empresario, que ha logrado consolidar cooperativas a nivel nacional e internacional.",
    phone: "+593 98 334 1084",
    email: "enpotamocag@Ifaneupi.fin.ec",
    introduction: "Gracias a la Cooperativa Financiera Aneupi, Juan ha podido acceder a créditos y asesoría financiera personalizada que le han permitido expandir su negocio y mejorar su calidad de vida.",
    avatar: JubiImage.src,
    place: "Cuenca - Ecuador",
  },

  {
    name: "Yadira N. Erráez",
    about: "Henry Pérez es un empresario, que ha logrado consolidar cooperativas a nivel nacional e internacional.",
    phone: "+593 98 334 1084",
    email: "yaerraezm@Ifaneupi.fin.ec",
    introduction: "Gracias a la Cooperativa Financiera Aneupi, Juan ha podido acceder a créditos y asesoría financiera personalizada que le han permitido expandir su negocio y mejorar su calidad de vida.",
    avatar: JubiImage.src,
    place: "Susudel - Ecuador",
  },

  {
    name: "Luis M. Espinoza",
    about: "Henry Pérez es un empresario, que ha logrado consolidar cooperativas a nivel nacional e internacional.",
    phone: "+593 98 334 1084",
    email: "lsespinozam@Ifaneupi.fin.ec",
    introduction: "Gracias a la Cooperativa Financiera Aneupi, Juan ha podido acceder a créditos y asesoría financiera personalizada que le han permitido expandir su negocio y mejorar su calidad de vida.",
    avatar: JubiImage.src,
    place: "Susudel - Ecuador",
  },
  {
    name: "Jorge F. Arevalo",
    about: "Henry Pérez es un empresario, que ha logrado consolidar cooperativas a nivel nacional e internacional.",
    phone: "+593 98 334 1084",
    email: "jearevaloa@Ifaneupi.fin.ec",
    introduction: "Gracias a la Cooperativa Financiera Aneupi, Juan ha podido acceder a créditos y asesoría financiera personalizada que le han permitido expandir su negocio y mejorar su calidad de vida.",
    avatar: JubiImage.src,
    place: "Balsas - Ecuador",
  },
  {
    name: "Jose E. Herrera",
    about: "Henry Pérez es un empresario, que ha logrado consolidar cooperativas a nivel nacional e internacional.",
    phone: "+593 98 334 1084",
    email: "jeherrerar@Ifaneupi.fin.ec",
    introduction: "Gracias a la Cooperativa Financiera Aneupi, Juan ha podido acceder a créditos y asesoría financiera personalizada que le han permitido expandir su negocio y mejorar su calidad de vida.",
    avatar: JubiImage.src,
    place: "Balsas - Ecuador",
  },
  {
    name: "Manuel A. Mora",
    about: "Henry Pérez es un empresario, que ha logrado consolidar cooperativas a nivel nacional e internacional.",
    phone: "+593 98 334 1084",
    email: "mlmorau@Ifaneupi.fin.ec",
    introduction: "Gracias a la Cooperativa Financiera Aneupi, Juan ha podido acceder a créditos y asesoría financiera personalizada que le han permitido expandir su negocio y mejorar su calidad de vida.",
    avatar: JubiImage.src,
    place: "Chacalaca - Ecuador",
  },
  {
    name: "Elisa A. Maldonado",
    about: "Henry Pérez es un empresario, que ha logrado consolidar cooperativas a nivel nacional e internacional.",
    phone: "+593 98 334 1084",
    email: "eamaldonadom@Ifaneupi.fin.ec",
    introduction: "Gracias a la Cooperativa Financiera Aneupi, Juan ha podido acceder a créditos y asesoría financiera personalizada que le han permitido expandir su negocio y mejorar su calidad de vida.",
    avatar: JubiImage.src,
    place: "Portoviejo - Ecuador",
  },
  {
    name: "Daysi J. Camas",
    about: "Henry Pérez es un empresario, que ha logrado consolidar cooperativas a nivel nacional e internacional.",
    phone: "+593 98 334 1084",
    email: "dicamass@Ifaneupi.fin.ec",
    introduction: "Gracias a la Cooperativa Financiera Aneupi, Juan ha podido acceder a créditos y asesoría financiera personalizada que le han permitido expandir su negocio y mejorar su calidad de vida.",
    avatar: JubiImage.src,
    place: "Cañar - Ecuador",
  },

];

const comments = [
  { name: "Andrea Torres", city: "Quito", comment: "Ser accionista aquí ha sido la mejor decisión, el soporte es increíble." },
  { name: "Miguel Herrera", city: "Guayaquil", comment: "Muy satisfecho con los servicios financieros que ofrecen." },
  { name: "Lucía Gómez", city: "Cuenca", comment: "Lo que más valoro de Aneupi es su cercanía y trato humano. Siempre están dispuestos a resolver dudas y ofrecer soluciones personalizadas. Me gustaría que se implementaran más beneficios para los socios accionistas a largo plazo, como programas de fidelización." },
];


const History = () => {
  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentComment, setCurrentComment] = useState(0);

  useEffect(() => {
    const intervalHandlers = [
      setInterval(() => setTopIndex((prev) => (prev + 1) % imagesTop.length), 15000),
      setInterval(() => setBottomIndex((prev) => (prev + 1) % imagesBottom.length), 15000),
      setInterval(() => setCurrentComment((prev) => (prev + 1) % comments.length), 10000),
    ];
    return () => intervalHandlers.forEach(clearInterval);
  }, []);

  // Calcular el número máximo de páginas
  const maxPages = Math.ceil(stories.length / 2);

  // Función para avanzar a la siguiente página
  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 2 < stories.length) ? prev + 2 : prev);
  };

  // Función para retroceder a la página anterior
  const prevPage = () => {
    setCurrentIndex((prev) => Math.max(prev - 2, 0));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans p-6 space-y-16">
      {/* Historia de la Cooperativa */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-xl  w-full border border-[rgba(37,70,106,1)] grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-[rgba(37,70,106,1)] dark:text-blue-400 mb-4">Historia de la Cooperativa</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">La Cooperativa Financiera nació en Cuenca en junio de 2018, con la visión de promover la inclusión financiera y el apoyo mutuo entre sus miembros. Creada por estudiantes universitarios con discapacidad, su misión ha sido generar oportunidades económicas accesibles para todos.</p>
        </div>
        <div className="flex justify-center items-center">
          <Image src={imagesTop[topIndex]} alt="Historia de la Cooperativa" width={400} height={320} className="rounded-lg shadow-lg object-cover border-4 border-blue-600 dark:border-blue-400" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={imagesBottom[bottomIndex]} alt="Crecimiento de la Cooperativa" width={320} height={320} className="rounded-lg shadow-lg object-cover border-4 border-blue-600 dark:border-blue-400" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">Desde entonces, hemos crecido para convertirnos en una institución confiable, proporcionando servicios financieros como ahorro y crédito a cientos de socios, y fortaleciendo la seguridad económica de nuestra comunidad.</p>
        </div>
      </motion.div>

      {/* Historias de Accionistas - Carrusel */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full mt-16 h-screen flex flex-col justify-space-between"
        style={{
          backgroundImage: `url(${historiesImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-3xl font-bold text-white mb-4 text-center bg-[rgba(37,70,106,1)]">
          Historias de los(as) Accionistas
        </h2>

        <div className="relative w-full mx-auto">
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-blue-600 text-white rounded-full shadow-md transition-transform duration-300 hover:scale-110"
          >
            ◀
          </button>

          <div className="overflow-hidden w-full px-12">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Mostrar dos tarjetas a la vez */}
              {currentIndex < stories.length && (
                <CommentCard {...stories[currentIndex]} />
              )}
              {currentIndex + 1 < stories.length && (
                <CommentCard {...stories[currentIndex + 1]} />
              )}
            </motion.div>
          </div>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-blue-600 text-white rounded-full shadow-md transition-transform duration-300 hover:scale-110"
          >
            ▶
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-[rgba(37,70,106,1)] mb-4">Nos interesa tu opinion</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">En la <strong>Cooperativa Financiera Aneupi</strong>, valoramos profundamente lo que piensas. Tus comentarios y sugerencias nos ayudan a mejorar cada día para ofrecerte un mejor servicio. Queremos escucharte, porque tu opinión es clave para seguir creciendo juntos y construir un futuro financiero más sólido para todos nuestros socios. ¡Comparte con nosotros tus ideas y ayúdanos a mejorar!</p>
      </div>

      <div className="container max-w-auto px-6 md:px-12 mx-auto flex justify-center items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg min-h-screen">

        {/* Formulario de sugerencias con placeholders */}
          <RegisterOpinionForm />
      </div>
    </div>

  );
};

export default History;