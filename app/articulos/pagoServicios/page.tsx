const PagodeServiciosImpuestosPage = () => {
    return (
      <main className="my-10 mx-auto px-5">
        {/* Imagen superior */}
        <div className="flex flex-wrap justify-center items-center w-full my-10 p-5 bg-white rounded-lg shadow-lg gap-5">
          <img
            src="https://static.wixstatic.com/media/6091ca_e4ecdcf8624344cbbf4939959b86d2ba~mv2.jpg/v1/fill/w_980,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6091ca_e4ecdcf8624344cbbf4939959b86d2ba~mv2.jpg"
            alt="Fideicomisos"
            className="w-full h-auto mb-5 rounded-lg shadow-md"
          />
        </div>
  
        {/* Sección de Introducción */}
        <div className="flex justify-center items-start bg-white-100 pt-5">
          <div className="p-8 w-full sm:w-2/3 text-center">
            <h1 className="text-5xl font-bold text-[#00335f] mb-4">
              Pago Automatizado de Impuestos
            </h1>
            <p className="text-custom-gray text-m">
              Implementación de un sistema automatizado para el pago de impuestos, 
              facilitando a los accionistas cumplir con sus obligaciones fiscales de manera eficiente.
            </p>
          </div>
        </div>
  
        {/* Sección de Tarjetas */}
        <div className="flex flex-col items-center w-full my-10 p-5 rounded-lg">
          <div className="flex flex-wrap justify-center gap-8">
            <Card
              imgSrc="/pago-automatizado.avif"
              title="Pago Automatizado de Impuestos"
              description="Implementación de un sistema automatizado para el pago de impuestos, facilitando a los accionistas cumplir con sus obligaciones fiscales de manera eficiente."
            />
            <Card
              imgSrc="/integracion-plataforma.avif"
              title="Integración con Plataformas de Facturación Electrónica"
              description="Implementación de un sistema automatizado para el pago de impuestos, a los accionistas cumplir con sus obligaciones fiscales de manera eficiente."
            />
            <Card
              imgSrc="/asesoramiento-fiscal.avif"
              title="Asesoramiento Fiscal Personalizado"
              description="Introducción de servicios de asesoramiento fiscal personalizado para accionistas, ayudándoles a optimizar sus obligaciones fiscales y maximizar beneficios."
            />
          </div>
        </div>
  
        <div className="flex flex-col items-center w-full my-10 p-5 rounded-lg">
          <div className="flex flex-wrap justify-center gap-8">
            <Card
              imgSrc="/servicios-reportes.avif"
              title="Servicios de Reportes Financieros Automatizados"
              description="Implementación de reportes financieros automatizados que ayuden a los accionistas a mantener un seguimiento detallado de sus gastos e ingresos relacionados con servicios e impuestos."
            />
            <Card
              imgSrc="/educacion-financiera.avif"
              title="Educación Financiera y Tributaria"
              description="Creación de recursos educativos y seminarios en línea sobre finanzas personales y tributación, destinados a empoderar a los accionistas con conocimientos útiles."
            />
            <Card
              imgSrc="/consulta-pagos.avif"
              title="Consultas de Historial de Pagos"
              description="Ofrecer acceso fácil y seguro al historial de pagos de servicios e impuestos realizados a través de la plataforma bancaria."
            />
          </div>
        </div>
      </main>
    );
  };
  
  interface CardProps {
    imgSrc: string;
    title: string;
    description: string;
  }const Card: React.FC<CardProps> = ({ imgSrc, title, description }) => {
    return (
      <div className="border-2 border-custom-blue p-6 rounded-lg flex flex-col items-center w-full sm:w-80 transition-all duration-300 hover:shadow-xl hover:bg-blue-50 group cursor-pointer">
        <img
          src={imgSrc}
          alt={title}
          className="w-50 h-50 object-contain mb-4 rounded-lg transition-all duration-300 group-hover:shadow-md"
        />
        <h2 className="text-custom-blue text-xl font-bold text-center mb-1 transition-colors duration-300 group-hover:text-[#005ea2]">
          {title}
        </h2>
        <div className="w-12 h-1 bg-[#0077cc] mb-3 rounded-md transition-all duration-300 group-hover:w-16" />
        <p className="text-custom-gray text-sm text-center font-normal transition-colors duration-300 group-hover:text-[#00335f]">
          {description}
        </p>
      </div>
    );
  };
  
  export default PagodeServiciosImpuestosPage;
  