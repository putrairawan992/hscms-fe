<template>
    <div>
        <v-dialog persistent v-model="show" width="477" height="" id="" style="overflow: hidden !important;">
                <v-card title="Dialog" style="border-radius: 8px !important;">
                    <div class="alert-approval-container" style="width: 477px !important;">
                        <img v-if="dataValidation.length > 0" class="alert-icon" alt="" src="@/assets/svg/failed.svg" />
                        <img v-else class="alert-icon" alt="" src="@/assets/svg/checklist.svg" />

                        <p v-if="dataValidation.length == 0"class="text-alert-approval">
                            Success
                        </p>
                        <div v-else>
                            <br>
                            <p class="text-alert-approval" style="width: 430px !important; text-align:left; font-weight:600;">Data yang gagal di upload:</p>
                            <p v-for="value, key in dataValidation" class="text-alert-approval" style="width: 430px !important; text-align:left;">
                                {{ getMessage(value) }}
                            </p>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: center; padding: 10px 0px 30px 0px;">
                        <button class="button-wrapper" @click="onApprove">
                            <b class="tempat-tanggal-lahir">Tutup</b>
                        </button> 
                    </div>
                </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // dialog: false,
        }
    },
    props: {
        show: { type: Boolean, default() { return false } },
        content: { type: String, default() { return "" } },
        onApprove: { type: Function, default() { return {} } },
        closeDialog: { type: Function, default() { return {} } },
        dataValidation: { type: Array, default() { return [] } },
    },
    async mounted() {
        this.dialog = this.show;
    },
    methods: {
        getMessage(data){
            if(data?.email){
                return "Email " + data?.email + " Sudah terdaftar."
            }else if(data?.nik){
                return "Nik " + data?.nik + " Sudah terdaftar."
            }
        }
    }
}
</script>
<style>
.alert-approval-container {
    display: flex;
    width: 377px;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 30px 20px 0px 20px;
}
.alert-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
}
.text-alert-approval {
    color: #5D5C5D;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    width: 257px;
}
.button-wrapper {
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    width: 101px;
    height: 33px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    color: #fff;
    font-family: Poppins;
}
.button-batal-wrapper {
    border-radius: 10px;
    background: #fff;
    border: 2px solid #ae445a;
    box-shadow: 5px 0px 5px #b3b9c5;
    width: 101px;
    height: 33px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    color: #ae445a;
    font-family: Poppins;
}
</style>