import ServerStatus from "@/components/ServerStatus";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden -mt-16">

        <div className="relative flex flex-col items-center gap-8 text-center max-w-3xl">
          <div className="w-24 h-24 md:w-32 md:h-32 relative">
            <Image
              src="/logo.png"
              alt="Valen logo"
              fill
              className="object-contain drop-shadow-[0_0_24px_rgba(139,92,246,0.5)]"
              priority
            />
          </div>

          <div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-none">
              VALEN<span className="text-purple-500">.</span>PL
            </h1>
            <p className="mt-5 text-zinc-300 text-xl md:text-2xl" style={{ fontFamily: "var(--font-raleway)" }}>
              Stary <span className="font-bold text-purple-400">EasyHC</span> w nowym wydaniu
            </p>
          </div>

          <ServerStatus />

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 hover:border-purple-700/50 rounded-2xl px-5 py-3 transition-colors cursor-pointer select-all">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-sm text-zinc-300">play.valen.pl</span>
            </div>
            <Link
              href="/sklep"
              className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-2xl transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              Sklep
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 flex flex-col items-center gap-2 text-zinc-700 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Przewiń</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Discord + CTA */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Discord card */}
          <a
            href="https://discord.gg/CFfSE5qcs"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl border border-zinc-800 hover:border-[#5865F2]/50 bg-zinc-900/40 hover:bg-zinc-900/70 p-8 flex flex-col gap-5 transition-all overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(88,101,242,0.1),transparent_70%)]" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#5865F2]/20 border border-[#5865F2]/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963a.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Społeczność</p>
                <h3 className="text-xl font-black text-white">Discord</h3>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Dołącz do naszego Discorda — ogłoszenia, pomoc, konkursy i aktywna społeczność graczy.
            </p>
            <div className="flex items-center gap-2 text-[#5865F2] text-sm font-semibold group-hover:gap-3 transition-all">
              Dołącz do serwera
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>

          {/* CTA card */}
          <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 flex flex-col gap-5 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(109,40,217,0.12),transparent_70%)]" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-800/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Minecraft</p>
                <h3 className="text-xl font-black text-white">Graj teraz</h3>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Skopiuj adres serwera, wklej do Minecrafta i zacznij grać całkowicie za darmo.
            </p>
            <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 font-mono text-zinc-400 select-all text-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              play.valen.pl
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
