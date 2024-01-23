<template>
  <v-app style="background: white !important;">
      <div class="my-2 container" style="position: relative;">
          <div class="blokade-parent ma-8 mt-4 pt-1" style="min-height: 785px;">
              <div class="my-8 pt-1">
                  <v-row align="center" class="mt-6">
                    <v-col cols="12" class="text-center">
                        <b class="hasil-tes">{{ error.statusCode === 404 ? pageNotFound : otherError }}</b>
                    </v-col>
                    <v-col cols="12" class="text-center" style="height: 215px;">
                        <b class="nilai">{{error.statusCode}}</b>
                    </v-col>
                    <v-col cols="12" class="text-center">
                        <img class="ma-auto" alt="" src="@/assets/svg/finish-pretest-1.svg" />
                    </v-col>
                    <div class="orange-btn ma-auto" style="width: 101px;">
                        <div class="attach-mpr-parent" @click="refreshPage">
                            <b class="button">Refresh</b>
                        </div>
                    </div>
                </v-row>
              </div>
          </div>
      </div>
  </v-app>
</template>

<script>
export default {
  name: 'default',
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  methods: {
    refreshPage(){
      location.reload(true);
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.hasil-tes {
    color: #404041;
    text-align: center;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.nilai {
    color: #AE445A;
    text-align: center;
    font-family: Nunito;
    font-size: 120px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}
</style>
