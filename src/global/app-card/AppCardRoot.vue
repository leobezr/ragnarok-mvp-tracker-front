<script setup lang="ts">
import { defineProps } from "vue";
import LoaderProgress from "../loader-progress/LoaderProgress.vue";
import "./scss/_app-card.scss";

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  hoverEffect: {
    type: Boolean,
    default: false,
  },
  loader: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    @click="$emit('click')"
    class="appCardRoot"
    :hover-effect="props.hoverEffect"
  >
    <slot name="header">
      <div class="cardHeader">
        <h3 v-if="props.title">{{ props.title }}</h3>
      </div>
    </slot>

    <loader-progress v-if="loader" />

    <div class="mainCardContent">
      <slot />
    </div>
  </div>
</template>
