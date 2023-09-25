<script setup lang="ts">
const counter = 5;
</script>

<template>
  <div>
    <RoastPreview
      v-for="index in counter"
      :key="index"
      class="pb-3 first:pt-2"
    />
  </div>
</template>
