<script setup lang="ts">
import { styles } from '@/utils/style'
import ComputersCanvas from '@/components/canvas/ComputersCanvas.vue'
import { usePageStore } from '@/stores/page'
import { computed, onMounted } from 'vue'
const pageStore = usePageStore()
const { setIsMobile } = pageStore
const isMobile = computed(() => pageStore.isMobile);


onMounted(() => {
  const mediaQuery = window.matchMedia('(max-width: 500px)');
  setIsMobile(mediaQuery.matches);
  mediaQuery.addEventListener('change', (e) => {
    setIsMobile(e.matches);
  });
})
</script>

<template lang="pug">
  section.relative.w-full.h-screen.mx-auto
    .absolute.inset-0.max-w-7xl.mx-auto.flex.flex-row.items-start.gap-5(:class="[styles.paddingX, 'top-[120px]']")
      .flex.flex-col.justify-center.items-center.mt-5
        .w-5.h-5.rounded-full(class="bg-[#915eff]")
        .w-1.h-40.violet-gradient(class="sm:h-80")
      div
        h1.text-white(:class="styles.heroHeadText") Hi, I'm
          span(class="text-[#915eff]") Aaron
        p.mt-2.text-white-100(:class="styles.heroSubText")
          | I'm a software developer,
          br(class="sm:block hidden")
          |full-stack web developer, and a computer science student.
    ComputersCanvas(:is-mobile="isMobile")
    .absolute.bottom-32.w-full.flex.justify-center.items-center(class="xs:bottom-10")
      a(href="#about")
        .rounded-3xl.border-4.border-secondary.flex.justify-center.items-start.p-2(class="w-[35px] h-[64px]")
          .w-3.h-3.rounded-full.bg-secondary.mb-1(v-motion :initial="{y: 0}" :enter="{ y:24, transition: { duration: 1000, repeat: Infinity, repeatType: 'mirror'}}")



</template>

<style lang="sass" scoped></style>
