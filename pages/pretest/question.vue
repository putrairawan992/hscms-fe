<template>
    <div>
        <v-card class="card-preview-pretest">
            <div class="my-2" style="position: relative;">
                <div class="blokade-parent ma-8 mt-4 pt-1" style="min-height: 785px;">
                    <div class="my-8 pt-1">
                        
                        <v-row align="center">
                            <v-col cols="12" class="text-left" style="display: flex; justify-content: space-between;">
                                <div>
                                    <div class="open-job-dan-draft" style="text-transform: capitalize;">
                                        {{ question?.title_test }}
                                    </div>
                                    <i v-if="question?.title_test" class="mt-0">
                                        Ikuti sesuai arahan deskripsi
                                    </i>
                                </div>
                                <div v-if="question?.title_test" class="frame-container mt-2" style="width: 101px;">
                                    <div class="attach-mpr-parent" @click="showAlertApproval = true">
                                        <b class="button">End Test</b>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row align="stretch" class="mb-4">
                            <v-col cols="12" class="">
                                <div class="">
                                    <Countdown v-if="question?.paginate" :date="new Date(question?.countdown?.end_time)"/>
                                    <v-pagination
                                        :length="question?.paginate?.length"
                                        v-if="question?.paginate" v-model="page"
                                        prev-icon="mdi-menu-left"
                                        next-icon="mdi-menu-right" class="mt-4"
                                        size="2" color="#ae445a" navigation-color="#ae445a"
                                    ></v-pagination>
                                    
                                    <!-- Pilihan Ganda -->
                                    <div class="mt-6" v-if="question?.type_test == 'Modul Pilihan Ganda'">
                                        <div class="pretest-preview-title text-left">Instruksi soal</div>
                                        <div class="pretest-preview-text text-left" v-html="question?.instructions"></div>
                                        <div v-for="(value, key) in question?.question">
                                            <ol class="pl-4">
                                                <li class="preview-question-text text-left mt-4"
                                                    :value="page == 1 ? key + 1 : 5 * (page - 1) + key + 1" 
                                                    v-html="value.question">
                                                </li>
                                            </ol>
                                            <v-radio-group :value="value.answer" @change="submitAnswer(value, $event)" row class="radio-group-questions mt-0">
                                                <v-radio
                                                    :label="value?.multiple_choise_question ? value?.multiple_choise_question[0]?.text : ''"
                                                    class="pa-2 pt-1" value="a"
                                                ></v-radio>
                                                <v-radio
                                                    :label="value?.multiple_choise_question ? value?.multiple_choise_question[1].text : ''"
                                                    class="pa-2 pt-1" value="b"
                                                ></v-radio>
                                                <v-radio
                                                    :label="value?.multiple_choise_question ? value?.multiple_choise_question[2].text : ''"
                                                    class="pa-2 pt-1" value="c"
                                                ></v-radio>
                                                <v-radio
                                                    :label="value?.multiple_choise_question ? value?.multiple_choise_question[3].text : ''"
                                                    class="pa-2 pt-1" value="d"
                                                ></v-radio>
                                            </v-radio-group>
                                        </div>
                                    </div>

                                    <!-- Textarea -->
                                    <div class="mt-6" v-else-if="question?.type_test == 'Modul Essay'">
                                        <div class="pretest-preview-title text-left">Instruksi soal</div>
                                        <div class="pretest-preview-text text-left" v-html="question?.instructions"></div>

                                        <div v-if="question?.question.length > 0" v-for="(value, key) in question?.question" :key="key" class="mb-12">
                                            <ol class="pl-4">
                                                <li class="preview-question-text text-left mt-4 mb-4" 
                                                    :value="page == 1 ? key + 1 : 5 * (page - 1) + key + 1" 
                                                    v-html="value.question">
                                                </li>
                                            </ol>
                                            <TextEditorAnswer v-if="value" :data="value" class="rich-editor" placeholder="Silahkan jawab pertanyaan dengan jawaban yang sesuai"/>
                                        </div>
                                    </div>

                                    <!-- Wawancara mandiri -->
                                    <div class="mt-6" v-else>
                                        <div class="pretest-preview-title text-left" v-if="question?.instructions">Instruksi soal</div>
                                        <div class="pretest-preview-text text-left" v-html="question?.instructions"></div>

                                        <div v-for="(value, key) in question?.question" class="mb-12">
                                            <ol class="pl-4">
                                                <li class="preview-question-text text-left mt-4 mb-4" 
                                                    :value="page == 1 ? key + 1 : 5 * (page - 1) + key + 1" 
                                                    v-html="value.question">
                                                </li>
                                            </ol>
                                            <div class="title-component-text-1 text-left mt-0">
                                                Silahkan jawab pertanyaan dengan jawaban yang sesuai, dengan meng-upload file terkait
                                            </div>
                                            <button class="mt-2 mb-6" :class="value.answer == null ? 'drop-file-big-parent' : 'drop-file-big-parent-filled'" @click="selectFile(value)">
                                                <img v-if="value.answer == null" class="drop-file-icon" alt="" src="@/assets/img/group@2x.png" />
                                                <div v-if="value.answer == null" class="drop-file-here-or-click-to-upl-parent">
                                                    <b class="drop-file-here">Click to upload</b>
                                                    <div class="file-supported">
                                                        {{ value.answer ? value.answer : 'File supported : AVI, MP4, MOV, WebM, MKV, WMV, FLV, MPEG, 3GP.' }}
                                                    </div>
                                                </div>
                                                
                                                <!-- Filled -->
                                                <img v-if="value.answer != null" class="drop-file-icon" alt="" src="@/assets/svg/doc-big.svg" />
                                                <div v-if="value.answer != null" class="drop-file-here-filled">
                                                    <b class="drop-file-here" style="color: white;">File {{ getFileName(value.answer) }}</b>
                                                    <!-- <img class="edit-icon" alt="" src="@/assets/svg/trash1.svg" style="cursor: pointer;" @click="file = null"/> -->
                                                </div>
                                            </button>
                                        </div>
                                        <input class="d-none" type="file" ref="fileInput" @change="onSelectFile($event)">
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </div>
        </v-card>
        <AlertApproval content="Apakah Anda yakin ingin mengakhiri tes?" :onApprove="endTest" :closeDialog="closeAlert" :show="showAlertApproval"/>
    </div>
</template>
<script>

import { API } from '@/api/index'
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
    name: "jobPost",
    middleware: "jobSeeker",
    components: { },
    data: () => ({
        page: 1,
        html: null,
        file: null,
        dataQuestion: null,
        showAlertApproval: false,
    }),
    watch: {
        page(to, from){
            this.getQuestions();
        }
    },
    computed: {
		...mapState('seeker-pretest', ['question', 'preview']),
        ...mapGetters('seeker-pretest', ['job_id', 'category_id', 'module_id']),
    },
    setup() {
        const { getQuestionAPI, postAnswerAPI, postEndTest } = API()
        return { getQuestionAPI, postAnswerAPI, postEndTest };
    },
    async mounted() {
        await this.getQuestions(this.page);
        console.log('this.question', this.question);
    },
    methods: {
		...mapActions('seeker-pretest', ['getQuestion']),
        ...mapMutations('seeker-pretest', ['setQuestion', 'endPretest']),

        async getQuestions(){
            if(this.question?.type_test == 'Modul Essay'){
                this.setQuestion({});
            }
            await this.getQuestionAPI(this.job_id, this.module_id, this.page).then((result)=>{
                this.setQuestion(result);
            })
        },
        async submitAnswer(data, answer, file_answer){
            console.log('data', data);
            console.log('submitAnswer', file_answer);
            const body = new FormData();
            body.append('job_post_id', data.job_post_id);
            body.append('pretest_question_id', data.pretest_question_id);
            if(answer){ body.append('answer', answer); };
            if(file_answer){ body.append('file_answer', file_answer); };

            await this.postAnswerAPI(body, data.pretest_modul_detail_id).then((result)=>{
                console.log('data.pretest_modul_detail_id',data.pretest_modul_detail_id);
                console.log('postAnswerAPI',result);
                this.getQuestions();
            })
        },
        async endTest(){
            await this.postEndTest(this.job_id, this.module_id).then(async (result)=>{
                if(result){
                    console.log('postEndTest', result);
                    await this.endPretest(result.data);
                    return this.$router.push('/pretest/finish');
                }
            })
        },
        timeOut(){
            console.log('action end test');
        },
        closeAlert(){
            this.showAlertApproval = false;
        },
        selectFile(question){
            this.$refs.fileInput.click();
            this.dataQuestion = question;
        },
        onSelectFile (event) {
            let file = event.srcElement.files[0];
            this.submitAnswer(this.dataQuestion, null, file);
        },
        getFileName(file){
            let name = file.split('/');
            return name[name.length - 1];
        }
    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.custom-file-input {
  /* Add your custom styles for the container div */
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
}

.custom-file-input v-file-input {
  /* Add your custom styles for the v-file-input component */
  margin-top: 10px;
}
.drop-file-big-parent {
    border-radius: 10px;
    border: 1px dashed #ae445a;
    box-sizing: border-box;
    width: 100%;
    height: 74px;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    gap: 15px;
}
.drop-file-big-parent-filled {
    border-radius: 10px;
    background: linear-gradient(90deg, #3AB471, #3B78C2);
    box-sizing: border-box;
    width: 100%;
    height: 74px;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px;
    gap: 15px;
}
.drop-file-icon {
    position: relative;
    width: 49px;
    height: 49.1px;
    object-fit: cover;
}
.drop-file-here-or-click-to-upl-parent {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
}
.drop-file-here-filled {
    gap: 5px;
    height: 100%;
    display: flex;
    flex-shrink: 0;
    margin-top: auto;
    margin-bottom: auto;
    flex-direction: row;
    column-gap: 20px;
    align-items: center;
    justify-content: flex-start;
}
.drop-file-here {
    letter-spacing: -0.01em;
    line-height: 24px;
    display: inline-block;
}
.file-supported {
    font-size: 10px;
    letter-spacing: -0.01em;
    line-height: 24px;
    display: inline-block;
}
.preview-question-text {
    color: #404041;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.title-component-text-1 {
    color: #AE445A;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.container-preview-left {
    margin-top: 40px;
    border-top: 2px solid #ae445a;
    border-right: 1px solid #ae445a;
}
.container-preview-right {
    margin-top: 40px;
    border-top: 2px solid #ae445a;
    border-left: 1px solid #ae445a;
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
.pretest-preview-title-bold{
    color: #404041;
    text-align: center;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.pretest-preview-title{
    color: #404041;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.pretest-preview-text{
    color: #404041;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.pretest-preview-text-300{
    color: #404041;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
.card-preview-pretest {
    border-radius: 40px;
    box-shadow: 5px 0px 5px #b3b9c5, -5px 0px 5px #b3b9c5 !important;
}
.blokade-parent {
    font-size: 12px;
}
.card-preview-pretest {
    min-height: 866px;
    border-radius: 40px;
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
