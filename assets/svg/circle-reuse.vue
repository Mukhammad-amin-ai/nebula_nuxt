<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <circle cx="6" cy="6" r="6" :fill="fill" />
  </svg>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  fill: String,
});
</script>
<style scoped></style>
