// app/lib/types.ts
// Define the Player type based on the expected structure of player data

export type Player = {
  username: string;
  avatar: string;
  title?: string | null;
  last_updated_at?: string | null;
};