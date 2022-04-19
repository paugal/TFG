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

//Animaciones
import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core'

//Icons
import VueFeather from 'vue-feather';

//css
import './assets/styles/global-style.css'

const app = createApp(App)
            .component('Chat',Chat)
            .component('ChatsList',ChatsList)
            .component('Phone', Phone)
            .component('SendData',SendData)
            .component('Intro', Intro)
            .component('IntroDay', IntroDay)
            .component(VueFeather.name, VueFeather)
            .use(store)
            .use(VueAnimXyz)
            .use(Vuex)
            .use(router)

app.mount('#app')