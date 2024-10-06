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
import { aboutLinks, shareholdersLinks } from "@/lib/constants";
import { Session } from "next-auth";
import { UserDropdown } from "./UserDropdown";
import { LinksDropdown } from "./LinksDropdown";
import { NotificationButton } from "../buttons/NotificationButton";
import { useState } from "react";
import { Brand } from "../littleComponets/Brand";
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
    <header className="w-full bg-white dark:bg-[#1e1e21] flex flex-col items-center  justify-center sticky top-0 z-50 transition-all pt-2">
      <Brand className="text-default-600" />

      <NextNavbar
        className="bg-white dark:bg-[#1e1e21]"
        isBlurred={false}
        maxWidth="xl"
        position="static"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand>
          <p className="font-bold text-inherit"></p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavLink href="/">Inicio</NavLink>
          <LinksDropdown label="Nosotros" items={aboutLinks} />

          <li className="">Artículos</li>
          <NavLink href="/contact">Socios</NavLink>
          <LinksDropdown label="Accionistas" items={shareholdersLinks} />
          <NavLink href="/contact">Centro de ayuda</NavLink>
        </NavbarContent>
        <NavbarContent justify="end">
          <ThemeSwitch />
          <NotificationButton />
          {session ? (
            <UserDropdown session={session} />
          ) : (
            <Button as={Link} href="/auth/signIn" color="primary" radius="full">
              Iniciar sesión
            </Button>
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
      </NextNavbar>
    </header>
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
