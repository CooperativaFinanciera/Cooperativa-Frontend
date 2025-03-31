"use client";

import { useState } from "react";

const RegistrationForm = ({ usePlaceholders = false }) => {
  const [formData, setFormData] = useState({
    suggestionType: "",
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    topic: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="bg-[#F5F7FA] text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto border border-gray-300">
      {/* Título */}
      <h2 className="text-2xl font-bold bg-[#003366] text-white p-4 rounded-t-lg text-center uppercase">
        ¡Envía tus sugerencias aquí!
      </h2>

      <form onSubmit={handleSubmit} className="p-6">
        {/* Tipo de sugerencia */}
        <div className="mb-4">
          <input
            type="text"
            name="suggestionType"
            placeholder="Tipo de Sugerencia"
            className="p-3 border border-gray-300 rounded w-full bg-white text-gray-800 placeholder-gray-600 placeholder:font-bold"
            onChange={handleChange}
          />
        </div>

        {/* Nombre y Apellido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Nombres"
              className="p-3 border border-gray-300 rounded w-full bg-white text-gray-800 placeholder-gray-600 placeholder:font-bold"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Apellidos"
              className="p-3 border border-gray-300 rounded w-full bg-white text-gray-800 placeholder-gray-600 placeholder:font-bold"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* País y Cantón */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <input
              type="text"
              name="country"
              placeholder="Cantón"
              className="p-3 border border-gray-300 rounded w-full bg-white text-gray-800 placeholder-gray-600 placeholder:font-bold"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="city"
              placeholder="Ciudad"
              className="p-3 border border-gray-300 rounded w-full bg-white text-gray-800 placeholder-gray-600 placeholder:font-bold"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Temática */}
        <div className="mt-4">
          <textarea
            name="topic"
            placeholder="Describe tu sugerencia aquí...."
            className="p-3 border border-gray-300 rounded w-full h-24 bg-white text-gray-800 placeholder-gray-600 placeholder:font-bold"
            onChange={handleChange}
          />
        </div>
        {/* Botones */}
        <div className="flex justify-end mt-6">
          <button type="submit" className="bg-[#003366] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#002244] transition">
            Enviar →
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
