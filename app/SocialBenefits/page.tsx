import React from 'react';

const SocialBenefitsPage: React.FC = () => {
  return (
    <div className="w-full mx-auto p-6 text-center bg-gray-50">
      {/* Encabezado */}
      <header className="bg-cover bg-center py-16 rounded-lg" style={{ backgroundImage: 'url(/images/banner.jpg)' }}>
        <h1 className="text-4xl font-bold mb-4 text-black">Conocerán sobre los Beneficios Sociales</h1>
        <p className="text-xl text-black">Obtén beneficios con esta institución financiera de confianza</p>
      </header>

      {/* Sección de Beneficios */}
      <section className="flex flex-col md:flex-row justify-around my-16 text-black">
        {/* Tarjeta de Crédito y Ahorro */}
        <div className="p-8 rounded-lg shadow-lg md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Crédito y Ahorro:</h2>
          <ul className="list-disc list-inside text-left">
            <li><strong>Acceso a Créditos Favorables:</strong> Ofrecerán tasas de interés más bajas en préstamos que los bancos tradicionales. Esto permite a los asociados obtener financiamiento a condiciones más favorables.</li>
            <li><strong>Políticas de Ahorro Flexibles:</strong> Opciones de ahorro adaptadas a tus necesidades.</li>
          </ul>
        </div>

        {/* Tarjeta de Bienestar y Salud */}
        <div className="p-8 rounded-lg shadow-lg md:w-1/3">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Bienestar y Salud:</h2>
          <ul className="list-disc list-inside text-left">
            <li><strong>Seguros Asequibles:</strong> Seguros y pólizas a precios accesibles.</li>
            <li><strong>Programas de Bienestar:</strong> Iniciativas que promueven la salud y el bienestar.</li>
          </ul>
        </div>
      </section>

      {/* Sección de Imágenes */}
      <section className="flex flex-col md:flex-row justify-around my-16 space-y-8 md:space-y-0 md:space-x-8">
        <div>
          <img className="w-full h-64 object-cover rounded-lg text-black" src="/images/credit-card.jpg" alt="Tarjeta de crédito" />
        </div>
        <div>
          <img className="w-full h-64 object-cover rounded-lg text-black" src="/images/health-care.jpg" alt="Cuidado de la salud" />
        </div>
      </section>

      {/* Pie de Página */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="text-center">
          <p className="text-lg mb-2">Profesionales en finanzas, ofreciendo asesoría de calidad.</p>
          <p className="text-sm">Contáctanos: <strong>+593 0981321044</strong></p>
        </div>
      </footer>
    </div>
  );
};

export default SocialBenefitsPage;
