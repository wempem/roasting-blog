<script setup lang="ts">
const logo = ref<HTMLDivElement>();
const addAnimation = ref<Boolean>(false);
const menuOpen = ref<Boolean>(false);
const largeScreen = ref<Boolean>(true);
const logoClassList: ComputedRef<string> = computed(
  () => `flex w-10 ${addAnimation.value ? "animate-pour" : ""}`
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

function toggleMenu(event: Event) {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <div class="relative flex min-h-full flex-col">
    <Transition
      enter-from-class="translate-x-[100%] "
      leave-to-class="translate-x-[100%] "
      enter-active-class="transition duration-[1s]"
      leave-active-class="transition duration-[1s]"
    >
      <div
        v-show="menuOpen"
        class="fixed inset-0 z-50 flex flex-row justify-center bg-white"
      >
        <div class="flex flex-col gap-4 pt-12">
          <button
            class="flex animate-itemOne text-xs lowercase text-black hover:text-slate-300"
          >
            Posts
          </button>
          <button
            class="slid-one flex animate-itemTwo text-xs lowercase text-black hover:text-slate-300"
          >
            Roasts
          </button>
          <button
            class="flex animate-itemThree text-xs lowercase text-black hover:text-slate-300"
          >
            About
          </button>
        </div>
      </div>
    </Transition>

    <div class="from-1% fixed top-0 z-[70] flex h-10 w-full bg-white shadow-sm">
      <div class="flex w-[94%]">
        <div class="flex items-center">
          <img
            ref="logo"
            :class="logoClassList"
            src="/img/pourover.svg"
            alt="My Happy SVG"
            viewbox="0 0 100 100"
          />
          <p class="font-medium lowercase">
            roastin<span class="text-[#74a474]">green</span>
          </p>
        </div>
        <!-- Regular buttons -->
        <div v-if="!largeScreen" class="ml-auto flex items-center gap-10">
          <button
            class="ml-auto flex text-xs lowercase text-slate-100 hover:text-slate-300"
          >
            Home
          </button>
          <button
            class="flex text-xs lowercase text-slate-100 hover:text-slate-300"
          >
            Posts
          </button>
          <button
            class="flex text-xs lowercase text-slate-100 hover:text-slate-300"
          >
            About
          </button>
        </div>
        <!-- Hambuger Menu for mobile -->
        <div v-else class="ml-auto flex items-center gap-4">
          <div
            id="menu-button"
            class="group relative z-50 w-4 cursor-pointer gap-y-0.5 pb-2"
            @click="toggleMenu"
          >
            <span
              class="absolute top-1 block h-[2px] w-4 rounded bg-black transition-all duration-500 ease-in-out"
              :class="[
                menuOpen
                  ? ' rotate-[40deg]'
                  : ' -translate-y-1 group-hover:translate-x-1',
              ]"
            ></span>
            <span
              class="absolute top-1 block h-[2px] w-4 rounded bg-black transition-all"
              :class="[
                menuOpen
                  ? 'translate-x-2 opacity-0  duration-300 ease-in-out'
                  : '',
              ]"
            ></span>
            <span
              class="absolute top-1 block h-[2px] w-4 rounded bg-black transition-all duration-500 ease-in-out"
              :class="[
                menuOpen
                  ? '-rotate-[40deg] '
                  : 'translate-y-1 group-hover:translate-x-1',
              ]"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-1 overflow-auto bg-gray-100 p-3 py-10 md:py-12">
      <div class="flex min-h-screen flex-1 md:grid md:grid-cols-6">
        <Welcome class="col-span-4 col-start-2" />
        <!-- <Matt class="col-span-1 m-2" />  -->
      </div>
    </div>
    <div
      class="absolute bottom-0 h-10 w-full bg-gray-200 pt-2 text-center text-sm"
      role="contentinfo"
    >
      Copyright @ Matt Wempe
    </div>
  </div>
</template>
<style lang="css"></style>
