<script setup lang="ts">
const props = defineProps({
  markdownFile: {
    type: String,
    required: true,
  },
});

const { data } = await useAsyncData(props.markdownFile, () =>
  queryContent(props.markdownFile).findOne()
);
</script>

<template>
  <ContentRendererMarkdown v-if="data" :value="data" />
</template>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply mb-4 text-2xl font-bold; /* Apply Tailwind utility classes */
}
</style>
