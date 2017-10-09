import axios from 'axios';
import app from './../main';

axios.defaults.baseURL = process.env.API_HOST;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default {
  get({ url, cb }) {
    axios
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
    axios
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
    axios
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
    axios
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
