<script setup lang="ts">
const counter = 5;
</script>

<template>
  <div
    class="md:grid md:grid-cols-3 md:place-items-center md:justify-center md:gap-3"
  >
    <RoastPreview
      v-for="index in counter"
      :key="index"
      class="pb-3 md:col-span-1 md:pb-0"
    />
  </div>
</template>
