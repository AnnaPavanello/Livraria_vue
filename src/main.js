// import './assets/main.css' <-- Comentei esta linha para parar de quebrar o layout!

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')