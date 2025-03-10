<template>
  <client-only placeholder="loading...">
    <div :class="gradient ? gradient : 'regular'">
      <!-- <ckeditor-nuxt :config="editorConfig" :value="data?.answer ? data.answer : ''" /> -->
      <ckeditor-nuxt
        :config="editorConfig"
        :value="data?.answer ? data.answer : ''"
        @input="debounceInput"
      />
    </div>
  </client-only>
</template>

<script>
import debounce from "debounce";
import { API } from "@/api/index";
import { mapMutations } from "vuex";
export default {
  components: {
    "ckeditor-nuxt": () => {
      if (process.client) {
        return import("@blowstack/ckeditor-nuxt");
      }
    },
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    value: { type: String },
    gradient: { type: String },
    placeholder: { type: String },
    isPretestAdmin: { type: Boolean, default: false },
    pretestModuleDetailId: { type: String },
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
    },
    contentHolder: "",
    content: "",
  }),
  setup() {
    const { getQuestionAPI, postAnswerAPI } = API();
    return { getQuestionAPI, postAnswerAPI };
  },
  watch: {
    data(to, from) {
      this.content = this.data.answer;
    },
  },
  mounted() {
    this.editorConfig.placeholder = this.placeholder;
    this.content = this.data.answer;
  },
  methods: {
    ...mapMutations("seeker-pretest", ["setQuestion"]),

    debounceInput: debounce(async function (answer) {
      const body = new FormData();
      body.append(
        "pretest_question_id",
        this.data.pretest_question_id || this.data.id
      );
      body.append("job_post_id", this.data.job_post_id);
      body.append("answer", answer);

      const payload = {
        pretest_modul_detail_id: this.pretestModuleDetailId,
        pretest_question_id: this.data.id,
        answer: answer,
      };

      await this.postAnswerAPI(
        this.isPretestAdmin ? payload : body,
        this.data.pretest_modul_detail_id
      ).then((result) => {});
    }, 2000),
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
