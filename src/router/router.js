import { createRouter, createWebHashHistory } from 'vue-router'

import RegisterOrLogin from "@/views/RegisterOrLogin.vue"
import Home from "@/views/Home.vue"
import Message from "@/views/Message.vue"
import Me from "@/views/Me.vue"
import User from "@/views/User.vue"
import Post from "@/views/Post.vue"

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
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/post',
    name: 'post',
    component: Post
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
