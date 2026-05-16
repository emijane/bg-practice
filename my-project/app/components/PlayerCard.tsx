"use client";

type Player = {
  username: string;
  avatar: string;
  title?: string | null;
};

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <div>
      <img src={player.avatar} alt={player.username} width={80} />
      <p>{player.username}</p>
      <p>{player.title}</p>
    </div>
  );
}
