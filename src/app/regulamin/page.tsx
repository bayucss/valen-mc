import { ScrollText } from "lucide-react";

const sections = [
  {
    title: "§1 Postanowienia ogólne",
    rules: [
      "Korzystając z serwera valen.pl, akceptujesz niniejszy regulamin w całości.",
      "Administracja zastrzega sobie prawo do zmiany regulaminu w dowolnym momencie.",
      "Nieznajomość regulaminu nie zwalnia z odpowiedzialności za jego naruszenie.",
      "Decyzje administracji są ostateczne.",
    ],
  },
  {
    title: "§2 Zachowanie na serwerze",
    rules: [
      "Zakazane jest używanie wulgaryzmów, rasizmu, dyskryminacji i mowy nienawiści.",
      "Zakazane jest nękanie, trollowanie i celowe uprzykrzanie gry innym graczom.",
      "Zakazane jest podszywanie się pod inne osoby, w tym członków administracji.",
      "Obowiązuje kultura osobista i wzajemny szacunek.",
    ],
  },
  {
    title: "§3 Zakaz cheaterstwa",
    rules: [
      "Używanie klientów z modami dającymi przewagę (cheats, hacks) jest surowo zabronione.",
      "Zakaz korzystania z błędów (bugów) gry w sposób dający przewagę.",
      "Zakaz duplikowania przedmiotów metodami niezgodnymi z mechanikami serwera.",
      "Zakaz korzystania z makr i autoklikerów.",
    ],
  },
  {
    title: "§4 Griefing i PvP",
    rules: [
      "Zakaz niszczenia, kradzieży i ingerowania w budowle innych graczy bez zgody.",
      "PvP dozwolone tylko w wyznaczonych strefach lub za obopólną zgodą.",
      "Zakaz zakładania trapów prowadzących do utraty przedmiotów bez zgody ofiary.",
      "Raiding i griefing są karane banem.",
    ],
  },
  {
    title: "§5 Chat i komunikacja",
    rules: [
      "Zakaz spamowania, floodowania i wysyłania identycznych wiadomości.",
      "Zakaz reklamowania innych serwerów Minecraft.",
      "Zakaz udostępniania linków do stron zawierających szkodliwe treści.",
      "Rozmowy na tematy polityczne i religijne są niedozwolone.",
    ],
  },
  {
    title: "§6 Konsekwencje",
    rules: [
      "Pierwsze naruszenie: ostrzeżenie (warn).",
      "Powtarzające się naruszenia: tymczasowy mute lub ban.",
      "Poważne naruszenia (cheaty, griefing): natychmiastowy stały ban.",
      "Apelacje od banów można składać na discordzie serwera.",
    ],
  },
];

export default function RegulaminPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-950/60 border border-purple-800/40 mb-4">
          <ScrollText className="w-8 h-8 text-purple-400" />
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-3">Regulamin serwera</h1>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Prosimy o zapoznanie się z regulaminem przed dołączeniem do serwera valen.pl.
          Gra na naszym serwerze oznacza akceptację poniższych zasad.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <div
            key={section.title}
            className="card-border rounded-2xl bg-zinc-900/60 p-6"
          >
            <h2 className="text-lg font-bold text-purple-400 mb-4">{section.title}</h2>
            <ul className="flex flex-col gap-2">
              {section.rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-purple-950/80 border border-purple-800/50 flex items-center justify-center text-xs text-purple-400 font-bold">
                    {i + 1}
                  </span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-zinc-600 mt-8">
        Ostatnia aktualizacja regulaminu: maj 2026 · valen.pl
      </p>
    </div>
  );
}
