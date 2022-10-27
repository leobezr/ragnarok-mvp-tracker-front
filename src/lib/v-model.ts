import { computed } from "vue";

export const vEmit = "update:modelValue";

/**
 * Creates a v-model value, automatically updating parent
 * using update:modelValue event
 *
 * @param props - defineProps({ modelValue: any })
 * @param emit - defineEmits(["update:modelValue"])
 * @returns modelValue
 *
 * @example
 * const props = defineProps({ modelValue: String  });
 * const emit = defineEmits([vEmit]);
 *
 * const name = vModel(props, emit)
 *
 * <el-input v-model="name" />
 */
export const vModel = <T>(props: any, emit: any) =>
  computed({
    get() {
      return props.modelValue as T;
    },
    set(value) {
      emit(vEmit, value);
    },
  });
