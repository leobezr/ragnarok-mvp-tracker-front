<script setup lang="ts">
import { ref } from "vue";

const LoginForm = ref(null);
</script>

<template>
  <el-form ref="LoginForm">
    <h1>Welcome Back</h1>

    <el-input placeholder="Email" />

    <el-input placeholder="Password" />

    <el-button type="primary">Login</el-button>
  </el-form>
</template>

<style lang="scss"></style>
