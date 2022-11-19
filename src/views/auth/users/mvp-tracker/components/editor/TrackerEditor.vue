<script setup lang="ts">
import { reactive, defineProps, PropType, ref } from "vue";
import { vEmit, vModel } from "@/lib/v-model";
import { Creature } from "@/types/creature";
import { rules } from "../../lib/edit-mvp-timer";
import { Form } from "@/types/form";
import Popup from "@/global/popup/PopupRoot.vue";
import Utils from "@/lib/utils";

const emit = defineEmits([vEmit, "save"]);

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  creature: {
    type: Object as PropType<Creature>,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const showPopup = vModel<boolean>(props, emit);
const TimerForm = ref<null | Form>(null);

const mvpTimer = reactive({
  day: Date.now(),
  time: props.creature.lastKilled,
});

const save = async () => {
  const Form = Utils.isType<Form>(TimerForm.value, "validate");

  if (Form) {
    await Form.validate((valid) => {
      if (valid) {
        emit("save", mvpTimer.time);
      }
    });
  }
};
</script>

<template>
  <popup
    v-model="showPopup"
    :title="`${props.creature.name} death time`"
    :click-out-close="false"
    :loading="loading"
  >
    <div id="trackEditor">
      <el-form ref="TimerForm" :model="mvpTimer" :rules="rules">
        <el-form-item prop="day">
          <el-date-picker
            v-model="mvpTimer.day"
            type="date"
            format="DD/MM/YYYY"
            readonly
          />
        </el-form-item>

        <el-form-item prop="time">
          <el-time-picker v-model="mvpTimer.time" placeholder="Time of death" />
        </el-form-item>
      </el-form>

      <el-button @click="save" size="small" type="success" link>
        Save
      </el-button>
    </div>
  </popup>
</template>
