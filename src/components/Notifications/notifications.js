import Vue from 'vue';
import VueNotifications from 'vue-notifications';
import miniToastr from 'mini-toastr';
// import {i18n} from './../../main';
import router from './../../router';

const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
};

miniToastr.init({ types: toastTypes });

// const errorToString = (obj) => {
//   return JSON.stringify(obj)
// }

function toast({
  title,
  message,
  type,
  timeout,
  consoleMessage,
  cb
}) {
  if (consoleMessage) {
    /* eslint-disable no-console */
    console[type](consoleMessage);
  }

  let messageText = message;

  if (type === 'error') {
    if (message.status === 401 || message.status === 403) {
      router.push('/');
    }
    // title = i18n.messages[i18n.locale][title] || title
    //
    // message = errorToString(message)

    messageText = message.bodyText || message;
  }

  return miniToastr[type](messageText, title, timeout, cb);
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
};

// Activate plugin
Vue.use(VueNotifications, options);
