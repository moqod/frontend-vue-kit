// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
import App from './App';
import router from './router';
import store from './store';

if (
  process.env.NODE_ENV === 'production' &&
  process.env.RAVEN_KEY &&
  process.env.RAVEN_PROJECT
) {
  Raven
    .config(`https://${process.env.RAVEN_KEY}@sentry.io/${process.env.RAVEN_PROJECT}`)
    .addPlugin(RavenVue, Vue)
    .install();
} else {
  console.log('Raven disabled. Add RAVEN_KEY & RAVEN_PROJECT');
}

Vue.use(VueResource);
Vue.http.options.root = process.env.API_HOST;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
