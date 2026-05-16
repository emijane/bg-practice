// app/lib/types.ts
// Define the Player type based on the expected structure of player data

export type Player = {
  username: string;
  avatar: string;
  title?: string | null;
  last_updated_at?: number | null;
  endorsement?: {
    level: number;
  } | null;
  competitive?: {
    pc?: {
        season?: number;
        tank?: {
            division?: string;
            tier?: number;
            role_icon?: string;
            rank_icon?: string;
            tier_icon?: string;
        } | null;
        damage?: {
            division?: string;
            tier?: number;
            role_icon?: string;
            rank_icon?: string;
            tier_icon?: string;
        } | null;
        support?: {
            division?: string;
            tier?: number;
            role_icon?: string;
            rank_icon?: string;
            tier_icon?: string;
        } | null;
        open?: {
            division?: string;
            tier?: number;
            role_icon?: string;
            rank_icon?: string;
            tier_icon?: string;
        } | null;
    } | null;
  }
};