"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderMenu({ links }) {
  const pathname = usePathname();

  return (
    <ul className="nav">
      {links.map(({ title, href = "", isExternal = false }) => (
        <li key={href}>
          <Link
            href={href}
            target={isExternal ? "_blank" : undefined}
            className={`nav__item ${
              pathname === href ? "nav__item--active" : ""
            }`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
