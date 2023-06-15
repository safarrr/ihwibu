<template>
  <h1 class="mx-5 text-center font-semibold">Total episodes {{ totalEpisodes }}</h1>
  <div class="flex flex-wrap justify-center items-center gap-5 rounded-xl">
    <div
      v-for="(episode, i) in episodes"
      :key="i"
      class="flex flex-col p-5 hover:scale-110 shadow-lg rounded-lg"
    >
      <img
        :src="episode.attributes.thumbnail ? episode.attributes.thumbnail.original : posterImage"
        :class="
          ' rounded-lg object-center mx-auto ' + episode.attributes.thumbnail
            ? 'object-cover h-28 w-40'
            : 'w-40 md:w-48'
        "
        loading="lazy"
      />
      <h1 class="font-bold">Episode {{ episode.attributes.number }}</h1>
      <h2 v-if="episode.attributes.canonicalTitle" class="text-sm w-36">
        {{ episode.attributes.canonicalTitle }}
      </h2>
      <p class="text-xs">(Created: {{ formatDate(episode.attributes.airdate) }}}</p>
    </div>
    <button
      class="w-40 md:w-48 h-40 md:h-48 p-5 hover:scale-110 shadow-lg rounded-lg"
      v-if="!loading && hasMore"
      @click="loadMore"
    >
      Load More
    </button>
    <h1
      class="flex items-center justify-center w-40 md:w-48 h-40 md:h-48 p-5 hover:scale-110 shadow-lg rounded-lg"
      v-if="loading"
    >
      Loading...
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      episodes: [],
      offset: 0,
      limit: 10,
      loading: false,
      hasMore: true,
      totalEpisodes: 0,
      posterImage: null
    }
  },
  mounted() {
    this.getEpisodes()
    this.getAnimeData()
  },
  methods: {
    async getAnimeData() {
      try {
        const response = await fetch(
          `https://kitsu.io/api/edge/anime/${this.$route.params.id}?fields[anime]=posterImage`
        )
        const data = await response.json()

        if (data && data.data) {
          this.posterImage = data.data.attributes.posterImage.original
        }
      } catch (error) {
        console.error(error)
      }
    },
    async getEpisodes() {
      try {
        this.loading = true

        const response = await fetch(
          `https://kitsu.io/api/edge/episodes?filter[mediaType]=Anime&filter[media_id]=${this.$route.params.id}&page[limit]=${this.limit}&page[offset]=${this.offset}&sort=number`
        )
        const data = await response.json()

        if (data && data.data) {
          this.totalEpisodes = data.meta.count
          this.episodes = this.episodes.concat(data.data)
          this.offset += this.limit
          this.hasMore = this.offset < this.totalEpisodes
        } else {
          console.error('Invalid API response')
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    loadMore() {
      this.getEpisodes()
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', options)
    }
  }
}
</script>
