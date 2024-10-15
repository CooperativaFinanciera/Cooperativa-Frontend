"use client";

import { Button, Link, LinkProps, NavbarItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";

interface NavItemProps extends LinkProps {
  children: React.ReactNode;
  href: string; // href es obligatorio ya que defines la lógica basada en esto
}

export const NavLink = ({ children, ...rest }: NavItemProps) => {
  const pathname = usePathname();
  return (
    <Button
      color="primary"
      as={NavbarItem}
      size="lg"
      
      variant={pathname === rest.href ? "flat" : "light"}
    >
      <Link     
      className="text-lg font-medium"
        {...rest} 
      >
        {children}
      </Link>
    </Button>
  );
};
