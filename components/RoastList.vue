<script setup lang="ts">
const counter = 5;
</script>

<template>
  <div class="md:grid md:grid-cols-3 md:gap-3">
    <div class="grid gap-3 md:col-span-2">
      <RoastPreview v-for="index in counter" :key="index" />
    </div>
    <ul class="md:col-span-1">
      <li>Washed</li>
      <li>Natural</li>
      <li>Honey Processed</li>
    </ul>
  </div>
  <div></div>
</template>
