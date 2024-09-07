<script setup lang="ts">
import About from '@/components/AboutView.vue'
import Experience from '@/components/ExperienceView.vue'
import Tech from '@/components/TechView.vue'
import Works from '@/components/WorksView.vue'
import Contact from '@/components/ContactView.vue'
import SectionWrapper from '@/hoc/SectionWrapper.vue'
import StarsCanvas from '@/components/canvas/StarsCanvas.vue'


</script>

<template lang="pug">
SectionWrapper(:component="About" idName="about")
SectionWrapper(:component="Experience" idName="experience")
SectionWrapper(:component="Tech" idName="tech")
SectionWrapper(:component="Works" idName="works")
.relative.z-0(class="h-screen")
  SectionWrapper(:component="Contact" idName="contact")
  StarsCanvas.w-full.h-full
</template>

<style lang="sass" scoped>
</style>
