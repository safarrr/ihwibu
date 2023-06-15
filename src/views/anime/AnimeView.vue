<script>
import TheAnimeTrending from '../../components/TheAnimeTrending.vue'
import TheAnimeSeasonYear from '../../components/TheAnimeSeasonYear.vue'
export default {
  // data() {
  //   return {
  //     trendingAnime: []
  //   }
  // },
  components: {
    TheAnimeTrending,
    TheAnimeSeasonYear
  }
}
</script>
<template>
  <section class="px-5 py-28 space-y-5">
    <TheAnimeTrending />
    <TheAnimeSeasonYear />
  </section>
</template>
