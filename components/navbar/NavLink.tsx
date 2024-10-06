"use client";

import { Link, LinkProps, NavbarItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";

interface NavItemProps extends LinkProps {
  children: React.ReactNode;
  href: string; // href es obligatorio ya que defines la lógica basada en esto
}

export const NavLink = ({ children, ...rest }: NavItemProps) => {
  const pathname = usePathname();
  return (
    <NavbarItem
      isActive={pathname === rest.href}
      className={` rounded-full px-4 py-2 ${pathname === rest.href ? "bg-primary" : ""}`}
      
    >
      <Link
        className={`${pathname === rest.href ? "text-white" : "text-default-500 dark:text-default-800"}`}
        {...rest} // Aquí aplicas los demás props pasados como `href`, `target`, `onClick`, etc.
      >
        {children}
      </Link>
    </NavbarItem>
  );
};
