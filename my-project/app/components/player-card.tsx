type Player = {
  username: string;
  avatar: string;
  title?: string | null;
};

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <div>
      <p>{player.username}</p>
    </div>
  );
}