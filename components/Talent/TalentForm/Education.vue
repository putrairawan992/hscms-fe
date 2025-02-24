<template>
  <v-card class="mb-4 pa-4">
    <v-card-title class="d-flex justify-space-between align-center">
      Education
      <v-btn v-if="!disabled" color="primary" text @click="addEducation">
        <v-icon left>mdi-plus</v-icon>
        Add Education
      </v-btn>
    </v-card-title>

    <template v-if="educations.length === 0">
      <v-card outlined class="mt-4 pa-4 text-center">
        <v-icon large color="grey lighten-1">mdi-school-outline</v-icon>
        <div class="text-body-1 grey--text mt-2">
          No education history added yet
        </div>
      </v-card>
    </template>

    <div v-else>
      <v-card
        v-for="(edu, index) in educations"
        :key="index"
        outlined
        class="mt-4 pa-4"
      >
        <div class="d-flex justify-space-between align-center mb-4">
          <div class="text-subtitle-1">Education #{{ index + 1 }}</div>
          <v-btn
            v-if="!disabled"
            icon
            small
            color="error"
            @click="removeEducation(index)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>

        <v-row>
          <v-col cols="12" md="6">
            <base-input
              v-model="edu.institution"
              label="Institution Name"
              :rules="[rules.required]"
              :disabled="disabled"
              placeholder="e.g. University of Indonesia"
            />
          </v-col>
          <v-col cols="12" md="6">
            <base-select
              v-model="edu.degree"
              :items="EDUCATION_LEVELS"
              label="Degree Level"
              :rules="[rules.required]"
              :disabled="disabled"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <base-input
              v-model="edu.major"
              label="Major/Field of Study"
              :rules="[rules.required]"
              :disabled="disabled"
              placeholder="e.g. Computer Science"
            />
          </v-col>
          <v-col cols="12" md="6">
            <base-input
              v-model="edu.gpa"
              label="GPA"
              type="number"
              step="0.01"
              min="0"
              max="4"
              :rules="[rules.required, rules.gpa]"
              :disabled="disabled"
              placeholder="e.g. 3.50"
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
                  v-model="edu.start_date"
                  label="Start Date"
                  readonly
                  v-on="on"
                  :rules="[rules.required]"
                  :disabled="disabled"
                />
              </template>
              <v-date-picker
                v-model="edu.start_date"
                @input="dateMenus.start[index] = false"
                :max="edu.end_date || today"
              />
            </v-menu>
          </v-col>
          <v-col cols="12" md="6">
            <v-menu
              v-model="dateMenus.end[index]"
              :close-on-content-click="false"
              :disabled="disabled || edu.current"
            >
              <template v-slot:activator="{ on }">
                <base-input
                  v-model="edu.end_date"
                  label="End Date"
                  readonly
                  v-on="on"
                  :disabled="disabled || edu.current"
                  :placeholder="edu.current ? 'Present' : ''"
                />
              </template>
              <v-date-picker
                v-model="edu.end_date"
                @input="dateMenus.end[index] = false"
                :min="edu.start_date"
                :max="today"
              />
            </v-menu>
            <v-checkbox
              v-model="edu.current"
              label="I am currently studying here"
              :disabled="disabled"
              @change="handleCurrentChange($event, index)"
              class="mt-1"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <base-input
              v-model="edu.achievements"
              label="Achievements/Activities"
              type="textarea"
              :disabled="disabled"
              placeholder="List any notable achievements, activities, or honors"
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
import { EDUCATION_LEVELS } from "../../../constants/formOptions";
import BaseInput from "../../Shared/BaseInput.vue";
import BaseSelect from "../../Shared/BaseSelect.vue";

export default {
  name: "Education",

  components: {
    BaseInput,
    BaseSelect,
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

  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const educations = computed({
      get: () => props.modelValue || [],
      set: (value) => emit("update:modelValue", value),
    });

    const dateMenus = ref({
      start: [],
      end: [],
    });

    const today = new Date().toISOString().split("T")[0];

    const addEducation = () => {
      educations.value.push({
        institution: "",
        degree: "",
        major: "",
        gpa: "",
        start_date: "",
        end_date: "",
        current: false,
        achievements: "",
      });
      dateMenus.value.start.push(false);
      dateMenus.value.end.push(false);
    };

    const removeEducation = (index) => {
      educations.value.splice(index, 1);
      dateMenus.value.start.splice(index, 1);
      dateMenus.value.end.splice(index, 1);
    };

    const handleCurrentChange = (value, index) => {
      if (value) {
        educations.value[index].end_date = "";
      }
    };

    return {
      educations,
      dateMenus,
      today,
      rules: VALIDATION_RULES,
      EDUCATION_LEVELS,
      addEducation,
      removeEducation,
      handleCurrentChange,
    };
  },
};
</script>

<style scoped>
.v-card + .v-card {
  margin-top: 16px;
}
</style>
