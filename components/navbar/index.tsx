
"use client"
import Link from "next/link";
import { ThemeSwitch } from "../littleComponets/ThemeSwitch";
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Avatar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { NavLink } from "./NavLink";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import brand from "@/public/Cooperativa.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { aboutLinks } from "@/lib/constants";
import { Session } from "next-auth";
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
    <NextNavbar maxWidth="full">
      <NavbarMenuToggle
          className="sm:hidden"
        />
      <NavbarBrand>
        <NavLink className="flex items-center gap-2" href="/">
          <Image alt="brand" src={brand} width={45} height={45} />
          <h1 className="hidden md:block w-52 text-xl font-semibold text-[#424340] dark:text-white">
            Cooperativa Financiera
          </h1>
        </NavLink>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-default-500 font-normal text-base">
                  Nosotros
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {aboutLinks.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* <NavLink href="/about">Nosotros</NavLink> */}
        </NavbarItem>
        <NavbarItem>
          <NavLink href="/articles">Artículos</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink href="/partners">Socios</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink href="/">Accionistas</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink href="/">Centro de ayuda</NavLink>
        </NavbarItem>
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
                Iniciar sesión
              </Button>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem>
              <Avatar name="Irving"/>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
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
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
