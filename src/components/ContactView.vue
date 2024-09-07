<script setup lang="ts">
import { ref } from 'vue'
import { styles } from '@/utils/style'
import emailjs from '@emailjs/browser'
import EarthCanvas from '@/components/canvas/EarthCanvas.vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const handleSubmit = () => {
  loading.value = true

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const formName = form.value.name
  const formEmail = form.value.email
  const formMessage = form.value.message

  const templateParams = {
    name: formName,
    email: formEmail,
    message: formMessage
  }

  emailjs.send(serviceID, templateID, templateParams, { publicKey: publicKey }).then(
    (result) => {
      form.value = {
        name: '',
        email: '',
        message: ''
      }
      loading.value = false
    },
    (error) => {
      loading.value = false
      console.error('Failed to send email. Error:', error)
    }
  )
}
</script>

<template lang="pug">
  .flex.flex-col.flex-col-reverse.gap-10.overflow-hidden(class="xl:flex-row")
    .bg-black-100.p-8.rounded-2xl(class="flex-[0.5]" v-motion :initial="{scale: 1, x:100, y:0, opacity: 0 }"
      :enter="{scale: 1, x:0, y:0, opacity: 1, transition: { type: 'tween', ease:'easeOut', delay: 0.2, duration: 1}}")
      p(:class="styles.sectionSubText") Get in touch
      h2(:class="styles.sectionHeadText") Contact.
      form.mt-12.flex.flex-col.gap-8(@submit.prevent="handleSubmit")
        label.flex.flex-col
          span.text-white.font-medium.mb-4 Your Name
          input.bg-tertiary.py-4.px-6.text-white.rounded-lg.outline-none.border-none.font-medium(
            type="text" class="placeholder:text-secondary" name="name" v-model="form.name"
            placeholder="What's your good name?")
        label.flex.flex-col
          span.text-white.font-medium.mb-4 Your email
          input.bg-tertiary.py-4.px-6.text-white.rounded-lg.outline-none.border-none.font-medium(
            type="email" class="placeholder:text-secondary" name="email" v-model="form.email"
            placeholder="What's your web address?")
        label.flex.flex-col
          span.text-white.font-medium.mb-4 Your Message
          textarea.bg-tertiary.py-4.px-6.text-white.rounded-lg.outline-none.border-none.font-medium(
            rows="7" class="placeholder:text-secondary" name="message" v-model="form.message"
            placeholder="What you want to say?")
        button.bg-tertiary.py-3.px-8.rounded-xl.outline-none.w-fit.text-white.font-bold.shadow-md.shadow-primary(
          type="submit" :disabled="loading") {{ loading ? 'Sending...' : 'Send' }}
    div(class="flex-[0.5]" v-motion :initial="{scale: 1, x:100, y:0, opacity: 0 }"
      :enter="{scale: 1,  x:0, y:0, opacity: 1, transition: {type:'tween' ,delay: 0.2, duration: 1, ease: 'easeOut'}}"
    )
      EarthCanvas
</template>

<style lang="sass" scoped></style>
