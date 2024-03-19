<template>
    <div>
        <v-card class="card-register" style="">
            <div class="my-2" style="position: relative;">
                <div class="blokade-parent ma-8 pt-10">
                    <div class="open-job-dan-draft mb-14 d-flex" style="justify-content: space-between;">
                        <div>
                            Detail Data
                        </div>
                    </div>

                    <v-row>
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label pt-8">
                            <v-row>
                                <v-col cols="12">
                                    <div class="pp-container">
                                        <img
                                            class="pp-frame"
                                            loading="eager" alt="photo"
                                            :src="photo ? photo : '@/assets/img/img-error.png'"
                                        />
                                    </div>
                                </v-col>
                                <v-col cols="12" class="pb-2">
                                    <div class="d-flex justify-center mr-7">
                                        <div class="frame-container" style="width: 160px;">
                                            <div class="attach-mpr-parent" @click="">
                                                <b class="button">Send Message</b>
                                            </div>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12">
                                    <div class="d-flex justify-center mr-7">
                                        <div class="orange-btn d-flex" @click="" style="justify-content: center; border-radius: 50%; height: 38px;width: 38px;">
                                            <img class="feath" height="17" width="17" alt="" src="@/assets/svg/download.svg" />
                                        </div> 
                                        <div class="orange-btn d-flex ml-4" @click="" style="justify-content: center; border-radius: 50%; height: 38px;width: 38px;">
                                            <img class="feath" height="17" width="17" alt="" src="@/assets/svg/bi-share.svg" />
                                        </div> 
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <v-row align="center">
                                <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label pt-8">
                                    <b>Nama Lengkap:</b>
                                </v-col>
                                <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                                    <input class="register-text-input" placeholder="Masukkan Nama Lengkap" v-model="fullname" :readonly="preview"/>
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label pt-8">
                                    <b>Tempat Tanggal Lahir:</b>
                                </v-col>
                                <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                                    <v-row align="center">
                                        <v-col cols="6">
                                            <input class="register-text-input" placeholder="Masukkan Nama Kota" v-model="place_birth" :readonly="preview" />
                                        </v-col>
                                        <v-col cols="6" class="calendar-input-container">
                                            <v-menu
                                            :ref="datePickerBirthDate"
                                            v-model="datePickerBirthDate" offset-y
                                            :close-on-content-click="false"
                                            transition="scale-transition"
                                            max-width="290px"
                                            min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                    <div v-on="!preview && on" style="position: relative;">
                                                        <input
                                                        v-bind="attrs"
                                                        outlined readonly
                                                        v-model="date_birth"
                                                        @blur="date_birth = parseDate(date_birth)"
                                                        placeholder="Masukkan Tanggal Lahir"
                                                        class="register-text-input"
                                                        />
                                                        <img class="feather-icon-calendar" alt="" src="@/assets/svg/feathericon--calendar.svg" />
                                                    </div>
                                                </template>
                                                <v-date-picker
                                                    @input="datePickerBirthDate = false"
                                                    plas v-model="date_birth" no-title
                                                ></v-date-picker>
                                            </v-menu>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label pt-8">
                                    <b>Alamat E-Mail:</b>
                                </v-col>
                                <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                                    <input type="email" class="register-text-input" placeholder="Masukkan alamat E-Mail" v-model="email" :readonly="preview" />
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label pt-8">
                                    <b>Alamat URL LinkedIn:</b>
                                </v-col>
                                <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                                    <input class="register-text-input" placeholder="Masukkan alamat URL LinkedIn" v-model="linkedin" :readonly="preview" />
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label pt-8">
                                    <b>Nomor Handphone:</b>
                                </v-col>
                                <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                                    <input class="register-text-input" placeholder="Masukkan Nomor Handphone" v-model="handphone" :readonly="preview" />
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label pt-8">
                                    <b>Emergency Contact:</b>
                                </v-col>
                                <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                                    <v-row align="center">
                                        <v-col cols="4">
                                            <input class="register-text-input" placeholder="Masukkan Nama" v-model="emergency_name" :readonly="preview" />
                                        </v-col>
                                        <v-col cols="4">
                                            <input class="register-text-input" placeholder="Masukkan Nama" v-model="emergency_number" :readonly="preview" />
                                        </v-col>
                                        <v-col cols="4">
                                            <input class="register-text-input" placeholder="Masukkan No" v-model="emergency_status" :readonly="preview" />
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label pt-8">
                            <b>Jenis Kelamin:</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Jenis Kelamin" v-model="residential_address" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label pt-8">
                            <b>Status Pernikahan:</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <multiselect
                                :disabled="preview"
                                v-model="marital_status"
                                :options="listStatusPernikahan"
                                class="register-text-input"
                                placeholder="Pilih Status Pernikahan" :allow-empty="false"
                            ></multiselect>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label pt-8">
                            <b>Alamat Domisili:</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Alamat Domisili Saat Ini" v-model="residential_address" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label pt-8">
                            <b>Alamat Rumah (KTP):</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Alamat Rumah Berdasarkan KTP" v-model="address_on_identity_card" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label pt-8">
                            <b>Nomor NIK:</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Nomor NIK" v-model="identity_number" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label pt-8">
                            <b>Status PTKP:</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Status PTKP" v-model="ptkp_status" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>Nomor NPWP <i class="opsional">(*opsional)</i> :</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Nomor NPWP" v-model="npwp_number" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>Nomor BPJSKES <i class="opsional">(*opsional)</i> :</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Nomor BPJSKES" v-model="bpjskes" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>Nomor BPJSTK <i class="opsional">(*opsional)</i> :</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Nomor BPJSTK" v-model="bpjstik" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>Nama Bank <i class="opsional">(*opsional)</i> :</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Nama Bank'" v-model="bank_name" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>No. Rek Bank <i class="opsional">(*opsional)</i> :</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <v-row>
                                <v-col cols="6">
                                    <input class="register-text-input" placeholder="Masukkan No. Rekening Bank" v-model="bank_account_number" :readonly="preview" />
                                </v-col>
                                <v-col cols="6">
                                    <input class="register-text-input" placeholder="Masukkan Atas Nama" v-model="bank_account_name" :readonly="preview" />
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>NIK Perusahaan:</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan NIK Perusahaan" v-model="company_registration_number" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>Role:</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Role" v-model="job_specialist_name" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>Level:</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Level" v-model="job_level_name" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>Ruang Lingkup:</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <textarea class="register-text-input" style="height: -webkit-fit-content;" placeholder="Masukkan Ruang Lingkup"  rows="4" cols="50">{{ scope }}</textarea>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>Jenis Kontrak:</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Jenis Kontrak" v-model="employee_type" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>Take Home Pay:</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Take Home Pay" v-model="salary" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>Kontrak:</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <v-row>
                                <v-col cols="6">
                                    <div class="register-text-input d-flex" style="justify-content: space-between;">
                                        <div>{{ useConvertToDateView(start_date) }}</div>
                                        <div>-</div>
                                        <div>{{ useConvertToDateView(end_date) }}</div>
                                    </div>
                                </v-col>
                                <v-col cols="6">
                                    <div class="register-text-input d-flex" style="justify-content: space-between;">
                                        <div>{{ useConvertToYearCountView() }}</div>
                                        <b style="color: #ae445a;">Sama dengan</b>
                                        <div>{{ useConvertToMonthCountView() }}</div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                    <div v-if="score.length > 0" class="group-inner"/>
                    <v-row v-if="score.length > 0" v-for="value in score" align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>{{ value.modul_category }}:</b>
                        </v-col>
                        <v-col class="pb-0" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Take Home Pay" :value="value.score" :readonly="preview" />
                        </v-col>
                    </v-row>

                    <div class="group-inner" />
                    <v-row align="start" v-for="(value, key) in department.length == 0 ? 1 : department" class="mb-4">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label mt-3">
                            <b>Pengalaman:</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <v-row>
                                <v-col class="pb-0" cols="12">
                                    <input class="register-text-input" placeholder="Masukkan Posisi Pekerjaan Sebelumnya" v-model="department[key]" :readonly="preview" />
                                </v-col>
                                <v-col class="pb-0" cols="12">
                                    <input class="register-text-input" placeholder="Masukkan Nama Perusahaan" v-model="company_name[key]" :readonly="preview" />
                                </v-col>
                                 <v-col class="pb-0" cols="6">
                                    <v-menu
                                    :ref="datePickerStartWorking[key]"
                                    v-model="datePickerStartWorking[key]" offset-y
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <div v-on="!preview && on" style="position: relative;">
                                                <input
                                                v-bind="attrs"
                                                outlined readonly
                                                v-model="start_working[key]"
                                                @blur="start_working[key] = parseDate(start_working[key])"
                                                placeholder="Masukkan Tanggal Mulai"
                                                class="register-text-input"
                                                />
                                                <img class="feather-icon-calendar" alt="" src="@/assets/svg/feathericon--calendar.svg" />
                                            </div>
                                        </template>
                                        <v-date-picker
                                            @input="datePickerStartWorking[key] = false"
                                            plas v-model="start_working[key]" no-title
                                        ></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col class="pb-0" cols="6">
                                    <v-menu
                                    :ref="datePickerEndWorking[key]"
                                    v-model="datePickerEndWorking[key]"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <div v-on="!preview && on" style="position: relative;">
                                                <input
                                                v-bind="attrs"
                                                v-model="end_working[key]"
                                                @blur="end_working[key] = parseDate(end_working[key])"
                                                outlined readonly
                                                class="register-text-input"
                                                placeholder="Masukkan Tanggal Selesai"
                                                />
                                                <img class="feather-icon-calendar" alt="" src="@/assets/svg/feathericon--calendar.svg" />
                                            </div>
                                        </template>
                                        <v-date-picker
                                            @input="datePickerEndWorking[key] = false"
                                            plas v-model="end_working[key]" no-title
                                        ></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="6">
                                    <input class="register-text-input" placeholder="Masukkan Lokasi Pekerjaan" v-model="location[key]" :readonly="preview" />
                                </v-col>
                                <v-col cols="6">
                                    <multiselect
                                        :disabled="preview"
                                        v-model="employment_contract[key]"
                                        :options="listStatusPernikahan"
                                        class="register-text-input"
                                        placeholder="Pilih Jenis Pekerjaan" :allow-empty="false"
                                    ></multiselect>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                    <div class="group-inner" />
                    <v-row align="start" v-for="(value, key) in institute_name.length == 0 ? 1 : institute_name" class="mb-4">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label mt-3">
                            <b>Pendidikan:</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <v-row>
                                <v-col class="pb-0" cols="12">
                                    <input class="register-text-input" placeholder="Masukkan Nama Tempat Pendidikan" v-model="institute_name[key]" :readonly="preview" />
                                </v-col>
                                <v-col class="pb-0" cols="12">
                                    <input class="register-text-input" placeholder="Masukkan Jurusan" v-model="education_program[key]" :readonly="preview" />
                                </v-col>
                                <v-col class="pb-0" cols="6">
                                    <v-menu
                                    :ref="datePickerStartStudy[key]"
                                    v-model="datePickerStartStudy[key]"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <div v-on="!preview && on" style="position: relative;">
                                                <input
                                                v-bind="attrs"
                                                v-model="start_study[key]"
                                                @blur="start_study[key] = parseDate(start_study[key])"
                                                outlined readonly
                                                class="register-text-input"
                                                placeholder="Masukkan Tanggal Mulai"
                                                />
                                                <img class="feather-icon-calendar" alt="" src="@/assets/svg/feathericon--calendar.svg" />
                                            </div>
                                        </template>
                                        <v-date-picker
                                            @input="datePickerStartStudy[key] = false"
                                            plas v-model="start_study[key]" no-title
                                        ></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col class="pb-0" cols="6">
                                    <v-menu
                                    :ref="datePickerEndStudy[key]"
                                    v-model="datePickerEndStudy[key]"
                                    :close-on-content-click="false" offset-y
                                    transition="scale-transition"
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <div v-on="!preview && on" style="position: relative;">
                                                <input
                                                v-model="end_study[key]"
                                                v-bind="attrs"
                                                @blur="end_study[key] = parseDate(end_study[key])"
                                                outlined readonly
                                                class="register-text-input"
                                                placeholder="Masukkan Tanggal Selesai"
                                                />
                                                <img class="feather-icon-calendar" alt="" src="@/assets/svg/feathericon--calendar.svg" />
                                            </div>
                                        </template>
                                        <v-date-picker
                                            @input="datePickerEndStudy[key] = false"
                                            plas v-model="end_study[key]" no-title
                                        ></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="6">
                                    <input class="register-text-input" placeholder="Masukkan Tingkat Pendidikan" v-model="degree[key]" :readonly="preview" />
                                </v-col>
                                <v-col cols="6">
                                    <input class="register-text-input" placeholder="Masukkan IPK" v-model="ipk[key]" :readonly="preview" />
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                    <div class="group-inner" />
                    <v-row align="start" v-for="(value, key) in certificate_name.length == 0 ? 1 : certificate_name" class="mb-4">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label mt-3">
                            <b>Sertifikat:</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <v-row>
                                <v-col class="pb-0" cols="12">
                                    <input class="register-text-input" v-model="certificate_name[key]" placeholder="Masukkan Nama Sertifikat (Contoh: Toefl - ITP, IELTS, dll)" :readonly="preview" />
                                </v-col>
                                <v-col class="pb-0" cols="12">
                                    <input class="register-text-input" v-model="organizer[key]" placeholder="Masukkan Nama Lembaga" :readonly="preview" />
                                </v-col>
                                <v-col cols="6">
                                    <input class="register-text-input" v-model="scores[key]" placeholder="Masukkan Nilai Sertifikat (*opsional)" :readonly="preview" />
                                </v-col>
                                <v-col cols="6">
                                    <input class="register-text-input" v-model="certificate_year[key]" placeholder="Masukkan Tahun Selesai" :readonly="preview" />
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                    <div class="group-inner" />
                    <v-row align="start">
                        <v-col cols="12" class="label mt-3" style="display: flex; flex-direction: column;">
                            <b>Hasil Tes:</b>
                        </v-col>
                        <v-col cols="12">
                            <v-row>
                                <v-col v-for="value, key in score" cols="4" xs="2" md="2" lg="2" xl="2" xxl="2">
                                    <div class="pas-foto" @click="clickDetail(value)">
                                        <button class="plusplus cursor-pointer" @click="">
                                            <img v-if="value.logo == '123rectangle'" class="pluscirclefill-icon" alt="icon" src="@/assets/svg/module-logo/white/123rectangle.svg" />
                                            <img v-if="value.logo == 'acircle'" class="pluscirclefill-icon" alt="icon" src="@/assets/svg/module-logo/white/acircle.svg" />
                                            <img v-if="value.logo == 'brainhead'" class="pluscirclefill-icon" alt="icon" src="@/assets/svg/module-logo/white/brainhead.svg" />
                                            <img v-if="value.logo == 'code'" class="pluscirclefill-icon" alt="icon" src="@/assets/svg/module-logo/white/code.svg" />
                                            <img v-if="value.logo == 'heart'" class="pluscirclefill-icon" alt="icon" src="@/assets/svg/module-logo/white/heart.svg" />
                                            <img v-if="value.logo == 'magazine'" class="pluscirclefill-icon" alt="icon" src="@/assets/svg/module-logo/white/magazine.svg" />
                                            <img v-if="value.logo == 'paintbrushpointed'" class="pluscirclefill-icon" alt="icon" src="@/assets/svg/module-logo/white/paintbrushpointed.svg" />
                                            <img v-if="value.logo == 'penciltip'" class="pluscirclefill-icon" alt="icon" src="@/assets/svg/module-logo/white/penciltip.svg" />
                                            <img v-if="value.logo == 'phototv'" class="pluscirclefill-icon" alt="icon" src="@/assets/svg/module-logo/white/phototv.svg" />
                                            <img v-if="value.logo == 'video'" class="pluscirclefill-icon" alt="icon" src="@/assets/svg/module-logo/white/video.svg" />
                                        </button>
                                        <div class="foto">
                                            <div class="pas-foto-4x6">{{ value.modul_category }}</div>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                    <div class="group-inner" />
                    <v-row align="start">
                        <v-col cols="12" class="label mt-3" style="display: flex; flex-direction: column;">
                            <b>Berkas Lampiran:</b>
                        </v-col>
                        <v-col cols="12">
                            <v-row>
                                <v-col cols="4" xs="2" md="2" lg="2" xl="2" xxl="2">
                                    <div class="pas-foto" @click="openFile(curriculum_vitae)">
                                        <div v-if="!curriculum_vitae" class="data-belum-terisi">Data belum terisi</div>
                                        <button v-if="!curriculum_vitae" class="plus cursor-pointer">
                                            <img class="pluscirclefill-icon" alt="image-not-found" src="@/assets/svg/info-circle.svg" />
                                        </button>
                                        <button v-else class="plus cursor-pointer">
                                            <img class="pluscirclefill-icon" alt="CV" src="@/assets/svg/doc.svg" />
                                        </button>
                                        <div class="foto">
                                            <div class="pas-foto-4x6">CV</div>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="4" xs="2" md="2" lg="2" xl="2" xxl="2">
                                    <div class="pas-foto" @click="openFile(photo)">
                                        <div v-if="!photo" class="data-belum-terisi">Data belum terisi</div>
                                        <button v-if="!photo" class="plus cursor-pointer">
                                            <img class="pluscirclefill-icon" alt="image-not-found" src="@/assets/svg/info-circle.svg" />
                                        </button>
                                        <button v-else class="plus cursor-pointer">
                                            <img class="pluscirclefill-icon" alt="Pas Foto 4x6" src="@/assets/svg/doc.svg" />
                                        </button>
                                        <div class="foto">
                                            <div class="pas-foto-4x6">Pas Foto 4x6</div>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="4" xs="2" md="2" lg="2" xl="2" xxl="2">
                                    <div class="pas-foto" @click="openFile(ktp)">
                                        <div v-if="!ktp" class="data-belum-terisi">Data belum terisi</div>
                                        <button v-if="!ktp" class="plus cursor-pointer">
                                            <img class="pluscirclefill-icon" alt="image-not-found" src="@/assets/svg/info-circle.svg" />
                                        </button>
                                        <button v-else class="plus cursor-pointer">
                                            <img class="pluscirclefill-icon" alt="KTP" src="@/assets/svg/doc.svg" />
                                        </button>
                                        <div class="foto">
                                            <div class="pas-foto-4x6">KTP</div>
                                                <i class="optional">(*optional)</i>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="4" xs="2" md="2" lg="2" xl="2" xxl="2">
                                    <div class="pas-foto" @click="openFile(kk)">
                                        <div v-if="!kk" class="data-belum-terisi">Data belum terisi</div>
                                        <button v-if="!kk" class="plus cursor-pointer">
                                            <img class="pluscirclefill-icon" alt="image-not-found" src="@/assets/svg/info-circle.svg" />
                                        </button>
                                        <button v-else class="plus cursor-pointer">
                                            <img class="pluscirclefill-icon" alt="Kartu Keluarga" src="@/assets/svg/doc.svg" />
                                        </button>
                                        <div class="foto">
                                            <div class="pas-foto-4x6">Kartu Keluarga</div>
                                                <i class="optional">(*optional)</i>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="4" xs="2" md="2" lg="2" xl="2" xxl="2">
                                    <div class="pas-foto" @click="openFile(npwp)">
                                        <div v-if="!npwp" class="data-belum-terisi">Data belum terisi</div>
                                        <button v-if="!npwp" class="plus cursor-pointer">
                                            <img class="pluscirclefill-icon" alt="image-not-found" src="@/assets/svg/info-circle.svg" />
                                        </button>
                                        <button v-else class="plus cursor-pointer">
                                            <img class="pluscirclefill-icon" alt="NPWP" src="@/assets/svg/doc.svg" />
                                        </button>
                                        <div class="foto">
                                            <div class="pas-foto-4x6">NPWP</div>
                                                <i class="optional">(*optional)</i>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="4" xs="2" md="2" lg="2" xl="2" xxl="2">
                                    <div class="pas-foto" @click="openFile(bpjs)">
                                        <div v-if="!bpjs" class="data-belum-terisi">Data belum terisi</div>
                                        <button v-if="!bpjs" class="plus cursor-pointer">
                                            <img class="pluscirclefill-icon" alt="image-not-found" src="@/assets/svg/info-circle.svg" />
                                        </button>
                                        <button v-else class="plus cursor-pointer">
                                            <img class="pluscirclefill-icon" alt="BPJSKES & TK" src="@/assets/svg/doc.svg" />
                                        </button>
                                        <div class="foto">
                                            <div class="pas-foto-4x6">BPJSKES & TK</div>
                                                <i class="optional">(*optional)</i>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                    <div v-for="value in document_tracking">
                        <div class="group-inner" />
                        <v-row align="start">
                            <v-col cols="12" class="label mt-3" style="display: flex; flex-direction: column;">
                                <b>Periode {{ value.period }}:</b>
                            </v-col>
                            <v-col cols="12">
                                <v-row>
                                    <v-col v-for="value1 in value.files" cols="4" xs="2" md="2" lg="2" xl="2" xxl="2">
                                        <div class="pas-foto" @click="openFile(value1.file)">
                                            <div v-if="!curriculum_vitae" class="data-belum-terisi">Data belum terisi</div>
                                            <button v-if="!curriculum_vitae" class="plus cursor-pointer">
                                                <img class="pluscirclefill-icon" alt="image-not-found" src="@/assets/svg/info-circle.svg" />
                                            </button>
                                            <button v-else class="plus cursor-pointer">
                                                <img class="pluscirclefill-icon" alt="CV" src="@/assets/svg/doc.svg" />
                                            </button>
                                            <div class="foto">
                                                <div class="pas-foto-4x6">{{ value1.request_type }}</div>
                                                <i class="optional">({{ value1.status }})</i>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </div>

                    <v-row>
                        <div class="save-container">
                            <div></div>
                            <div class="button-wrapper" @click="$router.push('/employee-data')">
                                <b class="tempat-tanggal-lahir">Close</b>
                            </div> 
                        </div>
                    </v-row>
                </div>
            </div>
        </v-card>
        <Dialog-OpenFile :show="fileDialog" :fileUrl="fileUrl" :closeDialog="closeFile"/>
    </div>
</template>
<script>
import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
    components: { Multiselect },
    data: () => ({
        preview: true,
        fileUrl: null,
        fileDialog: false,
        id_registration: null,
        datePickerBirthDate: false,
        datePickerEndStudy: [false],
        datePickerStartStudy: [false],
        datePickerEndWorking: [false],
        datePickerStartWorking: [false],
        listStatusPernikahan: ['Sudah Menikah', 'Belum Menikah'],

        // body API
        fullname: null,
        place_birth: null,
        date_birth: null,
        email: null,
        linkedin: null,
        handphone: null,
        residential_address: null,
        address_on_identity_card: null,
        marital_status: null,
        identity_number: null,
        npwp_number: null,
        bpjskes: null,
        bpjstik: null,
        bank_account_number: null,
        bank_account_name: null,
        bank_name: null,
        work_position: null,
        salary_exspectation: null,
        password: null,
        confirm_password: null,
        // ======= experience =========
        department: [],
        company_name: [],
        employment_contract: [],
        start_working: [],
        end_working: [],
        location: [],
        // ======= education ==========
        institute_name: [],
        degree: [],
        education_program: [],
        start_study: [],
        end_study: [],
        ipk: [],
        // ======= certificate =========
        certificate_name: [],
        organizer: [],
        scores: [],
        certificate_year: [],
        // ======= document =========
        curriculum_vitae: null,
        photo: null,
        ktp: null,  // optional
        kk: null,   // optional
        npwp: null, // optional
        bpjs: null, // optional
        
        score: [],
        document_tracking: [],
        job_seeker_id: null,
        emergency_name: null,
        emergency_number: null,
        emergency_status: null,
        ptkp_status: null,
        company_registration_number: null,
        job_level_name: null,
        employee_type: null,
        start_date: null,
        end_date: null,
        job_specialist_name: null,
        scope: null,
        salary: null,
    }),
    watch: {},
    setup() {
        const { getEmployeeDetail } = API()
        return { getEmployeeDetail };
    },
    computed: {
        ...mapGetters('provider-selection', ['tahapanGetter']),
    },
    async mounted() {
        const employee_id =  await localStorage.getItem('employee_id');
        await this.getData(employee_id);
    },
    methods: {
        ...mapMutations('provider-selection', ['setTahapan']),
        async getData(employee_id){
            if(employee_id){
                await this.getEmployeeDetail(employee_id).then((result)=>{
                    result && this.refreshForm(result);
                })
            }
        },
        refreshForm(data){
            this.score = data.score;
            this.document_tracking = data.document_tracking;
            this.job_seeker_id = data.job_seeker_id;
            this.ptkp_status = data.ptkp_status;
            this.company_registration_number = data.company_registration_number;
            this.job_level_name = data.job_level?.job_level_name;
            this.employee_type = data.employee_type;
            this.start_date = data.start_date;
            this.end_date = data.end_date;
            this.job_specialist_name = data.job_specialist?.job_specialist_name;
            this.salary = data.salary;

            this.email = data.employee_data.email;
            this.fullname = data.employee_data.name;
            this.place_birth = data.employee_data.data_job_seeker[0].place_birth;
            this.date_birth = data.employee_data.data_job_seeker ? new Date(data.employee_data.data_job_seeker[0].date_birth).toISOString().substr(0, 10) : "";;
            this.linkedin = data.employee_data.data_job_seeker[0].linkedin;
            this.handphone = data.employee_data.data_job_seeker[0].handphone;
            this.residential_address = data.employee_data.data_job_seeker[0].residential_address;
            this.address_on_identity_card = data.employee_data.data_job_seeker[0].address_on_identity_card;
            this.marital_status = data.employee_data.data_job_seeker[0].marital_status;
            this.identity_number = data.employee_data.data_job_seeker[0].identity_number;
            this.npwp_number = data.employee_data.data_job_seeker[0].npwp_number;
            this.bpjskes = data.employee_data.data_job_seeker[0].bpjskes;
            this.bpjstik = data.employee_data.data_job_seeker[0].bpjstik;
            this.bank_account_number = data.employee_data.data_job_seeker[0].bank_account_number;
            this.bank_account_name = data.employee_data.data_job_seeker[0].bank_account_name;
            this.bank_name = data.employee_data.data_job_seeker[0].bank_name;
            this.work_position = data.employee_data.data_job_seeker[0].work_position;
            this.salary_exspectation = data.employee_data.data_job_seeker[0].salary_exspectation;
            this.emergency_name = data.employee_data.data_job_seeker[0].emergency_name;
            this.emergency_number = data.employee_data.data_job_seeker[0].emergency_number;
            this.emergency_status = data.employee_data.data_job_seeker[0].emergency_status;
            this.scope = data.employee_data.data_job_seeker[0].scope;
            
            this.curriculum_vitae = data.employee_data.data_document[0].curriculum_vitae;
            this.photo = data.employee_data.data_document[0].photo;
            this.ktp = data.employee_data.data_document[0].ktp;
            this.kk = data.employee_data.data_document[0].kk;
            this.npwp = data.employee_data.data_document[0].npwp;
            this.bpjs = data.employee_data.data_document[0].bpjs;

            data.employee_data.data_experience.forEach(element => {
                this.department.push(element.department);
                this.company_name.push(element.company_name);
                this.employment_contract.push(element.employment_contract);
                this.start_working.push(element.start_working ? new Date(element.start_working).toISOString().substr(0, 10) : "");
                this.end_working.push(element.end_working ? new Date(element.end_working).toISOString().substr(0, 10) : "");
                this.location.push(element.location);
            });
            data.employee_data.data_education.forEach(element => {
                this.institute_name.push(element.institute_name);
                this.degree.push(element.degree);
                this.education_program.push(element.education_program);
                this.start_study.push(element.start_study ? new Date(element.start_study).toISOString().substr(0, 10) : "");
                this.end_study.push(element.end_study ? new Date(element.end_study).toISOString().substr(0, 10) : "");
                this.ipk.push(element.ipk);
            });
            data.employee_data.data_certificate.forEach(element => {
                this.certificate_name.push(element.certificate_name);
                this.organizer.push(element.organizer);
                this.scores.push(element.scores);
                this.certificate_year.push(element.certificate_year);
            });

        },
        async clickDetail(module) {
            await this.setTahapan({
                ...this.tahapanGetter,
                detail: {
                    job_seeker_id: this.job_seeker_id,
                    module: module,
                }
            });
            return this.$router.push("/employee-data/detail/test-results")
        },

        useConvertToDateView(value) {
            var tanggal = new Date(value);
            var namaBulan = [
                "Januari", "Februari", "Maret", "April", "Mei", "Juni",
                "Juli", "Agustus", "September", "Oktober", "November", "Desember"
            ];
            var hari = tanggal.getUTCDate();
            var tahun = tanggal.getUTCFullYear();
            var bulan = namaBulan[tanggal.getUTCMonth()];

            var hasilFormat = hari + " " + bulan + " " + tahun;
            return hasilFormat;
        },
        useConvertToMonthCountView() {
            const startDate = new Date(this.start_date);
            const endDate = new Date(this.end_date);

            const diffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();
            return `${diffMonths} Bulan`;
        },
        useConvertToYearCountView() {
            const startDate = new Date(this.start_date);
            const endDate = new Date(this.end_date);

            const diffYears = endDate.getFullYear() - startDate.getFullYear();
            return `${diffYears} Tahun`;
        },
        parseDate (date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        back(){
            this.preview = false;
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },
        openFile(url){
            if(url){
                this.fileUrl = url;
                this.fileDialog = true;
            }
        },
        closeFile(){
            this.fileDialog = false;
            this.fileUrl = null;
        },
    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.data-belum-terisi {
    color: #ae445a;
    font-size: 8px;
    margin-top: -15px;
    position: absolute;
}
.pp-container {
    flex: 1;
    display: flex;
    align-self: stretch;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 225px;
}

.pp-frame {
    flex: 1;
    width: 175px;
    height: 225px;
    align-self: stretch;
    position: relative;
    border-radius: 5px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
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
    position: relative;
}
.plusplus {
    border-radius: 10px;
    border: 2px solid #ae445a;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 13px 14px;
    background-color: #ae445a;
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
    cursor: pointer;
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
