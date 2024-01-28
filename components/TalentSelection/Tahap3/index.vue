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
                                    38 Orang
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
                <v-row style="height: 757px; overflow: auto;">
                    <v-col v-for="item, key in 19" cols="12" class="component-1 pt-2">
                        <div class="container-frame">
                            <div class="line-separator">
                                <div class="lowongan-1">
                                    <div class="flex-container">
                                        <input
                                            class="checkbox-selected-blue"
                                            :checked="true"
                                            type="checkbox"
                                        />
                                        <div class="up-arrow-button">
                                            <img
                                                class="frame-grid-icon"
                                                loading="eager"
                                                alt=""
                                                src="@/assets/img/wanita.jpeg"
                                            />
                                        </div>
                                    </div>
                                    <div class="frame-button-frame-parent">
                                        <div class="frame-button-frame">
                                        <div class="mei-2023">2 Mei 2023 | 09:00 WIB</div>
                                            <img
                                                @click="$router.push('/talent-selection/detail')"
                                                src="@/assets/svg/eyecirclefill.svg"
                                                class="eyecirclefill-icon"
                                                loading="eager"
                                                alt="detail"
                                            />
                                        </div>
                                        <div class="link-job-opening-dropdown-menu">
                                            <h3 class="annisa-nur-hafiza" @click="radios[key] = true">Annisa Nur Hafiza {{ key }}</h3>
                                            <div class="frame-user-profile-wrapper">
                                                <div class="frame-user-profile">
                                                    <div class="diplomasarjana-s11">
                                                        Diploma/Sarjana S1
                                                    </div>
                                                    <div class="mei-2023">Rp. 6,000,000</div>
                                                    <div class="mei-2023">2 tahun</div>
                                                    <div class="mei-2023">Skor: 85</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
            <v-col >
                <div class="orange-btn" style="width: -webkit-fill-available; justify-content: center;">
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
                        <div class="date-parent mb-3">
                            <div class="date35">
                                <div class="date-inner">
                                <div class="september-parent">
                                    <div class="september">September</div>
                                    <!-- <img class="vector-icon" alt="" src="/vector.svg" /> -->
                                </div>
                                </div>
                            </div>
                            <div class="date36">
                                <div class="date-child">
                                <div class="parent">
                                    <div class="div35">2023</div>
                                    <!-- <img class="vector-icon" alt="" src="/vector.svg" /> -->
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="group-wrapper">
                            <div class="frame-group">
                                <div class="week-7-parent">
                                    <div class="week-71">
                                        <div class="date7">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child2" />
                                            <div class="div2">1</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-21">
                                        <div class="date8"><!-- blue border -->
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child5" />
                                            <div class="div2">2</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-21">
                                        <div class="date9">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child" />
                                            <div class="div2">3</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-21">
                                        <div class="date8">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child5" />
                                            <div class="div2">4</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-21">
                                        <div class="date9">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child" />
                                            <div class="div2">5</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-71">
                                        <div class="date9">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child2" />
                                            <div class="div2">6</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-8">
                                        <div class="date13">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child2" />
                                            <div class="div2">7</div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="week-1-group">
                                    <div class="week-11">
                                        <div class="date14">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child" />
                                            <div class="div2">8</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-11">
                                        <div class="date14">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child" />
                                            <div class="div2">9</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-11">
                                        <div class="date14">
                                            <div class="menu-button-p-talent-selec">
                                                <div class="date-square-child" />
                                                <div class="div16">10</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="week-11">
                                        <div class="date17">
                                            <div class="menu-button-p-talent-selec">
                                                <div class="date-square-child14" />
                                                <div class="div17">11</div>
                                            </div>
                                        </div>
                                        <div class="jadwal-wrapper">
                                            <div class="job">Jadwal</div>
                                        </div>
                                    </div>
                                    <div class="week-11">
                                        <div class="date18">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child14" />
                                            <div class="div18">12</div>
                                        </div>
                                        <div class="jadwal-container">
                                            <div class="job">Jadwal</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-61">
                                        <div class="date14">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child2" />
                                            <div class="div19">13</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-61">
                                        <div class="date14">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child2" />
                                            <div class="div20">14</div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="week-1-container">
                                    <div class="week-12">
                                        <div class="date21">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child14" />
                                            <div class="div21">15</div>
                                        </div>
                                        </div>
                                        <div class="jadwal-frame">
                                        <div class="job">Jadwal</div>
                                        </div>
                                    </div>
                                    <div class="week-12">
                                        <div class="date21">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child14" />
                                            <div class="div22">16</div>
                                        </div>
                                        </div>
                                        <div class="jadwal-wrapper1">
                                        <div class="job">Jadwal</div>
                                        </div>
                                    </div>
                                    <div class="week-12">
                                        <div class="date21">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child14" />
                                            <div class="div23">17</div>
                                        </div>
                                        </div>
                                        <div class="jadwal-wrapper2">
                                        <div class="job">Jadwal</div>
                                        </div>
                                    </div>
                                    <div class="week-62">
                                        <div class="date24">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child2" />
                                            <div class="div24">18</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-12">
                                        <div class="date21">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child14" />
                                            <div class="div25">19</div>
                                        </div>
                                        </div>
                                        <div class="jadwal-wrapper3">
                                        <div class="job">Jadwal</div>
                                        </div>
                                    </div>
                                    <div class="week-62">
                                        <div class="date24">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child2" />
                                            <div class="div26">20</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-62">
                                        <div class="date24">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child2" />
                                            <div class="div2">21</div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="week-1-parent1">
                                    <div class="week-1">
                                        <div class="date">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child" />
                                            <div class="div28">22</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-1">
                                        <div class="date">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child" />
                                            <div class="div29">23</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-1">
                                        <div class="date">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child" />
                                            <div class="div30">24</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-1">
                                        <div class="date">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child" />
                                            <div class="div31">25</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-1">
                                        <div class="date">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child" />
                                            <div class="div32">26</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-63">
                                        <div class="date">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child2" />
                                            <div class="div33">27</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-63">
                                        <div class="date">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child2" />
                                            <div class="div34">28</div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="week-1-parent">
                                    <div class="week-1">
                                        <div class="date">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child" />
                                            <div class="div">29</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-1">
                                        <div class="date">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child" />
                                            <div class="div1">30</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-1">
                                        <div class="date">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child" />
                                            <div class="div2">31</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-4">
                                        <div class="date">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child" />
                                            <div class="div2">1</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-4">
                                        <div class="date">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child" />
                                            <div class="div2">2</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-6">
                                        <div class="date">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child2" />
                                            <div class="div2">3</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="week-6">
                                        <div class="date">
                                        <div class="menu-button-p-talent-selec">
                                            <div class="date-square-child2" />
                                            <div class="div2">4</div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="days-of-week">
                                    <div class="senin">Senin</div>
                                    <div class="selasa">Selasa</div>
                                    <div class="rabu">Rabu</div>
                                    <div class="kamis">Kamis</div>
                                    <div class="jumat">Jumat</div>
                                    <div class="sabtu">Sabtu</div>
                                    <div class="minggu">Minggu</div>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col style="max-width: 135;">
                        <div class="rectangle-parent">
                            <div class="group-inner" >
                                <div class="holidays-box">
                                    <div class="hari-nasional">Hari Nasional</div>
                                    <div class="juli-2023-parent">
                                        <div class="juli-2023">1 Juli 2023</div>
                                        <div class="hari-buruh-sedunia">Hari Buruh Sedunia</div>
                                    </div>
                                    <div class="juli-2023-parent">
                                        <div class="juli-2023">1 Juli 2023</div>
                                        <div class="hari-buruh-sedunia">Hari Buruh Sedunia</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12">
                        <div class="pilih-tanggal-container px-1">
                            <v-row class="pa-4" style="">
                                <v-col cols="12" class="input-checkbox-container" v-for="item in 12">
                                    <v-row>
                                        <v-col cols="4" class="input-checkbox-container pb-0">
                                            <v-select
                                                solo
                                                placeholder="Select"
                                                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                                                class="selection-text-field" item-value='id' item-text="education_name"
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="3" class="input-checkbox-container px-0 pb-0">
                                            <v-select
                                                solo
                                                placeholder="Select"
                                                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                                                class="selection-text-field" item-value='id' item-text="education_name"
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="5" class="input-checkbox-container pb-0">
                                            <div class="sara-dwi-mashiro-wrapper">
                                                <div class="sara-dwi-mashiro">Sara Dwi Mashiro</div>
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
                                            class="selection-text-input"
                                            placeholder="Masukkan Judul Nama Tes" :allow-empty="false"
                                        />
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="7">
                                <v-row>
                                    <v-col cols="12" class="label-selection pb-0">
                                        <b>Link Zoom/Gmeet</b>
                                    </v-col>
                                    <v-col cols="12" class="pt-1">
                                        <v-row>
                                            <v-col class="pr-0">
                                                <v-menu
                                                ref="datePicker1"
                                                v-model="datePicker1"
                                                :close-on-content-click="false"
                                                transition="scale-transition"
                                                offset-y
                                                max-width="290px"
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
                                                        @input="datePicker1 = false"
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
                                                offset-y
                                                max-width="290px"
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
                                                        @input="datePicker2 = false"
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


            </v-col>
        </v-row>
        <div style="position: relative; display: flex; justify-content: end; column-gap: 20px; margin-top: 21px; padding-bottom: 30px;">
            <!-- <div class="orange-btn" style=""> -->
            <div class="grey-btn" style="">
                <div class="" @click="">
                    <b class="button mx-4">Save</b>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
    components: { 
        Multiselect,
    },
    data () { return {
        panel: [],
        radio: false,
        select1: null,
        datePicker1: false,
        datePicker2: false,

        pageActive: "index",
        radios: [true, false, true, false],
        arrayJalur: ['Seleksi', 'Non-Seleksi'],
        
        start_date: null,
        end_date: null,
    } },
    watch: {
        panel(to, from){
            console.log(to, from);;
        },
        raradiodios(to, from){
            console.log('radio', this.radio);;
        }
    },
    mounted(){
        // this.pageActive = this.$route.name.split('-')[0];
    },
    methods: {
        radioChange(index) {
            console.log('radioChange', index);
            this.radios[index] = true;
            console.log('this.radios', this.radios);
        },
        activatePanel(index) {
            this.panel = this.panel === index - 1 ? [] : index - 1;
        },
        clickDetail() {
            console.log('clickDetail');
            this.$router.push('/talent-selection/detail')
        },
        parseDate (date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
    },
}
</script>
<style scoped>
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
    border-radius: 10px;
    border: 1px solid #AE445A;
}
.div {
    position: absolute;
    height: 16.81%;
    width: 36.97%;
    top: 6.72%;
    left: 8.4%;
    display: inline-block;
  }
  .date {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 10px;
    width: 59.57px;
    height: 46.15px;
  }
  .week-1 {
    width: 59.57px;
    position: relative;
    height: 46.15px;
  }
  .div1 {
    position: absolute;
    height: 16.81%;
    width: 28.57%;
    top: 6.72%;
    left: 9.23%;
    display: inline-block;
  }
  .div2 {
    position: absolute;
    height: 16.55%;
    width: 18.62%;
    top: 6.76%;
    left: 8.79%;
    display: inline-block;
  }
  .week-4 {
    width: 59.57px;
    position: relative;
    height: 46.15px;
    color: rgba(64, 64, 65, 0.4);
  }
  .date-square-child2 {
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

  .date-square-child {
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
  .week-6 {
    width: 59.57px;
    position: relative;
    height: 46.15px;
    color: rgba(174, 68, 90, 0.4);
  }
  .week-1-parent {
    position: absolute;
    top: 261px;
    left: 1px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 447.54px;
    height: 50.68px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
  }
  .date7 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: 10px;
  }
  .week-71 {
    width: 59.55px;
    position: relative;
    height: 45.96px;
    color: #ae445a;
  }
  .date-square-child5 {
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
  .date8 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 10px;
    border: 3px solid #3b78c2;
    box-sizing: border-box;
    width: 59.55px;
    height: 45.96px;
  }
  .week-21 {
    width: 59.55px;
    position: relative;
    height: 45.96px;
  }
  .date9 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 10px;
    width: 59.55px;
    height: 45.96px;
  }
  .date13 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 10px;
    width: 60px;
    height: 46px;
  }
  .week-8 {
    width: 60px;
    position: relative;
    height: 46px;
    color: #ae445a;
  }
  .week-7-parent {
    position: absolute;
    top: 24.89px;
    left: 1px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 448px;
    height: 50.48px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
  }
  .date14 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 10px;
    width: 59.54px;
    height: 45.83px;
  }
  .week-11 {
    width: 59.54px;
    position: relative;
    height: 45.83px;
  }
  .div16 {
    position: absolute;
    height: 16.92%;
    width: 40.61%;
    top: 6.77%;
    left: 8.15%;
    display: inline-block;
  }
  .date-square-child14 {
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
  .div17 {
    position: absolute;
    height: 16.92%;
    width: 37.23%;
    top: 6.77%;
    left: 7.99%;
    display: inline-block;
  }
  .date17 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 10px;
    border: 1.5px solid #3ab471;
    box-sizing: border-box;
    width: 59.54px;
    height: 45.83px;
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
  .div18 {
    position: absolute;
    height: 16.92%;
    width: 33.85%;
    top: 6.77%;
    left: 9.53%;
    display: inline-block;
  }
  .jadwal-container {
    position: absolute;
    height: 28.77%;
    width: 74.46%;
    top: 46.9%;
    right: 12.63%;
    bottom: 24.34%;
    left: 12.91%;
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
  .date18 {
    position: absolute;
    top: -1.5px;
    left: -1.5px;
    border-radius: 10px;
    border: 1.5px solid #3ab471;
    box-sizing: border-box;
    width: 62.54px;
    height: 48.83px;
  }
  .div19 {
    position: absolute;
    height: 16.92%;
    width: 33.85%;
    top: 6.77%;
    left: 9.37%;
    display: inline-block;
  }
  .week-61 {
    width: 59.54px;
    position: relative;
    height: 45.83px;
    color: #ae445a;
  }
  .div20 {
    position: absolute;
    height: 16.92%;
    width: 38.92%;
    top: 6.77%;
    left: 9.21%;
    display: inline-block;
  }
  .week-1-group {
    position: absolute;
    top: 84px;
    left: 1px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 444.64px;
    height: 50.33px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
  }
  .div21 {
    position: absolute;
    height: 16.91%;
    width: 33.82%;
    top: 6.76%;
    left: 8.45%;
    display: inline-block;
  }
  .date21 {
    position: absolute;
    top: -1.5px;
    left: -1.5px;
    border-radius: 10px;
    border: 1.5px solid #3ab471;
    box-sizing: border-box;
    width: 62.54px;
    height: 48.86px;
  }
  .jadwal-frame {
    position: absolute;
    height: 28.75%;
    width: 74.4%;
    top: 47.68%;
    right: 12.07%;
    bottom: 23.57%;
    left: 13.53%;
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
  .week-12 {
    width: 59.54px;
    position: relative;
    height: 45.86px;
  }
  .div22 {
    position: absolute;
    height: 16.91%;
    width: 35.51%;
    top: 6.76%;
    left: 8.22%;
    display: inline-block;
  }
  .jadwal-wrapper1 {
    position: absolute;
    height: 28.75%;
    width: 74.4%;
    top: 47.68%;
    right: 12.31%;
    bottom: 23.57%;
    left: 13.29%;
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
  .div23 {
    position: absolute;
    height: 16.91%;
    width: 35.51%;
    top: 6.76%;
    left: 7.98%;
    display: inline-block;
  }
  .jadwal-wrapper2 {
    position: absolute;
    height: 28.75%;
    width: 74.4%;
    top: 47.68%;
    right: 12.54%;
    bottom: 23.57%;
    left: 13.06%;
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
  .div24 {
    position: absolute;
    height: 16.91%;
    width: 40.58%;
    top: 6.76%;
    left: 9.44%;
    display: inline-block;
  }
  .date24 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 10px;
    width: 59.54px;
    height: 45.86px;
  }
  .week-62 {
    width: 59.54px;
    position: relative;
    height: 45.86px;
    color: #ae445a;
  }
  .div25 {
    position: absolute;
    height: 16.91%;
    width: 32.13%;
    top: 6.76%;
    left: 9.2%;
    display: inline-block;
  }
  .jadwal-wrapper3 {
    position: absolute;
    height: 28.75%;
    width: 74.4%;
    top: 47.68%;
    right: 13.02%;
    bottom: 23.57%;
    left: 12.58%;
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
  .div26 {
    position: absolute;
    height: 16.91%;
    width: 37.2%;
    top: 6.76%;
    left: 8.96%;
    display: inline-block;
  }
  .week-1-container {
    position: absolute;
    top: 143px;
    left: 1px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 444.97px;
    height: 50.37px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
  }
  .div28 {
    position: absolute;
    height: 16.81%;
    width: 33.61%;
    top: 6.72%;
    left: 8.4%;
    display: inline-block;
  }
  .div29 {
    position: absolute;
    height: 16.81%;
    width: 36.97%;
    top: 6.72%;
    left: 9.23%;
    display: inline-block;
  }
  .div30 {
    position: absolute;
    height: 16.81%;
    width: 30.25%;
    top: 6.72%;
    left: 8.38%;
    display: inline-block;
  }
  .div31 {
    position: absolute;
    height: 16.81%;
    width: 33.61%;
    top: 6.72%;
    left: 9.21%;
    display: inline-block;
  }
  .div32 {
    position: absolute;
    height: 16.81%;
    width: 26.89%;
    top: 6.72%;
    left: 8.37%;
    display: inline-block;
  }
  .div33 {
    position: absolute;
    height: 16.81%;
    width: 25.21%;
    top: 6.72%;
    left: 9.2%;
    display: inline-block;
  }
  .week-63 {
    width: 59.57px;
    position: relative;
    height: 46.15px;
    color: #ae445a;
  }
  .div34 {
    position: absolute;
    height: 16.81%;
    width: 28.57%;
    top: 6.72%;
    left: 8.35%;
    display: inline-block;
  }
  .week-1-parent1 {
    position: absolute;
    top: 202px;
    left: 1px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 447.54px;
    height: 50.68px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
  }
  .senin {
    position: absolute;
    top: 0px;
    left: 0px;
    color: #646464;
    display: inline-block;
    width: 55.87px;
    height: 14.48px;
  }
  .selasa {
    position: absolute;
    top: 0px;
    left: 62.98px;
    display: inline-block;
    width: 58.92px;
    height: 14.48px;
  }
  .rabu {
    position: absolute;
    top: 0px;
    left: 133.08px;
    display: inline-block;
    width: 55.87px;
    height: 14.48px;
  }
  .kamis {
    position: absolute;
    top: 0px;
    left: 196.06px;
    display: inline-block;
    width: 53.84px;
    height: 14.48px;
  }
  .jumat {
    position: absolute;
    top: 0px;
    left: 261.08px;
    display: inline-block;
    width: 55.87px;
    height: 14.48px;
  }
  .sabtu {
    position: absolute;
    top: 0px;
    left: 328.13px;
    color: #ae445a;
    display: inline-block;
    width: 54.86px;
    height: 14.48px;
  }
  .minggu {
    position: absolute;
    top: 0px;
    left: 391.11px;
    color: #ae445a;
    display: inline-block;
    width: 56.89px;
    height: 14.48px;
  }
  .days-of-week {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 448px;
    height: 14.48px;
    text-align: center;
  }
  .frame-group {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 449px;
    height: 311.68px;
  }
  .group-wrapper {
    /* position: absolute;
    top: 101px;
    left: 0px; */
    width: 449px;
    height: 311.68px;
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
    min-height: 359px;
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
  .juli-2023 {
    width: 63px;
    position: relative;
    font-weight: 600;
    display: inline-block;
    height: 13px;
    flex-shrink: 0;
  }
  .hari-buruh-sedunia {
    width: 69px;
    position: relative;
    font-size: 7px;
    display: inline-block;
    height: 13px;
    flex-shrink: 0;
  }
  .juli-2023-parent {
    width: 87px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 10px;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 10px;
  }
.holidays-box {
    width: 87px;
    height: 140px;
  }
.rectangle-parent {
    width: 100%;
    height: 359px;
    font-size: 8px;
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
  .tahan-ctrl-untuk {
  }
.mei-2023 {
    font-family: Poppins;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.table-btn {
    cursor: pointer;
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    font-size: 12px;
    color: #fff;
    line-height: 50px;
    width: fit-content;
    margin: auto;
}
.panel-table {
    width: 100%;
    /* background-color: yellow; */
}
.panel-table-item td {
    padding-top: 10px;
}
.panel-table tr th{
    color: #AE445A;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.list-item-name {
    color: #AE445A;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
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
.text-tahap {
    color: #FFF;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.text-tahap-desc {
    color: #FFF;
    text-align: justify;
    font-family: Poppins;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.generate-btn {
    cursor: pointer;
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    font-size: 12px;
    color: #fff;
    line-height: 50px;
    margin-left: 20px;
}
.card-ts {
    height: 111px;
    color: #fff;
    margin: unset;
    position: relative;
    border-radius: 10px;
    background: linear-gradient(90deg, #F39F5A 0%, #AE445A 100%);
}
.card-ts.terminate {
    background: linear-gradient(90deg, #718199 0%, #B6B6B6 100%) !important;
}
.card-ts.terminate .schedule-container {
    border-radius: 20px;
    background-color: #718199;
    height: 17px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    font-size: 10px;
    color: #fff;
}

.edit-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;
}
.foto-tahap1-icon {
    width: 50px;
    height: 50px;
    padding: 2px;
    border-radius: 50%;
    border: 3px solid #ae445a;
}
.history-1 {
    width: 100%;
    height: 71px;
}
.frame-parent-ts {
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 100%;
    height: 71px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
}
.foto-tahap1-parent {
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
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
.value9 {
    width: 268px;
    height: 75px;
}
.date2 {
    border-radius: 4px;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 120px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 4px 10px;
    gap: 10px;
    font-size: 12px;
}
.input-checkbox-container{
    display: flex;
    column-gap: 20px;
    flex-direction: row;
}
.checkbox-label {
    font-size: 12px;
    font-weight: 400;
    line-height: 0px;
    margin-left: -5px;
}
.attach-mpr-parent {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.frame-container {
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    width: 135px;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    font-size: 12px;
    color: #fff;
    line-height: 50px;
}
.gear-icon {
    width: 25px;
    height: 29px;
    overflow: hidden;
    flex-shrink: 0;
    margin-left: 5px;
}
.isilah-13-kolom-container {
    font-size: 18px;
    color: #ae445a;
    text-align: left;
    line-height: 15px;
}
.job-post-nav {
    width: 100%;
    display: flex;
    flex-direction: row;
}
.job-post-nav-text {
    width: 100%;
    text-align: center;
}
.job-post-nav-container {
    width: 100%;
    height: 74px;
    font-size: 20px;
    font-weight: 900;
    color: #ae445a;
    display: flex;
    align-items: center;
    font-family: Nunito;
    background-color: #ffffff;
    border-radius: 30px 30px 0px 0px;
}
.job-post-nav-container.active {
    color: #ffffff;
    background-color: #ae445a;
}
.card-register {
    border-radius: 40px;
    background: linear-gradient(90deg, #F1F5FE 0%, #FFF 98.82%);
    box-shadow: 5px 0px 5px #b3b9c5, -5px 0px 5px #b3b9c5 !important;
}

.link-button {
    width: 100%;
    height: 741px;
    display: flex;
    border-radius: 10px;
    font-size: 18px;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    background: linear-gradient(90deg, #F1F5FE 0%, #FFF 98.82%);
    filter: drop-shadow(5px 0px 5px #B3B9C5) drop-shadow(-5px 0px 5px #B3B9C5);
  }
  .filter {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 7px 25px 25px 23px;
  }
  .wrapper-rectangle-4154 {
    width: 100%;
    position: absolute;
    margin: 0 !important;
    height: 100%;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
  }
  .wrapper-rectangle-4154-child {
    width: 100%;
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
    position: absolute;
    left: 0px;
    top: 0px;
    transform: scale(1.088);
  }
  .checkbox-selected7 {
    accent-color: #f4f7fe;
    margin: 0;
    width: 14px;
    height: 14px;
    position: relative;
  }
  .checkbox-selected-frame {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 7px;
  }
  .checkbox-selected6 {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 3px 0px;
  }
  .sertifikat-keahlian {
    margin: 0;
    position: relative;
    font-size: inherit;
    line-height: 140.63%;
    font-weight: 400;
    font-family: inherit;
  }
  .bodyblock3 {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 27px 7px 16px;
  }
  .filter-pendidikan {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
    font-size: 12px;
    color: #ae445a;
  }
  .pendidikan {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 14px;
    z-index: 1;
  }
  .link-job-opening {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
  }
  .filter1 {
    margin: 0;
    height: 27px;
    font-size: 18px;
    color: #404041;
    font-weight: 700;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    display: inline-block;
    line-height: normal;
    font-family: Poppins;
  }
  .pendidikan1 {
    margin: 0;
    height: 27px;
    font-size: 18px;
    font-weight: 400;
    color: #404041;
    font-family: Poppins;
    font-family: inherit;
    display: inline-block;
  }
  .filter-pendidikan {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
    font-size: 12px;
    color: #ae445a;
    margin-top: -7px;
  }
  
  .frame-title {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 7px;
  }
  .checkbox-selected {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 3px 0px;
  }
  .checkbox-selected-red {
    margin: 0;
    width: 14px;
    height: 14px;
    position: relative;
    color: #AE445A;
    accent-color: #AE445A;
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
    align-items: flex-end;
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
  .radiobutton {
    border-color: #3b78c2;
    accent-color: #3b78c2;
    cursor: pointer;
    margin: 0;
    height: 24px;
    width: 24px;
    border-radius: 12px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2px;
    box-sizing: border-box;
    z-index: 1;
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
  .mei-20231 {
    position: relative;
    z-index: 1;
  }
  .eyecirclefill-icon1 {
    height: 12px;
    width: 12px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    min-height: 12px;
    z-index: 1;
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