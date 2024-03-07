import 'primevue/resources/themes/aura-light-blue/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { pinia } from '@/app/plugins/pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './app/router'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(PrimeVue, { ripple: true })

app.mount('#app')
