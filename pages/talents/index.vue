<template>
  <div class="v-card v-sheet theme--light talent-container">
    <div class="row mt-5">
      <div class="col-md-12">
        <!-- Header -->
        <div class="header">
          <div class="flex items-center gap-2">
            <Button variant="primary" @click="showModal = true" size="sm">
              Add Talent
            </Button>
            <Button
              variant="primary"
              size="sm"
              class="d-flex align-items-center"
              @click="shareLink"
              style="color: white !important"
            >
              <img
                class="bishare-fill-icon"
                alt=""
                src="@/assets/svg/bisharefill.svg"
                @click="shareLink"
              />
            </Button>
            <i v-if="copied" class="success-message">Link berhasil disalin!</i>
          </div>
        </div>
      </div>
    </div>

    <div class="body-section">
      <SearchForm @search="handleSearch" />

      <!-- Komponen Talent dengan event selection-change -->
      <Talent :talents="talents" />

      <!-- Pagination -->
      <div class="pagination-controls">
        <button
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
          class="btn-pagination"
        >
          Previous
        </button>
        <span>Page {{ currentPage }}</span>
        <button
          :disabled="!hasMorePages"
          @click="changePage(currentPage + 1)"
          class="btn-pagination"
        >
          Next
        </button>
      </div>
    </div>

    <UploadModal :isOpen="showModal" @close="showModal = false" />
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import UploadModal from "../../components/Talent/UploadModal.vue";
import SearchForm from "../../components/TalentList/SearchForm.vue";
import Talent from "../../components/TalentList/Talent.vue";
import { mitraAPI } from "@/api/mitra";
import { useContext } from "@nuxtjs/composition-api";
const { req, $auth } = useContext();
const baseUrl = process.server
  ? `${req.protocol}://${req.headers.host}`
  : window.location.origin;

const talents = ref([]);
const selectedTalents = ref([]);
const showModal = ref(false);
const copied = ref(false);
const currentPage = ref(1);
const hasMorePages = ref(true);
const { getTalents } = mitraAPI();

const searchParams = reactive({
  limit: 1,
  paginate: 10,
  key_search: "",
  education_id: "",
  experience_id: "",
  job_specialist_id: "",
});

// Fetch talents from API
const fetchTalents = async () => {
  try {
    const response = await getTalents({
      ...searchParams,
      page: currentPage.value,
    });

    // Transform API data to match component structure
    talents.value = response.map((talent) => ({
      id: talent.job_seeker_id,
      name: talent.name,
      education: talent.education,
      salary: talent.salary_expectation,
      experience: talent.experience,
      score: talent.score,
      image: talent.photo,
      date: talent.created_at.split("||")[0].trim(),
      time: talent.created_at.split("||")[1].trim(),
      is_active: talent.is_active,
    }));

    // Update pagination status
    hasMorePages.value = talents.value.length === searchParams.paginate;
  } catch (error) {
    console.error("Error fetching talents:", error);
    // You might want to show an error notification here
  }
};

// Handle search form submission
const handleSearch = (searchCriteria) => {
  searchParams.key_search = searchCriteria.keyword || "";
  searchParams.education_id = searchCriteria.education || "";
  searchParams.experience_id = searchCriteria.experience || "";
  searchParams.job_specialist_id = searchCriteria.specialist || "";
  currentPage.value = 1;
  fetchTalents();
};
console.log(talents);
// Handle pagination
const changePage = (newPage) => {
  currentPage.value = newPage;
  fetchTalents();
};

// Share link functionality
const shareLink = async () => {
  const mitraId = $auth.user.user_id;
  console.log(mitraId);
  const fullLink = `${baseUrl}/talents/create-talent/${mitraId}`;
  try {
    await navigator.clipboard.writeText(fullLink);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Gagal menyalin link: ", err);
  }
};

// Fetch initial data
onMounted(() => {
  fetchTalents();
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
.bishare-fill-icon {
  position: relative;
  width: 12px;
  height: 12px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.btn-pagination {
  padding: 0.5rem 1rem;
  border: 1px solid #b73d58;
  border-radius: 5px;
  background: white;
  color: #b73d58;
  cursor: pointer;
}

.btn-pagination:disabled {
  border-color: #ccc;
  color: #ccc;
  cursor: not-allowed;
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
