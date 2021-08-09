<template>
  <div class="flex w-full flex-wrap">
    <div
      class="absolute w-full"
      v-for="(slider, index) in sliders"
      :key="index"
    >
      `<transition name="fade">
        <div
          :class="slider"
          v-if="currentSlide == index"
          style="height:350px"
        ></div>
      </transition>
    </div>
    <div class="relative w-full  shadow-md" style="height:340px">
      <div class="absolute bottom-0 flex justify-center w-full">
        <div
          v-for="(item, index) in sliders"
          :key="item"
          :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'"
          class="w-4 h-4 mx-2 rounded-full bg-black "
          @click="makeActive(index)"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Slider',
  data() {
    return {
      currentSlide: 0,
      interval: '',
      sliders: ['bg-red-600', 'bg-blue-600', 'bg-yellow-600'],
      isTitleShowing: false,
    }
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.currentSlide === 2) this.currentSlide = 0
      this.currentSlide++
    }, 3000)
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
