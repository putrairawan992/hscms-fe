// components/biodata/Certificate.vue
<template>
  <v-card class="mb-4 pa-4">
    <v-card-title class="d-flex justify-space-between align-center">
      Certificates & Licenses
      <v-btn v-if="!disabled" color="primary" text @click="addCertificate">
        <v-icon left>mdi-plus</v-icon>
        Add Certificate
      </v-btn>
    </v-card-title>

    <template v-if="certificates.length === 0">
      <v-card outlined class="mt-4 pa-4 text-center">
        <v-icon large color="grey lighten-1">mdi-certificate-outline</v-icon>
        <div class="text-body-1 grey--text mt-2">No certificates added yet</div>
      </v-card>
    </template>

    <div v-else>
      <v-card
        v-for="(cert, index) in certificates"
        :key="index"
        outlined
        class="mt-4 pa-4"
      >
        <div class="d-flex justify-space-between align-center mb-4">
          <div class="text-subtitle-1">Certificate #{{ index + 1 }}</div>
          <v-btn
            v-if="!disabled"
            icon
            small
            color="error"
            @click="removeCertificate(index)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>

        <v-row>
          <v-col cols="12" md="6">
            <base-input
              v-model="cert.name"
              label="Certificate Name"
              :rules="[rules.required]"
              :disabled="disabled"
              placeholder="e.g. AWS Certified Solutions Architect"
            />
          </v-col>
          <v-col cols="12" md="6">
            <base-input
              v-model="cert.issuer"
              label="Issuing Organization"
              :rules="[rules.required]"
              :disabled="disabled"
              placeholder="e.g. Amazon Web Services"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-menu
              v-model="dateMenus.issue[index]"
              :close-on-content-click="false"
              :disabled="disabled"
            >
              <template v-slot:activator="{ on }">
                <base-input
                  v-model="cert.issue_date"
                  label="Issue Date"
                  readonly
                  v-on="on"
                  :rules="[rules.required]"
                  :disabled="disabled"
                />
              </template>
              <v-date-picker
                v-model="cert.issue_date"
                @input="dateMenus.issue[index] = false"
                :max="cert.expiry_date || today"
              />
            </v-menu>
          </v-col>
          <v-col cols="12" md="6">
            <v-menu
              v-model="dateMenus.expiry[index]"
              :close-on-content-click="false"
              :disabled="disabled || cert.no_expiry"
            >
              <template v-slot:activator="{ on }">
                <base-input
                  v-model="cert.expiry_date"
                  label="Expiry Date"
                  readonly
                  v-on="on"
                  :disabled="disabled || cert.no_expiry"
                  :placeholder="cert.no_expiry ? 'No Expiry' : ''"
                />
              </template>
              <v-date-picker
                v-model="cert.expiry_date"
                @input="dateMenus.expiry[index] = false"
                :min="cert.issue_date"
              />
            </v-menu>
            <v-checkbox
              v-model="cert.no_expiry"
              label="This certificate does not expire"
              :disabled="disabled"
              @change="handleNoExpiryChange($event, index)"
              class="mt-1"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <base-input
              v-model="cert.credential_id"
              label="Credential ID"
              :disabled="disabled"
              placeholder="Certificate credential ID (if any)"
            />
          </v-col>
          <v-col cols="12" md="6">
            <base-input
              v-model="cert.credential_url"
              label="Certificate URL"
              type="url"
              :disabled="disabled"
              placeholder="Link to verify certificate (if any)"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <file-upload
              v-model="cert.certificate_file"
              label="Certificate File"
              :accept="'.pdf,.jpg,.jpeg,.png'"
              :required="true"
              :disabled="disabled"
              @error="handleFileError"
            />
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-card>
</template>

<script>
import { ref, computed } from "vue";
import { VALIDATION_RULES } from "../../../constants/validation";
import BaseInput from "../../Shared/BaseInput.vue";
import FileUpload from "../../Shared/FileUpload.vue";

export default {
  name: "Certificate",

  components: {
    BaseInput,
    FileUpload,
  },

  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["update:modelValue", "error"],

  setup(props, { emit }) {
    const certificates = computed({
      get: () => props.modelValue || [],
      set: (value) => emit("update:modelValue", value),
    });

    const dateMenus = ref({
      issue: [],
      expiry: [],
    });

    const today = new Date().toISOString().split("T")[0];

    const addCertificate = () => {
      certificates.value.push({
        name: "",
        issuer: "",
        issue_date: "",
        expiry_date: "",
        no_expiry: false,
        credential_id: "",
        credential_url: "",
        certificate_file: null,
      });
      dateMenus.value.issue.push(false);
      dateMenus.value.expiry.push(false);
    };

    const removeCertificate = (index) => {
      certificates.value.splice(index, 1);
      dateMenus.value.issue.splice(index, 1);
      dateMenus.value.expiry.splice(index, 1);
    };

    const handleNoExpiryChange = (value, index) => {
      if (value) {
        certificates.value[index].expiry_date = "";
      }
    };

    const handleFileError = (error) => {
      emit("error", error);
    };

    return {
      certificates,
      dateMenus,
      today,
      rules: VALIDATION_RULES,
      addCertificate,
      removeCertificate,
      handleNoExpiryChange,
      handleFileError,
    };
  },
};
</script>

<style scoped>
.v-card + .v-card {
  margin-top: 16px;
}
</style>
