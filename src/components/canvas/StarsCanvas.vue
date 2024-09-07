<script setup lang="ts">
import { TresCanvas, useRenderLoop } from '@tresjs/core'
import { shallowRef } from 'vue'
import { Stars } from '@tresjs/cientos'

const gl = {
  camera: {
    position: [0, 0, 1]
  },
}
const xRotation = shallowRef(0)
const yRotation = shallowRef(0)
useRenderLoop().onLoop(({ delta }) => {
  xRotation.value -= delta/100
  yRotation.value -= delta/150
})
</script>

<template lang="pug">
.w-full.h-auto.absolute.inset-0(class="z-[-1]")
  TresCanvas(v-bind="gl")
    Stars(:rotation="[xRotation, yRotation, Math.PI/4]" :radius="3" :depth=0 :count="5000" :size="0.002" :size-attenuation="true")
</template>
<style scoped lang="sass">
</style>
