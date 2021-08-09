<template>
  <section
    @click="close"
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
  ></section>
  <div class="absolute inset-0 ">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
        <div class="p-2 border">
          <h1 class="text-xl text-center">
            Login
          </h1>
          <form class="p-2 my-2" @submit.prevent="submit">
            <div class="my-4">
              <label for="email">Email</label>
              <input
                v-model="email"
                ref="emailRef"
                type="email"
                placeholder="Enter your email"
                class="rounded border-width-0 shadow-lg p-2 w-full"
              />
            </div>
            <div class="my-4">
              <label for="email">Password</label>
              <input
                type="password"
                v-model="password"
                placeholder="Enter password"
                class="rounded shadow-lg p-2 w-full"
              />
            </div>
            <div class="my-4">
              <button
                type="submit"
                class="w-full rounded shadow-md bg-gradient-to-r text-white from-gray-400 to-black p-2"
              >
                <span v-if="!loading">Login</span>
                <span v-else>&#x1F525;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../utils/firebase'
export default {
  mounted() {
    this.$refs.emailRef.focus()
  },
  name: 'LoginModal',
  data() {
    return {
      email: '',
      password: '',
      loading: false,
    }
  },
  methods: {
    submit() {
      this.loading = true
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in
          this.loading = false
          console.log(userCredential)
          this.email = ''
          this.password = ''
          this.close()
          // ...
        })
        .catch((error) => {
          this.loading = false
          console.log(error)
        })
    },
    close() {
      this.$emit('close-login')
    },
  },
}
</script>

<style></style>
