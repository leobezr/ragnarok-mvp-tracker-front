import { raiseSuccess, raiseError } from "@/lib/snackbar";
import { Creature } from "@/types/creature";
import { Dictionary } from "@/types";

const POSITION_TABLE: Dictionary<string> = {
  "1": "sw",
  "2": "s",
  "3": "se",
  "4": "w",
  "5": "c",
  "6": "e",
  "7": "nw",
  "8": "n",
  "9": "e",
};

const copy = (text: string) => {
  try {
    navigator.clipboard.writeText(text);
    raiseSuccess("Warp copied to clipboard", 1200);
  } catch {
    raiseError("Try doing it more calmly");
  }
};

export const copyPosition = (creature: Creature, numpad: number) => {
  const dir = POSITION_TABLE[numpad] ?? "c";
  const warp = creature.warp.location;
  const { x, y } = creature.warp.cornerPosition[dir];

  if (x && y) {
    copy(`@warp ${warp} ${x} ${y}`);
  } else {
    raiseError("Monster doesn't have map corners defined");
  }
};

export const copyLastSeen = (creature: Creature) => {
  const mapLocation = creature.warp.location;
  const { x, y } = creature.lastSeen;

  copy(`@warp ${mapLocation} ${x} ${y}`);
};
