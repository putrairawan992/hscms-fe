<template>
    <v-col class="v-navigation-drawer d-none d-lg-flex " cols="3" style="position: relative; max-width: 260px; min-height:1000px;">
        <div class="menu-button-t-dashboard">
            <div class="menu-button-remunerasi">
            <div class="menu-left-child" />
            <div class="menu">
                <div :class="pageActive == 'dashboard' || pageActive == 'index' ? 'dashboard1' : 'help-center'" @click="$router.push('/dashboard')">Dashboard</div>
                <div class="help-center" style="color: #a3a3a3;" @click="">Help Center</div>
                <div class="help-center" style="color: #a3a3a3;" @click="">Blast Notification</div>
                <div class="menu-child" />
                <div class="help-center" style="color: #a3a3a3;" @click="">Talent Pool</div>
                <div class="help-center" style="color: #a3a3a3;" @click="">Talent Hunt</div>
                <div class="menu-child" />
                <v-menu
                    transition="scale-transition"
                    content-class="elevation-0"
                    origin="center center"
                    rounded="xl" offset-y
                >
                    <template v-slot:activator="{ attrs, on }">
                        <div 
                            v-bind="attrs" v-on="on"
                            style="min-width: 200px;"
                            :class="pageActive == 'job' || pageActive == 'opening' ? 'dashboard1' : 'help-center'" 
                        >
                            Job
                            <img v-if="pageActive == 'job' || pageActive == 'opening'" class="mt-2" src="@/assets/svg/chevrondown-red.svg" />
                            <img v-else class="mt-2" src="@/assets/svg/chevrondown.svg" />
                        </div>
                    </template>

                    <v-list class="sidebar-menu">
                        <v-list-item
                            link class="sidebar-item mx-2"
                            @click="$router.push('/job/post')"
                            :class="pageActive == 'job' ? 'active' : ''"
                        >
                            <div>New Job Post</div>
                        </v-list-item>
                        <v-list-item
                            link class="sidebar-item mx-2"
                            @click="$router.push('/job/opening')"
                            :class="pageActive == 'opening' ? 'active' : ''"
                        >
                            <div>Job Opening</div>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-menu
                    transition="scale-transition"
                    content-class="elevation-0"
                    origin="center center"
                    rounded="xl" offset-y
                >
                    <template v-slot:activator="{ attrs, on }">
                        <div 
                            v-bind="attrs" v-on="on"
                            style="min-width: 200px;"
                            :class="pageActive == 'talent' || pageActive == 'non' ? 'dashboard1' : 'help-center'" 
                        >
                            Talent Selection
                            <img v-if="pageActive == 'talent' || pageActive == 'non'" class="mt-2" src="@/assets/svg/chevrondown-red.svg" />
                            <img v-else class="mt-2" src="@/assets/svg/chevrondown.svg" />
                        </div>
                    </template>

                    <v-list class="sidebar-menu">
                        <v-list-item
                            link class="sidebar-item mx-2"
                            @click="$router.push('/talent-selection')"
                            :class="pageActive == 'talent' ? 'active' : ''"
                        >
                            <div>Selection</div>
                        </v-list-item>
                        <v-list-item
                            link class="sidebar-item mx-2"
                            @click="$router.push('/non-selection')"
                            :class="pageActive == 'non' ? 'active' : ''"
                        >
                            <div>Non-Selection</div>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <div class="menu-child" />
                <div :class="pageActive == 'employee' ? 'dashboard1' : 'help-center'" @click="$router.push('/employee-data')">Employee Data</div>
                <div :class="pageActive == 'remuneration' ? 'dashboard1' : 'help-center'" @click="$router.push('/remuneration')">Remuneration</div>
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
        pageActive: "dashboard",
        items: [
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me 2' },
        ],
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