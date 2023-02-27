import { createRouter, createWebHashHistory } from 'vue-router'

import RegisterOrLogin from "@/views/RegisterOrLogin.vue"
import Home from "@/views/Home.vue"
import Message from "@/views/Message.vue"
import Me from "@/views/Me.vue"
import User from "@/views/User.vue"
import Post from "@/views/Post.vue"
import Comment from "@/views/Comment.vue"

const routes = [
  {
    path: '/',
    name: 'registerOrLogin',
    component: RegisterOrLogin,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    beforeEnter: (to, from) => {
      // if (!(from.name == "post" || to.name == "user" || to.name == "me")) {
      //   window.sessionStorage.setItem("homeScroll", 0);
      //   window.sessionStorage.setItem("homePage", 1);
      // }
    },
  },
  {
    path: '/message',
    name: 'message',
    component: Message,
  },
  {
    path: '/me',
    name: 'me',
    component: Me,
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/user',
    name: 'user',
    component: User,
  },
  {
    path: '/post',
    name: 'post',
    component: Post,
  },
  {
    path: '/comment',
    name: 'comment',
    component: Comment,
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
