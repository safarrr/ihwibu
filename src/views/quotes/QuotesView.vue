<template>
  <!-- https://katanime.vercel.app/developer-api -->
  <section class="flex flex-col space-y-3">
    <div class="flex flex-col bg-white items-center p-5">
      <h1 class="text-lg font-bold">Link</h1>
      <div class="flex flex-row space-x-3">
        <RouterLink to="/quotes/list" class="hover:underline hover:text-blue-500"
          >categories by anime</RouterLink
        >
      </div>
    </div>
    <div
      v-for="(data, i) in quotes"
      :key="i"
      class="flex flex-col items-center w-full lg:w-1/2 lg:mx-auto bg-white p-5 rounded-lg"
    >
      <h1 class="text-sm text-center">"{{ data.indo }}"</h1>
      <div>
        <h2 class="font-bold text-xs text-center">{{ data.character }}</h2>
        <p class="font-light text-xs text-center">{{ data.anime }}</p>
      </div>
    </div>
    <div class="bg-white w-full lg:w-1/2 lg:mx-auto p-5 rounded-lg text-xs">
      <button v-if="!loading" class="w-full rounded-lg text-xs" @click="getQuotes">
        Load More
      </button>
      <p class="text-xs text-center" v-if="loading">Loading...</p>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      quotes: [],
      loading: false
    }
  },
  mounted() {
    this.getQuotes()
  },
  methods: {
    async getQuotes() {
      this.loading = true
      try {
        const res = await fetch('https://katanime.vercel.app/api/getrandom')
        const data = await res.json()
        if (data) {
          this.quotes = this.quotes.concat(data.result)
        }
      } catch (error) {
        console.error('api error')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
