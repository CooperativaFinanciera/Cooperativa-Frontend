import React from 'react';

const IntroductionPage: React.FC = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Bienvenidos a Nuestra Institución Financiera</h1>
            <p>
                En nuestra institución financiera, nos dedicamos a proporcionar servicios financieros de alta calidad a nuestros clientes. 
                Nuestra misión es ayudar a nuestros miembros a alcanzar sus metas financieras a través de productos y servicios innovadores y accesibles.
            </p>
            <h2>Nuestra Historia</h2>
            <p>
                Fundada en [Año de Fundación], nuestra institución ha crecido y evolucionado para satisfacer las necesidades cambiantes de nuestros miembros. 
                Con un enfoque en la comunidad y el servicio al cliente, hemos establecido una reputación de confianza y excelencia.
            </p>
            <h2>Nuestros Valores</h2>
            <ul>
                <li>Integridad: Actuamos con honestidad y transparencia en todas nuestras operaciones.</li>
                <li>Compromiso: Estamos dedicados al éxito financiero de nuestros miembros.</li>
                <li>Innovación: Buscamos constantemente nuevas formas de mejorar nuestros servicios.</li>
                <li>Responsabilidad: Nos responsabilizamos de nuestras acciones y decisiones.</li>
            </ul>
            <h2>Contáctanos</h2>
            <p>
                Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros. 
                Estamos aquí para ayudarte a alcanzar tus objetivos financieros.
            </p>
        </div>
    );
};

export default IntroductionPage;