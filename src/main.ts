import './app/assets/main.css'

import { createApp } from 'vue'
import { pinia } from '@/app/plugins/pinia'
import axios from '@/app/plugins/axios'

import App from './App.vue'
import router from './app/router'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(axios)

app.mount('#app')
