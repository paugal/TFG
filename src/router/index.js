import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Intro.vue'),
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../components/Chat.vue'),
  },
  {
    path: '/chatslist',
    name: 'chatslist',
    component: () => import( '../components/ChatsList.vue')
  },
  {
    path: '/daytitle',
    name: 'daytitle',
    component: () => import( '../components/IntroDay.vue')
  },
  {
    path: '/info',
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
