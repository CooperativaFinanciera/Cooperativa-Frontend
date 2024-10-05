"use client";
import Link from "next/link";
import { ThemeSwitch } from "../littleComponets/ThemeSwitch";
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { NavLink } from "./NavLink";
import { NavigationMenuLink } from "../ui/navigation-menu";
import brand from "@/public/Cooperativa.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { aboutLinks, shareholdersLinks } from "@/lib/constants";
import { Session } from "next-auth";
import { UserDropdown } from "./UserDropdown";
import { LinksDropdown } from "./LinksDropdown";
import { NotificationButton } from "../buttons/NotificationButton";
export const Navbar = ({ session }: { session: Session | null }) => {
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
    <>
      <header className="w-full bg-white dark:bg-[#1e1e21] flex flex-col items-center  justify-center sticky top-0 z-50 transition-all">
        {/* <nav></nav> */}
        <div className="flex items-center gap-3">
          <Image alt="brand" src={brand} width={75} height={75} />
          <h1 className="hidden md:block text-4xl font-bold text-[#454442] dark:text-white">
            Cooperativa Financiera
          </h1>
        </div>
        {/* <nav className=" w-full py-4">
          <ul className="flex items-center  mx-auto justify-center gap-8">
            <NavLink href="/" className="text-primary">Inicio</NavLink>
            <LinksDropdown label="Acerca de" items={aboutLinks} />
            
            <li className="">Artículos</li>
            <NavLink href="/contact">Socios</NavLink>
            <LinksDropdown label="Accionistas" items={shareholdersLinks} />
          </ul>
          <ul className="flex">
            <ThemeSwitch />
            <Button as={Link} href="/auth/signIn" color="primary" radius="full">
              Iniciar sesión
            </Button>
          
          </ul>
        </nav> */}
        <NextNavbar
          className="bg-white dark:bg-[#1e1e21]"
          isBordered
          isBlurred={false}
          maxWidth="xl"
          position="static"
        >
          <NavbarBrand>
            <p className="font-bold text-inherit"></p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavLink href="/" className="text-primary">
              Inicio
            </NavLink>
            <LinksDropdown label="Acerca de" items={aboutLinks} />

            <li className="">Artículos</li>
            <NavLink href="/contact">Socios</NavLink>
            <LinksDropdown label="Accionistas" items={shareholdersLinks} />
            <NavLink href="/contact">Centro de ayuda</NavLink>
          </NavbarContent>
          <NavbarContent justify="end">
            <ThemeSwitch />
            <NotificationButton />
            <Button as={Link} href="/auth/signIn" color="primary" radius="full">
              Iniciar sesión
            </Button>
          </NavbarContent>
        </NextNavbar>
      </header>
      {/* <NextNavbar height={125} maxWidth="full" >
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarContent justify="center">
          <NavLink className="flex items-center gap-2" href="/">
            <Image alt="brand" src={brand} width={70} height={70} />
            <h1 className="hidden md:block w-52 text-4xl font-bold text-primary dark:text-white">
              Cooperativa Financiera
            </h1>
          </NavLink>
        </NavbarContent>
       
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>

          {!session ? (
            <>
              <NavbarItem>
                <Button
                  radius="full"
                  as={Link}
                  href="/auth/signUp"
                  variant="flat"
                  className="bg-black dark:bg-white text-white dark:text-black"
                >
                  Registrarse
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button
                  radius="full"
                  as={Link}
                  href="/auth/signIn"
                  variant="flat"
                >
                  ¿Eres accionista?
                </Button>
              </NavbarItem>
            </>
          ) : (
            <UserDropdown session={session} />
          )}
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NextNavbar> */}
    </>
  );
};

const ListItem = ({
  className,
  title,
  children,
  href,
  ref,
  ...props
}: {
  className?: string;
  title: string;
  children: string;
  href: string;
  ref?: React.Ref<HTMLAnchorElement>;
}) => {
  return (
    <li
      className={cn(
        "flex flex-col justify-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
    >
      <NavigationMenuLink asChild>
        <Link ref={ref} href={href} {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground text-wrap max-w-full">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
