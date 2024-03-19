<template>
  <v-row class="mt-0">
    <v-col cols="12" xs="12" sm="12" md="6" align="center">
      <img src="@/assets/img/dashboard-jobprovider.png" width="932" height="877.84" alt="dashboard-jobprovider">
    </v-col>
  </v-row>
</template>
<script>

  export default {
    middleware: "jobProvider",
    name: "NewHiringDashboard",
    async mounted(){
        // await this.$auth.loginWith('local', {
        //     data: {
        //         email: 'mocharizktama@gmail.com',
        //         password: 'password'
        //     },
        // }).then( async (result) => {
        //     this.$notifier.showMessage({ content: 'Anda berhasil login.', status: 'success' });
        // }).catch((err) => {
        //     console.log('err', err);
        // });
    },
    methods: {
    },
  };
</script>
<style scoped>
.card-dashboard {
    box-shadow: 5px 0px 5px #b3b9c5, -5px 0px 5px #b3b9c5 !important;
    border-radius: 40px;
    height:430px;
}
</style>
