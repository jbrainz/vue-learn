<template>
  <div id="app">
    <Header :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen = true" />
    <div class="w-full flex">
      <router-view> </router-view>
    </div>
  </div>
  <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
</template>

<script>
import Header from './components/Header.vue'
import LoginModal from './components/LoginModal.vue'
import firebase from './utils/firebase'

export default {
  components: {
    Header,
    LoginModal,
  },
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {},
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true
        this.authUser = user
      } else {
        this.isLoggedIn = false
        this.authUser = {}
      }
    })
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
