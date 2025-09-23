"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/community", label: "Community" },
    { href: "/partners", label: "Partners" },
    { href: "/contact", label: "Contact" },
    { href: "/join", label: "Join" },
  ];

  return (
    <ul className="flex space-x-8">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`text-[color:var(--brand-primary)] hover:text-[color:var(--brand-secondary)] ${
              pathname === link.href
                ? "border-b-2 border-[color:var(--brand-secondary)]"
                : ""
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
