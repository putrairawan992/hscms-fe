<template>
  <div class="v-card v-sheet theme--light talent-container">
    <div class="row mt-5">
      <div class="col-md-12">
        <!-- Header -->
        <div class="header">
          <div>
            <Button variant="primary" @click="openModal" size="sm"
              >Add Talent</Button
            >
            <button type="button" @click="shareLink" class="btn-view">
              <i class="fas fa-share-alt"></i>
            </button>
            <i v-if="copied" class="success-message">Link berhasil disalin!</i>
          </div>
        </div>
      </div>
    </div>

    <div class="body-section">
      <SearchForm />

      <!-- Komponen Talent dengan event selection-change -->
      <Talent :talents="talents" />
    </div>

    <ModalChoice ref="modalChoiceRef" />
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import ModalChoice from "../../components/Talent/ModalChoice.vue";
import SearchForm from "../../components/TalentList/SearchForm.vue";
import Talent from "../../components/TalentList/Talent.vue";
import Cookies from "js-cookie";

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
const selectedTalents = ref([]);

// Fungsi untuk menangani perubahan seleksi

const baseUrl = process.env.BASE_URL;
const param = reactive({
  mitra: "",
});
const modalChoiceRef = ref(null);
const copied = ref(false);

// Methods
const openModal = () => {
  modalChoiceRef.value?.showModal();
};

const shareLink = async () => {
  const fullLink = `${baseUrl}/register/talents/${param.mitra}`;
  try {
    await navigator.clipboard.writeText(fullLink);
    copied.value = true;

    // Reset pesan sukses setelah 2 detik
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Gagal menyalin link: ", err);
  }
};

// Lifecycle hook
onMounted(() => {
  // fetchData(); // Uncomment if you want to fetch data on mount
});
</script>

<style scoped>
.talent-container {
  border-radius: 10px;
  padding: 20px;
}
.body-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.btn-view {
  background: linear-gradient(to right, #f39f5a, #ae445a);
  color: white;
  border: none;
  padding: 0.5em;
  border-radius: 10px;
  cursor: pointer;
}

.btn-view:hover {
  background: linear-gradient(to right, #e04c50, #e58b32);
}

.success-message {
  margin-top: 10px;
  color: green;
  font-weight: bold;
}

.empty-state {
  text-align: center;
  margin-top: 2rem;
}

.card-talent {
  border: 2px solid #b73d58;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.card-body {
  display: flex;
  align-items: center;
  width: 100%;
}

.form-check {
  margin-right: 1rem;
}

.talent-photo {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-right: 1rem;
}

.talent-info {
  flex-grow: 1;
}

.talent-info h5 {
  margin-bottom: 0.5rem;
}

.talent-info p {
  margin-bottom: 0.25rem;
}

.talent-date {
  margin-left: 2rem;
}

.talent-actions {
  margin-left: 2rem;
}

.btn-edit {
  background-color: transparent;
  border: 1px solid #6c757d;
  color: #6c757d;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn-edit:hover {
  background-color: #6c757d;
  color: white;
}

.talent-status {
  margin-left: 2rem;
  display: flex;
  align-items: center;
}

.talent-status input {
  margin-right: 0.5rem;
}
</style>
