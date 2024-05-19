<template>
  <v-row class="mt-0">
    <v-col class="" cols="12" align="center">
      <v-card class="card-dashboard " max-height="190">
        <v-row class="ma-auto">
          <v-col cols="12" xs="12" sm="12" md="5" class="pl-10">
            <div class="" style="display: flex; justify-content: space-between; flex-direction: column; height: -webkit-fill-available; padding: 5px 0px;">
              <div class="data-diri text-left ellipsis" style="">Halo, {{ data?.user_name || 'Provider'}}!</div>
              <div class="text-left" style=" display: flex; align-items: baseline; flex-direction: column;">
                <div class="text-tanggal text-left">
                  {{ tanggal }}
                </div>
                <div class="text-jam text-left">
                  {{ jam }}
                </div>
              </div>
            </div>
          </v-col>
          <v-col class="d-none d-md-flex" cols="12" xs="12" sm="12" md="4" style="display: flex; align-items: center; justify-content: left;">
            <img alt="Job provider" height="129px" width="252px" src="@/assets/img/job-provider.png" />
          </v-col>
          <v-col class="d-none d-md-flex pr-12 pb-6" cols="12" xs="12" sm="12" md="3" style="display: flex; align-items: end; justify-content: end;">
            <div class="" style="">
              <div class="contract-end text-right">
                Contract End This Month : <br> <span>{{ data?.contract_end_this_month || '0' }} People</span>
              </div>
              <div class="contract-end text-right mt-4">
                Contract End Next Month : <br> <span>{{ data?.contract_end_next_month || '0' }} People</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <v-col class="pt-" cols="12" xs="12" sm="12" md="6" align="center">
      <v-row>
        <v-col cols="12">
          <v-card class="card-dashboard" max-height="190">
            <v-row class="ma-auto">
              <v-col cols="8" class="pl-10">
                <div class="" style="display: flex; justify-content: space-between; flex-direction: column; height: -webkit-fill-available; padding: 5px 0px;">
                  <div class="data-diri text-left" style="">Employee Data</div>
                  <div class="text-left" style=" display: flex; align-items: baseline; flex-direction: column;">
                    <div class="text-tanggal text-left" style="font-size: 18px;">
                      Karyawan Aktif
                    </div>
                    <div class="text-jam text-left" style="font-size: 12px;">
                      {{ data?.employee_active || '0' }} Orang
                    </div>
                  </div>
                  <div class="text-left pb-0" style=" display: flex; align-items: baseline; flex-direction: column;">
                    <b class="view-all" @click="$router.push('/employee-data')">View All</b>
                  </div>
                </div>
              </v-col>
              <v-col class="pb-4" cols="4" style="display: flex; align-items: end;">
                <img alt="Job provider" src="@/assets/img/dashboard-employee.png" class="pb-4"/>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="card-dashboard" max-height="190">
            <v-row class="ma-auto">
              <v-col cols="12" class="pl-10">
                <div class="" style="display: flex; justify-content: space-between; flex-direction: column; height: -webkit-fill-available; padding: 5px 0px;">
                  <div class="data-diri text-left" style="">Talent Selection</div>
                  <v-row style="display: flex; align-items: center;">
                    <v-col cols="6" class="pt-">
                        <v-row align="center">
                            <v-col cols="12" class="input-checkbox-container">
                                <multiselect
                                    :options="['1',' 2']"
                                    placeholder="Pilih Job Opening" :allow-empty="false"
                                    class="header-select-input" label="job_title"
                                    >
                                </multiselect>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="5" class="pt-">
                        <v-row align="center">
                            <v-col cols="12" class="input-checkbox-container">
                                <multiselect
                                    :options="['1',' 2']"
                                    placeholder="Pilih Tahapan" :allow-empty="false"
                                    class="header-select-input" label="job_title"
                                    >
                                </multiselect>
                            </v-col>
                        </v-row>
                    </v-col>
                  </v-row>
                  <div class="text-left pb-0" style=" display: flex; align-items: baseline; flex-direction: column;">
                    <b class="view-all" @click="$router.push('/talent-selection')">View</b>
                  </div>
                </div>
              </v-col>
              <!-- <v-col class="pb-4" cols="4" style="display: flex; align-items: end;">
                <img alt="Job provider" src="@/assets/img/dashboard-employee.png" class="pb-4"/>
              </v-col> -->
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="card-dashboard" max-height="190">
            <v-row class="ma-auto">
              <v-col cols="8" class="pl-10">
                <div class="" style="display: flex; justify-content: space-between; flex-direction: column; height: -webkit-fill-available; padding: 5px 0px;">
                  <div class="data-diri text-left" style="">Remuneration</div>
                  <div class="text-left pb-0" style=" display: flex; align-items: baseline; flex-direction: column;">
                    <b class="view-all" @click="$router.push('/remuneration')">View</b>
                  </div>
                </div>
              </v-col>
              <v-col class="pb-4" cols="4" style="display: flex; align-items: end;">
                <img alt="Job provider" src="@/assets/img/dashboard-remuneration.png" class="pb-4"/>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <v-col class="pt-" cols="12" xs="12" sm="12" md="6" align="center">
        <v-card class="card-dashboard" height="616">
          <v-row class="ma-auto">
            <v-col cols="12">
                <div class="px-10 pt-1 pb-2" style="display: flex; justify-content: space-between; align-items:baseline">
                  <div class="data-diri">Job</div>
                  <b class="view-all" @click="$router.push('/job/opening')">View All</b>
                </div>
            </v-col>
            <v-col cols="12" class="px-10 pt-0">
              <div class="orange-btn px-4 text-center" style="width: -webkit-fill-available;" @click="$router.push('/job/post')">
                <b class="button mx-auto">+ New Job Post</b>
              </div>
            </v-col>
            <v-col cols="12" class="px-10 pb-4">
                <div class="text-tanggal text-left" style="font-size: 18px;">
                  Job Opening
                </div>
            </v-col>
            <v-col cols="12" class="px-10 pt-0">
              <div style="height: 400px; overflow-x: hidden; overflow-y: auto;">
                <v-row v-if="data?.job_post">
                  <v-col v-for="item in data.job_post" cols="12">
                    <div class="orange-btn px-4" style="width: -webkit-fill-available; cursor: default;">
                      <b class="button mx-auto">{{ item.job_title }}</b>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-card>
    </v-col>
  </v-row>
</template>
<script>

  import { API } from '@/api/index'
  import Multiselect from 'vue-multiselect'
  export default {
    middleware: "jobProvider",
    name: "Dashboard",
    components: { 
        Multiselect,
    },
  data() {
    return {
      jam: '',
      tanggal: '',
      data: null,
    };
  },
  setup() {
      const { getDashboard } = API();
      return { getDashboard };
  },
  async mounted(){
    this.getData();
    this.updateTime();
    setInterval(this.updateTime, 1000);
        // this.$router.push('/employee-data');
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
      async getData() {
          await this.getDashboard().then((result)=>{
              if(result){
                this.data = result;
                console.log('result', result);
              }
          });
      },
      updateTime() {
        this.tanggal = this.$moment().format('dddd, DD MMMM YYYY');
        this.jam = this.$moment().format('HH : mm : ss');
      }
    },
  };
</script>
<style scoped>
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* max-width: 100%; atau nilai yang lebih spesifik seperti '200px' atau '50%' */
}
.view-all {
  cursor: pointer;
}
.header-select-input {
    border-radius: 10px;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 100%;
    height: 27px !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    font-size: 12px;
    background-color: #fff;
}.header-select-input::placeholder {
    font-style: italic;
}
.input-checkbox-container{
    display: flex;
    column-gap: 20px;
    flex-direction: row;
}
.contract-end{
    color: #404041;
    text-align: right;
    font-family: Poppins;
    font-size: 12px;
    font-weight: bold;
}
.contract-end span{
  color: #3B78C2;
  text-decoration: underline;
}
.text-tanggal{
    color: #404041;
    text-align: center;
    font-family: Poppins;
    font-size: 20px;
    font-weight: bold;
}
.text-jam{
    color: #3B78C2;
    text-align: center;
    font-family: Poppins;
    font-size: 36px;
    font-weight: bold;
}
.card-dashboard {
    box-shadow: 5px 0px 5px #b3b9c5, -5px 0px 5px #b3b9c5 !important;
    border-radius: 40px;
    height:430px;
}
</style>
