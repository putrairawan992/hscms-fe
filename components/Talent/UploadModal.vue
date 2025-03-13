<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal-content">
      <h2 class="modal-title">Pilihan create talent - pop up overlay</h2>

      <button class="manual-button" @click="navigateToCreateTalent">
        <i class="icon-list"></i>
        Daftar Manual
      </button>

      <div class="divider">Atau</div>

      <div class="options-container">
        <div class="upload-option" @click="triggerFileInput">
          <input
            type="file"
            ref="fileInput"
            accept=".xlsx"
            class="hidden"
            @change="handleFileUpload"
          />
          <div class="upload-area">
            <h3>Upload Dokumen</h3>
            <p>*Dokumen dengan format (XLSX)</p>
          </div>
        </div>

        <div class="template-option" @click="handleTemplateDownload">
          <div class="template-content">
            <i class="icon-document"></i>
            <h3>Template Dokumen</h3>
            <p>*Klik di sini untuk mengunduh</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UploadCloudIcon } from "vue-feather-icons";
import { mitraAPI } from "../../api/mitra";
import { useContext } from "@nuxtjs/composition-api";

export default {
  name: "UploadModal",
  components: {
    UploadCloudIcon,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { $notifier } = useContext();
    const { downloadTalentTemplate, uploadTalentTemplate } = mitraAPI();

    return {
      downloadTalentTemplate,
      uploadTalentTemplate,
      $notifier,
    };
  },
  methods: {
    navigateToCreateTalent() {
      this.$router.push("/talents/create-talent");
    },
    async handleTemplateDownload() {
      await this.downloadTalentTemplate().then((result) => {
        const filename =
          "talent_template" + this.$moment().format("YYYYMMDD") + ".xlsx";
        let mimeType = "application/vnd.ms-excel";
        const blob = new Blob([result], { type: mimeType });

        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;

        link.dataset.downloadurl = [mimeType, link.download, link.href].join(
          ":"
        );
        link.draggable = true;
        link.classList.add("dragout");
        link.click();
      });
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    async handleFileUpload(event) {
      const file = event.target.files[0];

      if (!file) return;

      // Validate file type
      if (!file.name.endsWith(".xlsx")) {
        this.$notifier.error("Hanya file XLSX yang diperbolehkan");
        return;
      }

      try {
        await this.uploadTalentTemplate(file);
        this.$emit("upload-success");
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        // Reset file input
        event.target.value = "";
      }
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 800px;
}

.modal-title {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.manual-button {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: linear-gradient(to right, #f39f5a, #ae445a);
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.divider {
  text-align: center;
  color: #666;
  margin: 1.5rem 0;
}

.options-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.upload-option,
.template-option {
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.upload-option {
  border: 2px dashed #e9967a;
}

.template-option {
  background: linear-gradient(to right, #f39f5a, #ae445a);
  color: white;
}

.upload-area,
.template-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hidden {
  display: none;
}

h3 {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

p {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

.template-option p {
  color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 640px) {
  .options-container {
    grid-template-columns: 1fr;
  }

  .modal-content {
    padding: 1.5rem;
  }
}
</style>
