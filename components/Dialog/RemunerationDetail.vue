<template>
    <v-dialog v-model="dialogVisible" @input="onDialogClose" width="668" rounded content-class="elevation-0">
        <div style="position: relative; display: flex; flex-direction: column;">
            <v-card class="pa-12" style="border-radius: 20px !important;"> 
                <v-row class="mb-1">
                    <v-col cols="12" class="text-left pt-0 pb-4">
                        <div class="page-title">
                            Employee Details
                        </div>
                    </v-col>
                </v-row>
                <v-row class="mt-0" style="padding-bottom: 25px; border-bottom: 3px solid #ae445a;">
                    <v-col cols="6" class="pt-0 pr-4">
                        <v-row>
                            <v-col cols="12">
                                <div class="remunerasi-list-title">
                                    Tanggal Masuk
                                </div>
                                <v-row class="mt-0">
                                    <v-col cols="6" class="pt-2" style="padding-right: 6px !important;">
                                        <div class="remun-detail-label mb-1">
                                            Sebelum
                                        </div>
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
                                                        v-model="dataExisting.start_date"
                                                        v-bind="attrs"
                                                        @blur="dataExisting.start_datert_date = parseDate(dataExisting.start_date)"
                                                        outlined readonly
                                                        class="remun-detail-text-input"
                                                        placeholder="2024-11-06"
                                                        />
                                                        <img class="remun-detail-icon-calendar" alt="" src="@/assets/svg/feathericon--calendar.svg" />
                                                    </div>
                                                </template>
                                                <v-date-picker
                                                    @input="datePicker1 = false" disabled
                                                    plas v-model="dataExisting.start_date" no-title
                                                ></v-date-picker>
                                            </v-menu>
                                    </v-col>
                                    <v-col cols="6" class="pt-2" style="padding-left: 6px !important;">
                                        <div class="remun-detail-label mb-1">
                                            Sesudah
                                        </div>
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
                                                        v-model="dataNew.start_date"
                                                        v-bind="attrs"
                                                        @blur="dataNew.start_date = parseDate(dataNew.start_date)"
                                                        outlined readonly
                                                        class="remun-detail-text-input"
                                                        placeholder="2024-11-06"
                                                        />
                                                        <img class="remun-detail-icon-calendar" alt="" src="@/assets/svg/feathericon--calendar.svg" />
                                                    </div>
                                                </template>
                                                <v-date-picker
                                                    @input="datePicker2 = false" :disabled="readonly"
                                                    plas v-model="dataNew.start_date" no-title
                                                ></v-date-picker>
                                            </v-menu>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12">
                                <div class="remunerasi-list-title">
                                    Role
                                </div>
                                <v-row class="mt-0">
                                    <v-col cols="6" class="pt-2" style="padding-right: 6px !important;">
                                        <div class="remun-detail-label mb-1">
                                            Sebelum
                                        </div>
                                        <v-select
                                            class="remun-detail-text-field" item-text="job_specialist_name" item-value="id"
                                            solo :items="masterData.job_specialist" v-model="dataExisting.job_specialist_id"
                                            placeholder="Pilih" readonly
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="6" class="pt-2" style="padding-left: 6px !important;">
                                        <div class="remun-detail-label mb-1">
                                            Sesudah
                                        </div>
                                        <v-select
                                            class="remun-detail-text-field" item-text="job_specialist_name" item-value="id"
                                            solo :items="masterData.job_specialist" v-model="dataNew.job_specialist_id"
                                            placeholder="Pilih" :readonly="readonly"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12">
                                <div class="remunerasi-list-title">
                                    Employee Type
                                </div>
                                <v-row class="mt-0">
                                    <v-col cols="6" class="pt-2" style="padding-right: 6px !important;">
                                        <div class="remun-detail-label mb-1">
                                            Sebelum
                                        </div>
                                        <v-select
                                            class="remun-detail-text-field" item-text="name" item-value="value"
                                            solo :items="masterData.master_employee_type" v-model="dataExisting.employee_type"
                                            placeholder="Pilih" readonly
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="6" class="pt-2" style="padding-left: 6px !important;">
                                        <div class="remun-detail-label mb-1">
                                            Sesudah
                                        </div>
                                        <v-select
                                            class="remun-detail-text-field" item-text="name" item-value="value"
                                            solo :items="masterData.master_employee_type" v-model="dataNew.employee_type"
                                            placeholder="Pilih" :readonly="readonly"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="6" class="pt-0 pl-4">
                        <v-row>
                            <v-col cols="12">
                                <div class="remunerasi-list-title">
                                    Tanggal Keluar
                                </div>
                                <v-row class="mt-0">
                                    <v-col cols="6" class="pt-2" style="padding-right: 6px !important;">
                                        <div class="remun-detail-label mb-1">
                                            Sebelum
                                        </div>
                                        <v-menu
                                            ref="datePicker3"
                                            v-model="datePicker3"
                                            :close-on-content-click="false"
                                            transition="scale-transition"
                                            offset-y
                                            max-width="290px"
                                            min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                    <div v-on="on" style="position: relative;">
                                                        <input
                                                        v-model="dataExisting.end_date"
                                                        v-bind="attrs"
                                                        @blur="dataExisting.end_date = parseDate(dataExisting.end_date)"
                                                        outlined readonly
                                                        class="remun-detail-text-input"
                                                        placeholder="2024-11-06"
                                                        />
                                                        <img class="remun-detail-icon-calendar" alt="" src="@/assets/svg/feathericon--calendar.svg" />
                                                    </div>
                                                </template>
                                                <v-date-picker
                                                    @input="datePicker3 = false" disabled
                                                    plas v-model="dataExisting.end_date" no-title
                                                ></v-date-picker>
                                            </v-menu>
                                    </v-col>
                                    <v-col cols="6" class="pt-2" style="padding-left: 6px !important;">
                                        <div class="remun-detail-label mb-1">
                                            Sesudah
                                        </div>
                                        <v-menu
                                            ref="datePicker4"
                                            v-model="datePicker4"
                                            :close-on-content-click="false"
                                            transition="scale-transition"
                                            offset-y
                                            max-width="290px"
                                            min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                    <div v-on="on" style="position: relative;">
                                                        <input
                                                        v-model="dataNew.end_date"
                                                        v-bind="attrs"
                                                        @blur="dataNew.end_date = parseDate(dataNew.end_date)"
                                                        outlined readonly
                                                        class="remun-detail-text-input"
                                                        placeholder="2024-11-06"
                                                        />
                                                        <img class="remun-detail-icon-calendar" alt="" src="@/assets/svg/feathericon--calendar.svg" />
                                                    </div>
                                                </template>
                                                <v-date-picker
                                                    @input="datePicker4 = false" :disabled="readonly"
                                                    plas v-model="dataNew.end_date" no-title
                                                ></v-date-picker>
                                            </v-menu>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12">
                                <div class="remunerasi-list-title">
                                    Level
                                </div>
                                <v-row class="mt-0">
                                    <v-col cols="6" class="pt-2" style="padding-right: 6px !important;">
                                        <div class="remun-detail-label mb-1">
                                            Sebelum
                                        </div>
                                        <v-select
                                            class="remun-detail-text-field" item-text="job_level_name" item-value="id"
                                            solo :items="masterData.job_level" v-model="dataExisting.job_level_id"
                                            placeholder="Pilih" readonly
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="6" class="pt-2" style="padding-left: 6px !important;">
                                        <div class="remun-detail-label mb-1">
                                            Sesudah
                                        </div>
                                        <v-select
                                            class="remun-detail-text-field" item-text="job_level_name" item-value="id"
                                            solo :items="masterData.job_level" v-model="dataNew.job_level_id"
                                            placeholder="Pilih" :readonly="readonly"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12">
                                <div class="remunerasi-list-title">
                                    Take Home Pay (THP)
                                </div>
                                <v-row class="mt-0">
                                    <v-col cols="6" class="pt-2" style="padding-right: 6px !important;">
                                        <div class="remun-detail-label mb-1">
                                            Sebelum
                                        </div>

                                        <v-text-field placeholder="0" class="remun-detail-text-field" solo @input="_=>nominal1=_" :value="nominal1" :min="nominal1" max="26" oninput="if(Number(this.value.length) > Number(this.max)) this.value = this.min;" readonly>
                                            <template v-slot:prepend-inner>
                                                <v-tooltip bottom >
                                                    <template v-slot:activator="{ on }">
                                                    <p style="color: #000; margin-bottom: 0;" v-on="on">
                                                        Rp.
                                                    </p>
                                                    </template>
                                                    Rupiah
                                                </v-tooltip>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6" class="pt-2" style="padding-left: 6px !important;">
                                        <div class="remun-detail-label mb-1">
                                            Sesudah
                                        </div>
                                        
                                        <v-text-field placeholder="0" class="remun-detail-text-field" solo @input="_=>nominal2=_" :value="nominal2" :min="nominal2" max="26" oninput="if(Number(this.value.length) > Number(this.max)) this.value = this.min;" :readonly="readonly">
                                            <template v-slot:prepend-inner>
                                                <v-tooltip bottom >
                                                    <template v-slot:activator="{ on }">
                                                    <p style="color: #000; margin-bottom: 0;" v-on="on">
                                                        Rp.
                                                    </p>
                                                    </template>
                                                    Rupiah
                                                </v-tooltip>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="mb-1">
                    <v-col cols="12" class="text-left mt-3 pb-4">
                        <div class="page-title">
                            Other Payment
                        </div>
                    </v-col>
                </v-row>
                <v-row class="mt-0" style="">
                    <v-col cols="6" class="pt-0 pr-4">
                        <div class="remunerasi-list-title">
                            Addition Payment
                        </div>
                        <v-row>
                            <v-col cols="12" v-for="value, key in additionData">
                                <v-row class="mt-0">
                                    <v-col cols="12" class="pt-2 pb-0" style="padding-right: 6px !important;">
                                        <div class="remun-detail-label mb-1">
                                            Keperluan Pembayaran
                                        </div>
                                        <v-select
                                            class="remun-payment-select pb-2" item-text="name" item-value="value"
                                            solo :items="filteredAdditionItems" :value="additionData[key]?.title" :readonly="readonly"
                                            placeholder="Pilih Tipe Penambahan Biaya" @change="additionDataChange($event, key, 'title')"
                                        ></v-select>
                                        <input class="remun-detail-text-input" placeholder="Notes (Deskripsi Pembayaran)" :readonly="readonly" :value="additionData[key]?.note" @change="additionDataChange($event, key, 'note')"/>
                                    </v-col>
                                    <v-col cols="12" class="pt-2 pb-0" style="padding-right: 6px !important;">
                                        <div class="remun-detail-label mb-1">
                                            Sebesar
                                        </div>
                                        <v-text-field
                                            hide-details
                                            placeholder="0"
                                            class="remun-detail-text-field" solo
                                            @input="handleInput(key, $event, 'addiction')"
                                            :value="additionNominal[key]"
                                            :min="additionNominal[key]" :readonly="readonly"
                                            max="26" oninput="if(Number(this.value.length) > Number(this.max)) this.value = this.min;"
                                        >
                                            <template v-slot:prepend-inner>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on }">
                                                <p style="color: #000; margin-bottom: 0;" v-on="on">
                                                    Rp.
                                                </p>
                                                </template>
                                                Rupiah
                                            </v-tooltip>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </v-col>

                            <v-col cols="12" class="mt-3" v-if="!readonly">
                                <div class="orange-btn" @click="addAdditionData()" style="width: -webkit-fill-available;">
                                    <div class="ml-auto mr-auto">
                                        <b class="button mx-3">+ Add Addition Payment</b>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="6" class="pt-0 pl-4">
                        <v-row>
                            <div class="remunerasi-list-title">
                                Deduction Payment
                            </div>
                            <v-col cols="12" v-for="value, key in deductionData">
                                <v-row class="mt-0">
                                    <v-col cols="12" class="pt-2 pb-0" style="padding-right: 6px !important;">
                                        <div class="remun-detail-label mb-1">
                                            Keperluan Pembayaran
                                        </div>
                                        <v-select
                                            class="remun-payment-select pb-2" item-text="name" item-value="value"
                                            solo :items="filteredDeductionItems" :value="deductionData[key]?.title" :readonly="readonly"
                                            placeholder="Pilih Tipe Pengurangan Biaya" @change="deductionDataChange($event, key, 'title')"
                                        ></v-select>
                                        <input class="remun-detail-text-input" placeholder="Notes (Deskripsi Pembayaran)" :readonly="readonly" :value="deductionData[key]?.note" @change="deductionDataChange($event, key, 'note')"/>
                                    </v-col>
                                    <v-col cols="12" class="pt-2 pb-0" style="padding-right: 6px !important;">
                                        <div class="remun-detail-label mb-1">
                                            Sebesar
                                        </div>
                                        <v-text-field
                                            hide-details
                                            placeholder="0"
                                            class="remun-detail-text-field"
                                            :value="deductionNominal[key]"
                                            solo  @input="handleInput(key, $event, 'deduction')"
                                            :min="deductionNominal[key]" :readonly="readonly"
                                            max="26" oninput="if(Number(this.value.length) > Number(this.max)) this.value = this.min;"
                                        >
                                            <template v-slot:prepend-inner>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on }">
                                                <p style="color: #000; margin-bottom: 0;" v-on="on">
                                                    Rp.
                                                </p>
                                                </template>
                                                Rupiah
                                            </v-tooltip>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" class="mt-3" v-if="!readonly">
                                <div class="orange-btn" @click="addDeductionData()" style="width: -webkit-fill-available;">
                                    <div class="ml-auto mr-auto">
                                        <b class="button mx-3">+ Add Deduction Payment</b>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" class="mt-0" v-if="!readonly">
                        <div class="orange-btn" @click="submit()" style="width: -webkit-fill-available;">
                            <div class="ml-auto mr-auto">
                                <b class="button mx-3">Save</b>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </div>
    </v-dialog>
</template>
<script>
    import { API } from '@/api/index'
    import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
    export default {
    data () {
        return {
            masterData: [],
            additionNominal: [],
            deductionNominal: [],
            masterAdditionCategory: [],
            additionData:[
                {
                    title: null,
                    note: null,
                    amount: null,
                }
            ],
            deductionData: [
                {
                    title: null,
                    note: null,
                    amount: null,
                }
            ],
            dataExisting: {
                remunerasi_detail_id: null,
                employee_id: null,
                start_date: null,
                end_date: null,
                job_specialist_id: null,
                job_level_id: null,
                employee_type: null,
                salary: null,
            },
            dataNew: {
                start_date: null,
                end_date: null,
                job_specialist_id: null,
                job_level_id: null,
                employee_type: null,
                employee_id: null,
            },
            bodyCreate: [],

            id_job_post: null,
            
            nominal: "",
            nominal1: "",
            nominal2: "",
            setting: false,
            datePicker1: false,
            datePicker2: false,
            datePicker3: false,
            datePicker4: false,

            masterAdditionCategory: [
                {
                    "name": "Lembur",
                    "value": "lembur"
                },
                {
                    "name": "Bonus",
                    "value": "bonus"
                },
                {
                    "name": "Repel",
                    "value": "repel"
                },
                {
                    "name": "Tunjangan Hari Raya",
                    "value": "tunjangan hari raya"
                },
                {
                    "name": "Kopensasi Akhir Kontrak",
                    "value": "kopensasi akhir kontrak"
                },
                {
                    "name": "Lain - Lain",
                    "value": "lain - lain"
                }
            ],
            masterDeductionCategory: [
                {
                    "name": "Kliring",
                    "value": "kliring"
                },
                {
                    "name": "Potongan Absen",
                    "value": "potongan absen"
                },
                {
                    "name": "Lain - Lain",
                    "value": "lain - lain"
                },
            ],
        }
    },
    props: {
        show: { type: Boolean, default() { return false } },
        readonly: { type: Boolean, default() { return false } },
        content: { type: String, default() { return "" } },
        onApprove: { type: Function, default() { return {} } },
        closeDialog: { type: Function, default() { return {} } },
        remunerationDetailId: { type: String, default() { return "" } },
    },
    setup() {
        const { getRemunerationDetail, putDetailRemuneration } = API();
        return { getRemunerationDetail, putDetailRemuneration };
    },
    computed: {
        ...mapGetters('provider-selection', ['tahapanGetter']),
        filteredAdditionItems() {
            const titles = this.additionData.map(item => item.title);
            return this.masterAdditionCategory.map(item => ({
                name: item.name,
                value: item.value,
                disabled: titles.includes(item.value)
            }));
        },
        filteredDeductionItems() {
            const titles = this.deductionData.map(item => item.title);
            return this.masterDeductionCategory.map(item => ({
                name: item.name,
                value: item.value,
                disabled: titles.includes(item.value)
            }));
        },
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
        async remunerationDetailId(newValue, oldValue) {
            await this.getData();
        },
        nominal1(newValue, oldValue) {
            this.nominal1 = this.useConvertToMoneyView(newValue, 'thp_before');
        },
        nominal2(newValue, oldValue) {
            this.nominal2 = this.useConvertToMoneyView(newValue, 'thp_after');
        },
    },
    async mounted(){
        await this.getData();
    },
    methods: {
        async getData(){
            console.log('this.remunerationDetailId', this.remunerationDetailId);
            if(this.remunerationDetailId){
                await this.getRemunerationDetail(this.remunerationDetailId).then((result)=>{
                    if(result){
                        this.dataNew = result.data_after;
                        this.masterData = result.master_data;
                        this.dataExisting = result.data_existing;
                        this.nominal1 = result.data_existing.salary;
                        this.nominal2 = result.data_after.salary;
    
                        if(result.data_existing.addition_data !== null){
                            this.additionData = result.data_existing.addition_data;
                            this.additionData.map((item, index) => {
                                this.handleInput(index, item.amount, 'addiction')
                            });
                        }
                        if(result.data_existing.deduction_data !== null){
                            this.deductionData = result.data_existing.deduction_data;
                            this.deductionData.map((item, index) => {
                                this.handleInput(index, item.amount, 'deduction')
                            });
                        }
                    }
                });
            }
        },
        async submit(){
            await this.putDetailRemuneration(
            {
                ...this.dataNew,
                addition_payment: this.additionData,
                deduction_payment: this.deductionData
            }, this.remunerationDetailId ).then((result)=>{});

            this.closeDialog();
            this.getData();
            this.nominal2 = null;
            this.dataNew = {
                start_date: null,
                end_date: null,
                job_specialist_id: null,
                job_level_id: null,
                employee_type: null,
                employee_id: null,
            };
        },
        additionDataChange(event, key, model){
            switch (model) {
                case 'title':
                    this.additionData[key].title = event;
                    break;
                case 'note':
                    this.additionData[key].note = event.target.value;
                    break;
            }
        },
        deductionDataChange(event, key, model){
            switch (model) {
                case 'title':
                    this.deductionData[key].title = event;
                    break;
                case 'note':
                    this.deductionData[key].note = event.target.value;
                    break;
            }
        },
        addAdditionData(){
            this.additionData.push({
                title: null,
                note: null,
                amount: null,
            });
        },
        addDeductionData(){
            this.deductionData.push({
                title: null,
                note: null,
                amount: null,
            });
        },
        parseDate (date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        handleInput(index, event, model) {
            const value = event;
            switch (model) {
                case 'addiction':
                    this.$set(this.additionNominal, index, this.useConvertToMoney(value, index, model));
                    break;
                case 'deduction':
                    this.$set(this.deductionNominal, index, this.useConvertToMoney(value, index, model));
                    break;
            }
        },
        useConvertToMoney(value, index, model) {
            if (!value) return value;
            value = parseInt(value.replaceAll(',', ''), 10);
            switch (model) {
                case 'addiction':
                    this.additionData[index].amount = value;
                    break;
                case 'deduction':
                    this.deductionData[index].amount = value;
                    break;
            }
            return Intl.NumberFormat('en-US').format(value);
        },
        useConvertToMoneyView(value, model, key) {
            if (!value) return value;
            value = parseInt(value.replaceAll(',', ''), 10);
            switch (model) {
                case 'thp_before':
                    break;
                case 'thp_after':
                    this.dataNew.salary = value;
                    break;
            }
            return Intl.NumberFormat('en-US').format(value);
        },
        onDialogClose(value) {
            if (!value) {
                this.closeDialog();
            }
        }
    }
}
</script>

<style scoped>
.remun-detail-label {
    font-size: 12px;
    text-align: left;
}
.remun-detail-text-input {
    border-radius: 10px;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 100%;
    height: 33px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    font-size: 12px;
    /* color: #b6b6b6; */
}.remun-detail-text-input::placeholder {
    font-style: italic;
}
.calendar-input-container{
    position: relative;
}
.remun-detail-icon-calendar {
    top: 17%;
    right: 7%;
    width: 20px;
    height: 20px;
    position: absolute;
}
.page-title {
    color: #AE445A;
    font-family: Nunito;
    font-size: 26px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}
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
.remun-detail-icon-calendar-preview {
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