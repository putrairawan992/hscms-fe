<template>
    <div>
        <v-row class="mt-3" align="start" style="height: 761px; overflow: hidden;  overflow-x: hidden">
            <v-col style="max-width: 255px;">
                <div class="link-button">
                    <div class="filter">
                        <div class="link-job-opening">
                            <div class="button1">
                                <h1 class="filter1">Filter</h1>
                            </div>
                            <div class="pendidikan">
                                <h1 class="pendidikan1">Pendidikan</h1>
                                <div class="filter-pendidikan">
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    type="checkbox" id="smk-checkbox"
                                                    class="checkbox-selected-red"
                                                    v-model="filters.smk"
                                                />
                                            </div>
                                        </div>
                                        <label for="smk-checkbox" class="smasmk">SMA/SMK</label>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    type="checkbox" id="s2-checkbox"
                                                    class="checkbox-selected-red"
                                                    v-model="filters.s1"
                                                />
                                            </div>
                                        </div>
                                        <label for="s2-checkbox" class="smasmk">Diploma/Sarjana S1</label>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input 
                                                    type="checkbox" id="s3-checkbox"
                                                    class="checkbox-selected-red"
                                                    v-model="filters.s2"
                                                />
                                            </div>
                                        </div>
                                        <label for="s3-checkbox" class="smasmk">Sarjana S2/S3</label>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    type="checkbox" id="sertifikat-checkbox"
                                                    class="checkbox-selected-red"
                                                    v-model="filters.sertifikat"
                                                />
                                            </div>
                                        </div>
                                        <label for="sertifikat-checkbox" class="smasmk">Sertifikat Keahlian</label>
                                    </div>
                                </div>
                            </div>
                            <div class="pendidikan mt-2">
                                <h1 class="pendidikan1">Pengalaman</h1>
                                <div class="filter-pendidikan">
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    type="checkbox" id="nolSampaiDua"
                                                    class="checkbox-selected-red"
                                                    v-model="filters.nolSampaiDua"
                                                />
                                            </div>
                                        </div>
                                        <label for="nolSampaiDua" class="smasmk">0 - 2 tahun</label>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    type="checkbox" id="tigaSampaiEmpat"
                                                    class="checkbox-selected-red"
                                                    v-model="filters.tigaSampaiEmpat"
                                                />
                                            </div>
                                        </div>
                                        <label for="tigaSampaiEmpat" class="smasmk">3 - 4 tahun</label>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    type="checkbox" id="limaSampaiEnam"
                                                    class="checkbox-selected-red"
                                                    v-model="filters.limaSampaiEnam"
                                                />
                                            </div>
                                        </div>
                                        <label for="limaSampaiEnam" class="smasmk">5 - 6 tahun</label>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    type="checkbox" id="lebihDariEnam"
                                                    class="checkbox-selected-red"
                                                    v-model="filters.lebihDariEnam"
                                                />
                                            </div>
                                        </div>
                                        <label for="lebihDariEnam" class="smasmk">Lebih dari 6 tahun</label>
                                    </div>
                                </div>
                            </div>
                            <div class="pendidikan mt-2">
                                <h1 class="pendidikan1">Skor Diperoleh</h1>
                                <div class="filter-pendidikan">
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    type="checkbox" id="scoreEnamLima"
                                                    class="checkbox-selected-red"
                                                    v-model="filters.scoreEnamLima"
                                                />
                                            </div>
                                        </div>
                                        <label for="scoreEnamLima" class="smasmk">0 - 65</label>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    type="checkbox" id="scoreTujuhLima"
                                                    class="checkbox-selected-red"
                                                    v-model="filters.scoreTujuhLima"
                                                />
                                            </div>
                                        </div>
                                        <label for="scoreTujuhLima" class="smasmk">66 - 75</label>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    type="checkbox" id="scoreDelapanLima"
                                                    class="checkbox-selected-red"
                                                    v-model="filters.scoreDelapanLima"
                                                />
                                            </div>
                                        </div>
                                        <label for="scoreDelapanLima" class="smasmk">76 - 85</label>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    type="checkbox" id="scoreSeratus"
                                                    class="checkbox-selected-red"
                                                    v-model="filters.scoreSeratus"
                                                />
                                            </div>
                                        </div>
                                        <label for="scoreSeratus" class="smasmk">86 - 100</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <button class="button-wrapper">
                        <b class="button2">Generate</b>
                    </button> -->
                </div>
            </v-col>
            <v-col>
                <v-row>
                    <v-col cols="12">
                        <div class="mt-0 ml-0" style="display: flex; column-gap: 20px;">
                            <div cols="3" class="total-kandidat">
                                <div class="">
                                    Total Kandidat:
                                </div>
                                <div class="">
                                    {{ dataCandidate?.count ? dataCandidate?.count : 0 }} Orang
                                </div>
                            </div>
                            <div cols="3" class="total-kandidat">
                                <div class="">
                                    Total Kandidat Dipilih:
                                </div>
                                <div class="">
                                    {{ idCandidats.length }} Orang
                                </div>
                            </div>
                        </div>

                    </v-col>
                    <v-col cols="12">
                        <v-row style="column-gap: 25px;">
                            <v-col v-for="value, key in filteredCandidates" cols="6" class="component-1">
                                <div class="container-frame">
                                    <div class="line-separator">
                                        <div :class="isChecked(value.job_seeker_id) ? 'lowongan-1' : 'lowongan-2'">
                                            <div class="flex-container">
                                                <input
                                                    v-model="radios[key]" @change="onChecked($event, value.job_seeker_id)"
                                                    class="checkbox-selected-blue"
                                                    type="checkbox"
                                                />
                                                <div class="up-arrow-button">
                                                    <img
                                                        class="frame-grid-icon"
                                                        :src="value.photo"
                                                        loading="eager"
                                                        alt="photo"
                                                    />
                                                </div>
                                            </div>
                                            <div class="frame-button-frame-parent">
                                                <div class="frame-button-frame">
                                                <div class="mei-2023">{{ value.created_at }}</div>
                                                    <img
                                                        @click="clickDetail(value.job_seeker_id)"
                                                        :src="radios[key] ? require('@/assets/svg/eyecirclefill.svg') : require('@/assets/svg/eyecirclefillblack.svg')"
                                                        class="eyecirclefill-icon"
                                                        loading="eager"
                                                        alt="detail"
                                                    />
                                                </div>
                                                <div class="link-job-opening-dropdown-menu">
                                                    <h3 class="annisa-nur-hafiza">{{ value.name }}</h3>
                                                    <div class="frame-user-profile-wrapper">
                                                        <div class="frame-user-profile">
                                                            <div class="diplomasarjana-s11">
                                                                {{ value.degree }}
                                                            </div>
                                                            <div class="mei-2023">Rp. -</div>
                                                            <div class="mei-2023">0 tahun</div>
                                                            <div class="mei-2023">Skor: {{ value.average_total }}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <div style="position: relative; display: flex; justify-content: end; column-gap: 20px; margin-top: 60px; padding-bottom: 30px;">
            <div class="orange-btn" style="">
                <div class="" @click="">
                    <b class="button mx-4">Unselect All</b>
                </div>
            </div>
            <div class="orange-btn" style="">
                <div class="" @click="continueStep">
                    <b class="button mx-4">Continue to “Tahap 3”</b>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    components: { 
        Multiselect,
    },
    data () { return {
        radio: false,
        dataCandidate: null,
        filters: {
            smk: true,
            s1: true,
            s2: true,
            sertifikat: true,
            nolSampaiDua: true,
            tigaSampaiEmpat: true,
            limaSampaiEnam: true,
            lebihDariEnam: true,
            scoreEnamLima: true,
            scoreTujuhLima: true,
            scoreDelapanLima: true,
            scoreSeratus: true,
        },

        panel: [],
        radios: [],
        idCandidats:[],
        pageActive: "index",
    } },
    watch: {
        panel(to, from){
            console.log(to, from);
        },
        raradiodios(to, from){
        },
        tahapanGetter(to, from){
            this.refreshData();
        }
    },
    setup() {
        const { getListCandidateAPI, postChooseCandidate } = API()
        return { getListCandidateAPI, postChooseCandidate };
    },
    computed: {
		...mapState('provider-selection', ['listCandidate']),
        ...mapGetters('provider-selection', ['tahapanGetter']),

        filteredCandidates() {
            return this.dataCandidate?.candidate_list.filter(candidate => {
                let passDegreeFilter = true;
                let passExpFilter = true;
                let passExpScore = true;

                if ((this.filters.smk && candidate.education[0].degree == "SMA/SMK") ||

                    (this.filters.s1 && candidate.education[0].degree == "S1") ||
                    (this.filters.s1 && candidate.education[0].degree == "D3") ||
                    (this.filters.s1 && candidate.education[0].degree == "D4") ||

                    (this.filters.s2 && candidate.education[0].degree == "S2") ||
                    (this.filters.s2 && candidate.education[0].degree == "S3") ||

                    (this.filters.sertifikat && candidate.education[0].degree == "Sertifikat Profesional")) {
                    passDegreeFilter = true;
                } else {
                    passDegreeFilter = false;
                }

                if ((this.filters.nolSampaiDua && candidate.experience <= 2) ||
                    (this.filters.tigaSampaiEmpat && candidate.experience >= 3 && candidate.experience <= 4) ||
                    (this.filters.limaSampaiEnam && candidate.experience >= 5 && candidate.experience <= 6) ||
                    (this.filters.lebihDariEnam && candidate.experience > 6)) {
                    passExpFilter = true;
                } else {
                    passExpFilter = false;
                }

                if ((this.filters.scoreEnamLima && candidate.average_total <= 65) ||
                    (this.filters.scoreTujuhLima && candidate.average_total >= 66 && candidate.average_total <= 75) ||
                    (this.filters.scoreDelapanLima && candidate.average_total >= 76 && candidate.average_total <= 85) ||
                    (this.filters.scoreSeratus && candidate.average_total > 86)) {
                    passExpScore = true;
                } else {
                    passExpScore = false;
                }

                return passDegreeFilter && passExpFilter && passExpScore;
            });
        }
    },
    props: { 
        next: { type: Function, default() { return {} } },
    },
   async mounted(){
        await this.getListCandidate();
        this.dataCandidate = this.listCandidate;
    },
    methods: {
		...mapActions('provider-selection', ['getListCandidate']),
        ...mapMutations('provider-selection', ['setListCandidate', 'setTahapan']),

        async refreshData() {
            await this.getListCandidateAPI({
                selection_path: "selection",
                status_step: this.tahapanGetter.tahap,
                job_post_id: this.tahapanGetter.jobSelected?.id
            }).then((result)=>{
                if(result){
                    this.setListCandidate(result.data)
                    this.dataCandidate = result.data;
                }
            })
        },
        async continueStep() {
            if(this.idCandidats.length){
                await this.postChooseCandidate({
                    status_step: 'tahap 3',
                    job_seeker_id: this.idCandidats,
                    job_post_id: this.tahapanGetter.jobSelected?.id
    
                }).then((result)=>{
                    if(result){
                        this.setTahapan({ tahap: 'Tahap 3', ...this.tahapanGetter });
                        return this.next('Tahap 3');
                    }
                })
            }else{
                this.$notifier.showMessage({ content: 'Mohon pilih kandidat terlebih dahulu.', status: 'warning' });
            }
        },
        async clickDetail(job_seeker_id) {
            await this.setTahapan({
                ...this.tahapanGetter,
                detail: {
                    job_seeker_id: job_seeker_id,
                }
            });
            return this.$router.push("/talent-selection/detail")
        },
        onChecked(value, job_seeker_id) {
            if (!this.idCandidats.includes(job_seeker_id)) {
                this.idCandidats.push(job_seeker_id);
            } else {
                let index = this.idCandidats.indexOf(job_seeker_id);
                this.idCandidats.splice(index, 1);
            }
        },
        isChecked(job_seeker_id) {
            if (!this.idCandidats.includes(job_seeker_id)) {
                return false;
            } else {
                return true;
            }
        },
    }
}
</script>
<style>
.mei-2023 {
    font-family: Poppins;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.table-btn {
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
    width: fit-content;
    margin: auto;
}
.panel-table {
    width: 100%;
    /* background-color: yellow; */
}
.panel-table-item td {
    padding-top: 10px;
}
.panel-table tr th{
    color: #AE445A;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.list-item-name {
    color: #AE445A;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.total-kandidat {
    display: flex;
    width: -webkit-fit-content;
    height: 33px;
    padding: 17px 10px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #AE445A;
    background: #FFF;
    box-shadow: 5px 0px 5px 0px #B3B9C5;
    color: #AE445A;
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.text-tahap {
    color: #FFF;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.text-tahap-desc {
    color: #FFF;
    text-align: justify;
    font-family: Poppins;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.generate-btn {
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
.card-ts {
    height: 111px;
    color: #fff;
    margin: unset;
    position: relative;
    border-radius: 10px;
    background: linear-gradient(90deg, #F39F5A 0%, #AE445A 100%);
}
.card-ts.terminate {
    background: linear-gradient(90deg, #718199 0%, #B6B6B6 100%) !important;
}
.card-ts.terminate .schedule-container {
    border-radius: 20px;
    background-color: #718199;
    height: 17px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    font-size: 10px;
    color: #fff;
}

.edit-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;
}
.foto-tahap1-icon {
    width: 50px;
    height: 50px;
    padding: 2px;
    border-radius: 50%;
    border: 3px solid #ae445a;
}
.history-1 {
    width: 100%;
    height: 71px;
}
.frame-parent-ts {
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 100%;
    height: 71px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
}
.foto-tahap1-parent {
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
}

.dash-container {
    max-width: 20px;
    display: flex;
    align-items: center;
}
.dash {
    font-weight: 900;
    color: #ae445a;
    text-align: center;
}
.value9 {
    width: 268px;
    height: 75px;
}
.date2 {
    border-radius: 4px;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 120px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 4px 10px;
    gap: 10px;
    font-size: 12px;
}
.input-checkbox-container{
    display: flex;
    column-gap: 20px;
    flex-direction: row;
}
.checkbox-label {
    font-size: 12px;
    font-weight: 400;
    line-height: 0px;
    margin-left: -5px;
}
.attach-mpr-parent {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
.gear-icon {
    width: 25px;
    height: 29px;
    overflow: hidden;
    flex-shrink: 0;
    margin-left: 5px;
}
.isilah-13-kolom-container {
    font-size: 18px;
    color: #ae445a;
    text-align: left;
    line-height: 15px;
}
.job-post-nav {
    width: 100%;
    display: flex;
    flex-direction: row;
}
.job-post-nav-text {
    width: 100%;
    text-align: center;
}
.job-post-nav-container {
    width: 100%;
    height: 74px;
    font-size: 20px;
    font-weight: 900;
    color: #ae445a;
    display: flex;
    align-items: center;
    font-family: Nunito;
    background-color: #ffffff;
    border-radius: 30px 30px 0px 0px;
}
.job-post-nav-container.active {
    color: #ffffff;
    background-color: #ae445a;
}
.card-register {
    border-radius: 40px;
    background: linear-gradient(90deg, #F1F5FE 0%, #FFF 98.82%);
    box-shadow: 5px 0px 5px #b3b9c5, -5px 0px 5px #b3b9c5 !important;
}

.link-button {
    width: 100%;
    height: 741px;
    display: flex;
    border-radius: 10px;
    font-size: 18px;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    background: linear-gradient(90deg, #F1F5FE 0%, #FFF 98.82%);
    filter: drop-shadow(5px 0px 5px #B3B9C5) drop-shadow(-5px 0px 5px #B3B9C5);
  }
  .filter {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 7px 25px 25px 23px;
  }
  .wrapper-rectangle-4154 {
    width: 100%;
    position: absolute;
    margin: 0 !important;
    height: 100%;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
  }
  .wrapper-rectangle-4154-child {
    width: 100%;
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
    position: absolute;
    left: 0px;
    top: 0px;
    transform: scale(1.088);
  }
  .checkbox-selected7 {
    accent-color: #f4f7fe;
    margin: 0;
    width: 14px;
    height: 14px;
    position: relative;
  }
  .checkbox-selected-frame {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 7px;
  }
  .checkbox-selected6 {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 3px 0px;
  }
  .sertifikat-keahlian {
    margin: 0;
    position: relative;
    font-size: inherit;
    line-height: 140.63%;
    font-weight: 400;
    font-family: inherit;
  }
  .bodyblock3 {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 27px 7px 16px;
  }
  .filter-pendidikan {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
    font-size: 12px;
    color: #ae445a;
  }
  .pendidikan {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 14px;
    z-index: 1;
  }
  .link-job-opening {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
  }
  .filter1 {
    margin: 0;
    height: 27px;
    font-size: 18px;
    color: #404041;
    font-weight: 700;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    display: inline-block;
    line-height: normal;
    font-family: Poppins;
  }
  .pendidikan1 {
    margin: 0;
    height: 27px;
    font-size: 18px;
    font-weight: 400;
    color: #404041;
    font-family: Poppins;
    font-family: inherit;
    display: inline-block;
  }
  .filter-pendidikan {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
    font-size: 12px;
    color: #ae445a;
    margin-top: -7px;
  }
  
  .frame-title {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 7px;
  }
  .checkbox-selected {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 3px 0px;
  }
  .checkbox-selected-red {
    margin: 0;
    width: 14px;
    height: 14px;
    position: relative;
    color: #AE445A;
    accent-color: #AE445A;
  }
  .checkbox-selected-blue {
    margin: 0;
    width: 15px;
    height: 15px;
    position: relative;
    color: #3B78C2;
    accent-color: #3B78C2;
  }
  .smasmk {
    margin: 0;
    line-height: 150%;
    font-weight: 400;
    position: relative;
    font-size: inherit;
    font-family: inherit;
  }
  .bodyblock {
    display: flex;
    overflow: hidden;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 1px 7px 5px;
  }
  .button2 {
    position: relative;
    font-size: 12px;
    font-family: Poppins;
    color: #fff;
    text-align: left;
  }
  .component-1 {
    max-width: 285px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    /* gap: 14px; */
    z-index: 2;
    text-align: right;
    font-size: 8px;
  }
  .container-frame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px 0px;
    color: #fff;
  }
  .line-separator {
    width: 561px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 43px;
  }
  .lowongan-1 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 12px 17px 7px;
    box-sizing: border-box;
    position: relative;
    min-width: 168px;
    cursor: pointer;
    border: 3px solid #AE445A;
    border-radius: 10px;
    background: linear-gradient(90deg, #F39F5A 0%, #AE445A 100%);
  }
  .lowongan-2 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 12px 17px 7px;
    box-sizing: border-box;
    position: relative;
    min-width: 168px;
    cursor: pointer;
    border: 3px solid #AE445A;
    border-radius: 10px;
    background: #fff;
    color: #404041;
  }
  .flex-container {
    height: 99px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 11px;
  }
  .radiobutton {
    border-color: #3b78c2;
    accent-color: #3b78c2;
    cursor: pointer;
    margin: 0;
    height: 24px;
    width: 24px;
    border-radius: 12px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2px;
    box-sizing: border-box;
    z-index: 1;
  }
  .up-arrow-button {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 9px 0px 0px;
  }
  .frame-grid-icon {
    flex: 1;
    width: 70px;
    height: 90px;
    align-self: stretch;
    position: relative;
    border-radius: 5px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .frame-button-frame-parent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;
  }
  .frame-button-frame {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 13px;
  }
  .mei-20231 {
    position: relative;
    z-index: 1;
  }
  .eyecirclefill-icon1 {
    height: 12px;
    width: 12px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    min-height: 12px;
    z-index: 1;
  }
  .link-job-opening-dropdown-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1px;
    text-align: left;
    font-size: 11px;
  }
  .annisa-nur-hafiza {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 700;
    font-family: inherit;
    z-index: 1;
  }
  .frame-user-profile-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 1;
    font-size: 8px;
  }
  .frame-user-profile-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 1;
    font-size: 8px;
  }
  .frame-user-profile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
</style>