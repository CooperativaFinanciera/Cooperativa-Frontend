import React from "react";
import { LineChart, CreditCard, House } from "lucide-react";

const benefits = [
  {
    icon: <LineChart className="w-8 h-8 text-yellow-400" />, 
    title: "Optimiza tus Finanzas",
    description:
      "Aprende estrategias para mejorar tu ahorro e inversión de manera eficiente.",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-yellow-400" />,
    title: "Mejor Control de Gastos",
    description:
      "Descubre herramientas y consejos para administrar mejor tus gastos diarios.",
  },
  {
    icon: <House className="w-8 h-8 text-yellow-400" />,
    title: "Aprovecha Nuevas Oportunidades",
    description:
      "Explora opciones financieras que pueden ayudarte a hacer crecer tu dinero.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="bg-blue-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Texto e íconos */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Beneficios</h2>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                {benefit.icon}
                <div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2">
          <img
            src="/inicio4.png"
            alt="Beneficios de la educación financiera"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
