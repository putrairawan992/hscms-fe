<template>
    <v-dialog persistent v-model="show" width="650" rounded content-class="elevation-0">
        <div style="position: relative; display: flex; flex-direction: column;">
            <v-card class="pa-12" style="border-radius: 20px !important;"> 
                <v-row class="mt-0">
                    <!-- <v-col cols="12" class="text-left py-0">
                        <div class="page-sub-title">Kepada</div>
                    </v-col>
                    <v-col cols="12" class="pt-0 pb-4">
                        <multiselect
                            class="register-text-input" label="name"
                            :options="listEmployee" v-model="recipent_id"
                            placeholder="Ketikan Nama" :allow-empty="false"
                        ></multiselect>
                    </v-col> -->
                    <!-- <v-col cols="12" class="text-left py-0">
                        <div class="page-sub-title">
                            Judul
                        </div>
                    </v-col> -->
                    <!-- <v-col cols="12" class="pt-0">
                        <v-text-field v-model="title" placeholder="Ketikan Judul" solo class="grade-text-field" ></v-text-field>
                    </v-col> -->
                    <v-col cols="12" class="text-left py-0">
                        <div class="page-sub-title">
                            Isi Pesan
                        </div>
                    </v-col>
                    <v-col cols="12" class="pt-1" style="font-size: 12px;">
                        <TextEditor v-model="main_text" class="rich-editor" placeholder="Masukkan Isi Pesan"/>
                    </v-col>
                    <v-col cols="12" class="text-left py-0">
                        <div class="page-sub-title">
                            Upload File
                        </div>
                    </v-col>
                    <v-col cols="12" class="pt-1">
                        <v-file-input v-model="file_message" clearable placeholder="Pilih File..." solo class="grade-text-field"></v-file-input>
                    </v-col>
                    <!-- <v-col cols="12" class="text-left py-0">
                        <div class="page-sub-title">
                            Pilih Tanggal
                        </div>
                    </v-col>
                    <v-col cols="12" class="pt-1">
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
                    </v-col> -->

                    <v-col cols="12" class="mt-4">
                        <div style="position: relative; display: flex; justify-content: end; column-gap: 10px;">
                            <div class="orange-btn" style="">
                                <div class="" @click="onCloseDialog">
                                    <b class="button mx-4">Close</b>
                                </div>
                            </div>
                            <div></div>
                            <div class="orange-btn" style="">
                                <div class="" @click="submit()">
                                    <b class="button mx-4">Send</b>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="save-container pb-0">
                            <div></div>
                            <div class="frame-container" style="width: 101px; cursor: pointer;" @click="submit()">
                                <div class="attach-mpr-parent">
                                    <b class="button">Save</b>
                                </div>
                            </div>
                        </div> -->
                    </v-col>
                </v-row>

            </v-card>
        </div>
    </v-dialog>
</template>
<script>
import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    components: { 
        Multiselect,
    },
    data () {
        return {
            title: null,
            schedule: null,
            main_text: null,
            recipent_id: null,
            file_message: null,

            listEmployee: [],
            datePicker1: false,
        }
    },
    watch: {
        show(to, from){
            this.getData();
        },
        quantitative_score(to, from){
        }
    },
    props: {
        content: { type: String, default() { return "" } },
        message_id: { type: Number, default() { return null } },
        show: { type: Boolean, default() { return false } },
        onApprove: { type: Function, default() { return {} } },
        closeDialog: { type: Function, default() { return {} } },
    },
    setup() {
        const { getListEmployeeInbox, postReplyMessage } = API();
        return { getListEmployeeInbox, postReplyMessage };
    },
    computed: {
        ...mapGetters('provider-selection', ['tahapanGetter']),
    },
    async mounted(){
        // await this.getData();
    },
    methods: {
        async getData(){
            // await this.getListEmployeeInbox().then((result)=>{
            //     if(result){
            //         this.listEmployee = result;
            //     }
            // });
        },
        async submit(){
            if(this.message_id){
                // if(this.recipent_id == null){ this.$notifier.showMessage({ content: 'Data penerima belum terisi.', status: 'warning' }) }
                // if(this.title == null){ this.$notifier.showMessage({ content: 'Judul belum terisi.', status: 'warning' }) }
                if(this.main_text == null){ this.$notifier.showMessage({ content: 'Isi pesan belum terisi.', status: 'warning' }) }
                
                const body = new FormData();
                // body.append('title', this.title);
                // body.append('schedule', this.schedule);
                body.append('main_text', this.main_text);
                body.append('file_message', this.file_message);
                // body.append('recipent_id', this.recipent_id.id);
    
                await this.postReplyMessage(body, this.message_id).then((result)=>{
                    if(result){
                        this.onCloseDialog();
                        this.$alert.showAlert({ content: 'Pesan telah terkirim,', show: true });
                    }
                });
            }else{
                this.$notifier.showMessage({ content: 'Pesan tidak ditemukan.', status: 'warning' })
            }
        },
        onCloseDialog(){
            this.main_text = "";
            this.file_message = null;
            this.closeDialog();
        },
        parseDate (date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
    }
}
</script>

<style scoped>
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

.save-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.page-title {
    color: #AE445A;
    font-family: Nunito;
    font-size: 26px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}
.page-sub-title {
    color: #AE445A;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.close-icon-open-file {
    display: flex;
    justify-content: end;
    margin-bottom: -26px;
    margin-right: 5px;
    z-index: 2;
}
.embeddedContent {
    background-color: #d3d3d3;
    width: 100%;
    height: 75vh;
    top: 0;
    left: 0;
}
.active {
    display: inline-flex;
    height: 17px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: #3AB471;
    color: #404041;
    text-align: center;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.non-active {
    display: inline-flex;
    height: 17px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: #b8b8b8;
    color: #404041;
    text-align: center;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
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
    color: #AE445A;
    font-family: Nunito;
    font-size: 26px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
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
}.detail-opening-container {
    width: 100%;
    display: flex;
    margin: 0px 0px 20px 30px;
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

.detail-opening-btn-text {
    position: relative;
    font-size: 12px;
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
.detail-opening-button-wrapper {
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    min-width: 101px;
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