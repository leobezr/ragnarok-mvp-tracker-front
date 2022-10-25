<script setup lang="ts">
import { ref } from "vue";
import AuthRenderer from "./views/auth/AuthRenderer.vue";

const userAuthenticated = ref(true);
</script>

<template>
  <div app-container>
    <div v-if="userAuthenticated">
      <auth-renderer />
    </div>

    <router-view v-else />
  </div>
</template>

<style lang="scss"></style>
