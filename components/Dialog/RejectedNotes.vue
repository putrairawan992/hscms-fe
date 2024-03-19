<template>
    <div>
        <v-dialog persistent v-model="show" width="470" height="" id="" style="overflow: hidden !important;">
                <v-card title="Dialog" style="border-radius: 8px !important;">
                    <div class="rejected-notes-container">
                        <b class="mb-4" style="color:#AE445A; font-size: 16px;">
                            Notes
                        </b>
                        <div class="text-notes" v-html="content"></div>
                    </div>
                    <div style="display: flex; justify-content: center; padding: 40px 90px 30px 90px;">
                        <button class="button-wrapper" @click="closeDialog">
                            <b class="tempat-tanggal-lahir">Close</b>
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
            dialog: false,
        }
    },
    props: {
        content: { type: String, default() { return "" } },
        show: { type: Boolean, default() { return false } },
        closeDialog: { type: Function, default() { return {} } },
    },
    async mounted() {
        this.dialog = this.show;
    },
}
</script>
<style>
.rejected-notes-container {
    display: flex;
    width: 470px;
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
.text-notes {
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