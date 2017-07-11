import Vue from 'vue';
import Router from 'vue-router';
import VueHead from 'vue-head';
import Hello from '@/components/Hello';

Vue.use(VueHead);
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
});
