<template>
  <div v-if="thing">
    <Markdown :markdown-file="thing" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const thing: ComputedRef<string> = computed(() => {
  return Array.isArray(route.params.slug)
    ? route.params.slug[0]
    : route.params.slug;
});
</script>
<style></style>
