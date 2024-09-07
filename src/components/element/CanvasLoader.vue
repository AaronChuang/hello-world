<script setup lang="ts">
import { useGLTF, useProgress } from '@tresjs/cientos'
import { onMounted, ref } from 'vue'
const progress = ref<number>(0)

onMounted(async () => {
  const { hasFinishLoading, progress, items } = await useProgress()
  console.log(hasFinishLoading, progress, items)
})
</script>

<template lang="pug">
.wrapper
  span.canvas-loader
  p.canvas-font
</template>

<style lang="sass" scoped>
.wrapper
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  color: white
  background: white

.canvas-font
  font-size: 14px
  color: #f1f1f1
  font-weight: 800
  margin-top: 40px
</style>
