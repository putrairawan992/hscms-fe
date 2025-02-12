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
            v-for="item in menuItems"
            :key="item.route"
            :class="
              (item.route === '/' && pageActive === 'index') ||
              (item.route !== '/' && pageActive === item.route.split('/')[1])
                ? 'dashboard1'
                : 'help-center'
            "
            @click="$router.push(item.route)"
          >
            {{ item.label }}
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
      pageActive: this.$route.name,
      menuItems: [
        { label: "Dashboard", route: "/" },
        { label: "Help Center", route: "/help-center" },
        { label: "Biodata", route: "/biodata" },
        { label: "File Attachment", route: "/file-attachment" },
        { label: "Contract", route: "/contract" },
        { label: "Payslip", route: "/employee-payslip" },
        { label: "Pre-test", route: "/pretest" },
        { label: "Pre-test Admin", route: "/pretest-admin" },
        { label: "Job Vacancy", route: "/job-vacancy" },
        { label: "Schedule", route: "/schedule" },
      ],
    };
  },
  watch: {
    $route(to) {
      this.pageActive = to.name;
    },
  },
  mounted() {
    this.pageActive = this.$route.name;
  },
};
</script>
