import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/login.vue'

import ShopLayout from '../views/shop/layout.vue'
import ShopList from '../views/shop/shop-list.vue'
import ShopAdd from '../views/shop/shop-add.vue'
import MemberList from '../views/shop/member-list.vue'
import CalcList from '../views/shop/calc-list.vue'
import CalcHistory from '../views/shop/calc-history.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopLayout,
    children:[
      {
        path: '/shop/shop-list',
        name: 'shop-list',
        component: ShopList,
      },
      {
        path: '/shop/shop-add',
        name: 'shop-add',
        component: ShopAdd,
      },
      {
        path: '/shop/member-list',
        name: 'member-list',
        component: MemberList,
      },
      {
        path: '/shop/calc-history',
        name: 'calc-history',
        component: CalcHistory,
      },
      {
        path: '/shop/calc-list',
        name: 'calc-list',
        component: CalcList,
      },
      
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
