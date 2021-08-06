<template>
  <div class="flex w-full flex-wrap">
    <h class="w-full text-center text-3xl my-4">Markdown App</h>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea
          name="editor"
          :value="text"
          @input="update"
          class="w-full h-full"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-300" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from 'marked'
import debounce from '../utils/mixins/debounce'
export default {
  mixins: [debounce],
  name: 'Markdown',
  data() {
    return {
      text: '',
      timeout: '',
    }
  },
  computed: {
    markedText() {
      return marked(this.text)
    },
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value)
      this.debounce(task, 500)
    },
  },
}
</script>
