import React from 'react';

const StructurePage: React.FC = () => {
  return (
    <div>
      <h1>Estructura de la Institución Financiera</h1>
      <section>
        <h2>Consejo de Administración</h2>
        <p>Descripción del consejo de administración y sus responsabilidades.</p>
      </section>
      <section>
        <h2>Gerencia General</h2>
        <p>Descripción de la gerencia general y sus responsabilidades.</p>
      </section>
      <section>
        <h2>Departamentos</h2>
        <ul>
          <li>Departamento de Finanzas</li>
          <li>Departamento de Crédito</li>
          <li>Departamento de Recursos Humanos</li>
          <li>Departamento de Tecnología</li>
        </ul>
      </section>
      <section>
        <h2>Comités</h2>
        <ul>
          <li>Comité de Auditoría</li>
          <li>Comité de Riesgos</li>
          <li>Comité de Ética</li>
        </ul>
      </section>
    </div>
  );
};

export default StructurePage;