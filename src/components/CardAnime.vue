<script>
import { RouterLink } from 'vue-router'
export default {
  props: {
    id: Number,
    title: String,
    imageUrl: String
  },
  components: {
    RouterLink
  }
  // methods: {
  //   handleClick(id) {
  //     const router = useRouter()
  //     router.push('/anime/' + id)
  //   }
  // }
  // created() {
  //   // props are exposed on `this`
  //   console.log(this.title)
  // }
}
</script>
<template>
  <RouterLink
    :to="'/anime/' + id + '/details'"
    class="flex flex-col items-center text-black shadow-lg w-max rounded-xl relative group"
  >
    <img
      :src="imageUrl"
      :alt="title"
      loading="lazy"
      class="w-36 group-hover:scale-110 delay-75 md:w-32 lg:w-48 rounded-md transition-transform ease-in-out"
    />
    <div
      class="flex flex-col items-center absolute backdrop-blur-md bg-slate-500/20 w-full bottom-0 p-2 text-white rounded-t-xl text-center group-hover:scale-105 delay-150 transition-transform ease-in-out"
    >
      <h1 class="font-semibold">{{ title }}</h1>
    </div>
    <router-view></router-view>
  </RouterLink>
</template>
