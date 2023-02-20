import { createRouter, createWebHashHistory } from 'vue-router'

import RegisterOrLogin from "@/views/RegisterOrLogin.vue"
import Home from "@/views/Home.vue"
import Message from "@/views/Message.vue"
import Me from "@/views/Me.vue"

const routes = [
  {
    path: '/',
    name: 'registerOrLogin',
    component: RegisterOrLogin
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/message',
    name: 'message',
    component: Message
  },
  {
    path: '/me',
    name: 'me',
    component: Me
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
