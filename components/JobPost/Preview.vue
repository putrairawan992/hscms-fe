<template>
    <div>
        <v-row align="center">
            <v-col cols="12">
                <b class="isilah-13-kolom-container">
                    <p>Preview</p>
                </b>
            </v-col>
        </v-row>

        <v-row align="center" class="pa-2" style="border: 1px solid #AE445A; border-radius: 10px;">
            <v-col cols="12" class="d-flex" style="justify-content: space-between;align-items: center;">
                <div class="d-flex" style="align-items: center;">
                    <img class="foto-perusaahaan-icon" src="@/assets/svg/foto-perusaahaan.svg" />
                    <div class="d-flex text-left ml-4" style="flex-direction: column;">
                        <b class="marketing-staff">{{ job_title }}</b>
                        <div class="pt-gema-insani">{{ data_job_provider?.name }}</div>
                        <div class="idr-6000000-">IDR {{ useConvertToMoneyView(start_from_salary) }} - {{ useConvertToMoneyView(end_from_salary) }}</div>
                    </div>
                </div>

                <div class="text-right">
                    <b class="jakarta-selatan-wfo">{{ data_job_location?.job_location_name }}</b>
                    <div class="jam-lalu">{{ $moment(end_date).startOf('hour').fromNow() }}</div>
                    <!-- <div class="jam-lalu">2 jam lalu</div> -->
                </div>
            </v-col>
            <v-col cols="12" class="text-left">
                <b class="">Jenis Pekerjaan</b>
                <div class="">{{ job_type }}</div>
            </v-col>
            <v-col cols="12" class="text-left">
                <b class="">Periode Pekerjaan</b>
                <div class="">{{ $moment(start_date).format('LL') }} - {{ $moment(end_date).format('LL') }}</div>
            </v-col>
            <v-col cols="12" class="text-left">
                <b class="">Tingkat Pekerjaan</b>
                <div class="">{{ data_job_level?.job_level_name }}</div>
            </v-col>
            <v-col cols="12" class="text-left">
                <b class="">Jumlah Kandidat yang Dibutuhkan</b>
                <div class="">{{ number_of_candidates }}</div>
            </v-col>
            <v-col cols="12" class="text-left">
                <b class="">Pengalaman</b>
                <div class="">{{ data_experience?.experience_name }}</div>
            </v-col>
            <v-col cols="12" class="text-left">
                <b class="">Spesialisasi Pekerjaan</b>
                <div class="">{{ data_job_specialist?.job_specialist_name }}</div>
            </v-col>
            <v-col cols="12" class="text-left">
                <b class="">Pendidikan</b>
                <div>
                    <span v-for="(value, key) in educations">
                        {{ value }} <span v-if="key+1 !== educations.length">, </span>
                    </span>
                </div>
            </v-col>
            <v-col cols="12" class="text-left">
                <b class="">Keuntungan dari Perusahaan</b>
                <div>
                    <span v-for="(value, key) in benefits">
                        {{ value }} <span v-if="key+1 !== benefits.length">, </span>
                    </span>
                </div>
            </v-col>
            <v-col cols="12" class="text-left">
                <b class="">Deskripsi Pekerjaan</b>
                <div class="" v-html="description"/>
            </v-col>
        </v-row>

        <v-row align="start" class="mt-4">
            <v-col cols="12" class="label">
                <b>Periode Lowongan Kerja </b>
            </v-col>
            <v-col cols="12" xs="6" md="6" lg="6" xl="6" xxl="6" class="">
                <v-row>
                    <v-col class="pt-0">
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
                                    v-model="start_post"
                                    v-bind="attrs"
                                    @blur="start_post = parseDate(start_post)"
                                    outlined readonly
                                    class="preview-text-input"
                                    placeholder="2024-11-06"
                                    />
                                    <img class="feather-icon-calendar-preview" alt="" src="@/assets/svg/feathericon--calendar.svg" />
                                </div>
                            </template>
                            <v-date-picker
                                @input="datePicker1 = false"
                                plas v-model="start_post" no-title
                            ></v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="1" class="dash-container pt-0">
                        <b class="dash">-</b>
                    </v-col>
                    <v-col class="pt-0">
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
                                    v-model="closed_post"
                                    v-bind="attrs"
                                    @blur="closed_post = parseDate(closed_post)"
                                    outlined readonly
                                    class="preview-text-input"
                                    placeholder="2024-11-06"
                                    />
                                    <img class="feather-icon-calendar-preview" alt="" src="@/assets/svg/feathericon--calendar.svg" />
                                </div>
                            </template>
                            <v-date-picker
                                @input="datePicker2 = false"
                                plas v-model="closed_post" no-title
                            ></v-date-picker>
                        </v-menu>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row>
            <div class="save-container">
                <div></div>
                <div class="d-flex" style="column-gap: 20px;">
                    <!-- <div class="button-wrapper">
                        <b class="tempat-tanggal-lahir">Edit</b>
                    </div> 
                    <div class="button-wrapper">
                        <b class="tempat-tanggal-lahir">Delete</b>
                    </div>  -->
                    <div class="button-wrapper" @click="submit">
                        <b class="tempat-tanggal-lahir">Post</b>
                    </div> 
                </div>
            </div>
        </v-row>
    </div>
</template>
<script>

import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
import TextEditor from "~/components/TextEditor";

export default {
    name: "jobPost",
    middleware: "jobProvider",
    components: { 
        TextEditor,
        Multiselect,
    },
    data: () => ({
        cv: null,
        file: null,
        id_job_post: null,
        datePicker1: false,
        datePicker2: false,

        nominal: "",
        nominal2: "",
        masterData: { 
            master_benefit:[],
            master_education:[],
            master_job_level:[],
            master_experience:[],
            master_job_location:[],
            master_job_specialist:[],
        },

        // body API
        job_title: null,
        job_type: null,
        start_date: null,
        end_date: null,
        data_job_level: null,
        number_of_candidates: null,
        data_experience: null,
        data_job_specialist: null,
        educations: [],
        data_job_location: null,
        workplace_type: null,
        benefits: [],
        start_from_salary: null,
        end_from_salary: null,
        description: null,
        start_post: null,
        closed_post: null,
        data_job_provider: null,
    }),
    watch: {
        nominal(newValue, oldValue) {
            this.nominal = this.useConvertToMoneyView(newValue, 'start_from_salary');
        },
        nominal2(newValue, oldValue) {
            this.nominal2 = this.useConvertToMoneyView(newValue, 'end_from_salary');
        },
    },
    setup() {
        const { getJob, postPostingJob } = API()
        return { getJob, postPostingJob };
    },
    props: {
        next: { type: Function, default() { return {} } },
        prev: { type: Function, default() { return {} } },
    },
    async mounted() {
        const storageIdJobPost = localStorage.getItem('id_job_post');
        if(storageIdJobPost){ this.id_job_post = storageIdJobPost;}
        this.getData();
    },
    methods: {
        async getData(){
            await this.getJob(this.id_job_post).then((result)=>{
                console.log('getJob', result);
                this.refreshForm(result.data);
                this.masterData = result?.master_data;
            })
        },
        refreshForm(data){
            // if(data.length){
                this.id_job_post = data.id;
                this.job_title = data.job_title;
                this.job_type = data.job_type;
                this.start_date = data.start_date ? new Date(data.start_date).toISOString().substr(0, 10) : "";
                this.end_date = data.end_date ? new Date(data.end_date).toISOString().substr(0, 10) : "";
                this.data_job_level = data.data_job_level;
                this.number_of_candidates = data.number_of_candidates;
                this.data_experience = data.data_experience;
                this.data_job_specialist = data.data_job_specialist;
                this.data_job_location = data.data_job_location;
                this.workplace_type = data.workplace_type;
                this.start_from_salary = data.start_from_salary;
                this.end_from_salary = data.end_from_salary;
                this.description = data.description;
                this.data_job_provider = data.data_job_provider;
                data.data_education.forEach(element => {
                    this.educations.push(element.detail_education.education_name)
                });
                data.data_benefit.forEach(element => {
                    this.benefits.push(element.detail_benefit.benefit_name)
                });
            // }
        },

        async submit(){
            console.log({
                start_post: this.start_post + " 00:00:00",
                closed_post: this.closed_post + " 00:00:00",
            });
            await this.postPostingJob({
                start_post: this.start_post + " 00:00:00",
                closed_post: this.closed_post + " 00:00:00",
            }, this.id_job_post).then( async (result) => {
                console.log('RESULT', result);
                if(result){
                    // localStorage.removeItem("id_job_post");
                    this.$notifier.showMessage({ content: 'Success.', status: 'success' });
                    return this.next();
                }
            })
        },

        parseDate (date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        useConvertToMoneyView(value) {
            if (!value) return value;
            value = parseInt(value.replaceAll(',', ''), 10);
            return Intl.NumberFormat('en-US').format(value);
        },
    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.foto-perusaahaan-icon {
    width: 101px;
    height: 101px;
    padding: 6px;
    border-radius: 50%;
    border: 3px solid #ae445a;
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
}.save-container {
    width: 100%;
    display: flex;
    margin: 30px 30px 20px 30px;
    justify-content: space-between;
}
.label {
    font-size: 14px;
    text-align: left;
}
.preview-text-input {
    border-radius: 4px;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    font-size: 12px;
    /* color: #b6b6b6; */
}.preview-text-input::placeholder {
    font-style: italic;
}

.tempat-tanggal-lahir {
    position: relative;
}
.calendar-input-container{
    position: relative;
}
.feather-icon-calendar-preview {
    top: 18%;
    right: 7%;
    width: 20px;
    height: 20px;
    position: absolute;
}
.opsional {
    font-weight: 300;
}
.opsional-dapat-dikosongkan {
    font-weight: 300;
    text-align: center;
}
.group-inner {
    border-top: 2px solid #ae445a;
    box-sizing: border-box;
    margin-bottom: 40px;
    margin-top: 40px;
    width: 100%;
    height: 2px;
}
.disclaimer-seluruh-data {
    margin: 0;
    font-size: 8px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
}
.ukuran-maksimal-berkas {
    text-align: left;
    font-weight: 300;
}
.pluscirclefill-icon {
    position: relative;
    width: 50px;
    height: 50px;
    overflow: hidden;
    flex-shrink: 0;
}
.plus {
    border-radius: 10px;
    border: 2px solid #ae445a;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 13px 14px;
}
.pas-foto-4x6 {
    position: relative;
    font-weight: 300;
    display: inline-block;
    width: 109px;
    flex-shrink: 0;
}
.foto {
    width: 129px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
}
.pas-foto {
    /* position: absolute;
    top: 94px;
    left: 140px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
.ktp2 {
    margin: 0;
    font-weight: 300;
}
.optional {
    margin: 0;
    width: 100%;
    font-size: 10px;
}
.pluscirclefill {
    position: absolute;
    max-height: 58px;
    max-width: 58px;
    top: 0%;
    right: 2.57%;
    /* bottom: 52.42%; */
    /* left: 90.75%; */
    /* max-width: 100%; */
    overflow: hidden;
    /* max-height: 100%; */
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
.button-wrapper {
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    width: 101px;
    height: 33px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
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
.div {
    position: relative;
    letter-spacing: 0.01em;
    display: none;
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

</style>
