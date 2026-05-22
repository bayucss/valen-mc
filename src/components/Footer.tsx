import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-[#060608] py-8 mt-16">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-black text-white">
          <div className="w-6 h-6 relative">
            <Image src="/logo.png" alt="Valen" fill className="object-contain" />
          </div>
          VALEN<span className="text-purple-500">.</span>PL
        </div>

        <nav className="flex flex-wrap justify-center gap-4 text-sm text-zinc-600">
          <Link href="/" className="hover:text-zinc-300 transition-colors">Strona główna</Link>
          <Link href="/rankingi" className="hover:text-zinc-300 transition-colors">Rankingi</Link>
          <Link href="/sklep" className="hover:text-zinc-300 transition-colors">Sklep</Link>
          <Link href="/regulamin" className="hover:text-zinc-300 transition-colors">Regulamin</Link>
        </nav>

        <p className="text-xs text-zinc-700">
          © {new Date().getFullYear()} valen.pl
        </p>
      </div>
    </footer>
  );
}
