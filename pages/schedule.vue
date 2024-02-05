<template>
  <div>
      <v-card class="card-register">
          <div class="my-2" style="position: relative;">
              <div class="blokade-parent ma-8 pt-1" style="min-height: 850px;">
                  <v-row align="center" class="my-4">
                      <v-col cols="12" class="text-left">
                          <div class="open-job-dan-draft">
                            Jadwal
                          </div>
                          <i class="mt-0">Anda dapat mengubah jadwal setelah konfirmasi</i>
                      </v-col>

                      <v-col cols="6" xs="3" md="3" lg="3" xl="3" xxl="3" class="">
                          <v-row align="center">
                              <v-col cols="12" class="pt-0 input-checkbox-container">
                                  <multiselect
                                      v-model="month"
                                      :options="arrayBulan"
                                      placeholder="Pilih Bulan" :allow-empty="false"
                                      class="header-select-input" label="name"
                                      >
                                  </multiselect>
                              </v-col>
                          </v-row>
                      </v-col>
                      <v-col cols="6" xs="3" md="3" lg="3" xl="3" xxl="3" class="">
                          <v-row align="center">
                              <v-col cols="12" class="pt-0 input-checkbox-container">
                                  <multiselect
                                      v-model="year"
                                      :options="['2024', '2025', '2026', '2027']"
                                      placeholder="Pilih Tahun" :allow-empty="false"
                                      class="header-select-input"
                                      >
                                  </multiselect>
                              </v-col>
                          </v-row>
                      </v-col>
                      <v-col cols="6" xs="4" md="4" lg="4" xl="4" xxl="4" class="">
                          <v-row align="center">
                              <v-col cols="12" class="pt-0 input-checkbox-container">
                                  <multiselect
                                      :options="jobs"
                                      v-model="jobSelected"
                                      placeholder="Pilih Job Opening" :allow-empty="false"
                                      class="header-select-input" label="job_title"
                                      >
                                  </multiselect>
                              </v-col>
                          </v-row>
                      </v-col>
                      
                      <v-col cols="12" class="mb-4">
                          <div class="group-wrapper">
                              <div class="frame-group">
                                  <div class="days-of-week">
                                      <div class="weekdays">Senin</div>
                                      <div class="weekdays">Selasa</div>
                                      <div class="weekdays">Rabu</div>
                                      <div class="weekdays">Kamis</div>
                                      <div class="weekdays">Jumat</div>
                                      <div class="weekend">Sabtu</div>
                                      <div class="weekend">Minggu</div>
                                  </div>
                                  <div v-for="value, key in calendar" class="week-group">
                                      <div v-for="value1, key1 in value">
                                        <div v-if="value1.today">
                                          <div class="week">
                                              <div>
                                                <div class="week-border-blue">
                                                  <div class="date-square-blue" />
                                                  <div class="week-text">{{ value1.day }}</div>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div v-else>
                                          <div v-if="key1 == 5 || key1 == 6" class="week-red" :class="value1.day == null ? 'week-blur' : ''">
                                              <div class="week-border-normal">
                                                  <div class="date-square-red" />
                                                  <div class="week-text">{{ value1.day }}</div>
                                              </div>
                                          </div>
                                          <div v-else class="week" :class="value1.day == null ? 'week-blur' : ''">
                                              <div v-if="!value1.schedule" class="week-border-normal">
                                                <div class="date-square-normal" />
                                                <div class="week-text">{{ value1.day }}</div>
                                              </div>

                                              <div v-if="value1.schedule">
                                                <div class="week-border-green">
                                                  <div class="date-square-green" />
                                                  <div class="week-text">{{ value1.day }}</div>
                                                </div>
                                                <div @click="pickDay(value1.schedule_id)" class="jadwal-wrapper" style="cursor: pointer;">
                                                    <div class="job">Pilih Hari</div>
                                                </div>
                                              </div>
                                          </div>
                                        </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </v-col>

                      <v-col cols="6" xs="3" md="3" lg="3" xl="3" xxl="3" class="input-checkbox-container">
                            <multiselect
                                v-model="timeScheduleSelected"
                                :options="timeSchedule?.time"
                                placeholder="Pilih Jam" :allow-empty="false"
                                class="header-select-input" label="time"
                                >
                            </multiselect>
                      </v-col>
                      <v-col cols="12" class="input-checkbox-containe pt-0">
                        <div class="link-container">
                          <b style="color: #404041; margin-right: 10px;">Link Meeting: </b> {{ timeSchedule?.link }}
                        </div>
                      </v-col>

                  </v-row>
                <div style="position: relative; display: flex; justify-content: end; column-gap: 20px; margin-top: 21px; padding-bottom: 30px;">
                    <div class="orange-btn" style="">
                        <div class="" @click="pickSchedule()">
                            <b class="button mx-4">Request</b>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </v-card>
      <Dialog-JobDetail :show="showDialog" :closeDialog="closeDialog"/>
      <AlertApproval content="Lowongan akan dihentikan. Anda yakin ingin menghentikan?" :onApprove="closeAlertApproval" :closeDialog="closeAlertApproval" :show="showAlertApproval"/>
  </div>
</template>
<script>
import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
export default {
  name: "jobProvider",
  layout: "jobPost",
  components: { 
      Multiselect,
  },
  data: () => ({
    year: null,
    month: null,
    jobSelected: null,
    timeScheduleSelected: null,

    showDialog: false,
    showAlertApproval: false,

    jobs: [],
    calendar: [],
    timeSchedule: {
      time: [],
      link: null
    },
    arrayBulan: [
      { id: 1, name: 'Januari' },
      { id: 2, name: 'Februari' },
      { id: 3, name: 'Maret' },
      { id: 4, name: 'April' },
      { id: 5, name: 'Mei' },
      { id: 6, name: 'Juni' },
      { id: 7, name: 'Juli' },
      { id: 8, name: 'Agustus' },
      { id: 9, name: 'September' },
      { id: 10, name: 'Oktober' },
      { id: 11, name: 'November' },
      { id: 12, name: 'Desember' },
    ],
  }),
  watch: {
    async year(to, from){
      if(from !== null){
        await this.getData();
      }
    },
    async month(to, from){
      if(from !== null){
        await this.getData();
      }
    },
    async jobSelected(to, from){
      await this.getData();
    }
  },
  setup() {
      const { getTimeSchedule, getDateSchedule, postPickSchedule } = API();
      return { getTimeSchedule, getDateSchedule, postPickSchedule };
  },
  async mounted() {
      const today = new Date();
      this.year = today.getFullYear();
      this.month = this.arrayBulan[today.getMonth()];
      this.getData();
  },
  methods: {
      async pickSchedule(){
        if(this.timeScheduleSelected?.id){
          await this.postPickSchedule({ schedule_id: this.timeScheduleSelected?.id }).then((result)=>{if(result){
            this.$notifier.showMessage({ content: 'Success.', status: 'success' });
          }})

        }else{
          this.$notifier.showMessage({ content: 'Mohon pilih jam terlebih dahulu.', status: 'warning' })
        }
      },
      async pickDay(schedule_id){
          await this.getTimeSchedule(schedule_id).then((result)=>{if(result){
            this.timeSchedule = result;
            this.timeSchedule.time = result.time.filter(item => item.is_used === "false");
          }})
      },
      async getData(){
          await this.getDateSchedule(this.month.id, this.year, this.jobSelected?.id).then((result)=>{if(result){
            this.buildArrayCalendar(result.dates);
            this.jobs = result.job_post_list;
          }})
      },

      async buildArrayCalendar(data) {
        let daysBefore = this.getDayBefore(data[0].day);
        let daysAfter = (daysBefore + data.length > 35 ? 42 : 35) - (data.length + daysBefore);
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
        };
        await data.forEach(element => {
          days.push({
            date: element,
            day: this.getDay(element.date),
            today: this.isToday(element.date),
            schedule: element.is_active == 'active' ? true : false,
            schedule_id: element.schedule_id
          })
        });
        for (let index = 0; index < daysAfter; index++) {
          days.push({
            day: null,
            date: null,
            today: false,
            schedule: false,
            schedule_id: null,
          });
        };

        this.calendar = [];
        for (let i = 0; i < days.length; i += chunkSize) {
          const chunk = days.slice(i, i + chunkSize);
          this.calendar.push(chunk);
        }
      },
      getDay(date) {
        if(date){
          let arrayDate = date.split('-');
          return parseInt(arrayDate[arrayDate.length - 1]);
        }
      },
      isToday(date) {
        if(date){
          const today = new Date();
          const day = today.getDate();
          const month = today.getMonth() + 1; // Ingat bahwa bulan dimulai dari 0, jadi tambahkan 1
          const year = today.getFullYear();
          let arrayDate = date.split('-');

          if(arrayDate[0] == year && arrayDate[1] == month && arrayDate[2] == day){
            return true;
          }else{
            return false;
          }
        }
      },
      getDayBefore(day) {
        let dayBefore = 0;
        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        for (let i = 0; i < days.length; i++) {
            if (days[i] === day) {
              dayBefore = i;
              break;
            }
        }
        return dayBefore;
      },
      openDialog() {
          this.showDialog = true;
      },
      closeDialog() {
          this.showDialog = false;
      },
      closeAlertApproval() {
          this.showAlertApproval = false;
      },
  }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.link-container{
  padding: 10px;
  font-size: 12px;
  min-width: 360px;
  border-radius: 10px;
  border: 1px solid #AE445A;
  text-align: left;
}
.card-register {
  border-radius: 40px;
  background: linear-gradient(90deg, #F1F5FE 0%, #FFF 98.82%);
  box-shadow: 5px 0px 5px #b3b9c5, -5px 0px 5px #b3b9c5 !important;
}
.open-job-dan-draft {
  font-size: 20px;
  font-weight: 900;
  color: #ae445a;
  text-align: left;
  font-family: Nunito;
}
@media only screen and (max-width: 500px) {
  .open-job-dan-draft {
      font-size: 18px;
      text-align: center;
  }
}

.header-select-input {
    border-radius: 10px;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 100%;
    height: 27px !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    font-size: 12px;
    /* color: #b6b6b6; */
}.header-select-input::placeholder {
    font-style: italic;
}

/* calender */
  .group-wrapper {
    width: -webkit-fill-available;
    height: 100%;
  }
  .frame-group {
    width: -webkit-fill-available;
    height: 100%;
  }
  .days-of-week {
    width: -webkit-fill-available;
    height: 14.48px;
    text-align: center;
  }
  .weekdays {
    display: inline-block;
    width: 117.69px;
    height: 14.48px;
  }
  .weekend {
    color: #ae445a;
    display: inline-block;
    width: 117.69px;
    height: 14.48px;
  }
  .week-group {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: -webkit-fill-available;
    height: 117.69px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 8px;
    gap: 5px;
  }
  .week {
    width: 117.69px;
    position: relative;
    height: 117.69px;
  }
  .week-blur {
    opacity: 0.7;
  }
  .week-red {
    width: 117.69px;
    position: relative;
    height: 117.69px;
    color: #ae445a;
  }
  .week-border-normal {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 10px;
    width: 117.69px;
    height: 117.69px;
  }
  .week-border-blue {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 10px;
    border: 3px solid #3b78c2;
    box-sizing: border-box;
    width: 117.69px;
    height: 117.69px;
  }
  .week-border-green {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 10px;
    border: 1.5px solid #3ab471;
    box-sizing: border-box;
    width: 117.69px;
    height: 117.69px;
  }
  .date-square-normal {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: 10px;
    background-color: rgba(243, 159, 90, 0.1);
    border: 0.5px solid rgba(243, 159, 90, 0.1);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .date-square-red {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: 10px;
    background-color: rgba(174, 68, 90, 0.1);
    border: 0.5px solid rgba(174, 68, 90, 0.1);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .date-square-blue {
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
  .date-square-green {
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
  .week-text {
    position: absolute;
    height: 16.55%;
    width: 18.62%;
    top: 6.76%;
    left: 8.79%;
    display: inline-block;
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
