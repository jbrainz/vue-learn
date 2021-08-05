<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">DC Heroes {{ herosCount }}</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dc"
        :key="hero.name"
      >
        <div>{{ hero.name }}</div>
        <button :click="remove(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addNewHero">
      <input
        class="border rounded"
        v-model="newHero"
        placeholder="Type hero name here"
      />
      <button
        class="border rounded bg-gradient-to-r  from-red-700 to-pink-500 text-white ml-4 px-10 py-2"
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'DcHeroes',
  data() {
    return {
      newHero: 'd',
      dc: [
        { name: 'Batman' },
        { name: 'Iron' },
        { name: 'Wonder Woman' },
        { name: 'Spider Man' },
        { name: 'Ant man' },
      ],
    }
  },
  computed: {
    herosCount() {
      return this.dc.length
    },
  },
  methods: {
    addNewHero() {
      if (this.newHero === '') return
      console.log(this.dc)
      this.dc.push({ name: this.newHero })
      this.newHero = ''
    },
    remove(index) {
      this.dc = this.dc.filter((hero, i) => i != index)
    },
  },
}
</script>
