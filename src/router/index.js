import Vue from 'vue';
import Router from 'vue-router';
import VueHead from 'vue-head';
import Hello from '@/components/Hello';

Vue.use(VueHead);
Vue.use(Router);

function requireAuth(to, from, next) {
  if (!localStorage.getItem('token')) {
    next({
      path: '/login'
    });
  } else {
    next();
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      beforeEnter: requireAuth
    }
  ]
});
