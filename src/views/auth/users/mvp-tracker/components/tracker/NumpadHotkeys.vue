<script setup lang="ts">
import { ref, defineEmits, onBeforeUnmount } from "vue";

const emit = defineEmits(["hotkey"]);
const clickedRegistry = ref<number[]>([]);

const register = (num: number) => {
  const alreadyPressed = clickedRegistry.value.includes(num);

  if (alreadyPressed) {
    clickedRegistry.value.splice(clickedRegistry.value.indexOf(num), 1);
  } else {
    clickedRegistry.value.push(num);
    emit("hotkey", num);
  }

  if (clickedRegistry.value.length === 9) {
    setTimeout(() => {
      clickedRegistry.value = [];
    }, 250);
  }
};

const pressedKey = (event: KeyboardEvent) => {
  const keyCode = event.code;

  if (keyCode.includes("Numpad")) {
    const pressedNumpad = Number(keyCode.substring(6) ?? 0);

    if (pressedNumpad) {
      register(pressedNumpad);
    }
  }
};

addEventListener("keypress", pressedKey);

onBeforeUnmount(() => {
  removeEventListener("keypress", pressedKey);
});
</script>

<template>
  <div @click.stop @keypress.Numpad="pressedKey" id="numpadHotkey">
    <el-tooltip
      content="You can use your Numpad keys to copy warp corner positions"
      effect="light"
      placement="right-start"
    >
      <ul>
        <li
          v-for="n in 3"
          :clicked="clickedRegistry.includes(6 + n)"
          @click="register(6 + n)"
        >
          {{ 6 + n }}
        </li>

        <li
          v-for="n in 3"
          :clicked="clickedRegistry.includes(3 + n)"
          @click="register(3 + n)"
        >
          {{ 3 + n }}
        </li>

        <li
          v-for="n in 3"
          :clicked="clickedRegistry.includes(0 + n)"
          @click="register(0 + n)"
        >
          {{ 0 + n }}
        </li>
      </ul>
    </el-tooltip>
  </div>
</template>
