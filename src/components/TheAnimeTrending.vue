<script>
import CardAnime from './CardAnime.vue'
export default {
  data() {
    return {
      trendingAnime: []
    }
  },
  components: {
    CardAnime
  },
  mounted() {
    this.getTrendingAnime()
  },
  methods: {
    async getTrendingAnime() {
      try {
        const response = await fetch('https://kitsu.io/api/edge/trending/anime')
        const data = await response.json()
        this.trendingAnime = data.data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
<template>
  <h1 class="text-center font-bold text-2xl mb-5">Trending anime</h1>
  <div class="flex flex-wrap justify-center items-center gap-3 z-0">
    <CardAnime
      v-for="data in trendingAnime"
      :key="data.id"
      :title="data.attributes.canonicalTitle"
      :id="data.id"
      :imageUrl="data.attributes.posterImage.medium"
    />
  </div>
</template>
