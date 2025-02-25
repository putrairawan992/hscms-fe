// components/biodata/BiodataForm.vue
<template>
  <div class="biodata-form">
    <v-form ref="form" @submit.prevent="handleSubmit">
      <!-- Form Header -->
      <div class="d-flex justify-space-between align-center mb-6">
        <h1 class="text-h4">
          {{ isPreview ? "Preview Data" : "Biodata Form" }}
        </h1>
        <div>
          <v-btn
            v-if="!isPreview"
            text
            color="primary"
            class="mr-2"
            @click="togglePreview"
            :loading="loading"
          >
            <v-icon left>mdi-eye</v-icon>
            Preview
          </v-btn>
          <v-btn v-else text color="grey" class="mr-2" @click="togglePreview">
            <v-icon left>mdi-pencil</v-icon>
            Edit
          </v-btn>
        </div>
      </div>

      <!-- Form Sections -->
      <v-card class="form-container">
        <v-stepper v-model="currentStep" vertical>
          <!-- Personal Information -->
          <v-stepper-step
            :complete="stepComplete(1)"
            step="1"
            :editable="!isPreview"
          >
            Personal Information
            <small>Basic personal details</small>
          </v-stepper-step>
          <v-stepper-content step="1">
            <personal-info
              v-model="formData.personalInfo"
              :modelValue="formData.personalInfo"
              :disabled="isPreview"
              @error="handleError"
            />
            <div class="d-flex justify-end mt-4">
              <v-btn
                color="primary"
                @click="nextStep"
                :disabled="!stepComplete(1)"
              >
                Continue
              </v-btn>
            </div>
          </v-stepper-content>

          <!-- Contact Information -->
          <v-stepper-step
            :complete="stepComplete(2)"
            step="2"
            :editable="!isPreview"
          >
            Contact Information
            <small>Contact and address details</small>
          </v-stepper-step>
          <v-stepper-content step="2">
            <contact-info
              v-model="formData.contactInfo"
              :modelValue="formData.contactInfo"
              :disabled="isPreview"
              @error="handleError"
            />
            <div class="d-flex justify-end mt-4">
              <v-btn text class="mr-2" @click="previousStep"> Back </v-btn>
              <v-btn
                color="primary"
                @click="nextStep"
                :disabled="!stepComplete(2)"
              >
                Continue
              </v-btn>
            </div>
          </v-stepper-content>

          <!-- Documents -->
          <v-stepper-step
            :complete="stepComplete(3)"
            step="3"
            :editable="!isPreview"
          >
            Documents
            <small>Identity and official documents</small>
          </v-stepper-step>
          <v-stepper-content step="3">
            <documents
              v-model="formData.documents"
              :modelValue="formData.documents"
              :disabled="isPreview"
              @error="handleError"
            />
            <div class="d-flex justify-end mt-4">
              <v-btn text class="mr-2" @click="previousStep"> Back </v-btn>
              <v-btn
                color="primary"
                @click="nextStep"
                :disabled="!stepComplete(3)"
              >
                Continue
              </v-btn>
            </div>
          </v-stepper-content>

          <!-- Work Experience -->
          <v-stepper-step
            :complete="stepComplete(4)"
            step="4"
            :editable="!isPreview"
          >
            Work Experience
            <small>Professional experience details</small>
          </v-stepper-step>
          <v-stepper-content step="4">
            <experience
              v-model="formData.experiences"
              :modelValue="formData.experiences"
              :disabled="isPreview"
              @error="handleError"
            />
            <div class="d-flex justify-end mt-4">
              <v-btn text class="mr-2" @click="previousStep"> Back </v-btn>
              <v-btn color="primary" @click="nextStep"> Continue </v-btn>
            </div>
          </v-stepper-content>

          <!-- Education -->
          <v-stepper-step
            :complete="stepComplete(5)"
            step="5"
            :editable="!isPreview"
          >
            Education
            <small>Educational background</small>
          </v-stepper-step>
          <v-stepper-content step="5">
            <education
              v-model="formData.education"
              :modelValue="formData.education"
              :disabled="isPreview"
              @error="handleError"
            />
            <div class="d-flex justify-end mt-4">
              <v-btn text class="mr-2" @click="previousStep"> Back </v-btn>
              <v-btn color="primary" @click="nextStep"> Continue </v-btn>
            </div>
          </v-stepper-content>

          <!-- Certificates -->
          <v-stepper-step
            :complete="stepComplete(6)"
            step="6"
            :editable="!isPreview"
          >
            Certificates
            <small>Professional certifications</small>
          </v-stepper-step>
          <v-stepper-content step="6">
            <certificate
              v-model="formData.certificates"
              :modelValue="formData.certificates"
              :disabled="isPreview"
              @error="handleError"
            />
            <div class="d-flex justify-end mt-4">
              <v-btn text class="mr-2" @click="previousStep"> Back </v-btn>
              <v-btn
                color="primary"
                type="submit"
                :loading="loading"
                :disabled="!isFormValid"
              >
                {{ isPreview ? "Submit" : "Save & Preview" }}
              </v-btn>
            </div>
          </v-stepper-content>
        </v-stepper>
      </v-card>
    </v-form>

    <!-- Error Snackbar -->
    <v-snackbar v-model="showError" color="error" timeout="3000">
      {{ errorMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="showError = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
// components/biodata/BiodataForm.vue (script section)
<script>
import { ref, computed } from "vue";
import PersonalInfo from "./PersonalInfo.vue";
import ContactInfo from "./ContactInfo.vue";
import Documents from "./Documents.vue";
import Experience from "./Experience.vue";
import Education from "./Education.vue";
import Certificate from "./Certificate.vue";
import { useBiodataForm } from "../../../composables/useBiodataForm";

export default {
  name: "BiodataForm",

  components: {
    PersonalInfo,
    ContactInfo,
    Documents,
    Experience,
    Education,
    Certificate,
  },

  props: {
    initialData: {
      type: Object,
      default: () => ({}),
    },
  },

  emits: ["submit", "error"],

  setup(props, { emit }) {
    const form = ref(null);
    const currentStep = ref(1);
    const isPreview = ref(false);
    const showError = ref(false);
    const errorMessage = ref("");

    // Initialize form data and validation state
    const { formData, loading, validateForm, resetForm, isStepValid } =
      useBiodataForm(props.initialData);

    const isFormValid = computed(() => {
      return validateForm();
    });

    const stepComplete = (step) => {
      return isStepValid(step);
    };

    const nextStep = () => {
      if (currentStep.value < 6) {
        currentStep.value++;
      }
    };

    const previousStep = () => {
      if (currentStep.value > 1) {
        currentStep.value--;
      }
    };

    const togglePreview = () => {
      if (!isPreview.value && !validateForm()) {
        showError.value = true;
        errorMessage.value =
          "Please complete all required fields before preview";
        return;
      }
      isPreview.value = !isPreview.value;
    };

    const handleError = (error) => {
      showError.value = true;
      errorMessage.value = error;
      emit("error", error);
    };

    const handleSubmit = async () => {
      if (!validateForm()) {
        showError.value = true;
        errorMessage.value = "Please complete all required fields";
        return;
      }

      try {
        loading.value = true;
        // Create FormData object for file uploads
        const formPayload = new FormData();

        // Add all form fields to FormData
        Object.entries(formData).forEach(([section, data]) => {
          if (Array.isArray(data)) {
            // Handle arrays (experiences, education, certificates)
            data.forEach((item, index) => {
              Object.entries(item).forEach(([key, value]) => {
                if (value instanceof File) {
                  formPayload.append(`${section}[${index}][${key}]`, value);
                } else if (value !== null && value !== undefined) {
                  formPayload.append(
                    `${section}[${index}][${key}]`,
                    value.toString()
                  );
                }
              });
            });
          } else if (typeof data === "object") {
            // Handle nested objects
            Object.entries(data).forEach(([key, value]) => {
              if (value instanceof File) {
                formPayload.append(`${section}.${key}`, value);
              } else if (value !== null && value !== undefined) {
                formPayload.append(`${section}.${key}`, value.toString());
              }
            });
          }
        });

        emit("submit", formPayload);
      } catch (error) {
        handleError("Error submitting form. Please try again.");
      } finally {
        loading.value = false;
      }
    };

    return {
      form,
      formData,
      currentStep,
      isPreview,
      loading,
      showError,
      errorMessage,
      isFormValid,
      stepComplete,
      nextStep,
      previousStep,
      togglePreview,
      handleError,
      handleSubmit,
      resetForm,
    };
  },
};
</script>

<style scoped>
.biodata-form {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.form-container {
  background: linear-gradient(90deg, #f1f5fe 0%, #fff 98.82%);
  border-radius: 40px;
  box-shadow: 5px 0px 5px #b3b9c5, -5px 0px 5px #b3b9c5;
}

:deep(.v-stepper) {
  background: transparent !important;
  box-shadow: none !important;
}

:deep(.v-stepper__content) {
  padding: 24px;
}

:deep(.v-stepper__step) {
  padding: 24px;
}

:deep(.v-stepper__step__step) {
  background-color: var(--v-primary-base) !important;
}
</style>
