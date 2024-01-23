<template>
    <v-col class="v-navigation-drawer d-none d-lg-flex " cols="3" style="position: relative; max-width: 260px; min-height:1000px;">
        <div class="menu-button-t-dashboard">
            <div class="menu-button-remunerasi">
            <div class="menu-left-child" />
            <div class="menu">
                <div :class="pageActive == 'dashboard' ? 'dashboard1' : 'help-center'" @click="$router.push('/dashboard')">Dashboard</div>
                <div class="help-center" style="color: #a3a3a3;" @click="">Help Center</div>
                <div class="help-center" style="color: #a3a3a3;" @click="">Blast Notification</div>
                <div class="menu-child" />
                <div class="help-center" style="color: #a3a3a3;" @click="">Talent Pool</div>
                <div class="help-center" style="color: #a3a3a3;" @click="">Talent Hunt</div>
                <div class="menu-child" />
                <div :class="pageActive == 'job' ? 'dashboard1' : 'help-center'" @click="$router.push('/job/post')">Job</div>
                <div :class="pageActive == 'opening' ? 'dashboard1' : 'help-center'" @click="$router.push('/job/opening')">Job Opening</div>
                <div :class="pageActive == 'talent' ? 'dashboard1' : 'help-center'" @click="$router.push('/talent-selection')">Talent Selection</div>
                <div class="menu-child" />
                <div class="help-center" style="color: #a3a3a3;" @click="">Employee Data</div>
                <div class="help-center" style="color: #a3a3a3;" @click="">Remuneration</div>
                <div class="help-center" style="color: #a3a3a3;" @click="">Payslip</div>
                <div class="help-center" style="color: #a3a3a3;" @click="">Request</div>
                <div class="help-center" style="color: #a3a3a3;" @click="">Form</div>
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
        pageActive: "dashboard"
    } },
    watch: {
        $route(to, from){
            this.setNavigationActive();
        }
    },
    mounted(){
        this.setNavigationActive();
    },
    methods: {
        setNavigationActive(){
            let routeName = this.$route.name.split('-');
            if(routeName.length > 1 ){
                if(routeName[1] == "opening"){
                    this.pageActive = routeName[1];
                }else{
                    this.pageActive = routeName[0];
                }
            }else{
                this.pageActive = routeName[0];
            }
        }
    }
}
</script>