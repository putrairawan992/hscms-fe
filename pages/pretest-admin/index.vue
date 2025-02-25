<template>
    <div>
        <v-card class="card-register" style="min-height: 785px;" :style="pretests.length > 1 ? 'min-height: 925px;' : 'min-height: 785px;'">
            <div class="my-2" style="position: relative;">
                <div class="blokade-parent ma-8 pt-1">
                    
                    <div class="" style="position: relative;">
                        <div class="blokade-parent my-8 pt-1">
                            <v-row align="center" class="mb-3">
                                <v-col cols="12" class="text-left">
                                    <div class="open-job-dan-draft">
                                        Pre-Test
                                    </div>
                                    <i class="mt-0">Mohon baca petunjuk sesuai deskripsi secara teliti.  Pastikan anda terhubung dengan koneksi internet yang stabil sebelum mengerjakan tes.</i>
                                </v-col>
                            </v-row>

                            <div class="list-container" :style="pretests.length > 1 ? 'height: 925px;' : 'height: 745px;'" style="overflow-x: auto;">
                                <div v-for="(pretest, key) in pretests" :style="key+1 !== pretests.length ? 'margin-bottom: 40px;' : 'margin-bottom: 0px;'">
                                    <div class="pretest-title text-left mb-2">{{ pretest.job_title }}</div>
                                    <v-row align="center" class="ma-0 mb-4 pa-2 list-pretest">
                                        <v-col v-for="(value, key) in pretest.detail" cols="12" class="pt-0 mt-4 mb-6">
                                            <div class="pretest-todo-title text-left mb-1">{{ key+1 }}. {{ value.category_name }}</div>
                                            <div class="frame-pretest-todo pt-2 px-2">
                                                <div class="frame-div text-left" style="width: 40%;">
                                                    <div class="jun-2023-wrapper">
                                                        <div class="text-list-todo">{{ value?.modul?.title_test ? value.modul.title_test : '-' }}</div>
                                                    </div>
                                                </div>
                                                <div class="frame-div text-left">
                                                    <div class="jun-2023-wrapper">
                                                        <div class="text-list-todo">Deadline: {{ useConvertToDateTimeView(value.deadline) }}</div>
                                                    </div>
                                                </div>
                                                <div class="frame-div">
                                                    <div v-if="value.in_review == undefined" :class="value.modul != null ? 'orange-btn' : 'grey-btn'" @click="startTest(value, pretest.job_post_id)">
                                                        <div class="">
                                                            <b class="button mx-3">Start Test</b>
                                                        </div>
                                                    </div>

                                                    <div v-else class="jun-2023-wrapper text-right" style="width: 98px;">
                                                        <div v-if="value.in_review == true" class="text-list-todo"> <i>In Review</i> </div>
                                                        <div v-else class="text-list-todo">Skor: {{ Math.round(value.score) }}</div>
                                                    </div>
                                                    <!-- <div v-if="value.score != undefined" class="jun-2023-wrapper text-right" style="width: 98px;">
                                                        <div class="text-list-todo">Skor: {{ value.score }}</div>
                                                    </div>
                                                    <div v-else class="frame-container" style="width: 98px;">
                                                        <div class="attach-mpr-parent" @click="startTest(value, pretest.job_post_id)">
                                                            <b class="button">Start Test</b>
                                                        </div>
                                                    </div> -->
                                                </div>
                                            </div>
                                        </v-col>
                                    </v-row>
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
    name: "jobPost",
    middleware: "jobSeeker",
    components: { 
        TextEditor,
        Multiselect,
    },
    data: () => ({
        id_job_post: null,
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
        await this.getPretest();
    },
    methods: {
		...mapActions('seeker-pretest', ['getPretest']),
        ...mapMutations('seeker-pretest', ['setJobID', 'setModuleID', 'setCategoryID']),

        startTest(data, job_post_id){
            if(!data.modul){
                return this.$notifier.showMessage({ content: 'Module tidak tersedia', status: 'warning' });
            }
            this.setJobID(job_post_id);
            this.setCategoryID(data.id);
            this.setModuleID(data.modul.id);
            return this.$router.push('/pretest/preview');
        },

        useConvertToDateTimeView(value) {
            var tanggal = new Date(value);
            var namaBulan = [
                "Januari", "Februari", "Maret", "April", "Mei", "Juni",
                "Juli", "Agustus", "September", "Oktober", "November", "Desember"
            ];
            var hari = tanggal.getUTCDate();
            var bulan = namaBulan[tanggal.getUTCMonth()];
            var tahun = tanggal.getUTCFullYear();

            var jam = tanggal.getUTCHours();
            var menit = tanggal.getUTCMinutes();

            var hasilFormat = hari + " " + bulan + " " + tahun + " | " +
            (jam < 10 ? "0" : "") + jam + ":" + (menit < 10 ? "0" : "") + menit + " WIB";

            return hasilFormat;
        },
    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
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
.pretest-todo-title {
    color: #AE445A;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.frame-pretest-todo {
    width: 100%;
    display: flex;
    border-top: 2.5px solid #AE445A;
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
