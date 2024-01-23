<template>
  <v-app>
    <Nuxt />
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
