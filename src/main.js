import { createApp } from 'vue'
import App from './App.vue'
import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core'

//Icons

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

const app = createApp(App).mount('#app')
.component('font-awesome-icon', FontAwesomeIcon)
.config.productionTip = false

app.use(VueAnimXyz)