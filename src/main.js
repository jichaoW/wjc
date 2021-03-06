// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/app/App'
import router from './router'
import store from './vuex'
import Fastclick from 'fastclick';

import './iconfont/iconfont.css';

Fastclick.attach(document.body);
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
