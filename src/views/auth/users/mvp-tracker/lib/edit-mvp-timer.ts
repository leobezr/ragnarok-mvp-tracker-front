import { Rules } from "@/types/form";
import { reactive } from "vue";

export const rules: Rules = reactive({
  day: [
    {
      required: true,
      trigger: "change",
    },
  ],
  time: [
    {
      required: true,
      trigger: "change",
    },
  ],
});
