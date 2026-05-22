import { Sword } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-purple-900/30 bg-zinc-950 py-8 mt-16">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-purple-400 font-bold text-lg">
          <Sword className="w-5 h-5" />
          valen.pl
        </div>

        <nav className="flex flex-wrap justify-center gap-4 text-sm text-zinc-500">
          <Link href="/" className="hover:text-purple-400 transition-colors">Strona główna</Link>
          <Link href="/rankingi" className="hover:text-purple-400 transition-colors">Rankingi</Link>
          <Link href="/sklep" className="hover:text-purple-400 transition-colors">Sklep</Link>
          <Link href="/regulamin" className="hover:text-purple-400 transition-colors">Regulamin</Link>
        </nav>

        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} valen.pl — Wszelkie prawa zastrzeżone
        </p>
      </div>
    </footer>
  );
}
