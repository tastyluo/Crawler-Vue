// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'vue-awesome/icons'
import axios from 'axios'
import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false
Vue.component('icon', Icon)
Vue.prototype.$http = axios
Vue.use(Vuex)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
