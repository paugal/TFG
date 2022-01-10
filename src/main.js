import { createApp } from 'vue'
import Vuex from 'vuex'

import store from './store'
import router from './router'

import App from './App.vue'
import Chat from './components/Chat.vue'
import ChatsList from './components/ChatsList.vue'
import SendData from './components/SendData.vue'
import Intro from './components/Intro.vue'
import Phone from './components/Phone.vue'
import IntroMobile from './components/mobile/IntroMobile.vue'

//Animaciones
import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core'

//Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//Scrollbar
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

//css
import './assets/styles/global-style.css'


//Librerias
import naive from "naive-ui";

//Dialogs
//import VuejsDialog from "vuejs-dialog"

library.add(faCoffee)


const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.component('Chat',Chat)
.component('ChatsList',ChatsList)
.component('Phone', Phone)
.component('SendData',SendData)
.component('intro', Intro)
.component('IntroMobile', IntroMobile)
.use(naive)
.use(store)
.use(VueAnimXyz)
.use(Vuex)
.use(PerfectScrollbar)
.use(router)

app.mount('#app')