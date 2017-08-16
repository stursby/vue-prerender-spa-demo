import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '@/App'
import Home from '@/components/Home'

const About = () => import(/* webpackChunkName: "about" */ '@/components/About')
const User = () => import(/* webpackChunkName: "user" */ '@/components/User')

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/users/:id', component: User }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  ...App
})
