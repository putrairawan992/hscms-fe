<template>
  <div class="hc-product-login-3" style="background-size:cover" :style="{ backgroundImage: `url(${image})`}">
    <v-row style="height: 100%; margin: 0 !important;">
      <v-col class="left-side" cols="12" sm="12" md="12" lg="6" xl="6">
        <img class="vector-icon1" alt="" src="../assets/svg/vector1.svg" />
        <img class="vector-icon2" alt="" src="../assets/svg/vector2.svg" />

        <i class="welcome-to-scala">Welcome to Scala!</i>
        
        <div class="group">
          <div class="group-child" />
          <div class="componentinput-parent">
            <div class="componentinput">
              <input type="email" v-model="email" class="masukkan-alamat-e-mail-wrapper" placeholder="Masukkan Alamat E-mail"/>
              <input :type="showPassword?'text':'password'" v-model="password" class="masukkan-alamat-e-mail-wrapper" placeholder="Masukkan Password"/>
              <span @click="togglePassword" style="position: absolute; top: 28%; right: 20px; transform: translateY(-50%); cursor: pointer; color: #B6B6B6;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye">
                    <path d="M1 12c2-4 6-8 11-8s9 4 11 8-6 8-11 8-9-4-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>

              </span>
            </div>
            <div class="componentbutton" :style="email != '' && password != '' && 'backgroundColor: #f39f5a'" @click="login">
              <div class="login">LOGIN</div>
            </div>
            <div class="frame-child" />
            <div class="masukkan-alamat-e-mail">
              Belum ada akun? Silahkan
              <span class="daftar-akun" @click="$router.push('/register')">Daftar Akun</span>
            </div>
            <i class="scala-2023-all-container">
              <p class="scala-2023-all">© SCALA. 2023. All Rights Reserved</p>
            </i>
          </div>
          <div class="ellipse-parent">
            <div class="group-item" />
            <img class="scala-new-3-icon" alt="" src="../assets/img/scalanew-3@2x.png" />
          </div>
        </div>

        <img v-if="email != '' && password != ''" class="frame-icon" alt="" src="../assets/svg/frame2.svg" />
        <img v-else class="frame-icon" alt="" src="../assets/svg/frame1.svg" />

        <div class="flying-the-giants-new-white-parent">
          <img
            class="flying-the-giants-new-white"
            alt=""
            src="../assets/img/flying-the-giants-new-white@2x.png"
          />
          <img
            class="logo-metranet-reverse-02-icon"
            alt=""
            src="../assets/img/logometranetreverse02@2x.png"
          />
        </div>
      </v-col>
      <v-col lg="6" class="d-none d-lg-flex d-xl-nonescreen" :style="{ backgroundImage: `url(${banner})`}" style="padding: 0; background-size: cover; z-index: 99;">
        <i class="every-problem-is-container">
          <p class="scala-2023-all">“Every problem is a gift -</p>
          <p class="scala-2023-all">without problems we would not grow.”</p>
        </i>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  import vector from "../assets/svg/vector.svg";
  import banner1 from "../assets/img/ehe-1@2x.png";
  export default{
    name: "login",
    layout: "empty",
    data() {
      return {
        email: "",
        password: "",
        image: vector,
        banner: banner1,
        showPassword: false
      };
    },
    methods: {
      async login(){
        await this.$auth.loginWith('local', {
            data: {
                email: this.email,
                password: this.password,
            },
        }).then( async (result) => {
            this.$router.push('/');
            this.$notifier.showMessage({ content: 'Anda berhasil login.', status: 'success' });
        }).catch((err) => {
            this.$notifier.showMessage({ content: err.response.data.message, status: 'warning' });
        });
    },
    togglePassword(){
      this.showPassword = !this.showPassword;
    }
    }
  }
</script>
<style scoped>
  .left-side {
    position: relative;
  }
  .vector-icon1 {
    position: absolute;
    height: 3.71%;
    width: 10.35%;
    top: 5.18%;
    right: 86.67%;
    bottom: 91.11%;
    left: 4.99%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .vector-icon2 {
    position: absolute;
    height: 14.55%;
    width: 2.64%;
    top: 5.18%;
    right: 5%;
    bottom: 80.27%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  @media only screen and (max-width: 550px) {
    .vector-icon1 {
      height: 4.71%;
      width: 15.35%;
      top: 4.18%;
      right: 86.67%;
      bottom: 91.11%;
      left: 6.99%;
    }
    .vector-icon2 {
      height: 20.55%;
      width: 4.64%;
      top: 5.18%;
      right: 9%;
      bottom: 80.27%;
    }
  }
  .frame-icon {
    height: 150%;
    overflow: hidden;
  }
  .flying-the-giants-new-white {
    position: relative;
    width: 151px;
    height: 100px;
    object-fit: cover;
  }
  .logo-metranet-reverse-02-icon {
    position: relative;
    width: 114px;
    height: 35px;
    object-fit: cover;
  }
  .flying-the-giants-new-white-parent {
    position: absolute;
    top: 22px;
    left: 0px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0px;
  }
  .group-child {
    position: absolute;
    top: calc(50% - 181.5px);
    /* left: 0px; */
    border-radius: 30px;
    background-color: #ae445a;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 3px solid #fff;
    box-sizing: border-box;
    width: 438px;
    height: 427px;
  }
  .masukkan-alamat-e-mail {
    position: relative;
  }
  .masukkan-alamat-e-mail-wrapper {
    align-self: stretch;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 16px;
  }
  .componentinput {
    width: 373px;
    height: 101px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    font-size: 14px;
    color: #b6b6b6;
  }
  .login {
    position: relative;
    line-height: 15.6px;
    font-weight: 600;
  }
  .componentbutton {
    border-radius: 8px;
    background-color: #b6b6b6;
    border: 3px solid #f39f5a;
    box-sizing: border-box;
    width: 379px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 11px 170px;
    text-align: center;
  }
  .frame-child {
    position: relative;
    border-top: 1px solid #fff;
    box-sizing: border-box;
    width: 368px;
    height: 1px;
  }
  .daftar-akun {
    text-decoration: underline;
  }
  .scala-2023-all {
    margin: 0;
  }
  .scala-2023-all-container {
    position: relative;
    font-size: 8px;
    display: inline-block;
    font-weight: 300;
    text-align: center;
    width: 138px;
    height: 14px;
    flex-shrink: 0;
  }
  .componentinput-parent {
    position: absolute;
    top: 133px;
    /* left: 29px; */
    height: 322px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }
  .group-item {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    /* right: 0%; */
    bottom: 0%;
    /* left: 0%; */
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .scala-new-3-icon {
    position: absolute;
    top: 35.43px;
    left: 13.09px;
    width: 87.04px;
    height: 43.91px;
    object-fit: cover;
  }
  .ellipse-parent {
    position: absolute;
    height: 113px;
    width: 118px;
    /* top: 0%;
    right: 36.99%;
    bottom: 76.78%;
    left: 36.99%; */
  }
  .group {
    position: absolute;
    left: 0;
    top: calc(50% - 197px);
    width: 100%;
    height: 491px;
    font-family: Poppins;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 550px) {
  /* .group {
    position: absolute;
    top: calc(50% - 197px);
    left: calc(50% - 215px);
    width: 400px;
    height: 440px;
    font-family: Poppins;
  } */
  }
  .welcome-to-scala {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 20%;
    /* left: 30%; */
    font-size: 30px;
    font-weight: 900;
  }
  .every-problem-is-container {
    position: absolute;
    top: 102px;
    left: 861px;
    width: 50%;
    font-size: 24px;
    font-weight: 900;
    text-align: center;
  }
  .hc-product-login-3 {
    position: relative;
    background-color: #fff;
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    text-align: left;
    font-size: 12px;
    color: #fff;
    font-family: Nunito;
  }
</style>
