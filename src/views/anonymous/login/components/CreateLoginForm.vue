<script setup lang="ts">
import { ref } from "vue";
import { createUser, rules } from "../lib/rules";
import { Form } from "@/types/form";
import { raiseSuccess, raiseError } from "@/lib/snackbar";
import Utils from "@/lib/utils";

const emit = defineEmits(["create", "toggle:stage"]);
const CreateLoginForm = ref(null);

const createUserAttempt = async () => {
  const Form = Utils.isType<Form>(CreateLoginForm.value, "validate");

  if (Form) {
    await Form.validate((valid) => {
      if (valid) {
        emit("create", createUser);
        raiseSuccess("Account successfully created!");
      } else {
        raiseError("Dumb dumb!");
      }
    });
  }
};
</script>

<template>
  <el-form :model="createUser" :rules="rules" ref="CreateLoginForm" status-icon>
    <h1>Create Account</h1>

    <el-form-item prop="email">
      <el-input
        v-model="createUser.email"
        placeholder="Email"
        name="email"
        type="email"
      />
    </el-form-item>

    <el-form-item prop="password">
      <el-input
        v-model="createUser.password"
        placeholder="Password"
        name="password"
        type="password"
        autocomplete="off"
      />
    </el-form-item>

    <el-form-item prop="confirmPassword">
      <el-input
        v-model="createUser.confirmPassword"
        placeholder="Confirm Password"
        name="password"
        type="password"
        autocomplete="off"
      />
    </el-form-item>

    <el-button @click="createUserAttempt" type="primary"
      >Create Account</el-button
    >

    <span class="createAccountCTA">
      <span>Oops! I already </span>
      <a href="#" @click="$emit('toggle:stage')">have an account.</a>
    </span>
  </el-form>
</template>
