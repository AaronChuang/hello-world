<script setup lang="ts">
import { defineProps, onMounted, ref, toRaw } from 'vue'
import { TresCanvas, useTexture } from '@tresjs/core'
import { OrbitControls, Levioso } from '@tresjs/cientos'
import CanvasLoader from '@/components/element/CanvasLoader.vue'
import { Texture, Vector3, Euler } from 'three'
import { DecalGeometry } from 'three-stdlib'

const props = defineProps<{ icon: string }>()
const targetMesh = ref();
const decalGeometry = ref();
const gl = {
  renderMode: 'on-demand',
  dpr: [1, 2],
  preserveDrawingBuffer: true
}
const iconTexture = ref<Texture | null>(null)
onMounted( async () => {
  const { map }= await useTexture({map: props.icon})
  iconTexture.value = map
  const target = targetMesh.value;
  if (target && iconTexture.value) {
    decalGeometry.value = new DecalGeometry(
      target,
      new Vector3(0, 0, 1),
      new Euler(2 * Math.PI, 0, 6.25),
      new Vector3(1, 1, 1)
    );
  }
})
</script>

<template lang="pug">
TresCanvas(v-bind="gl")
  TresPerspectiveCamera
  OrbitControls(:enable-zoom="false" )
  Levioso(:speed="1.75" :rotationFactor="1" :floatFactor="2")
    TresAmbientLight(:intensity="0.25")
    TresDirectionalLight(:position="[0, 0, 0.05]")
    TresMesh(ref="targetMesh" :cast-shadow="true" :receive-shadow="true" :scale="2")
      TresIcosahedronGeometry(:radius="1" :detail="1")
      Suspense
        TresMeshStandardMaterial(:color="'#fff8eb'" :polygon-offset="true" :polygon-offset-factor="-5"
              :flat-shading="true")
        template(#fallback)
          CanvasLoader
    TresMesh(v-if="decalGeometry" :geometry="decalGeometry" :scale="2")
      TresMeshStandardMaterial(:map="iconTexture" :transparent="true" :depth-test="false" :depth-write="false" :flat-shading="true")
</template>
