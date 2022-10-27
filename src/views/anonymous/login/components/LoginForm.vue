<script setup lang="ts">
import { ref, defineEmits } from "vue";
import { Form } from "@/types/form";
import { loginUser, rules } from "../lib/rules";
import Utils from "@/lib/utils";

const emit = defineEmits(["login", "toggle:stage"]);
const LoginForm = ref<null | Form>(null);

const loginAttempt = async () => {
  const Form = Utils.isType<Form>(LoginForm.value, "validate");

  if (Form) {
    await Form.validate((valid) => {
      if (valid) {
        emit("login", loginUser);
      }
    });
  }
};
</script>

<template>
  <el-form ref="LoginForm" :model="loginUser" :rules="rules">
    <h1>Welcome Back</h1>

    <el-form-item prop="email">
      <el-input
        v-model="loginUser.email"
        placeholder="Email"
        name="email"
        type="email"
      />
    </el-form-item>

    <el-form-item prop="password">
      <el-input
        v-model="loginUser.password"
        placeholder="Password"
        name="password"
        type="password"
        autocomplete="off"
      />
    </el-form-item>

    <el-button @click="loginAttempt" type="primary">Login</el-button>

    <span class="createAccountCTA">
      <span>Not a member yet?</span>
      <a href="#" @click="$emit('toggle:stage')">Create account</a>
    </span>
  </el-form>
</template>
