"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "Our Perfumes", path: "/our-perfumes" },
];

interface NavProps {
  containerStyles: string;
}

const Nav = ({ containerStyles }: NavProps) => {
  const pathname = usePathname();

  return (
    <nav className={containerStyles}>
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`${link.path === pathname && "text-accent"}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
