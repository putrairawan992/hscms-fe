<template>
    <v-navigation-drawer v-model="drawer" temporary fixed >
    <v-list nav>
        <div class="menu-button-t-dashboard-drawer">
        <div class="menu-button-remunerasi-drawer">
            <div class="menu-left-child-drawer" />
            <div class="menu-drawer">
                <div :class="pageActive == 'index' ? 'dashboard1-drawer' : 'lp-center-drawer'" @click="$router.push('/')">Dashboard</div>
                <div class="help-center-drawer" style="color: #a3a3a3;" @click="">Help Center</div>
                <div class="menu-child-drawer" />
                <div class="help-center-drawer" style="color: #a3a3a3;" @click="">Biodata</div>
                <div class="help-center-drawer" style="color: #a3a3a3;" @click="">File Attachment</div>
                <div class="help-center-drawer" style="color: #a3a3a3;" @click="">Contract</div>
                <div class="help-center-drawer" style="color: #a3a3a3;" @click="">Payslip</div>
                <div class="menu-child-drawer" />
                <div :class="pageActive == 'pretest' ? 'dashboard1-drawer' : 'lp-center-drawer'" @click="$router.push('/pretest')">Pre-test</div>
                <div :class="pageActive == 'job' ? 'dashboard1-drawer' : 'lp-center-drawer'" @click="$router.push('/job-vacancy')">Job Vacancy</div>
                <div class="help-center-drawer" style="color: #a3a3a3;" @click="">Schedule</div>
            </div>
            <img class="menu-left-item-drawer" alt="" src="@/assets/svg/rectangle-4106.svg" />
            <img
                alt=""
                class="scala-new-2-icon-drawer"
                src="@/assets/img/scalanew-2@2x.png"
            />
        </div>
        </div>
    </v-list>
    </v-navigation-drawer>
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
    props: {
        drawer: { type: Boolean },
        closeDrawer: { type: Function, default() { return {} } },
    },
    mounted(){
        this.pageActive = this.$route.name.split('-')[0];
    }

}
</script>