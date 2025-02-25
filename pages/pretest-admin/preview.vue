<template>
    <div>
        <v-card class="card-preview-pretest">
            <div class="my-2" style="position: relative;">
                <div class="blokade-parent ma-8 mt-4 pt-1" style="min-height: 785px;">
                    <div class="my-8 pt-1">
                        
                        <v-row align="center">
                            <v-col cols="12" class="text-left">
                                <div class="open-job-dan-draft" style="text-transform: capitalize;">
                                    {{ preview.title_test }}
                                </div>
                                <i class="mt-0">
                                    Ikuti sesuai arahan deskripsi
                                </i>
                            </v-col>
                        </v-row>

                        <v-row align="stretch" class="mb-4">
                            <v-col cols="12" class="">
                                <div class="pretest-preview-title text-left">Instruksi soal</div>
                                <div class="pretest-preview-text text-left">
                                    Bacalah deskripsi soal secara seksama dan jawablah pertanyaan-pertanyaan yang diajukan sebaik mungkin. Perhatikan durasi waktu yang berada di sisi atas setiap soal. Semoga berhasil!
                                </div>
                            </v-col>
                            <v-col cols="12" xs="6" md="6" lg="6" xl="6" xxl="6"  class="">
                                <div class="pretest-preview-title text-left">Tipe soal</div>
                                <table>
                                    <tr>
                                        <td class="pretest-preview-text text-left">Tipe</td>
                                        <td class="pretest-preview-text text-left pl-1">:</td>
                                        <td class="pretest-preview-text text-left pl-4">{{ preview.type }}</td>
                                    </tr>
                                    <tr>
                                        <td class="pretest-preview-text text-left">Durasi</td> 
                                        <td class="pretest-preview-text text-left pl-1">:</td>
                                        <td class="pretest-preview-text text-left pl-4">{{ preview.duration }} Menit</td>
                                    </tr>
                                    <tr>
                                        <td class="pretest-preview-text text-left">Jumlah Pertanyaan</td>
                                        <td class="pretest-preview-text text-left pl-1">:</td>
                                        <td class="pretest-preview-text text-left pl-4">{{ preview.count_question }} Pertanyaan</td> 
                                    </tr>
                                </table>
                            </v-col>
                            <v-col cols="12" xs="6" md="6" lg="6" xl="6" xxl="6"  class="">
                                <!-- <div class="container-jaringan pt-4">
                                    <div class="pretest-preview-text-300 text-center">Jaringan Anda Baik</div>
                                    <div class="frame-container ma-auto mt-2">
                                        <div class="attach-mpr-parent" @click="">
                                            <b class="button">Tes Jaringan</b>
                                        </div>
                                    </div>
                                </div> -->
                            </v-col>


                            <v-col cols="12" xs="6" md="6" lg="6" xl="6" xxl="6"  class="container-preview-left">
                                <div class="">
                                    <div class="title-component-text text-left mb-8">
                                        Contoh Tampilan  Soal
                                    </div>
                                    <Countdown :date="new Date('2002-01-01 00:00:00')"/>
                                    <v-pagination
                                        :length="5"
                                        v-model="page"
                                        prev-icon="mdi-menu-left"
                                        next-icon="mdi-menu-right" class="mt-4"
                                        size="2" color="#ae445a" navigation-color="#ae445a"
                                    ></v-pagination>
                                    <div class="mt-6">
                                        <div class="pretest-preview-title text-left">Instruksi soal</div>
                                        <div class="pretest-preview-text text-left" v-html="preview.instructions"/>
                                        <div v-if="preview.type == 'Modul Pilihan Ganda'">
                                            <ol class="preview-question-text text-left mt-4"><li>
                                                Soal nomor satu, ada empat pilihan ganda bisa langsung dijawab di sini
                                            </li></ol>
                                            <v-radio-group v-model="inline" row class="radio-group-questions mt-0">
                                                <v-radio
                                                    label="Pilihan A"
                                                    value="radio-1"
                                                ></v-radio>
                                                <v-radio
                                                    label="Pilihan B"
                                                    value="radio-2"
                                                ></v-radio>
                                                <v-radio
                                                    label="Pilihan C"
                                                    value="radio-3"
                                                ></v-radio>
                                                <v-radio
                                                    label="Pilihan D"
                                                    value="radio-4"
                                                ></v-radio>
                                            </v-radio-group>
                                        </div>
                                        <div v-else-if="preview.type == 'Modul Essay'">
                                            <ol class="preview-question-text text-left mt-4"><li>
                                                Soal nomor satu,  jabarkan/tulis essai mengenai apa gitu
                                            </li></ol>
                                            <TextEditor v-model="html" class="rich-editor" placeholder="Silahkan jawab pertanyaan dengan jawaban yang sesuai"/>
                                        </div>

                                        <div v-else>
                                            <ol class="preview-question-text text-left mt-4"><li>
                                                Soal nomor satu, bisa akses soal disini, upload jawaban disini
                                            </li></ol>
                                            <button class="drop-file-parent mt-4 mb-6">
                                                <input class="d-none" type="file" ref="previewInput1" @change="onSelectFile($event)">
                                                <img class="drop-file-icon" alt="" src="@/assets/img/group@2x.png" />
                                                <div class="drop-file-here-or-click-to-upl-parent">
                                                    <b class="drop-file-here">Drop file here or click to upload</b>
                                                    <div class="file-supported">
                                                        {{ file ? file.name : 'File supported : AVI, MP4, MOV, WebM, MKV, WMV, FLV, MPEG, 3GP.' }}
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </v-col>

                            <v-col cols="12" xs="6" md="6" lg="6" xl="6" xxl="6"  class="container-preview-right d-flex flex-column">
                                <v-row align="center">
                                    <v-col>
                                        <v-row>
                                            <v-col cols="12" class="pretest-preview-text text-center pb-0">
                                                <div style="width: 283px; margin: auto;">
                                                    Apabila sudah siap mengerjakan soal, silahkan klik tombol “Start Test” untuk memulai.
                                                </div>
                                            </v-col>
                                            <v-col cols="12" class="pretest-preview-title text-center">
                                                Semoga Berhasil!
                                            </v-col>
                                            <v-col cols="12">
                                                <div class="frame-container ma-auto mt-2">
                                                    <div class="attach-mpr-parent" @click="startTest">
                                                        <b class="button">Start Test</b>
                                                    </div>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    
                                    
                                </v-row>
                            </v-col>

                        </v-row>
                    </div>
                </div>
            </div>
        </v-card>
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
        inline: null,
    }),
    watch: {},
    computed: {
		...mapState('seeker-pretest', ['preview']),
    },
    async mounted() {
        await this.getPreview();
    },
    methods: {
		...mapActions('seeker-pretest', ['getPreview']),
        onSelectFile (event) {
            const file = event.srcElement.files[0];
            this.file = file;
        },
        startTest() {
            return this.$router.push('/pretest/question');
        },
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
.drop-file-parent {
    border-radius: 10px;
    border: 1px dashed #ae445a;
    box-sizing: border-box;
    width: 418px;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
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
.title-component-text {
    color: #AE445A;
    text-align: center;
    font-family: Poppins;
    font-size: 18px;
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
