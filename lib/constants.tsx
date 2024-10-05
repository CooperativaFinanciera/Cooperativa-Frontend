
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

export const cooperativaWords = [
  {
    text:"¿",
  },
  {
    text: "Quieres",
    
  },
  {
    text: "ser",
  },
  {
    text: "Accionista",
    className: "text-primary",
  },
  {
    text: "?",
  },

]
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