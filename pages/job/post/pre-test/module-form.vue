<template>
    <v-card class="card-register">
        <div class="my-2" style="position: relative;">
            <div class="blokade-parent ma-8 pt-1">
                
                <v-row align="center">
                    <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9" class="text-left">
                        <div class="open-job-dan-draft">
                            {{this.type}}
                        </div>
                        <i class="mt-0">Silahkan atur soal yang akan dijadikan Pre-Test bagi calon Karyawan</i>
                    </v-col>
                    <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" style="display: flex; flex-direction: row-reverse;">
                        <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                            <div class="frame-container" @click="submit">
                                <div class="attach-mpr-parent">
                                    <b class="button">Save</b>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
                
                <v-row align="center">
                    <v-col cols="12" class="label pb-0">
                        <b>Judul Tes</b>
                    </v-col>
                    <v-col cols="12" class="pt-1">
                        <input
                            v-model="title_test"
                            class="module-text-input"
                            placeholder="Masukkan Judul Nama Tes" :allow-empty="false"
                        />
                    </v-col>
                </v-row>
                
                <v-row align="center">
                    <v-col cols="12" class="label pb-0">
                        <b>Instruksi Tes</b>
                    </v-col>
                    <v-col cols="12" class="pt-1">
                        <TextEditor v-model="instructions" class="rich-editor" placeholder="Masukkan Deskripsi Soal" :gradient="gradient"/>
                    </v-col>
                </v-row>
                <v-row align="center">
                    <v-col cols="12" xs="5" md="5" lg="5" xl="5" xxl="5" class="">
                        <v-row align="center">
                            <v-col cols="12" class="label pb-0">
                                <b>Kategori</b>
                            </v-col>
                            <v-col cols="12" class="pt-1">
                                <multiselect
                                    v-model="category_id"
                                    :options="masterData.master_category"
                                    class="module-text-input" label="category_name"
                                    placeholder="Kategori" :allow-empty="false"
                                ></multiselect>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" xs="7" md="7" lg="7" xl="7" xxl="7" >
                        <v-row align="center">
                            <v-col cols="12" class="label pb-0">
                                <b>Pilih Logo</b>
                            </v-col>
                            <v-col cols="12" class="pt-1">
                                <div style="display: flex; justify-content: space-between;">
                                    <div class="brainheadprofile-wrapper" :class="logo == 'brainhead' && 'active'" @click="logo = 'brainhead'">
                                        <img v-if="logo == 'brainhead'" class="brainheadprofile-icons" src="@/assets/svg/module-logo/white/brainhead.svg" alt="" />
                                        <img v-else class="brainheadprofile-icons" src="@/assets/svg/module-logo/black/brainhead.svg" alt="" />
                                    </div>
                                    <div class="brainheadprofile-wrapper" :class="logo == 'video' && 'active'" @click="logo = 'video'">
                                        <img v-if="logo == 'video'" class="brainheadprofile-icon" src="@/assets/svg/module-logo/white/video.svg" alt="" />
                                        <img v-else class="brainheadprofile-icon" src="@/assets/svg/module-logo/black/video.svg" alt="" />
                                    </div>
                                    <div class="brainheadprofile-wrapper" :class="logo == 'acircle' && 'active'" @click="logo = 'acircle'">
                                        <img v-if="logo == 'acircle'" class="brainheadprofile-icon" src="@/assets/svg/module-logo/white/acircle.svg" alt="" />
                                        <img v-else class="brainheadprofile-icon" src="@/assets/svg/module-logo/black/acircle.svg" alt="" />
                                    </div>
                                    <div class="brainheadprofile-wrapper" :class="logo == 'paintbrushpointed' && 'active'" @click="logo = 'paintbrushpointed'">
                                        <img v-if="logo == 'paintbrushpointed'" class="brainheadprofile-icon" src="@/assets/svg/module-logo/white/paintbrushpointed.svg" alt="" />
                                        <img v-else class="brainheadprofile-icon" src="@/assets/svg/module-logo/black/paintbrushpointed.svg" alt="" />
                                    </div>
                                    <div class="brainheadprofile-wrapper" :class="logo == 'code' && 'active'" @click="logo = 'code'">
                                        <img v-if="logo == 'code'" lass="brainheadprofile-icon" src="@/assets/svg/module-logo/white/code.svg" alt="" />
                                        <img v-else class="brainheadprofile-icon" src="@/assets/svg/module-logo/black/code.svg" alt="" />
                                    </div>
                                    <div class="brainheadprofile-wrapper" :class="logo == '123rectangle' && 'active'" @click="logo = '123rectangle'">
                                        <img v-if="logo == '123rectangle'" class="brainheadprofile-icon" src="@/assets/svg/module-logo/white/123rectangle.svg" alt="" />
                                        <img v-else class="brainheadprofile-icon" src="@/assets/svg/module-logo/black/123rectangle.svg" alt="" />
                                    </div>
                                    <div class="brainheadprofile-wrapper" :class="logo == 'magazine' && 'active'" @click="logo = 'magazine'">
                                        <img v-if="logo == 'magazine'" class="brainheadprofile-icon" src="@/assets/svg/module-logo/white/magazine.svg" alt="" />
                                        <img v-else class="brainheadprofile-icon" src="@/assets/svg/module-logo/black/magazine.svg" alt="" />
                                    </div>
                                    <div class="brainheadprofile-wrapper" :class="logo == 'penciltip' && 'active'" @click="logo = 'penciltip'">
                                        <img v-if="logo == 'penciltip'" class="brainheadprofile-icon" src="@/assets/svg/module-logo/white/penciltip.svg" alt="" />
                                        <img v-else class="brainheadprofile-icon" src="@/assets/svg/module-logo/black/penciltip.svg" alt="" />
                                    </div>
                                    <div class="brainheadprofile-wrapper" :class="logo == 'phototv' && 'active'" @click="logo = 'phototv'">
                                        <img v-if="logo == 'phototv'" class="brainheadprofile-icon" src="@/assets/svg/module-logo/white/phototv.svg" alt="" />
                                        <img v-else class="brainheadprofile-icon" src="@/assets/svg/module-logo/black/phototv.svg" alt="" />
                                    </div>
                                    <div class="brainheadprofile-wrapper" :class="logo == 'heart' && 'active'" @click="logo = 'heart'">
                                        <img v-if="logo == 'heart'" class="brainheadprofile-icon" src="@/assets/svg/module-logo/white/heart.svg" alt="" />
                                        <img v-else class="brainheadprofile-icon" src="@/assets/svg/module-logo/black/heart.svg" alt="" />
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row align="center">
                    <v-col cols="12" xs="6" md="6" lg="6" xl="6" xxl="6" class="">
                        <v-row align="center">
                            <v-col cols="12" class="label pb-0">
                                <b>Durasi Waktu</b>
                            </v-col>
                            <v-col cols="12" class="pt-1">
                                <multiselect
                                    v-model="duration"
                                    :options="masterData.master_duration"
                                    class="module-text-input" label="label"
                                    placeholder="Masukkan Durasi Waktu" :allow-empty="false"
                                ></multiselect>
                            </v-col>
                        </v-row>
                    </v-col>
                    <!-- <v-col cols="12" xs="6" md="6" lg="6" xl="6" xxl="6" class="">
                        <v-row align="center">
                            <v-col cols="12" class="label pb-0">
                                <b>Deadline Waktu</b>
                            </v-col>
                            <v-col cols="12" class="pt-1">
                                <multiselect
                                    v-model="module"
                                    :options="listModule"
                                    class="module-text-input"
                                    placeholder="Pilih Tanggal" :allow-empty="false"
                                ></multiselect>
                            </v-col>
                        </v-row>
                    </v-col> -->
                </v-row>
                <div class="line-after mt-10 mb-8"></div>
                <v-row v-if="type == 'Modul Pilihan Ganda'" v-for="(value, key) in multiple_choice.length == 0 ? 1 : multiple_choice" align="center">
                    <v-col cols="12" class="label pb-0 d-flex" style="justify-content: space-between; align-items: center;">
                        <b>Pertanyaan {{ key + 1 }}</b>
                        <div v-if="multiple_choice.length > 1" class="frame-container mb-3">
                            <div class="attach-mpr-parent" @click="deleteQuestion(key)">
                                <b class="button">Delete</b>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" class="pt-1">
                        <client-only placeholder="loading...">
                            <div :class="gradient ? gradient : 'regular'" class="offer">
                                <ckeditor-nuxt :config="editorConfig" v-model="multiple_choice[key].question"/>
                                <div class="answer-container">
                                    <v-row class="pa-6">
                                        <v-col cols="12" xs="6" md="6" lg="6" xl="6" xxl="6">
                                            <v-text-field placeholder="Pilihan ganda 1" class="module-text-field" solo v-model="value.options[0].text">
                                                <template v-slot:prepend-inner>
                                                    <v-tooltip bottom >
                                                        <template v-slot:activator="{ on }">
                                                            <v-checkbox class="input-checkbox" color="#ae445a" v-model="value.options[0].is_correction" @change="changeAnswer(key, 0)">
                                                                <template v-slot:label>
                                                                    <div class="checkbox-label">A.</div>
                                                                </template>
                                                            </v-checkbox>
                                                        </template>
                                                        Jawaban A.
                                                    </v-tooltip>
                                                </template>
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" xs="6" md="6" lg="6" xl="6" xxl="6">
                                            <v-text-field placeholder="Pilihan ganda 1" class="module-text-field" solo v-model="value.options[1].text">
                                                <template v-slot:prepend-inner>
                                                    <v-tooltip bottom >
                                                        <template v-slot:activator="{ on }">
                                                            <v-checkbox class="input-checkbox" color="#ae445a" v-model="value.options[1].is_correction" @change="changeAnswer(key, 1)">
                                                                <template v-slot:label>
                                                                    <div class="checkbox-label">B.</div>
                                                                </template>
                                                            </v-checkbox>
                                                        </template>
                                                        Jawaban B.
                                                    </v-tooltip>
                                                </template>
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" xs="6" md="6" lg="6" xl="6" xxl="6">
                                            <v-text-field placeholder="Pilihan ganda 1" class="module-text-field" solo v-model="value.options[2].text">
                                                <template v-slot:prepend-inner>
                                                    <v-tooltip bottom >
                                                        <template v-slot:activator="{ on }">
                                                            <v-checkbox class="input-checkbox" color="#ae445a" v-model="value.options[2].is_correction" @change="changeAnswer(key, 2)">
                                                                <template v-slot:label>
                                                                    <div class="checkbox-label">C.</div>
                                                                </template>
                                                            </v-checkbox>
                                                        </template>
                                                        Jawaban C.
                                                    </v-tooltip>
                                                </template>
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" xs="6" md="6" lg="6" xl="6" xxl="6">
                                            <v-text-field placeholder="Pilihan ganda 1" class="module-text-field" solo v-model="value.options[3].text">
                                                <template v-slot:prepend-inner>
                                                    <v-tooltip bottom >
                                                        <template v-slot:activator="{ on }">
                                                            <v-checkbox class="input-checkbox" color="#ae445a" v-model="value.options[3].is_correction" @change="changeAnswer(key, 3)">
                                                                <template v-slot:label>
                                                                    <div class="checkbox-label">D.</div>
                                                                </template>
                                                            </v-checkbox>
                                                        </template>
                                                        Jawaban D.
                                                    </v-tooltip>
                                                </template>
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </client-only>
                    </v-col>
                </v-row>
                <v-row v-else align="center" v-for="(value, key) in question.length == 0 ? 1 : question">
                    <v-col cols="12" class="label pb-0 d-flex" style="justify-content: space-between; align-items: center;">
                        <b>Pertanyaan {{ key + 1 }}</b>
                        <div v-if="question.length > 1" class="frame-container mb-3">
                            <div class="attach-mpr-parent" @click="deleteQuestion(key)">
                                <b class="button">Delete</b>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" class="pt-1">
                        <TextEditor v-model="question[key]" class="rich-editor" placeholder="Masukkan Pertanyaan" :gradient="gradient"/>
                    </v-col>
                </v-row>
                <v-row align="center">
                    <v-col cols="12" style="display: flex; justify-content: center;">
                        <div class="frame-container" style="width: 224px;">
                            <div class="attach-mpr-parent" @click="addQuestion">
                                <b class="button">Tambah Pertanyaan</b>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-card>
</template>
<script>

import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
import TextEditor from "~/components/TextEditor";
export default {
    name: "register",
    layout: "register",
    components: { 
        TextEditor,
        Multiselect,
        'ckeditor-nuxt': () => { if (process.client) { return import('@blowstack/ckeditor-nuxt') } }
    },
    data: () => ({
        module: "",
        datePicker1: false,
        logo: "brainhead",
        gradient: "regular",
        listModule: [
            'Modul Live Recording',
            'Modul Gambar',
            'Modul Essay',
            'Modul Pilihan Ganda',
            'Modul Upload Document',
        ],
        editorConfig: {
            removePlugins: ['Title'],
            placeholder: "Masukkan Pertanyaan",
            toolbar: [ 'Bold', 'Italic', 'Underline', 'Alignment', 'numberedList', 'bulletedList', 'link' ],
        },

        // body API
        category_id: null,
        type: null,
        title_test: null,
        instructions: null,
        logo: null,
        duration: null,
        question: [],
        masterData: {
            master_duration: [],
            master_category: [],
            master_type_modul: [],
        },
        multiple_choice: [{
            question: null,
            options: [
                    {
                        alphabet:"a",
                        text: "",
                        is_correction: true
                    },
                    {
                        alphabet:"b",
                        text: "",
                        is_correction: false
                    },
                    {
                        alphabet:"c",
                        text: "",
                        is_correction: false
                    },
                    {
                        alphabet:"d",
                        text: "",
                        is_correction: false
                    },
            ],
        }],
    }),
    watch: {},
    setup() {
        const { getModule, postModule } = API()
        return { getModule, postModule };
    },
    mounted() {
        const storageModuleType = localStorage.getItem('module_type');
        const storageIdJobPost = localStorage.getItem('id_job_post');
        const storageIdPretest = localStorage.getItem('id_pretest');
        if(storageIdJobPost){ this.id_job_post = storageIdJobPost;}
        if(storageIdPretest){ this.id_pretest = storageIdPretest;}
        if(storageModuleType){ this.type = storageModuleType;}
        this.getGradient();
        this.getData();
        
    },
    methods: {
        async getData(){
            await this.getModule().then((result)=>{
                this.masterData = result?.master_data ? result.master_data : null;
                // this.module = result?.data ? result.data : null;
            })
        },
        async submit(){
            var body = {
                type: this.type,
                logo: this.logo,
                deadline: "2024-01-10",
                title_test: this.title_test,
                instructions: this.instructions,
                duration: this.duration?.value ? this.duration.value : null,
                category_id: this.category_id?.id ? this.category_id.id : null,
            }; if(this.type == "Modul Pilihan Ganda"){
                body.multiple_choice = this.multiple_choice;
            }else{
                body.question = this.question;
            }

            console.log('submit',body);
            await this.postModule(body, this.id_pretest).then( async (result) => {
                console.log('result', result);
                if(result){
                    this.$notifier.showMessage({ content: 'Success.', status: 'success' });
                    return this.$router.push('/job/post/pre-test/module')
                }
            })
            
        },
        addQuestion(){
            if(this.type == 'Modul Pilihan Ganda'){
                this.multiple_choice.push({
                question: null,
                options: [
                        {
                            alphabet:"a",
                            text: "",
                            is_correction: true
                        },
                        {
                            alphabet:"b",
                            text: "",
                            is_correction: false
                        },
                        {
                            alphabet:"c",
                            text: "",
                            is_correction: false
                        },
                        {
                            alphabet:"d",
                            text: "",
                            is_correction: false
                        },
                ],
                })
            }else{
                this.question.push("");
            }
        },
        deleteQuestion(key){
            console.log('deleteQuestion', key);
            if(this.type == 'Modul Pilihan Ganda'){
                var array = this.multiple_choice;
                array.splice(key, 1);
                this.multiple_choice = array;
            }else{
                var array = this.question;
                array.splice(key, 1);
                this.question = array;
            }
        },
        changeAnswer(key, option_key){
            this.multiple_choice[key].options.forEach((value, key) => {
                if(key !== option_key){
                    value.is_correction = false;
                }
            });
        },
        parseDate(date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        getGradient(){
            switch (this.type) {
                case "Modul Essay":
                    this.gradient = "essay";
                    break;
                case "Modul Gambar":
                    this.gradient = "gambar";
                    break;
                case "Modul Pilihan Ganda":
                    this.gradient = "ganda";
                    break;
                case "Modul Live Recording":
                    this.gradient = "recording";
                    break;
                case "Modul Upload Document":
                    this.gradient = "dokumen";
                    break;
                default:
                    this.gradient = "regular";
                    break;
            }
        }
    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>

.offer .ck-file-dialog-button {
    display: none !important;
}
.offer .ck-file-dialog-button {
    display: none !important;
}
.offer .ck.ck-icon, .ck.ck-icon * {
    color: #fff !important;
}
.offer .ck.ck-button, a.ck.ck-button::hover {
    background-color: transparent !important;
}
.offer .ck.ck-toolbar {
    padding: 0 !important;
    border: 1px solid #AE445A !important;
    border-bottom: none !important;
    border-top: none !important;
    border-radius: 10px 10px 0px 0px !important;
    background: linear-gradient(90deg, #F39F5A 0.03%, #AE445A 103.73%) !important;
}
.offer .ck.ck-content {
    min-height: 70px;
}

.regular.offer .ck.ck-toolbar {
    background: linear-gradient(90deg, #F39F5A 0.03%, #AE445A 103.73%) !important;
}
.recording.offer  .ck.ck-toolbar {
    background: linear-gradient(90deg, #3AB471 0%, #AE445A 80.99%) !important;
}
.gambar.offer  .ck.ck-toolbar {
    background: linear-gradient(90deg, #3B78C2 0%, #AE445A 80.99%) !important;
}
.essay.offer  .ck.ck-toolbar {
    background: linear-gradient(90deg, #404041 0%, #AE445A 80.99%) !important;
}
.dokumen.offer  .ck.ck-toolbar {
    background: linear-gradient(90deg, #8364BA 0%, #AE445A 80.99%) !important;
}
.offer .ck.ck-editor__main>.ck-editor__editable {
    border: 1px solid #AE445A !important;
    border-bottom: none !important;
    border-top: none !important;
}
.offer .ck.ck-editor__main>.ck-editor__editable:not(.ck-focused) {
    border: 1px solid #AE445A !important;
    border-bottom: none !important;
    border-top: none !important;
}
</style>
<style scoped>
.answer-container {
    border: 1px solid #AE445A !important;
    border-top: none !important;
}
.brainheadprofile-wrapper {
    border-radius: 5px;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 33px;
    height: 33px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
}
.brainheadprofile-wrapper.active {
    background-color: #ae445a;
}
.brainheadprofile-icon {
    position: relative;
    width: 28px;
    height: 28px;
    overflow: hidden;
    flex-shrink: 0;
    color: #3ab471 !important;
}
.module-text-input {
    border-radius: 10px;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 100%;
    height: 33px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    font-size: 12px;
}.module-text-input::placeholder {
    font-style: italic;
}
.card-module {
    border-radius: 10px;
    background: #b3b9c5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 223px;
    height: 142px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    text-align: center;
    font-size: 16px;
    color: #fff;
}
.card-module.recording {
    background: linear-gradient(90deg, #3ab471, #ae445a);
}
.card-module.ganda {
    background: var(--gradient-active, linear-gradient(90deg, #F39F5A 0%, #AE445A 100%));
}
.card-module.dokumen {
    background: linear-gradient(90deg, #8364BA 0%, #AE445A 100%);
}
.card-module.gambar {
    background: linear-gradient(90deg, #3B78C2 0%, #AE445A 100%);
}
.card-module.essay {
    background: linear-gradient(90deg, #404041 0%, #AE445A 100%);
}
.edit-module-parent {
    margin: 0 !important;
    position: absolute;
    top: 11.67px;
    left: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    z-index: 0;
}
.module-icon-parent {
    width: 181px;
    height: 97px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 10px;
    gap: 10px;
    z-index: 1;
}
.module-icon {
    position: relative;
    width: 50px;
    height: 50px;
    overflow: hidden;
    flex-shrink: 0;
}
.line-after {
    position: relative;
    border-top: 1px solid #b6b6b6;
    box-sizing: border-box;
    width: 100%;
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
.frame-pretest-container {
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    width: 100%;
    height: 38px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    color: #fff;
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
    cursor: pointer;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.frame-container {
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    width: 119px;
    /* width: 135px; */
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
