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
                                                    class="checkbox-selected-red"
                                                    :checked="true"
                                                    type="checkbox"
                                                />
                                            </div>
                                        </div>
                                        <h3 class="smasmk">SMA/SMK</h3>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    class="checkbox-selected-red"
                                                    :checked="true"
                                                    type="checkbox"
                                                />
                                            </div>
                                        </div>
                                        <h3 class="smasmk">Diploma/Sarjana S1</h3>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    class="checkbox-selected-red"
                                                    :checked="true"
                                                    type="checkbox"
                                                />
                                            </div>
                                        </div>
                                        <h3 class="smasmk">Sarjana S2/S3</h3>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    class="checkbox-selected-red"
                                                    :checked="true"
                                                    type="checkbox"
                                                />
                                            </div>
                                        </div>
                                        <h3 class="smasmk">Sertifikat Keahlian</h3>
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
                                                    class="checkbox-selected-red"
                                                    :checked="true"
                                                    type="checkbox"
                                                />
                                            </div>
                                        </div>
                                        <h3 class="smasmk">0 - 2 tahun</h3>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    class="checkbox-selected-red"
                                                    :checked="true"
                                                    type="checkbox"
                                                />
                                            </div>
                                        </div>
                                        <h3 class="smasmk">3 - 4 tahun</h3>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    class="checkbox-selected-red"
                                                    :checked="true"
                                                    type="checkbox"
                                                />
                                            </div>
                                        </div>
                                        <h3 class="smasmk">5 - 6 tahun</h3>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    class="checkbox-selected-red"
                                                    :checked="true"
                                                    type="checkbox"
                                                />
                                            </div>
                                        </div>
                                        <h3 class="smasmk">Lebih dari 6 tahun</h3>
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
                                                    class="checkbox-selected-red"
                                                    :checked="true"
                                                    type="checkbox"
                                                />
                                            </div>
                                        </div>
                                        <h3 class="smasmk">0 - 65</h3>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    class="checkbox-selected-red"
                                                    :checked="true"
                                                    type="checkbox"
                                                />
                                            </div>
                                        </div>
                                        <h3 class="smasmk">66 - 75</h3>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    class="checkbox-selected-red"
                                                    :checked="true"
                                                    type="checkbox"
                                                />
                                            </div>
                                        </div>
                                        <h3 class="smasmk">76 - 85</h3>
                                    </div>
                                    <div class="bodyblock">
                                        <div class="checkbox-selected">
                                            <div class="frame-title">
                                                <input
                                                    class="checkbox-selected-red"
                                                    :checked="true"
                                                    type="checkbox"
                                                />
                                            </div>
                                        </div>
                                        <h3 class="smasmk">86 - 100</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="button-wrapper">
                        <b class="button2">Generate</b>
                    </button>
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
                                    38 Orang
                                </div>
                            </div>
                            <div cols="3" class="total-kandidat">
                                <div class="">
                                    Total Kandidat Dipilih:
                                </div>
                                <div class="">
                                    5 Orang
                                </div>
                            </div>
                        </div>

                    </v-col>
                    <v-col cols="12">
                        <v-row style="column-gap: 25px;">
                            <v-col v-for="item, key in 4" cols="6" class="component-1">
                                <div class="container-frame">
                                    <div class="line-separator">
                                        <div :class="{'lowongan-1': radios[key], 'lowongan-2': !radios[key]}">
                                            <div class="flex-container">
                                                <input
                                                    class="checkbox-selected-blue"
                                                    v-model="radios[key]"
                                                    type="checkbox"
                                                />
                                                <div class="up-arrow-button">
                                                    <img
                                                        class="frame-grid-icon"
                                                        loading="eager"
                                                        alt=""
                                                        src="@/assets/img/wanita.jpeg"
                                                    />
                                                </div>
                                            </div>
                                            <div class="frame-button-frame-parent">
                                                <div class="frame-button-frame">
                                                <div class="mei-2023">2 Mei 2023 | 09:00 WIB</div>
                                                    <img
                                                        @click="$router.push('/talent-selection/detail')"
                                                        :src="radios[key] ? require('@/assets/svg/eyecirclefill.svg') : require('@/assets/svg/eyecirclefillblack.svg')"
                                                        class="eyecirclefill-icon"
                                                        loading="eager"
                                                        alt="detail"
                                                    />
                                                </div>
                                                <div class="link-job-opening-dropdown-menu">
                                                    <h3 class="annisa-nur-hafiza" @click="radios[key] = true">Annisa Nur Hafiza {{ key }}</h3>
                                                    <div class="frame-user-profile-wrapper">
                                                        <div class="frame-user-profile">
                                                            <div class="diplomasarjana-s11">
                                                                Diploma/Sarjana S1
                                                            </div>
                                                            <div class="mei-2023">Rp. 6,000,000</div>
                                                            <div class="mei-2023">2 tahun</div>
                                                            <div class="mei-2023">Skor: 85</div>
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
                <div class="" @click="">
                    <b class="button mx-4">Continue to “Tahap 2”</b>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
    components: { 
        Multiselect,
    },
    data () { return {
        panel: [],
        radio: false,
        radios: [true, false, true, false],
        pageActive: "index",
    } },
    watch: {
        panel(to, from){
            console.log(to, from);;
        },
        raradiodios(to, from){
            console.log('radio', this.radio);;
        }
    },
    mounted(){
        // this.pageActive = this.$route.name.split('-')[0];
    },
    methods: {
        radioChange(index) {
            console.log('radioChange', index);
            this.radios[index] = true;
            console.log('this.radios', this.radios);
        },
        activatePanel(index) {
            this.panel = this.panel === index - 1 ? [] : index - 1;
        },
        clickDetail() {
            console.log('clickDetail');
            this.$router.push('/talent-selection/detail')
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
    align-items: flex-end;
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
    align-items: flex-end;
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