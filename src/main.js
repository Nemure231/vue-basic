import { createApp } from 'vue'
import App from './App.vue'
import router from './router/belajar'
// Mengimport global component
import Global from './components/basic/GlobalComponentChild.vue'

const app = createApp(App);
// Mendefinsikan global componen dengan nama GlobalChild
// Supaya bisa dipanggil di komponen GlobalComponent.vue
app.component('GlobalChild', Global);
app.use(router);
app.mount('#app');
