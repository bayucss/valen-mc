"use client";

import { useEffect, useState } from "react";
import { Users, Wifi, WifiOff, RefreshCw } from "lucide-react";

interface ServerData {
  online: boolean;
  players?: { online: number; max: number };
  version?: string;
  motd?: { clean?: string[] };
}

export default function ServerStatus() {
  const [data, setData] = useState<ServerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchStatus = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.mcsrvstat.us/3/valen.pl", { cache: "no-store" });
      const json = await res.json();
      setData(json);
      setLastUpdated(new Date());
    } catch {
      setData({ online: false });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const isOnline = data?.online ?? false;

  return (
    <div className="card-border rounded-2xl bg-zinc-900/60 backdrop-blur p-6 flex flex-col gap-4 min-w-[260px]">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Status serwera</h3>
        <button
          onClick={fetchStatus}
          disabled={loading}
          className="text-zinc-600 hover:text-purple-400 transition-colors disabled:opacity-50"
          aria-label="Odśwież"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
        </button>
      </div>

      <div className="flex items-center gap-3">
        {isOnline ? (
          <Wifi className="w-6 h-6 text-green-400" />
        ) : (
          <WifiOff className="w-6 h-6 text-red-400" />
        )}
        <span className={`text-2xl font-bold ${isOnline ? "text-green-400" : "text-red-400"}`}>
          {loading ? "Sprawdzanie..." : isOnline ? "Online" : "Offline"}
        </span>
      </div>

      {isOnline && data?.players && (
        <div className="flex items-center gap-2 text-zinc-300">
          <Users className="w-4 h-4 text-purple-400" />
          <span className="text-lg font-semibold">
            {data.players.online}
            <span className="text-zinc-500 text-sm font-normal"> / {data.players.max} graczy</span>
          </span>
        </div>
      )}

      {isOnline && data?.version && (
        <div className="text-xs text-zinc-500">
          Wersja: <span className="text-zinc-400">{data.version}</span>
        </div>
      )}

      <div className="pt-2 border-t border-zinc-800">
        <p className="text-xs text-zinc-600 font-mono">play.valen.pl</p>
        {lastUpdated && (
          <p className="text-xs text-zinc-700 mt-1">
            Odświeżono: {lastUpdated.toLocaleTimeString("pl-PL")}
          </p>
        )}
      </div>
    </div>
  );
}
