"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/inicio", text: "Inicio" },
    { href: "/estadofinanciero", text: "Estados Financieros" },
    { href: "/accionistas", text: "Accionistas" },
    { href: "/normativas", text: "Normativas" },
    { href: "/solicitud-credito", text: "Créditos" },
    { href: "/notificaciones", text: "Notificaciones" }
  ];

  const isActive = (href) => {
    return pathname === href || (href === "/inicio" && pathname === "/");
  };

  return (
    <div className="w-full px-4 overflow-x-hidden"> {/* Contenedor principal con ancho limitado */}
      <nav className="bg-gray-800 rounded-xl p-2 w-full max-w-screen overflow-x-auto">
        {/* Indicador de scroll para móviles */}
        <div className="md:hidden text-center text-xs text-gray-400 pb-1">
          Desliza para ver más opciones →
        </div>
        
        <ul className="flex list-none p-0 m-0 w-auto">
          {links.map((link) => (
            <li key={link.href} className="flex-shrink-0 mx-1 sm:mx-2">
              <Link
                href={link.href}
                className={`
                  text-white no-underline inline-block px-3 py-2 sm:px-4 sm:py-3 
                  rounded-md transition-all duration-300 whitespace-nowrap 
                  hover:bg-gray-700
                  ${isActive(link.href) 
                    ? "bg-gray-700 font-bold border-b-2 border-green-500" 
                    : ""}
                `}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;