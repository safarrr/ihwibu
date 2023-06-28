<template>
  <header class="w-screen h-max fixed z-40">
    <nav
      class="flex flex-row justify-between backdrop-blur-md items-center bg-slate-500/50 m-5 rounded-xl p-5 text-white"
    >
      <RouterLink to="/" class="text-xl font-bold">Ihwibu</RouterLink>
      <button @click="() => (this.openNav = !this.openNav)" class="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <ul class="md:flex flex-row hidden">
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
    <!-- mobile -->
    <ul
      :class="`${
        openNav ? 'flex' : 'hidden'
      } flex-col justify-center items-center md:hidden backdrop-blur-md bg-slate-500/50 mx-5 rounded-xl p-5 space-y-3`"
    >
      <li v-for="(item, i) in dataLink" :key="i">
        <RouterLink
          :to="item.link"
          class="hover:underline rounded-full px-7 py-2"
          active-class="bg-white text-black"
          >{{ item.name }}</RouterLink
        >
      </li>
    </ul>
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
      openNav: false,
      dataLink: [
        {
          name: 'anime',
          link: '/anime'
        },
        {
          name: 'art',
          link: '/art'
        }
      ]
    }
  }
}
</script>
