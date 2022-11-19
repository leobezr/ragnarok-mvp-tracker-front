<script setup lang="ts">
import {
  defineProps,
  ref,
  computed,
  onBeforeUnmount,
  defineEmits,
  PropType,
} from "vue";

import { Creature } from "@/types/creature";
import { heatLevel } from "../../lib/heat-level";
import { vModel, vEmit } from "@/lib/v-model";
import { copyPosition, copyLastSeen } from "../../lib/copy-position";
import AppCard from "@/global/app-card/AppCardRoot.vue";
import CreatureMetaData from "./CreatureMetaData.vue";
import Utils from "@/lib/utils";
import TimerOutlineIcon from "icon/TimerOutline.vue";
import NumpadHotkeys from "./NumpadHotkeys.vue";
import AliveTag from "./AliveTag.vue";
import CogOutlineIcon from "icon/CogOutline.vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: false,
  },
  list: {
    type: Array as PropType<Creature[]>,
    default: [],
  },
});

const emit = defineEmits([vEmit, "edit", "restart"]);

const activeMvpId = vModel(props, emit);
const keyRefresher = ref(1);

const sortedList = computed(() => {
  return props.list.sort((a, b) => {
    const heatA = heatLevel(a) || "z";
    const heatB = heatLevel(b) || "z";

    return heatA.localeCompare(heatB);
  });
});

const buttonColor = (creature: Creature) => {
  return ["green"].includes(heatLevel(creature)) ? "success" : "primary";
};

const refresh = () => {
  if (keyRefresher.value) {
    keyRefresher.value++;
    setTimeout(refresh, 1000);
  }
};

const getGifLink = (creature: Creature) => {
  const { creatureId } = creature;
  const gifOrigin = import.meta.env.VITE_IMAGE_DATA_BASE;

  return `${gifOrigin}/${creatureId}.gif`;
};

const countDown = (creature: Creature) => {
  const { from, to } = creature.respawnTime;

  const startingPoint = new Date(creature.lastKilled + from * 1000 * 60);
  const endPoint = new Date(creature.lastKilled + to * 1000 * 60);

  if (heatLevel(creature) === "yellow") {
    return {
      firstCount: "",
      secondCount: Utils.countDown(Date.now(), endPoint.getTime()),
    };
  } else {
    return {
      firstCount: Utils.countDown(Date.now(), startingPoint.getTime()),
      secondCount: Utils.countDown(Date.now(), endPoint.getTime()),
    };
  }
};

const resetBossCounterText = (creature: Creature) => {
  const { firstCount, secondCount } = countDown(creature);

  switch (heatLevel(creature)) {
    case "yellow":
      return `Restart timer ~ ${secondCount}`;
    case "green":
      return "Restart timer";
    default:
      return `${firstCount} ~ ${secondCount}`;
  }
};

const setActiveMvp = (creatureId: string) => {
  if (activeMvpId.value === creatureId) {
    activeMvpId.value = "-1";
  } else {
    activeMvpId.value = creatureId;
  }
};

const copyWarp = (numpadNumber: number, creature: Creature) => {
  copyPosition(creature, numpadNumber);
};

onBeforeUnmount(() => {
  keyRefresher.value = 0;
});

refresh();
</script>

<template>
  <app-card
    v-for="creature in sortedList"
    @click="setActiveMvp(creature.id)"
    :is-active="activeMvpId === creature.id"
    :key="creature.id"
    hover-effect
  >
    <template v-slot:header>
      <div class="cardHeader">
        <div class="leftBox">
          <alive-tag :creature="creature" />
        </div>

        <el-button link @click.stop="emit('edit', creature.id)">
          <cog-outline-icon :size="18" />
        </el-button>
      </div>
    </template>

    <div class="bossHarness">
      <div class="bossData">
        <figure>
          <img :src="getGifLink(creature)" :alt="creature.name" />
        </figure>

        <creature-meta-data
          @click:last-seen="copyLastSeen(creature)"
          :creature="creature"
        />
      </div>

      <numpad-hotkeys
        v-if="activeMvpId === creature.id"
        @hotkey="(numpad) => copyWarp(numpad, creature)"
      />
    </div>

    <el-button
      @click.stop="emit('restart', creature)"
      :type="buttonColor(creature)"
      :disabled="heatLevel(creature) === ''"
      :key="keyRefresher"
    >
      <timer-outline-icon />
      {{ resetBossCounterText(creature) }}
    </el-button>
  </app-card>
</template>
