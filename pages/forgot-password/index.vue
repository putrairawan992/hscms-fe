<template>
  <v-row class="blue-background">
    <v-col lg="4" class="d-none d-lg-flex d-xl-nonescreen" style="padding: 0; background-size: cover;" :style="{ backgroundImage: `url(${image})`}">
    </v-col>
    <v-col cols="12" sm="12" md="12" lg="8" xl="8" class="">
      <v-row class="" style="height:100%;">
        <v-container style="align-self: center; margin: 6rem 3rem 1rem 3rem; ">
          <v-col cols="12">
            <h1 class="home-subtitle">Selamat Datang di Form Pengajuan Kredit</h1>
            <h2 class="home-title" style="margin-top: 0.2rem;">Bank Lestari Bali</h2>
            <v-form class="otp-form" ref="form" v-model="valid">
              <v-flex xs12 md7 class="otp-container">
                <p class="otp-text-1">
                  Silahkan masukan alamat email akun anda.
                </p> 
              </v-flex>
              <v-flex xs12 md7>
                <v-text-field
                  type="email"
                  class="login-input"
                  label="Masukan alamat email anda."
                  @click:append="() => (value = !value)"
                  :rules="[rules.email]"
                  @input="_=>email=_"
                  :value="email"
                ></v-text-field>
              </v-flex>
            </v-form>
              <v-flex xs12 md7 style="margin-top: 2rem;">
                <button class="register-btn btn-masuk" @click="submit">Kirim</button>
                <button class="register-btn btn-kembali" @click="$router.push('login')" style="margin-left: 1rem;">Kembali</button>
              </v-flex>
          </v-col>
        </v-container>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { API } from '@/api/index';
import imageLeft from "../../assets/img/ehe-1@2x.png";

export default {
  auth: 'guest',
  name: 'IndexPage',
  data() {
    return {
      email: "",
      valid: true,
      value: true,
      image: imageLeft,
      rules: {
        email: value => {
          if(value.length > 0) {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || 'Alamat email tidak valid.';
          }
          return true
        },
      }
    };
  },
  setup() {
    const { postForgotPassword } = API();
    return { postForgotPassword }
  },
  async mounted() {
    const storageData = localStorage.getItem('banner');
    this.image = storageData ? JSON.parse(storageData) : imageLeft;
  },
  methods: {
    async submit() {
      if(this.validateForm()){
        await this.postForgotPassword({
          email: this.email

        }).then((result) => {if(result){
          this.$notifier.showMessage({ content: 'Berhasil, mohon cek email anda.', status: 'success' });
          this.$router.push('/login')
        }})
      }
    },
    validateForm(){
      if(this.email == ""){
        this.$notifier.showMessage({ content: 'Email belum terisi.', status: 'warning' })
        return false;
      }
      return true;
    }
  },
}
</script>

