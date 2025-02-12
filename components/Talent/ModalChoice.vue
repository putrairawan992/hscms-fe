<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="hideModal">
    <div class="modal-container">
      <div class="modal-header">
        <h5 class="modal-title">Add Talent</h5>
        <button class="close-button" @click="hideModal">&times;</button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col" align="center">
            <NuxtLink
              :to="{ name: 'talents-create' }"
              class="btn-view"
              @click="hideModal"
            >
              <b><i class="fas fa-table"></i> Daftar Manual</b>
            </NuxtLink>
          </div>
          <div class="col" align="center"><b>Atau</b></div>
        </div>
        <div class="row" align="center">
          <div class="col">
            <div class="upload-section">
              <i class="fas fa-upload"></i>
              <p>Upload Dokumen</p>
              <small>*Dokumen dengan format (CSV)</small>
            </div>
          </div>
          <div class="col">
            <div class="template-section" @click="downloadTemplate">
              <i class="fas fa-file"></i>
              <p>Template Dokumen</p>
              <small>
                <a href="#" class="text-decoration-none text-muted">
                  Klik di sini untuk mengunduh
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" @click="hideModal">Tutup</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const showModal = () => {
  isOpen.value = true;
};

const hideModal = () => {
  isOpen.value = false;
};

const downloadTemplate = () => {
  alert("Downloading template...");
};

defineExpose({ showModal });
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.modal-title {
  color: #b73d58;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
}

.btn-view {
  background: linear-gradient(to right, #f39f5a, #ae445a);
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
}

.btn-secondary {
  background: gray;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.upload-section,
.template-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  border: 2px dashed #d29595;
  border-radius: 8px;
  cursor: pointer;
}

.upload-section:hover,
.template-section:hover {
  background-color: rgba(242, 215, 213, 0.2);
}
</style>
