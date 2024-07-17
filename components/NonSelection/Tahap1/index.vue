<template>
    <div>
        <div style="height: 544px; overflow: hidden;  overflow-x: hidden">
            <v-row class="mt-2" align="start" style="">
                <v-col cols="12" md="6" class="">
                    <button class="" :class="file == null ? 'drop-file-non-selection' : 'drop-file-non-selection-filled'" @click="selectFile()">
                        <v-row v-if="file == null">
                            <v-col cols="12" class="pt-5 pb-2">
                                <img class="mt-3 mb-1" alt="" src="@/assets/svg/upload-orange.svg" />
                            </v-col>
                            <v-col cols="12" class="text-tahap-big pa-0" style="color: #AE445A;">
                                <b class="">Upload Dokumen</b>
                            </v-col>
                            <v-col cols="12" class="text-center text-tahap-desc-big pt-1 pb-8" style="color: #404041;">
                                <div class="">*Dokumen dengan format (CSV)</div>
                            </v-col>
                        </v-row>
                        
                        <!-- Filled -->
                        <v-row v-else>
                            <v-col cols="12" class="pt-8 pb-6">
                                <img class="mt-3 mb-1" alt="" src="@/assets/svg/centang-putih.svg" />
                            </v-col>
                            <v-col cols="12" class="text-tahap-big pa-0">
                                <b class="">Dokumen Sudah Di-Upload</b>
                            </v-col>
                            <v-col cols="12" class="text-center text-tahap-desc-big pt-1 pb-8">
                                <div class="">*Dokumen dengan format (CSV)</div>
                            </v-col>
                        </v-row>
                    </button>
                    <input class="d-none" type="file" ref="fileInput" @change="onSelectFile($event)">

                </v-col>
                <v-col cols="12" md="6" class="">
                    <v-row class="card-ts-big mb-5" style="cursor: pointer;" @click="downloadTemplate()">
                        <v-col cols="12" class="pb-0">
                            <img class="mt-3 mb-1" alt="" src="@/assets/svg/doc-tahap.svg" />
                        </v-col>
                        <v-col cols="12" class="text-tahap-big pa-0">
                            <b class="">Template Dokumen</b>
                        </v-col>
                        <v-col cols="12" class="text-center text-tahap-desc-big pt-1 pb-8">
                            <div class="">*Klik di sini untuk mengunduh</div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>
        <div style="position: relative; display: flex; justify-content: end; column-gap: 20px; margin-top: 60px; padding-bottom: 30px;">
            <!-- <div class="orange-btn" style="">
                <div class="" @click="unselect">
                    <b class="button mx-4">Unselect All</b>
                </div>
            </div> -->
            <div></div>
            <div :class="file ? 'orange-btn' : 'grey-btn'" style="">
                <div class="" @click="file ? createDialog = true : createDialog = false">
                    <b class="button mx-4">Continue with Pre-Test</b>
                </div>
            </div>
            <div class="orange-btn" style="">
                <div class="" @click="continueStep">
                    <b class="button mx-4">Continue without Pre-Test</b>
                </div>
            </div>
        </div>
        <Dialog-PretestNonSelection :show="createDialog" :closeDialog="closeDialog" :uploadDocument="uploadDocument" :continueStepWithPretest="continueStepWithPretest" :jobPostId="jobPostId"/>
        <AlertNonSelection :show="alertDialog" :onApprove="alertOnApprove" :dataValidation="dataValidation" />
    </div>
</template>

<script>
import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    components: { 
        Multiselect,
    },
    data () { return {
        panel: [],
        radios: [],
        idCandidats:[],
        dataCandidate: null,
        file: null,
        jobPostId: null,
        dataValidation: [],
        createDialog: false,
        alertDialog: false
    } },
    watch: {
        // tahapanNonSeleksiGetter(to, from){
        //     this.refreshData();
        // }
    },
    setup() {
        const { getDownloadTemplate, postUploadTemplate } = API()
        return { getDownloadTemplate, postUploadTemplate };
    },
    computed: {
        ...mapGetters('provider-selection', ['tahapanNonSeleksiGetter']),
    },
    props: { 
        next: { type: Function, default() { return {} } },
    },
    async mounted(){},
    methods: {
        ...mapMutations('provider-selection', ['setTahapanNonSeleksi', 'setListCandidate']),
        async downloadTemplate() {
            await this.getDownloadTemplate().then((result)=>{
                const filename = 'template_non_selection_'+this.$moment().format('YYYYMMDD')+'.xlsx';
                let mimeType = 'application/vnd.ms-excel';
                const blob = new Blob([result], { type: mimeType });

                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = filename;

                link.dataset.downloadurl = [mimeType, link.download, link.href].join(':');
                link.draggable = true;
                link.classList.add('dragout');
                link.click();
            });
        },
        async continueStep() {
            const body = new FormData();
            body.append('file_non_selection', this.file);
            await this.postUploadTemplate(body).then((result)=>{
                if(result){
                    this.dataValidation = result.data.validate_data == null ? [] : result.data.validate_data;
                    this.alertDialog = true;
                }
            });

        },
        async continueStepWithPretest() {
            this.setTahapanNonSeleksi({ tahap: 'Tahap 2' });
            return this.next('Tahap 2');
        },
        async uploadDocument() {
            const body = new FormData();
            body.append('file_non_selection', this.file);
            await this.postUploadTemplate(body).then((result)=>{
                if(result){
                    this.jobPostId = result.data.job_post_id;
                }
            });
        },

        selectFile(question){
            this.$refs.fileInput.click();
        },
        onSelectFile (event) {
            this.file = event.srcElement.files[0];
        },
        getFileName(file){
            let name = file.split('/');
            return name[name.length - 1];
        },
        closeDialog(){
            this.createDialog = false;
        },
        closeAlertNonSelection() {
            this.alertDialog = false;
        },
        alertOnApprove(){
            this.setTahapanNonSeleksi({ tahap: 'Tahap 2' });
            this.$notifier.showMessage({ content: 'Berhasil ke tahap 2.', status: 'success' });
            return this.next('Tahap 2');
        }
    },
}
</script>
<style scoped>
.drop-file-non-selection {
    border-radius: 10px;
    border: 3px dashed #ae445a;
    box-sizing: border-box;
    width: 100%;
    height: 185px;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    gap: 15px;
}
.drop-file-non-selection-filled {
    border-radius: 10px;
    background: linear-gradient(90deg, #3AB471, #3B78C2);
    box-sizing: border-box;
    width: 100%;
    height: 185px;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px;
    gap: 15px;
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

.text-tahap-big {
    color: #FFF;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.text-tahap-desc-big {
    color: #FFF;
    text-align: justify;
    font-family: Poppins;
    font-size: 12px;
    font-style: italic;
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
.card-ts-big {
    height: 185px;
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