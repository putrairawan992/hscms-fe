<template>
  <v-col :cols="cols">
    <v-menu
      :ref="`datePicker${name}`"
      v-model="datePickerModel"
      offset-y
      :close-on-content-click="false"
      transition="scale-transition"
      max-width="290px"
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <div v-on="!readonly && on" style="position: relative">
          <input
            v-bind="attrs"
            outlined
            readonly
            v-model="dateModel"
            @blur="dateModel = parseDate(dateModel)"
            :placeholder="placeholder"
            class="register-text-input"
          />
          <img
            class="feather-icon-calendar"
            alt=""
            src="@/assets/svg/feathericon--calendar.svg"
          />
        </div>
      </template>
      <v-date-picker
        @input="datePickerModel = false"
        v-model="dateModel"
        no-title
      ></v-date-picker>
    </v-menu>
  </v-col>
</template>

<script>
export default {
  props: {
    cols: {
      type: [String, Number],
      default: 6,
    },
    placeholder: String,
    modelValue: String,
    readonly: Boolean,
    name: String,
  },
  data() {
    return {
      datePickerModel: false,
    };
  },
  computed: {
    dateModel: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  methods: {
    parseDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>
