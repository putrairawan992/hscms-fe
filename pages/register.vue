<template>
    <div>
        <v-card class="card-register" style="z-index: 201;">
            <div class="my-2" style="position: relative;">
                <div class="blokade-parent ma-8 pt-10">
                    <div class="open-job-dan-draft">
                        Isi Data Diri dan Berkas Lampiran
                    </div>
                    <div class="milestones mt-10">
                        <div class="milestones-item" />
                        
                        <div class="stepts">
                            <div class="steps-process">
                                <div class="round">
                                    <div class="round-child" />
                                    <div class="bicheck1">
                                    <img class="vector-icon1" alt="" src="@/assets/svg/vector-register.svg" />
                                    <b class="b3">1</b>
                                    </div>
                                </div>
                                <div class="sub">
                                    <img class="crown-icon" alt="" src="@/assets/svg/crown.svg" />
                                    <div class="box">
                                        <div class="primery">
                                            <div class="on-color" />
                                            <b class="fill-in">Fill In</b>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-if="preview" class="steps-process">
                                <div class="round">
                                    <div class="round-child" />
                                    <div class="bicheck1">
                                    <img class="vector-icon1" alt="" src="@/assets/svg/vector-register.svg" />
                                    <b class="b3">2</b>
                                    </div>
                                </div>
                                <div class="sub">
                                    <img class="crown-icon" alt="" src="@/assets/svg/crown.svg" />
                                    <div class="box">
                                        <div class="primery">
                                            <div class="on-color" />
                                            <b class="preview">Preview</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="steps-process1">
                                <div class="round">
                                    <div class="round-child" />
                                    <div class="bicheck2">
                                    <img class="vector-icon" alt="" src="@/assets/svg/rectangle-4137.svg" />
                                    <b class="b2">2</b>
                                    </div>
                                </div>
                                <div class="sub1">
                                    <img class="crown-icon1" alt="" src="@/assets/svg/crown1.svg" />
                                    <div class="box">
                                        <div class="process-name" />
                                        <b class="preview">Preview</b>
                                    </div>
                                </div>
                            </div>

                            <div class="steps-process1">
                                <div class="round">
                                    <div class="round-child" />
                                    <div class="bicheck2">
                                        <img class="vector-icon" alt="" src="@/assets/svg/rectangle-4137.svg" />
                                        <b class="b2">3</b>
                                    </div>
                                </div>
                                <div class="sub1">
                                    <img class="crown-icon1" alt="" src="@/assets/svg/crown2.svg" />
                                    <div class="box">
                                        <div class="process-name" />
                                        <b class="publish">Publish</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="my-10">
                        <p class="ma-0">
                            Silakan terlebih dahulu melengkapi data diri dan berkas lampiran.
                        </p>
                        <p class="ma-0">
                            Pastikan isi dengan lengkap dan benar.
                        </p>
                    </div>

                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                            <b>Nama Lengkap:</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Nama Lengkap" v-model="fullname" :readonly="preview"/>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                            <b>Tempat Tanggal Lahir:</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
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
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                            <b>Alamat E-Mail:</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input type="email" class="register-text-input" placeholder="Masukkan alamat E-Mail" v-model="email" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                            <b>Password:</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input type="password" class="register-text-input" placeholder="Masukkan Password" v-model="password" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                            <b>Ulangi Password:</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input type="password" class="register-text-input" placeholder="Masukkan Ulang Password" v-model="confirm_password" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                            <b>Alamat URL LinkedIn:</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan alamat URL LinkedIn" v-model="linkedin" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                            <b>Nomor Handphone:</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Nomor Handphone" v-model="handphone" v-on:keypress="isNumber($event)" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                            <b>Emergency Contact:</b>
                        </v-col>
                        <v-col class="" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <v-row align="center">
                                <v-col cols="4">
                                    <input class="register-text-input" placeholder="Nama Emergency Contact" v-model="emergency_name" :readonly="preview" />
                                </v-col>
                                <v-col cols="4">
                                    <input class="register-text-input" placeholder="Hubungan Emergency Contact" v-model="emergency_status" :readonly="preview" />
                                </v-col>
                                <v-col cols="4">
                                    <input class="register-text-input" placeholder="Nomor Emergency Contact" v-model="emergency_number" :readonly="preview" />
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label pt-8">
                            <b>Jenis Kelamin:</b>
                        </v-col>
                        <v-col class="" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <multiselect
                                :disabled="preview"
                                v-model="gender"
                                :options="listJenisKelamin"
                                class="register-text-input"
                                placeholder="Pilih Jenis Kelamin" :allow-empty="false"
                            ></multiselect>
                        </v-col>
                    </v-row>

                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                            <b>Status Pernikahan:</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
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
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                            <b>Alamat Domisili:</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Alamat Domisili Saat Ini" v-model="residential_address" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                            <b>Alamat Rumah (KTP):</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Alamat Rumah Berdasarkan KTP" v-model="address_on_identity_card" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                            <b>Nomor NIK:</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Nomor NIK" v-model="identity_number" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>Nomor NPWP <i class="opsional">(*opsional)</i> :</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Nomor NPWP" v-model="npwp_number" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>Nomor BPJSKES <i class="opsional">(*opsional)</i> :</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Nomor BPJSKES" v-model="bpjskes" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>Nomor BPJSTK <i class="opsional">(*opsional)</i> :</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Nomor BPJSTK" v-model="bpjstik" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>Nama Bank <i class="opsional">(*opsional)</i> :</b>
                        </v-col>
                        <v-col class="" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Nama Bank *dianjurkan menggunakan rekening Bank Mandiri'" v-model="bank_name" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>No. Rek Bank <i class="opsional">(*opsional)</i> :</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan No. Rekening Bank *dianjurkan menggunakan rekening Bank Mandiri" v-model="bank_account_number" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>Nama. Rek Bank <i class="opsional">(*opsional)</i> :</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <input class="register-text-input" placeholder="Masukkan Nama Rekening Bank *dianjurkan menggunakan rekening Bank Mandiri" v-model="bank_account_name" :readonly="preview" />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                            <b>Melamar Posisi:</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <multiselect
                                :disabled="preview"
                                v-model="work_position"
                                :options="masterJobSpecialist"
                                class="register-text-input" label="job_specialist_name"
                                placeholder="Pilih Posisi yang Dilamar" :allow-empty="false"
                            ></multiselect>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label d-flex">
                            <b>Ekspektasi Gaji :</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <v-text-field
                                oninput="if(Number(this.value.length) > Number(this.max)) this.value = this.min;"
                                @input="_=>nominal=_" :value="nominal" :min="nominal" max="26" v-on:keypress="isNumber($event)"
                                placeholder="Masukkan ekspektasi Gaji yang diharapkan" class="register-text-field" solo>
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

                    <div class="group-inner" />
                    <v-row>
                        <v-col class="mb-6" style="position: relative; cursor: pointer;">
                            <i class="opsional-dapat-dikosongkan"> *Opsional. Dapat dikosongkan jika belum memiliki pengalaman pekerjaan </i>
                            <img class="pluscirclefill" alt="Tambah Pengalaman" src="@/assets/svg/pluscirclefill2.svg" @click="addForm('experience')"/>
                        </v-col>
                    </v-row>
                    <v-row align="start" v-for="(value, key) in department.length == 0 ? 1 : department" class="mb-4">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label mt-3">
                            <b>Pengalaman:</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <v-row>
                                <v-col cols="12">
                                    <input class="register-text-input" placeholder="Masukkan Posisi Pekerjaan Sebelumnya" v-model="department[key]" :readonly="preview" />
                                </v-col>
                                <v-col cols="12">
                                    <input class="register-text-input" placeholder="Masukkan Nama Perusahaan" v-model="company_name[key]" :readonly="preview" />
                                </v-col>
                                <v-col cols="6">
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
                                <v-col cols="6">
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
                                    <input class="register-text-input" placeholder="Masukkan Jenis Pekerjaan" v-model="employment_contract[key]" :readonly="preview" />
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                    <div class="group-inner" />
                    <v-row>
                        <v-col class="mb-6" style="position: relative; cursor: pointer;">
                            <i class="opsional-dapat-dikosongkan"> &ensp; </i>
                            <img class="pluscirclefill" alt="" src="@/assets/svg/pluscirclefill2.svg" @click="addForm('education')"/>
                        </v-col>
                    </v-row>
                    <v-row align="start" v-for="(value, key) in institute_name.length == 0 ? 1 : institute_name" class="mb-4">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label mt-3">
                            <b>Pendidikan:</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <v-row>
                                <v-col cols="12">
                                    <input class="register-text-input" placeholder="Masukkan Nama Tempat Pendidikan" v-model="institute_name[key]" :readonly="preview" />
                                </v-col>
                                <v-col cols="12">
                                    <input class="register-text-input" placeholder="Masukkan Jurusan" v-model="education_program[key]" :readonly="preview" />
                                </v-col>
                                <v-col cols="6">
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
                                <v-col cols="6">
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
                                    <v-select
                                        solo rounded content-class="elevation-0"
                                        v-model="degree[key]"
                                        :items="['SMA/SMK', 'Sertifikat Keahlian', 'D3', 'D4', 'S1', 'S2', 'S3']"
                                        placeholder="Pilih tingkat pendidikan"
                                        class="job-multiselect"
                                    ></v-select>
                                </v-col>
                                <v-col cols="6">
                                    <input class="register-text-input" placeholder="Masukkan IPK" v-model="ipk[key]" :readonly="preview" />
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                    <div class="group-inner" />
                    <v-row>
                        <v-col class="mb-6" style="position: relative; cursor: pointer;">
                            <i class="opsional-dapat-dikosongkan"> &ensp; </i>
                            <img class="pluscirclefill" alt="" src="@/assets/svg/pluscirclefill2.svg" @click="addForm('certificate')"/>
                        </v-col>
                    </v-row>
                    <v-row align="start" v-for="(value, key) in certificate_name.length == 0 ? 1 : certificate_name" class="mb-4">
                        <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label mt-3">
                            <b>Sertifikat:</b>
                        </v-col>
                        <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                            <v-row>
                                <v-col cols="12">
                                    <input class="register-text-input" v-model="certificate_name[key]" placeholder="Masukkan Nama Sertifikat (Contoh: Toefl - ITP, IELTS, dll)" :readonly="preview" />
                                </v-col>
                                <v-col cols="12">
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
                            <b>Berkas Lampiran:</b>
                            <i class="ukuran-maksimal-berkas">Ukuran maksimal berkas 3MB</i>
                        </v-col>
                        <v-col cols="12">
                            <v-row>
                                <v-col cols="4" xs="2" md="2" lg="2" xl="2" xxl="2">
                                    <input class="d-none" type="file" ref="fileInput1" @change="onSelectFile($event, 'curriculum_vitae')">
                                    <div class="pas-foto">
                                        <button class="plus cursor-pointer" @click="!preview && $refs.fileInput1.click()">
                                            <img v-if="curriculum_vitae" class="pluscirclefill-icon" alt="CV" src="@/assets/svg/doc.svg" />
                                            <img v-else class="pluscirclefill-icon" alt="CV" src="@/assets/svg/pluscirclefill.svg" />
                                        </button>
                                        <div class="foto">
                                            <div class="pas-foto-4x6">CV</div>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="4" xs="2" md="2" lg="2" xl="2" xxl="2">
                                    <input class="d-none" type="file" ref="fileInput2" @change="onSelectFile($event, 'photo')">
                                    <div class="pas-foto">
                                        <button class="plus cursor-pointer" @click="!preview && $refs.fileInput2.click()">
                                            <img v-if="photo" class="pluscirclefill-icon" alt="Pas Foto 4x6" src="@/assets/svg/doc.svg" />
                                            <img v-else class="pluscirclefill-icon" alt="Pas Foto 4x6" src="@/assets/svg/pluscirclefill.svg" />
                                        </button>
                                        <div class="foto">
                                            <div class="pas-foto-4x6">Pas Foto 4x6</div>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="4" xs="2" md="2" lg="2" xl="2" xxl="2">
                                    <input class="d-none" type="file" ref="fileInput3" @change="onSelectFile($event, 'ktp')">
                                    <div class="pas-foto">
                                        <button class="plus cursor-pointer" @click="!preview && $refs.fileInput3.click()">
                                            <img v-if="ktp" class="pluscirclefill-icon" alt="KTP" src="@/assets/svg/doc.svg" />
                                            <img v-else class="pluscirclefill-icon" alt="KTP" src="@/assets/svg/pluscirclefill.svg" />
                                        </button>
                                        <div class="foto">
                                            <div class="pas-foto-4x6">KTP</div>
                                                <i class="optional">(*optional)</i>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="4" xs="2" md="2" lg="2" xl="2" xxl="2">
                                    <input class="d-none" type="file" ref="fileInput4" @change="onSelectFile($event, 'kk')">
                                    <div class="pas-foto">
                                        <button class="plus cursor-pointer" @click="!preview && $refs.fileInput4.click()">
                                            <img v-if="kk" class="pluscirclefill-icon" alt="Kartu Keluarga" src="@/assets/svg/doc.svg" />
                                            <img v-else class="pluscirclefill-icon" alt="Kartu Keluarga" src="@/assets/svg/pluscirclefill.svg" />
                                        </button>
                                        <div class="foto">
                                            <div class="pas-foto-4x6">Kartu Keluarga</div>
                                                <i class="optional">(*optional)</i>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="4" xs="2" md="2" lg="2" xl="2" xxl="2">
                                    <input class="d-none" type="file" ref="fileInput5" @change="onSelectFile($event, 'npwp')">
                                    <div class="pas-foto">
                                        <button class="plus cursor-pointer" @click="!preview && $refs.fileInput5.click()">
                                            <img v-if="npwp" class="pluscirclefill-icon" alt="NPWP" src="@/assets/svg/doc.svg" />
                                            <img v-else class="pluscirclefill-icon" alt="NPWP" src="@/assets/svg/pluscirclefill.svg" />
                                        </button>
                                        <div class="foto">
                                            <div class="pas-foto-4x6">NPWP</div>
                                                <i class="optional">(*optional)</i>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="4" xs="2" md="2" lg="2" xl="2" xxl="2">
                                    <input class="d-none" type="file" ref="fileInput6" @change="onSelectFile($event, 'bpjs')">
                                    <div class="pas-foto">
                                        <button class="plus cursor-pointer" @click="!preview && $refs.fileInput6.click()">
                                            <img v-if="bpjs" class="pluscirclefill-icon" alt="BPJSKES & TK" src="@/assets/svg/doc.svg" />
                                            <img v-else class="pluscirclefill-icon" alt="BPJSKES & TK" src="@/assets/svg/pluscirclefill.svg" />
                                        </button>
                                        <div class="foto">
                                            <div class="pas-foto-4x6">BPJSKES & TK</div>
                                                <i class="optional">(*optional)</i>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col>
                            <p class="disclaimer-seluruh-data">
                                Disclaimer: Seluruh data milik pengguna tidak akan digunakan <br>
                                untuk kepentingan lain selain untuk melamar pekerjaan di website ini
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <div class="save-container">
                            <div v-if="preview" class="button-wrapper" @click="back">
                                <b class="tempat-tanggal-lahir">Back</b>
                            </div> 
                            <div v-else></div>
                            
                            <div v-if="preview" class="button-wrapper" @click="publish">
                                <b class="tempat-tanggal-lahir">Publish</b>
                            </div> 
                            <div v-else class="button-wrapper" @click="submit">
                                <b class="tempat-tanggal-lahir">Save</b>
                            </div> 
                        </div>
                    </v-row>
                </div>
            </div>
        </v-card>
        <div class="v-overlay v-overlay--active theme--dark" style="">
            <div class="v-overlay__scrim" style="opacity: 0.46; background-color: rgb(33, 33, 33); border-color: rgb(33, 33, 33);">
            </div>
        </div>
    </div>
</template>
<script>
// import debounce from 'debounce';
import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'

export default {
    auth: 'guest',
    name: "register",
    layout: "register",
    components: { Multiselect },
    data: () => ({
        nominal: "",
        preview: false,
        id_registration: null,
        datePickerBirthDate: false,
        datePickerEndStudy: [false],
        datePickerStartStudy: [false],
        datePickerEndWorking: [false],
        datePickerStartWorking: [false],
        listJenisKelamin: ['Laki - Laki', 'Perempuan'],
        listStatusPernikahan: ['Sudah Menikah', 'Belum Menikah'],
        masterJobSpecialist: [],

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
        work_position: null,
        salary_exspectation: null,
        password: null,
        confirm_password: null,

        scope: '',
        gender: null,
        bank_name: null,
        bank_account_name: null,
        emergency_status: null,
        emergency_number: null,
        emergency_name: null,

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
    }),
    watch: {
        nominal(to, from) {
            this.nominal = this.useConvertToMoneyView(to);
        },
    },
    setup() {
        const { getRegistration, postRegistration, getRegistrationData } = API()
        return { getRegistration, postRegistration, getRegistrationData };
    },
    async mounted() {
        await this.getRegistrationData().then((result)=>{
            this.masterJobSpecialist = result?.master_job_specialist ? result.master_job_specialist : [];
        });
        const storageIdRegistration = localStorage.getItem('id_registration');
        if(storageIdRegistration){
            this.id_registration = storageIdRegistration;
            this.getData();
        }
    },
    methods: {
        async getData(){
            await this.getRegistration(this.id_registration).then((result)=>{
                result && this.refreshForm(result);
            });
        },
        async submit(){
            // console.log({
            //     fullname: this.fullname,
            //     place_birth: this.place_birth,
            //     date_birth: this.date_birth,
            //     email: this.email,
            //     linkedin: this.linkedin,
            //     handphone: this.handphone,
            //     residential_address: this.residential_address,
            //     address_on_identity_card: this.address_on_identity_card,
            //     marital_status: this.marital_status,
            //     identity_number: this.identity_number,
            //     npwp_number: this.npwp_number,
            //     bpjskes: this.bpjskes,
            //     bpjstik: this.bpjstik,
            //     bank_account_number: this.bank_account_number,
            //     work_position: this.work_position,
            //     salary_exspectation: this.salary_exspectation,
            //     password: this.password,
            //     confirm_password: this.confirm_password,
            //     // ======= experience =========
            //     department: this.department,
            //     company_name: this.company_name,
            //     employment_contract: this.employment_contract,
            //     start_working: this.start_working,
            //     end_working: this.end_working,
            //     location: this.location,
            //     // ======= education ==========
            //     institute_name: this.institute_name,
            //     degree: this.degree,
            //     education_program: this.education_program,
            //     start_study: this.start_study,
            //     end_study: this.end_study,
            //     ipk: this.ipk,
            //     // ======= certificate =========
            //     certificate_name: this.certificate_name,
            //     organizer: this.organizer,
            //     scores: this.scores,
            //     certificate_year: this.certificate_year,
            //     // ======= document =========
            //     curriculum_vitae: this.curriculum_vitae,
            //     photo: this.photo,
            //     ktp: this.ktp,  // optional
            //     kk: this.kk,   // optional
            //     npwp: this.npwp, // optional
            //     bpjs: this.bpjs, // optional
            // });
            const body = new FormData();
            body.append('fullname', this.fullname);
            body.append('place_birth', this.place_birth);
            body.append('date_birth', this.date_birth);
            body.append('email', this.email);
            body.append('linkedin', this.linkedin);
            body.append('handphone', this.handphone);
            body.append('residential_address', this.residential_address);
            body.append('address_on_identity_card', this.address_on_identity_card);
            body.append('marital_status', this.marital_status);
            body.append('identity_number', this.identity_number);

            body.append('scope', this.scope);
            body.append('gender', this.gender);
            body.append('bank_name', this.bank_name);
            body.append('bank_account_name', this.bank_account_name);
            body.append('emergency_status', this.emergency_status);
            body.append('emergency_number', this.emergency_number);
            body.append('emergency_name', this.emergency_name);

            if (this.npwp_number != null) {
                body.append('npwp_number', this.npwp_number);
            }
            if (this.bpjskes != null) {
                body.append('bpjskes', this.bpjskes);
            }
            if (this.bpjstik != null) {
                body.append('bpjstik', this.bpjstik);
            }
            if (this.bank_account_number != null) {
                body.append('bank_account_number', this.bank_account_number);
            }
            if (this.salary_exspectation != null) {
                body.append('salary_exspectation', this.salary_exspectation);
            }
            body.append('work_position', this.work_position?.job_specialist_name);
            body.append('password', this.password);
            body.append('confirm_password', this.confirm_password);
            // ======= experience =========
            if(this.department.length > 0){
                body.append('department[]', this.department.length ? this.department : null);
                body.append('company_name[]', this.company_name.length ? this.company_name : null);
                body.append('employment_contract[]', this.employment_contract.length ? this.employment_contract : null);
                body.append('start_working[]', this.start_working.length ? this.start_working : null);
                body.append('end_working[]', this.end_working.length ? this.end_working : null);
                body.append('location[]', this.location.length ? this.location : null);
            }
            // ======= education ==========
            if(this.institute_name.length > 0){
                body.append('institute_name[]', this.institute_name.length ? this.institute_name : null);
                body.append('degree[]', this.degree.length ? this.degree : null);
                body.append('education_program[]', this.education_program.length ? this.education_program : null);
                body.append('start_study[]', this.start_study.length ? this.start_study : null);
                body.append('end_study[]', this.end_study.length ? this.end_study : null);
                body.append('ipk[]', this.ipk.length ? this.ipk : null);
            }
            // ======= certificate =========
            if(this.institute_name.length > 0){
                body.append('certificate_name[]', this.certificate_name.length ? this.certificate_name : null);
                body.append('organizer[]', this.organizer.length ? this.organizer : null);
                body.append('scores[]', this.scores.length ? this.scores : null);
                body.append('certificate_year[]', this.certificate_year.length ? this.certificate_year : null);
            }
            // ======= document =========
            body.append('curriculum_vitae', this.curriculum_vitae);
            body.append('photo', this.photo);
            body.append('ktp', this.ktp); // optional
            body.append('kk', this.kk); // optional
            body.append('npwp', this.npwp); // optional
            body.append('bpjs', this.bpjs); // optional

            await this.postRegistration(body, this.id_registration).then( async (result) => {
                if(result){
                    this.preview = true;
                    this.id_registration = result.id_registration;
                    localStorage.setItem('id_registration', result.id_registration);
                    this.password && localStorage.setItem('password', this.password);
                    return this.$notifier.showMessage({ content: 'Mohon koreksi data anda kembali.', status: 'success' });
                }
            })

            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        async publish(){
            let userPassword = localStorage.getItem('password');
            this.$loader.showLoading({ show: true });
            await this.$auth.loginWith('local', {
            data: {
                email: this.email,
                password: userPassword
            },
            }).then((result) => {
                this.$notifier.showMessage({ content: 'Anda berhasil Registrasi.', status: 'success' });
                localStorage.removeItem('id_registration');
                localStorage.removeItem('password');
                this.$router.push('/')
            }).catch((err) => {
                this.$notifier.showMessage({ content: err.response ? err.response.data.message : err, status: 'warning' });
                this.$loader.showLoading({ show: false });
            });
        },
        refreshForm(data){
            this.email = data.email;
            this.fullname = data.name;
            this.place_birth = data.data_job_seeker[0].place_birth;
            this.date_birth = data.data_job_seeker ? new Date(data.data_job_seeker[0].date_birth).toISOString().substr(0, 10) : "";;
            this.linkedin = data.data_job_seeker[0].linkedin;
            this.handphone = data.data_job_seeker[0].handphone;
            this.residential_address = data.data_job_seeker[0].residential_address;
            this.address_on_identity_card = data.data_job_seeker[0].address_on_identity_card;
            this.marital_status = data.data_job_seeker[0].marital_status;
            this.identity_number = data.data_job_seeker[0].identity_number;
            this.npwp_number = data.data_job_seeker[0].npwp_number;
            this.bpjskes = data.data_job_seeker[0].bpjskes;
            this.bpjstik = data.data_job_seeker[0].bpjstik;
            this.bank_account_number = data.data_job_seeker[0].bank_account_number;
            this.work_position = data.data_job_seeker[0].work_position;
            this.salary_exspectation = data.data_job_seeker[0].salary_exspectation;

            this.scope = data.data_job_seeker[0].scope;
            this.gender = data.data_job_seeker[0].gender;
            this.bank_name = data.data_job_seeker[0].bank_name;
            this.bank_account_name = data.data_job_seeker[0].bank_account_name;
            this.emergency_status = data.data_job_seeker[0].emergency_status;
            this.emergency_number = data.data_job_seeker[0].emergency_number;
            this.emergency_name = data.data_job_seeker[0].emergency_name;
            
            this.curriculum_vitae = data.data_document[0].curriculum_vitae;
            this.photo = data.data_document[0].photo;
            this.ktp = data.data_document[0].ktp;
            this.kk = data.data_document[0].kk;
            this.npwp = data.data_document[0].npwp;
            this.bpjs = data.data_document[0].bpjs;

            data.data_experience.forEach(element => {
                this.department.push(element.department);
                this.company_name.push(element.company_name);
                this.employment_contract.push(element.employment_contract);
                this.start_working.push(element.start_working ? new Date(element.start_working).toISOString().substr(0, 10) : "");
                this.end_working.push(element.end_working ? new Date(element.end_working).toISOString().substr(0, 10) : "");
                this.location.push(element.location);
            });
            data.data_education.forEach(element => {
                this.institute_name.push(element.institute_name);
                this.degree.push(element.degree);
                this.education_program.push(element.education_program);
                this.start_study.push(element.start_study ? new Date(element.start_study).toISOString().substr(0, 10) : "");
                this.end_study.push(element.end_study ? new Date(element.end_study).toISOString().substr(0, 10) : "");
                this.ipk.push(element.ipk);
            });
            data.data_certificate.forEach(element => {
                this.certificate_name.push(element.certificate_name);
                this.organizer.push(element.organizer);
                this.scores.push(element.scores);
                this.certificate_year.push(element.certificate_year);
            });

        },
        addForm(key){
            if(!this.preview){
                switch (key) {
                    case 'experience':
                        this.department.push(null);
                        this.company_name.push(null);
                        this.employment_contract.push(null);
                        this.start_working.push(null);
                        this.end_working.push(null);
                        this.location.push(null);
                        break;
                    case 'education':
                        this.institute_name.push(null);
                        this.degree.push(null);
                        this.education_program.push(null);
                        this.start_study.push(null);
                        this.end_study.push(null);
                        this.ipk.push(null);
                        break;
                    case 'certificate':
                        this.certificate_name.push(null);
                        this.organizer.push(null);
                        this.scores.push(null);
                        this.certificate_year.push(null);
                        break;
    
                    default: break;
                }
            }
        },
        onSelectFile (event, param) {
            const file = event.srcElement.files[0];
            switch (param) {
                case 'curriculum_vitae':
                    this.curriculum_vitae = file;
                    break;
                case 'photo':
                    this.photo = file;
                    break;
                case 'ktp':
                    this.ktp = file;
                    break;
                case 'kk':
                    this.kk = file;
                    break;
                case 'npwp':
                    this.npwp = file;
                    break;
                case 'bpjs':
                    this.bpjs = file;
                    break;
                default:
                    break;
            }
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
        isNumber(e) {
            let char = String.fromCharCode(e.keyCode);
            if (/^[0-9]+$/.test(char)) return true;
            else e.preventDefault();
        },
        useConvertToMoneyView(value) {
            if (!value) return value;
            value = parseInt(value.replaceAll(',', ''), 10);
            this.salary_exspectation = value;

            return Intl.NumberFormat('en-US').format(value);
        },
    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
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
    cursor: pointer;
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
