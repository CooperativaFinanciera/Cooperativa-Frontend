"use client";
import Link from "next/link";
import { ThemeSwitch } from "../littleComponets/ThemeSwitch";
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { NavLink } from "./NavLink";
import { NavigationMenuLink } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { aboutLinks, shareholdersLinks, articlesLinks, sociosLinks } from "@/lib/constants";
import { Session } from "next-auth";
import { UserDropdown } from "./UserDropdown";
import { LinksDropdown } from "./LinksDropdown";
import { NotificationButton } from "../buttons/NotificationButton";
import { useState, useEffect, useRef } from "react";
import { VscChevronDown } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscBell } from "react-icons/vsc";
import { Brand } from "../littleComponets/Brand";

const DropdownButton: React.FC<{ label: string; items: string[] }> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
        className="flex flex-row items-center gap-2 relative p-3 font-serif transition-transform duration-500 text-white hover:shadow-xl rounded-lg
                after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-[3px] 
                after:bg-white after:scale-x-0 after:transition-transform after:duration-300 
                hover:after:scale-x-100"
      >
        <p>{label}</p>
        <VscChevronDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Menú Desplegable */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg overflow-hidden 
                        z-50 backdrop-blur-lg transition-all duration-300 opacity-100 scale-100">
          <ul className="flex flex-col gap-2">
            {items.map((item, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const Navbar = ({ session }: { session: Session | null }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <NextNavbar
      className="bg-white dark:bg-[#1e1e21] h-32"
      isBlurred={false}
      maxWidth="full"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />

      <NavbarBrand>
        <Brand className="text-default-600" />
      </NavbarBrand>

      <NavbarContent justify="end" className="">
        <NavLink href="/">Inicio</NavLink>
        <LinksDropdown label="Nosotros" items={aboutLinks} />
        <LinksDropdown label="Artículos" items={articlesLinks} />
        <LinksDropdown label="Socios" items={sociosLinks} />
        <LinksDropdown label="Accionistas" items={shareholdersLinks} />
        {session && (
          <>
            <ThemeSwitch />
            <NotificationButton />
          </>
        )}
        {session ? (
          <UserDropdown session={session} />
        ) : (
          <Button
            size="lg"
            as={Link}
            href="/auth/signIn"
            color="primary"
            radius="full"
          >
            Iniciar sesión
          </Button>
        )}
      </NavbarContent>

      {/* Menú desplegable para navegación adicional */}
      <div className="flex flex-row gap-8 p-2 w-full h-28 items-center bg-[#25466a]">
        <div className="flex flex-row gap-4 items-center w-auto h-auto">
          <a href="">
            <img
              src="/Logos/congreso_internacionales.png"
              alt="Logo Cooperativa"
              width={180}
              height={180}
              className="border-2xl border-black transition-transform hover:scale-110"
            />
          </a>
        </div>
        <div className="flex flex-row items-center gap-4 w-450">
          <div className="flex flex-row justify-center gap-3">
            <button className="relative p-3 font-serif transition-transform duration-500 text-white hover:shadow-xl rounded-lg
                            after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-[3px] 
                          after:bg-white after:scale-x-0 after:transition-transform after:duration-300 
                            hover:after:scale-x-100">
              Inicio
            </button>
            <DropdownButton label="Nosotros" items={["Sobre Nosotros", "Historia", "Equipo"]} />
            <button className="relative p-3 font-serif transition-transform duration-500 text-white hover:shadow-xl rounded-lg
                            after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-[3px] 
                          after:bg-white after:scale-x-0 after:transition-transform after:duration-300 
                            hover:after:scale-x-100">
              Articulos
            </button>
            <DropdownButton label="Socios" items={["Nuestros Socios", "Afiliaciones"]} />
            <DropdownButton label="Accionistas" items={["Accionistas Clave", "Inversiones"]} />
            <DropdownButton label="Créditos" items={["Crédito Ordinario", "Crédito Emergente", "Crédito para Accionistas"]} />
            <DropdownButton label="Centro de ayuda" items={["Centro de ayuda Socios", "Centro de ayuda Accionistas"]} />
          </div>
          <div className="flex flex-row gap-3 items-center">
            <button className="items-center">
              <VscBell className="w-5 h-5 text-white" />
            </button>
            <button className="p-3 gap-2 flex flex-row items-center shadow-md border-none rounded-lg bg-[#25466a] active:translate-x-0.5 active:translate-y-0.5 duration-100">
              <VscAccount className="w-7 h-7 text-white" />
              <p className="text-white">Iniciar Sesión</p>
            </button>
          </div>
        </div>
      </div>
    </NextNavbar>
  );
};
