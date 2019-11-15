import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import inViewportDirective from 'vue-in-viewport-directive'

Vue.directive('in-viewport', inViewportDirective)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
