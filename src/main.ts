import './app/assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'
import { pinia } from '@/app/plugins/pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './app/router'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(PrimeVue)

app.mount('#app')
