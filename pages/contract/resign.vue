<template>
    <div>
        <v-card class="card-register" style="min-height: 800px;">
            <div class="my-2" style="position: relative;">
                <div class="blokade-parent ma-8 pt-1">
                    
                    <div class="" style="position: relative;">
                        <div class="blokade-parent mt-8 pt-1">
                            <v-row align="center" class="mb-0">
                                <v-col cols="12" class="text-left">
                                    <div class="pretest-title">
                                        Contract
                                    </div>
                                </v-col>
                            </v-row>

                            <div class="list-container" :style="'height: 745px;'" style="overflow-x: auto;">
                                <div class="mb-0">
                                    <v-row align="center" class="ma-0 mb-4 pa-2 pl-0">
                                        <v-col cols="12" class="pa-0 mt-4 mb-10">
                                            <div class="contract-todo-title text-left mb-1">Informasi Kontrak Saat ini</div>
                                            <div class="frame-contract-todo pt-2 px-2">
                                                <div class="frame-div text-left d-flex">
                                                    <div class="jun-2023-wrapper" style="width: 200px;">
                                                        <b class="text-sent">Tanggal Masuk:</b>
                                                    </div>
                                                    <div class="text-list-todo">20 Agt 2023</div>
                                                </div>
                                                <div class="frame-div"></div>
                                            </div>
                                            <div class="frame-contract-todo pt-2 px-2">
                                                <div class="frame-div text-left d-flex">
                                                    <div class="jun-2023-wrapper" style="width: 200px;">
                                                        <b class="text-sent">Tanggal Keluar:</b>
                                                    </div>
                                                    <div class="text-list-todo">19 Agt 2025</div>
                                                </div>
                                                <div class="frame-div"></div>
                                            </div>
                                            <div class="frame-contract-todo pt-2 px-2">
                                                <div class="frame-div text-left d-flex">
                                                    <div class="jun-2023-wrapper" style="width: 200px;">
                                                        <b class="text-sent">Tipe Kontrak:</b>
                                                    </div>
                                                    <div class="text-list-todo">Contract</div>
                                                </div>
                                                <div class="frame-div"></div>
                                            </div>
                                            
                                        </v-col>
                                        <v-col cols="12" class="pa-0 mt-4 mb-10">
                                            <div class="contract-todo-title text-left mb-1">Informasi Pengajuan Resign</div>
                                            <div class="frame-contract-todo pt-2 px-2 mt-4">
                                                <div class="frame-div text-left d-flex">
                                                    <div class="jun-2023-wrapper" style="width: 200px;">
                                                        <b class="text-sent">Tanggal Pengajuan Resign: </b>
                                                    </div>
                                                    <v-menu
                                                        ref="datePicker1"
                                                        v-model="datePicker1"
                                                        :close-on-content-click="false"
                                                        transition="scale-transition"
                                                        offset-y
                                                        min-width="auto"
                                                        >
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <div v-on="on" style="position: relative;">
                                                                <input
                                                                v-model="schedule"
                                                                v-bind="attrs"
                                                                @blur="schedule = parseDate(schedule)"
                                                                outlined readonly
                                                                class="register-text-input"
                                                                placeholder="2024-11-06"
                                                                />
                                                                <img class="feather-icon-calendar" alt="" src="@/assets/svg/feathericon--calendar.svg" />
                                                            </div>
                                                        </template>
                                                        <v-date-picker
                                                            @input="datePicker1 = false"
                                                            plas v-model="schedule" no-title
                                                        ></v-date-picker>
                                                    </v-menu>
                                                </div>
                                                <div class="frame-div"></div>
                                            </div>
                                            <div class="frame-contract-todo pt-2 px-2 mt-4">
                                                <div class="frame-div text-left d-flex">
                                                    <div class="jun-2023-wrapper" style="width: 200px;">
                                                        <b class="text-sent">Alasan Pengajuan Resign:</b>
                                                    </div>
                                                    <div style="width: 400px;">
                                                        <TextEditor v-model="main_text" class="rich-editor" placeholder="Masukkan Isi Pesan"/>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </v-col>

                                        <v-col cols="12" class="mb-0 pb-0">
                                            <p class="download-warning">*Silahkan gunakan template di bawah untuk digunakan sebagai File Attachment<br>pada saat mengirimkan pesan pengunduran diri (di halaman selanjutnya).</p>
                                        </v-col>
                                        <v-col cols="12" class="">
                                            <div class="history-1">
                                                <div class="frame-parent-draft">
                                                    <div class="foto-perusaahaan-parent" style="width: 400px;">
                                                        <img
                                                            alt="micosoft-excel"
                                                            class="micosoft-excel"
                                                            src="@/assets/svg/microsoft-word.svg"
                                                        />
                                                        <b class="">Template Contoh Attachment Surat Pengunduran Diri</b>
                                                    </div>
                                                    <div :class="data?.have_simulation ? 'orange-btn' : 'grey-btn'" @click="data?.have_simulation ? downloadCSV() : false">
                                                        <div class="">
                                                            <b class="button mx-3">Download</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>


                            <div style="position: relative; display: flex; justify-content: end; column-gap: 20px; margin-top: 21px; padding-bottom: 30px;">
                                <div class="orange-btn" style="">
                                    <div class="" @click="">
                                        <b class="button mx-4">Continue</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-card>
    </div>
</template>
<script>

import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
import TextEditor from "~/components/TextEditor";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
    name: "Contract",
    middleware: "jobSeeker",
    components: { 
        TextEditor,
        Multiselect,
    },
    data: () => ({
        schedule: null,
        datePicker1: false,
        // pretests: [],
    }),
    watch: {},
    computed: {
		...mapState('seeker-pretest', ['pretests']),
    },
    setup() {
        const { getListPretest } = API()
        return { getListPretest };
    },
    async mounted() {
        // await this.getPretest();
    },
    methods: {
		...mapActions('seeker-pretest', ['getPretest']),
        ...mapMutations('seeker-pretest', ['setJobID', 'setModuleID', 'setCategoryID']),

        parseDate (date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.download-warning {
    color: #404041;
    font-size: 8px;
    font-style: italic;
    font-family: Poppins;
}

.history-1 {
    width: 100%;
    height: 71px;
}
.frame-parent-draft {
    border-radius: 10px;
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
.foto-perusaahaan-parent {
    width: 210px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
}

.register-text-input {
    border-radius: 10px;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 100%;
    height: 47px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    font-size: 12px;
    /* color: #b6b6b6; */
}.register-text-input::placeholder {
    font-style: italic;
}

.feather-icon-calendar {
    top: 25%;
    right: 7%;
    width: 20px;
    height: 20px;
    position: absolute;
}
.pretest-title {
    color: #AE445A;
    /* Title */
    font-family: Nunito;
    font-size: 26px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}
.list-pretest {
    border-radius: 10px;
    border: 1px solid #AE445A;
}
.text-sent {
    color: #404041;
    font-size: 12px;
    font-weight: bold;
    font-style: normal;
    font-family: Poppins;
    line-height: 35px; /* 158.333% */
}
.text-list-todo {
    color: #404041;
    font-size: 12px;
    font-weight: 300;
    font-style: normal;
    font-family: Poppins;
    line-height: 35px; /* 158.333% */
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
.milestones-item {
    width: 90%;
    height: 14.74%;
    margin-bottom: -4%;
    background-color: #f0f0f0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15) inset;
    margin-right: auto;
    margin-left: auto;
}
@media only screen and (max-width: 750px) {
    .milestones-item {
        width: 80%;
    }
}
.round-child {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    background-color: #f0f0f0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
    width: 40px;
    height: 40px;
}
.vector-icon {
    position: absolute;
    height: 40.54%;
    width: 50.95%;
    top: 29.77%;
    right: 23.52%;
    bottom: 29.69%;
    left: 25.53%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    display: none;
}
.b2 {
    position: absolute;
    height: 82.35%;
    width: 41.18%;
    top: 11.76%;
    left: 29.41%;
    letter-spacing: 0.01em;
    display: flex;
    align-items: center;
    justify-content: center;
}
.vector-icon1 {
    position: absolute;
    height: 40.54%;
    width: 50.95%;
    top: 29.77%;
    right: 23.52%;
    bottom: 29.69%;
    left: 25.53%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
}
.b3 {
    position: absolute;
    height: 82.35%;
    width: 41.18%;
    top: 11.76%;
    left: 29.41%;
    letter-spacing: 0.01em;
    display: none;
    align-items: center;
    justify-content: center;
}
.bicheck1 {
    position: absolute;
    top: 6.5px;
    left: 6.5px;
    border-radius: 15.88px;
    background: linear-gradient(180deg, #f39f5a, #ae445a);
    width: 27px;
    height: 27px;
    overflow: hidden;
}
.round {
    position: relative;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    overflow: hidden;
    flex-shrink: 0;
}
.crown-icon {
    position: absolute;
    top: 0px;
    left: 41.5px;
    width: 12px;
    height: 30px;
}
.process-name {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 26px;
    background-color: #f0f0f0;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1) inset;
    width: 95px;
    height: 31px;
}
.on-color {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 26px;
    background: linear-gradient(180deg, #f39f5a, #ae445a);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1) inset;
    width: 95px;
    height: 31px;
}
.fill-in {
    position: absolute;
    top: 6px;
    left: 31.5px;
    letter-spacing: 0.01em;
}
.primery {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 95px;
    height: 31px;
    font-size: 12px;
    color: #fff;
    font-family: Poppins;
}
.box {
    position: absolute;
    top: 10px;
    left: 0px;
    width: 95px;
    height: 33px;
}
.sub {
    position: relative;
    width: 95px;
    height: 43px;
    font-size: 16px;
    color: #8c8c8c;
}
.steps-process {
    height: 89px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 19.85px;
    font-family: Roboto;
}
.bicheck2 {
    position: absolute;
    top: 6.5px;
    left: 6.5px;
    border-radius: 15.88px;
    background-color: #bfbfbf;
    width: 27px;
    height: 27px;
    overflow: hidden;
}
.crown-icon1 {
    position: absolute;
    top: 0px;
    left: 41.5px;
    width: 12px;
    height: 10px;
}
.preview {
    position: absolute;
    top: 6px;
    left: 22.5px;
    letter-spacing: 0.01em;
}
.pretest {
    position: absolute;
    top: 6px;
    left: 10px;
    letter-spacing: 0.01em;
}
.sub1 {
    position: relative;
    width: 95px;
    height: 43px;
    color: #404041;
}
.steps-process1 {
    width: 95px;
    height: 87px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.publish {
    position: absolute;
    top: 6px;
    left: 24.5px;
    letter-spacing: 0.01em;
}
.stepts {
    position: absolute;
    height: 100%;
    width: 100%;
    top: -15%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.milestones {
    margin: auto;
    width: 85%;
    height: 95px;
    color: #fff;
    text-align: center;
    position: relative;
}
@media only screen and (max-width: 600px) {
    .milestones {
        width: 100%;
    }
}
.blokade-parent {
    font-size: 12px;
}
.line-after {
    position: relative;
    border-top: 1px solid #b6b6b6;
    box-sizing: border-box;
    width: 851px;
    height: 1px;
}
.subpretest-item {
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 3px solid #ae445a;
    box-sizing: border-box;
    width: 161px;
    height: 31px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
}
.subpretest-item b {
    margin: auto;
}
.edit-parent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
}
.edit-icon {
    position: relative;
    width: 12px;
    height: 12px;
    overflow: hidden;
    flex-shrink: 0;
}
.contract-todo-title {
    color: #AE445A;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 5px;
    border-bottom: 2.5px solid #AE445A;
}
.frame-contract-todo {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.parent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
}
.attach-mpr-parent {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
.card-register {
    min-height: 882px;
    border-radius: 40px;
    background: linear-gradient(90deg, #F1F5FE 0%, #FFF 98.82%);
    box-shadow: 5px 0px 5px #b3b9c5, -5px 0px 5px #b3b9c5 !important;
}
.label {
    font-size: 14px;
    text-align: left;
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

.blokade-parent {
    font-size: 12px;
}

</style>
