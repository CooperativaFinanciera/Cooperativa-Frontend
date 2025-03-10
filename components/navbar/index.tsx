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
import { aboutLinks, shareholdersLinks, sociosLinks } from "@/lib/constants";
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

          <NavLink href="/articles">Artículos</NavLink>
          <LinksDropdown label="Socios" items={sociosLinks}/>
          <LinksDropdown label="Accionistas" items={shareholdersLinks} />
          {/* <NavLink href="/contact">Centro de ayuda</NavLink> */}
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
