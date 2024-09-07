<script setup lang="ts">
import { styles } from '@/utils/style'
import { navLinks } from '@/constants'
import { logo, menu, close } from '@/utils/assets'
import { computed, ref } from 'vue'
import { usePageStore } from '@/stores/page'
const pageStore = usePageStore()
const { setActive } = pageStore
const active = computed(() => pageStore.activePage);

const toggle = ref(false)

</script>

<template lang="pug">
  nav.w-full.flex.items-center.py-5.fixed.top-0.z-20.bg-primary(:class="styles.paddingX")
    .w-full.flex.justify-between.items-center.max-w-7xl.mx-auto
      router-link.flex.items-center.gap-2(to="/" @click="setActive('Home')")
        img.w-9.h-9.object-contain(:src="logo" alt="logo")
        p.text-white.font-bold.cursor-pointer.flex(class="text-[18px]") Aaron &nbsp;
          span(class="sm:block hidden") | Software Developer
      ul.list-none.hidden.flex-row.gap-10(class="sm:flex")
        li(v-for="link in navLinks" :key="link.id"
          :class="[active === link.title ? 'text-white' : 'text-secondary', 'hover:text-white',  'text-[18px]','font-medium','cursor-pointer']"
          @click="setActive(link.title)")
          router-link(:to="link.id") {{ link.title }}
      .flex.flex-1.justify-end.items-center(class="sm:hidden")
        img.object-contain.cursor-pointer(:src="toggle ? close: menu" alt="menu" class="w-[28px] h-[28px]" @click="toggle = !toggle")
        .p-6.black-gradient.absolute.top-20.right-0.mx-4.my-2.z-10.rounded-xl(:class="[!toggle ? 'hidden': 'flex', 'min-w-[140px]']")
          ul.list-none.flex.justify-end.items-start.flex-col.gap-4
            li(v-for="link in navLinks" :key="link.id"
              :class="[active === link.title ? 'text-white' : 'text-secondary', 'font-poppins', 'font-medium', 'text-[16px]', 'cursor-pointer']"
              @click="setActive(link.title); toggle = !toggle")
              router-link(:to="link.id") {{ link.title }}
</template>

<style lang="sass" scoped></style>
