<template>
  <Markdown v-if="thing" :markdown-file="thing" />
</template>

<script setup lang="ts">
const route = useRoute();
const thing: ComputedRef<string> = computed(() => {
  return Array.isArray(route.params.slug)
    ? route.params.slug[0]
    : route.params.slug;
});
</script>
