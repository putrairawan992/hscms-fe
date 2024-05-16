<template>
    <div>
        <v-dialog persistent v-model="show" center content-class="elevation-0" style="overflow: hidden !important;">
                <v-card title="Dialog" style="border-radius: 8px !important; background-color: transparent !important; box-shadow: none !important;">
                    <div class="alert-container">
                        <img class="alert-icon" alt="" src="@/assets/svg/checklist.svg" />
                        <p class="text-alert">
                            {{ content }}
                        </p>
                        <button class="close-icon" @click="show = false">
                            <img alt="close" src="@/assets/svg/close.svg" />
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
    min-height: 210px;
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
    top: -10px;
    right: -10px;
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