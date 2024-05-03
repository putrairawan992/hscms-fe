<template>
    <div>
        <v-row class="" align="start" style=";">
            <v-col cols="6" class="">
                <v-row class="card-ts mb-5">
                    <v-col cols="4" class="pa-0">
                        <img class=" mt-3 mb-1" alt="" src="@/assets/svg/doc-tahap.svg" />
                    </v-col>
                    <v-col cols="8" class="ma-auto pl-0">
                        <v-col cols="12" class="text-left text-tahap pa-0">
                            <b class="">Tahap 1</b>
                        </v-col>
                        <v-col cols="12" class="text-left text-tahap-desc pa-0 mt-1">
                            <div class="">Tahap 1 merupakan proses mendaftarkan informasi kandidat atau karyawan secara perseorangan atau grup, dan juga  proses penambahan pre-test “Wawancara Mandiri” jika diperlukan.</div>
                        </v-col>
                    </v-col>
                </v-row>
                <v-row class="card-ts mb-5">
                    <v-col cols="4" class="pa-0">
                        <img class=" mt-3 mb-1" alt="" src="@/assets/svg/checkmark-buble.svg" />
                    </v-col>
                    <v-col cols="8" class="ma-auto pl-0">
                        <v-col cols="12" class="text-left text-tahap pa-0">
                            <b class="">Tahap 2</b>
                        </v-col>
                        <v-col cols="12" class="text-left text-tahap-desc pa-0 mt-1">
                            <div class="">Tahap 2 merupakan proses verifikasi data kandidat atau karyawan yang sudah didaftarkan di tahap 1.</div>
                        </v-col>
                    </v-col>
                </v-row>
                
            </v-col>
            <v-col cols="6" class="">
                <v-row class="card-ts mb-5">
                    <v-col cols="4" class="pa-0">
                        <img class=" mt-3 mb-1" alt="" src="@/assets/svg/checkmark-buble.svg" />
                    </v-col>
                    <v-col cols="8" class="ma-auto pl-0">
                        <v-col cols="12" class="text-left text-tahap pa-0">
                            <b class="">Tahap 3</b>
                        </v-col>
                        <v-col cols="12" class="text-left text-tahap-desc pa-0 mt-1">
                            <div class="">Tahap 3 merupakan proses penyimpanan data kandidat atau karyawan ke dalam menu Employee Data.</div>
                        </v-col>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>

export default {
    data () { return {
        pageActive: "index"
    } },
    watch: {},
    async mounted(){
    },
    methods: {
    }
}
</script>
<style scoped>
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

</style>