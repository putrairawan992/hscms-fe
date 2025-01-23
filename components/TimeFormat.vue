<template>
  <span>{{ formatTimeWithTimezone }}</span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  timeString: {
    type: String,
    required: true,
  },
});

const formatTimeWithTimezone = computed(() => {
  const time = new Date(props.timeString);
  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
    timeZone: "Asia/Jakarta", // Zona waktu Indonesia
    hour12: false,
  }).format(time);
});
</script>
