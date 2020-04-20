import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home.vue'
import Login from '../views/login.vue'

import KioskLayout from '../views/kiosk/layout.vue'
import KioskOption from '../views/kiosk/option.vue'
import KioskProduct from '../views/kiosk/product.vue'
import KioskControl from '../views/kiosk/control.vue'
import KioskEvent from '../views/kiosk/event.vue'
import MemberList from '../views/kiosk/member-list.vue'
import PointControl from '../views/kiosk/point-control.vue'
import PointPlusList from '../views/kiosk/point-plus-list.vue'
import PointMinusList from '../views/kiosk/point-minus-list.vue'
import snsMarketing from '../views/kiosk/snsMarketing.vue'
import snsMarketingList from '../views/kiosk/snsMarketing-list.vue'
import PointChageList from '../views/kiosk/point-chage-list.vue'
import PointUseList from '../views/kiosk/point-use-list.vue'

import ShopLayout from '../views/shop/layout.vue'
import SalesDays from '../views/shop/sales-days.vue'
import SalesTimes from '../views/shop/sales-times.vue'
import SalesWeek from '../views/shop/sales-week.vue'
import SalesMonth from '../views/shop/sales-month.vue'
import MachineRemote from '../views/shop/machine-remote.vue'
import MachineRemoteList from '../views/shop/machine-remote-list.vue'
import MachineList from '../views/shop/machine-list.vue'
import ShopInfo from '../views/shop/shop-info.vue'

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
      {
        path: '/shop/shop-info',
        name: 'shop-info',
        component: ShopInfo
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
      {
        path: '/kiosk/point-plus-list',
        name: 'point-plus-list',
        component: PointPlusList
      },
      {
        path: '/kiosk/point-minus-list',
        name: 'point-minus-list',
        component: PointMinusList
      },
      {
        path: '/kiosk/snsMarketing.vue',
        name: 'snsMarketing',
        component: snsMarketing
      },
      {
        path: '/kiosk/snsMarketing-list.vue',
        name: 'snsMarketing-list',
        component: snsMarketingList
      },
      {
        path: '/kiosk/point-chage-list',
        name: 'point-chage-list',
        component: PointChageList
      },
      {
        path: '/kiosk/point-use-list',
        name: 'point-use-list',
        component: PointUseList
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
