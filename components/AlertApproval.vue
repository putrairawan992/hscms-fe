<template>
    <div>
        <v-dialog persistent v-model="show" width="377" height="" id="" style="overflow: hidden !important;">
                <v-card title="Dialog" style="border-radius: 8px !important;">
                    <div class="alert-approval-container">
                        <img class="alert-icon" alt="" src="@/assets/svg/help.svg" />
                        <p class="text-alert-approval">
                            {{ content }}
                        </p>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 10px 90px 30px 70px;">
                        <button class="button-batal-wrapper" @click="closeDialog">
                            <b class="tempat-tanggal-lahir">Batal</b>
                        </button> 
                        <button class="button-wrapper" @click="onApprove">
                            <b class="tempat-tanggal-lahir">Yakin</b>
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
    },
    async mounted() {
        this.dialog = this.show;
    },
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