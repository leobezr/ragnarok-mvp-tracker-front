<script setup lang="ts">
import { ref } from "vue";
import LoginForm from "./components/LoginForm.vue";
</script>

<template>
  <div id="loginWrap">
    <div class="leftBox">
      <login-form />
    </div>
  </div>
</template>

<style lang="scss">
@use "@/style/variables.scss" as *;

#loginWrap {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-image: url("./public/background-login.jpg");
  background-size: cover;
  background-position: center right;

  .leftBox {
    background: $backgroundHighlight;
    height: 100%;
    padding: $large-gap;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      display: flex;
      flex-direction: column;
      grid-gap: $gap;
    }
  }
}
</style>
