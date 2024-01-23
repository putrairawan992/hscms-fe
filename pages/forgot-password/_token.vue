<template>
  <v-row class="blue-background">
    <v-col lg="4" class="d-none d-lg-flex d-xl-nonescreen" style="padding: 0; background-size: cover;" :style="{ backgroundImage: `url(${image})`}">
    </v-col>
    <v-col cols="12" sm="12" md="8" lg="8" xl="8" class="">
      <v-row class="" style="height:100%;">
        <v-container style="align-self: center; margin: 6rem 3rem 1rem 3rem; ">
          <v-col cols="12">
            <h1 class="home-subtitle">Selamat Datang di Form Pengajuan Kredit</h1>
            <h2 class="home-title" style="margin-top: 0.2rem;">Bank Lestari Bali</h2>
            <v-form class="otp-form" ref="form" v-model="valid">
              <v-flex xs12 md7 class="otp-container">
                <p class="otp-text-1">
                  Masukkan password baru anda.
                </p> 
                <v-text-field
                  class="login-input"
                  :value="password"
                  label="Masukan password."
                  style="margin-top: 0.5rem;"
                  :append-icon="passwordIcon ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append="() => (passwordIcon = !passwordIcon)"
                  :type="passwordIcon ? 'password' : 'text'"
                  :rules="[rules.password]"
                  @input="_=>password=_"
                ></v-text-field>
                <v-text-field
                  class="login-input"
                  :value="password_repeat"
                  label="Ulangi password."
                  style="margin-top: 0.5rem;"
                  :append-icon="passwordRepeatIcon ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append="() => (passwordRepeatIcon = !passwordRepeatIcon)"
                  :type="passwordRepeatIcon ? 'password' : 'text'"
                  :rules="[rules.password_repeat]"
                  @input="_=>password_repeat=_"
                ></v-text-field>
              </v-flex>
            </v-form>
              <v-flex xs12 md7 style="margin-top: 2rem;">
                <button class="register-btn btn-masuk" @click="submit">Kirim</button>
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
      valid: true,
      value: true,
      passwordIcon: true,
      passwordRepeatIcon: true,
      userId: "",
      userEmail: "",
      password: "",
      password_repeat: "",
      image: imageLeft,
      rules: {
        password: value => {
          if(value.length > 0) {
            const pattern = /^(?=.{8,})/;
            return (
              pattern.test(value) ||
              "Password minimal 8 karakter."
            );
          }else {
            return true;
          }
        },
        password_repeat: value => {
          if(value.length > 0) {
            if(value !== this.password || value.length < 8){
              return "Password minimal 8 karakter dan harus sesuai";
            }else {
              return true;
            }
          }else {
            return true;
          }
        },
      }
    };
  },
  mounted() {
    this.checkToken();
    const storageData = localStorage.getItem('banner');
    this.image = storageData ? JSON.parse(storageData) : imageLeft;
  },
  setup() {
    const { postVerifyToken, postChangePassword } = API();
    return { postVerifyToken, postChangePassword };
  },
  methods: {
    async checkToken(){
      await this.postVerifyToken({token: this.$route.params.token}).then((result)=>{
        if(result == false){ 
          return setTimeout(() => {
            this.$router.push('/')
          }, 5000)
        };
        this.userId = result.data.id;
        this.userEmail = result.data.email;
      });
    },
    async submit() {
      if(this.validateForm()){
        await this.postChangePassword({
          id: this.userId,
          email: this.userEmail,
          password: this.password

        }).then((result) => {if(result){
          this.$notifier.showMessage({ content: 'Berhasil, silahkan login.', status: 'success' });
          this.$router.push('/login')
        }})
      }
    },
    validateForm(){
      if(this.password == ""){
        this.$notifier.showMessage({ content: 'Data password belum terisi.', status: 'warning' })
        return false;
      }
      if(this.password_repeat == ""){
        this.$notifier.showMessage({ content: 'Data ulangi password belum terisi.', status: 'warning' })
        return false;
      }else if(this.password_repeat !== this.password){
        this.$notifier.showMessage({ content: 'Data ulangi password belum sesuai.', status: 'warning' })
        return false;
      }
      return true;
    }
  },
}
</script>

