import { Dictionary } from ".";

export interface Position {
  x: number | null;
  y: number | null;
}

export interface Warp {
  location: string;
  cornerPosition: Dictionary<Position>;
}

export interface Creature {
  id: string;
  name: string;
  creatureId: number;
  lastKilled: number;
  lastSeen: Position;
  warp: Warp;
  respawnTime: {
    from: number;
    to: number;
  };
}
