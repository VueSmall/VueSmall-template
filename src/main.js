import {createApp} from 'vue'
import App from './App.vue'
import 'vant/lib/index.css'
import {NoticeBar} from "vant";

const app = createApp(App)
app.use(NoticeBar)
app.mount('#app')