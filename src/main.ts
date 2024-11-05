import App from './App.vue'
import router from './routes'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

//Styles
import './style.css'
import 'ant-design-vue/dist/reset.css'

const app = createApp(App)
app.use(router)
app.use(createPinia())

app.mount('#app')
