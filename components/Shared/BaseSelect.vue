// components/shared/BaseSelect.vue
<template>
  <v-select
    :value="modelValue"
    @input="$emit('update:modelValue', $event)"
    :items="items"
    :label="label"
    :rules="rules"
    :error-messages="errorMessages"
    outlined
    dense
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    modelValue: [String, Number],
    label: String,
    items: {
      type: Array,
      required: true,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    errorMessages: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["update:modelValue"],
};
</script>
