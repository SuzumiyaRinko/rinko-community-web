import { createRouter, createWebHashHistory } from 'vue-router'

import Cookies from "js-cookie";

import RegisterOrLogin from "@/views/RegisterOrLogin.vue"
import Main from "@/views/Main.vue"
import Home from "@/views/Home.vue"
import InsertPost from "@/views/InsertPost.vue"
import Message from "@/views/Message.vue"
import Me from "@/views/Me.vue"
import User from "@/views/User.vue"
import Post from "@/views/Post.vue"
import UpdatePost from "@/views/UpdatePost.vue"
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
      { path: 'updatePost', component: UpdatePost },
      { path: 'comment', component: Comment },
      { path: 'chat', component: Chat },
      { path: 'error', component: Error },
    ],
    beforeEnter: (to, from, next) => {
      var authToken = Cookies.get("authToken")
      if (authToken == null) {
        console.log("authToken == null")
        Cookies.set("SSO_backTo", "http://localhost/Rinko-Community/#/main/home") // dev
        // Cookies.set("SSO_backTo", "") // test
        // Cookies.set("SSO_backTo", "") // prod
        window.location.href = "http://localhost/Rinko-Community/" // SSO
      } else {
        next()
      }


      //   if (!window.sessionStorage.getItem("token")) {
      //     console.log("beforeEnter push")
      //     window.sessionStorage.clear()
      //     if (to.path == "/") {
      //       next()
      //     } else {
      //       next("/")
      //     }
      //   } else {
      //     next()
      //   }
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
