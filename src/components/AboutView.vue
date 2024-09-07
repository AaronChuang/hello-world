<script setup lang="ts">
import { intro, services } from '@/constants'
import { styles } from '@/utils/style'
import Card from 'primevue/card'
</script>

<template lang="pug">
  div(v-motion :initial="{y: -50, opacity: 0}"
    :enter="{y: 0, opacity: 1, transition: {duration: 1.25, delay: 0.1}}")
    p(:class="styles.sectionSubText" style="font-family: var(--main-font);") Introduction
    h2(:class="styles.sectionHeadText" style="font-family: var(--main-font);") Overview

  p.mt-4.mb-8.text-secondary(class="text-[17px] leading-[30px]" v-motion :initial="{x:-100, y:0, opacity: 0 }"
    :enter="{ x:0, y:0, opacity: 1, transition: { delay: 0.1, duration: 1}}"  style="font-family: var(--main-font);")
    | {{ intro }}

  hr.border-gray-300.my-6

  .flex.flex-row.flex-wrap.justify-between.gap-4.p-10
    Card.w-64.h-64.green-pink-gradient.shadow-md.rounded-3xl(
      v-for="(service, index) in services"
      v-motion :initial="{scale: 1, x:-100, y:0, opacity: 0 }"
      :enter="{scale: 1,  x:0, y:0, opacity: 1, transition: { delay: index * 0.5, duration: 0.75}}"
      :hovered="{ scale: 1.1, transition: { type: 'spring', ease:'easeOut', damping: 8, stiffness: 500} }"
    )
      template(#content)
        .bg-tertiary.py-5.px-12.flex.flex-col.justify-center.items-center.min-h-60.rounded-3xl
          img.w-16.h-16.object-contain(:src="service.icon" alt="icon")
          h3.text-white.font-bold.text-center(class="text-[20px]" style="font-family: var(--main-font);") {{ service.title }}


</template>

<style lang="sass" scoped></style>
