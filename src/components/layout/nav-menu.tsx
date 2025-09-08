"use client";

import { usePathname } from "next/navigation";
import { NavMenuItem } from "./nav-menu-item";

type NavMenuProps = {
  items?: string[];
};

export const NavMenu = ({ items = [] }: NavMenuProps) => {
  const pathname = usePathname();

  const routeMap = {
    "/": ["Portfolio"],
    "/projects": ["Projects", "Projets"],
    // "/blog": ["Blog"],
    "/contact": ["Contact"],
  };

  const navItems = items.map((label) => {
    const href =
      Object.entries(routeMap).find(([key, labels]) =>
        labels.includes(label)
      )?.[0] || "/";

    const cleanPath = pathname.replace(/^\/(fr|en)/, "") || "/";
    const isActive =
      href === "/" ? cleanPath === "/" : cleanPath.startsWith(href);

    return { label, href, isActive };
  });

  return (
    <ul
      className={
        "flex flex-col md:flex-row items-start md:mt-0 md:items-center gap-4"
      }
      aria-label={"Main navigation"}
    >
      {navItems.map((item) => (
        <NavMenuItem
          key={item.label}
          href={item.href}
          label={item.label}
          isActive={item.isActive}
        />
      ))}
    </ul>
  );
};
