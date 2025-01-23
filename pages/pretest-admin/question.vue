<template>
  <div>
    <v-card class="card-preview-pretest">
      <div class="my-2" style="position: relative">
        <div class="blokade-parent ma-8 mt-4 pt-1" style="min-height: 785px">
          <div class="my-8 pt-1">
            <v-row align="center">
              <v-col
                cols="12"
                class="text-left"
                style="display: flex; justify-content: space-between"
              >
                <div>
                  <div
                    class="open-job-dan-draft"
                    style="text-transform: capitalize"
                  >
                    {{ question?.title_test }}
                  </div>
                  <i v-if="question?.title_test" class="mt-0">
                    Ikuti sesuai arahan deskripsi
                  </i>
                </div>
                <div
                  v-if="question?.title_test"
                  class="frame-container mt-2"
                  style="width: 101px"
                >
                  <div
                    class="attach-mpr-parent"
                    @click="showAlertApproval = true"
                  >
                    <b class="button">End Test</b>
                  </div>
                </div>
              </v-col>
            </v-row>

            <v-row align="stretch" class="mb-4">
              <v-col cols="12" class="">
                <div class="">
                  <Countdown
                    v-if="question?.paginate"
                    :date="new Date(question?.countdown?.end_time)"
                  />
                  <v-pagination
                    :length="question?.paginate?.length"
                    v-if="question?.paginate"
                    v-model="page"
                    prev-icon="mdi-menu-left"
                    next-icon="mdi-menu-right"
                    class="mt-4"
                    size="2"
                    color="#ae445a"
                    navigation-color="#ae445a"
                  ></v-pagination>

                  <!-- Wawancara mandiri -->
                  <div class="mt-6">
                    <div class="pretest-preview-title text-left">
                      Instruksi soal n
                    </div>
                    <div
                      class="pretest-preview-text text-left"
                      v-html="test"
                    ></div>

                    <div
                      v-for="(value, key) in question?.question"
                      :key="key"
                      class="mb-12"
                    >
                      <ol class="pl-4">
                        <li
                          class="preview-question-text text-left mt-4 mb-4"
                          :value="
                            page == 1 ? key + 1 : 5 * (page - 1) + key + 1
                          "
                          v-html="value.pertanyaan"
                        ></li>
                      </ol>
                      <div class="title-component-text-1 text-left mt-0">
                        Silahkan jawab pertanyaan dengan jawaban yang sesuai,
                        dengan meng-upload file terkait
                      </div>
                      <button
                        class="mt-2 mb-6"
                        :class="
                          value.answer == null
                            ? 'drop-file-big-parent'
                            : 'drop-file-big-parent-filled'
                        "
                        @click="selectFile(value)"
                      >
                        <img
                          v-if="value.answer == null"
                          class="drop-file-icon"
                          alt=""
                          src="@/assets/img/group@2x.png"
                        />
                        <div
                          v-if="value.answer == null"
                          class="drop-file-here-or-click-to-upl-parent"
                        >
                          <b class="drop-file-here">Click to upload</b>
                          <div class="file-supported">
                            {{
                              value.answer
                                ? value.answer
                                : "File supported : AVI, MP4, MOV, WebM, MKV, WMV, FLV, MPEG, 3GP."
                            }}
                          </div>
                        </div>

                        <!-- Filled -->
                        <img
                          v-if="value.answer != null"
                          class="drop-file-icon"
                          alt=""
                          src="@/assets/svg/doc-big.svg"
                        />
                        <div
                          v-if="value.answer != null"
                          class="drop-file-here-filled"
                        >
                          <b class="drop-file-here" style="color: white"
                            >File {{ getFileName(value.answer) }}</b
                          >
                        </div>
                      </button>
                    </div>
                    <input
                      class="d-none"
                      type="file"
                      ref="fileInput"
                      @change="onSelectFile($event)"
                    />
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </v-card>
    <AlertApproval
      content="Apakah Anda yakin ingin mengakhiri tes?"
      :onApprove="endTest"
      :closeDialog="closeAlert"
      :show="showAlertApproval"
    />
  </div>
</template>

<script>
import { API } from "@/api/index";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "JobPost",
  data: () => ({
    page: 1,
    test: "Silakan jawab pertanyaan berikut dengan mengunggah file video.",
    file: null,
    dataQuestion: null,
    showAlertApproval: false,
    question: {
      title_test: "Tes Wawancara Mandiri",
      countdown: {
        end_time: "2025-01-26T23:59:59Z", // Waktu akhir countdown
      },
      paginate: {
        length: 5, // Jumlah halaman
      },
      question: [
        {
          job_post_id: 1,
          pretest_question_id: 101,
          pretest_modul_detail_id: 1001,
          answer: null, // Jawaban awal kosong
          pertanyaan: "Perkenalkan diri anda",
        },
      ],
    },
  }),
  methods: {
    selectFile(question) {
      this.$refs.fileInput.click();
      this.dataQuestion = question;
    },
    onSelectFile(event) {
      let file = event.srcElement.files[0];
      this.submitAnswer(this.dataQuestion, null, file);
    },
    async submitAnswer(data, answer, file_answer) {
      const body = new FormData();
      body.append("job_post_id", data.job_post_id);
      body.append("pretest_question_id", data.pretest_question_id);
      if (answer) {
        body.append("answer", answer);
      }
      if (file_answer) {
        body.append("file_answer", file_answer);
      }

      // Simulasi API call
      console.log("Submitting answer:", body);
      this.question.question.find(
        (q) => q.pretest_question_id === data.pretest_question_id
      ).answer = file_answer.name;
    },
    getFileName(file) {
      let name = file.split("/");
      return name[name.length - 1];
    },
    closeAlert() {
      this.showAlertApproval = false;
    },
    async endTest() {
      console.log("Test ended");
      this.showAlertApproval = false;
      localStorage.setItem("haveDoneTest", true);
      setTimeout(() => {
        window.location.href = "/pretest-admin";
      }, 2000);

      // Redirect or other logic after ending the test
    },
  },
};
</script>

<style scoped>
/* Tambahkan style yang diperlukan di sini */
.card-preview-pretest {
  border-radius: 40px;
  box-shadow: 5px 0px 5px #b3b9c5, -5px 0px 5px #b3b9c5 !important;
}

.drop-file-big-parent {
  border-radius: 10px;
  border: 1px dashed #ae445a;
  box-sizing: border-box;
  width: 100%;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.drop-file-big-parent-filled {
  border-radius: 10px;
  background: linear-gradient(90deg, #3ab471, #3b78c2);
  box-sizing: border-box;
  width: 100%;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.drop-file-icon {
  width: 49px;
  height: 49px;
  object-fit: cover;
}

.drop-file-here {
  font-weight: bold;
}

.file-supported {
  font-size: 12px;
  color: #666;
}
</style>
