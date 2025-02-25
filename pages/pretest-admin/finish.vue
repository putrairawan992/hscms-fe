<template>
    <div>
        <v-card class="card-preview-pretest">
            <div class="my-2" style="position: relative;">
                <div class="blokade-parent ma-8 mt-4 pt-1" style="min-height: 785px;">
                    <div class="my-4 pt-1">
                        <v-row align="center">
                            <v-col cols="12" class="text-left" style="display: flex; justify-content: space-between;">
                                <div>
                                    <div class="open-job-dan-draft" style="text-transform: capitalize;">
                                        Pre-test
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                        <div v-if="finish?.score !== null" class="" style="position: relative;">
                            <div class="blokade-parent pt-1">
                                <v-row align="center" class="mt-6">
                                    <v-col cols="12">
                                        <b class="hasil-tes">Hasil {{ finish?.category_name }}</b>
                                    </v-col>
                                    <v-col cols="12" style="height: 175px;">
                                        <b class="nilai">{{ Math.round(finish?.score) }}</b>
                                    </v-col>
                                    <v-col cols="12">
                                        <div class="publish-btn ma-auto" style="width: 101px;">
                                            <div class="attach-mpr-parent" @click="$router.push('/pretest')">
                                                <b class="button">Close</b>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col cols="12">
                                        <img class="ma-auto" alt="" src="@/assets/svg/finish-pretest-1.svg" />
                                    </v-col>
                                    <v-col cols="12">
                                        <p class="desc-1">
                                            Hasil di atas belum menentukan kelulusan saudara/saudari
                                        </p>
                                        <p class="desc-2">
                                            Pengumuman Resmi Seleksi Administrasi akan diinformasikan<br/>
                                            lebih lanjut melalui <span style="color: #AE445A;">situs</span> ini
                                        </p>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                        <div v-else class="" style="position: relative;">
                            <div class="blokade-parent pt-1">
                                <v-row align="center" class="mt-6">
                                    <v-col cols="12">
                                        <p class="desc-1">
                                            Jawaban anda sudah terkirim. Terima kasih sudah mengikuti pre-test. Semoga berhasil!
                                        </p>
                                        <p class="desc-2">
                                            Pengumuman Resmi Seleksi Administrasi akan diinformasikan<br/>
                                            lebih lanjut melalui <span style="color: #AE445A;">situs</span> ini
                                        </p>
                                    </v-col>
                                    <v-col cols="12">
                                        <div class="publish-btn ma-auto" style="width: 101px;">
                                            <div class="attach-mpr-parent" @click="$router.push('/pretest')">
                                                <b class="button">Close</b>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col cols="12">
                                        <img class="ma-auto" alt="" src="@/assets/svg/finish-pretest-2.svg" />
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-card>
    </div>
</template>
<script>

import { mapState } from "vuex";
export default {
    name: "FinishPreTest",
    middleware: "jobSeeker",
    data: () => ({}),
    computed: {
		...mapState('seeker-pretest', ['finish']),
    },
    mounted() {
        if(this.finish == null){
            this.$router.push('/pretest');
        }
    }
};

</script>
<style scoped>
.desc-1 {
    color: #404041;
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.desc-2 {
    color: #404041;
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.attach-mpr-parent {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.card-preview-pretest {
    border-radius: 40px;
    box-shadow: 5px 0px 5px #b3b9c5, -5px 0px 5px #b3b9c5 !important;
}
.blokade-parent {
    font-size: 12px;
}
.card-preview-pretest {
    min-height: 866px;
    border-radius: 40px;
    box-shadow: 5px 0px 5px #b3b9c5, -5px 0px 5px #b3b9c5 !important;
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
.blokade-parent {
    font-size: 12px;
}
.publish-btn-container {
    position: absolute;
    top: 530px;
    right: 0px;
    width: 100%;
    display: flex;
    margin: 30px 30px 20px 30px;
    justify-content: flex-end;
}
.publish-btn {
    cursor: pointer;
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    font-size: 12px;
    color: #fff;
    line-height: 50px;
    margin-left: 20px;
}
.hasil-tes {
    color: #404041;
    text-align: center;
    text-transform: capitalize;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.nilai {
    color: #AE445A;
    text-align: center;
    font-family: Nunito;
    font-size: 120px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}
.anda-sudah-berhasil-container {
    font-size: 20px;
    display: inline-block;
    color: #000;
    text-align: center;
    width: 361px;
}
.blokade-parent {
    font-size: 12px;
}
</style>
