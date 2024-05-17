<template>
    <v-dialog v-model="dialogVisible" @input="closeDialog" width="668" rounded content-class="elevation-0">
        <div style="position: relative; display: flex; flex-direction: column;">
            <v-card class="pa-12" style="border-radius: 20px !important;"> 
                <v-row class="my-0">
                    <v-col class="">
                        <v-text-field
                            class="search-text-field-small"
                            placeholder="Ketikkan Nama" solo 
                            append-inner-icon="mdi-menu-left"
                            single-line @input="debounceSearch($event)"
                            hide-details
                        >
                        </v-text-field>
                    </v-col>
                    <v-col style="display: flex; justify-content: end; max-width: -webkit-fit-content;">
                        <div class="orange-btn">
                            <div class="" @click="selectAll">
                                <b class="button mx-3">Select All</b>
                            </div>
                        </div>
                        <div class="orange-btn ml-4">
                            <div class="" @click="submit">
                                <b class="button mx-3">+ Add to List</b>
                            </div>
                        </div>
                    </v-col>
                </v-row>
                <div style="height: 676px; overflow: auto;  overflow-x: hidden">
                    <v-row class="mt-0">
                        <v-col cols="6" class="pt-0">
                            <div class="remunerasi-list-title">
                                Existing
                            </div>
                            <v-checkbox 
                                v-for="value, key in data?.existing"
                                v-model="existing" :value="value.employee_id" hide-details
                                class="input-checkbox mt-2" color="#ae445a"
                            >
                                <template v-slot:label>
                                    <div class="checkbox-remunerasi-label">{{ value.employee_name }}</div>
                                </template>
                            </v-checkbox>
                        </v-col>

                        <v-col cols="6" class="pt-0">
                            <div class="remunerasi-list-title">
                                New Hiring
                            </div>
                            <v-checkbox 
                                v-for="value, key in data?.new_hiring"
                                v-model="new_hiring" :value="value.employee_id" hide-details
                                class="input-checkbox mt-2" color="#ae445a"
                            >
                                <template v-slot:label>
                                    <div class="checkbox-remunerasi-label">{{ value.employee_name }}</div>
                                </template>
                            </v-checkbox>
                        </v-col>
                    </v-row>
                </div>
            </v-card>
        </div>
    </v-dialog>
</template>
<script>
    import debounce from 'debounce';
    import { API } from '@/api/index'
    import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
    export default {
    data () {
        return {
            data: null,
            employee_name: null,
            id_remuneration: null,

            existing: [],
            new_hiring: [],
            existing: [],
            new_hiring: [],
        }
    },
    props: {
        content: { type: String, default() { return "" } },
        show: { type: Boolean, default() { return false } },
        onApprove: { type: Function, default() { return {} } },
        closeDialog: { type: Function, default() { return {} } },
    },
    setup() {
        const { getListEmployee, postPickEmployee } = API();
        return { getListEmployee, postPickEmployee };
    },
    computed: {
        ...mapGetters('provider-selection', ['tahapanGetter']),
        dialogVisible: {
            get() {
                return this.show;
            },
            set(value) {
                this.$emit('update:show', value);
            }
        }
    },
    watch: {
        show (to, from) {
            if (this.show) {
                this.getData();
            }
        },
    },
    async mounted(){
        this.getData();
    },
    methods: {
        async getData(employee_name){
            const storageIdRemuneration = localStorage.getItem('id_remuneration');
            if(storageIdRemuneration){ this.id_remuneration = storageIdRemuneration;}
            await this.getListEmployee(this.id_remuneration, employee_name).then((result)=>{
                if(result){
                    this.data = result;
                }
            });
        },
        async submit(){
            if(this.new_hiring !== null && this.existing !== null){
                if(this.new_hiring.length > 0 || this.existing.length > 0 ){
                    let combinedArray = this.existing.concat(this.new_hiring);
                    await this.postPickEmployee({employee_id: combinedArray}, this.id_remuneration).then((result)=>{
                        localStorage.setItem('id_remuneration', result.data.batch_remuneration_id);
                        this.new_hiring = [];
                        this.existing = [];
                        this.closeDialog();
                        location.reload(true);
                    });
                }
            }
        },
        debounceSearch: debounce( async function (event) {
            await this.getData(event);
        },1000),
        
        selectAll() {
            this.existing = this.data.existing.map(employee => employee.employee_id);
            this.new_hiring = this.data.new_hiring.map(employee => employee.employee_id);
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
.remunerasi-list-title {
    color: #404041;
    font-size: 16px;
    font-weight: bold;
    font-family: Poppins;
}
.checkbox-remunerasi-label {
    font-size: 12px;
    font-weight: 400;
    line-height: 0px;
    color: #404041;
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