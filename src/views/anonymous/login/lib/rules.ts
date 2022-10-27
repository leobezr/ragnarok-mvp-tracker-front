import { Rules } from "@/types/form";
import { RegEmail } from "@/lib/reg-validators";
import { reactive } from "vue";

export const loginUser = reactive({
  email: "",
  password: "",
});

export const createUser = reactive({
  email: "",
  password: "",
  confirmPassword: "",
});

export const rules: Rules = reactive({
  email: [
    {
      required: true,
      message: "Invalid email",
      pattern: RegEmail,
      trigger: "change",
    },
  ],
  password: [
    {
      required: true,
      min: 7,
      max: 30,
      message: "Invalid password length",
      trigger: "change",
    },
  ],
  confirmPassword: [
    {
      required: true,
      message: "Required field",
      trigger: "change",
      validator: (_, value, callback) => {
        if (value.trim() !== "" && value === createUser.password) {
          callback();
        } else {
          callback(new Error("Password doesn't match"));
        }
      },
    },
  ],
});
