<template>
  <span>{{ formattedDate }}</span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  dateString: {
    type: String,
    required: true,
  },
});

const formattedDate = computed(() => {
  const date = new Date(props.dateString);
  return new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
});
</script>
