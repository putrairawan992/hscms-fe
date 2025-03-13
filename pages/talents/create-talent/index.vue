<template>
  <div>
    <v-card class="card-register">
      <div class="my-2" style="position: relative">
        <div class="blokade-parent ma-8 pt-10">
          <div
            class="open-job-dan-draft mb-14 d-flex"
            style="justify-content: space-between"
          >
            <div>Create Talent</div>
          </div>

          <!-- Basic Information -->
          <v-row align="center">
            <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
              <b>Nama Lengkap:</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <input
                class="register-text-input"
                placeholder="Masukkan Nama Lengkap"
                v-model="fullname"
                :readonly="preview"
              />
            </v-col>
          </v-row>

          <!-- Birth Information -->
          <v-row align="center">
            <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
              <b>Tempat Tanggal Lahir:</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <v-row align="center">
                <v-col cols="6">
                  <input
                    class="register-text-input"
                    placeholder="Masukkan Nama Kota"
                    v-model="place_birth"
                    :readonly="preview"
                  />
                </v-col>
                <v-col cols="6" class="calendar-input-container">
                  <v-menu
                    v-model="datePickerBirthDate"
                    offset-y
                    :close-on-content-click="false"
                    transition="scale-transition"
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <div v-on="!preview && on" style="position: relative">
                        <input
                          v-bind="attrs"
                          outlined
                          readonly
                          v-model="date_birth"
                          @blur="date_birth = parseDate(date_birth)"
                          placeholder="Masukkan Tanggal Lahir"
                          class="register-text-input"
                        />
                        <img
                          class="feather-icon-calendar"
                          alt=""
                          src="@/assets/svg/feathericon--calendar.svg"
                        />
                      </div>
                    </template>
                    <v-date-picker
                      v-model="date_birth"
                      @input="datePickerBirthDate = false"
                      no-title
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <!-- Email -->
          <v-row align="center">
            <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
              <b>Alamat E-Mail:</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <input
                type="email"
                class="register-text-input"
                placeholder="Masukkan alamat E-Mail"
                v-model="email"
                :readonly="preview"
              />
            </v-col>
          </v-row>

          <!-- LinkedIn -->
          <v-row align="center">
            <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
              <b>Alamat URL LinkedIn:</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <input
                class="register-text-input"
                placeholder="Masukkan alamat URL LinkedIn"
                v-model="linkedin"
                :readonly="preview"
              />
            </v-col>
          </v-row>

          <!-- Phone -->
          <v-row align="center">
            <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
              <b>Nomor Handphone:</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <input
                class="register-text-input"
                placeholder="Masukkan Nomor Handphone"
                v-model="handphone"
                v-on:keypress="isNumber($event)"
                :readonly="preview"
              />
            </v-col>
          </v-row>

          <!-- Emergency Contact -->
          <v-row align="center">
            <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
              <b>Emergency Contact:</b>
            </v-col>
            <v-col class="" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <v-row align="center">
                <v-col cols="4">
                  <input
                    class="register-text-input"
                    placeholder="Nama Emergency Contact"
                    v-model="emergency_name"
                    :readonly="preview"
                  />
                </v-col>
                <v-col cols="4">
                  <input
                    class="register-text-input"
                    placeholder="Hubungan Emergency Contact"
                    v-model="emergency_status"
                    :readonly="preview"
                  />
                </v-col>
                <v-col cols="4">
                  <input
                    class="register-text-input"
                    placeholder="Nomor Emergency Contact"
                    v-model="emergency_number"
                    :readonly="preview"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <!-- Gender -->
          <v-row align="center">
            <v-col
              cols="12"
              xs="3"
              md="3"
              lg="3"
              xl="3"
              xxl="3"
              class="label pt-8"
            >
              <b>Jenis Kelamin:</b>
            </v-col>
            <v-col class="" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <multiselect
                :disabled="preview"
                v-model="gender"
                :options="listJenisKelamin"
                class="register-text-input"
                placeholder="Pilih Jenis Kelamin"
                :allow-empty="false"
              ></multiselect>
            </v-col>
          </v-row>

          <!-- Marital Status -->
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
                placeholder="Pilih Status Pernikahan"
                :allow-empty="false"
              ></multiselect>
            </v-col>
          </v-row>

          <!-- Current Address -->
          <v-row align="center">
            <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
              <b>Alamat Domisili:</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <input
                class="register-text-input"
                placeholder="Masukkan Alamat Domisili Saat Ini"
                v-model="residential_address"
                :readonly="preview"
              />
            </v-col>
          </v-row>

          <!-- KTP Address -->
          <v-row align="center">
            <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
              <b>Alamat Rumah (KTP):</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <input
                class="register-text-input"
                placeholder="Masukkan Alamat Rumah Berdasarkan KTP"
                v-model="address_on_identity_card"
                :readonly="preview"
              />
            </v-col>
          </v-row>

          <!-- NIK -->
          <v-row align="center">
            <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
              <b>Nomor NIK:</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <input
                class="register-text-input"
                placeholder="Masukkan Nomor NIK"
                v-model="identity_number"
                :readonly="preview"
              />
            </v-col>
          </v-row>

          <!-- PTKP Status -->
          <v-row align="center" v-if="employee_data">
            <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
              <b>Status PTKP:</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <input
                class="register-text-input"
                placeholder="Masukkan Status PTKP"
                v-model="ptkp_status"
                :readonly="preview"
              />
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col
              cols="12"
              xs="3"
              md="3"
              lg="3"
              xl="3"
              xxl="3"
              class="label d-flex"
            >
              <b>Posisi Pekerjaan:</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <multiselect
                :disabled="preview"
                v-model="work_position"
                :options="listWorkPositions"
                track-by="job_specialist_name"
                label="job_specialist_name"
                class="register-text-input"
                placeholder="Pilih Posisi Pekerjaan"
                :allow-empty="false"
              ></multiselect>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col
              cols="12"
              xs="3"
              md="3"
              lg="3"
              xl="3"
              xxl="3"
              class="label d-flex"
            >
              <b>Ekspektasi Gaji:</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <v-text-field
                oninput="if(Number(this.value.length) > Number(this.max)) this.value = this.min;"
                @input="(_) => (salary_nominal = _)"
                :value="salary_nominal"
                :min="salary_nominal"
                max="26"
                v-on:keypress="isNumber($event)"
                placeholder="Masukkan ekspektasi Gaji yang diharapkan"
                class="register-text-field"
                solo
              >
                <template v-slot:prepend-inner>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <p style="color: #000; margin-bottom: 0" v-on="on">Rp.</p>
                    </template>
                    Rupiah
                  </v-tooltip>
                </template>
              </v-text-field>
            </v-col>
          </v-row>
          <!-- NPWP -->
          <v-row align="center">
            <v-col
              cols="12"
              xs="3"
              md="3"
              lg="3"
              xl="3"
              xxl="3"
              class="label d-flex"
            >
              <b>Nomor NPWP <i class="opsional">(*opsional)</i> :</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <input
                class="register-text-input"
                placeholder="Masukkan Nomor NPWP"
                v-model="npwp_number"
                :readonly="preview"
              />
            </v-col>
          </v-row>

          <!-- BPJS Kesehatan -->
          <v-row align="center">
            <v-col
              cols="12"
              xs="3"
              md="3"
              lg="3"
              xl="3"
              xxl="3"
              class="label d-flex"
            >
              <b>Nomor BPJSKES <i class="opsional">(*opsional)</i> :</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <input
                class="register-text-input"
                placeholder="Masukkan Nomor BPJSKES"
                v-model="bpjskes"
                :readonly="preview"
              />
            </v-col>
          </v-row>

          <!-- BPJS Ketenagakerjaan -->
          <v-row align="center">
            <v-col
              cols="12"
              xs="3"
              md="3"
              lg="3"
              xl="3"
              xxl="3"
              class="label d-flex"
            >
              <b>Nomor BPJSTK <i class="opsional">(*opsional)</i> :</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <input
                class="register-text-input"
                placeholder="Masukkan Nomor BPJSTK"
                v-model="bpjstik"
                :readonly="preview"
              />
            </v-col>
          </v-row>

          <!-- Bank Information -->
          <v-row align="center">
            <v-col
              cols="12"
              xs="3"
              md="3"
              lg="3"
              xl="3"
              xxl="3"
              class="label d-flex"
            >
              <b>Nama Bank <i class="opsional">(*opsional)</i> :</b>
            </v-col>
            <v-col class="" cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <input
                class="register-text-input"
                placeholder="Masukkan Nama Bank *dianjurkan menggunakan rekening Bank Mandiri'"
                v-model="bank_name"
                :readonly="preview"
              />
            </v-col>
          </v-row>

          <v-row align="center">
            <v-col
              cols="12"
              xs="3"
              md="3"
              lg="3"
              xl="3"
              xxl="3"
              class="label d-flex"
            >
              <b>No. Rek Bank <i class="opsional">(*opsional)</i> :</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <input
                class="register-text-input"
                placeholder="Masukkan No. Rekening Bank *dianjurkan menggunakan rekening Bank Mandiri"
                v-model="bank_account_number"
                :readonly="preview"
              />
            </v-col>
          </v-row>

          <v-row align="center">
            <v-col
              cols="12"
              xs="3"
              md="3"
              lg="3"
              xl="3"
              xxl="3"
              class="label d-flex"
            >
              <b>Nama. Rek Bank <i class="opsional">(*opsional)</i> :</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <input
                class="register-text-input"
                placeholder="Masukkan Nama Rekening Bank *dianjurkan menggunakan rekening Bank Mandiri"
                v-model="bank_account_name"
                :readonly="preview"
              />
            </v-col>
          </v-row>

          <!-- Bootcamp -->
          <v-row align="center">
            <v-col
              cols="12"
              xs="3"
              md="3"
              lg="3"
              xl="3"
              xxl="3"
              class="label d-flex"
            >
              <b>Bootcamp <i class="opsional">(*opsional)</i> :</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <input
                class="register-text-input"
                placeholder="Masukkan Nama Bootcamp"
                v-model="bootcamp"
                :readonly="preview"
              />
            </v-col>
          </v-row>

          <!-- Experience Section -->
          <div class="group-inner" />
          <v-row>
            <v-col class="mb-6" style="position: relative; cursor: pointer">
              <i class="opsional-dapat-dikosongkan">
                *Opsional. Dapat dikosongkan jika belum memiliki pengalaman
                pekerjaan
              </i>
              <img
                class="pluscirclefill"
                alt="Tambah Pengalaman"
                src="@/assets/svg/pluscirclefill2.svg"
                @click="addForm('experience')"
              />
            </v-col>
          </v-row>

          <v-row
            align="start"
            v-for="(value, key) in department.length == 0 ? 1 : department"
            :key="'exp-' + key"
            class="mb-4"
          >
            <v-col
              cols="12"
              xs="3"
              md="3"
              lg="3"
              xl="3"
              xxl="3"
              class="label mt-3"
            >
              <b>Pengalaman:</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <v-row>
                <v-col cols="12">
                  <input
                    class="register-text-input"
                    placeholder="Masukkan Posisi Pekerjaan Sebelumnya"
                    v-model="department[key]"
                    :readonly="preview"
                  />
                </v-col>
                <v-col cols="12">
                  <input
                    class="register-text-input"
                    placeholder="Masukkan Nama Perusahaan"
                    v-model="company_name[key]"
                    :readonly="preview"
                  />
                </v-col>
                <v-col cols="6">
                  <v-menu
                    v-model="datePickerStartWorking[key]"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <div v-on="!preview && on" style="position: relative">
                        <input
                          v-bind="attrs"
                          outlined
                          readonly
                          v-model="start_working[key]"
                          @blur="
                            start_working[key] = parseDate(start_working[key])
                          "
                          placeholder="Masukkan Tanggal Mulai"
                          class="register-text-input"
                        />
                        <img
                          class="feather-icon-calendar"
                          alt=""
                          src="@/assets/svg/feathericon--calendar.svg"
                        />
                      </div>
                    </template>
                    <v-date-picker
                      v-model="start_working[key]"
                      @input="datePickerStartWorking[key] = false"
                      no-title
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="6">
                  <v-menu
                    v-model="datePickerEndWorking[key]"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <div v-on="!preview && on" style="position: relative">
                        <input
                          v-bind="attrs"
                          outlined
                          readonly
                          v-model="end_working[key]"
                          @blur="end_working[key] = parseDate(end_working[key])"
                          placeholder="Masukkan Tanggal Selesai"
                          class="register-text-input"
                        />
                        <img
                          class="feather-icon-calendar"
                          alt=""
                          src="@/assets/svg/feathericon--calendar.svg"
                        />
                      </div>
                    </template>
                    <v-date-picker
                      v-model="end_working[key]"
                      @input="datePickerEndWorking[key] = false"
                      no-title
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="6">
                  <input
                    class="register-text-input"
                    placeholder="Masukkan Lokasi Pekerjaan"
                    v-model="location[key]"
                    :readonly="preview"
                  />
                </v-col>
                <v-col cols="6">
                  <input
                    class="register-text-input"
                    placeholder="Masukkan Jenis Pekerjaan"
                    v-model="employment_contract[key]"
                    :readonly="preview"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <!-- Education Section -->
          <div class="group-inner" />
          <v-row>
            <v-col class="mb-6" style="position: relative; cursor: pointer">
              <i class="opsional-dapat-dikosongkan"> &ensp; </i>
              <img
                class="pluscirclefill"
                alt=""
                src="@/assets/svg/pluscirclefill2.svg"
                @click="addForm('education')"
              />
            </v-col>
          </v-row>

          <v-row
            align="start"
            v-for="(value, key) in institute_name.length == 0
              ? 1
              : institute_name"
            :key="'edu-' + key"
            class="mb-4"
          >
            <v-col
              cols="12"
              xs="3"
              md="3"
              lg="3"
              xl="3"
              xxl="3"
              class="label mt-3"
            >
              <b>Pendidikan:</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <v-row>
                <v-col cols="12">
                  <input
                    class="register-text-input"
                    placeholder="Masukkan Nama Tempat Pendidikan"
                    v-model="institute_name[key]"
                    :readonly="preview"
                  />
                </v-col>
                <v-col cols="12">
                  <input
                    class="register-text-input"
                    placeholder="Masukkan Jurusan"
                    v-model="education_program[key]"
                    :readonly="preview"
                  />
                </v-col>
                <v-col cols="6">
                  <v-menu
                    v-model="datePickerStartStudy[key]"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <div v-on="!preview && on" style="position: relative">
                        <input
                          v-bind="attrs"
                          outlined
                          readonly
                          v-model="start_study[key]"
                          @blur="start_study[key] = parseDate(start_study[key])"
                          placeholder="Masukkan Tanggal Mulai"
                          class="register-text-input"
                        />
                        <img
                          class="feather-icon-calendar"
                          alt=""
                          src="@/assets/svg/feathericon--calendar.svg"
                        />
                      </div>
                    </template>
                    <v-date-picker
                      v-model="start_study[key]"
                      @input="datePickerStartStudy[key] = false"
                      no-title
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="6">
                  <v-menu
                    v-model="datePickerEndStudy[key]"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <div v-on="!preview && on" style="position: relative">
                        <input
                          v-bind="attrs"
                          outlined
                          readonly
                          v-model="end_study[key]"
                          @blur="end_study[key] = parseDate(end_study[key])"
                          placeholder="Masukkan Tanggal Selesai"
                          class="register-text-input"
                        />
                        <img
                          class="feather-icon-calendar"
                          alt=""
                          src="@/assets/svg/feathericon--calendar.svg"
                        />
                      </div>
                    </template>
                    <v-date-picker
                      v-model="end_study[key]"
                      @input="datePickerEndStudy[key] = false"
                      no-title
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="6">
                  <v-select
                    solo
                    rounded
                    content-class="elevation-0"
                    v-model="degree[key]"
                    :items="[
                      'SMA/SMK',
                      'Sertifikat Keahlian',
                      'D3',
                      'D4',
                      'S1',
                      'S2',
                      'S3',
                    ]"
                    placeholder="Pilih tingkat pendidikan"
                    class="job-multiselect"
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <input
                    class="register-text-input"
                    placeholder="Masukkan IPK"
                    v-model="ipk[key]"
                    :readonly="preview"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <!-- Certificate Section -->
          <div class="group-inner" />
          <v-row>
            <v-col class="mb-6" style="position: relative; cursor: pointer">
              <i class="opsional-dapat-dikosongkan"> &ensp; </i>
              <img
                class="pluscirclefill"
                alt=""
                src="@/assets/svg/pluscirclefill2.svg"
                @click="addForm('certificate')"
              />
            </v-col>
          </v-row>

          <v-row
            align="start"
            v-for="(value, key) in certificate_name.length == 0
              ? 1
              : certificate_name"
            :key="'cert-' + key"
            class="mb-4"
          >
            <v-col
              cols="12"
              xs="3"
              md="3"
              lg="3"
              xl="3"
              xxl="3"
              class="label mt-3"
            >
              <b>Sertifikat:</b>
            </v-col>
            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
              <v-row>
                <v-col cols="12">
                  <input
                    class="register-text-input"
                    v-model="certificate_name[key]"
                    placeholder="Masukkan Nama Sertifikat (Contoh: Toefl - ITP, IELTS, dll)"
                    :readonly="preview"
                  />
                </v-col>
                <v-col cols="12">
                  <input
                    class="register-text-input"
                    v-model="organizer[key]"
                    placeholder="Masukkan Nama Lembaga"
                    :readonly="preview"
                  />
                </v-col>
                <v-col cols="6">
                  <input
                    class="register-text-input"
                    v-model="scores[key]"
                    placeholder="Masukkan Nilai Sertifikat (*opsional)"
                    :readonly="preview"
                  />
                </v-col>
                <v-col cols="6">
                  <input
                    class="register-text-input"
                    v-model="certificate_year[key]"
                    placeholder="Masukkan Tahun Selesai"
                    :readonly="preview"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <!-- File Upload Section -->
          <div class="group-inner" />
          <v-row align="start">
            <v-col
              cols="12"
              class="label mt-3"
              style="display: flex; flex-direction: column"
            >
              <b>Berkas Lampiran:</b>
              <i class="ukuran-maksimal-berkas">Ukuran maksimal berkas 3MB</i>
            </v-col>
            <v-col cols="12">
              <v-row>
                <!-- Required Documents -->
                <v-col cols="12" sm="6" md="4" lg="2">
                  <v-card
                    class="upload-card p-0 d-flex align-center justify-center mb-2"
                    outlined
                    height="120"
                    @click="handleFileUpload('curriculum_vitae')"
                    style="cursor: pointer"
                  >
                    <v-icon color="primary" size="35">mdi-plus</v-icon>
                    <input
                      type="file"
                      ref="curriculum_vitae"
                      class="d-none"
                      @change="onFileSelected($event, 'curriculum_vitae')"
                      accept=".pdf,.doc,.docx"
                    />
                  </v-card>
                  <span class="mt-2">CV</span>
                </v-col>

                <v-col cols="12" sm="6" md="4" lg="2">
                  <v-card
                    class="upload-card p-0 d-flex align-center justify-center mb-2"
                    outlined
                    height="120"
                    @click="handleFileUpload('photo')"
                    style="cursor: pointer"
                  >
                    <v-icon color="primary" size="35">mdi-plus</v-icon>
                    <input
                      type="file"
                      ref="photo"
                      class="d-none"
                      @change="onFileSelected($event, 'photo')"
                      accept="image/*"
                    />
                  </v-card>
                  <span class="mt-2">Pas Foto 4x6</span>
                </v-col>

                <!-- Optional Documents -->
                <v-col
                  v-for="doc in optionalDocs"
                  :key="doc.id"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="2"
                >
                  <v-card
                    class="upload-card p-0 d-flex align-center justify-center mb-2"
                    outlined
                    height="120"
                    @click="handleFileUpload(doc.id)"
                    style="cursor: pointer"
                  >
                    <v-icon color="primary" size="35">mdi-plus</v-icon>
                    <input
                      type="file"
                      :ref="doc.id"
                      class="d-none"
                      @change="onFileSelected($event, doc.id)"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </v-card>
                  <span class="mt-2">{{ doc.name }}</span>
                  <span class="text-caption">(*optional)</span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <!-- Submit Button -->
          <v-row>
            <div class="save-container" style="justify-content: end">
              <div class="button-wrapper" @click="submit">
                <b class="tempat-tanggal-lahir">Save</b>
              </div>
            </div>
          </v-row>
        </div>
      </div>
    </v-card>

    <!-- File Preview Dialog -->
    <Dialog-OpenFile
      :show="fileDialog"
      :fileUrl="fileUrl"
      :closeDialog="closeFile"
    />
  </div>
</template>

<script>
import { API } from "../../../api";
import Multiselect from "vue-multiselect";

export default {
  name: "BiodataForm",
  components: { Multiselect },

  data: () => ({
    preview: false,
    fileDialog: false,
    fileUrl: null,
    nominal: "",

    // Date pickers
    datePickerBirthDate: false,
    datePickerEndStudy: [false],
    datePickerStartStudy: [false],
    datePickerEndWorking: [false],
    datePickerStartWorking: [false],

    // Dropdown options
    listJenisKelamin: ["Laki - Laki", "Perempuan"],
    listStatusPernikahan: ["Sudah Menikah", "Belum Menikah"],

    work_position: null,
    salary_nominal: "",
    listWorkPositions: [],

    // Form fields
    fullname: "",
    place_birth: "",
    date_birth: "",
    email: "",
    linkedin: "",
    handphone: "",
    residential_address: "",
    address_on_identity_card: "",
    marital_status: "",
    identity_number: "",
    npwp_number: "",
    bpjskes: "",
    bpjstik: "",
    bank_account_number: "",
    work_position: "",
    salary_exspectation: "",

    // Additional info
    bootcamp: "",
    scope: "",
    gender: "",
    bank_name: "",
    bank_account_name: "",
    emergency_status: "",
    emergency_number: "",
    emergency_name: "",

    // Arrays for dynamic forms
    department: [],
    company_name: [],
    employment_contract: [],
    start_working: [],
    end_working: [],
    location: [],

    institute_name: [],
    degree: [],
    education_program: [],
    start_study: [],
    end_study: [],
    ipk: [],

    certificate_name: [],
    organizer: [],
    scores: [],
    certificate_year: [],

    // File uploads
    curriculum_vitae: null,
    photo: null,
    ktp: null,
    kk: null,
    npwp: null,
    bpjs: null,

    // Employee specific data
    score: [],
    employee_data: false,
    ptkp_status: "",
    company_registration_number: "",
    job_level_name: "",
    employee_type: "",
    start_date: "",
    end_date: "",
    job_specialist_name: "",

    optionalDocs: [
      { id: "ktp", name: "KTP" },
      { id: "kk", name: "Kartu Keluarga" },
      { id: "npwp", name: "NPWP" },
      { id: "bpjs", name: "BPJSKES & TK" },
    ],
  }),

  watch: {
    nominal(to, from) {
      this.nominal = this.useConvertToMoneyView(to);
    },
  },
  async mounted() {
    await this.getRegistrationData().then((result) => {
      console.log(result);
      this.listWorkPositions = result?.master_job_specialist
        ? result.master_job_specialist
        : [];
    });
  },
  methods: {
    handleFileUpload(type) {
      // Ambil ref langsung tanpa mencari array
      const fileInput = this.$refs[type];
      if (fileInput) {
        // Jika single ref, gunakan langsung
        if (!Array.isArray(fileInput)) {
          fileInput.click();
        }
        // Jika array ref (untuk kasus multiple elements dengan ref yang sama)
        else if (fileInput.length > 0) {
          fileInput[0].click();
        }
      }
    },

    onFileSelected(event, type) {
      const files = event.target.files;
      if (!files.length) return;

      const maxSize = 3 * 1024 * 1024; // 3MB
      const file = files[0];

      if (file.size > maxSize) {
        this.$toast.error("File exceeds 3MB limit");
        return;
      }

      this[type] = file;
    },

    parseDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },

    addForm(key) {
      if (this.preview) return;

      switch (key) {
        case "experience":
          this.department.push(null);
          this.company_name.push(null);
          this.employment_contract.push(null);
          this.start_working.push(null);
          this.end_working.push(null);
          this.location.push(null);
          break;
        case "education":
          this.institute_name.push(null);
          this.degree.push(null);
          this.education_program.push(null);
          this.start_study.push(null);
          this.end_study.push(null);
          this.ipk.push(null);
          break;
        case "certificate":
          this.certificate_name.push(null);
          this.organizer.push(null);
          this.scores.push(null);
          this.certificate_year.push(null);
          break;
      }
    },

    isNumber(e) {
      const char = String.fromCharCode(e.keyCode);
      if (/^[0-9]+$/.test(char)) return true;
      else e.preventDefault();
    },

    useConvertToMoneyView(value) {
      if (!value) return value;
      value = parseInt(value.replaceAll(",", ""), 10);
      this.salary_exspectation = value;
      return Intl.NumberFormat("en-US").format(value);
    },

    useConvertToDateView(value) {
      if (!value) return "";
      const tanggal = new Date(value);
      const namaBulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];
      return `${tanggal.getUTCDate()} ${
        namaBulan[tanggal.getUTCMonth()]
      } ${tanggal.getUTCFullYear()}`;
    },

    useConvertToMonthCountView() {
      if (!this.start_date || !this.end_date) return "";
      const startDate = new Date(this.start_date);
      const endDate = new Date(this.end_date);
      const diffMonths =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        endDate.getMonth() -
        startDate.getMonth();
      return `${diffMonths} Bulan`;
    },

    useConvertToYearCountView() {
      if (!this.start_date || !this.end_date) return "";
      const startDate = new Date(this.start_date);
      const endDate = new Date(this.end_date);
      const diffYears = endDate.getFullYear() - startDate.getFullYear();
      return `${diffYears}Tahun`;
    },

    async submit() {
      try {
        const formData = new FormData();

        // Basic Information
        formData.append("fullname", this.fullname);
        formData.append("place_birth", this.place_birth);
        formData.append("date_birth", this.date_birth);
        formData.append("email", this.email);
        formData.append("linkedin", this.linkedin);
        formData.append("handphone", this.handphone);
        formData.append("residential_address", this.residential_address);
        formData.append(
          "address_on_identity_card",
          this.address_on_identity_card
        );
        formData.append("marital_status", this.marital_status);
        formData.append("identity_number", this.identity_number);

        // Additional Info
        formData.append("scope", this.scope);
        formData.append("gender", this.gender);
        formData.append("bank_name", this.bank_name);
        formData.append("bank_account_name", this.bank_account_name);
        formData.append("emergency_status", this.emergency_status);
        formData.append("emergency_number", this.emergency_number);
        formData.append("emergency_name", this.emergency_name);
        formData.append("bootcamp", this.bootcamp);
        formData.append("ptkp_status", this.ptkp_status);
        formData.append(
          "company_registration_number",
          this.company_registration_number
        );

        // Optional Fields
        if (this.npwp_number) formData.append("npwp_number", this.npwp_number);
        if (this.bpjskes) formData.append("bpjskes", this.bpjskes);
        if (this.bpjstik) formData.append("bpjstik", this.bpjstik);
        if (this.bank_account_number)
          formData.append("bank_account_number", this.bank_account_number);
        if (this.salary_exspectation)
          formData.append("salary_exspectation", this.salary_exspectation);
        if (this.work_position?.job_specialist_name) {
          formData.append(
            "work_position",
            this.work_position.job_specialist_name
          );
        }

        // Experience Arrays
        if (this.department.length > 0) {
          this.department.forEach((item, index) => {
            if (item) formData.append(`department[${index}]`, item);
            if (this.company_name[index])
              formData.append(
                `company_name[${index}]`,
                this.company_name[index]
              );
            if (this.employment_contract[index])
              formData.append(
                `employment_contract[${index}]`,
                this.employment_contract[index]
              );
            if (this.start_working[index])
              formData.append(
                `start_working[${index}]`,
                this.start_working[index]
              );
            if (this.end_working[index])
              formData.append(`end_working[${index}]`, this.end_working[index]);
            if (this.location[index])
              formData.append(`location[${index}]`, this.location[index]);
          });
        }

        // Education Arrays
        if (this.institute_name.length > 0) {
          this.institute_name.forEach((item, index) => {
            if (item) formData.append(`institute_name[${index}]`, item);
            if (this.degree[index])
              formData.append(`degree[${index}]`, this.degree[index]);
            if (this.education_program[index])
              formData.append(
                `education_program[${index}]`,
                this.education_program[index]
              );
            if (this.start_study[index])
              formData.append(`start_study[${index}]`, this.start_study[index]);
            if (this.end_study[index])
              formData.append(`end_study[${index}]`, this.end_study[index]);
            if (this.ipk[index])
              formData.append(`ipk[${index}]`, this.ipk[index]);
          });
        }

        // Certificate Arrays
        if (this.certificate_name.length > 0) {
          this.certificate_name.forEach((item, index) => {
            if (item) formData.append(`certificate_name[${index}]`, item);
            if (this.organizer[index])
              formData.append(`organizer[${index}]`, this.organizer[index]);
            if (this.scores[index])
              formData.append(`scores[${index}]`, this.scores[index]);
            if (this.certificate_year[index])
              formData.append(
                `certificate_year[${index}]`,
                this.certificate_year[index]
              );
          });
        }

        // File Uploads
        if (this.curriculum_vitae)
          formData.append("curriculum_vitae", this.curriculum_vitae);
        if (this.photo) formData.append("photo", this.photo);
        if (this.ktp) formData.append("ktp", this.ktp);
        if (this.kk) formData.append("kk", this.kk);
        if (this.npwp) formData.append("npwp", this.npwp);
        if (this.bpjs) formData.append("bpjs", this.bpjs);

        const result = await this.talentRegistration(formData);

        if (result) {
          this.$notifier.showMessage({
            content: "Data berhasil disimpan.",
            status: "success",
          });
          this.$router.push("/talents");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        this.$notifier.showMessage({
          content: "Terjadi kesalahan saat menyimpan data.",
          status: "error",
        });
      }
    },

    refreshForm(data) {
      // Basic Information
      this.email = data.email;
      this.fullname = data.name;
      this.place_birth = data.data_job_seeker[0].place_birth;
      this.date_birth = data.data_job_seeker[0].date_birth
        ? new Date(data.data_job_seeker[0].date_birth)
            .toISOString()
            .substr(0, 10)
        : "";
      this.linkedin = data.data_job_seeker[0].linkedin;
      this.handphone = data.data_job_seeker[0].handphone;
      this.residential_address = data.data_job_seeker[0].residential_address;
      this.address_on_identity_card =
        data.data_job_seeker[0].address_on_identity_card;
      this.marital_status = data.data_job_seeker[0].marital_status;
      this.identity_number = data.data_job_seeker[0].identity_number;
      this.npwp_number = data.data_job_seeker[0].npwp_number;
      this.bpjskes = data.data_job_seeker[0].bpjskes;
      this.bpjstik = data.data_job_seeker[0].bpjstik;
      this.bank_account_number = data.data_job_seeker[0].bank_account_number;
      this.bootcamp = data.data_job_seeker[0].bootcamp;

      // Additional Info
      this.scope = data.data_job_seeker[0].scope;
      this.gender = data.data_job_seeker[0].gender;
      this.bank_name = data.data_job_seeker[0].bank_name;
      this.bank_account_name = data.data_job_seeker[0].bank_account_name;
      this.emergency_status = data.data_job_seeker[0].emergency_status;
      this.emergency_number = data.data_job_seeker[0].emergency_number;
      this.emergency_name = data.data_job_seeker[0].emergency_name;

      // Work Position
      this.work_position = {
        job_specialist_name: data.data_job_seeker[0].work_position,
      };
      this.salary_exspectation = data.data_job_seeker[0].salary_exspectation;

      // Files
      this.curriculum_vitae = data.data_document[0].curriculum_vitae;
      this.photo = data.data_document[0].photo;
      this.ktp = data.data_document[0].ktp;
      this.kk = data.data_document[0].kk;
      this.npwp = data.data_document[0].npwp;
      this.bpjs = data.data_document[0].bpjs;

      // Employee Data
      this.score = data.employee_data?.score;
      this.ptkp_status = data.employee_data?.ptkp_status;
      this.company_registration_number =
        data.employee_data?.company_registration_number;
      this.job_level_name = data.employee_data?.job_level_name;
      this.employee_type = data.employee_data?.employee_type;
      this.start_date = data.employee_data?.start_date;
      this.end_date = data.employee_data?.end_date;
      this.job_specialist_name = data.employee_data?.job_specialist_name;
      this.nominal = data.employee_data?.salary;
      this.employee_data = data.employee_data != null;

      // Experience
      this.department = [];
      this.company_name = [];
      this.employment_contract = [];
      this.start_working = [];
      this.end_working = [];
      this.location = [];
      data.data_experience.forEach((element) => {
        this.department.push(element.department);
        this.company_name.push(element.company_name);
        this.employment_contract.push(element.employment_contract);
        this.start_working.push(
          element.start_working
            ? new Date(element.start_working).toISOString().substr(0, 10)
            : ""
        );
        this.end_working.push(
          element.end_working
            ? new Date(element.end_working).toISOString().substr(0, 10)
            : ""
        );
        this.location.push(element.location);
      });

      // Education
      this.institute_name = [];
      this.degree = [];
      this.education_program = [];
      this.start_study = [];
      this.end_study = [];
      this.ipk = [];
      data.data_education.forEach((element) => {
        this.institute_name.push(element.institute_name);
        this.degree.push(element.degree);
        this.education_program.push(element.education_program);
        this.start_study.push(
          element.start_study
            ? new Date(element.start_study).toISOString().substr(0, 10)
            : ""
        );
        this.end_study.push(
          element.end_study
            ? new Date(element.end_study).toISOString().substr(0, 10)
            : ""
        );
        this.ipk.push(element.ipk);
      });

      // Certificates
      this.certificate_name = [];
      this.organizer = [];
      this.scores = [];
      this.certificate_year = [];
      data.data_certificate.forEach((element) => {
        this.certificate_name.push(element.certificate_name);
        this.organizer.push(element.organizer);
        this.scores.push(element.scores);
        this.certificate_year.push(element.certificate_year);
      });
    },

    closeFile() {
      this.fileDialog = false;
      this.fileUrl = null;
    },
  },

  setup() {
    const { talentRegistration, getRegistrationData } = API();
    return { talentRegistration, getRegistrationData };
  },
};
</script>
<style scoped>
.card-register {
  border-radius: 40px;
  background: linear-gradient(90deg, #f1f5fe 0%, #fff 98.82%);
  box-shadow: 5px 0px 5px #b3b9c5, -5px 0px 5px #b3b9c5 !important;
}

.save-container {
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
}

.register-text-input::placeholder {
  font-style: italic;
}

.tempat-tanggal-lahir {
  position: relative;
}

.calendar-input-container {
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
  overflow: hidden;
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

.upload-card {
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0;
}

.upload-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.doc-icon {
  border-radius: 100%;
  background-color: #ae445a;
  color: #fff;
}

/* Vue Multiselect Custom Styling */
.multiselect {
  min-height: 47px !important;
}

.multiselect__tags {
  min-height: 47px !important;
  padding: 8px 40px 0 8px !important;
  border-radius: 10px !important;
  border: 1px solid #ae445a !important;
}

.multiselect__select {
  height: 47px !important;
}

.multiselect__input,
.multiselect__single {
  font-size: 12px !important;
  margin-bottom: 8px !important;
}

.multiselect__placeholder {
  margin-bottom: 8px !important;
  font-style: italic;
  font-size: 12px;
}

.multiselect--active {
  z-index: 1000 !important;
}

/* Register Text Field Custom Styling */
.register-text-field.v-text-field--solo .v-input__control {
  min-height: 47px;
}

.register-text-field.v-text-field--solo .v-input__slot {
  border: 1px solid #ae445a !important;
  border-radius: 10px !important;
}

/* Custom Dialog Styling */
.v-dialog {
  border-radius: 15px;
}

/* Custom Textarea Styling */
textarea.register-text-input {
  min-height: 100px;
  resize: vertical;
}

/* File Input Custom Styling */
.file-input-wrapper {
  position: relative;
  overflow: hidden;
}

.file-input-wrapper input[type="file"] {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}

/* Custom Calendar Icon Positioning */
.v-menu__content {
  border-radius: 10px;
  overflow: hidden;
}

/* Progress Bar Custom Styling */
.v-progress-linear {
  border-radius: 10px !important;
}

/* Scrollbar Custom Styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #ae445a;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #f39f5a;
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-enter-active {
  animation: fadeIn 0.3s;
}

.fade-leave-active {
  animation: fadeIn 0.3s reverse;
}

/* Responsive Design */
@media screen and (max-width: 960px) {
  .card-register {
    border-radius: 20px;
  }

  .register-text-input {
    height: 40px;
  }

  .button-wrapper {
    width: 90px;
    height: 30px;
  }

  .pluscirclefill {
    max-height: 45px;
    max-width: 45px;
  }
}

@media screen and (max-width: 600px) {
  .save-container {
    margin: 20px 15px 15px 15px;
  }

  .group-inner {
    margin-bottom: 30px;
    margin-top: 30px;
  }

  .register-text-input {
    font-size: 11px;
  }

  .multiselect__input,
  .multiselect__single,
  .multiselect__placeholder {
    font-size: 11px !important;
  }
}
</style>
