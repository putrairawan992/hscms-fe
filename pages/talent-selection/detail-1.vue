<template>
    <div>
        <v-card class="card-register">
            <div class="my-2" style="position: relative;">
                <div class="blokade-parent ma-8 pt-1" style="">
                    <v-row align="center" class="my-4">
                        <v-col cols="12" class="text-left">
                            <div class="open-job-dan-draft">
                                Talent Selection
                            </div>
                        </v-col>
                    </v-row>
                    <div style="height: 760px; overflow-y: auto; overflow-x: hidden">
                        <!-- <div class="text-left text-soal-dan mb-4">
                            <b>Soal dan Jawaban</b>
                        </div>
                        <v-row class="" align="start" style="">
                            <v-col cols="12" class="detail-selection-card mb-6">
                                <div class="history-1">
                                    <div class="frame-detail-text-question">
                                        <ol class="w-100"><li>
                                            <div class="text-left detail-text-question">
                                                Silahkan kerjakan rumus excel dengan panduan yang tersedia disini: https://adsdsdsdsd Beri nama file sesuai instruksi yang tersedia di link terkait.
                                            </div>
                                        </li></ol> 
                                        <v-row class="mt-2" style="border-bottom: 2px solid #AE445A;">
                                            <v-col cols="4">
                                                <b>Tes Excel Pegawai ABC 1. XLS</b>
                                            </v-col>
                                            <v-col cols="4">
                                                18 Juli 2023
                                            </v-col>
                                            <v-col cols="4">
                                                <div class="edit-parent">
                                                    <img class="" alt="" src="@/assets/svg/eye-circle.svg" />
                                                    <img class="" alt="" src="@/assets/svg/arrow-down-to-line.svg" @click="" />
                                                </div>
                                            </v-col>
                                        </v-row>
                                        <v-row class="mt-2" >
                                            <v-col cols="4" class="text-left" style="display: flex; align-items: center;">
                                                <b>Score:</b>
                                            </v-col>
                                            <v-col cols="8" class="pb-2">
                                                <v-text-field
                                                    placeholder="Masukkan nilai 1 - 100" 
                                                    solo class="search-text-field"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" class="detail-selection-card mb-6">
                                <div class="history-1">
                                    <div class="frame-detail-text-question">
                                        <ol class="w-100"><li>
                                            <div class="text-left detail-text-question">
                                                Soal nomor satu,  jabarkan/tulis essai mengenai apa gitu
                                            </div>
                                        </li></ol> 
                                        <v-row class="mt-2" style="border-bottom: 2px solid #AE445A;">
                                            <v-col cols="12">
                                                <TextEditor v-model="html" class="rich-editor" placeholder="Silahkan jawab pertanyaan dengan jawaban yang sesuai"/>
                                            </v-col>
                                        </v-row>
                                        <v-row class="mt-2" >
                                            <v-col cols="4" class="text-left" style="display: flex; align-items: center;">
                                                <b>Score:</b>
                                            </v-col>
                                            <v-col cols="8" class="pb-2">
                                                <v-text-field
                                                    placeholder="Masukkan nilai 1 - 100" 
                                                    solo class="search-text-field"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </div>
                                </div>
                            </v-col>
                        </v-row> -->

                        <v-row class="" align="start" style="">
                            <v-col cols="3">
                                <div class="text-left text-soal-dan mb-4">
                                    <b>Jawaban Peserta</b>
                                </div>
                                <ol class="w-100">
                                    <li v-for="n in 26" :key="n" class="mb-2">
                                        <div class="text-left detail-text-question">
                                            B. Jawaban yang Benar
                                        </div>
                                    </li>
                                </ol> 
                            </v-col>
                            <v-col cols="3">
                                <div class="text-left text-soal-dan mb-4">
                                    <b>Jawaban Soal</b>
                                </div>
                                <ol class="w-100">
                                    <li v-for="n in 26" :key="n" class="mb-2">
                                        <div class="text-left detail-text-question">
                                            B. Jawaban yang Benar
                                        </div>
                                    </li>
                                </ol> 
                            </v-col>
                            <v-col cols="6">
                                <div class="text-center text-soal-dan mb-6 mt-2">
                                    <b>Total Jawaban Salah:</b>
                                    <div class="text-center detail-text">
                                        15/65 Jawaban
                                    </div>
                                </div>
                                <div class="text-center text-soal-dan mb-6">
                                    <b>Total Jawaban Benar:</b>
                                    <div class="text-center detail-text">
                                        50/65 Jawaban
                                    </div>
                                </div>
                                <div class="text-center text-soal-dan mb-6">
                                    <b>Nilai Akhir:</b>
                                    <div class="text-center nilai-text">
                                        76
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </div>

                </div>
            </div>
        </v-card>
        <Dialog-JobDetail :show="showDialog" :closeDialog="closeDialog"/>
        <AlertApproval content="Lowongan akan dihentikan. Anda yakin ingin menghentikan?" :onApprove="closeAlertApproval" :closeDialog="closeAlertApproval" :show="showAlertApproval"/>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
    name: "jobProvider",
    layout: "jobPost",
    components: { 
        Multiselect,
    },
    data: () => ({
        select1: null,
        html: null,
        showDialog: false,
        showAlertApproval: false,

        arrayJalur: ['Seleksi', 'Non-Seleksi'],
        arrayJobOpening: ['Marketing Staff', 'UI/UX Designer', 'Graphic Designer'],
        arrayTahapan: ['Tahap 1', 'Tahap 2', 'Tahap 3', 'Tahap 4'],
    }),
    watch: {
    },
    methods: {
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
.nilai-text {
    color: #ae445a;
    font-family: Nunito;
    font-size: 26px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}
.detail-selection-card{
    min-height: 164px;;
}
.text-soal-dan {
    color: #404041;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.edit-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
}
.detail-text-question {
    color: #404041;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 553px;
}
.detail-text {
    color: #404041;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.history-1 {
    width: 100%;
    /* height: 71px; */
}
.frame-detail-text-question {
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
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

.blokade-parent {
    font-size: 12px;
}

</style>
