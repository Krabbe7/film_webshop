import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'; // Importer Pinia

// Opret en Pinia-instans
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app')


