<template>
  <form @submit.prevent="simpanData">
    <div class="row mb-3">
      <label for="fullName" class="col-md-3 col-form-label"
        ><b>Nama Lengkap:</b></label
      >
      <div class="col-md-9">
        <input
          type="text"
          v-model="biodatac.name"
          class="form-control custom-input"
          placeholder="Masukkan Nama Lengkap"
          autocomplete="off"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="birthPlace" class="col-md-3 col-form-label"
        ><b>Tempat Tanggal Lahir:</b></label
      >
      <div class="col-md-5">
        <input
          type="text"
          v-model="biodatac.placeBirth"
          class="form-control custom-input"
          placeholder="Masukkan Nama Kota"
        />
      </div>
      <div class="col-md-4">
        <input
          type="date"
          v-model="biodatac.dateBirth"
          class="form-control custom-input"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="email" class="col-md-3 col-form-label"
        ><b>Alamat E-Mail:</b></label
      >
      <div class="col-md-9">
        <input
          type="email"
          v-model="biodatac.email"
          class="form-control custom-input"
          placeholder="Masukkan alamat E-Mail"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="password" class="col-md-3 col-form-label"
        ><b>Password:</b></label
      >
      <div class="col-md-9">
        <input
          type="password"
          v-model="biodatac.password"
          class="form-control custom-input"
          placeholder="Masukkan Password"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="repeatPassword" class="col-md-3 col-form-label"
        ><b>Ulangi Password:</b></label
      >
      <div class="col-md-9">
        <input
          type="password"
          v-model="biodatac.rePassword"
          class="form-control custom-input"
          placeholder="Masukkan Ulang Password"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="linkedin" class="col-md-3 col-form-label"
        ><b>Alamat URL LinkedIn:</b></label
      >
      <div class="col-md-9">
        <input
          type="url"
          v-model="biodatac.linkedin"
          class="form-control custom-input"
          id="linkedin"
          placeholder="Masukkan alamat URL LinkedIn"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="phone" class="col-md-3 col-form-label"
        ><b>Nomor Handphone:</b></label
      >
      <div class="col-md-9">
        <input
          type="text"
          v-model="biodatac.phone"
          class="form-control custom-input"
          id="phone"
          placeholder="Masukkan Nomor Handphone"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="emergencyContact" class="col-md-3 col-form-label"
        ><b>Emergency Contact:</b></label
      >
      <div class="col-md-3">
        <input
          type="text"
          v-model="biodatac.emergencyName"
          class="form-control custom-input"
          id="emergencyContactName"
          placeholder="Nama Emergency Contact"
        />
      </div>
      <div class="col-md-3">
        <input
          type="text"
          v-model="biodatac.emergencyRelation"
          class="form-control custom-input"
          id="emergencyContactRelation"
          placeholder="Hubungan Emergency Contact"
        />
      </div>
      <div class="col-md-3">
        <input
          type="text"
          v-model="biodatac.emergencyNumber"
          class="form-control custom-input"
          id="emergencyContactPhone"
          placeholder="Nomor Emergency Contact"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="gender" class="col-md-3 col-form-label"
        ><b>Jenis Kelamin:</b></label
      >
      <div class="col-md-9">
        <select
          class="form-select custom-select"
          v-model="biodatac.gender"
          id="gender"
        >
          <option selected disabled>Pilih Jenis Kelamin</option>
          <option value="PRIA">Laki-laki</option>
          <option value="WANITA">Perempuan</option>
        </select>
      </div>
    </div>
    <div class="row mb-3">
      <label for="maritalStatus" class="col-md-3 col-form-label"
        ><b>Status Pernikahan:</b></label
      >
      <div class="col-md-9">
        <select
          class="form-select custom-select"
          v-model="biodatac.maritalStatus"
          id="maritalStatus"
        >
          <option selected disabled>Pilih Status Pernikahan</option>
          <option value="SINGLE">Belum Menikah</option>
          <option value="MARRIED">Menikah</option>
          <option value="DIVORCED">Bercerai</option>
        </select>
      </div>
    </div>
    <div class="row mb-3">
      <label for="domicile" class="col-md-3 col-form-label"
        ><b>Alamat Domisili:</b></label
      >
      <div class="col-md-9">
        <input
          type="text"
          v-model="biodatac.domicileAddress"
          class="form-control custom-input"
          id="domicile"
          placeholder="Masukkan Alamat Domisili Saat Ini"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="ktpAddress" class="col-md-3 col-form-label"
        ><b>Alamat Rumah (KTP):</b></label
      >
      <div class="col-md-9">
        <input
          type="text"
          v-model="biodatac.domicileKtp"
          class="form-control custom-input"
          id="ktpAddress"
          placeholder="Masukkan Alamat Rumah Berdasarkan KTP"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="ptkp" class="col-md-3 col-form-label"
        ><b>Status PTKP:</b></label
      >
      <div class="col-md-9">
        <select
          v-model="biodatac.ptkpStatus"
          class="form-control custom-select"
          id="ptkp"
        >
          <option class="form-control" selected disabled value="0">
            Pilih Status PTKP
          </option>
          <option value="ADA">ADA</option>
          <option value="TIDAK">TIDAK</option>
        </select>
      </div>
    </div>
    <div class="row mb-3">
      <label for="nik" class="col-md-3 col-form-label"><b>Nomor NIK:</b></label>
      <div class="col-md-9">
        <input
          type="text"
          v-model="biodatac.nikNumber"
          class="form-control custom-input"
          id="nik"
          placeholder="Masukkan Nomor NIK"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="npwp" class="col-md-3 col-form-label"
        ><b>Nomor NPWP:</b> <small class="text-muted">(*optional)</small></label
      >
      <div class="col-md-9">
        <input
          type="text"
          v-model="biodatac.npwpNumber"
          class="form-control custom-input"
          id="npwp"
          placeholder="Masukkan Nomor NPWP"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="npwp" class="col-md-3 col-form-label"
        ><b>Nomor BPJSKES:</b>
        <small class="text-muted">(*optional)</small></label
      >
      <div class="col-md-9">
        <input
          type="text"
          v-model="biodatac.bpjskesNumber"
          class="form-control custom-input"
          id="bpjskes"
          placeholder="Masukkan Nomor BPJSKES"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="npwp" class="col-md-3 col-form-label"
        ><b>Nomor BPJSTK:</b>
        <small class="text-muted">(*optional)</small></label
      >
      <div class="col-md-9">
        <input
          type="text"
          v-model="biodatac.bpjstkNumber"
          class="form-control custom-input"
          id="bpjstk"
          placeholder="Masukkan Nomor BPJSTK"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="npwp" class="col-md-3 col-form-label"
        ><b>Nama Bank:</b> <small class="text-muted">(*optional)</small></label
      >
      <div class="col-md-9">
        <input
          type="text"
          v-model="biodatac.bankName"
          class="form-control custom-input"
          id="namaBank"
          placeholder="Masukkan Nama Bank"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="npwp" class="col-md-3 col-form-label"
        ><b>No. Rekening Bank:</b>
        <small class="text-muted">(*optional)</small></label
      >
      <div class="col-md-9">
        <input
          type="text"
          v-model="biodatac.accountBankNumber"
          class="form-control custom-input"
          id="no_rekening"
          placeholder="Masukkan Nomor Rekening Bank"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="npwp" class="col-md-3 col-form-label"
        ><b>Nama Rek. Bank:</b>
        <small class="text-muted">(*optional)</small></label
      >
      <div class="col-md-9">
        <input
          type="text"
          v-model="biodatac.accountBankName"
          class="form-control custom-input"
          id="nama_rekening"
          placeholder="Masukkan Nama Pemilik Rekening"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="npwp" class="col-md-3 col-form-label"
        ><b>Spesialisasi Pekerjaan:</b>
        <small class="text-muted">(*optional)</small></label
      >
      <div class="col-md-9">
        <input
          type="text"
          v-model="biodatac.jobSpecialization"
          class="form-control custom-input"
          id="spesialisasi"
          placeholder="Masukkan Spesialisasi Pekerjaan"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="npwp" class="col-md-3 col-form-label"
        ><b>Ekspetasi Gaji:</b>
        <small class="text-muted">(*optional)</small></label
      >
      <div class="col-md-9">
        <input
          type="text"
          v-model="biodatac.salaryExpectation"
          class="form-control custom-input"
          id="gaji"
          placeholder="Masukkan Ekspetasi Gaji"
        />
      </div>
    </div>
    <hr />
    <br />
    <div class="row mb-3">
      <label for="npwp" class="col-md-3 col-form-label"
        ><b>Pengalaman:</b> <br /><small class="text-muted"
          ><i style="color: red"
            >(*Opsional. Dapat dikosongkan jika belum memiliki pengalaman
            pekerjaan Masukkan riwayat pekerjaan mulai dari pekerjaan terakhir
            anda.)</i
          ></small
        ></label
      >
      <div class="col-md-9">
        <div
          v-for="(experience, index) in experiencesc"
          :key="index"
          class="mb-4"
        >
          <div class="row mb-3">
            <div class="col-md-12">
              <div class="form-group">
                <input
                  type="text"
                  v-model="experience.job_position"
                  class="form-control custom-input"
                  :id="'jobdPosition-' + index"
                  placeholder="Masukan Posisi Pekerjaan Sebelumnya"
                />
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <input
                type="text"
                v-model="experience.company_name"
                class="form-control custom-input"
                :id="'companyName-' + index"
                placeholder="Masukan Tingkat Pendidikan"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                v-model="experience.type_work"
                class="form-control custom-input"
                :id="'typeWork-' + index"
                placeholder="Masukan Jurusan"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-6">
                  <label>Dari</label>
                  <input
                    type="date"
                    v-model="experience.from"
                    class="form-control custom-input"
                    :id="'fromE-' + index"
                  />
                </div>
                <div class="col-md-6">
                  <label>Sampai</label>
                  <input
                    type="date"
                    v-model="experience.to"
                    class="form-control custom-input"
                    :id="'fromT-' + index"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <br />
              <input
                type="text"
                v-model="experience.location"
                class="form-control custom-input"
                :id="'location-' + index"
                placeholder="Masukan Lokasi Pekerjaan"
              />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <hr />
    <br />
    <div class="row mb-3">
      <label for="npwp" class="col-md-3 col-form-label"
        ><b>Pendidikan:</b> <br /><small class="text-muted"
          ><i style="color: red"
            >*Masukkan riwayat pendidikan mulai dari pendidikan terakhir
            anda.</i
          ></small
        ></label
      >
      <div class="col-md-9">
        <div
          v-for="(education, index) in educationsc"
          :key="index"
          class="mb-4"
        >
          <div class="row mb-3">
            <div class="col-md-12">
              <div class="form-group">
                <input
                  type="text"
                  v-model="education.education_name"
                  :id="'nameC-' + index"
                  class="form-control custom-input"
                  placeholder="Masukan Nama Tempat Pendidikan"
                />
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <select
                v-model="education.level_education"
                :id="'levelC-' + index"
                class="form-control custom-select"
              >
                <option selected disabled value="0">
                  Pilih tingkat pendidikan
                </option>
                <option value="SMA_SMK">SMA/SMK</option>
                <option value="D1_S1">Diploma/Sarjana S1</option>
                <option value="S2_S3">Sarjana S2/S3</option>
                <option value="KEAHLIAN">Sertifikat Keahlian</option>
              </select>
            </div>
            <div class="col-md-6">
              <input
                type="text"
                v-model="education.major_education"
                :id="'majorC-' + index"
                class="form-control custom-input"
                placeholder="Masukan Jurusan"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-6">
                  <label>Dari</label>
                  <input
                    type="date"
                    class="form-control custom-input"
                    v-model="education.from"
                    :id="'from-' + index"
                  />
                </div>
                <div class="col-md-6">
                  <label>Sampai</label>
                  <input
                    type="date"
                    class="form-control custom-input"
                    v-model="education.to"
                    :id="'to-' + index"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <br />
              <input
                type="text"
                v-model="education.ipk"
                :id="'ipd-' + index"
                class="form-control custom-input"
                placeholder="Masukan IPK"
              />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <hr />
    <br />
    <div class="row mb-3">
      <label for="npwp" class="col-md-3 col-form-label"
        ><b>Sertifikat:</b> <br /><small class="text-muted"
          ><i style="color: red"
            >*Opsional. Dapat dikosongkan jika tidak ada sertifikat. Masukkan
            sertifikat mulai dari sertifikat terakhir anda..</i
          ></small
        ></label
      >
      <div class="col-md-9">
        <div
          v-for="(certificate, index) in certificatesc"
          :key="index"
          class="mb-4"
        >
          <div class="row g-3 mb-3">
            <div class="col-md-12">
              <input
                type="text"
                v-model="certificate.name"
                class="form-control custom-input"
                :id="'certificateName-' + index"
                placeholder="Masukkan Nama Sertifikat (Contoh: Toefl - ITP, IELTS, dll)"
              />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-12">
              <input
                type="text"
                v-model="certificate.institution"
                class="form-control custom-input"
                :id="'institutionName-' + index"
                placeholder="Masukkan Nama Lembaga"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <input
                type="text"
                v-model="certificate.score"
                class="form-control custom-input"
                :id="'certificateScore-' + index"
                placeholder="Masukkan Nilai"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                v-model="certificate.year"
                class="form-control custom-input"
                :id="'completionYear-' + index"
                placeholder="Masukkan Tahun"
              />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <hr />
    <div class="container py-3">
      <h6>Berkas Lampiran:</h6>
      <p>Ukuran maksimal berkas 3MB</p>
      <div class="row gy-4">
        <!-- CV -->
        <div class="col-6 col-md-2">
          <a :href="cvFilePreview" target="_blank">
            <div class="upload-box" :class="cvFilePreview ? 'active' : ''">
              <i class="fas fa-file fa-2x"></i>
            </div>
          </a>
          <p class="upload-text">CV</p>
        </div>

        <!-- Pas Foto 4x6 -->
        <div class="col-6 col-md-2">
          <a :href="fotoFilePreview" target="_blank">
            <div class="upload-box" :class="fotoFilePreview ? 'active' : ''">
              <i class="fas fa-file fa-2x"></i>
            </div>
          </a>
          <p class="upload-text">Pas Foto 4x6</p>
        </div>

        <!-- KTP -->
        <div class="col-6 col-md-2">
          <a :href="ktpFilePreview" target="_blank">
            <div class="upload-box" :class="ktpFilePreview ? 'active' : ''">
              <i class="fas fa-file fa-2x"></i>
            </div>
          </a>
          <p class="upload-text">KTP</p>
        </div>

        <!-- Kartu Keluarga -->
        <div class="col-6 col-md-2">
          <a :href="kkFilePreview" target="_blank">
            <div class="upload-box" :class="kkFilePreview ? 'active' : ''">
              <i class="fas fa-file fa-2x"></i>
            </div>
          </a>
          <p class="upload-text">
            Kartu Keluarga <br /><span class="text-muted">(*optional)</span>
          </p>
        </div>

        <!-- NPWP -->
        <div class="col-6 col-md-2">
          <a :href="npwpFilePreview" target="_blank">
            <div class="upload-box" :class="npwpFilePreview ? 'active' : ''">
              <i class="fas fa-file fa-2x"></i>
            </div>
          </a>
          <p class="upload-text">
            NPWP<br /><span class="text-muted">(*optional)</span>
          </p>
        </div>

        <!-- BPJSKES & TK -->
        <div class="col-6 col-md-2">
          <a :href="BpjsFilePreview" target="_blank">
            <div class="upload-box" :class="BpjsFilePreview ? 'active' : ''">
              <i class="fas fa-file fa-2x"></i>
            </div>
          </a>
          <p class="upload-text">
            BPJSKES & TK <br /><span class="text-muted">(*optional)</span>
          </p>
        </div>
      </div>

      <div class="disclaimer mt-4">
        Disclaimer: Seluruh data milik pengguna tidak akan digunakan untuk
        kepentingan lain selain untuk melamar pekerjaan di website ini.
      </div>

      <h6 class="mt-5">Berkas Tambahan:</h6>
      <div class="col-6 col-md-2">
        <a :href="otherFilePreview" target="_blank">
          <div class="upload-box" :class="otherFilePreview ? 'active' : ''">
            <i class="fas fa-file fa-2x"></i>
          </div>
        </a>
        <p class="upload-text">Upload File</p>
      </div>
    </div>

    <br />
    <div class="text-center">
      <button type="submit" class="btn btn-view btn-lg mb-3">Publish</button
      ><br />
      <button @click="$emit('back')" class="btn btn-kembali btn-lg">
        Kembali
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
// import api from "../../../services/api";

const router = useRouter();

const props = defineProps({
  biodatac: Object,
  experiencesc: {
    type: Array,
    default: () => [],
  },
  educationsc: {
    type: Array,
    default: () => [],
  },
  certificatesc: {
    type: Array,
    default: () => [],
  },
  CVFile: Object,
  FotoFile: Object,
  KtpFile: Object,
  KKFile: Object,
  NpwpFile: Object,
  BpjsFile: Object,
  fileOther: Object,
});

const emit = defineEmits(["back", "save"]);

const cvFilePreview = computed(() =>
  props.CVFile?.value ? URL.createObjectURL(props.CVFile.value) : null
);

const fotoFilePreview = computed(() =>
  props.FotoFile?.value ? URL.createObjectURL(props.FotoFile.value) : null
);

const ktpFilePreview = computed(() =>
  props.KtpFile?.value ? URL.createObjectURL(props.KtpFile.value) : null
);

const kkFilePreview = computed(() =>
  props.KKFile?.value ? URL.createObjectURL(props.KKFile.value) : null
);

const npwpFilePreview = computed(() =>
  props.NpwpFile?.value ? URL.createObjectURL(props.NpwpFile.value) : null
);

const BpjsFilePreview = computed(() =>
  props.BpjsFile?.value ? URL.createObjectURL(props.BpjsFile.value) : null
);

const otherFilePreview = computed(() =>
  props.fileOther?.value ? URL.createObjectURL(props.fileOther.value) : null
);

const request = {
  biodata: JSON.stringify(props.biodatac),
  date: new Date().toISOString(),
  time: new Date().toLocaleTimeString(),
};

const simpanData = async () => {
  if (process.client) {
    // Ambil data yang sudah ada dari localStorage
    const dataTalents = localStorage.getItem("talents");

    // Parse data yang sudah ada dari localStorage
    const existingData = dataTalents ? JSON.parse(dataTalents) : [];

    // Tambahkan data baru ke dalam array
    existingData.push(request);

    // Simpan kembali ke localStorage
    localStorage.setItem("talents", JSON.stringify(existingData));
  }
  emit("save");
};
</script>
<style scoped>
.btn-view {
  background: linear-gradient(to right, #f39f5a, #ae445a);
  color: white;
  border: none;
  width: 300px;
}
.btn-kembali {
  border: 2px solid #ae445a;
  border-radius: 8px;
  width: 300px;
}
.btn-view:hover {
  background: linear-gradient(to right, #e04c50, #e58b32);
}
.upload-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #dc3545;
  border-radius: 8px;
  width: 90px;
  height: 80px;
  margin: auto;
  cursor: pointer;
  color: #dc3545;
}
.upload-box.active {
  border: 2px dashed #0aa055;
  color: #0aa055;
}
.upload-box.active:hover {
  background-color: #d0f6bf;
}
.upload-box:hover {
  background-color: #f8d7da;
}
.upload-text {
  text-align: center;
  font-size: 14px;
  margin-top: 8px;
}

.custom-input {
  border: 1px solid #9d4b4b; /* Warna merah sesuai gambar */
  border-radius: 10px; /* Sudut membulat */
  padding: 10px 15px; /* Padding di dalam input */
  color: #6c757d; /* Warna teks placeholder */
}

.custom-select {
  border: 1px solid #9d4b4b; /* Warna merah */
  border-radius: 10px; /* Sudut membulat */
  padding: 10px 15px;
  font-style: italic; /* Placeholder miring */
  color: #6c757d; /* Warna teks */
  appearance: none; /* Hilangkan default dropdown arrow */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="%239d4b4b"><path d="M7.247 11.14l-4.796-4.796a.5.5 0 0 1 .708-.708l4.342 4.342 4.342-4.342a.5.5 0 0 1 .708.708l-4.796 4.796a.5.5 0 0 1-.708 0z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 16px;
}

/* Fokus input */
.custom-input:focus,
.custom-select {
  outline: none;
  box-shadow: none; /* Hilangkan efek shadow Bootstrap default */
  border-color: #9d4b4b;
}

/* Icon kalender */
.custom-date-wrapper {
  position: relative;
}
.custom-date-wrapper input {
  padding-right: 40px; /* Spasi untuk icon */
}
.custom-date-wrapper i {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: #9d4b4b;
}
</style>
