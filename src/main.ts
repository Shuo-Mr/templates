import { createApp } from 'vue'
import App from './App'
import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon'
import '@/style/app.scss'
import '@yzfe/svgicon/lib/svgicon.css'

import router from './router'

import vant from '@pkg/vant'

createApp(App)
    .use(VueSvgIconPlugin, {
        tagName: 'icon'
    })
    .use(router)
    .use(vant)
    .mount('#app')
