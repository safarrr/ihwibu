<template>
  <section class="flex flex-col bg-white p-3 rounded-lg">
    <h1 class="text-center text-xl font-bold">Tentang</h1>
    <p class="text-sm text-center">
      <b>Ihwibu</b> adalah sebuah portal informasi untuk para wibu di indonesia.
    </p>
    <p class="text-sm text-center">
      semua data berasal dari pihak ketiga dan website ini bersifat open source,
      <a
        href="https://github.com/safarrr/ihwibu"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:underline hover:text-blue-500"
        >github</a
      >
    </p>
    <h2 class="text-lg font-semibold text-center mt-5">Fitur</h2>
    <ul class="flex flex-col md:flex-row items-center justify-center text-center">
      <li
        v-for="(data, i) in fitur"
        :key="i"
        class="flex flex-col p-3 bg-neutral-100 rounded-lg w-60 m-2"
      >
        <h3 class="text-bold capitalize">{{ data.name }}</h3>
        <p class="text-xs">{{ data.description }}</p>
        <span class="text-xs"
          >data berasal dari
          <a
            :href="data.dataSource.link"
            class="hover:text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            >{{ data.dataSource.name }}</a
          >
        </span>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      fitur: [
        {
          name: 'anime',
          description: 'informasi terkait anime',
          dataSource: {
            name: 'kitsu.io',
            link: 'https://kitsu.io'
          }
        },
        {
          name: 'art',
          description: 'menampilkan gambar/gif terkait anime',
          dataSource: {
            name: 'waifu.pics',
            link: 'https://waifu.pics'
          }
        },
        {
          name: 'quotes',
          description: 'quotes untuk menyemangati wibu ',
          dataSource: {
            name: 'kataanime',
            link: 'https://katanime.vercel.app/'
          }
        }
      ]
    }
  }
}
</script>
