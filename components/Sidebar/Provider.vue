<template>
  <v-col
    class="v-navigation-drawer d-none d-lg-flex"
    cols="3"
    style="position: relative; max-width: 260px; min-height: 1000px"
  >
    <div class="menu-button-t-dashboard">
      <div class="menu-button-remunerasi">
        <div class="menu-left-child" />
        <div class="menu">
          <div
            :class="pageActive == 'dashboard' ? 'dashboard1' : 'help-center'"
            @click="$router.push('/dashboard')"
          >
            Dashboard
          </div>
          <div
            :class="pageActive == 'help-center' ? 'dashboard1' : 'help-center'"
            @click="$router.push('/help-center')"
          >
            Help Center
          </div>
          <div class="menu-child" />
          <div
            :class="pageActive == 'talent' ? 'dashboard1' : 'help-center'"
            @click="$router.push('/talent-list')"
          >
            Talent List
          </div>
          <div
            :class="pageActive == 'talents' ? 'dashboard1' : 'help-center'"
            @click="$router.push('/talents')"
          >
            Talents
          </div>
          <v-menu
            transition="scale-transition"
            content-class="elevation-0"
            origin="center center"
            rounded="xl"
            offset-y
          >
            <template v-slot:activator="{ attrs, on }">
              <div
                v-bind="attrs"
                v-on="on"
                style="min-width: 200px"
                :class="
                  pageActive == 'job-post' || pageActive == 'job-opening'
                    ? 'dashboard1'
                    : 'help-center'
                "
              >
                Job
                <img
                  v-if="pageActive == 'job-post' || pageActive == 'job-opening'"
                  class=""
                  src="@/assets/svg/chevrondown-red.svg"
                  style="align-self: start"
                />
                <img v-else class="" src="@/assets/svg/chevrondown.svg" />
              </div>
            </template>

            <v-list class="sidebar-menu">
              <v-list-item
                link
                class="sidebar-item mx-2"
                @click="$router.push('/job/post')"
                :class="pageActive == 'job-post' ? 'active' : ''"
              >
                <div>New Job Post</div>
              </v-list-item>
              <v-list-item
                link
                class="sidebar-item mx-2"
                @click="$router.push('/job/opening')"
                :class="pageActive == 'job-opening' ? 'active' : ''"
              >
                <div>Job Opening</div>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu
            transition="scale-transition"
            content-class="elevation-0"
            origin="center center"
            rounded="xl"
            offset-y
          >
            <template v-slot:activator="{ attrs, on }">
              <div
                v-bind="attrs"
                v-on="on"
                style="min-width: 200px"
                :class="
                  pageActive == 'talent-selection' ||
                  pageActive == 'non-selection'
                    ? 'dashboard1'
                    : 'help-center'
                "
              >
                Talent Selection
                <img
                  v-if="
                    pageActive == 'talent-selection' ||
                    pageActive == 'non-selection'
                  "
                  class=""
                  src="@/assets/svg/chevrondown-red.svg"
                />
                <img v-else class="" src="@/assets/svg/chevrondown.svg" />
              </div>
            </template>

            <v-list class="sidebar-menu">
              <v-list-item
                link
                class="sidebar-item mx-2"
                @click="$router.push('/talent-selection')"
                :class="pageActive == 'talent-selection' ? 'active' : ''"
              >
                <div>Selection</div>
              </v-list-item>
              <v-list-item
                link
                class="sidebar-item mx-2"
                @click="$router.push('/non-selection')"
                :class="pageActive == 'non-selection' ? 'active' : ''"
              >
                <div>Non-Selection</div>
              </v-list-item>
            </v-list>
          </v-menu>
          <div class="menu-child" />
          <div
            :class="
              pageActive == 'employee-data' ? 'dashboard1' : 'help-center'
            "
            @click="$router.push('/employee-data')"
          >
            Employee Data
          </div>
          <div
            :class="pageActive == 'remuneration' ? 'dashboard1' : 'help-center'"
            @click="$router.push('/remuneration')"
          >
            Remuneration
          </div>
          <div
            :class="pageActive == 'payslip' ? 'dashboard1' : 'help-center'"
            @click="$router.push('/payslip')"
          >
            Payslip
          </div>
        </div>
        <img
          class="menu-left-item"
          alt=""
          src="@/assets/svg/rectangle-4106.svg"
        />
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
  data() {
    return {
      pageActive: "dashboard",
    };
  },
  watch: {
    $route(to, from) {
      this.setNavigationActive();
    },
  },
  mounted() {
    this.setNavigationActive();
  },
  methods: {
    setNavigationActive() {
      this.pageActive = this.$route.name;
    },
  },
};
</script>
