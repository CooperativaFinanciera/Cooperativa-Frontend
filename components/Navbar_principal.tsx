"use client";

import { VscChevronDown } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
//import { VscBell } from "react-icons/vsc";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DropdownItem {
  label: string;
  description: string;
  href: string;
}

const DropdownButton: React.FC<{ label: string; items: DropdownItem[]; align?: "left" | "right" }> = ({ label, items, align = "left" }) => {

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Detecta si alguna de las rutas del menú está activa
  const isActive = items.some((item) => pathname === item.href);

  // Cierra el menú si el usuario hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}  // Abre el menú cuando el cursor entra
      onMouseLeave={() => setIsOpen(false)} // Cierra el menú cuando el cursor sale
      ref={menuRef}
    >
      {/* Botón con menú */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex flex-row items-center gap-2 relative p-3 font-bitter transition-transform duration-500 text-white hover:shadow-xl rounded-lg
          after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-[3px] 
          after:bg-white after:scale-x-0 after:transition-transform after:duration-300 ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}
          hover:after:scale-x-100`}
      >
        <p>{label}</p>
        <VscChevronDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Menú Desplegable */}
      {isOpen && (
  <div className={`absolute ${align === "left" ? "left-0" : "right-0"} mt-2 min-w-[510px] bg-white/90 text-black shadow-lg rounded-lg overflow-hidden z-50 backdrop-blur-lg transition-all duration-300 opacity-100 scale-100`}>
          <ul className="p-2 items-stretch grid grid-cols-2">

            {items.map((item, index) => {
              const isItemActive = pathname === item.href;
              return (
                <li key={index} className="w-full">
                  <Link
                    href={item.href}
                    className={`block px-6 py-4 border-2 transition-all rounded-lg shadow-md h-full flex flex-col justify-start 
                     ${isItemActive ? "border-[#25466a] bg-gray-200" : "border-transparent hover:border-[#25466a] hover:bg-gray-100"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex flex-col space-y-2">
                      <p className="font-bitter font-semibold text-sm">{item.label}</p>
                      <span className="text-sm text-gray-500">{item.description}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

        </div>
      )}
    </div>
  );
};
{/*
export const articlesLinks = [
  { title: "Empleos", href: "/articles/1", description: "Trabaja con nosotros." },
  { title: "FIDEICOMISOS", href: "/articles/FIDEICOMISOS", description: "Nosotros te ayudamos con tu fideicomiso." },
  { title: "Productos", href: "/articles/Productos", description: "Conoce sobre nuestros productos." },
  { title: "Pago de Servicios Impuestos", href: "/articles/PagodeServiciosImpuestos", description: "Nosotros te ayudamos en el pago de servicios e impuestos." },
  { title: "Nomina", href: "/articles/Nomina", description: "Conoce acerca de las nóminas." },
  { title: "Revistas", href: "/articles/Revistas", description: "Conoce acerca de las revistas." },
  { title: "Servicios", href: "/articles/Servicios", description: "Conoce acerca de los servicios." },

]; */}

{/*export const sociosLinks = [
  { title: "Beneficios Sociales", href: "/socios/benficios-sociales", description: "Conoce los beneficios para nuestros socios." },
  { title: "Cuentas", href: "/socios/Cuentas", description: "Descubre las cuentas disponibles." },
  { title: "Educación Financiera Socios", href: "/socios/Educacion-Financiera-Socios", description: "Aprende educación financiera con nosotros." },
  { title: "Pensiones", href: "/socios/Pensiones", description: "Infórmate sobre los planes de pensiones." },
  { title: "Inversiones", href: "/socios/Inversiones", description: "Aprende más sobre las inversión." },
  { title: "Soluciones", href: "/socios/Soluciones", description: "Conoce las soluciones que brindamos." },
  { title: "Servicios", href: "/socios/Servicios", description: "Conoce acerca de los servicios." }
];*/}

export const Navbar_principal = () => {
  const pathname = usePathname();
  const isInicioActive = pathname === "/";
  return (
    <div className="flex flex-row justify-between items-center px-6 py-2 w-full h-16 bg-[#25466a]">

      <div className="flex flex-row gap-4 items-center w-auto h-auto">
        <a href="https://aneupi.com/congreso-internacional" target="_blank" rel="noopener noreferrer">
          <img
            src="/Logos/congreso_internacionales.png "
            alt="Logo Cooperativa"
            width={180}
            height={180}
            className="border-2 border-white rounded-lg transition-transform hover:scale-110"
          />
        </a>
      </div>
      {/* Navegación */}
      <div className="flex flex-row items-center gap-4 w-450">
        <div className="flex flex-row justify-center gap-3">
          <a href="/">
            <button className={`relative p-3 font-bitter transition-transform duration-500 text-white hover:shadow-xl rounded-lg
              after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-[3px] 
              after:bg-white after:scale-x-0 after:transition-transform after:duration-300 ${isInicioActive ? "after:scale-x-100" : "after:scale-x-0"}
              hover:after:scale-x-100`}>
              Inicio
            </button>
          </a>
          <DropdownButton
            label="Nosotros"
            items={[
              { label: "Estructura", description: "Más información sobre la estructura de la cooperativa.", href: "/estructura" },
              { label: "Misión y Visión", description: "Conoce más acerca de nuestra misión y visión.", href: "/mision-vision" },
              { label: "Objetivo", description: "Conoce más acerca de nuestro objetivo.", href: "/objetivo" },
              { label: "Educación financiera", description: "Aprende más acerca de la educación financiera.", href: "/educacion-financiera" },

              { label: "Contactanos", description: "Te ayudaremos en lo se pueda.", href: "/contactos" },
              { label: "Estatuto", description: "Conoce más acerca de nuestro estatuto.", href: "/estatuto" },
              { label: "Organigrama", description: "Conoce más acerca de nuestro organigrama.", href: "/organigrama" },
            ]}
          />

          <DropdownButton
            label="Articulos"
            items={[
              { label: "Empleos", description: "Trabaja con nosotros.", href: "/articulos/empleos" },
              { label: "Fideicomisos", description: "Nosotros te ayudamos con tu fideicomiso.", href: "/articulos/fideicomisos" },
              { label: "Productos", description: "Conoce sobre nuestros productos.", href: "/articulos/productos" },
              { label: "Pago de Servicios Impuestos", description: "Nosotros te ayudamos en el pago de servicios e impuestos.", href: "/articulos/pagoServicios" },
              { label: "Nóminas", description: "Conoce acerca de las nóminas.", href: "/articulos/nomina" },
              { label: "Revistas", description: "Conoce acerca de las revistas.", href: "/articulos/revista" },
              { label: "Servicios", description: "Conoce acerca de los servicios.", href: "/articulos/servicios" },
            ]}
          />

          <DropdownButton
            label="Socios"
            items={[
              { label: "Beneficios para Socios", description: "Conoce los beneficios para nuestros socios.", href: "/partners/SocialBenefits" },
              { label: "Educación Financiera Socios", description: "Aprende educación financiera con nosotros.", href: "/partners/FinancialEducationPartners" },
              { label: "Cuentas", description: "Descubre las cuentas disponibles.", href: "/partners/accounts" },
              { label: "Inversiones", description: "Aprende más sobre las inversión.", href: "/partners/Investments" },
              { label: "Pensiones", description: "Infórmate sobre los planes de pensiones.", href: "/partners/Pensions" },
              { label: "Soluciones", description: "Conoce las soluciones que brindamos.", href: "/partners/Solutions" },
              { label: "Servicios", description: "Explora los servicios que tenemos.", href: "/partners/Services" }
            ]}
          />
          {/*
           <DropdownButton
            label="Articulos"
            items={articlesLinks.map(item => ({
              label: item.title,
              description: item.description,
              href: item.href,
            }))}
          /> 

          {/* <DropdownButton
          <DropdownButton
            label="Socios"
            items={sociosLinks.map(item => ({
              label: item.title,
              description: item.description,
              href: item.href,
            }))}
          />*/}


          <DropdownButton
            label="Accionistas"
            align="right"
            items={[
              { label: "Requisitos", description: "Conoce los requisitos para ser accionista.", href: "/requesitos" },
              { label: "Beneficios", description: "Conoce los beneficios de ser accionista.", href: "/beneficios" },
              { label: "Afiliate", description: "Puedes ser accionista con una inversión minima.", href: "/afiliacion" },
              { label: "Dividendos", description: "Conoce los dividendos.", href: "/dividendos" },
              { label: "Rendimiento", description: "Conoce el rendimiento de la inversión.", href: "/rendimiento" },
              { label: "Preguntas frecuentes", description: "Preguntas frecuentes.", href: "/preguntasFre" },
            ]}
          />
          <DropdownButton
            label="Créditos"
            align="right"
            items={[
              { label: "Credito Ordinario", description: "Conoce sobre credito Ordinario.", href: "/creditoOrdinario" },
              { label: "Credito Emergente", description: "Conoce sobre credito Emergente.", href: "/creditoEmergente" },
              { label: "Credito para accionistas", description: "Conoce sobre credito para accionistas.", href: "/creditoAccionistas" },
            ]}
          />
          <DropdownButton
            label="Centro de ayuda"
            align="right"
            items={[
              { label: "Centro Ayuda Socios", description: "Ayuda para Socios.", href: "/ayudaSocios" },
              { label: "Centro Ayuda Accionistas", description: "Ayuda para Accionistas.", href: "/ayudAccionistas" },
            ]}
          />
        </div>
        <div className="flex flex-row gap-3 items-center">
          {/*<button className="items-center">
                        <VscBell className="w-5 h-5 text-white"/>
                    </button>*/}
          <a href="/auth/signIn"> {/*Boton para inciar sesion*/}
            <button className="px-3 gap-2 flex flex-row items-center shadow-md border-medium border-orange-500 rounded-lg bg-[#25466a] active:translate-x-0.5 active:translate-y-0.5 duration-100">
              <VscAccount className="w-7 h-7 text-white" />
              <div className="flex flex-col">
                <p className="text-white font-bitter">Iniciar Sesión</p>
                <p className="text-white font-bitter text-[12px]">Accionistas</p>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
