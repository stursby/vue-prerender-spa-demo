import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'

import App from '@/App'
import Home from '@/components/Home'

const About = () => import('@/components/About')
const User = () => import('@/components/User')

Vue.use(VueRouter)
Vue.use(VueHead, {
  separator: '|',
  complement: 'Vue Prerender SPA Demo'
})

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/users/:id', component: User }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const root = new Vue({
  router,
  ...App
})

document.addEventListener('DOMContentLoaded', () => {
  root.$mount('#app')
})
