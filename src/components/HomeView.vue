<script setup lang="ts">
import About from '@/components/AboutView.vue'
import Experience from '@/components/ExperienceView.vue'
import Tech from '@/components/TechView.vue'
import Contact from '@/components/ContactView.vue'
import SectionWrapper from '@/hoc/SectionWrapper.vue'
</script>

<template lang="pug">
  SectionWrapper(:component="About" idName="about")
  SectionWrapper(:component="Experience" idName="works")
  SectionWrapper(:component="Tech" idName="tech")
  .relative.z-0(class="h-screen")
    SectionWrapper(:component="Contact" idName="contact")
</template>

<style lang="sass" scoped></style>
