    <template>
    <div>
        <v-card class="card-register">
            <v-row class="job-post-nav ma-0">
                <v-col cols="3" class="job-post-nav-container">
                    <div class="job-post-nav-text" @click="$router.push('/job/post')">Job Post</div>
                </v-col>
                <v-col cols="3" class="job-post-nav-container">
                    <div class="job-post-nav-text" @click="$router.push('/job/draft')">Draft</div>
                </v-col>
                <v-col cols="3" class="job-post-nav-container active">
                    <div class="job-post-nav-text" @click="$router.push('/job/rejected')">Rejected</div>
                </v-col>
                <v-col cols="3" class="job-post-nav-container">
                    <div class="job-post-nav-text" @click="$router.push('/job/approval')">Approval</div>
                </v-col>
            </v-row>
            <div class="my-2" style="position: relative;">
                <div class="blokade-parent ma-8 pt-1" style="height: 775px; overflow-y: auto; overflow-x: hidden;">
                    <v-row class="">
                        <v-col v-for="value, key in jobs" cols="12" class="">
                            <div class="history-1">
                                <div class="frame-parent-draft">
                                    <div class="foto-perusaahaan-parent">
                                        <img
                                            class="foto-perusaahaan-icon"
                                            alt=""
                                            src="@/assets/svg/foto-perusaahaan.svg"
                                        />
                                        <b class="">{{ value.title_job }}</b>
                                    </div>
                                    <div class="">{{ value.job_provider_name }}</div>
                                    <div class="">{{ value.salary }}</div>
                                    <div class="">{{ value.created_at }}</div>
                                    <div class="edit-parent">
                                        <img @click="openNotesDialog(value)" class="action-icon" src="@/assets/svg/message.svg" />
                                        <div class="edit-btn-container" @click="editJob(value.job_post_id)">
                                            <div class="attach-mpr-parent">
                                                <b class="button">Edit</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </v-card>
        <Dialog-RejectedNotes :show="notesDialog" :content="notes" :closeDialog="closeDialog"/>
    </div>
</template>
<script>

import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
export default {
    name: "register",
    layout: "register",
    components: { 
        Multiselect,
    },
    data: () => ({
        jobs: [],
        notes: "",
        notesDialog: false,
    }),
    watch: {},
    setup() {
        const { geCategoryJob } = API()
        return { geCategoryJob };
    },
    async mounted() {
        this.getData();
    },
    methods: {
        async getData(){
            await this.geCategoryJob('reject').then((result)=>{
                this.jobs = result;
            })
        },
        async editJob(id_job){
            await localStorage.setItem('id_job_post', id_job);
            return this.$router.push('/job/post');
        },
        openNotesDialog(data){
            this.notes = data.reason;
            this.notesDialog = true;
        },
        closeDialog(){
            this.notesDialog = false;
            this.notes = "";
        },
    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
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
.edit-btn-container {
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    width: 111px;
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
    cursor: pointer;
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
    cursor: pointer;
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
    background-color: #ffffff00;
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
