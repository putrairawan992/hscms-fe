<template>
  <div class="talent-list">
    <div v-for="talent in talents" :key="talent.id" class="talent-card">
      <div class="talent-info">
        <!-- Checkbox untuk memilih talent -->
        <input
          :id="'talent-' + talent.id"
          :value="talent"
          type="checkbox"
          v-model="localSelectedTalents"
          class="talent-select"
          @change="handleSelectionChange"
        />

        <img :src="talent.image" :alt="talent.name" class="talent-image" />

        <div class="talent-details">
          <h3 class="talent-name">{{ talent.name }}</h3>
          <span class="talent-education">{{ talent.education }}</span>
          <span class="talent-salary"
            >Rp. {{ formatNumber(talent.salary) }}</span
          >
          <div class="talent-meta">
            <span>{{ talent.experience }}</span>
            <span>Skor: {{ talent.score }}</span>
          </div>
        </div>
      </div>

      <div class="talent-actions">
        <span class="talent-date"
          >{{ talent.date }} | {{ talent.time }} WIB</span
        >
        <button class="view-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  talents: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["selection-change"]);

// State untuk menyimpan talent yang dipilih
const localSelectedTalents = ref([]);

// Fungsi untuk menangani perubahan seleksi
const handleSelectionChange = () => {
  emit("selection-change", localSelectedTalents.value);
};

// Fungsi untuk memformat angka
const formatNumber = (number) => {
  return new Intl.NumberFormat("id-ID").format(number);
};
</script>
<style scoped>
.talent-list {
  max-height: 500px;
  overflow-y: auto;
  border-radius: 8px;
}

.talent-card {
  background-color: white;
  border-radius: 12px;
  border: 1px solid #ae445a;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  transition: box-shadow 0.3s ease;
}

.talent-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.talent-info {
  display: flex;
  align-items: center;
}

.talent-select {
  width: 16px;
  height: 16px;
  margin-right: 16px;
  cursor: pointer;
}

.talent-image {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 16px;
}

.talent-details {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.talent-name {
  font-weight: 700;
  color: black;
  font-size: 16px;
}

.talent-education,
.talent-salary,
.talent-meta,
.talent-salary {
  font-size: 12px;
  color: #404041;
  font-weight: 400;
}

.talent-meta {
  display: flex;
  gap: 16px;
}

.talent-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
}

.view-button {
  background-color: black;
  color: white;
  border: none;
  padding: 2px;
  border-radius: 100%;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.talent-date {
  font-size: 14px;
  color: #404041;
}
</style>
