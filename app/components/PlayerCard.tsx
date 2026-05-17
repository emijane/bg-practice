// app/components/PlayerCard.tsx
// This component displays a player's information in a card format

"use client";
/* eslint-disable @next/next/no-img-element */

import type { Player } from "../lib/types";

type PlayerCardProps = {
  player: Player;
  searchedBattleTag: string;
};


export default function PlayerCard({ player, searchedBattleTag }: PlayerCardProps) {
  const username = player.username;
  const avatar = player.avatar;
  const title = player.title ?? "No title equipped";
  const lastUpdatedAt = player.last_updated_at;
  const endorsementLevel = player.endorsement?.level ?? "N/A";
  const tankDivision = player.competitive?.pc?.tank?.division;
  const tankTier = player.competitive?.pc?.tank?.tier;
  const damageDivision = player.competitive?.pc?.damage?.division;
  const damageTier = player.competitive?.pc?.damage?.tier;
  const supportDivision = player.competitive?.pc?.support?.division;
  const supportTier = player.competitive?.pc?.support?.tier;

  function toSentenceCase(text: string): string {
    if (!text) return "";

    const lowercase = text.toLowerCase();
    return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
  }

  const cardClassName =
    "grid gap-4 rounded-xl border border-white/6 bg-[#111111] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_10px_22px_rgba(0,0,0,0.18)] transition duration-150 hover:-translate-y-px hover:border-white/12 hover:bg-[#171717] sm:grid-cols-[auto_1fr]";

  const labelClassName =
    "[font-family:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-[0.14em] text-[#737373]";

  const valueClassName = "text-sm font-semibold tracking-[-0.02em] text-[#f5f5f5]";

  return (
    <article className={cardClassName}>
      <div className="flex items-start gap-3 sm:flex-col sm:items-center sm:gap-2">
        <img
          src={avatar}
          alt={`${username} avatar`}
          width={88}
          height={88}
          className="h-22 w-22 rounded-full border border-white/6 object-cover"
        />
        <div className="flex min-w-0 flex-1 flex-col gap-1 sm:hidden">
          <p className="truncate text-[15px] font-semibold tracking-[-0.03em] text-[#f5f5f5]">
            {searchedBattleTag}
          </p>
          <p className="truncate text-sm text-[#a1a1a1]">{title}</p>
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-4">
        <div className="hidden flex-col gap-1 sm:flex">
          <p className="truncate text-[15px] font-semibold tracking-[-0.03em] text-[#f5f5f5]">
            {searchedBattleTag}
          </p>
          <p className="truncate text-sm text-[#a1a1a1]">{title}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="flex flex-col gap-1">
              <p className={labelClassName}>Updated</p>
              <p className="[font-family:var(--font-ibm-plex-mono)] text-[11px] text-[#a1a1a1]">
                {lastUpdatedAt != null
                  ? new Date(lastUpdatedAt * 1000).toLocaleString()
                  : "Unavailable"}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className={labelClassName}>Endorsement</p>
              <p className={valueClassName}>{endorsementLevel}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className={labelClassName}>Platform</p>
              <p className={valueClassName}>PC</p>
            </div>
          </div>

          <p className="justify-self-start rounded-full border border-white/6 bg-[#070709] px-2.5 py-1 [font-family:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-[0.14em] text-[#737373] sm:justify-self-end">
            Competitive
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-3">
          <div className="rounded-xl border border-white/6 bg-[#070709] px-3 py-2">
            <p className={labelClassName}>Tank</p>
            <p className={`${valueClassName} mt-1`}>
              {player.competitive?.pc?.tank ? `${tankDivision ?? "N/A"} ${tankTier ?? "N/A"}` : "N/A"}
            </p>
          </div>

          <div className="rounded-xl border border-white/6 bg-[#070709] px-3 py-2">
            <p className={labelClassName}>Damage</p>
            <p className={`${valueClassName} mt-1`}>
              {player.competitive?.pc?.damage
                ? `${damageDivision ?? "N/A"} ${damageTier ?? "N/A"}`
                : "N/A"}
            </p>
          </div>

          <div className="rounded-xl border border-white/6 bg-[#070709] px-3 py-2">
            <p className={labelClassName}>Support</p>
            <p className={`${valueClassName} mt-1`}>
              {player.competitive?.pc?.support
                ? `${toSentenceCase(supportDivision ?? "N/A")} ${supportTier ?? "N/A"}`
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
