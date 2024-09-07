<script setup lang="ts">
import { defineProps, onMounted, onUnmounted, ref, toRaw } from 'vue'
import { dispose, TresCanvas } from '@tresjs/core'
import { OrbitControls, useGLTF } from '@tresjs/cientos'
import { Object3D } from 'three'
import CanvasLoader from '@/components/element/CanvasLoader.vue'

defineProps<{ isMobile: boolean }>()
const pcScene = ref<Object3D | null>(null)
const gl = {
  shadows: true,
  renderMode: 'on-demand',
  camera: {
    fov: 25,
    position: [20, 3, 5]
  },
  preserveDrawingBuffer: true
}

onUnmounted(() => {
  dispose(pcScene.value)
})

onMounted(async () => {
  try {
    const { scene } = await useGLTF('./need_some_space/scene.gltf', { draco: true })
    if (scene) {
      pcScene.value = scene
    }
  } catch (error) {
    console.error('Failed to load GLTF model:', error)
  }
})
</script>

<template lang="pug">
  TresCanvas(v-bind="gl")
    TresPerspectiveCamera(:position="[20, 3, 5]" :args="[25, 1, 0.1, 1000]")
    OrbitControls(:enable-zoom="false" :max-polar-angle="Math.PI / 2" :min-polar-angle="Math.PI / 2")
    Suspense
      primitive(
        v-if="pcScene"
        :object="toRaw(pcScene)"
        :scale="4"
        :position="[0, 0, 0]"
        :rotation="[-0.01, -0.2, -0.1]"
      )
      template(#fallback)
        CanvasLoader
    TresHemisphereLight(:intensity="0.15", groundColor="black")
    TresSpotLight(:position="[-20, 50, 10]" :angle="0.12" :penumbra="1" :intensity="1" castShadow shadow-mapSize="1024")
    TresPointLight(:intensity="1")

</template>
