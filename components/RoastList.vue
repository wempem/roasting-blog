<template>
  <div>
    <RoastPreview
      v-for="index in counter"
      :key="index"
      class="mb-3 first:mt-2"
    />
  </div>
</template>

<script setup lang="ts">
const counter = 5;
</script>
