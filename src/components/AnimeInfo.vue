<script>
import { RouterLink } from 'vue-router'
export default {
  components: {
    RouterLink
  },

  data() {
    return {
      animeData: null
    }
  },
  mounted() {
    this.getanimeData()
  },
  methods: {
    async getanimeData() {
      try {
        const response = await fetch(
          'https://kitsu.io/api/edge/anime/' +
            this.$route.params.id +
            '?fields[anime]=titles,youtubeVideoId,abbreviatedTitles,showType,ageRatingGuide&include=categories'
        )
        const data = await response.json()
        if (data && data.data) {
          this.animeData = data.data
          const categories = data.included.filter((item) => item.type === 'categories')
          this.animeData.categories = categories
        } else {
          console.error('Invalid API response')
        }
      } catch (error) {
        console.error(error)
      }
    }
    // async getAnimeCategories(){

    // }
  }
}
</script>
<template>
  <div v-if="animeData" class="flex flex-col sm:flex-row justify-center gap-3 p-5">
    <div class="flex flex-col items-center">
      <h1 class="font-bold text-xl">Trailer</h1>
      <iframe
        class="rounded-lg"
        :src="'https://www.youtube.com/embed/' + animeData.attributes.youtubeVideoId"
      >
      </iframe>
    </div>
    <div class="flex flex-col">
      <h1 class="font-bold text-xl">Anime Details</h1>
      <div>
        <h2 class="font-semibold">Alternative Titles</h2>
        <p class="text-sm" v-for="(data, i) in animeData.attributes.titles" :key="i">
          {{ data }}
        </p>
        <p class="text-sm" v-for="(data, i) in animeData.attributes.abbreviatedTitles" :key="i">
          {{ data }}
        </p>
      </div>
      <div class="flex flex-col">
        <h2 class="font-semibold">Type</h2>
        <p class="text-sm">{{ animeData.attributes.showType }}</p>
      </div>
      <div class="flex flex-col">
        <h2 class="font-semibold">Age rating</h2>
        <p class="text-sm">
          {{ animeData.attributes.ageRating }} - {{ animeData.attributes.ageRatingGuide }}
        </p>
      </div>
      <div class="flex flex-col">
        <h2 class="font-semibold">Categories</h2>
        <div class="flex flex-wrap justify-start w-full mt-2">
          <!-- TODO buat komponet dan call url https://kitsu.io/api/edge/anime?filter[categories]={anime katergori di sini}&page[limit]=15&sort=-user_count -->
          <span
            v-for="(category, i) in animeData.categories"
            :key="i"
            class="px-5 py-2 gap-2 rounded-full text-xs font-semibold w-max hover:text-white hover:bg-blue-500 h-max"
          >
            <RouterLink :to="`/anime/categorie/${category.attributes.slug}`">{{
              category.attributes.title
            }}</RouterLink>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
