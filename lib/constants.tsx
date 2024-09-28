
export const aboutLinks: {
  title: string;
  href: string;
  description: string;
}[] = [
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

export const HomePageWords = [
  {
    text: "Confiabilidad",
    className: "text-primary-500 dark:text-blue-500",
  },
  {
    text: "y",
  },
  {
    text: "Calidad",
    className: "text-primary-500 dark:text-blue-500",
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