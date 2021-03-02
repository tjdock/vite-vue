import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store';
import ant from './utils/ant';
import './utils/rem'
import 'lib-flexible/flexible';
import 'vant/lib/index.css';

createApp(App)
    .use(router)
    .use(store)
    .use(ant)
    .mount('#app')
