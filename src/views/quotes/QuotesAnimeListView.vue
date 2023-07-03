<template>
  <section class="flex flex-col w-full justify-center items-center space-y-3">
    <input
      type="text"
      v-model="searchTerm"
      @input="searchAnime(searchTerm)"
      placeholder="Search anime..."
      class="p-3 rounded-lg"
    />
    <div>
      <ul class="space-y-3">
        <li v-for="(data, i) in searchResult.length > 0 ? searchResult : quotes" :key="i">
          <RouterLink :to="data.anime">
            <div
              class="flex flex-col items-center w-full lg:w-[60%] lg:mx-auto bg-white p-5 rounded-lg outline-none hover:scale-110 transition-transform ease-linear"
            >
              <h1 class="text-center">{{ data.anime }}</h1>
              <p class="text-neutral-500 text-sm text-center">{{ data.totalKata }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import { RouterLink } from 'vue-router'
export default {
  data() {
    return {
      quotes: [],
      searchResult: [],
      searchTerm: ''
    }
  },
  components: {
    RouterLink
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      try {
        const res = await fetch('https://katanime.vercel.app/api/getlistanime')
        const data = await res.json()
        if (data) {
          this.quotes = data.result
        }
      } catch (error) {
        console.error('api error')
      }
    },
    searchAnime(searchTerm) {
      this.searchResult = this.quotes.filter((e) =>
        e.anime.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
  }
}
</script>
