import { Trophy, Sword, TrendingUp } from "lucide-react";

const killsRanking = [
  { pos: 1, name: "KratosMC", kills: 4821, kd: "8.4" },
  { pos: 2, name: "ShadowX", kills: 3954, kd: "6.2" },
  { pos: 3, name: "NightWolff", kills: 3501, kd: "5.9" },
  { pos: 4, name: "ZeroGravity", kills: 2887, kd: "4.7" },
  { pos: 5, name: "Phantomix", kills: 2634, kd: "4.1" },
  { pos: 6, name: "BladeRunner7", kills: 2210, kd: "3.8" },
  { pos: 7, name: "Vortexxx", kills: 1998, kd: "3.3" },
  { pos: 8, name: "IceSerpent", kills: 1872, kd: "3.0" },
  { pos: 9, name: "DarkPulse", kills: 1654, kd: "2.8" },
  { pos: 10, name: "CrimsonEdge", kills: 1543, kd: "2.5" },
];

const wealthRanking = [
  { pos: 1, name: "DiamentPL", wealth: "12 450 000" },
  { pos: 2, name: "GoldMiner99", wealth: "9 870 000" },
  { pos: 3, name: "TreasureHunt", wealth: "8 230 000" },
  { pos: 4, name: "SilverFox", wealth: "7 110 000" },
  { pos: 5, name: "RichKing2", wealth: "6 540 000" },
  { pos: 6, name: "Billionx", wealth: "5 980 000" },
  { pos: 7, name: "GoldRush44", wealth: "5 430 000" },
  { pos: 8, name: "CoinMasterr", wealth: "4 870 000" },
  { pos: 9, name: "Vault101", wealth: "4 320 000" },
  { pos: 10, name: "EmeraldKing", wealth: "3 900 000" },
];

const positionColors = [
  "text-yellow-400",
  "text-zinc-300",
  "text-amber-600",
];

const positionBgs = [
  "bg-yellow-950/40 border-yellow-700/30",
  "bg-zinc-900/80 border-zinc-700/30",
  "bg-amber-950/40 border-amber-800/30",
];

export default function RankingiPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-950/60 border border-purple-800/40 mb-4">
          <Trophy className="w-8 h-8 text-purple-400" />
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-3">Rankingi</h1>
        <p className="text-zinc-400">
          Top 10 graczy serwera valen.pl — aktualizowane codziennie.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Kills ranking */}
        <div className="card-border rounded-2xl bg-zinc-900/60 overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-800">
            <Sword className="w-5 h-5 text-red-400" />
            <h2 className="font-bold text-white">Top zabójców</h2>
          </div>
          <div className="divide-y divide-zinc-800">
            {killsRanking.map((player) => (
              <div
                key={player.pos}
                className={`flex items-center gap-4 px-6 py-3 ${
                  player.pos <= 3 ? positionBgs[player.pos - 1] + " border-l-2" : ""
                }`}
              >
                <span
                  className={`w-7 text-center font-bold text-sm ${
                    player.pos <= 3 ? positionColors[player.pos - 1] : "text-zinc-600"
                  }`}
                >
                  #{player.pos}
                </span>
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">
                  {player.name[0]}
                </div>
                <span className="flex-1 font-medium text-zinc-200">{player.name}</span>
                <div className="text-right">
                  <div className="font-bold text-white text-sm">{player.kills.toLocaleString()}</div>
                  <div className="text-xs text-zinc-500">K/D: {player.kd}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wealth ranking */}
        <div className="card-border rounded-2xl bg-zinc-900/60 overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-800">
            <TrendingUp className="w-5 h-5 text-yellow-400" />
            <h2 className="font-bold text-white">Najbogatsi gracze</h2>
          </div>
          <div className="divide-y divide-zinc-800">
            {wealthRanking.map((player) => (
              <div
                key={player.pos}
                className={`flex items-center gap-4 px-6 py-3 ${
                  player.pos <= 3 ? positionBgs[player.pos - 1] + " border-l-2" : ""
                }`}
              >
                <span
                  className={`w-7 text-center font-bold text-sm ${
                    player.pos <= 3 ? positionColors[player.pos - 1] : "text-zinc-600"
                  }`}
                >
                  #{player.pos}
                </span>
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">
                  {player.name[0]}
                </div>
                <span className="flex-1 font-medium text-zinc-200">{player.name}</span>
                <div className="font-bold text-yellow-400 text-sm">
                  {player.wealth} <span className="text-zinc-500 font-normal text-xs">monet</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-zinc-600 mt-8">
        Rankingi są przykładowe — połącz je z bazą danych serwera, aby pokazywać prawdziwe dane.
      </p>
    </div>
  );
}
