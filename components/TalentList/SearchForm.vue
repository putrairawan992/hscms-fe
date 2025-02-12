<template>
  <div class="summary-section">
    <div class="search-grid">
      <!-- Pendidikan -->
      <div class="form-group">
        <label>Pendidikan</label>
        <CustomDropdown
          v-model="selectedEducation"
          title="Pendidikan"
          placeholder="Pilih Pendidikan"
          :options="educationOptions"
        />
      </div>

      <!-- Pengalaman -->
      <div class="form-group">
        <label>Pengalaman</label>
        <CustomDropdown
          v-model="selectedExperience"
          title="Pengalaman"
          placeholder="Pilih Pengalaman"
          :options="experienceOptions"
        />
      </div>

      <!-- Tes Kompetensi -->
      <div class="form-group">
        <label>Tes Kompetensi</label>
        <CustomDropdown
          v-model="selectedCompetency"
          title="Tes Kompetensi"
          placeholder="Pilih Tes Kompetensi"
          :options="competencyOptions"
        />
      </div>

      <!-- Spesialisasi -->
      <div class="form-group">
        <label>Spesialisasi</label>
        <CustomDropdown
          v-model="selectedSpecialization"
          title="Spesialisasi"
          placeholder="Pilih Spesialisasi"
          :options="competencyOptions"
        />
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
import CustomDropdown from "../CustomDropdown.vue";

const education = ref("");
const experience = ref("");
const competencyTest = ref("");
const specialization = ref("");
const searchQuery = ref("");

const competencyOptions = [
  { value: "TOEIC", label: "TOEIC" },
  { value: "TOEFL", label: "TOEFL" },
  { value: "IELTS", label: "IELTS" },
  { value: "GMAT", label: "GMAT" },
];
const educationOptions = [
  { value: "sma", label: "SMA/SMK" },
  { value: "d3", label: "D3" },
  { value: "s1", label: "S1" },
  { value: "s2", label: "S2" },
  { value: "s2", label: "S2" },
  { value: "s2", label: "S2" },
  { value: "s2", label: "S2" },
  { value: "s2", label: "S2" },
  { value: "s2", label: "S2" },
  { value: "s2", label: "S2" },
  { value: "s2", label: "S2" },
  { value: "s2", label: "S2" },
  { value: "s2", label: "S2" },
  { value: "s2", label: "S2" },
  { value: "s2", label: "S2" },
];
const experienceOptions = [
  { value: "fresh", label: "Fresh Graduate" },
  { value: "1-3", label: "1-3 Tahun" },
  { value: "3-5", label: "3-5 Tahun" },
  { value: "5+", label: "5+ Tahun" },
];

const searchCandidates = () => {
  console.log({
    education: education.value,
    experience: experience.value,
    competencyTest: competencyTest.value,
    specialization: specialization.value,
    searchQuery: searchQuery.value,
  });
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

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

/* Reset default select arrow in some browsers */
select {
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
