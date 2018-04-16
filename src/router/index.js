import Vue from 'vue'
import Router from 'vue-router'
import Cart from '../page/Cart/Cart.vue'
import Category from '../page/Category/Category.vue'
import Login from '../page/Login/Login.vue'
import Main from '../page/Main/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/main',
      component: Main
    },
    {
      path: '/',
      redirect: '/main'
    }
  ]
})
