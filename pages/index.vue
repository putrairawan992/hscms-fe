<template>
  <v-row class="mt-0">
    <v-col cols="12" xs="12" sm="12" md="6" align="center">
      <v-card class="card-dashboard" max-width="450">
        <div class="my-2" style="position: relative">
          <div
            class="pa-6"
            style="
              display: flex;
              justify-content: space-between;
              align-items: baseline;
            "
          >
            <div class="data-diri">Data Diri Seeker</div>
            <b class="view-all" @click="$router.push('/biodata')">View All</b>
          </div>
          <div class="nama-lengkap-parent pb-6">
            <div class="new-hiring-dashboard-item-parent">
              <img
                v-if="data?.photo_profile"
                alt=""
                class="new-hiring-dashboard-item mb-4"
                :src="data?.photo_profile"
              />
              <img
                v-else
                class="frame-photo-red user-red mb-4"
                src="@/assets/img/user-red.png"
                loading="eager"
                alt="Foto"
              />
            </div>
            <!-- <div class="linkedin my-4">
                <img class="vector-icon" alt="" src="../assets/svg/vector3.svg" />
                <div class="linkedin-terhubung-wrapper">
                  <div class="linkedin-terhubung">LinkedIn Terhubung</div>
                </div>
            </div> -->
            <div class="nama-lengkap">
              <div class="nama">
                <div class="melamar-posisi">Nama Lengkap:</div>
              </div>
              <div class="carolina-anindya-wrapper">
                <div class="carolina-anindya">{{ data?.name || "" }}</div>
              </div>
            </div>
            <div class="nama-lengkap">
              <div class="nama">
                <div class="melamar-posisi">Melamar Posisi:</div>
              </div>
              <div class="carolina-anindya-wrapper">
                <div class="carolina-anindya">-</div>
              </div>
            </div>
            <div class="nama-lengkap">
              <div class="nama">
                <div class="melamar-posisi">Ekspektasi Gaji:</div>
              </div>
              <div class="carolina-anindya-wrapper">
                <div class="carolina-anindya">
                  {{ data?.salary_exspectation || "Rp. 0" }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="6" align="center">
      <v-card class="card-dashboard" max-width="450">
        <div class="my-2" style="position: relative">
          <div
            class="pa-6 pb-4"
            style="display: flex; flex-direction: column; text-align: left"
          >
            <div class="data-diri">Berkas Lampiran</div>
            <i class="ukuran-maksimal-berkas">Ukuran maksimal berkas 3MB</i>
          </div>

          <div class="cv-parent">
            <div
              :class="data?.curriculum_vitae ? 'cv' : 'cv5'"
              @click="openFile(data?.curriculum_vitae)"
            >
              <div class="wrapper">
                <img class="icon" alt="" src="../assets/img/1-2@2x.png" />
              </div>
              <div class="cv-wrapper">
                <b class="ktp">CV</b>
              </div>
            </div>
            <div
              :class="data?.photo ? 'cv' : 'cv5'"
              @click="openFile(data?.photo)"
            >
              <div class="wrapper">
                <img class="icon1" alt="" src="../assets/img/8@2x.png" />
              </div>
              <div class="cv-wrapper">
                <b class="ktp">Pas Foto 4x6</b>
              </div>
            </div>
            <div :class="data?.ktp ? 'cv' : 'cv5'" @click="openFile(data?.ktp)">
              <div class="wrapper">
                <img class="icon2" alt="" src="../assets/img/2@2x.png" />
              </div>
              <div class="cv-wrapper">
                <b class="ktp">KTP</b>
              </div>
            </div>
          </div>
          <div class="cv-group">
            <div :class="data?.kk ? 'cv' : 'cv5'" @click="openFile(data?.kk)">
              <div class="wrapper">
                <img class="icon3" alt="" src="../assets/img/4@2x.png" />
              </div>
              <div class="cv-wrapper">
                <b class="ktp">Kartu Keluarga</b>
              </div>
            </div>
            <div
              :class="data?.npwp ? 'cv' : 'cv5'"
              @click="openFile(data?.npwp)"
            >
              <img
                class="cv-child"
                alt=""
                src="../assets/img/frame-2036@2x.png"
              />
              <div class="cv-wrapper">
                <b class="ktp">NPWP</b>
              </div>
            </div>
            <div
              :class="data?.bpjs ? 'cv' : 'cv5'"
              @click="openFile(data?.bpjs)"
            >
              <div class="wrapper">
                <img class="icon4" alt="" src="../assets/img/6@2x.png" />
              </div>
              <div class="cv-wrapper">
                <b class="ktp">BPJSKES & TK</b>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="6" align="center">
      <v-card class="card-dashboard" max-width="450">
        <div class="my-2" style="position: relative">
          <div
            class="pa-6"
            style="
              display: flex;
              justify-content: space-between;
              align-items: baseline;
            "
          >
            <div class="data-diri">Kontrak</div>
            <b class="view-all" @click="$router.push('/contract')">View All</b>
          </div>
          <div class="absen1">
            <img
              class="kontrak-1-icon"
              alt=""
              src="../assets/img/kontrak-1@2x.png"
            />
            <div class="nama-lengkap2">
              <div class="carolina-anindya">Anda belum memiliki kontrak.</div>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="6" align="center">
      <v-card class="card-dashboard" max-width="450">
        <div class="my-2" style="position: relative">
          <div
            class="pa-6 pb-4"
            style="display: flex; flex-direction: column; text-align: left"
          >
            <div class="data-diri">Jadwal</div>
            <i class="ukuran-maksimal-berkas"
              >Anda dapat mengubah jadwal setelah konfirmasi</i
            >
          </div>
          <div class="sen-parent">
            <div class="sen">Sen</div>
            <div class="sel">Sel</div>
            <div class="rab">Rab</div>
            <div class="kam">Kam</div>
            <div class="jum">Jum</div>
            <div class="sab">Sab</div>
            <div class="min">Min</div>
          </div>
          <div v-for="(value, key) in calendar" class="week-group-dashboard">
            <div v-for="(value1, key1) in value">
              <div v-if="value1.schedule" class="week-dashboard">
                <div class="week-border-green-dashboard">
                  <div class="date-square-green-dashboard" />
                  <div class="week-text-dashboard">{{ value1.day }}</div>
                </div>
                <div
                  @click="pickDay(value1.schedule_id, value1.date.date)"
                  class="jadwal-wrapper"
                  style="cursor: pointer"
                >
                  <div class="job">Pilih Hari</div>
                </div>
              </div>

              <div v-else>
                <div v-if="value1.today">
                  <div class="week-dashboard">
                    <div>
                      <div class="week-border-blue-dashboard">
                        <div class="date-square-blue-dashboard" />
                        <div class="week-text-dashboard">{{ value1.day }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div
                    v-if="key1 == 5 || key1 == 6"
                    class="week-red-dashboard"
                    :class="value1.day == null ? 'week-blur-dashboard' : ''"
                  >
                    <div class="week-border-normal-dashboard">
                      <div class="date-square-red-dashboard" />
                      <div class="week-text-dashboard">{{ value1.day }}</div>
                    </div>
                  </div>
                  <div
                    v-else
                    class="week-dashboard"
                    :class="value1.day == null ? 'week-blur-dashboard' : ''"
                  >
                    <div class="week-border-normal-dashboard">
                      <div class="date-square-normal-dashboard" />
                      <div class="week-text-dashboard">{{ value1.day }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <Dialog-OpenFile
      :show="fileDialog"
      :fileUrl="fileUrl"
      :closeDialog="closeFile"
    />
  </v-row>
</template>
<script>
import { API } from "@/api/index";

export default {
  middleware: "jobSeeker",
  name: "NewHiringDashboard",
  data() {
    return {
      data: null,
      show: false,
      fileUrl: null,
      fileDialog: false,

      calendar: [],
      timeSchedule: {
        time: [],
        link: null,
      },
      arrayBulan: [
        { id: 1, name: "Januari" },
        { id: 2, name: "Februari" },
        { id: 3, name: "Maret" },
        { id: 4, name: "April" },
        { id: 5, name: "Mei" },
        { id: 6, name: "Juni" },
        { id: 7, name: "Juli" },
        { id: 8, name: "Agustus" },
        { id: 9, name: "September" },
        { id: 10, name: "Oktober" },
        { id: 11, name: "November" },
        { id: 12, name: "Desember" },
      ],
    };
  },
  setup() {
    const { getDashboard, postApplyJob } = API();
    return { getDashboard, postApplyJob };
  },
  async mounted() {
    await this.getData();
    let id_share_aplied_job = localStorage.getItem("id_share_aplied_job");
    if (id_share_aplied_job) {
      this.applyJob(id_share_aplied_job);
    }
  },
  methods: {
    async getData() {
      await this.getDashboard().then(async (result) => {
        if (result) {
          this.data = result;
          await this.buildArrayCalendar(result?.schedule);
        }
      });
    },

    async buildArrayCalendar(data) {
      if (data) {
        let daysBefore = this.getDayBefore(data[0].day);
        let daysAfter =
          (daysBefore + data.length > 35 ? 42 : 35) -
          (data.length + daysBefore);
        let chunkSize = 7;
        let days = [];

        for (let index = 0; index < daysBefore; index++) {
          days.push({
            day: null,
            date: null,
            today: false,
            schedule: false,
            schedule_id: null,
          });
        }
        await data.forEach((element) => {
          days.push({
            date: element,
            day: this.getDay(element.date),
            today: this.isToday(element.date),
            schedule: element.is_active == "active" ? true : false,
            schedule_id: element.schedule_id,
          });
        });
        for (let index = 0; index < daysAfter; index++) {
          days.push({
            day: null,
            date: null,
            today: false,
            schedule: false,
            schedule_id: null,
          });
        }

        this.calendar = [];
        for (let i = 0; i < days.length; i += chunkSize) {
          const chunk = days.slice(i, i + chunkSize);
          this.calendar.push(chunk);
        }
      }
    },
    getDay(date) {
      if (date) {
        let arrayDate = date.split("-");
        return parseInt(arrayDate[arrayDate.length - 1]);
      }
    },
    isToday(date) {
      if (date) {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1; // Ingat bahwa bulan dimulai dari 0, jadi tambahkan 1
        const year = today.getFullYear();
        let arrayDate = date.split("-");

        if (
          arrayDate[0] == year &&
          arrayDate[1] == month &&
          arrayDate[2] == day
        ) {
          return true;
        } else {
          return false;
        }
      }
    },
    getDayBefore(day) {
      let dayBefore = 0;
      let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      for (let i = 0; i < days.length; i++) {
        if (days[i] === day) {
          dayBefore = i;
          break;
        }
      }
      return dayBefore;
    },

    async applyJob(id_job) {
      await this.postApplyJob(id_job).then(async (result) => {
        if (result) {
          if (result.message == "job sudah pernah di apply") {
            this.$notifier.showMessage({
              content: result.message,
              status: "warning",
            });
          } else {
            this.$notifier.showMessage({
              content: "Success.",
              status: "success",
            });
          }
          return this.$router.push("/pretest");
        } else {
          return this.getData();
        }
      });
      localStorage.removeItem("id_share_aplied_job");
    },

    openFile(url) {
      if (url) {
        this.fileUrl = url;
        this.fileDialog = true;
      } else {
        this.$notifier.showMessage({
          content: "File tidak tersedia.",
          status: "warning",
        });
      }
    },
    closeFile() {
      this.fileDialog = false;
    },
  },
};
</script>
<style scoped>
.view-all {
  cursor: pointer;
}
.frame-photo-red {
  flex: 1;
  height: 141px;
  width: 110px;
  align-self: stretch;
  position: relative;
  border-radius: 5px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
}
.card-dashboard {
  box-shadow: 5px 0px 5px #b3b9c5, -5px 0px 5px #b3b9c5 !important;
  border-radius: 40px;
  height: 430px;
}

/* calender */
.group-wrapper-dashboard {
  width: -webkit-fill-available;
  height: 100%;
}
.week-group-dashboard {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: -webkit-fill-available;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-top: 8px;
  gap: 5px;
}
.week-dashboard {
  width: 50px;
  position: relative;
  height: 50px;
}
.week-blur-dashboard {
  opacity: 0.7;
}
.week-red-dashboard {
  width: 50px;
  position: relative;
  height: 50px;
  color: #ae445a;
}
.week-border-normal-dashboard {
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 10px;
  width: 50px;
  height: 50px;
}
.week-border-blue-dashboard {
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 10px;
  border: 3px solid #3b78c2;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
}
.week-border-green-dashboard {
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 10px;
  border: 1.5px solid #3ab471;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
}
.date-square-normal-dashboard {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 10px;
  background-color: rgba(255, 175, 16, 0.2);
  border: 0.5px solid rgba(255, 175, 16, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.date-square-red-dashboard {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 10px;
  background-color: rgba(206, 27, 28, 0.2);
  border: 0.5px solid rgba(206, 27, 28, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.date-square-blue-dashboard {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 10px;
  background-color: rgba(59, 120, 194, 0.1);
  border: 0.5px solid rgba(59, 120, 194, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.date-square-green-dashboard {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 10px;
  background-color: rgba(58, 180, 113, 0.1);
  border: 0.5px solid rgba(58, 180, 113, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.week-text-dashboard {
  display: flex;
  align-items: center;
  justify-content: center;
  height: -webkit-fill-available;
  color: #404041 !important;
  font-size: 14px;
}
.jadwal-wrapper {
  position: absolute;
  height: 28.77%;
  width: 74.46%;
  top: 46.9%;
  right: 12.47%;
  bottom: 24.34%;
  left: 13.07%;
  border-radius: 5px;
  background-color: #3ab471;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  font-size: 8px;
  color: #fff;
}
</style>
