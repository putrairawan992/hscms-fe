<template>
    <div>
        <v-snackbar :color="status"
            class="mr-4 mb-4 notif-alert success-alert"
            :timeout="2000" right v-model="show" elevation="24"
        >
            {{ message }}
        </v-snackbar>
    </div>
</template>

<script>
export default {
    data () {
        return {
            show: false,
            message: '',
            status: ''
        }
    },

    created () {
        this.$store.subscribe((mutation, state) => {
            if (mutation.type === 'snackbar/showMessage') {
                this.message = state.snackbar.content
                this.status = state.snackbar.status
                this.show = true
            }
        })
    }
}
</script>
<style>
.notif-alert .v-snack__wrapper {
    /* background-color: #f5eeea  !important; */
    border-radius: 15px 15px 0px 15px !important;
}
.notif-alert .v-snack__content {
    font-size: 1rem;
    font-weight: 500;
}
</style>