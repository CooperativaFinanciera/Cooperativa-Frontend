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

const DropdownButton: React.FC<{ label: string; items: DropdownItem[] }> = ({ label, items }) => {
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
        <div className="absolute left-0 mt-2 min-w-[510px] bg-white/90 text-black shadow-lg rounded-lg overflow-hidden 
                        z-50 backdrop-blur-lg transition-all duration-300 opacity-100 scale-100">
          <ul className="grid grid-cols-2 gap-2 p-2">
            {items.map((item, index) => {
              const isItemActive = pathname === item.href;
              return (
                <li key={index} className="w-full">
                  <Link
                    href={item.href}
                    className={`block px-6 py-4 border-2 transition-all rounded-lg shadow-md 
                               ${isItemActive ? "border-[#25466a] bg-gray-200" : "border-transparent hover:border-[#25466a] hover:bg-gray-100"}`}
                  >
                    <p className="font-bitter font-semibold text-sm">{item.label}</p>
                    <span className="text-sm text-gray-500">{item.description}</span>
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

export const Navbar_principal = () => {
  const pathname = usePathname();
  const isInicioActive = pathname === "/";
  return (
    <div className="flex flex-row gap-8 p-2 my-1 w-full h-16 items-center bg-[#25466a]">
      <div className="flex flex-row gap-4 items-center w-auto h-auto">
        <a href=""> {/*link del congreso*/}
          <img
            src="/Logos/congresoInternacional.jpg"
            alt="Logo congreso"
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
              { label: "Organigrama", description: "Conoce más acerca de nuestro organigrama.", href: "organigrama" },
            ]}
          />

          <DropdownButton
            label="Articulos"
            items={[
              { label: "Empleos", description: "Trabaja con nosotros.", href: "/articles/jobs" },
              { label: "Cuentas", description: "Ten una cuenta con nosotros.", href: "/articules/accounts" },
              { label: "Creditos", description: "Saca el credito con nosotros", href: "/articules/credits" },
              { label: "Inversiones", description: "Haz tu inversion con nosotros.", href: "/articules/investments" },
              { label: "Fideicomisos", description: "Nosotros te ayudamos con tu fideicomiso.", href: "/articules/trusts" },
              { label: "Productos", description: "Conoce sobre nuestros productos.", href: "/articules/products" },
              { label: "Pago de Servicios e Impuestos", description: "Nosotros te ayudamos en el pago de servicios e impuestos.", href: "/articules/payment-of-services-and-taxes" },
              { label: "Nóminas", description: "Conoce acerca de las nóminas.", href: "/articles/payroll" },
              { label: "Revistas", description: "Conoce acerca de las revistas.", href: "/articles/magazines" },
              { label: "Servicios", description: "Conoce acerca de los servicios.", href: "/articles/services" },
            ]}
          />
          {/*<a href="/"> 
                      <button className="relative p-3 font-serif transition-transform duration-500 text-white hover:shadow-xl rounded-lg
                              after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-[3px] 
                            after:bg-white after:scale-x-0 after:transition-transform after:duration-300 
                              hover:after:scale-x-100">
                          Articulos
                      </button>
                    </a>*/}

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
          <DropdownButton
            label="Accionistas"
            items={[
              { label: "Aportaciones Mensuales", description: "Conoce las aportaciones mensuales.", href: "/shareholders/monthlyContributions" },
              { label: "Historia", description: "Conóce nuestra ruta histórica.", href: "/shareholders/history" },
              { label: "Afiliate", description: "Puedes ser accionista con una inversión minima.", href: "/shareholders/join" },
              { label: "Educación Financiera", description: "Aprende más acerca de la educación financiera para Accionistas", href: "/shareholders/financialEducation" },
              { label: "Consulta de accionista", description: "Ya eres accionista? Consulta aquí.", href: "/shareholders/consult" },
              { label: "", description: "", href: "/shareholders/register" },
            ]}
          />
          <DropdownButton
            label="Créditos"
            items={[
              { label: "Credito Ordinario", description: "Conoce sobre credito Ordinario.", href: "/creditoOrdinario" },
              { label: "Credito Emergente", description: "Conoce sobre credito Emergente.", href: "/creditoEmergente" },
              { label: "Credito para accionistas", description: "Conoce sobre credito para accionistas.", href: "/creditoAccionistas" },
            ]}
          />
          <DropdownButton
            label="Centro de ayuda"
            items={[
              { label: "Centro Ayuda Socios", description: "Ayuda para Socios.", href: "ayudaSocios" },
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
}