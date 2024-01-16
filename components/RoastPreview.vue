<script setup>
function showMessage(msh) {
  console.log(msh);
}
</script>

<template>
  <div
    class="max-h z-10 w-full max-w-full content-center text-left"
    @click="showMessage('Hello World')"
  >
    <div
      class="flex w-full cursor-pointer flex-col justify-between rounded-b border bg-white p-4 leading-normal shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[#74a474] lg:rounded-b-none lg:rounded-r"
    >
      <div class="mb-8">
        <p class="items-center text-sm text-gray-600 lg:text-lg">
          Kenyan - Natural
        </p>
        <div class="mb-2 text-xl font-bold text-gray-900">
          Fruity Flavors Found in Kenya
        </div>
        <div class="inline-block min-w-0 max-w-sm lg:max-w-full">
          <p class="line-clamp-3 text-base text-gray-700">
            This past year I've had so many issues with Ethiopian beans that I
            started looking outwards. I picked up these Kenyan beans to sample
            from Cafe Imports. I fired up my trusty Ikawa and got to business. I
            started out with my usual baseline profile, the SCAA standard. This
            is one of my favorite profiles to use as you really get a terrific
            baseline on what you can expect out of the bean.
          </p>
        </div>
      </div>
      <div class="flex items-center">
        <div class="text-sm">
          <p class="leading-none text-gray-900">Jonathan Reinink</p>
          <p class="text-gray-600">Aug 18</p>
        </div>
      </div>
    </div>
  </div>
</template>
