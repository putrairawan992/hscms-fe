// components/shared/FileUpload.vue
<template>
  <div class="file-upload">
    <v-card
      class="upload-area pa-4"
      outlined
      @click="triggerFileInput"
      :class="{ 'has-file': modelValue }"
    >
      <input
        type="file"
        ref="fileInput"
        class="d-none"
        :accept="accept"
        @change="handleFileChange"
      />

      <div class="d-flex flex-column align-center">
        <template v-if="!modelValue">
          <v-icon size="40" color="primary">mdi-cloud-upload</v-icon>
          <div class="mt-2">{{ label || "Click to upload file" }}</div>
          <div class="text-caption grey--text">
            Max size: {{ formatFileSize(maxSize) }}
          </div>
        </template>

        <template v-else>
          <v-icon color="success">mdi-check-circle</v-icon>
          <div class="mt-2">{{ modelValue.name }}</div>
          <v-btn text small color="error" class="mt-2" @click.stop="clearFile">
            Remove
          </v-btn>
        </template>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "FileUpload",
  props: {
    modelValue: {
      default: null,
    },
    label: {
      type: String,
      default: "",
    },
    accept: {
      type: String,
      default: "*",
    },
    maxSize: {
      type: Number,
      default: 3 * 1024 * 1024, // 3MB
    },
  },
  emits: ["update:modelValue", "error"],
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (!file) return;

      if (file.size > this.maxSize) {
        this.$emit("error", "File size exceeds limit");
        return;
      }

      this.$emit("update:modelValue", file);
    },
    clearFile() {
      this.$emit("update:modelValue", null);
      this.$refs.fileInput.value = "";
    },
    formatFileSize(bytes) {
      const sizes = ["Bytes", "KB", "MB", "GB"];
      if (bytes === 0) return "0 Bytes";
      const i = Math.floor(Math.log(bytes) / Math.log(1024));
      return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
    },
  },
};
</script>

<style scoped>
.upload-area {
  cursor: pointer;
  border: 2px dashed #e0e0e0;
  transition: all 0.3s ease;
}

.upload-area:hover {
  border-color: var(--v-primary-base);
}

.upload-area.has-file {
  border-style: solid;
  border-color: var(--v-success-base);
}
</style>
