<template>
    <div>
        <v-dialog persistent v-model="show" center content-class="elevation-0" style="overflow: hidden !important;">
                <v-card title="Dialog" style="border-radius: 30px !important; background-color: transparent !important; box-shadow: none !important;">
                    <div class="file-attachment-container">
                        <img class="file-attachment" alt="" src="https://api-hcms-scala.ominddev.id/public/upload/1715102990139multi_doubledoc.pdf" />
                        <p class="text-alert">
                            dsdsdsdsd
                        </p>
                        <button class="close-icon" @click="show = false">
                            <img alt="close" width="55px" src="@/assets/svg/close.svg" />
                        </button>
                    </div>
                </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            show: true,
            content: "",
        }
    },

    created () {
    }
}
</script>
<style>
.file-attachment-container {
    display: flex;
    width: 668px;
    min-height: 668px;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 30px 20px 20px 20px;
    background-color: #fff;
    margin: auto;
    margin-top: 20px;
    position: relative;
}
.alert-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
}
.close-icon {
    top: -20px;
    right: -20px;
    position: absolute;
}
.text-alert {
    color: #5D5C5D;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    width: 190px;
}
</style>