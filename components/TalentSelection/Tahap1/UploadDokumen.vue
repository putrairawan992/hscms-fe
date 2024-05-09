<template>
    <div>
        <v-card class="card-register">
            <div class="my-2" style="position: relative;">
                <div class="blokade-parent ma-8 pt-1 pb-8" style="">
                    <v-row align="center" class="my-4">
                        <v-col cols="12" class="text-left">
                            <div class="open-job-dan-draft">
                                Talent Selection
                            </div>
                        </v-col>
                    </v-row>
                    <div style="height: 760px; overflow-y: auto; overflow-x: hidden">
                        <div class="text-left text-soal-dan mb-4">
                            <b>Soal dan Jawaban</b>
                        </div>
                        <v-row v-if="detailAnswer" class="ma-auto">
                            <v-col v-for="value, key in detailAnswer.detail" cols="12" class="detail-selection-card mb-8" style="min-height: 200px;">
                                <div class="history-1">
                                    <div class="frame-detail-text-question">
                                        <ol class="w-100 pt-2"><li :value="key+1">
                                            <div class="detail-text-question text-left" v-html="value.question"></div>
                                        </li></ol> 
                                        <v-row class="mt-2" style="border-bottom: 2px solid #AE445A;">
                                            <v-col cols="4" class="text-left">
                                                <b>{{ getFileName(value.answer) }}</b>
                                            </v-col>
                                            <v-col cols="4">
                                                -
                                            </v-col>
                                            <v-col cols="4">
                                                <div class="edit-parent">
                                                    <!-- <img class="" alt="" src="@/assets/svg/eye-circle.svg" /> -->
                                                    <a :href="value.answer" target="_blank">
                                                        <img alt="preview" src="@/assets/svg/eye-circle.svg" />
                                                    </a>
                                                    <a @click="downloadFile(value)">
                                                        <img alt="download" src="@/assets/svg/arrow-down-to-line.svg" />
                                                    </a>
                                                </div>
                                            </v-col>
                                        </v-row>
                                        <v-row class="mt-2" >
                                            <v-col cols="4" class="text-left" style="display: flex; align-items: center;">
                                                <b>Score:</b>
                                            </v-col>
                                            <v-col cols="8" class="pb-2">
                                                <v-text-field
                                                    placeholder="Masukkan nilai 1 - 100" :value="value.score"
                                                    solo class="search-text-field" @input="debounceInput($event, value)"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                        <div style="position: relative; display: flex; justify-content: end; column-gap: 20px; margin-top: 30px; padding-bottom: 30px;">
                            <div></div>
                            <div class="orange-btn">
                                <div class="" @click="finishScoring">
                                    <b class="button mx-4">Save</b>
                                </div>
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
import debounce from 'debounce';
import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
    name: "jobProvider",
    layout: "jobPost",
    components: { 
        Multiselect,
    },
    data: () => ({
        showDialog: false,
        showAlertApproval: false,
    }),
    watch: {},
    setup() {
        const { getDetailAnswerAPI, putInputScore, getFileAnswer, postFinishScoring } = API()
        return { getDetailAnswerAPI, putInputScore, getFileAnswer, postFinishScoring };
    },
    computed: {
        ...mapState('provider-selection', ['detailAnswer']),
        ...mapGetters('provider-selection', ['tahapanGetter']),
    },
    async mounted(){
        this.getData();
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
        debounceInput: debounce( async function (answer, question) {
            await this.putInputScore({
                apply_job_answer: question.apply_job_answer_id,
                score: answer
            }, question.pretest_modul_detail_id).then((result)=>{
                this.getData();
            })
        },1000),
        async finishScoring() {
            await this.postFinishScoring({
                job_post_id: this.tahapanGetter.jobSelected?.id,
                job_seeker_id: this.tahapanGetter.detail?.job_seeker_id,

            }, this.tahapanGetter.detail?.module?.pretest_modul_detail_id).then((result)=>{
                this.$router.push('/talent-selection');
            })
        },
        async downloadFile(data) {
            try {
                if(data.is_file){
                    await this.getFileAnswer(data.apply_job_answer_id).then((result)=>{
                        const filename = this.getFileName(data.answer);
                        // Ekstrak ekstensi file
                        const fileExtension = filename.split('.').pop().toLowerCase();
                        // Tentukan tipe MIME berdasarkan ekstensi file
                        let mimeType;
                        switch (fileExtension) {
                            case 'pdf':
                                mimeType = 'application/pdf';
                                break;
                            case 'png':
                                mimeType = 'image/png';
                                break;
                            case 'jpg':
                                mimeType = 'image/jpg';
                                break;
                            case 'jpeg':
                                mimeType = 'image/jpeg';
                                break;
                            case 'gif':
                                mimeType = 'image/gif';
                                break;
                            case 'txt':
                                mimeType = 'text/plain';
                                break;
                            case 'html':
                                mimeType = 'text/html';
                                break;
                            case 'json':
                                mimeType = 'application/json';
                                break;
                            case 'doc':
                            case 'docx':
                                mimeType = 'application/msword';
                                break;
                            case 'xls':
                                mimeType = 'application/vnd.ms-excel';
                                break;
                            case 'xlsx':
                                mimeType = 'application/vnd.ms-excel';
                                break;
                            case 'ppt':
                                mimeType = 'application/vnd.ms-powerpoint';
                                break;
                            case 'pptx':
                                mimeType = 'application/vnd.ms-powerpoint';
                                break;
                            // Tambahkan lebih banyak kasus untuk tipe file lain yang sering digunakan
                            default:
                                mimeType = 'application/octet-stream'; // MIME tipe default untuk tipe file yang tidak dikenali
                                break;
                        }

                        const blob = new Blob([result], { type: mimeType });

                        const link = document.createElement('a');
                        link.href = window.URL.createObjectURL(blob);
                        link.download = filename;

                        link.dataset.downloadurl = [mimeType, link.download, link.href].join(':');
                        link.draggable = true;
                        link.classList.add('dragout');
                        link.click();
                    });

                }else{
                    return $notifier.showMessage({ content: 'File tidak tersedia.', status: 'warning' });
                }
            } catch (error) {
                    return $notifier.showMessage({ content: 'File tidak tersedia.', status: 'warning' });
            }            
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
        getFileName(file){
            if(file){
                let name = file.split('/');
                return name[name.length - 1];
            }else{
                return '-'
            }
        }
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
