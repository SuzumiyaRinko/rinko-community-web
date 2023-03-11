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
    ],
    beforeEnter: (to, from, next) => {
      // 没有token直接回登录页（比如我直接复制某个url到另一个窗口，就会触发这个）
      var token = window.sessionStorage.getItem("token");
      console.log("token", token)
      if (token == null || token.length == 0) {
        console.log("beforeEnter push");
        window.sessionStorage.clear()
        next("/")
        return;
      }

      next()
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
