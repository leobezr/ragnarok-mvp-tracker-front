<script setup lang="ts">
import { vModel, vEmit } from "@/lib/v-model";
import { defineProps, defineEmits } from "vue";
import AppCard from "../app-card/AppCardRoot.vue";
import CloseIcon from "icon/Close.vue";
import LoaderProgress from "../loader-progress/LoaderProgress.vue";
import "./scss/_popup.scss";

const emit = defineEmits([vEmit, "close"]);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  clickOutClose: {
    type: Boolean,
    default: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const showPopup = vModel(props, emit);

const clickOutSide = () => {
  if (props.clickOutClose) {
    emit("close");
  }
};
</script>

<template>
  <div v-if="showPopup" id="popup">
    <div @click.stop="clickOutSide" class="smokeScreen" />

    <app-card class="popupContentContainer">
      <slot name="header">
        <div class="popupHeader">
          <h4>{{ props.title }}</h4>

          <el-button @click="emit('close')" link>
            <close-icon :size="18" />
          </el-button>
        </div>
      </slot>

      <loader-progress v-if="loading" />

      <div class="popupContent">
        <slot />
      </div>
    </app-card>
  </div>
</template>
