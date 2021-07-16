// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 1. import 加安裝 ( Nav 中 router-link / App.vue 中 router-view )
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 2. 導入元件
import Home from './components/Home/Home'
import History from './components/History/History'

Vue.config.productionTip = false

// 3.把元件定義到 routes
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/history',
    component: History
  }
]

// 4.把 routes 創建到 router 實例
const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  // mode: 'history',
  // 解决路由跳轉後沒置頂問題
  scrollBehavior() {
    return {x: 0, y: 0};
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  // 5. 把 router 實例 掛到根實例
  router
})
