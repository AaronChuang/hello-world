<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRaw } from 'vue'
import { dispose, TresCanvas } from '@tresjs/core'
import { OrbitControls, useGLTF, useProgress } from '@tresjs/cientos'
import { Object3D } from 'three'
import CanvasLoader from '@/components/element/CanvasLoader.vue'

const earthScene = ref<Object3D | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const gl = {
  shadows: true,
  renderMode: 'on-demand',
  dpr: [1, 2],
  camera: {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [-4, 3, 6]
  },
  preserveDrawingBuffer: true
}

onMounted(async () => {
  try {
    const { scene } = await useGLTF('./planet/scene.gltf', { draco: true })
    if (scene) {
      earthScene.value = scene
    }
  } catch (error) {
    console.error('Failed to load GLTF model:', error)
  }
})

onUnmounted(() => {
  dispose(earthScene.value)
})
</script>

<template lang="pug">
  TresCanvas(v-bind="gl")
    TresPerspectiveCamera(:position="[-4, 3, 6]" :fov="45" :near="0.1" :far="200")
    OrbitControls(:auto-rotate="true" :enable-zoom="false" :max-polar-angle="Math.PI / 2" :min-polar-angle="Math.PI / 2")
    Suspense
      primitive(
        v-if="earthScene"
        :object="toRaw(earthScene)"
        :scale="1.5"
        :position-y="0"
        :rotation-y="0"
      )
      template(#fallback)
        CanvasLoader
</template>

<style scoped lang="sass"></style>
