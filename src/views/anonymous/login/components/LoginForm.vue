<script setup lang="ts">
import { ref } from "vue";
import { Form, Rules } from "@/types/form";

const LoginForm = ref(null);

const validateForm = () => {};
</script>

<template>
  <el-form ref="LoginForm">
    <h1>Welcome Back</h1>

    <el-input placeholder="Email" />

    <el-input placeholder="Password" />

    <el-button type="primary">Login</el-button>

    <span class="createAccountCTA">
      <span>Not a member yet?</span>
      <a href="#" @click="$emit('toggle:stage')">Create account</a>
    </span>
  </el-form>
</template>
