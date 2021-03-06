import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'
import Login from '@/pages/Login/index'
import Main from '@/pages/Main/index'

Vue.use(VueHead)
Vue.use(Router)

function requireAuth(to, from, next) {
  if (!localStorage.getItem('token')) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
