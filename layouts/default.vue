<template>
  <v-app>
    <v-layout>
      <Sidebar-Drawer-Seeker v-if="$auth.user.role_user === 'jobseeker'" :drawer="drawer" :closeDrawer="closeDrawer"/>
      <Sidebar-Drawer-Provider v-if="$auth.user.role_user === 'jobprovider'" :drawer="drawer" :closeDrawer="closeDrawer"/>
      
      <div class="new-hiring-dashboard hcms-container">
        <v-row style="">
          <Sidebar-Seeker v-if="$auth.user.role_user === 'jobseeker'"/>
          <Sidebar-Provider v-if="$auth.user.role_user === 'jobprovider'"/>
          <!-- <Sidebar-Provider/> -->

          <v-col cols="12" sm="12" md="12" lg="9" xl="9" style="position: relative; display: flex; flex-direction: column;">
            <div class="up-button-talent">
              <div class="up-button-wrapper">
                <div class="up-button">
                  <div class="ellipse-parent" @click="drawer = !drawer">
                    <div class="frame-child" />
                    <img
                      alt=""
                      class="vuesaxlinearnotification-icon"
                      src="@/assets/svg/vuesaxlinearnotification.svg"
                    />
                  </div>
                  <div class="user-profile" @click="logOut">
                    <img class="foto-user-icon" alt="" src="@/assets/svg/foto-user.svg" />
                  </div>
                </div>
              </div>
            </div>

            <Nuxt />
          </v-col>
        </v-row>
      </div>
    </v-layout>
    <Snackbar/>
    <Loading/>
    <Alert/>
  </v-app>
</template>

<script>
import Alert from '~/components/Alert.vue'
import Loading from '~/components/Loading.vue'
import Snackbar from '~/components/Snackbar.vue'
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
  components: { Snackbar, Loading, Alert },
  mounted() {},
  methods: {
    closeDrawer(){
      this.drawer = false;
    },
    logOut(){
        this.$auth.logout();
        localStorage.clear();
        this.$router.push('/login');
      }
  }
}
</script>

<style scoped>
</style>
