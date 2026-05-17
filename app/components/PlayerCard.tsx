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
  const namecard = player.namecard;
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

  const roleRanks = [
    {
      label: "Tank",
      value: player.competitive?.pc?.tank ? `${tankDivision ?? "N/A"} ${tankTier ?? "N/A"}` : "N/A",
      active: Boolean(player.competitive?.pc?.tank),
    },
    {
      label: "DPS",
      value: player.competitive?.pc?.damage
        ? `${damageDivision ?? "N/A"} ${damageTier ?? "N/A"}`
        : "N/A",
      active: Boolean(player.competitive?.pc?.damage),
    },
    {
      label: "Support",
      value: player.competitive?.pc?.support
        ? `${toSentenceCase(supportDivision ?? "N/A")} ${supportTier ?? "N/A"}`
        : "N/A",
      active: Boolean(player.competitive?.pc?.support),
    },
  ];

  const cardClassName =
    "oc-card oc-card-hover overflow-hidden";

  const labelClassName = "oc-meta";

  return (
    <article className={cardClassName}>
      <div className="relative">
        {namecard ? (
          <img
            src={namecard}
            alt={`${username} namecard`}
            className="h-20 w-full object-cover opacity-80"
          />
        ) : (
          <div className="oc-banner-fallback h-20 w-full" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.46)_100%)]" />
      </div>

      <div className="relative px-4 pb-4">
        <div className="absolute left-4 top-0 z-20 -translate-y-[40%]">
          <img
            src={avatar}
            alt={`${username} avatar`}
            width={84}
            height={84}
            className="oc-avatar-frame block h-[84px] w-[84px] shrink-0 object-cover ring-2 ring-[var(--surface)]"
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <div className="flex min-w-0 items-center pl-[96px] pt-3">
            <div className="flex min-w-0 flex-col gap-0.5">
              <p className="truncate text-[18px] font-semibold tracking-[-0.04em] text-[var(--text)]">
                {searchedBattleTag}
              </p>
              <p className="truncate text-[13px] text-[var(--text-soft)]">{title}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:justify-end">
            <p className="oc-pill">
              Competitive
            </p>
            <p className="oc-pill">
              Platform: PC
            </p>
            <p className="oc-pill">
              Endorsement: {endorsementLevel}
            </p>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between gap-3">
          <p className="oc-meta-quiet">
            {lastUpdatedAt != null
              ? `Updated ${new Date(lastUpdatedAt * 1000).toLocaleString()}`
              : "Updated unavailable"}
          </p>
        </div>

        <div className="oc-surface-strong mt-2 overflow-hidden">
          <div className="grid sm:grid-cols-3">
            {roleRanks.map((role, index) => (
              <div
                key={role.label}
                className={`px-3 py-3 ${index > 0 ? "border-t border-white/6 sm:border-t-0 sm:border-l" : ""} border-white/6`}
              >
                <p
                  className={`${labelClassName} ${role.active ? "text-[#9a9aa3]" : "text-[#5f5f66]"}`}
                >
                  {role.label}
                </p>
                <p
                  className={`mt-1 text-[15px] font-semibold tracking-[-0.03em] ${role.active ? "text-[var(--text)]" : "text-[#6b6b73]"}`}
                >
                  {role.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
