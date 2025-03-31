import { motion } from 'framer-motion';
import Link from 'next/link';
import router from 'next/router';
import React, { useState } from 'react';
import { FiHome } from 'react-icons/fi'; // Importing FiHome icon from react-icons

const OpinionForm = () => {
  const [formData, setFormData] = useState({
    tipoUsuario: 'Accionista',
    nombres: '',
    cedula: '',
    edad: '',
    tituloProfesional: '',
    opinion: '',
    email: '',
    direccion: '',
    numeroTelefono: '',
    boletos: '',
    pais: ''
  });

  const mainColor = 'rgb(35, 66, 99)';
  const lightBlue = 'rgba(217, 237, 255, 0.6)';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "opinion") {
      const words = value.split(/\s+/).filter(word => word.length > 0);
      if (words.length > 55) return;
    }


    setFormData({
      ...formData,
      [name]: value
    });
  };

  const getSectionContent = () => {
    if (formData.tipoUsuario === 'Accionista') {
      return {
        title: 'Acceso a la plataforma',
        firstLink: {
          label: 'Inicio de sesión',
          url: '/auth/signIn'
        },
        secondLink: {
          label: 'Consulta de accionista',
          url: '/shareholders/consult'
        },
        showButton: false
      };
    }
    else {
      return {
        title: 'Servicios',
        firstLink: {
          label: 'Créditos',
          url: '/'  /* hace falta enlazar directamente a los creditos*/
        },
        secondLink: {
          label: 'Vacantes de empleo',
          url: '/'  /* hace falta enlazar directamente a las vacantes de empleo*/
        },
        showButton: false
      };
    }
  };

  const sectionContent = getSectionContent();


  const countries = [
    "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Costa Rica", "Cuba", "Ecuador", "El Salvador", "España", "Estados Unidos", "Guatemala", "Honduras", "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "Portugal", "Puerto Rico", "República Dominicana", "Uruguay", "Venezuela"
  ];

  const academicLevel = [
    "Estudiante", "Profesional", "Ninguna"
  ];

  return (
    <div className="w-full max-w-7xl mx-auto font-sans">
      {/* Título principal */}
      <div className="w-full p-2 text-center text-white text-xl font-bold mb-4" style={{ backgroundColor: mainColor }}>
      ¿ Qué sugieres o propones para mejorar la calidad de esta institución financiera ?
      </div>

      <div className="flex flex-row gap-4">
        {/* Columna izquierda - Formulario principal */}
        <div className="border border-gray-300 rounded p-4 w-2/3">
          {/* Selector de tipo de usuario */}
          <div className="mb-4 p-2" style={{ backgroundColor: lightBlue }}>
            <label className="block text-sm mb-1">Seleccione el tipo de usuario</label>
            <select
              name="tipoUsuario"
              value={formData.tipoUsuario}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Accionista">Accionista</option>
              <option value="isPart">Funcionario de la institución</option>
              <option value="Publico">Público</option>

            </select>
          </div>

          {/* Campos de formulario en grid de 2 columnas */}
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <input
                type="text"
                name="nombres"
                value={formData.nombres}
                placeholder='Nombres y apellidos'
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 bg-gray-100 placeholder-gray-400 placeholder:font-bold"
              />
            </div>
            <div className="mb-4">
              <select
                name="tituloProfesional"
                value={formData.tituloProfesional}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 bg-gray-100 placeholder-gray-400 placeholder:font-bold"
              >
                <option value="">Título Profesional</option>
                {academicLevel.map((level, index) => (
                  <option key={index} value={level}>{level}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="cedula"
                value={formData.cedula}
                onChange={handleInputChange}
                placeholder='Cédula'
                className="w-full p-2 border border-gray-300 bg-gray-100 placeholder-gray-400 placeholder:font-bold"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Email'
                className="w-full p-2 border border-gray-300 bg-gray-100 placeholder-gray-400 placeholder:font-bold"
              />
            </div>

            <div className="mb-4">
              <input
                type="number"
                name="edad"
                value={formData.edad}
                onChange={handleInputChange}
                placeholder='Edad'
                className="w-full p-2 border border-gray-300 bg-gray-100 placeholder-gray-400 placeholder:font-bold"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
                placeholder='Dirección'
                className="w-full p-2 border border-gray-300 bg-gray-100 placeholder-gray-400 placeholder:font-bold"
              />
            </div>
            <div className="mb-4">
              <select
                name="pais"
                value={formData.pais}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 bg-gray-100 placeholder-gray-400 placeholder:font-bold"
              >
                <option value="">Seleccione su país</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
            </div>


            <div className="mb-4">
              <input
                type="tel"
                name="numeroTelefono"
                value={formData.numeroTelefono}
                onChange={handleInputChange}
                placeholder='Número de teléfono'
                className="w-full p-2 border border-gray-300 bg-gray-100 placeholder-gray-400 placeholder:font-bold"
              />
            </div>
          </div>

          {/* Temática de la ponencia */}
          <div className="mb-4">
            <textarea
              name="opinion"
              value={formData.opinion}
              onChange={handleInputChange}
              placeholder='Escribe tu opinión aquí...'
              className="w-full p-2 border border-gray-300 bg-gray-100 h-24 placeholder-gray-350 placeholder-gray-400"
            />
          </div>

          {/* Botón enviar */}
          <button
            className="w-full p-2 text-white font-bold flex items-center justify-center gap-2"
            style={{ backgroundColor: mainColor }}
          >
            <span>Enviar</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Columna derecha - Métodos de pago y boletos */}
        <div className="flex flex-col gap-4 w-1/3">
          {/* Sección métodos de pago */}
          <div className="border border-gray-300 rounded p-4">
            <div
              className="p-2 mb-4 flex items-center justify-center gap-2 text-white font-bold"
              style={{ backgroundColor: 'rgba(37,70,106,1)' }}
            >
              <span>{sectionContent.title}</span>
            </div>

            <div className="mb-3 flex items-center justify-between p-2 border-b border-gray-200">
              <Link href={sectionContent.firstLink.url} className="text-[rgba(37,70,106,1)] underline">
                {sectionContent.firstLink.label}
              </Link>
            </div>
            <div className="mb-4 flex items-center justify-between p-2 border-b border-gray-200">
              <Link href={sectionContent.secondLink.url} className="text-[rgba(37,70,106,1)] underline">
                {sectionContent.secondLink.label}
              </Link>
            </div>

            <div className='flex justify-center items-center'>
              <Link href={'/'}>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9, rotate: -5 }}
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[rgba(37,70,106,1)] to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  <motion.div
                    animate={{ x: [0, -5, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <FiHome className="w-6 h-6" />
                  </motion.div>
                  <span>Volver al Inicio</span>
                </motion.button>
              </Link>

            </div>

          </div>




          {/* Sección boletos */}
          <div className="border border-gray-300 rounded p-4">
            <div
              className="p-2 mb-4 flex items-center justify-center gap-2 text-white font-bold"
              style={{ backgroundColor: mainColor }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
              </svg>
              <span>Boletos:</span>
            </div>

            <div className="mb-4 flex items-center justify-between p-2 border-b border-gray-200">
              <span>Agrega el número de tus boletos</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="text-center p-2">
              <p className="font-bold">¡Comparte con tus amigas y amigos para más sorpresas!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpinionForm;