<template>
  <v-col :cols="cols">
    <multiselect
      :disabled="readonly"
      v-model="selectedValue"
      :options="options"
      class="register-text-input"
      :placeholder="placeholder"
      :allow-empty="false"
    ></multiselect>
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
    options: Array,
  },
  computed: {
    selectedValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>
