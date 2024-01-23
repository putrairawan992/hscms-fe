<template>
  <v-app>
    <v-layout>
      <div class="new-hiring-dashboard hcms-container">
        <v-row style="">
          <v-col class="v-navigation-drawer d-none d-lg-flex " cols="3" style="position: relative; max-width: 260px; min-height:1000px;">
            <div class="menu-button-t-dashboard">
              <div class="menu-button-remunerasi">
                <div class="menu-left-child" />
                <div class="menu">
                  <b class="dashboard1" @click="">Dashboard</b>
                  <div class="help-center" @click="">
                    Help Center
                  </div>
                  <div class="menu-child" />
                    <div class="help-center" @click="">Biodata</div>
                    <div class="help-center" @click="">File Attachment</div>
                    <div class="help-center" @click="">Contract</div>
                    <div class="help-center" @click="">Payslip</div>
                  <div class="menu-child" />
                  <div class="help-center" @click="">Pre-test</div>
                  <div class="help-center" @click="">Schedule</div>
                </div>
                <img class="menu-left-item" alt="" src="../assets/svg/rectangle-4106.svg" />
                <img
                  class="scala-new-2-icon"
                  alt=""
                  src="../assets/img/scalanew-2@2x.png"
                  @click=""
                />
              </div>
            </div>
          </v-col>

          <v-col cols="12" sm="12" md="12" lg="9" xl="9" style="position: relative; display: flex; flex-direction: column;">
            <div class="up-button-talent">
              <div class="up-button-wrapper">
                <div class="up-button">
                  <div class="ellipse-parent" @click.stop="drawer = !drawer">
                    <div class="frame-child" />
                    <img
                      class="vuesaxlinearnotification-icon"
                      alt=""
                      src="../assets/svg/vuesaxlinearnotification.svg"
                    />
                  </div>
                  <div class="user-profile">
                    <img class="foto-user-icon" alt="" src="../assets/svg/foto-user.svg" />
                  </div>
                </div>
              </div>
            </div>

            <Nuxt />
          </v-col>
        </v-row>
      </div>
    </v-layout>
    <Snackbar></Snackbar>
    <Loading></Loading>
  </v-app>
</template>

<script>
import Snackbar from '~/components/Snackbar.vue'
import Loading from '~/components/Loading.vue'
import { API } from '@/api/index';
export default {
  name: 'DefaultLayout',
  data () {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      drawer: false,
      title: 'Vuetify.js'
    }
  },
  components: { Snackbar, Loading },
  setup() {
  },
  async mounted() {
  },
}
</script>

<style scoped>
</style>
