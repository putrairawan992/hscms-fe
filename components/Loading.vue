<template>
    <div>
        <v-dialog 
        persistent v-model="show"
        content-class="elevation-0"
        width="500" id="loading-dialog-oyy"
        >
        <!-- <v-card class="loading-modal-card"> -->
            <div class="text-center">
                <v-progress-circular
                indeterminate
                color="#f68453"
                :size="50"
                :width="7"
                ></v-progress-circular>
            </div>
        <!-- </v-card> -->
        </v-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            show: false,
        }
    },

    created () {
        this.$store.subscribe((mutation, state) => {
            if (mutation.type === 'loading/showLoading') {
                this.show = state.loading.show
            }
        })
    }
}
</script>