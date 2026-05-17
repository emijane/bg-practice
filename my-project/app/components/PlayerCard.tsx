// app/components/PlayerCard.tsx
// This component displays a player's information in a card format

"use client";

import type { Player } from "../lib/types";

type PlayerCardProps = {
  player: Player;
  searchedBattleTag: string;
};


export default function PlayerCard({ player, searchedBattleTag }: PlayerCardProps) {
  // Extract relevant player information for display
  const username = player.username;
  const avatar = player.avatar;
  const title = player.title;
  const lastUpdatedAt = player.last_updated_at;
  const endorsementLevel = player.endorsement?.level;
  const season = player.competitive?.pc?.season;
  const tankDivision = player.competitive?.pc?.tank?.division;
  const tankTier = player.competitive?.pc?.tank?.tier;
  const damageDivision = player.competitive?.pc?.damage?.division;
  const damageTier = player.competitive?.pc?.damage?.tier;
  const supportDivision = player.competitive?.pc?.support?.division;
  const supportTier = player.competitive?.pc?.support?.tier;  

  // Helper function to convert text to sentence case
  function toSentenceCase(text:string): string {
    if (!text) return "";

    const lowercase = text.toLowerCase();
    return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
  }

  return (
    <div className="w-xl p-4 border rounded-[10px] flex flex-col items-center gap-1">
      <img src={avatar} alt={username} width={80} />
      <p>{searchedBattleTag}</p>
      <p>{title}</p>
      <p>Last Updated:{" "}
        {lastUpdatedAt != null
          ? new Date(lastUpdatedAt * 1000).toLocaleString()
          : "Last updated: unavailable"}
      </p>
      <p>Endorsement Level: {endorsementLevel}</p>
      <p className="text-xs">PC</p>
      <div className="flex flex-col items-center">
        <div>
          <p>Tank: {" "}
            {player.competitive?.pc?.tank
            ? `${tankDivision ?? "N/A"} ${tankTier ?? "N/A"}`
            : "N/A"}</p>
        </div>
        <p>Damage: {""}
          {player.competitive?.pc?.damage
          ? `${damageDivision ?? "N/A"} ${damageTier ?? "N/A"}`
          : "N/A"}</p>
        <p>Support: 
          {player.competitive?.pc?.support
          ? ` ${toSentenceCase(supportDivision ?? "N/A")} ${supportTier ?? "N/A"}`
          : "N/A"}
        </p>
      </div>
    </div>
  );
}
