import { createRouter, createWebHashHistory } from 'vue-router'

import RegisterOrLogin from "@/views/RegisterOrLogin"
import Home from "@/views/Home"

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
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
