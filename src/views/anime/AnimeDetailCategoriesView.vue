<template>
  <section class="space-y-5">
    <h1 class="text-center text-xl bg-white p-5">
      categorie <span class="font-bold">{{ $route.params.categories }}</span>
    </h1>
    <div class="flex flex-wrap justify-center items-center gap-3 z-0">
      <CardAnime
        v-for="data in animeCategorie"
        :key="data.id"
        :title="data.attributes.canonicalTitle"
        :id="data.id"
        :imageUrl="data.attributes.posterImage.medium"
      />
      <button
        class="w-40 md:w-48 h-40 md:h-48 p-5 hover:scale-110 shadow-lg rounded-lg bg-white"
        v-if="!loading && hasMore"
        @click="loadMore"
      >
        Load More
      </button>
      <h1
        class="flex items-center justify-center w-40 md:w-48 h-40 md:h-48 p-5 hover:scale-110 shadow-lg rounded-lg bg-white"
        v-if="loading"
      >
        Loading...
      </h1>
    </div>
  </section>
</template>
<script>
import CardAnime from '@/components/anime/CardAnime.vue'
export default {
  data() {
    return {
      animeCategorie: [],
      offset: 0,
      limit: 10,
      loading: false,
      hasMore: true,
      totalAnime: 0
    }
  },
  components: { CardAnime },
  mounted() {
    this.getCategoriesData()
  },
  methods: {
    loadMore() {
      this.getCategoriesData()
    },
    async getCategoriesData() {
      try {
        this.loading = true
        const res = await fetch(
          `https://kitsu.io/api/edge/anime?filter[categories]=${this.$route.params.categories}&page[limit]=${this.limit}&page[offset]=${this.offset}&sort=-user_count&fields[anime]=canonicalTitle,posterImage`
        )
        const data = await res.json()
        if (data && data.data) {
          this.totalAnime = data.meta.count
          this.animeCategorie = this.animeCategorie.concat(data.data)
          this.offset += this.limit
          this.hasMore = this.offset < this.totalAnime
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
