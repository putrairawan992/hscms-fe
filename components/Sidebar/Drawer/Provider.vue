<template>
    <v-navigation-drawer v-model="drawer" temporary fixed >
    <v-list nav>
        <div class="menu-button-t-dashboard-drawer">
        <div class="menu-button-remunerasi-drawer">
            <div class="menu-left-child-drawer" />
            <div class="menu-drawer">
                <div :class="pageActive == 'dashboard' ? 'dashboard1-drawer' : 'help-center-drawer'" @click="$router.push('/dashboard')">Dashboard</div>
                <div class="help-center-drawer" style="color: #a3a3a3;" @click="">Help Center</div>
                <div class="help-center-drawer" style="color: #a3a3a3;" @click="">Blast Notification</div>
                <div class="menu-child-drawer" />
                <div class="help-center-drawer" style="color: #a3a3a3;" @click="">Talent Pool</div>
                <div class="help-center-drawer" style="color: #a3a3a3;" @click="">Talent Hunt</div>
                <div class="menu-child-drawer" />
                <div :class="pageActive == 'job' ? 'dashboard1-drawer' : 'help-center-drawer'" @click="$router.push('/job/post')">Job</div>
                <div :class="pageActive == 'opening' ? 'dashboard1-drawer' : 'help-center-drawer'" @click="$router.push('/job/opening')">Job Opening</div>
                <div :class="pageActive == 'talent' ? 'dashboard1-drawer' : 'help-center-drawer'" @click="$router.push('/talent-selection')">Talent Selection</div>
                <div class="menu-child-drawer" />
                <div class="help-center-drawer" style="color: #a3a3a3;" @click="">Employee Data</div>
                <div class="help-center-drawer" style="color: #a3a3a3;" @click="">Remuneration</div>
                <div class="help-center-drawer" style="color: #a3a3a3;" @click="">Payslip</div>
                <div class="help-center-drawer" style="color: #a3a3a3;" @click="">Request</div>
                <div class="help-center-drawer" style="color: #a3a3a3;" @click="">Form</div>
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
        pageActive: "dashboard"
    } },
    watch: {
        $route(to, from){
            this.setNavigationActive();
        }
    },
    props: {
        drawer: { type: Boolean },
        closeDrawer: { type: Function, default() { return {} } },
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