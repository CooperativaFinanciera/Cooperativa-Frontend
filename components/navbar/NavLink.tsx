"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const NavLink = ({ children, ...rest }: NavItemProps) => {

  const pathname = usePathname();
  return (
 
      <Link 
        className={`${
          pathname === rest.href ? "text-primary" : "text-default-500 dark:text-default-800"
        }`}
        href="/" {...rest}>
        {children}
      </Link>
  
  );
};
