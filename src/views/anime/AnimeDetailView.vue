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
            '?fields[anime]=titles,coverImage,posterImage,status,synopsis,canonicalTitle'
        )
        const data = await response.json()
        if (data && data.data) {
          this.animeData = data.data
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
  <section v-if="animeData" class="flex flex-col px-5 pt-28 relative">
    <div
      class="z-0 h-[20vh] md:h-[25vh] bg-cover bg-center rounded-lg"
      :style="{
        backgroundImage: `url(${
          animeData.attributes.coverImage
            ? animeData.attributes.coverImage.large
            : 'https://wallpaperaccess.com/full/1872.jpg'
        })`
      }"
    >
      <!-- <img
        :src="animeData.attributes.coverImage.large"
        alt="baner"
        class="rounded-lg bg-cover md:w-[100vw] bg-center"
        loading="lazy"
      /> -->
      <!-- <div class="bg-gradient-to-t from-white from-20% h-20 w-full absolute bottom-0"></div> -->
    </div>
    <div class="flex flex-row -mt-16 md:-mt-28 z-10 w-max m-3 items-end space-x-3 rounded-md">
      <img
        :src="animeData.attributes.posterImage.medium"
        alt="anime"
        loading="lazy"
        class="w-28 md:w-36 rounded-lg"
      />
      <div class="flex flex-col w-[50vw]">
        <span
          :class="
            'text-xs font-semibold capitalize ' +
            `${animeData.attributes.status === 'finished' ? 'text-green-600' : 'text-red-500'}`
          "
          >{{ animeData.attributes.status }}</span
        >
        <h1 class="text-xl font-bold uppercase truncate">
          {{ animeData.attributes.canonicalTitle }}
        </h1>
        <h2 class="truncate">{{ animeData.attributes.titles.ja_jp }}</h2>
      </div>
    </div>
    <div class="flex flex-col mt-5 space-y-3">
      <p class="text-sm text-center">{{ animeData.attributes.synopsis }}</p>
    </div>
  </section>
  <section class="flex flex-row justify-center mt-5 bg-slate-200/50 py-2 px-5 rounded-t-xl">
    <RouterLink
      active-class="bg-white -mb-2"
      class="px-5 py-2 rounded-t-lg"
      :to="`/anime/${this.$route.params.id}/details`"
      >Details</RouterLink
    >
    <RouterLink
      active-class="bg-white -mb-2"
      class="px-5 py-2 rounded-t-lg"
      :to="`/anime/${this.$route.params.id}/episodes`"
      >Episodes</RouterLink
    >
  </section>
  <router-view></router-view>
</template>
