<script setup lang="ts">
const logo = ref<HTMLDivElement>();
const addAnimation = ref<Boolean>(false);
const menuOpen = ref<Boolean>(false);
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
        class="fixed inset-0 z-50 flex flex-row justify-start bg-white"
      >
        <div class="flex flex-col gap-4 pl-10 pt-12">
          <button
            class="flex animate-itemOne lowercase text-black hover:text-slate-300"
          >
            Posts
          </button>
          <button
            class="slid-one flex animate-itemTwo lowercase text-black hover:text-slate-300"
          >
            Roasts
          </button>
          <button
            class="flex animate-itemThree lowercase text-black hover:text-slate-300"
          >
            About
          </button>
        </div>
      </div>
    </Transition>

    <div class="fixed top-0 z-[70] h-10 w-full bg-white shadow-sm">
      <div class="grid grid-cols-6">
        <div class="col-start-1 flex items-center md:col-start-2">
          <img
            ref="logo"
            :class="logoClassList"
            src="/img/pourover.svg"
            alt="My Happy SVG"
            viewbox="0 0 100 100"
          />
          <p class="text-2xl font-medium lowercase tracking-wide">
            roastin<span class="tracking-wide text-[#74a474]">green</span>
          </p>
        </div>
        <div class="col-start-6 flex items-center justify-end md:col-start-5">
          <!-- Desktop buttons -->
          <div
            class="flex items-center gap-9 pr-0 opacity-0 md:pr-2 md:opacity-100"
          >
            <button
              class="swag bg-gradient-to-r from-black from-30% to-[#74a474] to-60% lowercase hover:animate-textGradient"
            >
              Home
            </button>
            <button
              class="swag bg-gradient-to-r from-black from-30% to-[#74a474] to-60% lowercase hover:animate-textGradient"
            >
              roasts
            </button>
            <button
              class="swag bg-gradient-to-r from-black from-30% to-[#74a474] to-60% lowercase hover:animate-textGradient"
            >
              About
            </button>
          </div>
          <!-- Mobile buttons -->
          <div
            id="menu-button"
            class="group relative z-50 h-4 w-4 cursor-pointer pr-7 opacity-100 md:h-0 md:w-0 md:pr-0 md:opacity-0"
            @click="toggleMenu"
          >
            <span
              class="absolute top-[7px] h-[2px] w-4 rounded bg-black transition-all duration-500 ease-in-out"
              :class="[
                menuOpen
                  ? ' rotate-[40deg]'
                  : ' -translate-y-1 group-hover:translate-x-1',
              ]"
            ></span>
            <span
              class="absolute top-[7px] h-[2px] w-4 rounded bg-black transition-all"
              :class="[
                menuOpen
                  ? 'translate-x-2 opacity-0  duration-300 ease-in-out'
                  : '',
              ]"
            ></span>
            <span
              class="absolute top-[7px] h-[2px] w-4 rounded bg-black transition-all duration-500 ease-in-out"
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
    <div class="flex flex-1 overflow-auto bg-white p-3 py-10 md:py-12">
      <div class="flex min-h-screen flex-1 md:grid md:grid-cols-6">
        <Welcome class="col-span-4 col-start-2" />
        <!-- <Matt class="col-span-1 m-2" />  -->
      </div>
    </div>
    <div
      class="absolute bottom-0 grid h-10 w-full grid-cols-6 bg-gray-200 pt-2"
    >
      <div class="md:pl- col-span-3 col-start-1 pl-2 text-xs md:col-start-2">
        Copyright @ Matt Wempe
      </div>
    </div>
  </div>
</template>
<style lang="css">
.swag {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 300% 100%;
}
</style>
