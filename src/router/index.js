import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//异步路由
const theme14 = r => require.ensure([], () => r(require('../views/theme14/theme14')), 'theme14')
const agreement = r => require.ensure([], () => r(require('../views/agreement')), 'agreement')
const loading = r => require.ensure([], () => r(require('../views/loading/loading')), 'loading')
const shop = r => require.ensure([], () => r(require('../views/shop/shop')), 'shop')
export default new Router({
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      component: theme14
    },
    {
      path: '/theme14',
      name: 'theme14',
      component: theme14
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: agreement
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading
    },
    {
      path:'/shop',
      name:'shop',
      component:shop
    }
  ]
})
