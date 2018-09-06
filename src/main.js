// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//初始化css
import './assets/index.css'

//rem.js
import './utils/rem'
Vue.config.productionTip = false

//router
import router from './router/index'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
