<script setup lang="ts">
import { ref, computed } from "vue";
import LoginForm from "./components/LoginForm.vue";
import CreateLoginForm from "./components/CreateLoginForm.vue";
import "./scss/_login.scss";

const loginStage = ref<"login" | "creation">("login");

const isLoginStage = computed(() => {
  return loginStage.value === "login";
});

const toggleStage = () => {
  loginStage.value = isLoginStage.value ? "creation" : "login";
};
</script>

<template>
  <div id="loginWrap">
    <div class="leftBox">
      <transition name="el-zoom-in-top">
        <login-form v-show="isLoginStage" @toggle:stage="toggleStage" />
      </transition>

      <transition name="el-zoom-in-top">
        <create-login-form v-show="!isLoginStage" @toggle:stage="toggleStage" />
      </transition>
    </div>
  </div>
</template>
