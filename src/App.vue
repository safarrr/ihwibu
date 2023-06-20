<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <TheNavbar />
  <div :class="$route.path === '/' ? '' : 'pt-28 px-5'">
    <RouterView />
  </div>
  <TheFooter />
</template>
<style>
body {
  @apply bg-neutral-100;
}
</style>
