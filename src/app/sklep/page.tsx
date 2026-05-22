import { ShoppingBag, Crown, Gem, Zap, Star, ExternalLink } from "lucide-react";

const packages = [
  {
    name: "VIP",
    price: "9,99 zł",
    color: "from-zinc-800 to-zinc-900",
    borderColor: "border-zinc-600/50",
    badgeColor: "bg-zinc-700 text-zinc-300",
    icon: <Star className="w-8 h-8 text-zinc-300" />,
    perks: [
      "Prefiks [VIP] na czacie",
      "Dostęp do /fly w lobbyach",
      "3 domy (/sethome)",
      "Kolorowe wiadomości na czacie",
      "Priorytetowe wejście na serwer",
    ],
  },
  {
    name: "SVIP",
    price: "19,99 zł",
    color: "from-purple-950 to-violet-950",
    borderColor: "border-purple-700/50",
    badgeColor: "bg-purple-700 text-purple-200",
    icon: <Gem className="w-8 h-8 text-purple-400" />,
    featured: true,
    perks: [
      "Wszystko z VIP",
      "Prefiks [SVIP] na czacie",
      "/fly na wszystkich światach",
      "6 domów (/sethome)",
      "Dostęp do ekskluzywnych trybów",
      "Podwójne doświadczenie",
    ],
  },
  {
    name: "MVP",
    price: "39,99 zł",
    color: "from-yellow-950 to-amber-950",
    borderColor: "border-yellow-600/50",
    badgeColor: "bg-yellow-700 text-yellow-200",
    icon: <Crown className="w-8 h-8 text-yellow-400" />,
    perks: [
      "Wszystko z SVIP",
      "Złoty prefiks [MVP]",
      "Nieograniczone domy",
      "Własna wiadomość dołączenia",
      "Dostęp do bety nowych trybów",
      "Bezpłatne comiesięczne paczki",
    ],
  },
];

const extras = [
  { name: "x100 Kluczy", price: "4,99 zł", icon: <Zap className="w-5 h-5 text-yellow-400" /> },
  { name: "x1000 Monet", price: "7,99 zł", icon: <Zap className="w-5 h-5 text-yellow-400" /> },
  { name: "Kit Startowy", price: "2,99 zł", icon: <ShoppingBag className="w-5 h-5 text-purple-400" /> },
  { name: "Reset statystyk", price: "5,99 zł", icon: <ShoppingBag className="w-5 h-5 text-purple-400" /> },
];

export default function SklepPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-950/60 border border-purple-800/40 mb-4">
          <ShoppingBag className="w-8 h-8 text-purple-400" />
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-3">Sklep serwera</h1>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Wspieraj serwer i odblokuj ekskluzywne przywileje. Wszystkie zakupy są jednorazowe i trwałe.
        </p>
      </div>

      {/* Rangi */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`relative rounded-2xl bg-gradient-to-br ${pkg.color} border ${pkg.borderColor} p-6 flex flex-col gap-4 ${
              pkg.featured ? "ring-2 ring-purple-500 scale-105" : ""
            }`}
          >
            {pkg.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                NAJPOPULARNIEJSZY
              </div>
            )}

            <div className="flex items-center gap-3">
              {pkg.icon}
              <div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${pkg.badgeColor}`}>
                  {pkg.name}
                </span>
                <div className="text-2xl font-extrabold text-white mt-1">{pkg.price}</div>
              </div>
            </div>

            <ul className="flex flex-col gap-2 flex-1">
              {pkg.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>

            <a
              href="https://valen.pl/sklep"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 rounded-xl transition-colors"
            >
              Kup teraz <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>

      {/* Dodatki */}
      <h2 className="text-2xl font-bold text-white mb-6">Dodatki i przedmioty</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {extras.map((item) => (
          <div
            key={item.name}
            className="card-border rounded-2xl bg-zinc-900/60 p-5 flex flex-col items-center gap-3 text-center hover:bg-zinc-900 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <p className="font-semibold text-white text-sm">{item.name}</p>
              <p className="text-purple-400 font-bold">{item.price}</p>
            </div>
            <a
              href="https://valen.pl/sklep"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-xs bg-purple-600/20 hover:bg-purple-600 border border-purple-700/50 text-purple-300 hover:text-white py-1.5 rounded-lg transition-colors"
            >
              Kup
            </a>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-zinc-600 mt-10">
        Masz pytania? Napisz do nas na Discordzie · Płatności obsługiwane przez Tebex
      </p>
    </div>
  );
}
