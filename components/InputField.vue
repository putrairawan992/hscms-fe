<template>
  <v-col :cols="cols">
    <input
      class="register-text-input"
      :placeholder="placeholder"
      v-model="modelValue"
      :readonly="readonly"
    />
  </v-col>
</template>

<script>
export default {
  props: {
    cols: {
      type: [String, Number],
      default: 12,
    },
    placeholder: String,
    modelValue: [String, Number],
    readonly: Boolean,
  },
  emits: ["update:modelValue"],
};
</script>
