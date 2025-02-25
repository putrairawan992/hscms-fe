// components/biodata/Experience.vue
<template>
  <v-card class="mb-4 pa-4">
    <v-card-title class="d-flex justify-space-between align-center">
      Work Experience
      <v-btn v-if="!disabled" color="primary" text @click="addExperience">
        <v-icon left>mdi-plus</v-icon>
        Add Experience
      </v-btn>
    </v-card-title>

    <template v-if="modelValue.length === 0">
      <v-card outlined class="mt-4 pa-4 text-center">
        <v-icon large color="grey lighten-1">mdi-briefcase-outline</v-icon>
        <div class="text-body-1 grey--text mt-2">
          No work experience added yet
        </div>
      </v-card>
    </template>

    <div v-else>
      <v-card
        v-for="(exp, index) in modelValue"
        :key="index"
        outlined
        class="mt-4 pa-4"
      >
        <div class="d-flex justify-space-between align-center mb-4">
          <div class="text-subtitle-1">Experience #{{ index + 1 }}</div>
          <v-btn
            v-if="!disabled"
            icon
            small
            color="error"
            @click="removeExperience(index)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>

        <v-row>
          <v-col cols="12" md="6">
            <base-input
              :value="exp.position"
              @input="updateField(index, 'position', $event)"
              label="Job Position"
              :rules="[rules.required]"
              :disabled="disabled"
              placeholder="e.g. Software Engineer"
            />
          </v-col>
          <v-col cols="12" md="6">
            <base-input
              :value="exp.company"
              @input="updateField(index, 'company', $event)"
              label="Company Name"
              :rules="[rules.required]"
              :disabled="disabled"
              placeholder="e.g. Tech Company, Inc."
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-menu
              v-model="dateMenus.start[index]"
              :close-on-content-click="false"
              :disabled="disabled"
            >
              <template v-slot:activator="{ on }">
                <base-input
                  :value="exp.start_date"
                  @input="updateField(index, 'start_date', $event)"
                  label="Start Date"
                  readonly
                  v-on="on"
                  :rules="[rules.required]"
                  :disabled="disabled"
                />
              </template>
              <v-date-picker
                :value="exp.start_date"
                @input="updateDateField(index, 'start_date', $event)"
                :max="exp.end_date || today"
              />
            </v-menu>
          </v-col>
          <v-col cols="12" md="6">
            <v-menu
              v-model="dateMenus.end[index]"
              :close-on-content-click="false"
              :disabled="disabled || exp.current_job"
            >
              <template v-slot:activator="{ on }">
                <base-input
                  :value="exp.end_date"
                  @input="updateField(index, 'end_date', $event)"
                  label="End Date"
                  readonly
                  v-on="on"
                  :disabled="disabled || exp.current_job"
                  :placeholder="exp.current_job ? 'Present' : ''"
                />
              </template>
              <v-date-picker
                :value="exp.end_date"
                @input="updateDateField(index, 'end_date', $event)"
                :min="exp.start_date"
                :max="today"
              />
            </v-menu>
            <v-checkbox
              :value="exp.current_job"
              @input="handleCurrentJobChange(index, $event)"
              label="I currently work here"
              :disabled="disabled"
              class="mt-1"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <base-input
              :value="exp.location"
              @input="updateField(index, 'location', $event)"
              label="Location"
              :disabled="disabled"
              placeholder="e.g. Jakarta, Indonesia"
            />
          </v-col>
          <v-col cols="12" md="6">
            <base-select
              :value="exp.employment_type"
              @input="updateField(index, 'employment_type', $event)"
              :items="EMPLOYMENT_TYPES"
              label="Employment Type"
              :disabled="disabled"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <base-input
              :value="exp.description"
              @input="updateField(index, 'description', $event)"
              label="Job Description"
              type="textarea"
              :disabled="disabled"
              placeholder="Describe your responsibilities and achievements"
            />
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-card>
</template>

<script>
import { ref } from "vue";
import { VALIDATION_RULES } from "../../../constants/validation";
import { EMPLOYMENT_TYPES } from "../../../constants/formOptions";
import BaseInput from "../../Shared/BaseInput.vue";
import BaseSelect from "../../Shared/BaseSelect.vue";

export default {
  name: "Experience",

  components: {
    BaseInput,
    BaseSelect,
  },

  props: {
    modelValue: {
      type: Array,
      required: true,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const dateMenus = ref({
      start: [],
      end: [],
    });

    const today = new Date().toISOString().split("T")[0];

    const updateField = (index, field, value) => {
      const updatedExperiences = [...props.modelValue];
      updatedExperiences[index] = {
        ...updatedExperiences[index],
        [field]: value,
      };
      emit("update:modelValue", updatedExperiences);
    };

    const updateDateField = (index, field, value) => {
      updateField(index, field, value);
      if (field === "start_date") {
        dateMenus.value.start[index] = false;
      } else {
        dateMenus.value.end[index] = false;
      }
    };

    const addExperience = () => {
      const newExperience = {
        position: "",
        company: "",
        start_date: "",
        end_date: "",
        current_job: false,
        location: "",
        employment_type: "",
        description: "",
      };

      emit("update:modelValue", [...props.modelValue, newExperience]);
      dateMenus.value.start.push(false);
      dateMenus.value.end.push(false);
    };

    const removeExperience = (index) => {
      const updatedExperiences = [...props.modelValue];
      updatedExperiences.splice(index, 1);
      emit("update:modelValue", updatedExperiences);

      dateMenus.value.start.splice(index, 1);
      dateMenus.value.end.splice(index, 1);
    };

    const handleCurrentJobChange = (index, value) => {
      if (value) {
        updateField(index, "current_job", value);
        updateField(index, "end_date", "");
      } else {
        updateField(index, "current_job", value);
      }
    };

    return {
      dateMenus,
      today,
      updateField,
      updateDateField,
      addExperience,
      removeExperience,
      handleCurrentJobChange,
      rules: VALIDATION_RULES,
      EMPLOYMENT_TYPES,
    };
  },
};
</script>

<style scoped>
.v-card + .v-card {
  margin-top: 16px;
}
</style>
