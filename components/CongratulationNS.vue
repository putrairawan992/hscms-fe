<template>
    <div class="" style="position: relative;">
        <div class="blokade-parent my-8 pt-1">
            
            <img class="" alt="Congratulation"  src="@/assets/img/non-selection.png" width="573" height="431" />
            <v-row align="center">
                <v-col cols="12" class="text-center congs-text mt-4" style="">
                    Data karyawan telah tersimpan di Employee Data.
                </v-col>
            </v-row>
            <v-row>
                <div class="ma-auto mt-8">
                    <div class="publish-btn">
                        <div class="attach-mpr-parent" @click="clickButton">
                            <b class="button mx-4">Close</b>
                        </div>
                    </div>
                </div>
            </v-row>

        </div>
    </div>
</template>
<script>

export default {
    name: "setPreTest",
    middleware: "jobProvider",
    components: { },
    data: () => ({}),
    watch: {},
    setup() {},
    props: {
        closeDialogCongratulation: { type: Function, default() { return {} } },
    },
    mounted() {
    },
    methods: {
        async clickButton(){
            this.closeDialogCongratulation();
        },
    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.congs-text{
    color: #000000;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
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
.selamat {
    font-size: 36px;
    color: #ae445a;
    text-align: right;
}
.anda-sudah-berhasil-container {
    font-size: 20px;
    display: inline-block;
    color: #000;
    text-align: center;
    width: 361px;
}
.anda-sudah-berhasil {
    margin: 0;
}
.cewe-icon {
    position: absolute;
    top: 85px;
    right: 38px;
    width: 113px;
    height: 376px;
    overflow: hidden;
}
@media only screen and (max-width: 526px) {
    .cewe-icon {
        display: none;
    }
}
.cowo-icon {
    position: absolute;
    top: 95px;
    left: 38px;
    width: 158.98px;
    height: 328.01px;
    overflow: hidden;
}
@media only screen and (max-width: 666px) {
    .cowo-icon {
        display: none;
    }
}
.confetti-icon {
    position: absolute;
    top: -105px;
    left: 0px;
    width: 850px;
    height: 516px;
    overflow: hidden;
}
.blokade-parent {
    font-size: 12px;
}

</style>
