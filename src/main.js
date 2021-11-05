import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from './components/BaseButton.vue';
import ProgressBar from './includes/progress-bar'
import 'nprogress/nprogress.css'

ProgressBar(router);

const app = createApp(App);
app.use(router);
app.component('BaseButton', BaseButton);
app.mount('#app');
