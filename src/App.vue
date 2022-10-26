<script setup lang="ts">
import { ref } from "vue";
import AuthRenderer from "./views/auth/AuthRenderer.vue";
import "./style/style.scss";

const userAuthenticated = ref(false);
</script>

<template>
  <div app-container>
    <div v-if="userAuthenticated">
      <auth-renderer />
    </div>

    <router-view anonymous-session v-else />
  </div>
</template>

<style lang="scss"></style>
