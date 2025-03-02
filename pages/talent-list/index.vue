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
    <br />
    <div class="v-card v-sheet theme--light summary-section" style="padding: 0">
      <SearchForm
        :educationOptions="masterData.education"
        :experienceOptions="masterData.experience"
        :competenceOptions="masterData.competence"
        :jobSpecialistOptions="masterData.job_specialist"
        @search="handleSearch"
      />
    </div>

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
      :selectedTalents="selectedTalents"
      title="Available Job Matches"
      @update:isOpen="isJobDialogOpen = $event"
      @proceed="handleProceed"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, inject } from "vue";
import Talent from "../../components/TalentList/Talent.vue";
import SummaryCard from "../../components/TalentList/SummaryCard.vue";
import SearchForm from "../../components/TalentList/SearchForm.vue";
import JobDialog from "../../components/TalentList/ModalListJob.vue";
import Button from "../../components/Button.vue";
import { jobProviderAPI } from "../../api/jobProvider";

// Get the API methods and context
const { getTalentMitra, getJobPosts, inviteTalent } = jobProviderAPI();
const $notifier = inject("$notifier", null);

// Loading state
const isLoading = ref(false);

const isJobDialogOpen = ref(false);

// Data for summary - will be updated from API
const summary = reactive({
  total_registered_talent: 0,
  total_talent_in_hirring_process: 0,
  total_talent_hired: 0,
  total_active_talent: 0,
  total_talent_failed_process: 0,
});

// Store master data for dropdowns
const masterData = reactive({
  education: [],
  experience: [],
  competence: [],
  job_specialist: [],
});

// Data for talents - will be updated from API
const talents = ref([]);

// Available jobs - will be fetched from API
const availableJobs = ref([]);

// State untuk menyimpan talent yang dipilih
const selectedTalents = ref([]);

// Fetch initial data from API
const fetchInitialData = async () => {
  try {
    // Fetch talent data
    const talentResponse = await getTalentMitra({
      limit: 10,
      paginate: 1,
      key_search: "",
      education_id: "",
      experience_id: "",
      job_specialist_id: "",
    });

    // Update summary data
    if (talentResponse && talentResponse.summary) {
      Object.assign(summary, talentResponse.summary);
    }

    // Update master data for dropdowns
    if (talentResponse && talentResponse.master_data) {
      Object.assign(masterData, talentResponse.master_data);
    }

    // Update talents data
    if (talentResponse && talentResponse.talent_list) {
      transformTalentData(talentResponse.talent_list);
    }

    // Also fetch job posts data when page loads
    await fetchAvailableJobs();
  } catch (error) {
    console.error("Error fetching initial data:", error);
  }
};

// Fetch available jobs from API - now only called once during page load
const fetchAvailableJobs = async () => {
  try {
    const response = await getJobPosts();

    if (response && Array.isArray(response)) {
      // Transform job data to match the expected format
      availableJobs.value = response.map((job) => ({
        id: job.id || job.job_id,
        title: job.title || job.job_title,
        company: job.company_name || "N/A",
        location: job.location || job.job_location || "N/A",
        image: job.image || job.company_logo || "",
        salary:
          job.salary_range ||
          `${job.start_from_salary || "N/A"} - ${job.end_from_salary || "N/A"}`,
      }));
    } else if (response && response.data && Array.isArray(response.data)) {
      // Alternative response structure
      availableJobs.value = response.data.map((job) => ({
        id: job.id || job.job_id,
        title: job.title || job.job_title,
        company: job.company_name || "N/A",
        location: job.location || job.job_location || "N/A",
        image: job.image || job.company_logo || "",
        salary:
          job.salary_range ||
          `${job.start_from_salary || "N/A"} - ${job.end_from_salary || "N/A"}`,
      }));
    }

    console.log("Available jobs loaded:", availableJobs.value.length);
  } catch (error) {
    console.error("Error fetching available jobs:", error);
  }
};

// Transform talent data to the format expected by the Talent component
const transformTalentData = (talentList) => {
  talents.value = talentList.map((talent) => ({
    id: talent.job_seeker_id,
    name: talent.name,
    education: talent.education,
    salary: talent.salary_expectation,
    experience: talent.experience,
    score: talent.score_average,
    date: talent.created_at ? talent.created_at.split("||")[0].trim() : "",
    time: talent.created_at ? talent.created_at.split("||")[1].trim() : "",
    image: talent.photo || "",
  }));
};

// Handle search from SearchForm component
const handleSearch = async (searchParams) => {
  try {
    const response = await getTalentMitra({
      limit: 10,
      paginate: 1,
      ...searchParams,
    });

    // Update summary data
    if (response && response.summary) {
      Object.assign(summary, response.summary);
    }

    // Update talents data
    if (response && response.talent_list) {
      transformTalentData(response.talent_list);
    }

    console.log("Search completed with params:", searchParams);
  } catch (error) {
    console.error("Error searching talents:", error);
  }
};

// Fungsi untuk menangani perubahan seleksi
const handleSelectionChange = (newSelection) => {
  selectedTalents.value = newSelection;
  console.log("Parent Selected Talents:", selectedTalents.value);
};

// Handle the proceed action from JobDialog
const handleProceed = async ({ selectedJobs }) => {
  if (selectedJobs.length === 0 || selectedTalents.value.length === 0) {
    return;
  }

  isLoading.value = true;

  try {
    // Prepare payload
    const payload = {
      job_post_id: selectedJobs[0].id,
      talent_mitra_id: selectedTalents.value.map((talent) => talent.id),
    };

    console.log("Sending invitation with payload:", payload);

    // Use the dedicated inviteTalent function
    const response = await inviteTalent(payload);
    console.log(response);

    if (response) {
      if ($notifier) {
        $notifier.showMessage({
          content: `Successfully invited ${selectedTalents.value.length} talent(s) to ${selectedJobs.length} job(s)`,
          color: "success",
        });
      }

      // Reset selected talents
      selectedTalents.value = [];

      // Refresh data if needed
      fetchInitialData();
    }
  } catch (error) {
    console.error("Error sending invitations:", error);
    if ($notifier) {
      $notifier.showMessage({
        content: "Failed to send invitations. Please try again.",
        color: "error",
      });
    }
  } finally {
    isLoading.value = false;
  }
};

// Fungsi untuk memformat judul
const formatTitle = (key) => {
  return key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Fetch data when component is mounted
onMounted(fetchInitialData);
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
  flex-wrap: wrap;
}

.title-talent-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  color: #ae445a;
  display: flex;
  justify-content: left;
  margin: 0;
}
</style>
