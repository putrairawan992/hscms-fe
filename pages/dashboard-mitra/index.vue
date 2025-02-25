# pages/dashboard.vue
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
      <SearchForm />
    </div>

    <!-- Talent List Section -->
    <br />
    <div class="v-card v-sheet theme--light summary-section">
      <div class="title-talent-list" style="margin-bottom: 10px">
        <h1 class="title">Produk Digital</h1>
        <v-btn color="primary" small>View All</v-btn>
      </div>
      <v-card class="job-card pa-4" elevation="1">
        <div class="d-flex align-center">
          <div class="position-relative">
            <v-avatar size="56" color="grey lighten-2">
              <v-img :src="companyLogo" alt="Company Logo"></v-img>
            </v-avatar>
            <div class="live-badge">
              <span class="text-white text-caption">Live</span>
            </div>
          </div>
          <div class="flex-grow-1 ml-4">
            <div class="d-flex align-center justify-space-between">
              <div>
                <div class="text-subtitle-2 text-grey-darken-1">Company</div>
                <div class="font-weight-bold" style="font-size: medium">
                  {{ company }}
                </div>
              </div>
              <div>
                <div class="text-subtitle-2 text-grey-darken-1">Job Title</div>
                <div class="font-weight-bold" style="font-size: medium">
                  {{ jobTitle }}
                </div>
              </div>
              <div>
                <div class="text-subtitle-2 text-grey-darken-1">
                  Salary Range
                </div>
                <div class="font-weight-bold" style="font-size: medium">
                  {{ salaryRange }}
                </div>
              </div>
            </div>

            <v-divider class="my-4"></v-divider>
            <div class="d-flex gap-5">
              <div
                v-for="status in statusList"
                :key="status.label"
                class="text-center"
              >
                <div class="font-weight-bold" style="color: #ae445a">
                  {{ status.label }}
                </div>
                <div class="text-body-1">{{ status.count }}</div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <br />
    <div class="v-card v-sheet theme--light summary-section">
      <div class="title-talent-list" style="margin-bottom: 10px">
        <h1 class="title">Talent List</h1>
        <v-btn color="primary" small>View All</v-btn>
      </div>
      <Talent :talents="talents" @selection-change="handleSelectionChange" />
      <div style="display: flex; justify-content: center">
        <v-btn
          v-if="selectedTalents.length > 0"
          @click="isJobDialogOpen = true"
          color="primary"
          small
        >
          Move to Available Jobs
        </v-btn>
      </div>
    </div>

    <br />
    <JobDialog
      :is-open="isJobDialogOpen"
      :jobs="availableJobs"
      title="Available Job Matches"
      @update:is-open="updateJobDialog"
    />
  </div>
</template>

<script>
import Talent from "@/components/TalentList/Talent";
import SummaryCard from "@/components/TalentList/SummaryCard";
import SearchForm from "@/components/TalentList/SearchForm";
import JobDialog from "@/components/TalentList/ModalListJob";

export default {
  name: "DashboardPage",

  components: {
    Talent,
    SummaryCard,
    SearchForm,
    JobDialog,
  },

  data() {
    return {
      isJobDialogOpen: false,
      selectedTalents: [],
      company: "PT. Gema Insani",
      jobTitle: "Business Team Staff",
      salaryRange: "Rp 6,000,000 - Rp 7,500,000",
      companyLogo: "",
      statusList: [
        { label: "Diundang", count: 0, color: "red--text" },
        { label: "Diproses", count: 0, color: "orange--text" },
        { label: "Terpilih", count: 0, color: "green--text" },
      ],
      summary: {
        registered_talent: 150,
        hiring_process: 30,
        hired_talent: 20,
        pending_assesment: 10,
        pending_pretest: 5,
      },
      talents: [
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
      ],
      availableJobs: [
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
      ],
    };
  },

  methods: {
    formatTitle(key) {
      return key
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    },

    handleSelectionChange(newSelection) {
      this.selectedTalents = newSelection;
      console.log("Parent Selected Talents:", this.selectedTalents);
    },

    updateJobDialog(value) {
      this.isJobDialogOpen = value;
    },

    moveToAvailableJobs() {
      console.log("Selected Talents:", this.selectedTalents);
      alert(`Moving ${this.selectedTalents.length} talents to available jobs.`);
    },
  },
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

.job-card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
}

.position-relative {
  position: relative;
}

.live-badge {
  position: absolute;
  bottom: -5px;
  right: -5px;
  background-color: #4caf50;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
}

.company-name {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 500;
}

.job-title {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 600;
}

.salary-range {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
}

.status-text {
  font-size: 12px;
}

.status-count {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
}
</style>
