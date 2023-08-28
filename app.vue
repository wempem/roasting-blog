<template>
  <div class="h-screen flex flex-col">
    <div class="flex h-10">
      <div class="flex flex-row">
        <div class="flex">
          <img
            ref="logo"
            :class="logoClassList"
            src="/img/pourover.svg"
            alt="My Happy SVG"
            viewbox="0 0 100 100"
          />
          <p class="mt-2 lowercase font-medium">Roasting with Matt</p>
        </div>
        <div class="flex m-2">
          <button
            class="flex text-xs lowercase text-slate-400 hover:text-white"
          >
            Posts
          </button>
          <button
            class="flex text-xs lowercase text-slate-400 hover:text-white"
          >
            Roasts
          </button>
          <button
            class="flex text-xs lowercase text-slate-400 hover:text-white"
          >
            About
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-1 bg-gray-100 overflow-auto">
      <div class="grid grid-cols-6 m-2">
        <Matt class="m-2 col-start-2 col-span-1" />
        <RoastList class="motion-reduce:-2 col-span-2" />
        <Matt class="m-2 col-span-1" />
      </div>
    </div>
    <div class="flex h-10 bg-gray-200">Footer</div>
  </div>
</template>

<script setup lang="ts">
const logo = ref<HTMLDivElement>();
const addAnimation = ref<Boolean>(false);
const logoClassList: ComputedRef<string> = computed(
  () => `flex pl-1 ${addAnimation.value ? "animate-pour" : ""}`
);

function toggleAnimation() {
  addAnimation.value = !addAnimation.value;
}

onMounted(() => {
  if (logo.value) {
    logo.value.addEventListener("mouseover", toggleAnimation);
    logo.value.addEventListener("animationend", toggleAnimation);
  }
});

onBeforeUnmount(() => {
  if (logo.value) {
    logo.value.removeEventListener("mouseenter", toggleAnimation);
    logo.value.removeEventListener("animationend", toggleAnimation);
  }
});
</script>
