import Vue from 'vue';
import api from './_api_methods';

export default {

  login(form, callback) {
    if (form) {
      const str = window.btoa(`${form.username}:${form.password}`);
      Vue.http.headers.common.Authorization = `Basic ${str}`;
    }

    api.get({
      url: 'login/',
      cb: callback
    });
  },
  logout(callback) {
    const token = Vue.http.headers.common.Authorization || localStorage.getItem('token');

    if (token) {
      Vue.http.headers.common.Authorization = false;
      localStorage.removeItem('token');
      callback(false);
    } else {
      callback(false);
    }
  }
};
