interface Position {
  x: number | null;
  y: number | null;
}

export interface Warp {
  location: string;
  cornerPosition: {
    nw: Position;
    n: Position;
    ne: Position;
    e: Position;
    se: Position;
    s: Position;
    sw: Position;
    w: Position;
    c: Position;
  };
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
