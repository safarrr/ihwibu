<template>
  <h1 class="text-center font-bold text-2xl mb-5">Anime {{ year }}</h1>
  <div class="flex flex-wrap justify-center items-center gap-3 z-0">
    <CardAnime
      v-for="data in animeData"
      :key="data.id"
      :title="data.attributes.canonicalTitle"
      :id="data.id"
      :imageUrl="data.attributes.posterImage.medium"
    />
  </div>
</template>
<script>
import CardAnime from './CardAnime.vue'
export default {
  data() {
    return {
      animeData: [],
      year: new Date().toLocaleDateString('id-ID', { year: 'numeric' }) - 1
    }
  },
  mounted() {
    this.getAnimeData()
  },
  components: {
    CardAnime
  },
  methods: {
    async getAnimeData() {
      try {
        const res = await fetch(
          `https://kitsu.io/api/edge/anime?fields[anime]=canonicalTitle%2CposterImage&filter[year]=${this.year}&sort=-user_count`
        )
        const data = await res.json()
        this.animeData = data.data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
