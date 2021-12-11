import { createApp } from 'vue'
import App from './App.vue'

//Icons

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

createApp(App).mount('#app')
.component('font-awesome-icon', FontAwesomeIcon)
.config.productionTip = false
