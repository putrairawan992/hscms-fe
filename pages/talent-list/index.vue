<template>
  <div class="container">
    <!-- Quick Summary Section -->
    <div class="v-card v-sheet theme--light summary-section">
      <h1 class="title">Quick Summary</h1>
      <div class="card-container">
        <SummaryCard
          v-for="(item, key) in summary"
          :key="key"
          :title="formatTitle(key)"
          :value="item"
        />
      </div>
    </div>

    <SearchForm />

    <!-- Talent List Section -->
    <br />
    <div class="v-card v-sheet theme--light summary-section">
      <div class="title-talent-list" style="margin-bottom: 10px">
        <h1 class="title">Talent List</h1>
        <Button variant="primary" size="sm">View All</Button>
      </div>
      <!-- Komponen Talent dengan event selection-change -->
      <Talent :talents="talents" @selection-change="handleSelectionChange" />

      <!-- Tombol "Move to Available Jobs" -->
      <div style="display: flex; justify-content: center">
        <Button
          v-if="selectedTalents.length > 0"
          @click="isJobDialogOpen = true"
          variant="primary"
          size="sm"
        >
          Move to Available Jobs
        </Button>
      </div>
    </div>

    <br />
    <JobDialog
      :isOpen="isJobDialogOpen"
      :jobs="availableJobs"
      title="Available Job Matches"
      @update:isOpen="isJobDialogOpen = $event"
    />
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import Talent from "../../components/TalentList/Talent.vue";
import SummaryCard from "../../components/TalentList/SummaryCard.vue";
import SearchForm from "../../components/TalentList/SearchForm.vue";
import JobDialog from "../../components/TalentList/ModalListJob.vue";
import Button from "../../components/Button.vue";

const isJobDialogOpen = ref(false);

// Data dummy untuk summary
const summary = reactive({
  registered_talent: 150,
  hiring_process: 30,
  hired_talent: 20,
  pending_assesment: 10,
  pending_pretest: 5,
});

// Data dummy untuk talents
const talents = ref([
  {
    id: 1,
    name: "Roma",
    education: "Diploma/Sarjana S1",
    salary: 6000000,
    experience: "0 - 2 tahun",
    score: 90,
    date: "24 January 2026",
    time: "09:00",
    image: "",
  },
]);
const availableJobs = ref([
  {
    id: 1,
    title: "Software Engineer",
    company: "hehehehe",
    location: "Jakarta",
    image: "",
    salary: "Rp 6,000,000 - Rp 7,500,000",
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "Surabaya",
    image: "",
    company: "hahah",
    salary: "Rp 6,000,000 - Rp 7,500,000",
  },
  {
    id: 3,
    title: "Backend Developer",
    location: "Bandung",
    image: "",
    company: "hahah",
    salary: "Rp 6,000,000 - Rp 7,500,000",
  },
]);
// State untuk menyimpan talent yang dipilih
const selectedTalents = ref([]);

// Fungsi untuk menangani perubahan seleksi
const handleSelectionChange = (newSelection) => {
  selectedTalents.value = newSelection;
  console.log("Parent Selected Talents:", selectedTalents.value);
};

// Fungsi untuk memformat judul
const formatTitle = (key) => {
  return key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Fungsi untuk menangani klik tombol "Move to Available Jobs"
const moveToAvailableJobs = () => {
  console.log("Selected Talents:", selectedTalents.value);
  alert(`Moving ${selectedTalents.value.length} talents to available jobs.`);
};
</script>
<style scoped>
.container {
  padding: 20px;
}

.summary-section {
  padding: 20px;
  border-radius: 16px;
}

.card-container {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.title-talent-list {
  display: flex;
  justify-content: space-between;
}

.title {
  color: #ae445a;
  display: flex;
  justify-content: left;
}
</style>
