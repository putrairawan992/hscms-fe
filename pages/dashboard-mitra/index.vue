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
        <Button variant="primary" size="sm">View All</Button>
      </div>
      <v-card class="job-card pa-4" elevation="1" v-if="jobProviderData">
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
                  {{ jobProviderData.name }}
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
              <div class="text-center">
                <div class="font-weight-bold" style="color: #ae445a">
                  Diundang
                </div>
                <div class="text-body-1">
                  {{ jobProviderData.count_invitation }}
                </div>
              </div>
              <div class="text-center">
                <div class="font-weight-bold" style="color: #ae445a">
                  Diproses
                </div>
                <div class="text-body-1">
                  {{ jobProviderData.count_onprocess }}
                </div>
              </div>
              <div class="text-center">
                <div class="font-weight-bold" style="color: #ae445a">
                  Terpilih
                </div>
                <div class="text-body-1">
                  {{ jobProviderData.count_selected }}
                </div>
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
        <Button variant="primary" size="sm">View All</Button>
      </div>
      <Talent
        :with-checkbox="false"
        :talents="mappedTalents"
        @selection-change="handleSelectionChange"
      />
    </div>

    <br />
  </div>
</template>

<script>
import Talent from "@/components/TalentList/Talent";
import Button from "@/components/Button";
import SummaryCard from "@/components/TalentList/SummaryCard";
import SearchForm from "@/components/TalentList/SearchForm";
import JobDialog from "@/components/TalentList/ModalListJob";
import { mitraAPI } from "@/api/mitra";
import { useContext } from "@nuxtjs/composition-api";

export default {
  name: "DashboardPage",

  components: {
    Button,
    Talent,
    SummaryCard,
    SearchForm,
    JobDialog,
  },

  setup() {
    const context = useContext();
    const { getDashboardMitra } = mitraAPI();

    return {
      getDashboardMitra,
    };
  },

  data() {
    return {
      isJobDialogOpen: false,
      selectedTalents: [],
      jobTitle: "Business Team Staff",
      salaryRange: "Rp 6,000,000 - Rp 7,500,000",
      companyLogo: "",
      summary: {
        registered_talent: 0,
        hiring_process: 0,
        hired_talent: 0,
        pending_assesment: 0,
        pending_pretest: 0,
      },
      jobProviderData: null,
      talent_list: [],
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
      loading: false,
      error: null,
    };
  },

  created() {
    this.fetchDashboardData();
  },

  computed: {
    mappedTalents() {
      return this.talent_list.map((talent) => ({
        id: talent.id,
        name: talent.name,
        education: talent.education || "Not specified",
        salary: talent.salary_expectation || 0,
        experience: talent.experience || "Not specified",
        score: talent.score || 0,
        date: talent.created_at
          ? talent.created_at.split("||")[0].trim()
          : "Not available",
        time: talent.created_at
          ? talent.created_at.split("||")[1].trim()
          : "Not available",
        image: talent.photo || "",
      }));
    },
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

    async fetchDashboardData() {
      this.loading = true;
      this.error = null;

      try {
        const response = await this.getDashboardMitra();

        if (response) {
          // Update job provider data
          this.jobProviderData = response.job_provider_list;

          // Update talents list
          this.talent_list = response.talent_list || [];

          // Update summary based on available data
          this.summary = {
            registered_talent: this.talent_list.length || 0,
            hiring_process: this.jobProviderData
              ? this.jobProviderData.count_onprocess
              : 0,
            hired_talent: this.jobProviderData
              ? this.jobProviderData.count_selected
              : 0,
            pending_assesment: 0, // Not in API, keep default
            pending_pretest: 0, // Not in API, keep default
          };
        } else {
          this.error = "Failed to fetch dashboard data";
          console.error("API response error:", response);
        }
      } catch (error) {
        this.error = "Error fetching dashboard data";
        console.error("API request error:", error);
      } finally {
        this.loading = false;
      }
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
