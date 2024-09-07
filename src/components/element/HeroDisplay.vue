<script setup lang="ts">
import { styles } from '@/utils/style'
import ComputersCanvas from '@/components/canvas/ComputersCanvas.vue'
import { usePageStore } from '@/stores/page'
import { computed, onMounted } from 'vue'
const pageStore = usePageStore()
const { setIsMobile } = pageStore
const isMobile = computed(() => pageStore.isMobile);


onMounted(() => {
  const mediaQuery = window.matchMedia('(max-width: 500px)')
  setIsMobile(mediaQuery.matches)
  mediaQuery.addEventListener('change', (e) => {
    setIsMobile(e.matches)
  })
})
</script>

<template lang="pug">
  section.relative.w-full.h-screen.mx-auto
    .absolute.inset-0.max-w-7xl.mx-auto.flex.flex-row.items-start.gap-5(:class="[styles.paddingX, 'top-[120px]']")
      .flex.flex-col.items-center.h-full
        .w-5.h-5.rounded-full(class="bg-[#915eff]")
        .w-1.h-full.violet-gradient
      .flex.flex-col.w-full.gap-10
        .flex.justify-between
          .flex.flex-col
            h1.text-white(:class="styles.heroHeadText") 嗨，我叫
              span(class="text-[#915eff]") Aaron
            p.mt-2.text-white-100(:class="styles.heroSubText")
              | 我是一位熱愛軟體開發的全端工程師，
              br(class="sm:block hidden")
            p.mt-2.text-white-100(:class="styles.heroSubText")
              | 擁有超過 10 年的業界經驗，
              br(class="sm:block hidden")
            p.mt-2.text-white-100(:class="styles.heroSubText")
              | 渴望運用我的技能打造創新且具影響力的解決方案。
          .w-72.h-72
            ComputersCanvas(:is-mobile="isMobile")
        .flex.flex-wrap.gap-4.justify-center.mt-4
          img.w-72.h-auto.flex-grow(src="https://github-readme-stats.vercel.app/api/top-langs?username=AaronChuang&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="Most Used Languages")
          img.w-72.h-auto.flex-grow(src="https://github-readme-stats.vercel.app/api?username=AaronChuang&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="GitHub Status")
          img.w-72.h-auto.flex-grow(src="https://github-readme-streak-stats.herokuapp.com?user=AaronChuang&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="Current Streak")
</template>

<style lang="sass" scoped></style>
