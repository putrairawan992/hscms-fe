<template>
    <div>
        <v-card class="card-register">
            <div class="my-2" style="position: relative;">
                <div class="blokade-parent ma-8 pt-1">
                    <v-row class="mt-4">
                        <v-col cols="12" class="text-left">
                            <div class="page-title">
                                Employee Data
                            </div>
                        </v-col>
                        <v-col cols="12" class="text-left">
                            <v-row>
                                <v-col class="employee-data">
                                    <b>
                                        Total Karyawan: <span style="color: #AE445A;">{{ countEmployee }}</span> Orang
                                    </b>
                                </v-col>
                                <v-col class="employee-data">
                                    <div>
                                        None: <span style="color: #AE445A;">{{ countNoneStatus }}</span> Orang
                                    </div>
                                </v-col>
                                <v-col class="employee-data">
                                    <div>
                                        Sent: <span style="color: #AE445A;">{{ countSentStatus }}</span> Orang
                                    </div>
                                </v-col>
                                <v-col class="employee-data">
                                    <div>
                                        Employee Signed: <span style="color: #AE445A;">{{ countEmployeeSignedStatus }}</span> Orang
                                    </div>
                                </v-col>
                                <v-col class="employee-data">
                                    <div>
                                        Full Signed: <span style="color: #AE445A;">{{ countFullSignedStatus }}</span> Orang
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                    <v-row align="center" class="mb-4">
                        <v-col style="max-width: 710px !important;">
                            <v-row>
                                <v-col cols="6" xs="3" md="3" lg="3" xl="3" xxl="3" class="">
                                    <v-row align="center">
                                        <v-col cols="12" class="label pb-1">
                                            <b>Berkas</b>
                                        </v-col>
                                        <v-col cols="12" class="pt-0 input-checkbox-container">
                                            <multiselect
                                                v-model="file" :allow-empty="false"
                                                :options="['Semua','Offering Letter', 'PKWT']"
                                                placeholder="Pilih Berkas" class="header-select-input"
                                            >
                                            </multiselect>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="6" xs="3" md="3" lg="3" xl="3" xxl="3" class="">
                                    <v-row align="center">
                                        <v-col cols="12" class="label pb-1">
                                            <b>Status Berkas</b>
                                        </v-col>
                                        <v-col cols="12" class="pt-0 input-checkbox-container">
                                            <multiselect
                                                v-model="file_status" :allow-empty="false"
                                                placeholder="Status Berkas" class="header-select-input"
                                                :options="['Semua', 'None', 'Sent', 'Employee Signed', 'Full Signed']"
                                            >
                                            </multiselect>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <!-- <v-col cols="6" xs="3" md="3" lg="3" xl="3" xxl="3" class="">
                                    <v-row align="center">
                                        <v-col cols="12" class="label pb-1">
                                            <b>Jalur</b>
                                        </v-col>
                                        <v-col cols="12" class="pt-0 input-checkbox-container">
                                            <multiselect
                                                :options="['arrayTahapan']"
                                                placeholder="Pilih Jalur" :allow-empty="false"
                                                class="header-select-input"
                                                >
                                            </multiselect>
                                        </v-col>
                                    </v-row>
                                </v-col> -->
                                <v-col cols="6" xs="3" md="3" lg="3" xl="3" xxl="3" class="">
                                    <v-row align="center">
                                        <v-col cols="12" class="label pb-1">
                                            <b>Status Karyawan</b>
                                        </v-col>
                                        <v-col cols="12" class="pt-0 input-checkbox-container">
                                            <multiselect
                                                v-model="employee_status" :allow-empty="false"
                                                placeholder="Status Karyawan" class="header-select-input"
                                                :options="['Semua', 'Kontrak', 'Freelance', 'Magang', 'Probation']"
                                            >
                                            </multiselect>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="auto">
                            <v-row align="center">
                                <v-col cols="12" class="label pb-1">
                                    &nbsp;
                                </v-col>
                                <v-col cols="12" class="pt-0 input-checkbox-container">
                                    <div class="frame-container">
                                        <div class="attach-mpr-parent" @click="openDialog">
                                            <b class="button">Download All</b>
                                            <img class="download-all-icon" alt="" src="@/assets/svg/download.svg" />
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                    <div style="height: 580px; overflow-y: auto; overflow-x: hidden;">
                        <v-row class="">
                            <v-col v-for="item in listEmployee" cols="12" class="pb-0">
                                <div class="history-1">
                                    <div class="frame-parent-draft">
                                        <div class="foto-perusaahaan-parent icon-container" @click="clickDetail(item.employee_id)">
                                            <img
                                                v-if="item.photo"
                                                class="foto-perusaahaan-icon" alt="photo"
                                                :src="item.photo" @error="handleImgError"
                                            />
                                            <img
                                                v-else
                                                class="foto-perusaahaan-icon" alt="photo"
                                                src="@/assets/img/user-red.png" @error="handleImgError"
                                            />
                                            <b class="">{{ item.employee_name }}</b>
                                        </div>
                                        <div>
                                            <div class="employee-data-container">
                                                <b style="min-width: 87px;"> {{ item.request_type }} </b>
                                                <div style="min-width: 101px; justify-content:center;" class="employee-data-item">{{ item.tracking_document }}</div>
                                                <div class="icon-container" @click="clickDetail(item.employee_id)">
                                                    <img class="edit-icon" alt="" src="@/assets/svg/eye-circle-fill.svg" />
                                                </div>
                                                <div class="icon-container">
                                                    <img class="edit-icon" alt="download" @click="downloadPDF(item.employee_id)" src="@/assets/svg/download-red.svg" />
                                                </div>
                                                <div class="employee-data-item"> {{ item.selection_type }} </div>
                                            </div>
                                        </div>
                                        <div class="edit-parent">
                                            <div class="btn-employee-container" :class="item.employee_type">
                                                <div class="attach-mpr-parent">
                                                    <b class="button">{{ item.employee_type ? item.employee_type : 'Empty' }}</b>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </div>

                    <v-row>
                        <v-col cols="12">

                            <v-pagination
                                v-model="page"
                                :length="paginate"
                                prev-icon="mdi-menu-left"
                                next-icon="mdi-menu-right" class="my-4"
                                size="2" color="#ae445a" navigation-color="#ae445a"
                            ></v-pagination>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </v-card>
        <Dialog-ChoseDownload :show="dialog" :closeDialog="closeDialog"/>
    </div>
</template>
<script>

import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
import userRedImage from '~/assets/img/user-red.png';
export default {
    layout: "jobProvider",
    components: { 
        Multiselect,
    },
    data: () => ({
        file: null,
        file_status: null,
        employee_status: null,
        dialog: false,

        page: 1,
        paginate: 1,
        listEmployee: [],

        countEmployee: 0,
        countNoneStatus: 0,
        countSentStatus: 0,
        countEmployeeSignedStatus: 0,
        countFullSignedStatus: 0,
    }),
    watch: {
        file (to, from) {
            this.getData();
        },
        file_status (to, from) {
            this.getData();
        },
        employee_status (to, from) {
            this.getData();
        },
        page (to, from) {
            this.getData();
        }
    },
    setup() {
        const { getEmployee, getEmployeeDetail, getEmployeeDataPDF } = API()
        return { getEmployee, getEmployeeDetail, getEmployeeDataPDF };
    },
    async mounted() {
        this.getData();
    },
    methods: {
        async getData(){
            await this.getEmployee(this.page, this.file, this.file_status, this.employee_status).then((result)=>{if(result){
                this.paginate = result.paginate.length || 1;
                this.listEmployee = result.employee_list;

                this.countEmployee = result.count_employee;
                this.countNoneStatus = result.count_none_status;
                this.countSentStatus = result.count_sent_status;
                this.countEmployeeSignedStatus = result.count_employee_signed_status;
                this.countFullSignedStatus = result.count_full_signed_status;
            }})
        },
        async clickDetail(id){
            await localStorage.setItem('employee_id', id);
            this.$router.push('/employee-data/detail');
        },
        async downloadPDF(employee_id) {
            const result = await this.getEmployeeDataPDF(employee_id); // Assuming getEmployeeDataPDF returns a Promise
            const filename = "employee-data.pdf";
            const blob = new Blob([result], {type: 'application/pdf'}); // Correcting type to PDF

            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = filename;

            link.dataset.downloadurl = ['application/pdf', link.download, link.href].join(':');
            link.draggable = true; 
            link.classList.add('dragout');
            link.click();
        },
        openDialog(){
            this.dialog = true;
        },
        closeDialog(alert){
            if(alert) {
                this.$alert.showAlert({ content: 'File telah di-download', show: true });
            } this.dialog = false;
        },
        handleImgError(event) {
            event.target.src = userRedImage;
        }
    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.icon-container {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    height: -webkit-fill-available;
    /* border-left: 1px solid #AE445A; */
}
.employee-data-item{
    display: flex;
    align-items: center;
    height: -webkit-fill-available;
    /* border-left: 1px solid #AE445A; */
}
.employee-data-container {
    width: 372px;
    border-radius: 5px;
    border: 1px solid #AE445A;
    display: flex;
    justify-content: space-around;
    height: 30px;
    align-content: center;
    align-items: center;
}
.employee-data {
    padding: 5px 8px;
    margin-top: 20px;
    margin-left: 12px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #AE445A;
    max-width: -webkit-fit-content;
}
.download-all-icon {
    width: 10px;
    height: 10px;
    overflow: hidden;
    flex-shrink: 0;
    margin-left: 5px;
}
.page-title {
    color: #AE445A;
    font-family: Nunito;
    font-size: 26px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
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
    background-color: #fff;
}.header-select-input::placeholder {
    font-style: italic;
}
.edit-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;
}
.foto-perusaahaan-icon {
    width: 50px;
    height: 50px;
    padding: 2px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #ae445a;
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
.input-checkbox-container {
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
.btn-employee-container {
    border-radius: 10px;
    box-shadow: 5px 0px 5px #b3b9c5;
    background: #ae445a;
    width: 97px;
    height: 30px;
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
.kontrak{
    background: #ae445a;
}
.freelance{
    background: #8364BA;
}
.magang{
    background: #F39F5A;
}
.probation{
    background: #3AB471;
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

.tempat-tanggal-lahir {
    position: relative;
}
.calendar-input-container{
    position: relative;
}
.feather-icon-calendar {
    top: 25%;
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
