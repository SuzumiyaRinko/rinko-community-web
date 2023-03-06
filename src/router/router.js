import { createRouter, createWebHashHistory } from 'vue-router'

import RegisterOrLogin from "@/views/RegisterOrLogin.vue"
import Main from "@/views/Main.vue"
import Home from "@/views/Home.vue"
import InsertPost from "@/views/InsertPost.vue"
import Message from "@/views/Message.vue"
import Me from "@/views/Me.vue"
import User from "@/views/User.vue"
import Post from "@/views/Post.vue"
import Comment from "@/views/Comment.vue"
import Chat from "@/views/Chat.vue"
import Error from "@/views/Error.vue"

const routes = [
  {
    path: '/',
    name: 'registerOrLogin',
    component: RegisterOrLogin,
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    children: [
      { path: 'home', component: Home },
      { path: 'message', component: Message },
      { path: 'me', component: Me },
      { path: 'insertPost', component: InsertPost },
      { path: 'user', component: User },
      { path: 'post', component: Post },
      { path: 'comment', component: Comment },
      { path: 'chat', component: Chat },
      { path: 'error', component: Error },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
