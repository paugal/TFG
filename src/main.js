import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Chat from './components/Chat.vue'
import ChatsList from './components/ChatsList.vue'
import Intro from './components/Intro.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import SendData from './components/SendData.vue'
import test from './components/test.vue'

import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core'

//Icons

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { users } from './store/users.js'
library.add(faCoffee)


const store = new Vuex.Store({
    modules: {
        users
    },
    state: {
      count: 0,
      users2: [
        {name:'player', id: 0},
        {name:'Marcos', id: 1},
        {name:'Oscar', id: 2},
        {name:'Marta', id: 3}
      ],
      chatGroups: [
        {name:'Fiesta Cumple', id: 0},
        {name:'GrupoAcoso', id: 1}
      ]
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
})

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.component('Chat',Chat)
.component('ChatsList',ChatsList)
.component('Intro',Intro)
.component('LoadingScreen',LoadingScreen)
.component('SendData',SendData)
.component('test',test)
.use(store)
.use(VueAnimXyz)
.use(Vuex)

app.mount('#app')