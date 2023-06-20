<template>
  <section v-if="animeData" class="flex flex-col relative">
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
    <div
      class="flex flex-row z-10 w-[99%] p-5 relative my-3 items-end space-x-3 rounded-lg bg-white"
    >
      <img
        :src="animeData.attributes.posterImage.medium"
        alt="anime"
        loading="lazy"
        class="w-28 md:w-36 rounded-lg absolute"
      />
      <div class="flex flex-col w-[70%] pl-28 md:pl-36">
        <p
          :class="
            'text-xs font-semibold capitalize ' +
            `${animeData.attributes.status === 'finished' ? 'text-green-600' : 'text-red-500'}`
          "
        >
          {{ animeData.attributes.status }}
        </p>
        <p class="text-xs font-medium text-neutral-500">
          {{ formatDate(animeData.attributes.startDate) }} -
          {{
            animeData.attributes.status === 'finished'
              ? formatDate(animeData.attributes.endDate)
              : 'current'
          }}
        </p>
        <h1 class="text-xl font-bold uppercase truncate">
          {{ animeData.attributes.canonicalTitle }}
        </h1>
        <h2 class="truncate">{{ animeData.attributes.titles.ja_jp }}</h2>
      </div>
    </div>
    <div class="flex flex-col mt-5 rounded-lg bg-white p-4">
      <p class="text-sm text-center">{{ animeData.attributes.synopsis }}</p>
    </div>
  </section>
  <section class="flex flex-row justify-center mt-5 py-2 px-5">
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
            '?fields[anime]=titles,coverImage,posterImage,status,synopsis,canonicalTitle,startDate,endDate'
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
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', options)
    }
  }
}
</script>
