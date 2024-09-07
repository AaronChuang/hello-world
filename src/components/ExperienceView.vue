<script setup lang="ts">
import { ref } from 'vue'
import { experiences } from '@/constants/index'
import { styles } from '@/utils/style'
import { fadeIn, textVariant } from '@/utils/motion'
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';

</script>

<template lang="pug">

div(v-motion :variants="textVariant(100)")
  p(:class="styles.sectionSubText") What I have done so far
  h2(:class="styles.sectionHeadText") Work Experience.
.mt-20.flex.flex-col
  Timeline.customized-timeline(:value="experiences", align="left")
    template(#opposite) &nbsp;
    template(#marker="slotProps")
      .flex.w-8.h-8.justify-center.items-center.rounded-full.z-10.shadow-sm.icon(:style="{ 'background-color': slotProps.item.color}")
        img.object-contain(v-if="slotProps.item.icon" :src="slotProps.item.icon" :alt="slotProps.item.company_name" class="w-[60%] h-[60%]")
    template(#content="slotProps")
      Card.ml-4.experience-card(v-if="slotProps.item.title !== ''")
        template(#title)
          h3.text-white.font-bold(class="text-[24px]") {{ slotProps.item.title }}
        template(#subtitle)
          p.text-secondary.font-semibold(class="text-[16px]") {{ slotProps.item.company_name }}
        template(#content)
          ul.mt-5.list-disc.ml-5.space-y-2
            li.text-white-100.pl-1.tracking-wider(v-for="(point, index) in slotProps.item.points" :key="'experience-point-'+index" class="text-[14px]") {{ point }}
        template(#footer)
          small {{ slotProps.item.date }}
</template>


<style lang="sass" scoped>
.experience-card
  background-color: #232631
  border-radius: 10px
  box-shadow: 0 4px 0 rgba(255, 255, 255, 0.3)
  //box-shadow: 0 0 0 2px white
  padding: 25px
  width: 100%
  h3
    font-size: 24px
  p
    font-size: 16px
  ul
    font-size: 14px
  small
    font-size: 12px
.experience-card::before
  content: ''
  position: absolute
  left: 10px
  border-width: 15px
  border-style: solid
  border-color: transparent #232631 transparent transparent
.icon
  position: absolute
  top: 34px
::v-deep(.customized-timeline)
  .p-timeline-event-opposite
    flex: 0
  .p-timeline-event-connector
    flex-grow: 1
    width: 7px
    background-color: #232631
  .p-timeline-event-content
    margin: 10px
</style>
