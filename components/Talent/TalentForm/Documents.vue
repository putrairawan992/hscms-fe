// components/biodata/Documents.vue
<template>
  <v-card class="mb-4 pa-4">
    <v-card-title>Documents Information</v-card-title>

    <v-row>
      <v-col cols="12" md="6">
        <base-input
          :value="modelValue.identity_number"
          @input="updateField('identity_number', $event)"
          label="NIK (ID Card Number)"
          :rules="[rules.required, rules.nik]"
          :disabled="disabled"
          placeholder="16-digit NIK number"
        />
      </v-col>
      <v-col cols="12" md="6">
        <base-input
          :value="modelValue.npwp_number"
          @input="updateField('npwp_number', $event)"
          label="NPWP Number"
          :rules="[rules.npwp]"
          :disabled="disabled"
          placeholder="NPWP number (optional)"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <base-input
          :value="modelValue.bpjskes"
          @input="updateField('bpjskes', $event)"
          label="BPJS Kesehatan Number"
          :disabled="disabled"
          placeholder="BPJS Kesehatan number (optional)"
        />
      </v-col>
      <v-col cols="12" md="6">
        <base-input
          :value="modelValue.bpjstk"
          @input="updateField('bpjstk', $event)"
          label="BPJS Ketenagakerjaan Number"
          :disabled="disabled"
          placeholder="BPJS Ketenagakerjaan number (optional)"
        />
      </v-col>
    </v-row>

    <!-- Bank Information -->
    <v-card-subtitle class="px-0 pt-4">Bank Information</v-card-subtitle>
    <v-row>
      <v-col cols="12" md="4">
        <base-select
          :value="modelValue.bank_name"
          @input="updateField('bank_name', $event)"
          :items="BANK_LIST"
          label="Bank Name"
          :disabled="disabled"
        />
      </v-col>
      <v-col cols="12" md="4">
        <base-input
          :value="modelValue.bank_account_number"
          @input="updateField('bank_account_number', $event)"
          label="Account Number"
          :disabled="disabled"
          placeholder="Bank account number"
        />
      </v-col>
      <v-col cols="12" md="4">
        <base-input
          :value="modelValue.bank_account_name"
          @input="updateField('bank_account_name', $event)"
          label="Account Holder Name"
          :disabled="disabled"
          placeholder="Name as shown on bank account"
        />
      </v-col>
    </v-row>

    <!-- Document Upload Section -->
    <v-card-subtitle class="px-0 pt-4">Document Upload</v-card-subtitle>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="doc in documents" :key="doc.key">
        <file-upload
          :value="modelValue.files?.[doc.key]"
          @input="updateFileField(doc.key, $event)"
          :label="doc.label"
          :accept="doc.accept"
          :max-size="doc.maxSize"
          :required="doc.required"
          :disabled="disabled"
          @error="handleFileError"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { VALIDATION_RULES } from "../../../constants/validation";
import { BANK_LIST, FILE_TYPES } from "../../../constants/formOptions";
import BaseInput from "../../Shared/BaseInput.vue";
import BaseSelect from "../../Shared/BaseSelect.vue";
import FileUpload from "../../Shared/FileUpload.vue";

export default {
  name: "Documents",

  components: {
    BaseInput,
    BaseSelect,
    FileUpload,
  },

  props: {
    modelValue: {
      type: Object,
      required: true,
      default: () => ({
        identity_number: "",
        npwp_number: "",
        bpjskes: "",
        bpjstk: "",
        bank_name: "",
        bank_account_number: "",
        bank_account_name: "",
        files: {
          cv: null,
          photo: null,
          idCard: null,
        },
      }),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["update:modelValue", "error"],

  setup(props, { emit }) {
    const documents = [
      {
        key: "cv",
        label: "CV/Resume",
        ...FILE_TYPES.cv,
      },
      {
        key: "photo",
        label: "Passport Photo (4x6)",
        ...FILE_TYPES.photo,
      },
      {
        key: "idCard",
        label: "ID Card (KTP)",
        ...FILE_TYPES.idCard,
      },
    ];

    const updateField = (field, value) => {
      emit("update:modelValue", {
        ...props.modelValue,
        [field]: value,
      });
    };

    const updateFileField = (key, file) => {
      emit("update:modelValue", {
        ...props.modelValue,
        files: {
          ...props.modelValue.files,
          [key]: file,
        },
      });
    };

    const handleFileError = (error) => {
      emit("error", error);
    };

    return {
      documents,
      updateField,
      updateFileField,
      handleFileError,
      rules: VALIDATION_RULES,
      BANK_LIST,
    };
  },
};
</script>
