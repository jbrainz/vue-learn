<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600  text-white h-10 pb-2"
  >
    <router-link
      v-for="list in lists"
      :key="list.title"
      class="mx-2"
      :to="list.to"
      >{{ list.title }}</router-link
    >
    <button v-if="!isLoggedIn" class="mx-2" @click="$emit('open-login-modal')">
      Login
    </button>
    <button v-else class="mx-2" @click="signOut">
      Logout
    </button>
  </nav>
</template>

<script>
import firebase from '../utils/firebase'
export default {
  data() {
    return {
      lists: [
        { title: 'Dc Heros', to: '/dc-heros' },
        { title: 'Calender', to: '/calender' },
        { title: 'Markdown', to: '/markdown' },
        { title: 'Slider Carousel', to: '/slider' },
      ],
    }
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  name: 'Header',
  props: { isLoggedIn: { type: Boolean, required: true } },
}
</script>
