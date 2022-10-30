<script setup lang="ts">
import { ref } from "vue";
import { createUser, rules } from "../lib/rules";
import { Form } from "@/types/form";
import { raiseSuccess, raiseError } from "@/lib/snackbar";
import Utils from "@/lib/utils";

const emit = defineEmits(["recover", "shift:stage"]);
const CreateLoginForm = ref(null);

const createUserAttempt = async () => {
  const Form = Utils.isType<Form>(CreateLoginForm.value, "validate");

  if (Form) {
    await Form.validate((valid) => {
      if (valid) {
        emit("recover", createUser.email);
        Form.resetFields();
        raiseSuccess("We will send you an email!");
      } else {
        raiseError("That's not a valid email");
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

    <el-button @click="createUserAttempt" type="primary">
      Recover password
    </el-button>

    <span class="createAccountCTA">
      <a href="#" @click="$emit('shift:stage')" class="loginLink">Go back</a>
    </span>
  </el-form>
</template>
