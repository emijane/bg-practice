// app/components/PlayerSearch.tsx
// This component allows users to search for a player and displays their 
// information using the PlayerCard component

"use client";

import { useState } from "react";
import { getPlayerSummary } from "../lib/overfast";
import type { Player } from "../lib/types";
import PlayerCard from "./PlayerCard";
import SkeletonCard from "./SkeletonCard";

export default function PlayerSearch() {
  const [query, setQuery] = useState("");
  const [player, setPlayer] = useState<Player | null>(null);
  const [error, setError] = useState("");
  const [searchedBattleTag, setSearchedBattleTag] = useState("");

  async function handleSearch() {
    try {
      const data = await getPlayerSummary(query);
      setSearchedBattleTag(query.trim());
      setPlayer(data);
      setError("");
    } catch {
      setPlayer(null);
      setSearchedBattleTag("");
      setError("Player not found.");
    }
  }

  return (
    <section className="flex w-full flex-col gap-4">
      <div className="grid gap-3 rounded-[14px] border border-white/6 bg-[#111111] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_10px_22px_rgba(0,0,0,0.18)]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[#a1a1a1]">
              Enter a BattleTag with `#` or `-`.
            </p>
          </div>
          {searchedBattleTag ? (
            <p className="hidden [font-family:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-[0.12em] text-[#737373] sm:block">
              Active result: {searchedBattleTag}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            className="min-w-0 flex-1 rounded-xl border border-white/6 bg-[#070709] px-3 py-2.5 text-sm text-[#f5f5f5] placeholder:text-[#737373] focus:border-white/12 focus:outline-none"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for a player..."
          />
          <button
            className="rounded-xl border border-white/6 bg-[#111111] px-4 py-2.5 text-sm font-semibold tracking-[-0.02em] text-[#f5f5f5] transition duration-150 hover:border-white/12 hover:bg-[#171717] sm:w-auto"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {error ? (
        <p className="[font-family:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-[0.14em] text-[#737373]">
          {error}
        </p>
      ) : null}

      <SkeletonCard />

      {player ? <PlayerCard player={player} searchedBattleTag={searchedBattleTag} /> : null}
    </section>
  );
}
