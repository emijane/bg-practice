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
      <div className="oc-card grid gap-3 p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[var(--text-muted)]">
              Enter a BattleTag with `#` or `-`.
            </p>
          </div>
          {searchedBattleTag ? (
            <p className="oc-meta hidden tracking-[0.12em] sm:block">
              Active result: {searchedBattleTag}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            className="oc-input min-w-0 flex-1 px-3 py-2.5 text-sm"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for a player..."
          />
          <button
            className="oc-button px-4 py-2.5 text-sm font-semibold tracking-[-0.02em] sm:w-auto"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {error ? (
        <p className="oc-meta">
          {error}
        </p>
      ) : null}

      <SkeletonCard />

      {player ? <PlayerCard player={player} searchedBattleTag={searchedBattleTag} /> : null}
    </section>
  );
}
