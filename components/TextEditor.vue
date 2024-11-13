<template>
  <client-only placeholder="loading...">
    <div :class="gradient ? gradient : 'regular'">
      <ckeditor-nuxt
        :config="editorConfig"
        :value="value"
        :textLeft="textLeft"
        @input="handleInput"
        :maxLength="10"
      />
    </div>
  </client-only>
</template>

<script>
export default {
  components: {
    "ckeditor-nuxt": () => {
      if (process.client) {
        return import("@blowstack/ckeditor-nuxt");
      }
    },
  },
  props: {
    value: { type: String },
    gradient: { type: String },
    textLeft: { type: Number },
    placeholder: { type: String },
  },
  data: () => ({
    editorConfig: {
      placeholder: "Masukan data",
      removePlugins: ["Title"],
      toolbar: [
        "Bold",
        "Italic",
        "Underline",
        "Alignment",
        "numberedList",
        "bulletedList",
        "link",
      ],
      wordCount: {
        maxCharCount: 2000,
        onUpdate: (stats) => {
          console.log(stats);
          if (stats.characters > 2000) {
            alert(`Maximum word count is 2000 characters.`);
          }
        },
      },
    },
    maxLength: 2000,
    extraPlugins: ["WordCount"],
    contentHolder: "",
  }),
  mounted() {
    this.editorConfig.placeholder = this.placeholder;
  },
  methods: {
    handleInput(content) {
      const strippedContent = this.stripHtml(content);
      const contentLength =
        strippedContent.length <= this.maxLength
          ? this.maxLength - strippedContent.length
          : 0;
      this.$emit("update:textLeft", contentLength);
    },
    stripHtml(html) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      return tempDiv.textContent || tempDiv.innerText || "";
    },
  },
};
</script>
<style>
.ck-file-dialog-button {
  display: none !important;
}
.ck-file-dialog-button {
  display: none !important;
}
.ck.ck-icon,
.ck.ck-icon * {
  color: #fff !important;
}
.ck.ck-button,
a.ck.ck-button::hover {
  background-color: transparent !important;
}
.ck.ck-toolbar {
  padding: 0 !important;
  border: 1px solid #ae445a !important;
  border-bottom: none !important;
  border-top: none !important;
  border-radius: 10px 10px 0px 0px !important;
  background: linear-gradient(90deg, #f39f5a 0.03%, #ae445a 103.73%) !important;
}
.ck.ck-content {
  min-height: 70px;
}

.regular .ck.ck-toolbar {
  background: linear-gradient(90deg, #f39f5a 0.03%, #ae445a 103.73%) !important;
}
.recording .ck.ck-toolbar {
  background: linear-gradient(90deg, #3ab471 0%, #ae445a 80.99%) !important;
}
.gambar .ck.ck-toolbar {
  background: linear-gradient(90deg, #3b78c2 0%, #ae445a 80.99%) !important;
}
.essay .ck.ck-toolbar {
  background: linear-gradient(90deg, #404041 0%, #ae445a 80.99%) !important;
}
.dokumen .ck.ck-toolbar {
  background: linear-gradient(90deg, #8364ba 0%, #ae445a 80.99%) !important;
}
.ck.ck-editor__main > .ck-editor__editable {
  border: 1px solid #ae445a !important;
  border-top: none !important;
}
.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused) {
  border: 1px solid #ae445a !important;
  border-top: none !important;
}
</style>
