import ServerStatus from "@/components/ServerStatus";
import { Copy, Shield, Zap, Users, Star } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-purple-400" />,
    title: "Szybki serwer",
    desc: "Wysoka wydajność, minimalne opóźnienia — gra bez lagów.",
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    title: "Bezpieczna społeczność",
    desc: "Aktywna administracja czuwająca nad porządkiem 24/7.",
  },
  {
    icon: <Users className="w-6 h-6 text-purple-400" />,
    title: "Aktywni gracze",
    desc: "Tysiące graczy czekają na Ciebie — dołącz do nas!",
  },
  {
    icon: <Star className="w-6 h-6 text-purple-400" />,
    title: "Unikalne tryby",
    desc: "Survival, PvP, mini-gry i wiele więcej w jednym miejscu.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(109,40,217,0.25),transparent_70%)]" />

        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-purple-400 bg-purple-950/50 border border-purple-800/50 px-3 py-1 rounded-full">
              Serwer Minecraft
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Witaj na{" "}
              <span className="text-glow text-purple-400">valen.pl</span>
            </h1>
            <p className="text-lg text-zinc-400 mb-8 max-w-lg mx-auto lg:mx-0">
              Najlepszy polski serwer Minecraft. Dołącz do tysięcy graczy i przeżyj niezapomnianą przygodę!
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 font-mono text-sm text-zinc-300">
                play.valen.pl
                <Copy className="w-4 h-4 text-zinc-500 cursor-pointer hover:text-purple-400 transition-colors" />
              </div>
              <a
                href="/sklep"
                className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors glow-purple"
              >
                Odwiedź sklep
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <ServerStatus />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-white mb-12">
            Dlaczego <span className="text-purple-400">valen.pl</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="card-border rounded-2xl bg-zinc-900/60 p-6 flex flex-col gap-3 transition-all hover:-translate-y-1 hover:bg-zinc-900"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-950/60 flex items-center justify-center">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-white">{f.title}</h3>
                <p className="text-sm text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-purple-900/40 to-violet-950/40 border border-purple-800/30 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Gotowy na przygodę?
          </h2>
          <p className="text-zinc-400 mb-8 text-lg">
            Skopiuj IP i dołącz do nas już teraz — to nic nie kosztuje!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2 bg-zinc-950/60 border border-zinc-700 rounded-xl px-6 py-3 font-mono text-zinc-300 select-all">
              play.valen.pl
            </div>
            <a
              href="/regulamin"
              className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Przeczytaj regulamin
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
