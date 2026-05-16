// app/components/PlayerCard.tsx
// This component displays a player's information in a card format

"use client";

import type { Player } from "../lib/types";

export default function PlayerCard({ player }: { player: Player }) {
  const profile = {
    user: {
      username: player.username,
      title: player.title,
      avatar: player.avatar,
      lastUpdatedAt: player.last_updated_at,
      endorsementLevel: player.endorsement?.level,
    },
    competitive: {
      season: player.competitive?.pc?.season,
      tank: {
        division: player.competitive?.pc?.tank?.division,
        tier: player.competitive?.pc?.tank?.tier,
        rankIcon: player.competitive?.pc?.tank?.rank_icon,
        tierIcon: player.competitive?.pc?.tank?.tier_icon,
        roleIcon: player.competitive?.pc?.tank?.role_icon,
      },
      damage: {
        division: player.competitive?.pc?.damage?.division,
        tier: player.competitive?.pc?.damage?.tier,
        rankIcon: player.competitive?.pc?.damage?.rank_icon,
        tierIcon: player.competitive?.pc?.damage?.tier_icon,
        roleIcon: player.competitive?.pc?.damage?.role_icon,
      },
      support: {
        division: player.competitive?.pc?.support?.division,
        tier: player.competitive?.pc?.support?.tier,
        rankIcon: player.competitive?.pc?.support?.rank_icon,
        tierIcon: player.competitive?.pc?.support?.tier_icon,
        roleIcon: player.competitive?.pc?.support?.role_icon,
      }
    },
  };

  return (
    <div className="border-1 flex flex-col items-center">
      <img src={player.avatar} alt={player.username} width={80} />
      <p>{profile.user.username}</p>
      <p>{profile.user.title}</p>
      <p>
        {player.last_updated_at != null
          ? new Date(player.last_updated_at * 1000).toLocaleString()
          : "Last updated: unavailable"}
      </p>
      <p>Endorsement level: {profile.user.endorsementLevel}</p>
      <p>Season: {profile.competitive.season ?? "N/A"}</p>
      <p>PC Stats</p>
      <div>
        <div>
          <p>Tank: 
            {player.competitive?.pc?.tank
            ? `${player.competitive.pc.tank.division} ${player.competitive.pc.tank.tier}`
            : "N/A"}</p>
        </div>
        <p>Damage: 
          {player.competitive?.pc?.damage
          ? `${player.competitive.pc.damage.division} ${player.competitive.pc.damage.tier}`
          : "N/A"}</p>
        <p>Support: 
          {player.competitive?.pc?.support
          ? ` ${player.competitive.pc.support.division} ${player.competitive.pc.support.tier}`
          : "N/A"}
        </p>
      </div>
    </div>
  );
}
