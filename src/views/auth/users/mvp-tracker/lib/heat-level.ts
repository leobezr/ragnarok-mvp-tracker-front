import { Creature } from "@/types/creature";

export const heatLevel = (creature: Creature) => {
  const { from, to } = creature.respawnTime;
  const now = Date.now();
  const possibleStart = creature.lastKilled + from * 1000 * 60;
  const possibleEnd = creature.lastKilled + to * 1000 * 60;

  if (now >= possibleStart && now < possibleEnd) {
    return "yellow";
  } else if (now >= possibleEnd) {
    return "green";
  }

  return "";
};
