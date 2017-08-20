import Vue from 'vue';
import store from './../store';
import app from './../main';

export default {
  login(form, callback) {
    if (form) {
      const str = window.btoa(`${form.username}:${form.password}`);
      Vue.http.headers.common.Authorization = `Basic ${str}`;
    }

    Vue
      .http
      .get('login/')
      .then((response) => {
        if (response.status !== 200) {
          return false;
        }
        return response.data;
      })
      .then((json) => {
        localStorage.setItem('token', Vue.http.headers.common.Authorization);
        callback(json);
      })
      .catch((ex) => {
        Vue.http.headers.common.Authorization = false;
        localStorage.removeItem('token');
        store.dispatch('logoutUser');
        app.showServerError({
          message: ex,
          consoleMessage: ex
        });
        callback(null);
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
