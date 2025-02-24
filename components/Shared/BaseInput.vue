<template>
  <v-text-field
    :value="modelValue"
    @input="$emit('update:modelValue', $event)"
    :label="label"
    :rules="rules"
    :error-messages="errorMessages"
    :hint="hint"
    outlined
    dense
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    modelValue: [String, Number],
    label: String,
    rules: {
      type: Array,
      default: () => [],
    },
    errorMessages: {
      type: Array,
      default: () => [],
    },
    hint: String,
  },
  emits: ["update:modelValue"],
};
</script>
