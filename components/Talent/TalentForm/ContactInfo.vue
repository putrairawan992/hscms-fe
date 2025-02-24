// components/biodata/ContactInfo.vue
<template>
  <v-card class="mb-4 pa-4">
    <v-card-title>Contact Information</v-card-title>

    <v-row>
      <v-col cols="12" md="6">
        <base-input
          :value="modelValue.phone"
          @input="updateField('phone', $event)"
          label="Phone Number"
          type="tel"
          :rules="[rules.required, rules.phone]"
          :disabled="disabled"
          placeholder="e.g. +6281234567890"
        />
      </v-col>
      <v-col cols="12" md="6">
        <base-input
          :value="modelValue.linkedin"
          @input="updateField('linkedin', $event)"
          label="LinkedIn URL"
          type="url"
          placeholder="e.g. https://linkedin.com/in/username"
          :disabled="disabled"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <base-input
          :value="modelValue.residential_address"
          @input="updateField('residential_address', $event)"
          label="Current Address"
          type="textarea"
          :rules="[rules.required]"
          :disabled="disabled"
          placeholder="Enter your current residential address"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <base-input
          :value="modelValue.address_on_identity_card"
          @input="updateField('address_on_identity_card', $event)"
          label="Address on ID Card (KTP)"
          type="textarea"
          :rules="[rules.required]"
          :disabled="disabled"
          placeholder="Enter address as shown on your ID Card"
        />
      </v-col>
    </v-row>

    <!-- Emergency Contact Section -->
    <v-card-subtitle class="px-0 pt-4">Emergency Contact</v-card-subtitle>
    <v-row>
      <v-col cols="12" md="4">
        <base-input
          :value="modelValue.emergency_name"
          @input="updateField('emergency_name', $event)"
          label="Emergency Contact Name"
          :rules="[rules.required]"
          :disabled="disabled"
        />
      </v-col>
      <v-col cols="12" md="4">
        <base-input
          :value="modelValue.emergency_relationship"
          @input="updateField('emergency_relationship', $event)"
          label="Relationship"
          :rules="[rules.required]"
          :disabled="disabled"
          placeholder="e.g. Parent, Spouse, Sibling"
        />
      </v-col>
      <v-col cols="12" md="4">
        <base-input
          :value="modelValue.emergency_phone"
          @input="updateField('emergency_phone', $event)"
          label="Emergency Contact Phone"
          type="tel"
          :rules="[rules.required, rules.phone]"
          :disabled="disabled"
          placeholder="e.g. +6281234567890"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { VALIDATION_RULES } from "../../../constants/validation";
import BaseInput from "../../Shared/BaseInput.vue";

export default {
  name: "ContactInfo",

  components: {
    BaseInput,
  },

  props: {
    modelValue: {
      type: Object,
      required: true,
      default: () => ({
        phone: "",
        linkedin: "",
        residential_address: "",
        address_on_identity_card: "",
        emergency_name: "",
        emergency_relationship: "",
        emergency_phone: "",
      }),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const updateField = (field, value) => {
      emit("update:modelValue", {
        ...props.modelValue,
        [field]: value,
      });
    };

    return {
      updateField,
      rules: VALIDATION_RULES,
    };
  },
};
</script>

<style scoped>
:deep(.v-text-field.v-text-field--enclosed.v-textarea) {
  .v-text-field__slot textarea {
    min-height: 80px;
  }
}
</style>
