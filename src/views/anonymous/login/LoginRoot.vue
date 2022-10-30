<script setup lang="ts">
import { ref } from "vue";
import LoginForm from "./components/LoginForm.vue";
import CreateLoginForm from "./components/CreateLoginForm.vue";
import RecoverPasswordForm from "./components/RecoverPasswordForm.vue";
import "./scss/_login.scss";

const stage = ref<"login" | "creation" | "recoverPassword">("login");

const setStage = (newStage: "login" | "creation" | "recoverPassword") => {
  stage.value = newStage;
};

const sendPasswordRecoveryEmail = (email: string) => {
  console.log({ recoveryEmail: email });
  setStage("login");
};
</script>

<template>
  <div id="loginWrap">
    <div class="leftBox">
      <transition name="el-zoom-in-top">
        <login-form
          v-show="stage === 'login'"
          @shift:stage="setStage('creation')"
          @recover:password="setStage('recoverPassword')"
        />
      </transition>

      <transition name="el-zoom-in-top">
        <create-login-form
          v-show="stage === 'creation'"
          @shift:stage="setStage('login')"
        />
      </transition>

      <transition name="el-zoom-in-top">
        <recover-password-form
          v-show="stage === 'recoverPassword'"
          @shift:stage="setStage('login')"
          @recover="sendPasswordRecoveryEmail"
        />
      </transition>
    </div>
  </div>
</template>
