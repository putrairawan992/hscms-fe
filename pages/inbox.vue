    <template>
    <div>
        <v-card class="card-register">
            <div class="my-2" style="position: relative;">
                <div class="blokade-parent ma-8 pt-1 mb-2" style="min-height: 880px;">
                    <v-row align="center" class="mt-4 mb-4">
                        <v-col cols="12" class="text-left">
                            <div class="d-flex" style="justify-content: space-between;">
                                <div class="page-title">
                                    Inbox
                                </div>
                                <div v-if="$auth.user.role_user == 'jobprovider'" class="generate-btn ml-0" style="cursor: pointer;">
                                    <div class="attach-mpr-parent" @click="createDialog = true">
                                        <b class="button mx-4">Write New Message</b>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    
                    <div style="height: 750px; overflow: auto;  overflow-x: hidden">
                        <v-row class="mt-0" align="start">
                            <v-expansion-panels v-model="panel">
                                <v-col v-for="value, key in messages" :key="key" cols="12" class="pb-0">
                                    <div class="history-1">
                                        <div :class="value.is_read == 'true' ? 'frame-parent-inbox' : 'frame-parent-inbox-unread'" @click="activatePanel(key+1, value.id)">
                                            <div class="foto-inbox-parent">
                                                <img v-if="value.photo"
                                                    class="foto-inbox-icon"
                                                    :src="value.photo"
                                                    alt="photo"
                                                />
                                                <img v-else
                                                    class="foto-inbox-icon"
                                                    src="@/assets/img/user-white.png"
                                                    alt="photo"
                                                />
                                                <b class="list-item-name mb-0" style="color: #fff;">{{ value.sender_name }}</b>
                                            </div>
                                            <div style="color: #fff;">
                                                {{ value.title }}
                                            </div>
                                            <div style="width: 180px; display: flex; justify-content: space-between;">
                                                <img
                                                    src="@/assets/svg/download-white.svg"
                                                    height="20" width="20"
                                                    alt="download"
                                                />
                                                <div style="color: #fff;">{{ $moment(value.created_at).format('DD MMMM YYYY') }}</div>
                                                <!-- <div style="color: #fff;">{{ $moment(value.created_at).format('DD MMMM YYYY HH:mm') }}</div> -->
                                            </div>
                                        </div>
                                    </div>
                                    <v-expansion-panel class="expansion-ts" style="background-color: #fff;">
                                        <v-expansion-panel-content style="">
                                            <div class="mt-8"></div>
                                            <v-progress-circular
                                                indeterminate
                                                :size="20" :width="3"
                                                color="#f68453" class="mb-8"
                                                v-if="detailMessage.length == 0"
                                            ></v-progress-circular>

                                            <div v-if="detailMessage.length > 0" v-for="value, index in detailMessage" style="">
                                                <div class="d-flex page-sub-title mb-2" :style="value.user_type === 'other' ? 'justify-content: start;' : 'justify-content: end;'">
                                                    {{ value.sender_name }}
                                                </div>
                                                <div :style="value.user_type === 'other' ? 'justify-content: start;' : 'justify-content: end;'" v-if="value.opening_text" class="d-flex mb-2" v-html="value.opening_text" />
                                                <div :style="value.user_type === 'other' ? 'justify-content: start;' : 'justify-content: end;'" class="d-flex mb-2" >
                                                    <div :style="value.user_type === 'other' ? 'text-align: -webkit-left;' : 'text-align: -webkit-right;'" v-html="value.main_text"></div>
                                                </div>
                                                <div :style="value.user_type === 'other' ? 'justify-content: start;' : 'justify-content: end;'" v-if="value.closing_text" class="d-flex mb-2" v-html="value.closing_text" />
                                                <div :style="value.user_type === 'other' ? 'justify-content: start;' : 'justify-content: end;'" v-if="value.file" class="d-flex mb-2 mt-6" >
                                                    <div class="history-1">
                                                        <div class="frame-parent-draft">
                                                            <div class="foto-perusaahaan-parent" style="width: 400px;">
                                                                <img
                                                                    width="30px"
                                                                    alt="micosoft-excel"
                                                                    class="micosoft-excel"
                                                                    src="@/assets/svg/file.svg"
                                                                />
                                                                <b class="">{{ getFileName(value.file) }}</b>
                                                            </div>
                                                            <div :class="value.file ? 'orange-btn' : 'grey-btn'" @click="value.file ? downloadAttachment(value) : false">
                                                                <div class="">
                                                                    <b class="button mx-3">Download</b>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr class="my-8">
                                            </div>
                                            <div class="d-flex" style="justify-content: end;" v-if="detailMessage.length > 0">
                                                <div class="frame-container" style="width: 101px; cursor: pointer;" @click="reply(value.id)">
                                                    <div class="attach-mpr-parent">
                                                        <b class="button">Reply</b>
                                                    </div>
                                                </div>
                                            </div> 

                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-col>
                            </v-expansion-panels>
                        </v-row>
                    </div>
                </div>
            </div>
        </v-card>
        
        <Dialog-inboxForm v-if="$auth.user.role_user == 'jobprovider'" :show="createDialog" :closeDialog="closeDialog"/>
        <Dialog-InboxReply :show="replyDialog" :closeDialog="closeDialog" :message_id="message_id" :agreement="agreement"/>
    </div>
</template>

<script>
import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
export default {
    name: "Inbox",
    layout: "jobPost",
    components: { 
        Multiselect,
    },
    data: () => ({
        panel: [],
        messages: [],
        detailMessage: [],

        message_id: null,
        isLoading: false,
        replyDialog: false,
        createDialog: false,
        agreement: false,
    }),
    setup() {
        const { getListMessage, getDetailMessage, postReplyMessage, postCreateMessage, getMessageAttachment } = API();
        return { getListMessage, getDetailMessage, postReplyMessage, postCreateMessage, getMessageAttachment };
    },
    async mounted(){
        await this.getData();
    },
    methods: {
        async getData() {
            await this.getListMessage().then((result)=>{
                if(result){
                    this.messages = result;
                }
            });
        },
        async activatePanel(index, message_id) {
            this.detailMessage = [];
            this.panel = this.panel === index - 1 ? [] : index - 1;

            await this.getDetailMessage(message_id).then((result)=>{
                if(result){
                    this.detailMessage = result;
                    if (result) {
                        let last = result.length - 1;
                        this.agreement = result?.[last]?.agreement ? true : false;
                    }
                    console.log('this.detailMessage', this.detailMessage);
                    console.log('this.agreement inbox', this.agreement);
                }
            });
        },
        reply(id) {
            this.message_id = id;
            this.replyDialog = true;
        },
        async closeDialog() {
            this.createDialog = false;
            this.replyDialog = false;

            if(this.message_id){
                await this.getDetailMessage(this.message_id).then((result)=>{
                    if(result){
                        this.detailMessage = result;
                    }
                });
            }
        },
        async downloadAttachment(data) {
            await this.getMessageAttachment(data.detail_message_id).then((result)=>{
                const filename = this.getFileName(data.file);
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
            });
        },
        getFileName(file){
            let name = file.split('/');
            return name[name.length - 1];
        }
    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
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
.page-sub-title {
    color: #AE445A;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.foto-inbox-icon {
    width: 50px;
    height: 50px;
    padding: 2px;
    border-radius: 50%;
    border: 3px solid #ffffff;
    object-fit: cover;
}
.foto-inbox-parent {
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
}
.frame-parent-inbox-unread {
    border-radius: 10px;
    background-color: #718199;
    border: 3px solid #ae445a;
    box-sizing: border-box;
    width: 100%;
    height: 71px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
}
.frame-parent-inbox {
    border-radius: 10px;
    background-color: #718199;
    border: none;
    box-sizing: border-box;
    width: 100%;
    height: 71px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
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
.card-ts-edit-parent {
    position: absolute;
    bottom: 10%;
    right: 4%;
}
.schedule-container {
    border-radius: 20px;
    background-color: #fff;
    height: 17px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    font-size: 10px;
    color: #404041;
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
.edit-icon {
    position: relative;
    width: 12px;
    height: 12px;
    overflow: hidden;
    flex-shrink: 0;
}
.minuscircle-icon {
    position: relative;
    width: 12px;
    height: 12px;
    overflow: hidden;
    flex-shrink: 0;
    display: none;
}
.bishare-fill-icon {
    position: relative;
    width: 12px;
    height: 12px;
}
.mei-2023 {
    /* position: absolute;
    width: 29.3%;
    top: 12.69%;
    left: 41.4%; */
    font-size: 10px;
    text-align: center;
    display: inline-block;
}

.job-opening-icon {
    width: 101px;
    height: 101px;
    padding: 6px;
    border-radius: 50%;
    border: 3px solid #fff;
    align-self: stretch;
    position: relative;
    overflow: hidden;
    object-fit: cover;
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
.page-title {
    color: #AE445A;
    font-family: Nunito;
    font-size: 26px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
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
