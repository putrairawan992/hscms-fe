<template>
  <div class="card-summary">
    <div class="card-body">
      <p class="card-title">{{ title }}</p>
      <div class="display-number">{{ value }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
});
</script>

<style scoped>
.card-summary {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  width: 18%;
  display: flex;
  flex-direction: column;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.card-title {
  font-size: 1rem;
  color: #495057;
  text-align: left;
}

.display-number {
  font-size: 32px;
  font-weight: 800;
  text-align: left;
}
</style>
