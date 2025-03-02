<template>
  <div class="summary-section">
    <div class="search-grid">
      <!-- Pendidikan -->
      <div class="form-group">
        <label>Pendidikan</label>
        <select v-model="education" class="custom-select">
          <option value="" disabled selected>Pilih Pendidikan</option>
          <option
            v-for="option in educationOptions"
            :key="option.id"
            :value="option.id"
          >
            {{ option.education_name }}
          </option>
        </select>
      </div>

      <!-- Pengalaman -->
      <div class="form-group">
        <label>Pengalaman</label>
        <select v-model="experience" class="custom-select">
          <option value="" disabled selected>Pilih Pengalaman</option>
          <option
            v-for="option in experienceOptions"
            :key="option.id"
            :value="option.id"
          >
            {{ option.experience_name }}
          </option>
        </select>
      </div>

      <!-- Tes Kompetensi -->
      <div class="form-group">
        <label>Tes Kompetensi</label>
        <select v-model="competencyTest" class="custom-select">
          <option value="" disabled selected>Pilih Tes Kompetensi</option>
          <option
            v-for="option in competenceOptions"
            :key="option.id"
            :value="option.id"
          >
            {{ option.experience_name }}
          </option>
        </select>
      </div>

      <!-- Spesialisasi -->
      <div class="form-group">
        <label>Spesialisasi</label>
        <select v-model="specialization" class="custom-select">
          <option value="" disabled selected>Pilih Spesialisasi</option>
          <option
            v-for="option in jobSpecialistOptions"
            :key="option.id"
            :value="option.id"
          >
            {{ option.job_specialist_name }}
          </option>
        </select>
      </div>

      <!-- Cari Kandidat -->
      <div class="form-group">
        <label>Cari Kandidat</label>
        <div class="search-container">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Cari Kandidat"
          />
          <button @click="searchCandidates" class="search-button">
            <img src="@/assets/svg/search.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define props to receive options from parent component
const props = defineProps({
  educationOptions: {
    type: Array,
    default: () => [],
  },
  experienceOptions: {
    type: Array,
    default: () => [],
  },
  competenceOptions: {
    type: Array,
    default: () => [],
  },
  jobSpecialistOptions: {
    type: Array,
    default: () => [],
  },
});

// Form values
const education = ref("");
const experience = ref("");
const competencyTest = ref("");
const specialization = ref("");
const searchQuery = ref("");

// Define emits
const emit = defineEmits(["search"]);

// Search function
const searchCandidates = () => {
  // Emit search parameters to parent component
  emit("search", {
    education_id: education.value,
    experience_id: experience.value,
    competence_test_id: competencyTest.value,
    job_specialist_id: specialization.value,
    key_search: searchQuery.value,
  });

  console.log("Search params:", {
    education: education.value,
    experience: experience.value,
    competencyTest: competencyTest.value,
    specialization: specialization.value,
    searchQuery: searchQuery.value,
  });
};
</script>

<style scoped>
.search-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

@media (max-width: 768px) {
  .search-grid {
    grid-template-columns: 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

label {
  color: #ae445a;
  font-weight: 700;
  font-size: 16px;
  text-align: left;
}

.form-group select,
.form-group input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ae445a;
  color: #ae445a;
  border-radius: 4px;
  font-size: 12px;
  outline: none;
  border-radius: 8px;
}

select:focus,
input:focus {
  border-color: #ae445a;
  box-shadow: 0 0 0 2px rgba(185, 28, 28, 0.1);
}

.search-container {
  position: relative;
  display: flex;
}

input {
  padding-right: 40px;
}

.search-button {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 40px;
  background-color: #ae445a;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-button:hover {
  background-color: #991b1b;
}

.search-icon {
  font-size: 16px;
}

/* Custom styling for select elements */
.custom-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  padding-right: 32px;
}

/* Remove default select arrow in IE */
select::-ms-expand {
  display: none;
}
</style>
