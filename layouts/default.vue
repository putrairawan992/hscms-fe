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
                  <v-menu transition="scale-transition" origin="left" rounded="xl" offset-y max-width="350px" max-height="441px">
                    <template v-slot:activator="{ attrs, on }">
                      <div class="user-profile" v-bind="attrs" v-on="on">
                        <img class="foto-user-icon" alt="" src="@/assets/svg/foto-user.svg" />
                      </div>
                    </template>

                    <v-list>
                      <v-list-item>
                        <div style="width: 350px;padding: 15px 5px;">
                          <div class="user-profile pb-4">
                            User Profile
                          </div>
                          <div class="d-flex" style="align-items:center">
                            <img class="foto-user-icon-big" alt="" src="@/assets/svg/foto-user.svg" />
                            <div class="profile-name-container">
                              <div class="profile-name-text">Budi Budiman</div>
                              <div class="profile-text">Admin - Digital Start Up 1</div>
                              <div class="profile-text">budibudiman@gmail.com</div>
                            </div>
                          </div>
                          <hr class="hr-profile mt-5 mb-8"/>
                          <div class="d-flex profile-menu-container" style="align-items:center">
                            <img class="foto-user-icon-small" alt="" src="@/assets/svg/my-profile.svg" />
                            <div class="menu-container">
                              <div class="profile-name-text">My Profile</div>
                              <div class="profile-desc">Account Setting</div>
                            </div>
                          </div>
                          <div class="d-flex profile-menu-container mt-6" style="align-items:center" @click="$router.push('/inbox')">
                            <img class="foto-user-icon-small" alt="" src="@/assets/svg/my-inbox.svg" />
                            <div class="menu-container">
                              <div class="profile-name-text">My Inbox</div>
                              <div class="profile-desc">See All Messages</div>
                            </div>
                          </div>
                          <div class="orange-btn mt-8 mb-2" @click="logOut" style="width: -webkit-fill-available; justify-content: center;">
                              <div class="">
                                  <b class="button mx-3">Logout</b>
                              </div>
                          </div>
                        </div>
                      </v-list-item>
                    </v-list>
                  </v-menu>
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
.user-profile {
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  color: #404041;
}
.foto-user-icon-big {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.profile-name-container {
  height: 67px; 
  display: flex;
  margin-left: 10px;
  flex-direction: column; /* Membuat tata letak menjadi vertikal */
  justify-content: space-between; /* Mengatur ruang di antara item secara vertikal */
}
.profile-name-text {
  font-family: Poppins;
  font-weight: 600;
  font-size: 14px;
  color: #404041;
}
.profile-text {
  font-family: Poppins;
  font-weight: normal;
  font-size: 12px;
  color: #404041;
}
.profile-desc {
  text-decoration: underline;
  font-family: Poppins;
  font-weight: normal;
  font-style: italic;
  font-size: 14px;
  color: #404041;
}
.hr-profile {
  border: 0;
  height: 0.5px; 
  background-color: #C2C2C2 !important;
}
.profile-menu-container {
  padding: 0 10px;
  cursor: pointer;
}
.foto-user-icon-small {
  position: relative;
  width: 50px;
  height: 50px;
}
.menu-container {
  height: 45px; 
  display: flex;
  margin-left: 10px;
  flex-direction: column; /* Membuat tata letak menjadi vertikal */
  justify-content: space-between; /* Mengatur ruang di antara item secara vertikal */
}
</style>
