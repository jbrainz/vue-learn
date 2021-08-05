<template>
  <div id="app">
    <Header />
    <div class="w-full flex">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header,
  },
}
</script>

<style>
#app {
  font-family: sans-serif Georama;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
