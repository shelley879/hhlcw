// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Home from './page/Home'

import Contact from './page/Contact'
import About from './page/About'

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

new Vue(
  {
    router,
    // ES6新语法，箭头函数
    render: h => h(App)
  }
).$mount('#app')
