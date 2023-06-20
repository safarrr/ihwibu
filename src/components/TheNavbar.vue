
<template>
  <header class="w-screen h-max fixed z-40">
    <nav
      class="flex flex-row justify-between backdrop-blur-md items-center bg-slate-500/50 m-5 rounded-xl p-5 text-white"
    >
      <RouterLink to="/" class="text-xl font-bold">Ihwibu</RouterLink>
      <ul class="flex flex-row">
        <li v-for="(item, i) in dataLink" :key="i">
          <RouterLink
            :to="item.link"
            class="hover:underline rounded-full px-7 py-2"
            active-class="bg-white text-black"
            >{{ item.name }}</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import { RouterLink } from 'vue-router'
export default {
  components: {
    RouterLink
  },
  data() {
    return {
      dataLink: [
        {
          name: 'anime',
          link: '/anime'
        }
      ]
    }
  }
}
</script>