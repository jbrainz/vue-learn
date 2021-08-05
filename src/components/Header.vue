<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600  text-white h-10 mb-3 pb-2"
  >
    <router-link
      v-for="list in lists"
      :key="list.title"
      class="mx-2"
      :to="list.to"
      >{{ list.title }}</router-link
    >
  </nav>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { title: 'Dc Heros', to: '/dc-heros' },
        { title: 'Calender', to: '/calender' },
        { title: 'Markdown', to: '/markdown' },
      ],
    }
  },
  name: 'Header',
}
</script>
