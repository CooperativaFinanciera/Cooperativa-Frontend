
export const aboutLinks:navLink [] = [
  {
    title: "Estructura",
    href: "/about/structure",
    description: "Más información sobre la estructura de la cooperativa",
  },
  {
    title: "Misión y Visión",
    href: "/about/mission",
    description: "Conóce más acerca de nuestra misión y visión",
  },
  {
    title: "Objetivo",
    href: "/about/goal",
    description: "Conoce más acerca de nuestro objetivo",
  },
  {
    title: "Educación financiera",
    href: "/about/financial-education",
    description: "Aprende más acerca de la educación financiera",
  },
];

export const shareholdersLinks:navLink[] = [
  {
    title: "Requisitos",
    href: "/shareholders/requirements",
    description: "Conoce los requisitos para ser accionista",
  },
  {
    title: "Beneficios",
    href: "/shareholders/benefits",
    description: "Conoce los beneficios de ser accionista",
  },
  {
    title: "Afiliate",
    href: "/shareholders/join",
    description: "Puedes ser accionista con una inversión mínima",
  },
  {
    title: "Rendimiento",
    href: "/shareholders/performance",
    description: "Conoce el rendimiento de la inversión",
  },
  {
    title: "Dividendos",
    href: "/shareholders/dividends",
    description: "Conoce los dividendos",
  },


  {
    title: "Preguntas frecuentes",
    href: "/shareholders/faq",
    description: "Preguntas frecuentes",
  },
  
]
export const Articles:navLink[] = [
  {
    title: "Empleos",
    href: "https://aneupi.com/ofertas-laborales",
    description: "Conoce las oportunidades de empleo.",
  },
  {
    title: "Cuentas",
    href: "/articles/cuentas_financieras",
    description: "Información sobre cuentas y su gestión.",
  },
  {
    title: "Créditos",
    href: "/articulos/creditos",
    description: "Todo sobre créditos y financiamiento.",
  },
  {
    title: "Inversiones",
    href: "/articulos/inversiones",
    description: "Explora oportunidades de inversión.",
  },
  {
    title: "Fideicomisos",
    href: "/articulos/fideicomisos",
    description: "Conoce más sobre fideicomisos.",
  },
  {
    title: "Productos",
    href: "/articulos/productos",
    description: "Descubre nuestros productos financieros.",
  },
  {
    title: "Pago de Servicios e Impuestos",
    href: "/articulos/pago-servicios",
    description: "Instrucciones para el pago de servicios e impuestos.",
  },
  {
    title: "Nóminas",
    href: "/articulos/nominas",
    description: "Información sobre nóminas y su administración.",
  },
  {
    title: "Revistas",
    href: "/articulos/revistas",
    description: "Accede a nuestras revistas informativas.",
  },
  {
    title: "Servicios",
    href: "/articulos/servicios",
    description: "Conoce los servicios que ofrecemos.",
  },
];

export const HomePageWords = [
  {
    text: "Confiabilidad",
    className: "text-primary",
  },
  {
    text: "y",
  },
  {
    text: "Calidad",
    className: "text-primary",
  },
  {
    text: "para",
  },
  {
    text: "un",
  },
  {
    text: "futuro",
  },
  {
    text: "finaciero",
  },
  {
    text: "solido",
  },

];

import { navLink } from "@/types";
import { HiOutlineCog, HiOutlineExclamation, HiOutlineOfficeBuilding, HiOutlineUserGroup } from "react-icons/hi";

export const mainFunctions =[
  {
    title: "Accionistas",
    description: "Conviértete en accionista de nuestra cooperativa y obtén beneficios exclusivos",
    href: "/shareholders",
    icon: <HiOutlineUserGroup size={30}/>
  },
  {
    title: "Socios",
    description: "Conoce a nuestros socios y descubre cómo puedes ser parte de nuestra cooperativa",
    href: "/partners",
    icon: <HiOutlineCog size={30}/>
  },
  {
    title: "Empleos o vacantes",
    description: "Descubre las vacantes disponibles y únete a nuestro equipo de trabajo",
    href: "/jobs",  
    icon: <HiOutlineOfficeBuilding size={30}/>
  },
  {
    title: "Denuncias o reclamos",
    description: "Realiza una denuncia o reclamo si has tenido algún problema con nuestra cooperativa",
    href: "/reports",
    icon: <HiOutlineExclamation size={30}/>

  }
]