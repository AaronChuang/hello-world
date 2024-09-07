<script setup lang="ts">
import BallCanvas from '@/components/canvas/BallCanvas.vue'
import { technologies} from '@/constants'

</script>

<template lang="pug">
.flex.flex-row.flex-wrap.justify-center.gap-10
  .w-28.h-28(v-for="tech in technologies" :key="tech.name")
    BallCanvas(:icon="tech.icon")
</template>

<style lang="sass" scoped>
</style>
