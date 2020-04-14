import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: () => import('../views/Chat.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'login'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => ('')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => (''),
    props: true
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
