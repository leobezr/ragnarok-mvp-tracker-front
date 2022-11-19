<script setup lang="ts">
import { defineProps, computed, defineEmits, PropType } from "vue";
import { Creature } from "@/types/creature";
import { heatLevel } from "../../lib/heat-level";
import CopyContentIcon from "icon/ContentCopy.vue";
import Utils from "@/lib/utils";

const props = defineProps({
  creature: {
    type: Object as PropType<Creature>,
    required: true,
  },
});

const emit = defineEmits(["click:last-seen"]);

const respawnTime = computed(() => {
  const { from, to } = props.creature.respawnTime;
  return `${from} / ${to}min`;
});

const deathPosition = computed(() => {
  const { x, y } = props.creature.lastSeen;
  return `${x}, ${y}`;
});

const killedTime = computed(() => {
  return Utils.getDate(props.creature.lastKilled);
});

const respawnRange = computed(() => {
  const _h = (date: Date) => {
    const _t = (value: number) => `${value}`.padStart(2, "0");

    const hour = _t(date.getHours());
    const min = _t(date.getMinutes());

    return `${hour}h${min}`;
  };

  const { from, to } = props.creature.respawnTime;
  const startingPoint = new Date(props.creature.lastKilled + from * 1000 * 60);
  const endPoint = new Date(props.creature.lastKilled + to * 1000 * 60);

  return `${_h(startingPoint)} ~ ${_h(endPoint)}`;
});
</script>

<template>
  <div class="wrapMetaData">
    <div class="smallControllers">
      <el-button
        @click.stop="emit('click:last-seen')"
        size="small"
        type="info"
        plain
      >
        <small>
          <copy-content-icon :size="16" />
          warp
        </small>
      </el-button>
    </div>

    <ul class="creatureMetaData">
      <li>
        <span class="category">Name:</span>
        <span class="value">{{ props.creature.name }}</span>
      </li>

      <li>
        <span class="category">Creature ID:</span>
        <span class="value">{{ props.creature.creatureId }}</span>
      </li>

      <li>
        <span class="category">Location:</span>
        <span class="value">{{ props.creature.warp.location }}</span>
      </li>

      <li>
        <span class="category">Respawn Time:</span>
        <span class="value">{{ respawnTime }}</span>
      </li>

      <li>
        <span class="category">Death Position:</span>
        <span class="value">{{ deathPosition }}</span>
      </li>

      <li>
        <span class="category">Killed:</span>
        <span class="value">{{ killedTime }}</span>
      </li>

      <li>
        <span class="category">Respawns:</span>
        <span class="value heatLabel" :heat="heatLevel(props.creature)">{{
          respawnRange
        }}</span>
      </li>
    </ul>
  </div>
</template>
