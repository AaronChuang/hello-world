<script setup lang="ts">
import { projects } from '@/constants'
import { styles } from '@/utils/style'
import Card from 'primevue/card'
import { github } from '@/utils/assets'
</script>

<template lang="pug">
  div(v-motion :initial="{y: -50, opacity: 0}"
    :enter="{y: 0, opacity: 1, transition: { duration: 1.25, delay: 0.1}}")
    p(:class="styles.sectionSubText") My work
    h2(:class="styles.sectionHeadText") Projects.
  .w-full.flex
    p.mt-3.text-secondary.max-w-3xl(class="text-[17px] leading-[30px]" v-motion :initial="{x:0, y: 0, opacity: 0}"
      :enter="{x:0, y: 0, opacity: 1, transition: { duration: 1, delay: 0.1}}")
      | Following projects showcases my skills and experience through
      |  real-world examples of my work. Each project is briefly described with
      |  links to code repositories and live demos in it. It reflects my
      |  ability to solve complex problems, work with different technologies,
      |  and manage projects effectively.
  .w-full.flex.flex-row.flex-wrap.justify-between.gap-4.p-10
    Card.bg-tertiary.p-5.rounded-2xl.project-card(class="w-[330px]" v-for="(project, index) in projects"
      v-motion :initial="{scale: 1, x:0, y:100, opacity: 0 }"
      :enter="{scale: 1,  x:0, y:0, opacity: 1, transition: { delay: index * 0.5, duration: 0.75}}"
      :hovered="{ scale: 1.1, transition: { type: 'spring', ease:'easeOut', damping: 8, stiffness: 500} }")
      template(#title)
        .relative.w-full.rounded-2xl(class="h-[230px]")
          img.h-full.object-cover.rounded-2xl(:src="project.image" alt="project_image")
          .absolute.inset-0.flex.justify-end.m-3.card-img_hover
            .black-gradient.w-10.h-10.rounded-full.flex.justify-center.items-center.cursor-pointer(@click=() => window.open(project.source_code_link, "_blank"))
              img(:src="github" alt="source code" class="w-1/2 h-1/2 object-contain")
      template(#subtitle)
        .mt-5
          h3.text-white.font-bold(class="text-[24px]") {{ project.name }}
      template(#content)
        .mt-5(class="min-h-[150px]")
          p.mt-2.text-secondary(class="text-[14px]") {{ project.description }}
      template(#footer)
        .flex.flex-wrap.gap-2
          p(v-for="tag in project.tags" :key="`${project.name}-${tag.name}`" :class="`text-[14px] ${tag.color}`") {{tag.name}}
</template>

<style lang="sass" scoped>
.project-card
  background-color: #232631
  border-radius: 10px
  padding: 25px

  h3
    font-size: 24px

  p
    font-size: 16px

  ul
    font-size: 14px

  small
    font-size: 12px
</style>
