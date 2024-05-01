    <template>
    <div>
        <v-card class="card-register">
            <v-row class="job-post-nav ma-0">
                <v-col cols="3" class="job-post-nav-container active">
                    <div class="job-post-nav-text">Create</div>
                </v-col>
                <v-col cols="3" class="job-post-nav-container">
                    <div class="job-post-nav-text" @click="$router.push('/remuneration/draft')">Draft</div>
                </v-col>
                <v-col cols="3" class="job-post-nav-container">
                    <div class="job-post-nav-text" @click="$router.push('/remuneration/rejected')">Rejected</div>
                </v-col>
                <v-col cols="3" class="job-post-nav-container">
                    <div class="job-post-nav-text" @click="$router.push('/remuneration/approval')">Approval</div>
                </v-col>
            </v-row>
            <div class="my-2" style="position: relative;">
                <div class="blokade-parent ma-8 pt-1" style="height: 800px;">
                    <v-row align="center" class="mb-4">
                        <v-col style="max-width: 710px !important;">
                            <v-row>
                                <v-col cols="6" xs="3" md="3" lg="3" xl="3" xxl="3" class="">
                                    <v-row align="center">
                                        <v-col cols="12" class="label pb-1">
                                            <b>Bulan</b>
                                        </v-col>
                                        <v-col cols="12" class="pt-1 text-left">
                                            <div class="total-karyawan-terpilih text-left px-2">
                                                <b style="width: -webkit-fill-available;">
                                                    {{ $moment().format('MMMM') }}
                                                </b>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="6" xs="3" md="3" lg="3" xl="3" xxl="3" class="">
                                    <v-row align="center">
                                        <v-col cols="12" class="label pb-1">
                                            <b>Tahun</b>
                                        </v-col>
                                        <v-col cols="12" class="pt-1 text-left">
                                            <div class="total-karyawan-terpilih text-left px-2">
                                                <b style="width: -webkit-fill-available;">
                                                    {{ $moment().format('YYYY') }}
                                                </b>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="6" class="">
                                    <v-row align="center">
                                        <v-col cols="12" class="label pb-1">
                                            <b>&nbsp;</b>
                                        </v-col>
                                        <v-col cols="12" class="input-checkbox-container" style="padding-top: 5px;">
                                            <div class="total-karyawan-terpilih">
                                                <b>
                                                    Total Karyawan terpilih
                                                    <span class="ml-3">
                                                        0 &nbsp;&nbsp;/&nbsp;&nbsp; 50 Orang
                                                    </span>
                                                </b>
                                            </div>
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
                                    <div :class="data?.btn_attacment ? 'orange-btn' : 'grey-btn'" class="px-6 mt-1" @click="data?.btn_attacment ? attachFile() : false">
                                        <b class="button">Attach File</b>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>

                        <v-col cols="12">
                            <div  class="remuneration-container container">
                                <v-row class="my-0">
                                    <v-col cols="10" class="">
                                        <v-text-field
                                            class="search-text-field-small"
                                            placeholder="Ketikkan Nama" solo 
                                            append-inner-icon="mdi-menu-left"
                                            single-line @input="debounceSearch($event)"
                                            hide-details
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="2">
                                        <div class="orange-btn" style="">
                                            <div class="" @click="openDialogEmployee()">
                                                <b class="button mx-3">+ Add to List</b>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                                <div style="height: 322px; overflow: auto;">
                                    <v-row class="">
                                        <v-col v-for="value,key in data?.employee_list" cols="12" class="pb-0">
                                            <div class="history-1">
                                                <div class="frame-parent-draft">
                                                    <div class="foto-perusaahaan-parent">
                                                        <img
                                                            alt="employee-profile"
                                                            class="foto-perusaahaan-icon"
                                                            :src="value.employee_photo"
                                                        />
                                                        <b class="">{{ value.employee_name }}</b>
                                                    </div>

                                                    <div class="">
                                                        <div style="display: flex;">
                                                            <div>
                                                                <div class="remun-table-title">Tipe Karyawan</div>
                                                                <div class="remun-bordered-red left">
                                                                    <div class="remun-table-text" style="text-transform: capitalize;">{{ value.employee_type }}</div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div class="remun-table-title">Take Home Pay</div>
                                                                <div class="remun-bordered-red">
                                                                    <div class="remun-table-text">{{ useConvertToMoneyView(value.salary) }}</div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div class="remun-table-title">Tanggal Masuk</div>
                                                                <div class="remun-bordered-red">
                                                                    <div class="remun-table-text">{{ $moment(value.start_date).format('DD MMM YYYY') }}</div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div class="remun-table-title">Tanggal Akhir</div>
                                                                <div class="remun-bordered-red">
                                                                    <div class="remun-table-text">{{ $moment(value.end_date).format('DD MMM YYYY') }}</div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div class="remun-table-title">Jenis Request</div>
                                                                <div class="remun-bordered-red right" style="padding: 3px 1px 3px 11px;">
                                                                    <v-select
                                                                    :items="['Salary','New Hiring','Duration','Contract','Resign']"
                                                                    placeholder="Pilih" @change="changeRequestType($event, key, value.id)"
                                                                    class="table-remun-select pa-0" hide-detail :value="value.request_type"
                                                                    ></v-select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="remun-icon-parent">
                                                        <img class="" alt="eye-circle-fill"
                                                            src="@/assets/svg/eye-circle-fill.svg"
                                                            @click="openDialogDetail(value.id)"
                                                        />
                                                        <img class="" alt="trash-red-small"
                                                            src="@/assets/svg/trash-red-small.svg"
                                                            @click="deleteList(value.id)"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                                <v-row>
                                    <v-col cols="12" class="pt-8">
                                        <div class="orange-btn" @click="createSimulation()" style="width: -webkit-fill-available; justify-content: center;">
                                            <div class="">
                                                <b class="button mx-3">Create Simulation</b>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                        <v-col cols="12" class="">
                            <div class="history-1">
                                <div class="frame-parent-draft">
                                    <div class="foto-perusaahaan-parent" style="width: 250px;">
                                        <img
                                            alt="micosoft-excel"
                                            class="micosoft-excel"
                                            src="@/assets/svg/micosoft-excel.svg"
                                        />
                                        <b class="">Remunerasi {{ $moment().format('MMMM YYYY') }}</b>
                                    </div>
                                    <div class="">{{ $moment().format('DD MMMM YYYY') }}</div>
                                    <div :class="data?.have_simulation ? 'orange-btn' : 'grey-btn'" @click="data?.have_simulation ? downloadCSV() : false">
                                        <div class="">
                                            <b class="button mx-3">Download</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" class="text-left pb-2 pt-1">
                            <b class="">Total Pengeluaran Budget: </b>
                        </v-col>
                        <v-col cols="12" class="text-left d-flex pt-0" style="justify-content: space-between;">
                            <div class="d-flex">
                                <div class="total-karyawan-terpilih px-4" style="width: -webkit-fit-content !important;">
                                    <b>
                                        Total Bulan Ini:  Rp. 346,000,000,-
                                    </b>
                                </div>
                                <div class="total-karyawan-terpilih px-4 ml-4" style="width: -webkit-fit-content !important;">
                                    <b>
                                        Sisa Kontrak:  Rp. 1,509,000,000,-
                                    </b>
                                </div>
                            </div>
                            <div :class="data?.btn_attacment ? 'orange-btn' : 'grey-btn'" @click="data?.btn_attacment ? showAlertApproval = true : false">
                                <div class="">
                                    <b class="button mx-3">Request Approval</b>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </v-card>
        <Dialog-RemunerationAttach :show="dialogAttach" :closeDialog="closeDialog"/>
        <Dialog-Remuneration :show="dialog" :id_remuneration="id_remuneration" :closeDialog="closeDialog"/>
        <Dialog-RemunerationDetail :show="dialogDetail" :closeDialog="closeDialog" :remunerationDetailId="remuneration_detail_id"/>
        <AlertApproval content="Anda akan mengajukan remunerasi. Apakah anda yakin?" :onApprove="requestApproval" :closeDialog="closeAlertApproval" :show="showAlertApproval"/>
    </div>
</template>
<script>

import debounce from 'debounce';
import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
import TextEditor from "~/components/TextEditor";
export default {
    layout: "jobProvider",
    components: { 
        TextEditor,
        Multiselect,
    },
    data: () => ({
        file: null,
        data: null,
        employee_name: null,
        id_remuneration: null,
        remuneration_detail_id: null,

        dialog: false,
        dialogAttach: false,
        dialogDetail: false,
        showAlertApproval: false,
    }),
    watch: {},
    setup() {
        const { getRemuneration, getListEmployee, deleteListEmployee, putRemunerationRequestType, postCreateSimulation, getDownloadSimulation, postRequestApproval } = API()
        return { getRemuneration, getListEmployee, deleteListEmployee, putRemunerationRequestType, postCreateSimulation, getDownloadSimulation, postRequestApproval };
    },
    async mounted() {
        const storageIdRemuneration = localStorage.getItem('id_remuneration');
        if(storageIdRemuneration){ this.id_remuneration = storageIdRemuneration;}
        this.getData();
    },
    methods: {
        async getData(employee_name) {
            await this.getRemuneration(this.id_remuneration, employee_name).then((result)=>{
                this.data = result;
            });
        },
        async deleteList(employee_id) {
            await this.deleteListEmployee(employee_id).then((result)=>{
                this.getData();
            });
        },
        async changeRequestType(event, key, remuneration_detail_id){
            this.data.employee_list[key].request_type = event;
            await this.putRemunerationRequestType({
                request_type: event
            }, remuneration_detail_id).then((result)=>{
                this.getData();
            });
        },
        async createSimulation() {
            await this.postCreateSimulation(this.id_remuneration).then((result)=>{
                this.$alert.showAlert({ content: 'Berhasil membuat perhitungan remunerasi.', show: true });
                this.getData();
            });
        },
        async requestApproval() {
            await this.postRequestApproval(this.id_remuneration).then((result)=>{
                this.showAlertApproval = false;
                this.$alert.showAlert({ content: 'Remunerasi telah diajukan.', show: true });
                this.data = null;
                localStorage.removeItem('id_remuneration');
            });
        },
        async openDialogEmployee() {
            await this.getListEmployee(this.id_remuneration, '').then((result)=>{
                if(result){
                    if(result?.existing === null && result?.new_hiring === null){
                        this.$notifier.showMessage({ content: 'Data karyawan tidak tersedia.', status: 'warning' });
                    }else{
                        return this.dialog = true;
                    }
                }
            });
        },
        debounceSearch: debounce( async function (event) {
            await this.getData(event);
        },1000),
        
        openDialogDetail(id){
            this.remuneration_detail_id = id;
            this.dialogDetail = true;
        },
        attachFile(){
            if(this.data.btn_attacment){
                this.dialogAttach = true;
            }else{
                this.$notifier.showMessage({ content: 'Data remunerasi belum tersedia.', status: 'warning' });
            }
        },
        closeDialog() {
            this.dialog = false;
            this.dialogAttach = false;
            this.dialogDetail = false;

            const storageIdRemuneration = localStorage.getItem('id_remuneration');
            if(storageIdRemuneration){ this.id_remuneration = storageIdRemuneration;}
            this.getData();
        },
        closeAlertApproval() {
            this.showAlertApproval = false;
        },
        parseDate (date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        onSelectFile (event, param) {
            const file = event.srcElement.files[0]
        },
        useConvertToMoneyView(value) {
            if (!value) return value;
            value = parseInt(value.replaceAll(',', ''), 10);
            return Intl.NumberFormat('en-US').format(value);
        },
        async downloadCSV() {
            await this.getDownloadSimulation(this.id_remuneration).then((result) => {
                var filename = "Remunerasi "+ this.$moment().format('MMMM YYYY')+".xlsx";
                var pom = document.createElement('a');
                var bb = new Blob([result], {type: 'application/vnd.ms-excel'});

                pom.setAttribute('href', window.URL.createObjectURL(bb));
                pom.setAttribute('download', filename);

                pom.dataset.downloadurl = ['application/vnd.ms-excel,', pom.download, pom.href].join(':');
                pom.draggable = true; 
                pom.classList.add('dragout');
                pom.click();

            })
            .catch((e) => {
                console.log(e)
            })
        },
    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.remun-bordered-red {
    border-left: none;
    padding: 3px 20px;
    border: 1px solid #ae445a;
    border-left: none;
}
.remun-bordered-red.right{
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.remun-bordered-red.left{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-left: 1px solid #ae445a;
}
.remun-table-text {
    font-size: 10px;
    font-weight: 300;
}
.remun-table-title {
    font-size: 8px;
    margin-bottom: 3px;
    font-weight: bold;
}

.remuneration-container {
    width: 100%;
    min-height: 488px;
    border-radius: 10px;
    border: 3px solid #ae445a;
}
.total-karyawan-terpilih b {
    color: #ae445a;
}
.total-karyawan-terpilih {
    width: 100%;
    height: 39px;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    border: 1px solid #ae445a;
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
.remun-icon-parent {
    gap: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.remun-icon-parent img {
    cursor: pointer;
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
