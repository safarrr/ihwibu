<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
// export default {
//   components: { Navbar }
// }
</script>

<template>
  <TheNavbar />
  <RouterView />
  <TheFooter />
</template>
