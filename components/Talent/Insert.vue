<template>
  <div>
    <p>
      Silakan terlebih dahulu melengkapi data diri dan berkas lampiran. Pastikan
      isi dengan lengkap dan benar.
    </p>
    <form @submit.prevent="submitForm">
      <!-- Biodata Section -->
      <div class="row mb-3">
        <label for="fullName" class="col-md-3 col-form-label"
          ><b>Nama Lengkap:</b></label
        >
        <div class="col-md-9">
          <input
            type="text"
            v-model="biodata.name"
            class="form-control custom-input"
            placeholder="Masukkan Nama Lengkap"
            autocomplete="off"
          />
        </div>
      </div>
      <!-- Add other biodata fields similarly -->

      <!-- Experience Section -->
      <div class="row mb-3">
        <label for="experience" class="col-md-3 col-form-label"
          ><b>Pengalaman:</b></label
        >
        <div class="col-md-9">
          <div
            v-for="(experience, index) in experiences"
            :key="index"
            class="mb-4"
          >
            <!-- Experience fields -->
            <button
              type="button"
              class="btn btn-danger btn-sm mt-1"
              @click="removeExperience(index)"
              v-if="index > 0"
            >
              <i class="fas fa-trash"></i>
            </button>
          </div>
          <button type="button" class="btn btn-sm" @click="addExperience">
            Add More <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>

      <!-- Education Section -->
      <div class="row mb-3">
        <label for="education" class="col-md-3 col-form-label"
          ><b>Pendidikan:</b></label
        >
        <div class="col-md-9">
          <div
            v-for="(education, index) in educations"
            :key="index"
            class="mb-4"
          >
            <!-- Education fields -->
            <button
              type="button"
              class="btn btn-danger btn-sm mt-1"
              @click="removeEducation(index)"
              v-if="index > 0"
            >
              <i class="fas fa-trash"></i>
            </button>
          </div>
          <button type="button" class="btn btn-sm" @click="addEducation">
            Add More <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>

      <!-- Certificate Section -->
      <div class="row mb-3">
        <label for="certificate" class="col-md-3 col-form-label"
          ><b>Sertifikat:</b></label
        >
        <div class="col-md-9">
          <div
            v-for="(certificate, index) in certificates"
            :key="index"
            class="mb-4"
          >
            <!-- Certificate fields -->
            <button
              type="button"
              class="btn btn-danger btn-sm mt-1"
              @click="removeCertificate(index)"
              v-if="index > 0"
            >
              <i class="fas fa-trash"></i>
            </button>
          </div>
          <button type="button" class="btn btn-sm" @click="addCertificate">
            Add More <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>

      <!-- File Upload Section -->
      <div class="container py-3">
        <h6>Berkas Lampiran:</h6>
        <p>Ukuran maksimal berkas 3MB</p>
        <div class="row gy-4">
          <!-- CV -->
          <div class="col-6 col-md-2">
            <div class="upload-box" @click="selectCV">
              <p class="file-name" v-if="selectedCV">{{ selectedCV }}</p>
              <i class="fas fa-plus fa-2x" v-else></i>
            </div>
            <p class="upload-text">CV</p>
            <input
              type="file"
              ref="cvInput"
              class="d-none"
              @change="(event) => handleFile(event, 'cv')"
            />
          </div>
          <!-- Add other file upload fields similarly -->
        </div>
      </div>

      <!-- Submit Button -->
      <div class="text-end mt-4">
        <button type="submit" class="btn btn-view btn-lg">
          Selanjutnya &nbsp;<i class="fas fa-arrow-alt-circle-right"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const props = defineProps({
  biodatac: Object,
  experiencesc: Array,
  educationsc: Array,
  certificatesc: Array,
  CVFile: Object,
  FotoFile: Object,
  KtpFile: Object,
  KKFile: Object,
  NpwpFile: Object,
  BpjsFile: Object,
  fileOther: Object,
});

const emit = defineEmits(["next-step"]);

//Local Copy Data
const biodata = reactive({ ...props.biodatac });
const experiences = reactive([...props.experiencesc]);
const educations = reactive([...props.educationsc]);
const certificates = reactive([...props.certificatesc]);
// const fileCV = reactive({ ...props.CVFile });

const addExperience = () => {
  experiences.push({
    job_position: "",
    company_name: "",
    type_work: "",
    from: "",
    to: "",
    location: "",
  });
};

const removeExperience = (index) => {
  if (experiences.length > 1) {
    experiences.splice(index, 1);
  }
};

const addEducation = () => {
  educations.push({
    education_name: "",
    level_education: "",
    major_education: "",
    ipk: "",
    from: "",
    to: "",
  });
};

const removeEducation = (index) => {
  if (educations.length > 1) {
    educations.splice(index, 1);
  }
};

const addCertificate = () => {
  certificates.push({ name: "", institution: "", score: "", year: "" });
};

const removeCertificate = (index) => {
  if (certificates.length > 1) {
    certificates.splice(index, 1);
  }
};

//Berkas Lampiran
const cvInput = ref(null);
const pasFotoInput = ref(null);
const ktpInput = ref(null);
const kkInput = ref(null);
const npwpInput = ref(null);
const bpjsInput = ref(null);
const otherInput = ref(null);
const selectCV = () => cvInput.value?.click();
const selectPasFoto = () => pasFotoInput.value?.click();
const selectKTP = () => ktpInput.value?.click();
const selectKK = () => kkInput.value?.click();
const selectNPWP = () => npwpInput.value?.click();
const selectBPJS = () => bpjsInput.value?.click();
const selectOther = () => otherInput.value?.click();

const selectedCV = ref(null);
const selectedCVFile = ref(null);
const selectedFoto = ref(null);
const selectedFotoFile = ref(null);
const selectedKtp = ref(null);
const selectedKtpFile = ref(null);
const selectedKK = ref(null);
const selectedKKFile = ref(null);
const selectedNpwp = ref(null);
const selectedNpwpFile = ref(null);
const selectedBpjs = ref(null);
const selectedBpjsFile = ref(null);
const selectedOther = ref(null);
const selectedOtherFile = ref(null);

const handleFile = (event, jenis) => {
  const file = event.target.files[0];
  const jns = jenis;
  if (file) {
    if (jns === "cv") {
      selectedCV.value = file.name;
      selectedCVFile.value = file;
    }
    if (jns === "foto") {
      selectedFoto.value = file.name;
      selectedFotoFile.value = file;
    }
    if (jns === "ktp") {
      selectedKtp.value = file.name;
      selectedKtpFile.value = file;
    }
    if (jns === "kk") {
      selectedKK.value = file.name;
      selectedKKFile.value = file;
    }
    if (jns === "npwp") {
      selectedNpwp.value = file.name;
      selectedNpwpFile.value = file;
    }
    if (jns === "bpjs") {
      selectedBpjs.value = file.name;
      selectedBpjsFile.value = file;
    }
    if (jns === "other") {
      selectedOther.value = file.name;
      selectedOtherFile.value = file;
    }
  }
};

const goToPreview = () => {
  emit("next-step", {
    biodatac: biodata,
    experiencesc: experiences,
    educationsc: educations,
    certificatesc: certificates,
    CVFile: selectedCVFile,
    FotoFile: selectedFotoFile,
    KtpFile: selectedKtpFile,
    KKFile: selectedKKFile,
    NpwpFile: selectedNpwpFile,
    BpjsFile: selectedBpjsFile,
    fileOther: selectedOtherFile,
  });
};
</script>
<style scoped>
.btn-view {
  background: linear-gradient(to right, #f39f5a, #ae445a);
  color: white;
  border: none;
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
  width: 100px;
  height: 100px;
  margin: auto;
  cursor: pointer;
  color: #dc3545;
}

.upload-box:hover {
  background-color: #f8d7da;
}

.upload-text {
  text-align: center;
  font-size: 14px;
  margin-top: 8px;
}

.file-name {
  font-size: 14px;
  color: #333;
  text-align: center;
  word-break: break-word;
}

.form-group {
  text-align: center;
}

.disclaimer {
  font-size: 12px;
  text-align: center;
  color: #6c757d;
  margin-top: 10px;
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
