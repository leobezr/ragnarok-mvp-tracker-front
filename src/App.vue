<script setup lang="ts">
import { ref } from "vue";
import { eventBus } from "./main";
import { navigate } from "@/router";
import AuthRenderer from "./views/auth/AuthRenderer.vue";
import "./style/style.scss";

const authenticated = ref(true);

const login = async (isAuthenticated: boolean) => {
  authenticated.value = isAuthenticated;
  navigate({ name: "Dashboard" });
};

eventBus.$on("authenticate", login);
</script>

<template>
  <div app-container>
    <div v-if="authenticated">
      <auth-renderer />
    </div>

    <router-view anonymous-session v-else />
  </div>
</template>
