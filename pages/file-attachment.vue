<template>
    <div>
        <v-card class="card-register" style="min-height: 850px;">
            <div class="my-2" style="position: relative;">
                <div class="blokade-parent ma-8 pt-1">
                    
                    <div class="" style="position: relative;">
                        <div class="blokade-parent mt-8 pt-1">
                            <v-row align="center" class="mb-0">
                                <v-col cols="12" class="text-left">
                                    <div class="pretest-title">
                                        Berkas Lampiran
                                    </div>
                                    <div class="berkas-lampiran-subtitle mb-1 mt-1">Mohon baca petunjuk sesuai deskripsi secara teliti</div>
                                </v-col>
                            </v-row>

                            <div class="list-container" >
                                <div class="mt-4 mb-12">
                                    <v-row align="center" class="pb-12">
                                        <v-col cols="12" align="center"  md="4">
                                            <div :class="data?.curriculum_vitae.path == null ? 'cv-big-empty' : 'cv-big'">
                                                <div class="wrapper-big">
                                                    <img class="icon-big" alt="CV" src="../assets/img/1-2@2x.png" />
                                                </div>
                                                <div class="cv-wrapper-big">
                                                    <b class="text-cv mt-2">CV</b>
                                                </div>
                                                <div class="cv-button-wrapper">
                                                    <img class="cv-button-icon mr-2" alt="" src="@/assets/svg/eyecirclefill.svg" @click="openFile(data?.curriculum_vitae.path)"/>
                                                    <img class="cv-button-icon" alt="" src="@/assets/svg/upload.svg" @click="uploadFile(data?.curriculum_vitae.type_attachment)"/>
                                                    <img class="cv-button-icon ml-2" alt="" src="@/assets/svg/download-white.svg" @click="downloadAttachment(data?.curriculum_vitae)"/>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" align="center" md="4" class="mt-4">
                                            <div :class="data?.photo.path == null ? 'cv-big-empty' : 'cv-big'">
                                                <div class="wrapper-big">
                                                    <img class="icon-big" alt="" src="../assets/img/8@2x.png" />
                                                </div>
                                                <div class="cv-wrapper-big">
                                                    <b class="text-cv mt-2">Pas Foto 4x6</b>
                                                </div>
                                                <div class="cv-button-wrapper">
                                                    <img class="cv-button-icon mr-2" alt="" src="@/assets/svg/eyecirclefill.svg" @click="openFile(data?.photo.path)"/>
                                                    <img class="cv-button-icon" alt="" src="@/assets/svg/upload.svg" @click="uploadFile(data?.photo.type_attachment)"/>
                                                    <img class="cv-button-icon ml-2" alt="" src="@/assets/svg/download-white.svg" @click="downloadAttachment(data?.photo)"/>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" align="center" md="4" class="mt-4">
                                            <div :class="data?.ktp.path == null ? 'cv-big-empty' : 'cv-big'">
                                                <div class="wrapper-big">
                                                    <img class="icon-big" alt="" src="../assets/img/2@2x.png" />
                                                </div>
                                                <div class="cv-wrapper-big">
                                                    <b class="text-cv mt-2">KTP</b>
                                                </div>
                                                <div class="cv-button-wrapper">
                                                    <img class="cv-button-icon mr-2" alt="" src="@/assets/svg/eyecirclefill.svg" @click="openFile(data?.ktp.path)"/>
                                                    <img class="cv-button-icon" alt="" src="@/assets/svg/upload.svg" @click="uploadFile(data?.ktp.type_attachment)"/>
                                                    <img class="cv-button-icon ml-2" alt="" src="@/assets/svg/download-white.svg" @click="downloadAttachment(data?.ktp)"/>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" align="center" md="4" class="mt-4">
                                            <div :class="data?.kk.path == null ? 'cv-big-empty' : 'cv-big'">
                                                <div class="wrapper-big">
                                                    <img class="icon-big" alt="" src="../assets/img/4@2x.png" />
                                                </div>
                                                <div class="cv-wrapper-big">
                                                    <b class="text-cv mt-2">Kartu Keluarga</b>
                                                </div>
                                                <div class="cv-button-wrapper">
                                                    <img class="cv-button-icon mr-2" alt="" src="@/assets/svg/eyecirclefill.svg" @click="openFile(data?.kk.path)"/>
                                                    <img class="cv-button-icon" alt="" src="@/assets/svg/upload.svg" @click="uploadFile(data?.kk.type_attachment)"/>
                                                    <img class="cv-button-icon ml-2" alt="" src="@/assets/svg/download-white.svg" @click="downloadAttachment(data?.kk)"/>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" align="center" md="4" class="mt-4">
                                            <div :class="data?.npwp.path == null ? 'cv-big-empty' : 'cv-big'">
                                                <div class="wrapper-big">
                                                    <img class="icon-big" alt="" src="../assets/img/frame-2036@2x.png" />
                                                </div>
                                                <div class="cv-wrapper-big">
                                                    <b class="text-cv mt-2">NPWP</b>
                                                </div>
                                                <div class="cv-button-wrapper">
                                                    <img class="cv-button-icon mr-2" alt="" src="@/assets/svg/eyecirclefill.svg" @click="openFile(data?.npwp.path)"/>
                                                    <img class="cv-button-icon" alt="" src="@/assets/svg/upload.svg" @click="uploadFile(data?.npwp.type_attachment)"/>
                                                    <img class="cv-button-icon ml-2" alt="" src="@/assets/svg/download-white.svg" @click="downloadAttachment(data?.npwp)"/>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" align="center" md="4" class="mt-4">
                                            <div :class="data?.bpjs.path == null ? 'cv-big-empty' : 'cv-big'">
                                                <div class="wrapper-big">
                                                    <img class="icon-big" alt="" src="../assets/img/6@2x.png" style="width: 125px;"/>
                                                </div>
                                                <div class="cv-wrapper-big">
                                                    <b class="text-cv mt-2">BPJSKES & TK</b>
                                                </div>
                                                <div class="cv-button-wrapper">
                                                    <img class="cv-button-icon mr-2" alt="" src="@/assets/svg/eyecirclefill.svg" @click="openFile(data?.bpjs.path)"/>
                                                    <img class="cv-button-icon" alt="" src="@/assets/svg/upload.svg" @click="uploadFile(data?.bpjs.type_attachment)"/>
                                                    <img class="cv-button-icon ml-2" alt="" src="@/assets/svg/download-white.svg" @click="downloadAttachment(data?.bpjs)"/>
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
        <!-- <Dialog-FileAttachment /> -->
        <Dialog-OpenFile :show="fileDialog" :fileUrl="fileUrl" :closeDialog="closeFile"/>
        <Dialog-UploadAttachment :show="dialogAttach" :closeDialog="closeDialog" :typeAttachment="typeAttachment"/>
        <AlertApproval content="Data akan dihapus. Anda yakin ingin menghapus data?" :onApprove="actionDelete" :closeDialog="closeAlertApproval" :show="showAlertApproval"/>
    </div>
</template>
<script>

import { API } from '@/api/index'
export default {
    name: "Contract",
    middleware: "jobSeeker",
    components: {},
    data: () => ({
        data: null,
        fileUrl: null,
        fileDialog: false,
        dialogAttach: false,
        typeAttachment: null,
        deleteAttachment: null,
        showAlertApproval: false,
    }),
    watch: {},
    computed: {},
    setup() {
        const { getFileAttachment, downloadFileAttachment, putReuploadAttachment, } = API()
        return { getFileAttachment, downloadFileAttachment, putReuploadAttachment };
    },
    async mounted() {
        await this.getData();
    },
    methods: {
        async getData(){
            await this.getFileAttachment().then((result)=>{
                this.data = result;
                console.log('this.data', this.data);
            });
        },
        deleteData(data){
            if(!data.path){
                return this.$notifier.showMessage({ content: 'File tidak tersedia.', status: 'warning' });
            }
            this.showAlertApproval = true;
            this.deleteAttachment = data.type_attachment;
        },
        async actionDelete(){
            this.showAlertApproval = false;
            await this.putReuploadAttachment(this.deleteAttachment).then((result)=>{
                this.$alert.showAlert({ content: 'Data telah dihapus.', show: true });
            });
        },
        
        uploadFile(type_attachment){
            this.typeAttachment = type_attachment;
            this.dialogAttach = true;
        },

        async downloadAttachment(data) {
            if(!data.path){
                return this.$notifier.showMessage({ content: 'File tidak tersedia.', status: 'warning' });
            }
            await this.downloadFileAttachment(data.type_attachment).then((result)=>{
                const filename = this.getFileName(data.path);
                // Ekstrak ekstensi file
                const fileExtension = filename.split('.').pop().toLowerCase();
                // Tentukan tipe MIME berdasarkan ekstensi file
                let mimeType;
                switch (fileExtension) {
                    case 'pdf':
                        mimeType = 'application/pdf';
                        break;
                    case 'png':
                        mimeType = 'image/png';
                        break;
                    case 'jpg':
                    case 'jpeg':
                        mimeType = 'image/jpeg';
                        break;
                    case 'gif':
                        mimeType = 'image/gif';
                        break;
                    case 'txt':
                        mimeType = 'text/plain';
                        break;
                    case 'html':
                        mimeType = 'text/html';
                        break;
                    case 'json':
                        mimeType = 'application/json';
                        break;
                    case 'doc':
                    case 'docx':
                        mimeType = 'application/msword';
                        break;
                    case 'xls':
                    case 'xlsx':
                        mimeType = 'application/vnd.ms-excel';
                        break;
                    case 'ppt':
                    case 'pptx':
                        mimeType = 'application/vnd.ms-powerpoint';
                        break;
                    // Tambahkan lebih banyak kasus untuk tipe file lain yang sering digunakan
                    default:
                        mimeType = 'application/octet-stream'; // MIME tipe default untuk tipe file yang tidak dikenali
                        break;
                }

                const blob = new Blob([result], { type: mimeType });

                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = filename;

                link.dataset.downloadurl = [mimeType, link.download, link.href].join(':');
                link.draggable = true;
                link.classList.add('dragout');
                link.click();
                this.$alert.showAlert({ content: 'File Telah Diunduh.', show: true });
            });
        },
        getFileName(file){
            let name = file.split('/');
            return name[name.length - 1];
        },
        
        openFile(url){
            if(url){
                this.fileUrl = url;
                this.fileDialog = true;
            }else{
                this.$notifier.showMessage({ content: 'File tidak tersedia.', status: 'warning' });
            }
        },
        closeFile(){
            this.fileDialog = false;
            this.fileUrl = null;
        },
        async closeDialog(){
            this.dialogAttach = false;
            this.typeAttachment = null;
            return await this.getData();
        },
        closeAlertApproval(){
            this.showAlertApproval = false;
        },


    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.cv-button-icon {
    position: relative;
    width: 19px;
    height: 17px;
}
.berkas-lampiran-subtitle{
    font-family: Poppins;
    font-size: 12px;
    color: #404041;
    font-style: italic;

}
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
.text-sent {
    color: #404041;
    font-size: 12px;
    font-weight: bold;
    font-style: normal;
    font-family: Poppins;
    line-height: 35px; /* 158.333% */
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
.contract-todo-title {
    color: #AE445A;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 5px;
    border-bottom: 2.5px solid #AE445A;
}
.frame-contract-todo {
    width: 100%;
    display: flex;
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
