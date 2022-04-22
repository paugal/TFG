import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/TFG/Intro',
    name: 'Intro',
    component: () => import('../components/Intro.vue'),
  },
  {
    path: '/TFG/chat',
    name: 'chat',
    component: () => import('../components/newChat.vue'),
  },
  {
    path: '/TFG/',
    name: 'Home',
    component: () => import('../components/Formulario.vue'),
  },
  {
    path: '/TFG/chatslist',
    name: 'chatslist',
    component: () => import('../components/newChatList.vue')
  },
  {
    path: '/TFG/daytitle',
    name: 'daytitle',
    component: () => import( '../components/IntroDay.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  linkActiveClass: 'active'
})

export default router
