<template>
  <div class="max-w-sm max-h-sm w-full lg:max-w-full lg:flex">
    <div
      class="h-48 lg:h-auto lg:w-48 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      style="background-image: url('/img/bean.jpg')"
      title="some title about the roast"
    ></div>
    <div
      class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
        <p class="text-sm text-gray-600 items-center">Fast</p>
        <div class="text-gray-900 font-bold text-xl mb-2">5min Roast</div>
        <div class="max-w-sm inline-block min-w-0">
          <p class="text-gray-700 text-base line-clamp-3">
            Wow this one had some pretty fruity notes and a lot of great things
            going for it. Wow this one had some pretty fruity notes and a lot of
            great things going for it.
          </p>
        </div>
      </div>
      <div class="flex items-center">
        <img
          class="w-10 h-10 rounded-full mr-4"
          src="/favicon.ico"
          alt="Avatar of Jonathan Reinink"
        />
        <div class="text-sm">
          <p class="text-gray-900 leading-none">Jonathan Reinink</p>
          <p class="text-gray-600">Aug 18</p>
        </div>
      </div>
    </div>
  </div>
</template>
