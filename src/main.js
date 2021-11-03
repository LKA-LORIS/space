import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ProgressBar from './includes/progress-bar'
import 'nprogress/nprogress.css'

ProgressBar(router);

createApp(App).use(router).mount('#app')
