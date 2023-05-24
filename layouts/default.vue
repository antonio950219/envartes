<script lang="ts">
import HomePage from "../pages/index.vue"
import Footer from "@/components/Footer.vue";

export default {
  name: 'Default',
  components: {
    HomePage,
    Footer
  }
}
</script>

<template>
  <section class="relative flex flex-col">
    <Header />
    <HomePage />
    <Footer />
  </section>
</template>

<style scoped>
</style>