<script setup>
function showMessage(msh) {
  console.log(msh);
}
</script>

<template>
  <div
    class="max-h z-10 flex w-full max-w-full content-center text-left md:max-w-xs"
    @click="showMessage('Hello World')"
  >
    <div
      class="flex w-full cursor-pointer flex-col justify-between rounded-b border border-gray-400 bg-white p-4 leading-normal transition-all hover:-translate-y-1 hover:shadow-lg lg:rounded-b-none lg:rounded-r lg:border-gray-400"
    >
      <div class="mb-8">
        <p class="items-center text-sm text-gray-600 lg:text-lg">Fast</p>
        <div class="mb-2 text-xl font-bold text-gray-900">5min Roast</div>
        <div class="inline-block min-w-0 max-w-sm lg:max-w-full">
          <p class="line-clamp-3 text-base text-gray-700">
            Wow this one had some pretty fruity notes and a lot of great things
            going for it. Wow this one had some pretty fruity notes and a lot of
            great things going for it.
          </p>
        </div>
      </div>
      <div class="flex items-center">
        <img
          class="mr-4 h-10 w-10 rounded-full"
          src="/favicon.ico"
          alt="Avatar of Jonathan Reinink"
        />
        <div class="text-sm">
          <p class="leading-none text-gray-900">Jonathan Reinink</p>
          <p class="text-gray-600">Aug 18</p>
        </div>
      </div>
    </div>
  </div>
</template>
