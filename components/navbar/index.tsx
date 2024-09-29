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
    <NextNavbar  maxWidth="full">
      <NavbarMenuToggle className="sm:hidden" />
      <NavbarBrand>
        <NavLink className="flex items-center gap-2" href="/">
          <Image alt="brand" src={brand} width={45} height={45} />
          <h1 className="hidden md:block w-52 text-xl font-semibold text-[#424340] dark:text-white">
            Cooperativa Financiera
          </h1>
        </NavLink>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <NavLink href="/">Inicio</NavLink>
        </NavbarItem>
        <LinksDropdown items={aboutLinks} label="Nosotros" />
        {/* <NavbarItem>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-default-500 dark:text-default-800 font-normal text-base">
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
        </NavbarItem> */}
        <NavbarItem>
          <NavLink href="/articles">Artículos</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink href="/partners">Socios</NavLink>
        </NavbarItem>
        <LinksDropdown items={shareholdersLinks} label="Accionistas" />
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
          <UserDropdown session={session}/>
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
