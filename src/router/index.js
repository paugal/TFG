import { createRouter, createWebHistory } from 'vue-router'
import Intro from '../components/Intro.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Intro
  },
  {
    path: '/',
    name: 'HomeMobile',
    component: () => import( '../components/mobile/IntroMobile.vue'),
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
    path: '/settings',
    name: 'settings',
    component: () => import( '../components/Settings.vue')
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
