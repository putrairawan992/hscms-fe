<template>
    <div>
        <v-row class="mt-3" align="start" style="min-height: 761px; overflow: hidden;  overflow-x: hidden">
            <v-col style="max-width: 284px;">
                <v-row>
                    <v-col cols="12">
                        <div class="mt-0 ml-0">
                            <div cols="12" class="total-kandidat-tahap2">
                                <div class="">
                                    Total Kandidat:
                                </div>
                                <div class="">
                                  {{ dataCandidate?.count ? dataCandidate?.count : 0 }} Orang
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
                <div style="height: 757px; overflow: auto;padding-top: 25px;">
                  <v-row>
                      <v-col v-for="value, key in dataCandidate?.candidate_list" cols="12" class="component-1 pt-2">
                          <div class="container-frame">
                              <div class="line-separator">
                                  <div class="lowongan-1">
                                      <div class="flex-container">
                                          <input
                                              class="checkbox-selected-blue"
                                              :checked="true" readonly
                                              type="checkbox"
                                          />
                                          <div class="up-arrow-button">
                                              <img
                                                class="frame-grid-icon"
                                                :src="value.photo"
                                                loading="eager"
                                                alt="photo"
                                              />
                                          </div>
                                      </div>
                                      <div class="frame-button-frame-parent">
                                          <div class="frame-button-frame">
                                            <div class="mei-2023">{{ value.created_at }}</div>
                                              <img
                                                  @click="clickDetail(value.job_seeker_id)"
                                                  src="@/assets/svg/eyecirclefill.svg"
                                                  class="eyecirclefill-icon"
                                                  loading="eager"
                                                  alt="detail"
                                              />
                                          </div>
                                          <div class="link-job-opening-dropdown-menu">
                                              <h3 class="annisa-nur-hafiza">{{ value.name }}</h3>
                                              <div class="frame-user-profile-wrapper">
                                                  <div class="frame-user-profile">
                                                      <div class="diplomasarjana-s11">
                                                        {{ value.degree }}
                                                      </div>
                                                      <div class="mei-2023">Rp. -</div>
                                                      <div class="mei-2023">0 tahun</div>
                                                      <div class="mei-2023">Skor: {{ value.average_total }}</div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </v-col>
                  </v-row>
                </div>
            </v-col>
            <v-col>
                <div class="orange-btn" style="width: -webkit-fill-available; justify-content: center;" @click="openGradeDialog">
                    <b class="button">Set Grade Components</b>
                    <img class="gear-icon" alt="" src="@/assets/svg/gear.svg" />
                </div>
                <div class="mt-4" style="text-align: left;">
                    <b class="tanggal-dan-waktu">Tanggal dan Waktu</b> <br>
                    <i class="tahan-ctrl-untuk">
                        tahan ctrl untuk memilih lebih dari satu hari, klik dua kali untuk batal memilih hari
                    </i>
                </div>

                <v-row style="margin-top: 0px;">
                    <v-col>
                        <div class="date-parent mb-3 pt-1">
                            <div class="date35">
                                <div class="date-inner">
                                  <div class="september-parent">
                                      <v-select
                                        ref="selectMonth" class="select-month pa-0"
                                        :items="arrayBulan" v-model="month"
                                        item-text="name" return-object
                                      ></v-select>
                                  </div>
                                </div>
                            </div>
                            <div class="date35">
                                <div class="date-inner">
                                  <div class="september-parent" style="width: 84px;">
                                      <v-select
                                        ref="selectMonth" class="select-month pa-0"
                                        :items="[2024, 2025, 2026, 2027]"
                                        variant="underlined" v-model="year"
                                      ></v-select>
                                  </div>
                                </div>
                            </div>
                        </div>

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

                                              <div v-if="value1.schedule" style="cursor: pointer;">
                                                <div class="week-border-green">
                                                  <div class="date-square-green" />
                                                  <div class="week-text">{{ value1.day }}</div>
                                                </div>
                                                <div class="jadwal-wrapper">
                                                    <div class="job">Jadwal</div>
                                                </div>
                                              </div>
                                          </div>
                                        </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                    </v-col>
                    <v-col style="max-width: 135px;" class="align-self-stretch">
                        <div class="rectangle-parent" >
                            <div class="group-inner" >
                                <div class="holidays-box">
                                    <!-- <div class="hari-nasional">Hari Nasional</div>
                                    <div class="juli-2023-parent">
                                        <div class="juli-2023">1 Juli 2023</div>
                                        <div class="hari-buruh-sedunia">Hari Buruh Sedunia</div>
                                    </div>
                                    <div class="juli-2023-parent">
                                        <div class="juli-2023">1 Juli 2023</div>
                                        <div class="hari-buruh-sedunia">Hari Buruh Sedunia</div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12">
                        <div class="pilih-tanggal-container px-1">
                            <v-row class="pa-4" style="">
                                <v-col v-if="userList.length" cols="12" class="input-checkbox-container" v-for="value, key in userList">
                                    <v-row>
                                        <v-col cols="4" class="input-checkbox-container pb-0">
                                            <v-select
                                                placeholder="Pilih Tanggal" solo :readonly="userList[key].date != null"
                                                :items="formattedDateList" return-object v-model="userList[key].date"
                                                class="selection-text-field" item-text="formattedDate" item-value="date"
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="3" class="input-checkbox-container px-0 pb-0">
                                            <v-select
                                                placeholder="Pilih Jam" 
                                                solo :items="hoursInDay" v-model="userList[key].time"
                                                class="selection-text-field" :readonly="userList[key].time != null"
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="5" class="input-checkbox-container pb-0">
                                            <div class="sara-dwi-mashiro-wrapper">
                                                <div v-if="value.candidate_name" class="sara-dwi-mashiro">{{ userList[key].candidate_name }}</div>
                                                <i v-else class="sara-dwi-mashiro" style="color: #B6B6B6;">Belum ada kandidat</i>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col v-else cols="12" class="input-checkbox-container">
                                    <v-row>
                                        <v-col cols="12" class="input-checkbox-container pb-0" style="height: -webkit-fill-available; align-items: center; justify-content: center;">
                                            <div class="sara-dwi-mashiro-wrapper" style="justify-content: center;">
                                                <div class="sara-dwi-mashiro">Belum ada data.</div>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12">
                        <v-row>
                            <v-col cols="5">
                                <v-row>
                                    <v-col cols="12" class="label-selection pb-0">
                                        <b>Link Zoom/Gmeet</b>
                                    </v-col>
                                    <v-col cols="12" class="pt-1">
                                        <input
                                            class="selection-text-input" v-model="link" :readonly="link ? true : false"
                                            placeholder="Masukkan Judul Nama Tes" :allow-empty="false"
                                        />
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="7">
                                <v-row>
                                    <v-col cols="12" class="label-selection pb-0">
                                        <b>Waktu Kandidat Memilih Hari</b>
                                    </v-col>
                                    <v-col cols="12" class="pt-1">
                                        <v-row>
                                            <v-col class="pr-0">
                                                <v-menu
                                                ref="datePicker1"
                                                v-model="datePicker1"
                                                :close-on-content-click="false"
                                                transition="scale-transition"
                                                offset-y max-width="290px"
                                                min-width="auto"
                                                >
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <div v-on="on" style="position: relative;">
                                                            <input
                                                            v-model="start_date"
                                                            v-bind="attrs"
                                                            @blur="start_date = parseDate(start_date)"
                                                            outlined readonly
                                                            class="selection-text-input"
                                                            placeholder="2024-11-06"
                                                            />
                                                            <img class="feather-icon-calendar-small" alt="" src="@/assets/svg/feathericon--calendar.svg" />
                                                        </div>
                                                    </template>
                                                    <v-date-picker
                                                        @input="datePicker1 = false" :disabled="start_date ? true : false"
                                                        plas v-model="start_date" no-title
                                                    ></v-date-picker>
                                                </v-menu>
                                            </v-col>
                                            <v-col class="dash-container">
                                                <b class="dash">-</b>
                                            </v-col>
                                            <v-col class="pl-0">
                                                <v-menu
                                                ref="datePicker2"
                                                v-model="datePicker2"
                                                :close-on-content-click="false"
                                                transition="scale-transition"
                                                offset-y max-width="290px"
                                                min-width="auto"
                                                >
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <div v-on="on" style="position: relative;">
                                                            <input
                                                            v-model="end_date"
                                                            v-bind="attrs"
                                                            @blur="end_date = parseDate(end_date)"
                                                            outlined readonly
                                                            class="selection-text-input"
                                                            placeholder="2024-11-06"
                                                            />
                                                            <img class="feather-icon-calendar-small" alt="" src="@/assets/svg/feathericon--calendar.svg" />
                                                        </div>
                                                    </template>
                                                    <v-date-picker
                                                        @input="datePicker2 = false" :disabled="end_date ? true : false"
                                                        plas v-model="end_date" no-title
                                                    ></v-date-picker>
                                                </v-menu>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <div style="position: relative; display: flex; justify-content: end; column-gap: 20px; margin-top: 21px; padding-bottom: 30px;">
                    <div :class="btn_save_schedule == 'enabled' ? 'orange-btn' : 'grey-btn'">
                        <div @click="btn_save_schedule == 'enabled' ? submit() : ''">
                            <b class="button mx-4">Save</b>
                        </div>
                    </div>
                </div>
            </v-col>

            <v-col cols="12" class="text-left">
              <div class="page-title">
                Blast Notification
              </div>
            </v-col>
            <v-col cols="12">
              <v-row>
                  <v-col cols="12" class="label-selection pb-0">
                      <b>Judul Pesan</b>
                  </v-col>
                  <v-col cols="12" class="pt-1">
                      <input
                          class="selection-text-input" v-model="title"
                          placeholder="Masukkan Judul Pesan" :allow-empty="false"
                      />
                  </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-row>
                  <v-col cols="12" class="label-selection pb-0">
                      <b>Paragraf Pembuka</b>
                  </v-col>
                  <v-col cols="12" class="pt-1">
                    <v-textarea
                        placeholder="Masukkan Pesan Paragraf Pembuka untuk Kandidat..." 
                        solo class="selection-text-field" rows="3" v-model="opening_text"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" class="pt-0 d-flex">
                    <div class="warning-title">{Jadwal sesuai User Penerima/Kandidat}</div>
                  </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-row>
                  <v-col cols="12" class="label-selection pb-0">
                      <b>Paragraf Penutup</b>
                  </v-col>
                  <v-col cols="12" class="pt-1">
                    <v-textarea
                        placeholder="Masukkan Pesan Paragraf Penutup untuk Kandidat..." 
                        solo class="selection-text-field" rows="3" v-model="closing_text"
                    ></v-textarea>
                  </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
                <div style="position: relative; display: flex; justify-content: end; column-gap: 20px; margin-top: 21px; padding-bottom: 30px;">
                    <div :class="btn_blasting == 'enabled' ? 'orange-btn' : 'grey-btn'">
                        <div @click="btn_blasting == 'enabled' ? blastNotification() : ''">
                            <b class="button mx-4">Blast</b>
                        </div>
                    </div>
                    <div :class="btn_next == 'enabled' ? 'orange-btn' : 'grey-btn'">
                        <div @click="btn_next == 'enabled' ? continueStep() : ''">
                            <b class="button mx-4">Continue to “Tahap 4”</b>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
        
        <Dialog-GradeSetting :show="gradeDialog" :closeDialog="closeGradeDialog"/>
    </div>
</template>

<script>
import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    components: { 
        Multiselect,
    },
    data () { return {
        panel: [],
        calendar: [],
        dateList: [],
        userList: [],
        dataCandidate: [],

        link: null,
        year: null,
        month: null,
        title: null,
        end_date: null,
        start_date: null,
        job_post_id: null,
        opening_text: null,
        closing_text: null,
        btn_blasting: null,
        btn_save_schedule: null,
        btn_next: 'enabled',

        radio: false,
        datePicker1: false,
        datePicker2: false,
        gradeDialog: false,

        radios: [true, false, true, false],
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
        hoursInDay: [
          "00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
          "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
          "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
          "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
        ]
    } },
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
    },
    setup() {
        const { getListCandidateAPI, postChooseCandidate, getSchedule, postSchedule, postBlastSchedule } = API()
        return { getListCandidateAPI, postChooseCandidate, getSchedule, postSchedule, postBlastSchedule };
    },
    computed: {
		    ...mapState('provider-selection', ['listCandidate']),
        ...mapGetters('provider-selection', ['tahapanGetter']),

        formattedDateList() {
          return this.dateList.map(item => {
            const formattedDate = this.formatDate(item.date);
            return { ...item, formattedDate };
          });
        },
    },
    props: { 
        next: { type: Function, default() { return {} } },
    },
    async mounted(){
      const today = new Date();
      this.year = today.getFullYear();
      this.month = this.arrayBulan[today.getMonth()];

      await this.getListCandidate();
      this.dataCandidate = this.listCandidate;
      await this.getData();
    },
    methods: {
		    ...mapActions('provider-selection', ['getListCandidate']),
        ...mapMutations('provider-selection', ['setListCandidate', 'setTahapan']),

        async continueStep() {
          // Menggunakan filter untuk menyaring objek dengan job_seeker_id yang tidak null
          const filteredData = this.dataCandidate.candidate_list.filter(item => item.job_seeker_id !== null);
          if (filteredData.length  > 0) {
            await this.postChooseCandidate({
                status_step: 'tahap 4',
                job_seeker_id: filteredData.map(item => item.job_seeker_id),
                job_post_id: this.tahapanGetter.jobSelected?.id

            }).then((result)=>{
                if(result){
                    this.$notifier.showMessage({ content: 'Berhasil, ke tahap 4.', status: 'success' });
                    this.setTahapan({ tahap: 'Tahap 4', ...this.tahapanGetter });
                    return this.next('Tahap 4');
                }
            })
          }else{
              this.$notifier.showMessage({ content: 'Mohon pilih kandidat terlebih dahulu.', status: 'warning' });
          }
        },
        async submit(){
          if(this.dateValidator()){
            await this.postSchedule({
              candidate: this.dataCandidate.candidate_list.map(item => ({ "job_seeker_id": item.job_seeker_id })),
              schedule: this.userList.map(item => ({ "date": item.date.date, "time": item.time })),
              job_post_id: this.job_post_id,
              start_date: this.start_date,
              end_date: this.end_date,
              link: this.link,

            }).then((result)=>{if(result){
              this.$notifier.showMessage({ content: 'Success.', status: 'success' });
              return this.getData();
            }})
          }

        },
        async blastNotification(){
          if(this.blastValidator()){
            await this.postBlastSchedule({
              title: this.title,
              opening_text: this.opening_text,
              closing_text: this.closing_text,
              candidate: this.dataCandidate.candidate_list.map(item => ({ "job_seeker_id": item.job_seeker_id })),

            }, this.job_post_id).then((result)=>{if(result){
                this.title = null; this.opening_text = null; this.closing_text = null;
                this.$notifier.showMessage({ content: 'Success.', status: 'success' });
                return this.getData();
            }})
          }

        },
        async getData(){
            await this.getSchedule(this.tahapanGetter.jobSelected.id, this.month.id, this.year).then((result)=>{if(result){
              this.buildArrayCalendar(result.calender);
              this.btn_save_schedule = result.btn_save_schedule;
              this.btn_blasting = result.btn_blasting;
              this.job_post_id = result.job_post_id;
              this.userList = result.user_list;
              this.dateList = result.calender;
              this.btn_next = result.btn_next;
              this.start_date = result.start_date;
              this.end_date = result.end_date;
              this.link = result.link_meet;
            }})
        },

        dateValidator() {
          for (let index = 0; index < this.userList.length; index++) {
            const element = this.userList[index];
            if (element.date == null || element.time == null) {
              this.$notifier.showMessage({ 
                content: 'Data tanggal belum terisi.',
                status: 'warning'
              });
              return false;
            }         
          }
          if (this.end_date == null || this.start_date == null) {
              this.$notifier.showMessage({ 
                content: 'Data waktu kandidat belum terisi.',
                status: 'warning'
              });
              return false;
          }
          if (this.link == null) {
              this.$notifier.showMessage({ 
                content: 'Data link zoom belum terisi.',
                status: 'warning'
              });
              return false;
          }
          return true;
        },
        blastValidator() {
          if (this.title == null) {
              this.$notifier.showMessage({ 
                content: 'Data judul Pesan zoom belum terisi.',
                status: 'warning'
              });
              return false;
          }
          if (this.opening_text == null) {
              this.$notifier.showMessage({ 
                content: 'Data paragraf pembuka zoom belum terisi.',
                status: 'warning'
              });
              return false;
          }
          if (this.closing_text == null) {
              this.$notifier.showMessage({ 
                content: 'Data paragraf penutup belum terisi.',
                status: 'warning'
              });
              return false;
          }
          return true;
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
              });
            };
            await data.forEach(element => {
              days.push({
                date: element,
                day: this.getDay(element.date),
                today: this.isToday(element.date),
                schedule: element.is_active == 'active' ? true : false,
              })
            });
            for (let index = 0; index < daysAfter; index++) {
              days.push({
                day: null,
                date: null,
                today: false,
                schedule: false,
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


        async clickDetail(job_seeker_id) {
            await this.setTahapan({
                ...this.tahapanGetter,
                detail: {
                    job_seeker_id: job_seeker_id,
                }
            });
            return this.$router.push("/talent-selection/detail")
        },
        chooseMonth(question){
            this.$refs.selectMonth.selectedItems[0];
        },
        radioChange(index) {
            this.radios[index] = true;
        },
        activatePanel(index) {
            this.panel = this.panel === index - 1 ? [] : index - 1;
        },
        parseDate (date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        formatDate(date) {
          const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          const formattedDate = new Date(date).toLocaleDateString('id-ID', options);
          return formattedDate;
        },
        async openGradeDialog(){ this.gradeDialog = true; },
        async closeGradeDialog(){ this.gradeDialog = false; },
    },
}
</script>
<style scoped>
/* calender */
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
    width: 59.57px;
    height: 50.15px;
  }
  .weekend {
    color: #ae445a;
    display: inline-block;
    width: 59.57px;
    height: 50.15px;
  }
  .week-group {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: -webkit-fill-available;
    height: 50.15px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 8px;
    gap: 5px;
  }
  .week {
    position: relative;
    width: 59.57px;
    height: 50.15px;
  }
  .week-blur {
    opacity: 0.7;
  }
  .week-red {
    width: 59.57px;
    height: 50.15px;
    position: relative;
    color: #ae445a;
  }
  .week-border-normal {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 10px;
    width: 59.57px;
    height: 50.15px;
  }
  .week-border-blue {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 10px;
    border: 3px solid #3b78c2;
    box-sizing: border-box;
    width: 59.57px;
    height: 50.15px;
  }
  .week-border-green {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 10px;
    border: 1.5px solid #3ab471;
    box-sizing: border-box;
    width: 59.57px;
    height: 50.15px;
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
  /* calendar end */

.warning-title {
  color: #AE445A;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.page-title {
    color: #AE445A;
    font-family: Nunito;
    font-size: 26px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}
.dash {
    font-weight: 900;
    color: #ae445a;
    text-align: center;
}
.dash-container {
    display: flex;
    max-width: 20px;
    align-items: center;
    justify-content: center;
}
.calendar-input-container{
    position: relative;
}
.feather-icon-calendar-small {
    top: 19%;
    right: 7%;
    width: 15px;
    height: 20px;
    position: absolute;
}
.label-selection {
    text-align: left;
    color: #404041;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.sara-dwi-mashiro {
  position: relative;
  line-height: 19px;
}
.sara-dwi-mashiro-wrapper {
  width: 196px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  box-sizing: border-box;
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
.selection-text-input {
    border-radius: 10px;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 100%;
    height: 41px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    font-size: 12px;
}.selection-text-input::placeholder {
    font-style: italic;
}
.pilih-tanggal-container {
    height: 198px;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 10px;
    border: 1px solid #AE445A;
}
.hari-nasional {
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    display: inline-block;
    width: 87px;
    height: 23px;
    margin-top: 18px;
}
.holidays-box {
    width: 87px;
    height: 140px;
}
.rectangle-parent {
    width: 100%;
    height: 100%;
    font-size: 8px;
  }
.group-inner {
    border-radius: 12px;
    background: linear-gradient(
      180deg,
      rgba(255, 175, 16, 0.2),
      rgba(206, 27, 28, 0),
      rgba(206, 27, 28, 0.2)
    );
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    min-height: 100%;
  }
.group-wrapper {
    width: -webkit-fill-available;
    height: 100%;
  }
.september {
    width: 141px;
    position: relative;
    font-weight: 900;
    display: inline-block;
    flex-shrink: 0;
}
.vector-icon {
    width: 8.98px;
    position: relative;
    height: 4.49px;
}
.september-parent {
    width: 125px;
    height: 21px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.date-inner {
    border-radius: 10px;
    width: 135px;
    height: 39px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    box-sizing: border-box;
}
.date35 {
    width: 150px;
    position: relative;
    border-radius: 10px;
    height: 39px;
}
.div35 {
    width: 64px;
    position: relative;
    font-weight: 900;
    display: inline-block;
    flex-shrink: 0;
}
.parent {
    width: 78px;
    height: 21px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.date-child {
    border-radius: 10px;
    width: 100px;
    height: 39px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    box-sizing: border-box;
}
.date36 {
    width: 117px;
    position: relative;
    border-radius: 10px;
    height: 39px;
}
.date-parent {
    border-radius: 10px;
    background-color: #ae445a;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 41px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 18px;
    color: #fff;
    font-family: Nunito;
}
.tanggal-dan-waktu {
    font-size: 16px;
}
.mei-2023 {
    font-family: Poppins;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.total-kandidat-tahap2 {
    display: flex;
    width: 100%;
    height: 33px;
    padding: 17px 10px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #AE445A;
    background: #FFF;
    box-shadow: 5px 0px 5px 0px #B3B9C5;
    color: #AE445A;
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    justify-content: center;
}
.dash-container {
    max-width: 20px;
    display: flex;
    align-items: center;
}
.dash {
    font-weight: 900;
    color: #ae445a;
    text-align: center;
}
.input-checkbox-container{
    display: flex;
    column-gap: 20px;
    flex-direction: row;
}
.gear-icon {
    width: 25px;
    height: 29px;
    overflow: hidden;
    flex-shrink: 0;
    margin-left: 5px;
}
  .checkbox-selected-blue {
    margin: 0;
    width: 15px;
    height: 15px;
    position: relative;
    color: #3B78C2;
    accent-color: #3B78C2;
  }
  .smasmk {
    margin: 0;
    line-height: 150%;
    font-weight: 400;
    position: relative;
    font-size: inherit;
    font-family: inherit;
  }
  .bodyblock {
    display: flex;
    overflow: hidden;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 1px 7px 5px;
  }
  .button2 {
    position: relative;
    font-size: 12px;
    font-family: Poppins;
    color: #fff;
    text-align: left;
  }
  .component-1 {
    max-width: 285px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    /* gap: 14px; */
    z-index: 2;
    text-align: right;
    font-size: 8px;
  }
  .container-frame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px 0px;
    color: #fff;
  }
  .line-separator {
    width: 561px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 43px;
  }
  .lowongan-1 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 12px 17px 7px;
    box-sizing: border-box;
    position: relative;
    min-width: 168px;
    cursor: pointer;
    border: 3px solid #AE445A;
    border-radius: 10px;
    background: linear-gradient(90deg, #F39F5A 0%, #AE445A 100%);
  }
  .lowongan-2 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 8px 12px 17px 7px;
    box-sizing: border-box;
    position: relative;
    min-width: 168px;
    cursor: pointer;
    border: 3px solid #AE445A;
    border-radius: 10px;
    background: #fff;
    color: #404041;
  }
  .flex-container {
    height: 99px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 11px;
  }
  .up-arrow-button {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 9px 0px 0px;
  }
  .frame-grid-icon {
    flex: 1;
    width: 70px;
    height: 90px;
    align-self: stretch;
    position: relative;
    border-radius: 5px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .frame-button-frame-parent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;
  }
  .frame-button-frame {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 13px;
  }
  .link-job-opening-dropdown-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1px;
    text-align: left;
    font-size: 11px;
  }
  .annisa-nur-hafiza {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 700;
    font-family: inherit;
    z-index: 1;
  }
  .frame-user-profile-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 1;
    font-size: 8px;
  }
  .frame-user-profile-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 1;
    font-size: 8px;
  }
  .frame-user-profile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
</style>