// app/components/PlayerCard.tsx
// This component displays a player's information in a card format

"use client";

import type { Player } from "../lib/types";

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <div className="border-1 flex flex-col items-center">
      <img src={player.avatar} alt={player.username} width={80} />
      <p>{player.username}</p>
      <p>{player.title}</p>
      <p>{player.last_updated_at}</p>
    </div>
  );
}
