import { createApp } from 'vue'
import Zha from './index'
import App from './App.vue'
const app = createApp(App)
app.use(Zha)
app.mount('#app')
