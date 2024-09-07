<script setup lang="ts">
import {styles} from '@/utils/style'
import {defineProps } from 'vue'

const props = defineProps<{component:any, idName:string}>()
</script>

<template lang="pug">
section.max-w-7xl.mx-auto.relative.z-0(:class="styles.padding" v-motion-slide-visible-once-bottom :duration="250")
  span.hash-span(:id="props.idName") &nbsp;
  component(:is="props.component")
</template>

<style scoped lang="sass">

</style>
