<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  duration: {
    type: Number,
    default: 0.8,
  },
  status: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <el-progress
    :duration="props.duration"
    :status="props.status"
    :indeterminate="true"
    :percentage="100"
    :text-inside="true"
    :format="() => ''"
    :stroke-width="3"
  />
</template>
