import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home.vue'

import KioskLayout from '../views/kiosk/layout.vue'
import KioskOption from '../views/kiosk/option.vue'
import KioskProduct from '../views/kiosk/product.vue'
import KioskControl from '../views/kiosk/control.vue'
import KioskEvent from '../views/kiosk/event.vue'
import MemberList from '../views/kiosk/member-list.vue'
import PointControl from '../views/kiosk/point-control.vue'

import ShopLayout from '../views/shop/layout.vue'
import SalesDays from '../views/shop/sales-days.vue'
import SalesTimes from '../views/shop/sales-times.vue'
import SalesWeek from '../views/shop/sales-week.vue'
import SalesMonth from '../views/shop/sales-month.vue'
import MachineRemote from '../views/shop/machine-remote.vue'
import MachineRemoteList from '../views/shop/machine-remote-list.vue'
import MachineList from '../views/shop/machine-list.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopLayout,
    children:[
      {
        path: '/shop/salse-days',
        name: 'sales-days',
        component: SalesDays,
      },
      {
        path: '/shop/salse-times',
        name: 'sales-times',
        component: SalesTimes,
      },
      {
        path: '/shop/salse-week',
        name: 'sales-week',
        component: SalesWeek,
      },
      {
        path: '/shop/salse-month',
        name: 'sales-month',
        component: SalesMonth,
      },
      {
        path: '/shop/machine-remote',
        name: 'machine-remote',
        component: MachineRemote
      },
      {
        path: '/shop/machine-remote-list',
        name: 'machine-remote-list',
        component: MachineRemoteList
      },
      {
        path: '/shop/machine-list',
        name: 'machine-list',
        component: MachineList
      },
     
    ]
  },
  {
    path: '/kiosk',
    name: 'kiosk',
    component: KioskLayout,
    children: [
      {
        path: '/kiosk/option',
        name: 'kiosk-option',
        component: KioskOption
      },
      {
        path: '/kiosk/product',
        name: 'kiosk-product',
        component: KioskProduct
      },
      {
        path: '/kiosk/event',
        name: 'kiosk-event',
        component: KioskEvent
      },
      {
        path: '/kiosk/control',
        name: 'kiosk-control',
        component: KioskControl
      },
      {
        path: '/kiosk/member-list',
        name: 'member-list',
        component: MemberList
      },
      {
        path: '/kiosk/point-control',
        name: 'point-control',
        component: PointControl
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
