<template>
    <v-col class="v-navigation-drawer d-none d-lg-flex " cols="3" style="position: relative; max-width: 260px; min-height:1000px;">
        <div class="menu-button-t-dashboard">
            <div class="menu-button-remunerasi">
            <div class="menu-left-child" />
            <div class="menu">
                <div :class="pageActive == 'index' ? 'dashboard1' : 'help-center'" @click="$router.push('/')">Dashboard</div>
                <div :class="pageActive == 'help' ? 'dashboard1' : 'help-center'" @click="$router.push('/help-center')">Help Center</div>
                <div class="menu-child" />
                <div :class="pageActive == 'biodata' ? 'dashboard1' : 'help-center'" @click="$router.push('/biodata')">Biodata</div>
                <div :class="pageActive == 'file' ? 'dashboard1' : 'help-center'" @click="$router.push('/file-attachment')">File Attachment</div>
                <!-- <div :class="pageActive == 'contract' ? 'dashboard1' : 'help-center'" @click="$router.push('/contract')">Contract</div> -->
                <div class="help-center" style="color: #a3a3a3;" @click="">Contract</div>
                <div class="help-center" style="color: #a3a3a3;" @click="">Payslip</div>
                <div class="menu-child" />
                <div :class="pageActive == 'pretest' ? 'dashboard1' : 'help-center'" @click="$router.push('/pretest')">Pre-test</div>
                <div :class="pageActive == 'job' ? 'dashboard1' : 'help-center'" @click="$router.push('/job-vacancy')">Job Vacancy</div>
                <div :class="pageActive == 'schedule' ? 'dashboard1' : 'help-center'" @click="$router.push('/schedule')">Schedule</div>
            </div>
            <img class="menu-left-item" alt="" src="@/assets/svg/rectangle-4106.svg" />
            <img
                class="scala-new-2-icon"
                alt=""
                src="@/assets/img/scalanew-2@2x.png"
                @click=""
            />
            </div>
        </div>
    </v-col>
</template>

<script>
export default {
    data () { return {
        pageActive: "index"
    } },
    watch: {
        $route(to, from){
            this.pageActive = to.name.split('-')[0];
        }
    },
    mounted(){
        this.pageActive = this.$route.name.split('-')[0];
    }
}
</script>