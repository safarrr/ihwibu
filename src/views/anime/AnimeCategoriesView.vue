<template>
  <section class="space-y-5 bg-white p-5">
    <h1 class="text-xl font-bold text-center">all categories</h1>
    <ul class="grid grid-cols-2 gap-3">
      <li
        v-for="(categorie, i) in categories"
        :key="i"
        class="mx-auto hover:underline hover:text-blue-500"
      >
        <RouterLink :to="'/anime/categorie/' + categorie.attributes.slug">{{
          categorie.attributes.slug
        }}</RouterLink>
      </li>
    </ul>
    <p v-if="loading" class="text-center">Loading</p>
    <button v-if="!loading && hasMore" @click="loadMore" class="text-center w-full">
      Load More
    </button>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  components: {
    RouterLink
  },
  data() {
    return {
      categories: [],
      offset: 0,
      limit: 40,
      loading: false,
      hasMore: true,
      totalCategorie: 0
    }
  },
  mounted() {
    this.getCategorie()
  },
  methods: {
    loadMore() {
      this.getCategorie()
    },
    async getCategorie() {
      try {
        this.loading = true
        const res = await fetch(
          `https://kitsu.io/api/edge/categories?page[limit]=${this.limit}&page[offset]=${this.offset}&sort=-total_media_count&fields[categories]=slug`
        )
        const data = await res.json()
        if (data && data.data) {
          this.totalCategorie = data.meta.count
          this.categories = this.categories.concat(data.data)
          this.offset += this.limit
          this.hasMore = this.offset < this.totalCategorie
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
