<template>
  <section class="space-y-5">
    <div class="flex flex-col bg-white items-center p-5">
      <h1 class="text-lg font-bold">Link</h1>
      <div class="flex flex-row space-x-3">
        <RouterLink to="/anime/categorie" class="hover:underline hover:text-blue-500"
          >categories</RouterLink
        >
        <RouterLink to="/anime/search" class="hover:underline hover:text-blue-500"
          >search</RouterLink
        >
      </div>
    </div>
    <TheAnimeTrending />
    <TheAnimeSeasonYear />
  </section>
</template>
<script>
import TheAnimeTrending from '../../components/TheAnimeTrending.vue'
import TheAnimeSeasonYear from '../../components/TheAnimeSeasonYear.vue'
import { RouterLink } from 'vue-router'
export default {
  // data() {
  //   return {
  //     trendingAnime: []
  //   }
  // },
  components: {
    RouterLink,
    TheAnimeTrending,
    TheAnimeSeasonYear
  }
}
</script>
