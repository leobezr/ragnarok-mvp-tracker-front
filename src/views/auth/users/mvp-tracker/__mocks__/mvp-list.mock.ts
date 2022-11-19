import { Creature } from "@/types/creature";

const min = 1000 * 60 * 1;

export const mvpMock: Creature[] = [
  {
    id: "1",
    name: "Kiel-D02",
    creatureId: 1734,
    lastKilled: Date.now(),
    lastSeen: { x: 19, y: 98 },
    warp: {
      location: "kh_dun02",
      cornerPosition: {
        nw: { x: 19, y: 61 },
        n: { x: 106, y: 63 },
        ne: { x: 178, y: 50 },
        e: { x: 13, y: 116 },
        se: { x: 104, y: 125 },
        s: { x: 196, y: 130 },
        sw: { x: 25, y: 212 },
        w: { x: 134, y: 230 },
        c: { x: 224, y: 225 },
      },
    },
    respawnTime: {
      from: 120,
      to: 180,
    },
  },
  {
    id: "2",
    name: "Turtle General",
    creatureId: 1312,
    lastKilled: Date.now() - min * 180,
    lastSeen: { x: 19, y: 98 },
    warp: {
      location: "tur_dun04",
      cornerPosition: {
        nw: { x: 19, y: 61 },
        n: { x: 106, y: 63 },
        ne: { x: 178, y: 50 },
        e: { x: 13, y: 116 },
        se: { x: 104, y: 125 },
        s: { x: 196, y: 130 },
        sw: { x: 25, y: 212 },
        w: { x: 134, y: 230 },
        c: { x: 224, y: 225 },
      },
    },
    respawnTime: {
      from: 60,
      to: 70,
    },
  },
  {
    id: "3",
    name: "Hardrock Mammoth",
    creatureId: 1990,
    lastKilled: Date.now() - min * 120,
    lastSeen: { x: 100, y: 130 },
    warp: {
      location: "man_fild03",
      cornerPosition: {
        nw: { x: 19, y: 61 },
        n: { x: 106, y: 63 },
        ne: { x: 178, y: 50 },
        e: { x: 13, y: 116 },
        se: { x: 104, y: 125 },
        s: { x: 196, y: 130 },
        sw: { x: 25, y: 212 },
        w: { x: 134, y: 230 },
        c: { x: 224, y: 225 },
      },
    },
    respawnTime: {
      from: 120,
      to: 180,
    },
  },
];
