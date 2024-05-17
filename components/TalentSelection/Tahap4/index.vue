<template>
    <div>
        <div class="mt-0 ml-0" style="display: flex; column-gap: 20px;">
            <div cols="3" class="total-kandidat">
                <div class="">
                    Total Kandidat:
                </div>
                <div class="">
                    {{ dataCandidate?.count ? dataCandidate?.count : 0 }} Orang
                </div>
            </div>
            <div cols="3" class="total-kandidat">
                <div class="">
                    Total Kandidat Dipilih:
                </div>
                <div class="">
                    {{ idCandidats.length }} Orang
                </div>
            </div>
        </div>

        <div style="height: 581px; overflow: auto;  overflow-x: hidden">
            <v-row class="mt-3" align="center">
                <v-col v-for="value, key in dataCandidate?.candidate_list" :key="key" cols="12" class="pb-0">
                    <div class="history-1">
                        <div class="frame-parent-ts">
                            <div class="foto-tahap1-parent">
                                <v-checkbox class="input-checkbox" :value="isSelected(value.job_seeker_id)" @change="onChecked($event, value.job_seeker_id)" color="#ae445a"></v-checkbox>
                                <img
                                    class="foto-tahap1-icon"
                                    :src="value.photo"
                                    alt="photo" @error="handleImgError($event)"
                                />
                                <b class="list-item-name">{{ value.name }}</b>
                            </div>
                            <div>
                                <v-row>
                                    <v-col cols="12" class="">
                                        <v-text-field
                                            placeholder="Input zoom link here" :value="value.link_interview"
                                            solo class="selection4-text-field" @input="debounceInput($event, value.job_seeker_id)"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </div>
    
                            <div style="position: relative; display: flex; justify-content: end; column-gap: 10px;">
                                <div class="orange-btn" style="">
                                    <div class="" @click="clickAbstain(value.job_seeker_id)">
                                        <b class="button mx-3">Abstain</b>
                                    </div>
                                </div>
                                <div class="orange-btn" style="">
                                    <div class="px-3 d-flex" style="align-items: center;" @click="clickGrade(value.job_seeker_id, value.grade_score)">
                                        <b class="button">Grade</b>
                                        <img v-if="value.grade_score" class="ml-2" alt="" src="@/assets/svg/eyecirclefill.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </v-col>
            </v-row>
        </div>
        <div style="position: relative; display: flex; justify-content: end; column-gap: 20px; margin-top: 60px; padding-bottom: 30px;">
            <div class="orange-btn" style="">
                <div class="" @click="unselectAll">
                    <b class="button mx-4">Unselect All</b>
                </div>
            </div>
            <div class="orange-btn" style="">
                <div class="" @click="continueStep">
                    <b class="button mx-4">Continue to “Tahap 5”</b>
                </div>
            </div>
        </div>
        <Dialog-GradeForm :show="gradeFormDialog" :closeDialog="closeDialog" :jobSeekerId="job_seeker_id"/>
        <Dialog-GradeResult :show="gradeResultDialog" :closeDialog="closeDialogGradeResult" :jobSeekerId="job_seeker_id"/>
    </div>
</template>

<script>
import debounce from 'debounce';
import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
import userRedImage from '~/assets/img/user-red.png';
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    components: { 
        Multiselect,
    },
    data () { return {
        panel: [],
        radios: [],
        idCandidats:[],
        gradeFormDialog: false,
        gradeResultDialog: false,

        job_seeker_id: null,
        dataCandidate: null,
    }},
    watch: {
        idCandidats(to, from){
        }
    },
    setup() {
        const { getListCandidateAPI, postChooseCandidate, postLinkInterview, putAbstain } = API()
        return { getListCandidateAPI, postChooseCandidate, postLinkInterview, putAbstain };
    },
    computed: {
		...mapState('provider-selection', ['listCandidate']),
        ...mapGetters('provider-selection', ['tahapanGetter']),
    },
    props: { 
        next: { type: Function, default() { return {} } },
    },
    async mounted(){
        await this.getListCandidate();
        this.dataCandidate = this.listCandidate;
    },
    methods: {
		...mapActions('provider-selection', ['getListCandidate']),
        ...mapMutations('provider-selection', ['setTahapan', 'setListCandidate']),

        async continueStep() {
            if(this.idCandidats.length){
                await this.postChooseCandidate({
                    status_step: 'tahap 5',
                    job_seeker_id: this.idCandidats,
                    job_post_id: this.tahapanGetter.jobSelected?.id
    
                }).then((result)=>{
                    if(result){
                        this.setTahapan({ tahap: 'Tahap 5', ...this.tahapanGetter });
                        return this.next('Tahap 5');
                    }
                })
            }else{
                this.$notifier.showMessage({ content: 'Mohon pilih kandidat terlebih dahulu.', status: 'warning' });
            }
        },
        async clickGrade(job_seeker_id, already_filled){
            this.job_seeker_id = job_seeker_id;
            if(already_filled){
                this.gradeResultDialog = true;
            }else{
                this.gradeFormDialog = true;
            }
        },
        async clickAbstain(job_seeker_id) {
            await this.putAbstain(job_seeker_id, this.tahapanGetter.jobSelected?.id).then((result)=>{
                this.refreshData();
            })
        },
        async refreshData() {
            await this.getListCandidateAPI({
                selection_path: "selection",
                status_step: this.tahapanGetter.tahap,
                job_post_id: this.tahapanGetter.jobSelected?.id
            }).then((result)=>{
                if(result){
                    this.setListCandidate(result.data)
                    this.dataCandidate = result.data;
                }
            })
        },
        debounceInput: debounce( async function (url, job_seeker_id) {
            await this.postLinkInterview({
                job_seeker_id: job_seeker_id,
                url: url
            }, this.tahapanGetter.jobSelected?.id).then((result)=>{
                this.refreshData();
            })
        },2000),
        onChecked(value, job_seeker_id) {
            if (!this.idCandidats.includes(job_seeker_id)) {
                this.idCandidats.push(job_seeker_id);
            } else {
                let index = this.idCandidats.indexOf(job_seeker_id);
                this.idCandidats.splice(index, 1);
            }
        },

        isSelected(job_seeker_id) {
            return this.idCandidats.includes(job_seeker_id);
        },
        unselectAll(){
            this.idCandidats = [];
        },
        closeDialog(){
            this.gradeFormDialog = false;
            this.refreshData();
        },
        closeDialogGradeResult(){
            this.gradeResultDialog = false;
            this.refreshData();
        },
        handleImgError(event) {
            event.target.src = userRedImage;
        }
    }
}
</script>
<style scoped>
.selection4-text-input {
    border-radius: 10px;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    font-size: 12px;
}.selection4-text-input::placeholder {
    font-style: italic;
    text-align: center;
}
.table-btn {
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
    width: fit-content;
    margin: auto;
}
.panel-table {
    width: 100%;
    /* background-color: yellow; */
}
.panel-table-item td {
    padding-top: 10px;
}
.panel-table tr th{
    color: #AE445A;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.list-item-name {
    color: #AE445A;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.total-kandidat {
    display: flex;
    width: -webkit-fit-content;
    height: 33px;
    padding: 17px 10px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #AE445A;
    background: #FFF;
    box-shadow: 5px 0px 5px 0px #B3B9C5;
    color: #AE445A;
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.text-tahap {
    color: #FFF;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.text-tahap-desc {
    color: #FFF;
    text-align: justify;
    font-family: Poppins;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
.card-ts {
    height: 111px;
    color: #fff;
    margin: unset;
    position: relative;
    border-radius: 10px;
    background: linear-gradient(90deg, #F39F5A 0%, #AE445A 100%);
}
.card-ts.terminate {
    background: linear-gradient(90deg, #718199 0%, #B6B6B6 100%) !important;
}
.card-ts.terminate .schedule-container {
    border-radius: 20px;
    background-color: #718199;
    height: 17px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    font-size: 10px;
    color: #fff;
}

.edit-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;
}
.foto-tahap1-icon {
    width: 50px;
    height: 50px;
    padding: 2px;
    border-radius: 50%;
    border: 3px solid #ae445a;
    object-fit: cover;
}
.history-1 {
    width: 100%;
    height: 71px;
}
.frame-parent-ts {
    border-radius: 10px;
    background-color: #fff;
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
.foto-tahap1-parent {
    width: auto;
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
}
</style>