<template>
  <section>
    <ul v-if="quotes.length > 0" class="space-y-3">
      <li v-for="(data, i) in quotes" :key="i">
        <div
          class="flex flex-col items-center w-full lg:w-[60%] lg:mx-auto bg-white p-5 rounded-lg outline-none hover:scale-110 transition-transform ease-linear"
        >
          <h1 class="text-sm text-center">"{{ data.indo }}"</h1>
          <div>
            <h2 class="font-bold text-xs text-center">{{ data.character }}</h2>
            <p class="font-light text-xs text-center">{{ data.anime }}</p>
          </div>
        </div>
      </li>
      <li v-if="next">
        <div
          v-if="loading"
          class="flex flex-col items-center w-full lg:w-[60%] lg:mx-auto bg-white p-5 rounded-lg outline-none hover:scale-110 transition-transform ease-linear"
        >
          <h1 class="text-sm text-center">loading</h1>
        </div>
        <button
          @click="getQuotes"
          v-if="!loading"
          class="flex flex-col items-center w-full lg:w-[60%] lg:mx-auto bg-white p-5 rounded-lg outline-none hover:scale-110 transition-transform ease-linear"
        >
          <h1 class="text-sm text-center">next</h1>
        </button>
      </li>
    </ul>
    <h1 v-else>Anime tidak ada</h1>
  </section>
</template>
<script>
export default {
  data() {
    return {
      quotes: [],
      pages: 1,
      next: false,
      loading: false
    }
  },
  mounted() {
    this.getQuotes()
  },
  methods: {
    async getQuotes() {
      try {
        this.loading = true
        const res = await fetch(
          `https://katanime.vercel.app/api/getbyanime?anime=${this.$route.params.anime}&page=${this.pages}`
        )
        const data = await res.json()
        if (data || data.result > 0) {
          this.quotes = this.quotes.concat(data.result)
          this.next = data.next
          if (data.next) {
            this.pages++
          }
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
