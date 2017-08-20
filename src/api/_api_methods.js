import Vue from 'vue';
import app from './../main';

export default {
  get({ url, cb }) {
    Vue
      .http
      .get(url)
      .then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          return false;
        }
        return response.data;
      })
      .then((json) => {
        cb(json);
      })
      .catch((ex) => {
        app.showServerError({
          message: ex,
          consoleMessage: ex
        });
        cb(null);
      });
  },
  post({ url, data, cb }) {
    Vue
      .http
      .post(url, data)
      .then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          return false;
        }
        return response.data;
      })
      .then((json) => {
        cb(json);
      })
      .catch((ex) => {
        app.showServerError({
          message: ex,
          consoleMessage: ex
        });
        cb(null);
      });
  },
  put({ url, data, cb }) {
    Vue
      .http
      .put(url, data)
      .then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          return false;
        }
        return response.data;
      })
      .then((json) => {
        cb(json);
      })
      .catch((ex) => {
        app.showServerError({
          message: ex,
          consoleMessage: ex
        });
        cb(null);
      });
  },
  delete({ url, cb }) {
    Vue
      .http
      .delete(url)
      .then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          return false;
        }
        return response.data;
      })
      .then((json) => {
        cb(json);
      })
      .catch((ex) => {
        app.showServerError({
          message: ex,
          consoleMessage: ex
        });
        cb(null);
      });
  }
};
