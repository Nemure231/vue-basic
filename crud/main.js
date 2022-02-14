import { createApp } from 'vue'
import App from './Crud.vue'
import router from './router/crud'

createApp(App).use(router).mount('#app_crud')
