<script setup lang="ts">
import Navbar from '@/components/element/CustomNavbar.vue'
import Hero from '@/components/element/HeroDisplay.vue'

</script>

<template lang="pug">
.relative.z-0.bg-primary
  .bg-hero-patttern.bg-cover.bg-no-repeat.bg-center
    Navbar
    Hero
  router-view


</template>

<style lang="sass">

</style>
