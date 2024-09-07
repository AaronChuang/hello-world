<script setup lang="ts">
import { styles } from '@/utils/style'
import { navLinks } from '@/constants'
import { logo, github, linkedin, resume ,menu, close } from '@/utils/assets'
import { computed, ref } from 'vue'
import { usePageStore } from '@/stores/page'

const pageStore = usePageStore()
const { setActive } = pageStore
const active = computed(() => pageStore.activePage)

const toggle = ref(false)
</script>

<template lang="pug">
  nav.w-full.flex.items-center.py-5.fixed.top-0.z-20.bg-primary(:class="styles.paddingX")
    .w-full.flex.justify-between.items-center.max-w-7xl.mx-auto
      .flex.justify-start.gap-3.items-center
        a.flex.items-center.gap-2(href="#")
          img.rounded-full.w-9.h-9.object-contain(:src="logo" alt="logo")
          p.text-white.font-bold.cursor-pointer.flex(class="text-[18px]") Aaron &nbsp;
            span(class="sm:block hidden") | Software Developer
        a(href="https://github.com/AaronChuang" target="_blank")
          .rounded-full.w-6.h-6.bg-white.flex.items-center.justify-center
            img.rounded-full.w-5.h-5.object-contain(:src="github" alt="github")
        a(href="https://www.linkedin.com/in/chi-ju-chuang-133a12142" target="_blank")
          .rounded-full.w-6.h-6.bg-white.flex.items-center.justify-center
            img.w-4.h-4.object-contain(:src="linkedin" alt="linkedin")
        a(href="file/resume.pdf" download="resume.pdf")
          .rounded-full.w-6.h-6.bg-white.flex.items-center.justify-center
            img.rounded-full.w-5.h-5.object-contain(:src="resume" alt="resume")
      ul.list-none.hidden.flex-row.gap-10(class="sm:flex")
        li(v-for="link in navLinks" :key="link.id"
          :class="[active === link.title ? 'text-white' : 'text-secondary', 'hover:text-white',  'text-[18px]','font-medium','cursor-pointer']"
          @click="setActive(link.title)")
          a(:href="'#'+link.id") {{ link.title }}
      .flex.flex-1.justify-end.items-center(class="sm:hidden")
        img.object-contain.cursor-pointer(:src="toggle ? close: menu" alt="menu" class="w-[28px] h-[28px]" @click="toggle = !toggle")
        .p-6.black-gradient.absolute.top-20.right-0.mx-4.my-2.z-10.rounded-xl(:class="[!toggle ? 'hidden': 'flex', 'min-w-[140px]']")
          ul.list-none.flex.justify-end.items-start.flex-col.gap-4
            li(v-for="link in navLinks" :key="link.id"
              :class="[active === link.title ? 'text-white' : 'text-secondary', 'font-poppins', 'font-medium', 'text-[16px]', 'cursor-pointer']"
              @click="setActive(link.title); toggle = !toggle")
              a(:href="'#'+link.id") {{ link.title }}
</template>

<style lang="sass" scoped></style>
