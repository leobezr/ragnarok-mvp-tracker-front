<script setup lang="ts">
import { defineProps } from "vue";
import "./scss/_app-card.scss";

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="appCardRoot">
    <h3 v-if="props.title">{{ props.title }}</h3>
    <slot />
  </div>
</template>
