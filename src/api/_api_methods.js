import Vue from 'vue'
import app from './../main'

export default {
  get({ url, cb }) {
    return Vue.http
      .get(url)
      .then(response => {
        if (response.status !== 200 && response.status !== 201) {
          return false
        }
        return response.data
      })
      .then(json => {
        cb(json)
      })
      .catch(ex => {
        app.showServerError({
          message: ex,
          consoleMessage: ex
        })
        cb(null)
      })
  },
  post({ url, data, cb }) {
    return Vue.http
      .post(url, data)
      .then(response => {
        if (response.status !== 200 && response.status !== 201) {
          return false
        }
        return response.data
      })
      .then(json => {
        cb(json)
      })
      .catch(ex => {
        app.showServerError({
          message: ex,
          consoleMessage: ex
        })
        cb(null)
      })
  },
  put({ url, data, cb }) {
    return Vue.http
      .put(url, data)
      .then(response => {
        if (response.status !== 200 && response.status !== 201) {
          return false
        }
        return response.data
      })
      .then(json => {
        cb(json)
      })
      .catch(ex => {
        app.showServerError({
          message: ex,
          consoleMessage: ex
        })
        cb(null)
      })
  },
  delete({ url, cb }) {
    return Vue.http
      .delete(url)
      .then(response => {
        if (response.status !== 200 && response.status !== 201) {
          return false
        }
        return response.data
      })
      .then(json => {
        cb(json)
      })
      .catch(ex => {
        app.showServerError({
          message: ex,
          consoleMessage: ex
        })
        cb(null)
      })
  }
}
