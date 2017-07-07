import Vue from 'vue';

export default {
  logout(callback) {
    const token = Vue.http.headers.common.Authorization || localStorage.getItem('token');

    if (token) {
      Vue
        .http
        .get('logout/', { mode: 'cors' })
        .then((response) => {
          if (response.status !== 200) {
            return false;
          }
          return response.data;
        })
        .then((json) => {
          Vue.http.headers.common.Authorization = false;
          localStorage.removeItem('token');
          callback(json);
        })
        .catch((ex) => {
          console.error('Load countries failed', ex);
          Vue.http.headers.common.Authorization = false;
          localStorage.removeItem('token');
        });
    } else {
      callback(false);
    }
  }
};
