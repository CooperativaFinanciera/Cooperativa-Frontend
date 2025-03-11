import React from 'react';

const FinancialEducationPage: React.FC = () => {
    return (
        <div>
            <h1>Educación Financiera</h1>
            <p>Bienvenido a la página de educación financiera. Aquí encontrarás recursos y consejos para mejorar tu conocimiento financiero.</p>
            
            <section>
                <h2>Conceptos Básicos</h2>
                <ul>
                    <li>Presupuesto</li>
                    <li>Ahorro</li>
                    <li>Inversión</li>
                    <li>Deuda</li>
                </ul>
            </section>
            
            <section>
                <h2>Consejos Financieros</h2>
                <p>1. Establece un presupuesto mensual y síguelo.</p>
                <p>2. Ahorra al menos el 20% de tus ingresos.</p>
                <p>3. Invierte en una cartera diversificada.</p>
                <p>4. Evita deudas innecesarias y paga tus deudas a tiempo.</p>
            </section>
            
            <section>
                <h2>Recursos Adicionales</h2>
                <p>Visita los siguientes enlaces para obtener más información:</p>
                <ul>
                    <li><a href="https://www.example.com">Ejemplo de recurso 1</a></li>
                    <li><a href="https://www.example.com">Ejemplo de recurso 2</a></li>
                </ul>
            </section>
        </div>
    );
};

export default FinancialEducationPage;