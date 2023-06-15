<script setup>
import { RouterLink } from 'vue-router'
import HeroImage from '@/assets/hero.png'
</script>
<template>
  <main>
    <section
      class="w-full flex flex-col justify-center items-center h-screen bg-cover bg-center text-white"
      :style="{ backgroundImage: `url(${HeroImage})` }"
    >
      <h1 class="text-xl font-bold">Ih Wibu</h1>
      <h2>Mencari & menumuka anime/waifu</h2>
      <div
        class="flex flex-col justify-center items-center mt-3 sm:flex-row space-y-3 sm:space-x-3"
      >
        <div
          class="bg-white flex flex-col items-center p-5 rounded-2xl backdrop-blur-md bg-white/20 transition-all hover:scale-105 ease-linear delay-100"
        >
          <h1 class="text-2xl font-bold">Anime</h1>
          <p class="text-sm">temukan judul anime</p>
          <RouterLink
            to="/anime"
            class="w-full text-center px-3 py-2 hover:bg-white hover:text-black mt-2 rounded-lg"
            >Temukan</RouterLink
          >
        </div>
        <!-- <div
          class="bg-white flex flex-col items-center p-5 rounded-2xl backdrop-blur-md bg-white/20 transition-all hover:scale-105 ease-linear delay-100"
        >
          <h1 class="text-2xl font-bold">Waifu</h1>
          <p class="text-sm">temukan waifu atau ngesimp anime</p>
          <RouterLink
            to="/waifu"
            class="w-full text-center px-3 py-2 hover:bg-white hover:text-black mt-2 rounded-lg"
            >Temukan</RouterLink
          >
        </div> -->
      </div>
    </section>
  </main>
</template>
