<script setup lang="ts">
import { Creature } from "@/types/creature";
import { computed, defineProps, PropType } from "vue";
import { heatLevel } from "../../lib/heat-level";

const props = defineProps({
  creature: {
    type: Object as PropType<Creature>,
    required: true,
  },
});

const status = computed(() => {
  return heatLevel(props.creature);
});

const snippet = computed(() => {
  const creatureStatus = status.value;

  switch (creatureStatus) {
    case "green":
      return "Alive";
    case "yellow":
      return "Possibly Alive";
    default:
      return "Not alive";
  }
});
</script>

<template>
  <div class="aliveTag" :heat-level="status">
    <span>{{ snippet }}</span>
  </div>
</template>
