import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/TFG/',
    name: 'Home',
    component: () => import('../components/Intro.vue'),
  },
  {
    path: '/TFG/chat',
    name: 'chat',
    component: () => import('../components/Chat.vue'),
  },
  {
    path: '/TFG/send',
    name: 'send',
    component: () => import('../components/SendData.vue'),
  },
  {
    path: '/TFG/formulario',
    name: 'formulario',
    component: () => import('../components/Formulario.vue'),
  },
  {
    path: '/TFG/chatM',
    name: 'chatM',
    component: () => import('../components/mobile/ChatM.vue'),
  },
  {
    path: '/TFG/chatslist',
    name: 'chatslist',
    component: () => import( '../components/ChatsList.vue')
  },
  {
    path: '/TFG/chatslistM',
    name: 'chatslistM',
    component: () => import( '../components/mobile/ChatsListM.vue')
  },
  {
    path: '/TFG/daytitle',
    name: 'daytitle',
    component: () => import( '../components/IntroDay.vue')
  },
  {
    path: '/TFG/info',
    name: 'info',
    component: () => import('../components/Info.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  linkActiveClass: 'active'
})

export default router
