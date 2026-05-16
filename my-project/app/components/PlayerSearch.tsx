"use client";

import { useState } from "react";
import { getPlayerSummary } from "../lib/overfast";
import PlayerCard from "./PlayerCard";

type Player = {
  username: string;
  avatar: string;
  title?: string | null;
};

export default function PlayerSearch() {
  const [query, setQuery] = useState("");
  const [player, setPlayer] = useState<Player | null>(null);
  const [error, setError] = useState("");

  async function handleSearch() {
    try {
      const data = await getPlayerSummary(query);
      setPlayer(data);
      setError("");
    } catch {
      setPlayer(null);
      setError("Player not found.");
    }
  }

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {player && <PlayerCard player={player} />}
    </>
  );
}
