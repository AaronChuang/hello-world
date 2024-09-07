<script setup lang="ts">
import { services } from '@/constants'
import { styles } from '@/utils/style'
import { fadeIn, textVariant } from '@/utils/motion'
import Card from 'primevue/card';

</script>

<template lang="pug">
div(v-motion :variants="textVariant(100)")
  p(:class="styles.sectionSubText") Introduction
  h2(:class="styles.sectionHeadText") Overview
p.mt-4.text-secondary.max-w-3xl(class="text-[17px] leading-[30px]" v-motion :variants="fadeIn('', '', 100, 1000)")
  | I am a full-stack developer with a passion for creating beautiful and functional websites.
  | I have experience in both front-end and back-end development, and I am always looking to learn new technologies and improve my skills.
  | I am proficient in HTML, CSS, JavaScript, and various front-end frameworks such as Vue.js and React.
  | I also have experience with back-end technologies such as Node.js, Express, and MongoDB.
  | I am a quick learner and a problem solver, and I am always looking for new challenges to tackle.
.flex.flex-row.flex-wrap.justify-between.gap-4.p-10
  Card.w-64.h-64.green-pink-gradient.shadow-md.rounded-3xl(
    v-for="(service, index) in services"
    v-motion :variants="fadeIn('right', 'spring', index * 500, 750)"
  )
    template(#content)
      .bg-tertiary.py-5.px-12.flex.flex-col.justify-center.items-center.min-h-60.rounded-3xl
        img.w-16.h-16.object-contain(:src="service.icon" alt="icon")
        h3.text-white.font-bold.text-center(class="text-[20px]") {{ service.title }}
</template>

<style lang="sass" scoped>

</style>
