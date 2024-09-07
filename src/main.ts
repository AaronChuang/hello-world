import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import '@/styles/main.sass'
import Tres from '@tresjs/core'
import { MotionPlugin } from '@vueuse/motion'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura';

import App from './App.vue'
import About from '@/components/AboutView.vue'
import Contact from '@/components/ContactView.vue'
import Work from '@/components/WorksView.vue'
import Home from '@/components/HomeView.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes:[
    { name:'home', path: '/', component: Home},
    { name:'about', path: '/about', component: About},
    { name:'contact', path: '/contact', component: Contact},
    { name:'work', path: '/work', component: Work},
  ]
});

app.use(createPinia())
app.use(router)
app.use(Tres)
app.use(MotionPlugin)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
      }
    }
  }
});

app.mount('#app')
