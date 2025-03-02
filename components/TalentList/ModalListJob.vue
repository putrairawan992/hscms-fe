<template>
  <v-dialog v-model="isOpen" max-width="800">
    <v-card class="card-list-job">
      <v-card-title class="modal-title">{{ title }}</v-card-title>
      <div class="job-list">
        <div v-for="job in jobs" :key="job.id" class="job-card">
          <div class="job-info">
            <!-- Radio button untuk memilih job -->
            <input
              :id="'job-' + job.id"
              :value="job.id"
              type="radio"
              name="job-selection"
              class="job-select"
              :checked="isJobSelected(job)"
              @change="handleSelectionChange(job)"
            />

            <img
              :src="job.image || '/default-company-logo.png'"
              :alt="job.title"
              class="job-image"
            />

            <div class="job-details">
              <span class="title-data">Job Title</span>
              <span class="value-data">{{ job.title }}</span>
            </div>
          </div>

          <div class="job-details">
            <span class="title-data">Salary Range</span>
            <span class="value-data">{{ job.salary }}</span>
          </div>
        </div>
      </div>
      <v-card-actions style="display: flex; justify-content: center">
        <Button
          @click="proceedToNextStep"
          :variant="localSelectedJobs.length == 0 ? 'disabled' : 'primary'"
          :disabled="localSelectedJobs.length == 0"
          >Proceed to next step</Button
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import Button from "../Button.vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  jobs: {
    type: Array,
    required: true,
    default: () => [],
  },
  title: {
    type: String,
    default: "Available Jobs",
  },
  selectedTalents: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const localSelectedJobs = ref([]);
const loading = ref(false);

const isJobSelected = (job) => {
  return localSelectedJobs.value.some(
    (selectedJob) => selectedJob.id === job.id
  );
};

const handleSelectionChange = (job) => {
  const jobIndex = localSelectedJobs.value.findIndex(
    (selectedJob) => selectedJob.id === job.id
  );
  if (jobIndex > -1) {
    // Hapus jika sudah dipilih
    localSelectedJobs.value.splice(jobIndex, 1);
  } else {
    // Tambahkan jika belum dipilih
    localSelectedJobs.value.push(job);
  }
  console.log("Selected jobs:", localSelectedJobs.value);
};

const emit = defineEmits(["update:isOpen", "proceed"]);

const closeDialog = () => {
  localSelectedJobs.value = []; // Reset selected jobs
  emit("update:isOpen", false);
};

const proceedToNextStep = () => {
  if (localSelectedJobs.value.length === 0) {
    return;
  }

  // Emit event with selected jobs to parent component
  emit("proceed", {
    selectedJobs: localSelectedJobs.value,
  });

  closeDialog();
};
</script>

<style scoped>
.card-list-job {
  padding: 20px;
}
.modal-title {
  color: #ae445a;
  text-align: center;
  display: flex;
  justify-content: center;
  font-weight: 900 !important;
  font-size: 24px !important;
  font-family: Nunito !important;
}
.job-list {
  max-height: 500px;
  overflow-y: auto;
  border-radius: 8px;
}

.job-card {
  background-color: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  padding: 20px 100px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  transition: box-shadow 0.3s ease;
}

.job-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.job-info {
  display: flex;
  align-items: center;
  gap: 46px;
}

.job-select {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.job-image {
  width: 48px;
  height: 48px;
  border-radius: 100%;
  object-fit: cover;
}

.job-details {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.title-data {
  font-size: 12px;
  color: #404041;
  font-weight: 400;
  font-family: Nunito !important;
}

.value-data {
  font-size: 14px;
  color: #404041;
  font-weight: 900;
  font-family: Nunito !important;
}

.job-education,
.job-salary,
.job-meta,
.job-salary {
  font-size: 12px;
  color: #404041;
  font-weight: 400;
}

.job-meta {
  display: flex;
  gap: 16px;
}

.job-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
}
</style>
