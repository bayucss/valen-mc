"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Trophy, ShoppingBag, ScrollText } from "lucide-react";

const links = [
  { href: "/rankingi", label: "Rankingi", icon: <Trophy className="w-4 h-4" /> },
  { href: "/sklep", label: "Sklep", icon: <ShoppingBag className="w-4 h-4" /> },
  { href: "/regulamin", label: "Regulamin", icon: <ScrollText className="w-4 h-4" /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-900/80 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 relative">
            <Image src="/logo.png" alt="Valen" fill className="object-contain" />
          </div>
          <span className="font-black text-white tracking-tight">VALEN<span className="text-purple-500">.</span>PL</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ href, label, icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm transition-colors ${
                  pathname === href
                    ? "text-white bg-zinc-800"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {icon}{label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-zinc-500 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-900 bg-zinc-950 px-4 py-3 flex flex-col gap-1">
          {links.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-colors ${
                pathname === href ? "text-white bg-zinc-800" : "text-zinc-500 hover:text-white"
              }`}
            >
              {icon}{label}
            </Link>
          ))}
          <Link
            href="/sklep"
            onClick={() => setOpen(false)}
            className="mt-2 text-center bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
          >
            Graj teraz
          </Link>
        </div>
      )}
    </nav>
  );
}
