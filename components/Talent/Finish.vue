<template>
  <div class="row">
    <div class="col-md-4" align="center">
      <img src="/src/assets/images/Cowo.png" alt="" />
    </div>
    <div class="col-md-4" align="center">
      <h1 style="color: #ae445a"><b>Selamat!</b></h1>
      <br />
      <h4><b>Pendaftaran kandidat sudah berhasil!</b></h4>
      <br />
      <router-link :to="{ name: 'dashboard' }" class="btn btn-view btn-lg">
        Kembali ke Dashboard
      </router-link>
    </div>
    <div class="col-md-4" align="center">
      <img src="/src/assets/images/Cewe.png" alt="" />
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
.btn-view {
  background: linear-gradient(to right, #f39f5a, #ae445a);
  color: white;
  border: none;
}
.btn-view:hover {
  background: linear-gradient(to right, #e04c50, #e58b32);
}
</style>
