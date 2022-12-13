import Vue from 'vue';
import axios from 'axios';
import { Notify } from 'quasar';
import { LocalStorage } from 'quasar';

if (process.env.PROD) {
  axios.defaults.baseURL = '/';
} else {
  axios.defaults.baseURL = 'http://mypefactcrm.oo:8084/';
}

axios.interceptors.request.use(
  (config) => {
    const token = LocalStorage.getItem('token');
    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

Vue.prototype.$axios = axios;
Vue.prototype.$axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      LocalStorage.remove('token');
      location.href = '/auth/login';
    }
    if (error.response.status === 422) {
      let errors = [];
      let errors_html = '';
      _.forEach(error.response.data.errors, (error, index) => {
        errors[index] = error[0];
        errors_html += error[0] + '<br/>';
      });
      Notify.create({
        message: errors_html,
        html: true,
        type: 'negative',
        timeout: 5000,
      });
      return Promise.reject(errors);
    }
    if (error.response.status === 500) {
      Notify.create({message: error.response.data.message, type: 'negative', icon: 'error'});
    }
    return Promise.reject(error);
  }
});
