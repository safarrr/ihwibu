<template>
  <section class="space-y-5">
    <div class="flex flex-row justify-between p-5 bg-white rounded-lg space-x-2">
      <input
        type="text"
        v-model="searchText"
        placeholder="Search anime..."
        class="flex-grow outline-none"
      />
      <button class="hover:bg-neutral-100 rounded-md px-5 py-2" @click="search">Search</button>
    </div>
    <div v-if="animeList.length > 0" class="flex flex-wrap justify-center items-center gap-3 z-0">
      <CardAnime
        v-for="data in animeList"
        :key="data.id"
        :title="data.attributes.canonicalTitle"
        :id="data.id"
        :imageUrl="data.attributes.posterImage.medium"
      />
    </div>
    <div v-if="loading">Loading...</div>
  </section>
</template>

<script>
import CardAnime from '@/components/anime/CardAnime.vue'
export default {
  components: {
    CardAnime
  },
  data() {
    return {
      searchText: '',
      animeList: [],
      loading: false
    }
  },
  methods: {
    async search() {
      try {
        this.loading = true

        const response = await fetch(
          `https://kitsu.io/api/edge/anime?filter[text]=${this.searchText}`
        )
        const data = await response.json()

        if (data && data.data) {
          this.animeList = data.data
        } else {
          console.error('Invalid API response')
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
