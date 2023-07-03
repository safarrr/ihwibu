<template>
  <div
    class="mb-5 inline-flex items-center bg-red-200 border-2 rounded-xl border-red-500 w-full p-2 justify-center text-gray-900 space-x-2"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      />
    </svg>
    <p class="text-sm">nsfw mengandung pornografi / 18+</p>
  </div>
  <div
    class="mb-5 inline-flex items-center bg-yellow-200 border-2 rounded-xl border-yellow-500 w-full p-2 justify-center text-gray-900 space-x-2"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      class="bi bi-info-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path
        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
      />
    </svg>
    <p class="text-sm">gambar berukuran besar loading gambar akan memakan banyak waktu</p>
  </div>
  <div class="flex flex-row- justify-between">
    <div class="flex flex-col-reverse md:flex-row">
      <select v-model="categorySelect" class="bg-white py-3 px-5 md:rounded-t-lg">
        <option v-for="(c, i) in nsfw ? category.nsfw : category.sfw" :key="i" :value="c">
          {{ c }}
        </option>
      </select>
      <div>
        <button
          @click="() => (this.nsfw = true)"
          :class="`${nsfw ? 'bg-white' : ''} py-3 px-5 rounded-t-lg`"
        >
          Nsfw
        </button>
        <button
          @click="() => (this.nsfw = false)"
          :class="` ${nsfw ? '' : 'bg-white'} py-3 px-5 rounded-t-lg`"
        >
          Sfw
        </button>
      </div>
    </div>
    <div>
      <button class="bg-white px-5 py-3 rounded-t-lg" @click="handleReload">Reload</button>
    </div>
  </div>
  <h1 class="text-center bg-white p-3" v-if="loading">loading</h1>
  <section v-if="!loading" class="gap-0 columns-3xs bg-white p-3">
    <img v-for="(url, i) in artData" :key="i" :src="url" :alt="'image in ' + i" loading="lazy" />
  </section>
</template>
<script>
export default {
  data() {
    return {
      nsfw: false,
      categorySelect: 'waifu',
      loading: false,
      artData: [],
      category: {
        sfw: [
          'waifu',
          'neko',
          'shinobu',
          'megumin',
          'bully',
          'cuddle',
          'cry',
          'hug',
          'awoo',
          'kiss',
          'lick',
          'pat',
          'smug',
          'bonk',
          'yeet',
          'blush',
          'smile',
          'wave',
          'highfive',
          'handhold',
          'nom',
          'bite',
          'glomp',
          'slap',
          'kill',
          'kick',
          'happy',
          'wink',
          'poke',
          'dance',
          'cringe'
        ],
        nsfw: ['waifu', 'neko', 'trap', 'blowjob']
      }
    }
  },
  mounted() {
    this.getArt('sfw', 'waifu')
  },
  methods: {
    async getArt(type, category) {
      try {
        this.loading = true
        const res = await fetch(`https://api.waifu.pics/many/${type}/${category}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ exclude: [] })
        })
        const data = await res.json()
        if (data) {
          this.artData = data.files
        }
      } catch (error) {
        console.error('Invalid API response')
      } finally {
        this.loading = false
      }
    },
    handleReload() {
      // console.log(this.categorySelect, this.nsfw)
      this.getArt(this.nsfw ? 'nsfw' : 'sfw', this.categorySelect)
    }
  }
}
</script>
<style>
/* .grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1);
  /* grid-template-rows: repeat(8, 50px); 
  grid-auto-flow: dense;
} */
</style>
