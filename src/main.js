import { createApp } from 'vue'
import Vuex from 'vuex'

import store from './store'
import router from './router'

import App from './App.vue'
import Chat from './components/Chat.vue'
import ChatsList from './components/ChatsList.vue'
import SendData from './components/SendData.vue'
import Intro from './components/Intro.vue'
import IntroDay from './components/IntroDay.vue'
import Phone from './components/Phone.vue'
import IntroMobile from './components/mobile/IntroMobile.vue'

//Animaciones
import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core'

//Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueFeather from 'vue-feather';

//Scrollbar
import VueSmoothScroll from 'vue3-smooth-scroll'

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
.component('IntroDay', IntroDay)
.component('IntroMobile', IntroMobile)
.component(VueFeather.name, VueFeather)
.use(VueSmoothScroll)
.use(naive)
.use(store)
.use(VueAnimXyz)
.use(Vuex)
.use(router)

app.mount('#app')