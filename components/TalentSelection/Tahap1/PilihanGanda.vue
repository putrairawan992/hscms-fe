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
                    <div  style="height: 760px; overflow-y: auto; overflow-x: hidden">
                        <v-row v-if="data" align="start" style="">
                            <v-col cols="3">
                                <div class="text-left text-soal-dan mb-4">
                                    <b>Jawaban Peserta</b>
                                </div>
                                <ol class="w-100" v-if="data.detail.length">
                                    <li v-for="value, key in data.detail" class="mb-2">
                                        <div class="text-left detail-text-question">
                                            <span style="text-transform: uppercase;">{{ value?.answer_user[0].alphabet }}</span>. 
                                            Jawaban yang {{value?.answer_user[0].alphabet == value?.choise_question[0].alphabet ? 'Benar' : 'Salah'}}
                                        </div>
                                    </li>
                                </ol> 
                            </v-col>
                            <v-col cols="3">
                                <div class="text-left text-soal-dan mb-4">
                                    <b>Jawaban Soal</b>
                                </div>
                                <ol class="w-100" v-if="data.detail.length">
                                    <li v-for="value, key in data.detail" class="mb-2">
                                        <div class="text-left detail-text-question">
                                            <span style="text-transform: uppercase;">{{ value?.choise_question[0].alphabet }}</span>. 
                                            Jawaban yang Benar
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
                                        {{ tahapanGetter.detail.module.score }}
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </div>

                    <div style="position: relative; display: flex; justify-content: end; column-gap: 20px; margin-top: 30px; padding-bottom: 30px;">
                        <div></div>
                        <div class="orange-btn">
                            <div class="" @click="$router.push('/talent-selection')">
                                <b class="button mx-4">Save</b>
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
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    name: "jobProvider",
    layout: "jobPost",
    components: {},
    data: () => ({
        data: null,
        showDialog: false,
        showAlertApproval: false,
    }),
    watch: {
    },
    setup() {
        const { getDetailAnswerAPI, putInputScore, postFinishScoring } = API()
        return { getDetailAnswerAPI, putInputScore, postFinishScoring };
    },
    computed: {
        ...mapState('provider-selection', ['detailAnswer']),
        ...mapGetters('provider-selection', ['tahapanGetter']),
    },
    async mounted(){
        await this.getData();
        this.data = this.detailAnswer;
        console.log('this.data', this.data);
    },
    methods: {
        ...mapMutations('provider-selection', ['setDetailAnswer']),
        async getData(){
            let job_post_id = this.tahapanGetter.jobSelected?.id;
            let job_seeker_id = this.tahapanGetter.detail?.job_seeker_id;
            let pretest_modul_detail_id = this.tahapanGetter.detail?.module?.pretest_modul_detail_id;

            await this.getDetailAnswerAPI(job_seeker_id, job_post_id, pretest_modul_detail_id).then((result)=>{
                if(result){ this.setDetailAnswer(result); }
            })
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
