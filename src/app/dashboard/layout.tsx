"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/courses", label: "Courses" },
    { href: "/dashboard/hub-card", label: "Hub Card" },
    { href: "/dashboard/events", label: "Events" },
    { href: "/dashboard/settings", label: "Settings" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top bar inside dashboard scope (below global navbar) */}
      <header className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
        <button onClick={() => setOpen(true)} className="md:hidden" aria-label="Open Menu">☰</button>
        <h1 className="font-semibold">Student Dashboard</h1>
        <div className="text-sm" style={{color: "color-mix(in oklab, var(--brand-primary) 40%, black)"}}>John Doe</div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex gap-6">
        {/* Desktop sticky sidebar */}
        <aside className="hidden md:block w-64 shrink-0 sticky top-0 self-start h-[calc(100vh-7rem)] overflow-y-auto bg-white shadow-md rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="TechHub BOUESTI Logo" width={120} height={40} className="object-contain" />
            </Link>
          </div>
          <nav>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block px-3 py-2 rounded hover:bg-gray-100">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl p-4">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <Image src="/images/logo.png" alt="TechHub BOUESTI Logo" width={120} height={40} className="object-contain" />
              </Link>
              <button onClick={() => setOpen(false)} aria-label="Close Menu">✕</button>
            </div>
            <nav>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block px-3 py-2 rounded hover:bg-gray-100" onClick={() => setOpen(false)}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
}
