// components/biodata/PersonalInfo.vue
<template>
  <v-card class="mb-4 pa-4">
    <v-card-title>Personal Information</v-card-title>

    <v-row>
      <v-col cols="12" md="6">
        <base-input
          :value="modelValue.fullname"
          @input="updateField('fullname', $event)"
          label="Full Name"
          :rules="[rules.required]"
          :disabled="disabled"
        />
      </v-col>
      <v-col cols="12" md="6">
        <base-input
          :value="modelValue.email"
          @input="updateField('email', $event)"
          label="Email"
          type="email"
          :rules="[rules.required, rules.email]"
          :disabled="disabled"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <base-input
          :value="modelValue.birthplace"
          @input="updateField('birthplace', $event)"
          label="Place of Birth"
          :rules="[rules.required]"
          :disabled="disabled"
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-menu
          ref="birthDateMenu"
          v-model="birthDateMenu"
          :close-on-content-click="false"
          :disabled="disabled"
        >
          <template v-slot:activator="{ on }">
            <base-input
              :value="modelValue.birthdate"
              @input="updateField('birthdate', $event)"
              label="Date of Birth"
              readonly
              v-on="on"
              :disabled="disabled"
            />
          </template>
          <v-date-picker
            :value="modelValue.birthdate"
            @input="
              updateField('birthdate', $event);
              birthDateMenu = false;
            "
            :max="maxBirthDate"
          />
        </v-menu>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <base-select
          :value="modelValue.gender"
          @input="updateField('gender', $event)"
          :items="GENDER_OPTIONS"
          label="Gender"
          :rules="[rules.required]"
          :disabled="disabled"
        />
      </v-col>
      <v-col cols="12" md="6">
        <base-select
          :value="modelValue.maritalStatus"
          @input="updateField('maritalStatus', $event)"
          :items="MARITAL_STATUS_OPTIONS"
          label="Marital Status"
          :rules="[rules.required]"
          :disabled="disabled"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { ref } from "vue";
import {
  GENDER_OPTIONS,
  MARITAL_STATUS_OPTIONS,
} from "../../../constants/formOptions";
import { VALIDATION_RULES } from "../../../constants/validation";
import BaseInput from "../../Shared/BaseInput.vue";
import BaseSelect from "../../Shared/BaseSelect.vue";

export default {
  name: "PersonalInfo",

  components: {
    BaseInput,
    BaseSelect,
  },

  props: {
    modelValue: {
      type: Object,
      required: true,
      default: () => ({
        fullname: "",
        email: "",
        birthplace: "",
        birthdate: null,
        gender: "",
        maritalStatus: "",
      }),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const birthDateMenu = ref(false);

    const updateField = (field, value) => {
      emit("update:modelValue", {
        ...props.modelValue,
        [field]: value,
      });
    };

    const maxBirthDate = () => {
      const date = new Date();
      date.setFullYear(date.getFullYear() - 17); // Minimum age 17
      return date.toISOString().split("T")[0];
    };

    return {
      birthDateMenu,
      maxBirthDate,
      updateField,
      rules: VALIDATION_RULES,
      GENDER_OPTIONS,
      MARITAL_STATUS_OPTIONS,
    };
  },
};
</script>
