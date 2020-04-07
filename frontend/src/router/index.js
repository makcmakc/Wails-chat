import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'chat',
    component: () => import('../views/Chat.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => ('../components/users/v-users-list.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => ('../components/users/chat/v-user-chat.vue'),
    props: true
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
