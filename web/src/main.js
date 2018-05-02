// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueHighcharts from 'vue-highcharts'
import App from './App'
import router from './router'
// import $ from 'jquery'
// import 'ztree'

Vue.use(BootstrapVue)
Vue.use(VueHighcharts)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
