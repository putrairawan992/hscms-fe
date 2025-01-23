<template>
  <div>
    <!-- Section Header -->
    <div class="group-inner" />
    <v-row>
      <v-col class="mb-6" style="position: relative; cursor: pointer">
        <i class="opsional-dapat-dikosongkan">{{
          section.optionalText || "&ensp;"
        }}</i>
        <img
          class="pluscirclefill"
          alt="Add"
          src="@/assets/svg/pluscirclefill2.svg"
          @click="emitAddForm"
        />
      </v-col>
    </v-row>

    <!-- Dynamic Form Rows -->
    <v-row
      v-for="(row, index) in fieldValues"
      :key="index"
      align="start"
      class="mb-4"
    >
      <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label mt-3">
        <b>{{ section.label }}:</b>
      </v-col>
      <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
        <v-row>
          <!-- Loop through fields in the section -->
          <v-col
            v-for="(field, fieldIndex) in section.fields"
            :key="fieldIndex"
            :cols="field.cols || 12"
          >
            <template v-if="field.type === 'date'">
              <!-- Date Picker for Date Fields -->
              <v-menu
                :ref="`datePicker${field.model}[${index}]`"
                v-model="datePickers[field.model][index]"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <div v-on="!preview && on" style="position: relative">
                    <input
                      v-bind="attrs"
                      v-model="row[field.model]"
                      @blur="row[field.model] = parseDate(row[field.model])"
                      outlined
                      readonly
                      class="register-text-input"
                      :placeholder="field.placeholder"
                    />
                    <img
                      class="feather-icon-calendar"
                      alt=""
                      src="@/assets/svg/feathericon--calendar.svg"
                    />
                  </div>
                </template>
                <v-date-picker
                  @input="datePickers[field.model][index] = false"
                  v-model="row[field.model]"
                  no-title
                ></v-date-picker>
              </v-menu>
            </template>
            <template v-else>
              <!-- Regular Input Fields -->
              <input
                v-model="row[field.model]"
                class="register-text-input"
                :placeholder="field.placeholder"
                :readonly="preview"
              />
            </template>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "DynamicSection",
  props: {
    section: {
      type: Object,
      required: true,
      default: () => ({
        label: "", // Label for the section (e.g., "Experience")
        fields: [], // Array of fields in the section
        optionalText: "", // Optional text for the section
      }),
    },
    preview: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fieldValues: [], // Stores values for each field in the section
      datePickers: {}, // Manages date picker states
    };
  },
  created() {
    this.initializeFieldValues();
    this.initializeDatePickers();
  },
  methods: {
    initializeFieldValues() {
      // Initialize fieldValues with one empty row
      this.fieldValues = [this.createEmptyRow()];
    },
    createEmptyRow() {
      // Create an empty row with all fields initialized
      const row = {};
      this.section.fields.forEach((field) => {
        row[field.model] = "";
      });
      return row;
    },
    initializeDatePickers() {
      // Initialize date pickers for date fields
      this.section.fields.forEach((field) => {
        if (field.type === "date") {
          this.$set(this.datePickers, field.model, {});
        }
      });
    },
    emitAddForm() {
      // Add a new row to fieldValues
      this.fieldValues.push(this.createEmptyRow());
      this.$emit("add-form");
    },
    parseDate(date) {
      // Helper method to parse date strings
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>

<style scoped>
.group-inner {
  border-top: 2px solid #ae445a;
  margin: 40px 0;
}

.pluscirclefill {
  position: absolute;
  max-height: 58px;
  max-width: 58px;
  top: 0;
  right: 2.57%;
}

.register-text-input {
  border-radius: 10px;
  border: 1px solid #ae445a;
  width: 100%;
  height: 47px;
  padding: 10px;
  font-size: 12px;
}

.register-text-input::placeholder {
  font-style: italic;
}

.feather-icon-calendar {
  position: absolute;
  top: 25%;
  right: 7%;
  width: 20px;
  height: 20px;
}
</style>
