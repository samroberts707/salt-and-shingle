import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Patron from './views/Patron.vue'
import PageNotFound from './views/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/patron/:name',
      name: 'Patron Page',
      component: Patron
    },
    {
      path: '*',
      name: '404 Page',
      component: PageNotFound
    }
  ]
})
