<script setup lang="ts">
import { ref } from "vue";

const CreateLoginForm = ref(null);
</script>

<template>
  <el-form ref="CreateLoginForm">
    <h1>Create Account</h1>

    <el-input placeholder="Email" />

    <el-input placeholder="Password" />

    <el-input placeholder="Confirm Password" />

    <el-button type="primary">Create Account</el-button>

    <span class="createAccountCTA">
      <span>Oops! I already </span>
      <a href="#" @click="$emit('toggle:stage')">have an account.</a>
    </span>
  </el-form>
</template>
