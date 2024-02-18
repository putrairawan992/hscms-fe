<template>
    <v-card class="card-register">
        <div class="my-2" style="position: relative;">
            <div class="blokade-parent ma-8 pt-1">
                
                <v-row align="center">
                    <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9" class="text-left">
                        <div class="open-job-dan-draft">
                            Modul Rangkaian Tes
                        </div>
                        <i class="mt-0">Silahkan atur soal yang akan dijadikan Pre-Test bagi calon Karyawan</i>
                    </v-col>
                    <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" style="display: flex; flex-direction: row-reverse;">
                        <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                            <div class="frame-container" @click="savePretest">
                                <div class="attach-mpr-parent">
                                    <b class="button">Save</b>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
                
                <v-row align="center">
                    <v-col cols="12" xs="7" md="7" lg="7" xl="7" xxl="7">
                        <input class="module-text-input" placeholder="Ketikkan Nama Modul Rangkaian Tes" v-model="modul_name"/>
                    </v-col>
                    <v-col cols="8" xs="3" md="3" lg="3" xl="3" xxl="3">
                        <multiselect
                            v-model="moduleType"
                            :options="listModule"
                            class="module-text-input"
                            placeholder="Buat Modul Baru" :allow-empty="false"
                        ></multiselect>
                    </v-col>
                    <v-col cols="4" xs="2" md="2" lg="2" xl="2" xxl="2">
                        <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                            <div class="frame-container" style="width: 100%;">
                                <div class="attach-mpr-parent" @click="createModule">
                                    <b class="button">Create</b>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>

                <v-row align="center" class="mb-4" v-for="categories in modules">
                    <v-col cols="12" class="label pb-0">
                        <b>Kategori: {{categories.category_name}}</b>
                    </v-col>
                    <v-col cols="12" class="px-2 pa-0">
                        <v-sheet v-if="categories.modul.length > 0" class="mx-auto bg-0" max-width="100%" elevation="0">
                            <v-slide-group
                                v-model="model" class="" show-arrows
                                selected-class="slider-module my-slider"
                            >
                                <template v-slot:next>
                                    <v-icon class="button-slider" color="white" medium>mdi-chevron-right</v-icon>
                                </template>
                                <template v-slot:prev>
                                    <v-icon class="button-slider" color="white" medium>mdi-chevron-left</v-icon>
                                </template>
                                <v-slide-group-item v-for="(modules, key) in categories.modul">
                                    <v-card
                                        color="grey-lighten-1"
                                        :class="['mx-3', selectedClass]"
                                        width="222" elevation="0" class="bg-0 mb-2"
                                    >
                                        <div class="">
                                            <v-switch
                                                @change="changeState(categories.id, modules.id)"
                                                hide-details inset color="#ae445a" v-model="modules.active" value="Active"
                                                :label="'Pilih ' + modules.title_test" class="module-switch mt-0 pa-2 pl-1" :class="key"
                                            ></v-switch>
                                            <div class="card-module" :class="getGradient(modules.type)">
                                                <div class="edit-module-parent">
                                                    <img class="edit-icon" alt="edit" src="@/assets/svg/edit.svg" />
                                                    <img class="edit-icon" alt="delete" src="@/assets/svg/trash2.svg" @click="delModule(modules.id)"/>
                                                    <!-- <img class="edit-icon" alt="view" src="@/assets/svg/eyecirclefill.svg" /> -->
                                                </div>
                                                <div class="module-icon-parent">
                                                    <img class="module-icon" alt="" :src="getIcon(modules.logo)" />
                                                    <b style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 18ch;line-height: 16px;">{{ modules.title_test }}</b>
                                                </div>
                                            </div>
                                        </div>
                                    </v-card>
                                </v-slide-group-item>
                            </v-slide-group>
                        </v-sheet>
                        <v-col v-else  cols="12" class="mt-8">
                            <i class="mt-0" style="color: rgb(126, 126, 126);">- Belum ada test -</i>
                        </v-col>
                    </v-col>
                </v-row>

            </div>
        </div>
    </v-card>
</template>
<script>

import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
import codeSVG from "@/assets/svg/module-logo/white/code.svg";
import heartSVG from "@/assets/svg/module-logo/white/heart.svg";
import videoSVG from "@/assets/svg/module-logo/white/video.svg";
import phototvSVG from "@/assets/svg/module-logo/white/phototv.svg";
import acircleSVG from "@/assets/svg/module-logo/white/acircle.svg";
import magazineSVG from "@/assets/svg/module-logo/white/magazine.svg";
import brainheadSVG from "@/assets/svg/module-logo/white/brainhead.svg";
import penciltipSVG from "@/assets/svg/module-logo/white/penciltip.svg";
import rectangleSVG from "@/assets/svg/module-logo/white/123rectangle.svg";
import paintbrushpointedSVG from "@/assets/svg/module-logo/white/paintbrushpointed.svg";

export default {
    name: "jobProvider",
    middleware: "jobProvider",
    components: { 
        Multiselect,
    },
    data: () => ({
        toggle: false,
        switchs: [false],
        model: false,
        moduleIcon: videoSVG,
        
        modules: [],
        modul_name: "",
        id_pretest: null,
        moduleType: null,
        id_job_post: null,
        selectedClass: null,
        listModule: [
            'Modul Live Recording',
            'Modul Gambar',
            'Modul Essay',
            'Modul Pilihan Ganda',
            'Modul Upload Document',
        ],
    }),
    watch: {
        modules (val, oldVal) {
            console.log('val', val);
        }
    },
    setup() {
        const { getModules, postModule, deleteModule, postPretest, postActivateModule } = API()
        return { getModules, postModule, deleteModule, postPretest, postActivateModule };
    },
    mounted() {
        const storageIdJobPost = localStorage.getItem('id_job_post');
        const storageIdPretest = localStorage.getItem('id_pretest');
        if(storageIdJobPost){ this.id_job_post = storageIdJobPost;}
        if(storageIdPretest){ this.id_pretest = storageIdPretest;}
        this.getData();
        console.log('this.id_pretest', this.id_pretest);
    },
    methods: {
        async getData(){
            await this.getModules(this.id_pretest).then((result)=>{
                this.modul_name = result.modul_name;
                this.modules = result.detail;
            })
        },
        async createModule(){
            if(!this.moduleType){
                this.$notifier.showMessage({ content: 'Mohon pilih modul terlebih dahulu.', status: 'warning' });
            }else{
                localStorage.setItem('module_type', this.moduleType);
                this.$router.push('/job/post/pre-test/module-form')
            }
        },
        async delModule(id_module){
            await this.deleteModule(id_module).then((result)=>{
                if(result){ this.$notifier.showMessage({ content: 'Success.', status: 'success' }); }
                return this.getData();
            })
        },
        async savePretest(){
            await this.postPretest({modul_name: this.modul_name}, this.id_pretest).then((result)=>{
                if(result){
                    this.$router.push('/job/post')
                }
            })
        },
        async changeState(category_id, module_id) {
            await this.postActivateModule({
                category_id: category_id,
                pretest_modul_detail: module_id
            }, this.id_job_post).then((result)=>{
                return this.getData();
            })
        },
        getGradient(type){
            var gradient = "";
            switch (type) {
                case "Modul Essay":
                    gradient = "essay";
                    break;
                case "Modul Gambar":
                    gradient = "gambar";
                    break;
                case "Modul Pilihan Ganda":
                    gradient = "ganda";
                    break;
                case "Modul Live Recording":
                    gradient = "recording";
                    break;
                case "Modul Upload Document":
                    gradient = "document";
                    break;
                default:
                    gradient = "regular";
                    break;
            }
            return gradient;
        },
        getIcon(type){
            var icon = "";
            switch (type) {
                case "brainhead":
                    icon = brainheadSVG;
                    break;
                case "video":
                    icon = videoSVG;
                    break;
                case "acircle":
                    icon = acircleSVG;
                    break;
                case "paintbrushpointed":
                    icon = paintbrushpointedSVG;
                    break;
                case "code":
                    icon = codeSVG;
                    break;
                case "123rectangle":
                    icon = rectangleSVG;
                    break;
                case "magazine":
                    icon = magazineSVG;
                    break;
                case "penciltip":
                    icon = penciltipSVG;
                    break;
                case "phototv":
                    icon = phototvSVG;
                    break;

                default:
                    icon = heartSVG;
                    break;
            }
            return icon;
        }
    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.my-slider > .v-slide-group__next.theme--light.v-icon
{
    color: rgb(234, 10, 10)!important;

}
</style>
<style scoped>
.module-text-input {
    border-radius: 10px;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 100%;
    height: 33px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    font-size: 12px;
}.module-text-input::placeholder {
    font-style: italic;
}
.card-module {
    border-radius: 10px;
    background: #b3b9c5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 223px;
    height: 142px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    text-align: center;
    font-size: 16px;
    color: #fff;
}
.card-module.recording {
    background: linear-gradient(90deg, #3ab471, #ae445a);
}
.card-module.ganda {
    background: var(--gradient-active, linear-gradient(90deg, #F39F5A 0%, #AE445A 100%));
}
.card-module.document {
    background: linear-gradient(90deg, #8364BA 0%, #AE445A 100%);
}
.card-module.gambar {
    background: linear-gradient(90deg, #3B78C2 0%, #AE445A 100%);
}
.card-module.essay {
    background: linear-gradient(90deg, #404041 0%, #AE445A 100%);
}
.edit-module-parent {
    margin: 0 !important;
    position: absolute;
    top: 11.67px;
    /* left: 150px; untuk 3 icon */ 
    left: 175px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    z-index: 0;
}
.module-icon-parent {
    width: 181px;
    height: 97px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 10px;
    gap: 10px;
    z-index: 1;
}
.module-icon {
    position: relative;
    width: 50px;
    height: 50px;
    overflow: hidden;
    flex-shrink: 0;
}
.line-after {
    position: relative;
    border-top: 1px solid #b6b6b6;
    box-sizing: border-box;
    width: 851px;
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
    cursor: pointer;
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
    cursor: pointer;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.frame-container {
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    width: 119px;
    /* width: 135px; */
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
.card-register {
    min-height: 882px;
    border-radius: 40px;
    background: linear-gradient(90deg, #F1F5FE 0%, #FFF 98.82%);
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
