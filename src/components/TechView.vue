<script setup lang="ts">
import BallCanvas from '@/components/canvas/BallCanvas.vue'
import { technologies} from '@/constants'

</script>

<template lang="pug">
.flex.flex-col.flex-wrap.justify-between.gap-4(v-for="(category, index) in technologies" :key="index" class="mt-10")
  h3.text-white.font-bold(class="text-[20px]" style="font-family: var(--main-font);") {{ category.title }}
  .flex.flex-wrap.gap-4.justify-start
    .flex.flex-col.items-center(v-for="(skill, i) in category.skills" :key="i")
      img.w-16.h-16.object-contain(:src="skill.icon" alt="icon")
      //.w-28.h-28
        //BallCanvas(:icon="skill.icon")
      p.text-center.text-secondary(class="text-[16px]" style="font-family: var(--main-font);") {{ skill.name }}


</template>

<style lang="sass" scoped>
</style>
