<template>
    <div class="" style="position: relative;">
        <div class="blokade-parent my-8 pt-1">
            
            <v-row align="center">
                <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9" class="text-left">
                    <div class="open-job-dan-draft">
                        Set Pre-Test
                    </div>
                    <i class="mt-0">Silahkan atur soal yang akan dijadikan Pre-Test bagi calon Karyawan</i>
                </v-col>
                <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" style="display: flex; flex-direction: row-reverse;">
                    <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                        <div class="frame-container">
                            <div class="attach-mpr-parent" @click="createPretest">
                                <b class="button">Create New</b>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>

            <v-row align="center" class="mb-4">
                <v-col v-if="pretests.length > 0">
                    <v-row v-for="(value, key) in pretests" class="">
                        <v-col cols="12" class="label">
                            <v-switch
                                v-model="value.active" value="Active" 
                                @change="changeState(value.pretest_modul_id)"
                                hide-details inset color="#ae445a" label="Aktifkan Rangkaian Soal" class="pretest-switch"
                            ></v-switch>
                        </v-col>
                        <v-col cols="12" class="pt-0 mt-0">
                            <div class="frame-pretest-container">
                                <div class="parent">
                                    <b class="button">{{key+1}}. {{value.modul_name}}</b>
                                </div>
                                <div class="frame-div">
                                    <div class="jun-2023-wrapper">
                                        <div class="button">{{formatDate(value.created_at)}}</div>
                                    </div>
                                </div>
                                <div class="frame-div">
                                    <div class="edit-parent">
                                        <img class="edit-icon" alt="edit" src="@/assets/svg/edit.svg" @click="editPretest(value.pretest_modul_id)"/>
                                        <img class="edit-icon" alt="delete" src="@/assets/svg/trash2.svg" @click="removePretest(value.pretest_modul_id)"/>
                                        <img class="edit-icon" alt="" src="@/assets/svg/eyecirclefill.svg" />
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" class="pt-0">
                            <v-row class="mb-4">
                                <v-col v-for="(value, key) in value.category" cols="auto" class="pb-0">
                                    <div class="subpretest-item">
                                        <b class="">{{value.category_name}}</b>
                                    </div>
                                </v-col>
                            </v-row>
                            <div class="line-after mt-8 mb-2"></div>
                        </v-col>
                    </v-row>
                </v-col>
                <!-- <v-col v-if="module !== null" cols="12" class="pt-0 mt-4">
                    <div class="frame-pretest-container">
                        <div class="parent">
                            <b class="button">Marketing Staff 2023</b>
                        </div>
                        <div class="frame-div">
                            <div class="jun-2023-wrapper">
                                <div class="button">12 Jun 2023</div>
                            </div>
                        </div>
                        <div class="frame-div">
                            <div class="edit-parent">
                                <img class="edit-icon" alt="" src="@/assets/svg/edit.svg" />
                                <img class="edit-icon" alt="" src="@/assets/svg/trash2.svg" />
                                <img class="edit-icon" alt="" src="@/assets/svg/eyecirclefill.svg" />
                            </div>
                        </div>
                    </div>
                </v-col>
                <v-col v-if="module !== null" cols="12" class="pt-0">
                    <v-row>
                        <v-col cols="auto" class="pb-0">
                            <div class="subpretest-item">
                                <b class="">Psikotest: DISC</b>
                            </div>
                        </v-col>
                        <v-col cols="auto" class="pb-0">
                            <div class="subpretest-item">
                                <b class="">Wawancara Mandiri</b>
                            </div>
                        </v-col>
                        <v-col cols="auto" class="pb-0">
                            <div class="subpretest-item">
                                <b class="">Kompetensi: Excel</b>
                            </div>
                        </v-col>
                    </v-row>
                </v-col> -->
                <v-col v-else cols="12" class="mt-8">
                    <i class="mt-0" style="color: rgb(126, 126, 126);">- Belum ada Pre-Test -</i>
                    <div class="line-after mt-8 mb-2"></div>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" style="display: flex; justify-content: space-between;" >
                    <!-- <div class="save-container">
                        <div class="attach-mpr-parent" @click="prev">
                            <b class="button">Back</b>
                        </div>
                    </div> -->
                    <div></div>
                    <div class="save-container">
                        <div class="attach-mpr-parent" @click="next">
                            <b class="button">Next</b>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script>

import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
import TextEditor from "~/components/TextEditor";

export default {
    name: "setPreTest",
    middleware: "jobProvider",
    components: { Multiselect, TextEditor, },
    data: () => ({
        pretests: [],
        module: null,
        id_job_post: null,
    }),
    watch: {},
    setup() {
        const { getPretest, postPretest, deletePretest, postActivatePretest } = API();
        return { getPretest, postPretest, deletePretest, postActivatePretest };
    },
    props: {
        next: { type: Function, default() { return {} } },
        prev: { type: Function, default() { return {} } },
    },
    mounted() {
        const storageIdJobPost = localStorage.getItem('id_job_post');
        if(storageIdJobPost){ this.id_job_post = storageIdJobPost;}
        this.getData();
    },
    methods: {
        async getData(){
            await this.getPretest(this.id_job_post).then((result)=>{
                this.pretests = result.data;
            })
        },
        async createPretest(){
            await this.postPretest({modul_name: ""}).then((result)=>{
                if(result){
                    localStorage.setItem('id_pretest', result.pretest_modul_id);
                    this.$router.push('/job/post/pre-test/module');
                }
            })
        },
        async editPretest(id_pretest){
            localStorage.setItem('id_pretest', id_pretest);
            this.$router.push('/job/post/pre-test/module');
        },
        async removePretest(id_pretest){
            await this.deletePretest(id_pretest).then(()=>{
                this.getData();
            })
        },
        async changeState(pretest_id) {
            await this.postActivatePretest({ pretest_modul_id: pretest_id }, this.id_job_post).then(()=>{
                return this.getData();
            })
        },
        formatDate(date){
            var currentDate = new Date(date);
            var monthNames = [
                'Jan', 'Feb', 'Mar',
                'April', 'Mei', 'Jun', 'Jul'
                ,'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
            ];

            // Get the month index and convert it to a string
            var monthString = monthNames[currentDate.getMonth()];

            // Get the year and day
            var year = currentDate.getFullYear();
            var day = currentDate.getDate().toString().padStart(2, '0');

            // Formatted date string
            var formattedDate = `${day} ${monthString} ${year}`;

            return formattedDate;
        }

    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.line-after {
    position: relative;
    border-top: 1px solid #b6b6b6;
    box-sizing: border-box;
    height: 1px;
}
.subpretest-item {
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 3px solid #ae445a;
    box-sizing: border-box;
    width: 161px;
    height: 31px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
}
.subpretest-item b {
    margin: auto;
}
.edit-parent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
}
.edit-icon {
    position: relative;
    width: 12px;
    height: 12px;
    overflow: hidden;
    flex-shrink: 0;
}
.frame-pretest-container {
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    width: 100%;
    height: 38px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    color: #fff;
}
.parent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
}
.attach-mpr-parent {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.frame-container {
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    width: 135px;
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
}
.save-container {
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    width: 99px;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    font-size: 12px;
    color: #fff;
    line-height: 50px;
}
.card-register {
    min-height: 882px;
    border-radius: 40px;
    box-shadow: 5px 0px 5px #b3b9c5, -5px 0px 5px #b3b9c5 !important;
}
.label {
    font-size: 14px;
    text-align: left;
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

</style>
