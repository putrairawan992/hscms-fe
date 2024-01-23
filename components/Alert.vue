<template>
    <div>
        <v-dialog persistent v-model="show" width="226" height="210" id="" style="overflow: hidden !important;">
                <v-card title="Dialog" style="border-radius: 8px !important;">
                    <div class="alert-container">
                        <img class="alert-icon" alt="" src="@/assets/svg/checklist.svg" />
                        <p class="text-alert">
                            {{ content }}
                        </p>
                    </div>
                </v-card>
                <button class="close-icon" @click="show = false">
                    <img alt="close" src="@/assets/svg/close.svg" />
                </button>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            show: false,
            content: "",
        }
    },

    created () {
        this.$store.subscribe((mutation, state) => {
            if (mutation.type === 'alert/showAlert') {
                this.show = state.alert.show
                this.content = state.alert.content
            }
        })
    }
}
</script>
<style>
.alert-container {
    display: flex;
    width: 226px;
    height: 210px;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 30px 20px 20px 20px;
}
.alert-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
}
.close-icon {
    top: 374px;
    right: -104px;
    position: absolute;
}
.text-alert {
    color: #5D5C5D;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    width: 146px;
}
</style>